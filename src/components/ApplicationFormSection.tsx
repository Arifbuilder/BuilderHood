import React, { useState } from 'react';
import { submitApplication } from '../lib/supabase';
import type { ApplicationPayload } from '../lib/supabase';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { GitHubIcon } from './Icons';

interface ApplicationFormSectionProps {
  onSubmit?: (data: {
    walletAddress: string;
    xUsername: string;
    githubUrl: string;
    commentLink: string;
    tasks: {
      follow: boolean;
      like: boolean;
      repost: boolean;
      comment: boolean;
      share: boolean;
      postLike: boolean;
    };
  }) => void;
}

/* ============================================
   CAMPAIGN SOCIAL LINKS
============================================ */
const X_ACCOUNT = '@BuilderHooobds';
const X_ACCOUNT_LINK = 'https://x.com/BuilderHooobds';
const POST_LINK = 'https://x.com/BuilderHooobds/status/2095171319012941958';

/* ============================================
   APPLICATION FORM SECTION
============================================ */
export const ApplicationFormSection: React.FC<
  ApplicationFormSectionProps
> = ({ onSubmit }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [xUsername, setXUsername] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [commentLink, setCommentLink] = useState('');

  const [tasks, setTasks] = useState({
    follow: false,
    like: false,
    repost: false,
    comment: false,
    share: false,
    postLike: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  /* ============================================
     CHECK ONLY THE 4 DISPLAYED TASKS
  ============================================ */

  const requiredTasks = [
    tasks.follow,
    tasks.like,
    tasks.repost,
    tasks.comment,
  ];

  const allTasksCompleted = requiredTasks.every(
    (value) => value === true
  );

  const completedTaskCount = requiredTasks.filter(Boolean).length;

  /* ============================================
     CHECK COMPLETE FORM
  ============================================ */

  const formCompleted =
    walletAddress.trim() !== '' &&
    xUsername.trim() !== '' &&
    commentLink.trim() !== '' &&
    allTasksCompleted;

  /* ============================================
     UPDATE TASK
  ============================================ */
  const updateTask = (task: keyof typeof tasks) => {
    setTasks((prev) => ({
      ...prev,
      [task]: !prev[task],
    }));
  };

  /* ============================================
     SUBMIT FORM TO SUPABASE / BACKEND
  ============================================ */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const cleanWallet = walletAddress.trim();

    if (!cleanWallet) {
      setErrorMsg('Please enter your EVM wallet address.');
      return;
    }

    if (!/^0x[a-fA-F0-9]{40}$/.test(cleanWallet)) {
      setErrorMsg(
        'Please enter a valid EVM wallet address starting with 0x (42 characters).'
      );
      return;
    }

    if (!xUsername.trim()) {
      setErrorMsg('Please enter your X username.');
      return;
    }

    /* ============================================
       FIXED: CHECK ONLY 4 REQUIRED TASKS
    ============================================ */
    if (!allTasksCompleted) {
      setErrorMsg(
        'Please complete all 4 required social tasks below.'
      );
      return;
    }

    if (!commentLink.trim()) {
      setErrorMsg(
        'Please paste your X comment/reply link as proof.'
      );
      return;
    }

    if (
      githubUrl.trim() &&
      !githubUrl.trim().includes('github.com')
    ) {
      setErrorMsg(
        'Please enter a valid GitHub URL (e.g. https://github.com/your-username).'
      );
      return;
    }

    setLoading(true);

    const payload: ApplicationPayload = {
      application_type: 'GTD+WL',
      wallet_address: cleanWallet,
      x_username: xUsername.trim().replace(/^@/, ''),
      github_url: githubUrl.trim() || undefined,
      comment_link: commentLink.trim(),
      tasks_completed: tasks,
    };

    try {
      const res = await submitApplication(payload);

      if (res.success) {
        setIsDemoMode(Boolean(res.isDemoMode));
        setSubmitted(true);

        onSubmit?.({
          walletAddress: cleanWallet,
          xUsername: xUsername.trim(),
          githubUrl: githubUrl.trim(),
          commentLink: commentLink.trim(),
          tasks,
        });
      } else {
        setErrorMsg(
          res.message ||
            'Submission failed. Please check your details and try again.'
        );
      }
    } catch (err: any) {
      setErrorMsg(
        'An unexpected error occurred during submission. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  /* ============================================
     SUCCESS SCREEN
  ============================================ */
  if (submitted) {
    return (
      <section
        id="application"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080b11] border-t border-slate-800/80"
      >
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-sm space-y-6">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-100">
                Application Received!
              </h2>

              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Your GTD + WL application has been registered successfully.
              </p>
            </div>

            {githubUrl ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 font-mono text-xs">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />

                <span>
                  GitHub Profile Attached — GTD Priority Allocation Active!
                </span>
              </div>
            ) : null}

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-amber-400/90 max-w-lg mx-auto space-y-1 text-left">

              <div className="flex items-center gap-2 font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4" />

                <span>
                  MANUAL VERIFICATION PROCESS
                </span>
              </div>

              <p className="text-slate-400 font-sans text-[11px] leading-relaxed">
                Our team manually verifies submitted wallet addresses, X task links, and GitHub profiles before approving GTD & Whitelist mint spots.
              </p>
              {isDemoMode && (
                <p className="text-[10px] text-emerald-400 pt-2 border-t border-slate-800 font-mono">
                  [Dev Notice]: Database in local simulation mode. Add your Supabase credentials to <code className="bg-slate-900 px-1 py-0.5 rounded text-slate-300">.env</code> to persist live submissions in PostgreSQL.
                </p>
              )}
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setWalletAddress('');
                setXUsername('');
                setGithubUrl('');
                setCommentLink('');

                setTasks({
                  follow: false,
                  like: false,
                  repost: false,
                  comment: false,
                  share: false,
                  postLike: false,
                });
              }}
              className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs transition-colors cursor-pointer"
            >
              Submit Another Application
            </button>

          </div>
        </div>
      </section>
    );
  }

  /* ============================================
     MAIN FORM
  ============================================ */
  return (
    <section
      id="application"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080b11] border-t border-slate-800/80"
    >
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 space-y-3">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
            <span>GTD + WL REGISTRATION PORTAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Apply for BuilderHood
          </h2>

          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Complete the required information and social tasks to apply for GTD + Whitelist spot allocation.
          </p>

        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >

          {/* Validation Error Alert */}
          {errorMsg && (
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs font-mono flex items-start gap-3">

              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />

              <div>
                <strong className="font-semibold block mb-0.5">
                  Application Error
                </strong>

                <span>{errorMsg}</span>
              </div>

            </div>
          )}

          {/* ====================================
              01 WALLET ADDRESS
          ==================================== */}
          <div className="rounded-xl border border-slate-800 bg-[#0c1017] p-6 shadow-xl">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  01
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-100">
                Wallet Details{' '}
                <span className="text-emerald-400">*</span>
              </h3>

            </div>

            <label className="block text-xs font-mono text-slate-300 font-medium mb-2">
              Robinhood / EVM Wallet Address
            </label>

            <input
              type="text"
              value={walletAddress}
              onChange={(e) =>
                setWalletAddress(e.target.value)
              }
              placeholder="0x..."
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs placeholder:text-slate-600 outline-none focus:border-emerald-500/60 transition-colors"
            />

            <p className="mt-2 text-[11px] text-slate-500 font-mono">
              Enter your address manually. No wallet connection needed.
            </p>

          </div>

          {/* ====================================
              02 X ACCOUNT
          ==================================== */}
          <div className="rounded-xl border border-slate-800 bg-[#0c1017] p-6 shadow-xl">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  02
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-100">
                X (Twitter) Account{' '}
                <span className="text-emerald-400">*</span>
              </h3>

            </div>

            <label className="block text-xs font-mono text-slate-300 font-medium mb-2">
              X Username
            </label>

            <div className="relative">

              <span className="absolute left-3.5 top-3 text-slate-500 font-mono text-xs">
                @
              </span>

              <input
                type="text"
                value={xUsername}
                onChange={(e) =>
                  setXUsername(e.target.value)
                }
                placeholder="yourusername"
                required
                className="w-full pl-8 pr-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs placeholder:text-slate-600 outline-none focus:border-emerald-500/60 transition-colors"
              />

            </div>

          </div>

          {/* ====================================
              03 GITHUB LINK FIELD
          ==================================== */}
          <div className="rounded-xl border border-slate-800 bg-[#0c1017] p-6 shadow-xl space-y-4">

            <div className="flex items-center gap-3 mb-2">

              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <GitHubIcon className="w-4 h-4 text-emerald-400" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-100 flex items-center gap-2">

                  <span>
                    GitHub Profile / Repository Link
                  </span>

                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    GTD BOOST
                  </span>

                </h3>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start pt-1">

              <div className="md:col-span-7 space-y-2">

                <label className="block text-xs font-mono text-slate-300 font-medium">
                  Share Your GitHub Link{' '}
                  <span className="text-slate-500 font-normal">
                    (Optional / Recommended)
                  </span>
                </label>

                <div className="relative">

                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) =>
                      setGithubUrl(e.target.value)
                    }
                    placeholder="https://github.com/yourusername"
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs placeholder:text-slate-600 outline-none focus:border-emerald-500/60 transition-colors"
                  />

                </div>

                <p className="text-[11px] text-slate-500 font-mono">
                  Share your GitHub profile, open-source repo, or project repository.
                </p>

              </div>

              <div className="md:col-span-5 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 space-y-2 relative overflow-hidden group">

                <div className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-400">

                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />

                  <span>
                    GTD Special Privilege
                  </span>

                </div>

                <p className="text-xs text-slate-300 leading-snug font-sans">
                  Active GitHub users get{' '}
                  <strong className="text-emerald-400">
                    special privilege & priority allocation
                  </strong>{' '}
                  in Guaranteed (GTD) mint selection!
                </p>

                <div className="pt-1 text-[10px] font-mono text-emerald-400/80 flex items-center gap-1">

                  <span>
                    Show us what you ship
                  </span>

                  <ExternalLink className="w-3 h-3" />

                </div>

              </div>

            </div>
          </div>

          {/* ====================================
              04 REQUIRED SOCIAL TASKS
          ==================================== */}
          <div className="rounded-xl border border-slate-800 bg-[#0c1017] p-6 shadow-xl">

            <div className="flex items-center justify-between mb-5">

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">

                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    04
                  </span>

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-slate-100">
                    Required X Tasks{' '}
                    <span className="text-emerald-400">*</span>
                  </h3>

                  <p className="text-xs text-slate-500">
                    Open each link and complete the required action.
                  </p>

                </div>

              </div>

              <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
                {completedTaskCount}/4 Complete
              </span>

            </div>

            <div className="space-y-3">

              <TaskRow
                checked={tasks.follow}
                onChange={() =>
                  updateTask('follow')
                }
                title={`Follow ${X_ACCOUNT}`}
                description="Follow the official BuilderHood X account."
                action="Open X"
                href={X_ACCOUNT_LINK}
              />

              <TaskRow
                checked={tasks.like}
                onChange={() =>
                  updateTask('like')
                }
                title="Like the campaign post"
                description="Like the designated BuilderHood campaign post."
                action="Like"
                href={POST_LINK}
              />

              <TaskRow
                checked={tasks.repost}
                onChange={() =>
                  updateTask('repost')
                }
                title="Repost the campaign post"
                description="Repost the designated BuilderHood campaign post."
                action="Repost"
                href={POST_LINK}
              />

              <TaskRow
                checked={tasks.comment}
                onChange={() =>
                  updateTask('comment')
                }
                title="Comment on the campaign post"
                description="Leave a meaningful comment on the designated post."
                action="Comment"
                href={POST_LINK}
              />

            </div>
          </div>

          {/* ====================================
              05 PROOF OF COMMENT LINK
          ==================================== */}
          <div className="rounded-xl border border-slate-800 bg-[#0c1017] p-6 shadow-xl">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">

                <span className="text-xs font-mono text-emerald-400 font-bold">
                  05
                </span>

              </div>

              <h3 className="text-lg font-semibold text-slate-100">
                Proof of Comment{' '}
                <span className="text-emerald-400">*</span>
              </h3>

            </div>

            <label className="block text-xs font-mono text-slate-300 font-medium mb-2">
              X Comment / Reply Link
            </label>

            <input
              type="url"
              value={commentLink}
              onChange={(e) =>
                setCommentLink(e.target.value)
              }
              placeholder="https://x.com/yourusername/status/..."
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 font-mono text-xs placeholder:text-slate-600 outline-none focus:border-emerald-500/60 transition-colors"
            />

            <p className="mt-2 text-[11px] text-slate-500 font-mono">
              Paste the direct link to your X comment or reply for verification.
            </p>

          </div>

          {/* Manual Verification Warning */}
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3">

            <p className="text-xs font-mono text-amber-400 text-center">
              ⚠ All submitted wallet addresses, task completions & GitHub links will be manually verified.
            </p>

          </div>

          {/* GTD + WL Indicators */}
          <div className="grid grid-cols-2 gap-3 font-mono">

            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3.5 text-center">

              <span className="text-xs text-slate-400">
                STATUS
              </span>

              <p className="text-sm font-semibold text-slate-200 mt-0.5">
                Whitelist (WL)
              </p>

            </div>

            <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/30 p-3.5 text-center">

              <span className="text-xs text-emerald-400">
                PRIORITY
              </span>

              <p className="text-sm font-semibold text-slate-100 mt-0.5">
                Guaranteed (GTD)
              </p>

            </div>

          </div>

          {/* ====================================
              FIXED SUBMIT BUTTON
          ==================================== */}

          <button
            type="submit"
            disabled={loading || !formCompleted}
            className={`w-full py-4 rounded-xl font-mono font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all ${
              formCompleted && !loading
                ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 cursor-pointer emerald-glow'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700/50'
            }`}
          >

            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />

                <span>
                  SUBMITTING APPLICATION...
                </span>
              </>
            ) : formCompleted ? (
              <>
                <Send className="w-4 h-4" />

                <span>
                  SUBMIT GTD + WL APPLICATION
                </span>
              </>
            ) : (
              <span>
                COMPLETE REQUIRED FIELDS ({completedTaskCount}/4)
              </span>
            )}

          </button>

        </form>

      </div>
    </section>
  );
};


/* ============================================
   TASK ROW COMPONENT
============================================ */

interface TaskRowProps {
  checked: boolean;
  onChange: () => void;
  title: string;
  description: string;
  action: string;
  href: string;
}

const TaskRow: React.FC<TaskRowProps> = ({
  checked,
  onChange,
  title,
  description,
  action,
  href,
}) => {

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-lg border transition-colors ${
        checked
          ? 'border-emerald-500/30 bg-emerald-500/5'
          : 'border-slate-800 bg-slate-950/40 hover:border-slate-700'
      }`}
    >

      {/* CHECKBOX */}

      <button
        type="button"
        onClick={onChange}
        aria-label={`Mark ${title} as complete`}
        className={`flex-shrink-0 w-6 h-6 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
          checked
            ? 'bg-emerald-500 border-emerald-500 text-slate-950 font-bold'
            : 'border-slate-700 bg-slate-900 text-transparent hover:border-emerald-500/50'
        }`}
      >
        ✓
      </button>

      {/* TASK DETAILS */}

      <div className="flex-1 min-w-0">

        <div
          className={`text-sm font-medium ${
            checked
              ? 'text-emerald-400'
              : 'text-slate-200'
          }`}
        >
          {title}
        </div>

        <div className="text-xs text-slate-500 mt-0.5">
          {description}
        </div>

      </div>

      {/* ACTION LINK */}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (!checked) {
            onChange();
          }
        }}
        className={`flex-shrink-0 px-3 py-1.5 rounded-md border text-xs font-mono transition-colors ${
          checked
            ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5'
            : 'border-slate-700 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40'
        }`}
      >
        {checked ? '✓ Done' : action}
      </a>

    </div>
  );
};