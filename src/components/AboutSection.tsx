import React from 'react';
import { BUILDERHOOD_CONFIG } from '../config/builderhoodConfig';
import { Code2, FolderGit2, Palette, Blocks } from 'lucide-react';

export const AboutSection: React.FC = () => {
  // Icon mapper helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-6 h-6 text-emerald-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-emerald-400" />;
      case 'Blocks':
        return <Blocks className="w-6 h-6 text-emerald-400" />;
      default:
        return <Code2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-wider">
            <span>// ABOUT THE PROJECT</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            What is BuilderHood?
          </h2>

          <p className="text-lg text-slate-300 border-l-2 border-emerald-500 pl-4 py-1 italic font-medium">
            "{BUILDERHOOD_CONFIG.aboutQuote}"
          </p>

          <p className="text-sm text-slate-400 leading-relaxed">
            We are bringing together developers, creators, hackers, open-source contributors, and builders on Robinhood Chain. No empty hype — just authentic recognition for those who shape software and decentralized protocols.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUILDERHOOD_CONFIG.aboutCards.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all duration-200 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(card.icon)}
                </div>
                
                <h3 className="text-lg font-bold text-slate-100 font-sans">
                  {card.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-2 font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-1">
                <span>BUILDER_ROLE</span>
                <span className="text-emerald-500">//</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
