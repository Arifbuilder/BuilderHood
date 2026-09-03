import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { NFTCollectionSection } from '../components/NFTCollectionSection';
import { WhyBuilderHoodSection } from '../components/WhyBuilderHoodSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { CommunityCTASection } from '../components/CommunityCTASection';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleApplyWL = () => {
    navigate('/apply');
  };

  const handleGetStarted = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection
        onApplyWL={handleApplyWL}
        onGetStarted={handleGetStarted}
      />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. NFT / Collection Section */}
      <NFTCollectionSection />

      {/* 4. Why BuilderHood Section */}
      <WhyBuilderHoodSection />

      {/* 5. Roadmap Section */}
      <RoadmapSection />

      {/* 6. Community CTA Section */}
      <CommunityCTASection onApplyWL={handleApplyWL} />
    </main>
  );
};

export default HomePage;
