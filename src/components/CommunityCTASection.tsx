import React from 'react';
import { BUILDERHOOD_CONFIG } from '../config/builderhoodConfig';
import { ArrowRight, MessageSquare, Terminal } from 'lucide-react';
import { XIcon } from './Icons';

interface CommunityCTAProps {
  onApplyWL: () => void;
}

export const CommunityCTASection: React.FC<CommunityCTAProps> = ({ onApplyWL }) => {
  return (
    <section className="py-16 md:py-24 bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 text-center space-y-6 relative overflow-hidden emerald-glow-sm">
          
          {/* Background grid accents */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono">
              <Terminal className="w-3.5 h-3.5" />
              <span>BUILDERHOOD COMMUNITY GATEWAY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              Ready to build?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg">
              "Your next project could start here."
            </p>
          </div>

          {/* 3 Main Action Buttons */}
          <div className="relative z-10 pt-2 flex flex-wrap justify-center gap-4">
            {/* Apply for WL */}
            <button
              onClick={onApplyWL}
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5 emerald-glow cursor-pointer"
            >
              <span>Apply for WL</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Follow on X */}
            <a
              href={BUILDERHOOD_CONFIG.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-mono text-sm flex items-center gap-2 transition-all"
            >
              <XIcon className="w-4 h-4 text-emerald-400" />
              <span>Follow on X</span>
            </a>

            {/* Join Community */}
            <a
              href="https://discord.gg/r4v7JxS5w"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-mono text-sm flex items-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Join Community</span>
            </a>
          </div>

          <div className="relative z-10 pt-4 text-xs font-mono text-slate-500">
            BUILDERHOOD // ROBINHOOD CHAIN COMMUNITY PASS 2026
          </div>

        </div>
      </div>
    </section>
  );
};
