import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { NFTCollectionSection } from './components/NFTCollectionSection';
import { ApplicationFormSection } from './components/ApplicationFormSection';


import { WhyBuilderHoodSection } from './components/WhyBuilderHoodSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CommunityCTASection } from './components/CommunityCTASection';
import { Footer } from './components/Footer';
import { DatabaseNoticeModal } from './components/DatabaseNoticeModal';

export const App: React.FC = () => {
  const [dbModalOpen, setDbModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenDatabaseModal={() => setDbModalOpen(true)}
        onApplyClick={() => scrollToSection('application')}
      />

      {/* Main Content Stream */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onApplyWL={() => scrollToSection('application')}
          onGetStarted={() => scrollToSection('about')}
        />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. NFT / Collection Section */}
        <NFTCollectionSection />

        {/* 4. Application Form Section (WL / GTD with Supabase integration) */}
        <ApplicationFormSection />

     


    

        {/* 8. Why BuilderHood Section */}
        <WhyBuilderHoodSection />

        {/* 9. Roadmap Section */}
        <RoadmapSection />

        {/* 10. Community CTA Section */}
        <CommunityCTASection onApplyWL={() => scrollToSection('application')} />
      </main>

      {/* Footer */}
      <Footer onApplyClick={() => scrollToSection('application')} />

      {/* Database Modal Notice */}
      <DatabaseNoticeModal
        isOpen={dbModalOpen}
        onClose={() => setDbModalOpen(false)}
      />

    </div>
  );
};

export default App;
