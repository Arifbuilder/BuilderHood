import React, { useState } from 'react';
import { isSupabaseConfigured } from '../lib/supabase';
import { Database, X, Copy, Check, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';

interface DatabaseNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DatabaseNoticeModal: React.FC<DatabaseNoticeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sqlSchema = `-- BuilderHood Supabase Applications Table
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  application_type VARCHAR(10) DEFAULT 'GTD+WL' NOT NULL,
  wallet_address TEXT NOT NULL,
  x_username TEXT NOT NULL,
  github_url TEXT,
  comment_link TEXT NOT NULL,
  tasks_completed JSONB DEFAULT '{}'::jsonb,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public application submission" 
ON public.applications FOR INSERT TO anon, authenticated WITH CHECK (true);`;

  const copySql = () => {
    navigator.clipboard.writeText(sqlSchema);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-left flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-slate-100 font-sans text-base">
              Supabase Database Setup & Status
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300 font-sans">
          
          {/* Status Banner */}
          <div className={`p-4 rounded-xl border flex items-start gap-3 font-mono ${
            isSupabaseConfigured
              ? 'bg-emerald-950/50 border-emerald-800 text-emerald-300'
              : 'bg-amber-950/40 border-amber-800/60 text-amber-300'
          }`}>
            {isSupabaseConfigured ? (
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1">
              <div className="font-bold text-sm">
                Status: {isSupabaseConfigured ? 'Supabase Connected (Live Database)' : 'Demo / Local Simulation Mode Active'}
              </div>
              <p className="text-[11px] opacity-90 leading-relaxed font-sans">
                {isSupabaseConfigured
                  ? 'Your application forms are directly connected to your Supabase PostgreSQL database. Submissions are persisted safely with RLS policies enabled.'
                  : 'Form submissions currently simulate database operations in local memory with validation feedback. Connect your Supabase project below to save real live submissions.'}
              </p>
            </div>
          </div>

          {/* Quick Setup Instructions */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-100 font-mono text-xs uppercase tracking-wider">
              1. Environment Variables Setup
            </h4>
            <p className="text-slate-400">
              Create a <code className="text-emerald-400 font-mono bg-slate-950 px-1 py-0.5 rounded">.env</code> file in your project root with your Supabase credentials:
            </p>
            <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto">
{`VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here`}
            </pre>
          </div>

          {/* SQL Schema Copy */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-100 font-mono text-xs uppercase tracking-wider">
                2. Execute SQL in Supabase Editor
              </h4>
              <button
                onClick={copySql}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-[10px] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? 'Copied SQL!' : 'Copy SQL'}</span>
              </button>
            </div>

            <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[10px] text-emerald-400/90 overflow-x-auto max-h-48">
              {sqlSchema}
            </pre>
          </div>

          <div className="pt-2 text-slate-500 font-mono text-[10px] flex items-center justify-between border-t border-slate-800">
            <span>SQL Schema file is also saved in <code className="text-slate-400">supabase/schema.sql</code></span>
            <a
              href="https://app.supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Open Supabase</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold transition-colors"
          >
            Close Notice
          </button>
        </div>

      </div>
    </div>
  );
};
