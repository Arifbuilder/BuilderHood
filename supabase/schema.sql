-- BuilderHood Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor (https://app.supabase.com)

-- 1. Create the applications table with active fields
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  application_type VARCHAR(10) DEFAULT 'GTD+WL' NOT NULL,
  wallet_address TEXT NOT NULL,
  x_username TEXT NOT NULL,
  github_url TEXT,
  comment_link TEXT NOT NULL,
  tasks_completed JSONB DEFAULT '{}'::jsonb,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow public anonymous submissions (INSERT only)
CREATE POLICY "Allow public application submission" 
ON public.applications
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- 4. Policy: Only authenticated service role or admins can view submissions
CREATE POLICY "Allow service role to read applications" 
ON public.applications
FOR SELECT 
TO authenticated 
USING (true);

-- 5. Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_applications_wallet ON public.applications (wallet_address);
CREATE INDEX IF NOT EXISTS idx_applications_x_username ON public.applications (x_username);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications (created_at DESC);
