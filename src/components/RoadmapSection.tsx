import React from 'react';
import { BUILDERHOOD_CONFIG } from '../config/builderhoodConfig';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-[#0c1017] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="font-mono text-xs text-emerald-400 tracking-wider">
            <span>// PROJECT PHASES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Roadmap & Milestones
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Our multi-stage deployment plan for building on Robinhood Chain.
          </p>
        </div>

        {/* 4 Stage Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUILDERHOOD_CONFIG.roadmap.map((stage, index) => {
            const isCompleted = stage.status === 'completed';
            const isInProgress = stage.status === 'in-progress';

            return (
              <div
                key={index}
                className={`p-6 rounded-xl border transition-all text-left flex flex-col justify-between space-y-6 ${
                  isInProgress
                    ? 'bg-slate-900/90 border-emerald-500/50 shadow-lg'
                    : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      {stage.step}
                    </span>

                    {/* Status Badge */}
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold flex items-center gap-1 ${
                        isCompleted
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : isInProgress
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {isInProgress && <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></span>}
                      <span>{stage.status.toUpperCase()}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-100 font-sans">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 font-mono text-[10px] text-slate-600 border-t border-slate-800/60">
                  PHASE 0{index + 1} // ROBINHOOD CHAIN
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
