import React from 'react';
import { BUILDERHOOD_CONFIG } from '../config/builderhoodConfig';
import { ArrowRight, Terminal, Code2, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onApplyWL: () => void;
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onApplyWL, onGetStarted }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern bg-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow"></span>
              <span>{BUILDERHOOD_CONFIG.statusBadge}</span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-none">
                {BUILDERHOOD_CONFIG.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">
                {BUILDERHOOD_CONFIG.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {BUILDERHOOD_CONFIG.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 w-full sm:w-auto">
              <button
                onClick={onApplyWL}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 emerald-glow cursor-pointer"
              >
                <span>Apply for WL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGetStarted}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-mono text-sm tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <Terminal className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            {/* Small Footer Text */}
            <div className="pt-4 border-t border-slate-800/80 w-full flex items-center gap-2 text-xs font-mono text-slate-400">
              <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{BUILDERHOOD_CONFIG.smallHeroText}</span>
            </div>
          </div>

          {/* Right Hero Column: NFT Card Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
              
              {/* Card Header Tag */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>BUILDER // #0001</span>
                </div>
                <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  GENESIS PASS
                </span>
              </div>

              {/* Placeholder NFT Image Container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-6 text-center group">
                <img
                  src={BUILDERHOOD_CONFIG.collectionPlaceholderImage}
                  alt="BuilderHood NFT Preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Visual Overlay Graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Overlaid Technical Badge */}
                <div className="relative z-10 p-4 rounded-lg bg-slate-950/80 border border-slate-800/80 backdrop-blur-sm space-y-2 max-w-[85%]">
                  <div className="inline-flex p-2 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="font-mono text-xs font-semibold text-slate-200">
                    ROBINHOOD CHAIN BUILDER
                  </div>
                  <div className="font-mono text-[10px] text-slate-400">
                    Contract: 0x88...3A19 (Coming Soon)
                  </div>
                </div>
              </div>

              {/* Card Meta Description Footer */}
              <div className="pt-4 flex items-center justify-between font-mono text-xs">
                <div>
                  <div className="text-slate-500 text-[10px]">COLLECTION</div>
                  <div className="text-slate-200 font-semibold">BuilderHood Genesis</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-500 text-[10px]">SUPPLY</div>
                  <div className="text-emerald-400 font-bold">{BUILDERHOOD_CONFIG.supply} ITEMS</div>
                </div>
              </div>

              {/* Decorative Corner Bracket */}
              <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-700 pointer-events-none">
                {"</>"}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
