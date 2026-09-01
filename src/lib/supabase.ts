import { createClient } from '@supabase/supabase-js';

// Retrieve environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if credentials are properly configured
export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('https://')
);

// Create Supabase client conditionally to avoid crashing if env vars are unpopulated
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ApplicationTaskState {
  follow: boolean;
  like: boolean;
  repost: boolean;
  comment: boolean;
  share: boolean;
  postLike: boolean;
}

export interface ApplicationPayload {
  application_type?: string;
  wallet_address: string;
  x_username: string;
  github_url?: string;
  comment_link: string;
  tasks_completed: ApplicationTaskState;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  isDemoMode?: boolean;
  data?: any;
  error?: string;
}

// In-memory duplicate check for local fallback mode
const localSubmissionsCache = new Set<string>();

/**
 * Submit an application to Supabase or handle fallback in demo mode
 */
export async function submitApplication(
  payload: ApplicationPayload
): Promise<SubmissionResponse> {
  const cleanWallet = payload.wallet_address.trim().toLowerCase();
  const cleanX = payload.x_username.trim().replace(/^@/, '');

  const cacheKey = `${cleanWallet}:${cleanX}`;

  // Prevent duplicate submissions during the current browser session
  if (localSubmissionsCache.has(cacheKey)) {
    return {
      success: false,
      message:
        'You have already submitted an application with this wallet address and X handle.',
      error: 'DUPLICATE_SUBMISSION',
    };
  }

  // ==========================================
  // SUPABASE MODE
  // ==========================================
  if (isSupabaseConfigured && supabase) {
    try {
      const applicationData = {
        application_type: payload.application_type || 'GTD+WL',
        wallet_address: cleanWallet,
        x_username: cleanX,
        github_url: payload.github_url?.trim() || null,
        comment_link: payload.comment_link.trim(),
        tasks_completed: payload.tasks_completed,
        status: 'pending',
      };

      console.log('Submitting application to Supabase:', applicationData);

      // IMPORTANT:
      // Do NOT use .select() here.
      // Public users have INSERT permission, but not necessarily SELECT permission.
      const { error } = await supabase
        .from('applications')
        .insert([applicationData]);

      if (error) {
        console.error('Supabase submission error:', error);

        return {
          success: false,
          message: error.message || 'Failed to submit application.',
          error: error.code,
        };
      }

      // Submission succeeded
      localSubmissionsCache.add(cacheKey);

      console.log('✅ Application successfully submitted to Supabase');

      return {
        success: true,
        message:
          'GTD + WL Application received! We will manually verify your tasks and GitHub profile.',
        isDemoMode: false,
      };
    } catch (err: any) {
      console.error('Unexpected Supabase error:', err);

      return {
        success: false,
        message:
          err?.message ||
          'An unexpected error occurred while processing your submission.',
        error: 'UNEXPECTED_ERROR',
      };
    }
  }

  // ==========================================
  // DEMO MODE
  // ==========================================
  console.log(
    '[BuilderHood Local Dev Mode] Received application submission:',
    payload
  );

  localSubmissionsCache.add(cacheKey);

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message:
      'GTD + WL Application received! We will manually verify your tasks and GitHub profile.',
    isDemoMode: true,
    data: {
      ...payload,
      id: 'demo-' + Math.random().toString(36).substring(2, 9),
      created_at: new Date().toISOString(),
      status: 'pending',
    },
  };
}