import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApplicationFormSection } from '../components/ApplicationFormSection';
import { ArrowLeft, Sparkles } from 'lucide-react';

export const ApplyPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-8 sm:py-12 bg-gradient-to-b from-[#080b11] via-[#0b0f19] to-[#080b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back Button */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 font-mono text-xs transition-all cursor-pointer group shadow-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-emerald-400" />
            <span>Back to Main Page</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL WL & GTD PORTAL</span>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="relative">
          <ApplicationFormSection />
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
