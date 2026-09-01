import React from 'react';
import { BUILDERHOOD_CONFIG } from '../config/builderhoodConfig';
import { MessageSquare } from 'lucide-react';
import { XIcon, GitHubIcon } from './Icons';

interface FooterProps {
  onApplyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onApplyClick }) => {
  return (
    <footer className="bg-[#05070c] border-t border-slate-800/80 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3 text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-emerald-500/40 flex items-center justify-center overflow-hidden shrink-0 shadow-sm shadow-emerald-500/20">
                <img src="/BuilderHood.png" alt="BuilderHood Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-extrabold text-base text-slate-100 font-sans tracking-tight">
                {BUILDERHOOD_CONFIG.name}
              </span>
            </div>
            
            <p className="text-slate-400 text-xs font-sans max-w-sm">
              Built for builders on Robinhood Chain. An authentic community for developers, creators, hackers, and open-source contributors.
            </p>

            <div className="text-[11px] text-emerald-400 pt-1">
              ROBINHOOD CHAIN COMMUNITY PROTOCOL
            </div>
          </div>

          {/* Nav & Social Links */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
            
            {/* Column 1: Ecosystem */}
            <div className="space-y-2">
              <div className="text-slate-200 font-semibold text-xs font-sans uppercase tracking-wider">
                Ecosystem
              </div>
              <ul className="space-y-1.5 text-slate-400 font-sans text-xs">
                <li>
                  <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-emerald-400 transition-colors">NFT Collection</a>
                </li>
                <li>
                  <a href="#roadmap" className="hover:text-emerald-400 transition-colors">Roadmap</a>
                </li>
              </ul>
            </div>

            {/* Column 2: Applications */}
            <div className="space-y-2">
              <div className="text-slate-200 font-semibold text-xs font-sans uppercase tracking-wider">
                Applications
              </div>
              <ul className="space-y-1.5 text-slate-400 font-sans text-xs">
                <li>
                  <button onClick={onApplyClick} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                    WL Application
                  </button>
                </li>
                <li>
                  <button onClick={onApplyClick} className="hover:text-emerald-400 transition-colors text-left cursor-pointer">
                    GTD Application
                  </button>
                </li>
                <li>
                  <a href="#quests" className="hover:text-emerald-400 transition-colors">
                    Social Quests
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Community */}
            <div className="space-y-2">
              <div className="text-slate-200 font-semibold text-xs font-sans uppercase tracking-wider">
                Community
              </div>
              <ul className="space-y-1.5 text-slate-400 font-sans text-xs">
                <li>
                  <a href={BUILDERHOOD_CONFIG.twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <XIcon className="w-3.5 h-3.5" />
                    <span>X (Twitter)</span>
                  </a>
                </li>
                <li>
                  <a href={BUILDERHOOD_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href={BUILDERHOOD_CONFIG.discordUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Discord / Guild</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 BuilderHood. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built by builders. Made for builders.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
