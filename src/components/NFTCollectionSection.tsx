import React from 'react';
import { BUILDERHOOD_CONFIG } from '../config/builderhoodConfig';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export const NFTCollectionSection: React.FC = () => {
  const collectionSpecs = [
    { label: 'Collection Name', value: BUILDERHOOD_CONFIG.collectionName },
    { label: 'Total Supply', value: `${BUILDERHOOD_CONFIG.supply} Passports` },
    { label: 'Network', value: BUILDERHOOD_CONFIG.network },
    { label: 'Mint Status', value: BUILDERHOOD_CONFIG.mintStatus, isStatus: true },
  ];

  return (
    <section id="collection" className="py-16 md:py-24 bg-[#0c1017] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12">
          <div className="font-mono text-xs text-emerald-400 tracking-wider">
            <span>// ON-CHAIN COMMUNITY PASS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            The BuilderHood Collection
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            A limited-edition developer passport granting access to Robinhood Chain builder perks, open-source grants, and community governance.
          </p>
        </div>

        {/* Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          
          {/* Left: NFT Preview Image */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
              <img
                src={BUILDERHOOD_CONFIG.collectionPlaceholderImage}
                alt="BuilderHood Collection NFT"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-800">
                <span className="text-slate-300 font-medium">GENESIS EDITION</span>
                <span className="text-emerald-400 font-bold">1/1000</span>
              </div>
            </div>
          </div>

          {/* Right: Collection Metadata & Specs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/60 inline-block">
                ROBINHOOD CHAIN ERC-721
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100">
                {BUILDERHOOD_CONFIG.collectionName}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {BUILDERHOOD_CONFIG.futureMintInfo}
              </p>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {collectionSpecs.map((spec, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 font-mono"
                >
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">
                    {spec.label}
                  </div>
                  <div className={`text-sm font-semibold ${spec.isStatus ? 'text-emerald-400 flex items-center gap-1.5' : 'text-slate-200'}`}>
                    {spec.isStatus && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>}
                    <span>{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Perks list */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Pass Holder Benefits:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Exclusive Discord Developer Guild Role</span>
                </div>
              </div>
            </div>

            {/* Action Link Button */}
            <div className="pt-2">
              <a
                href="https://opensea.io/collection/builderonrobinhood"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-semibold border border-slate-700 transition-colors"
              >
                <span>View Collection</span>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
