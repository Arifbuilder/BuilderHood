import React from 'react';
import { BUILDERHOOD_CONFIG } from '../config/builderhoodConfig';
import { Hammer, Terminal, Users, GitPullRequest } from 'lucide-react';

export const WhyBuilderHoodSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'GitPullRequest':
        return <GitPullRequest className="w-5 h-5 text-emerald-400" />;
      default:
        return <Hammer className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#080b11] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="font-mono text-xs text-emerald-400 tracking-wider">
            <span>// CORE PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Why BuilderHood?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A developer-first philosophy built around four foundational commitments.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUILDERHOOD_CONFIG.whyBuilderHood.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all text-left space-y-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                {getIcon(item.icon)}
              </div>
              
              <h3 className="text-lg font-bold text-slate-100 font-sans">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {item.description}
              </p>

              <div className="font-mono text-[10px] text-slate-600 pt-2 border-t border-slate-800/60">
                0{index + 1} // PILLAR
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
