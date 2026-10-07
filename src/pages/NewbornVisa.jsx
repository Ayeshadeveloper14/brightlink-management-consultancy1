import React, { useEffect } from 'react';
import { Hero } from '../components/newborn-visa/Hero.jsx';
import { TrustBar } from '../components/newborn-visa/TrustBar.jsx';
import { VisaEstimator } from '../components/newborn-visa/VisaEstimator.jsx';
import { Timeline } from '../components/newborn-visa/Timeline.jsx';
import { ProcessPhases } from '../components/newborn-visa/ProcessPhases.jsx';
import { Documents } from '../components/newborn-visa/Documents.jsx';
import { CostCalculator } from '../components/newborn-visa/CostCalculator.jsx';
import { Reviews } from '../components/newborn-visa/Reviews.jsx';
import { AuthorSection } from '../components/newborn-visa/AuthorSection.jsx';
import { Articles } from '../components/newborn-visa/Articles.jsx';
import { FAQ } from '../components/newborn-visa/FAQ.jsx';
import { FinalCTA } from '../components/newborn-visa/FinalCTA.jsx';
import { GovernmentAuthorities } from '../components/newborn-visa/GovernmentAuthorities.jsx';

export const NewbornVisa = ({ onOpenCalculator, onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'Newborn Visa UAE | Newborn Family Visa Dubai';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Complete guide to getting a UAE newborn residence visa in Dubai. Check the 120-day timeline, documents, government fees and 5-phase newborn visa process.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToCalculator = () => {
    const el = document.getElementById('cost-calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero 
        onOpenCalculator={onOpenCalculator}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* 2. Featured / Trust Bar */}
      <TrustBar />

      {/* 3. Newborn Visa Estimator Preview */}
      <VisaEstimator 
        onOpenCalculator={onOpenCalculator}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* 4. Section 1 — Know the Timeline (120-Day Grace Period) */}
      <Timeline />

      {/* 5. Section 2 — The Full Journey in 5 Phases */}
      <ProcessPhases 
        onOpenCalculator={onOpenCalculator}
        onScrollToCalculator={scrollToCalculator}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 6. Section 3 — Documents at Each Stage */}
      <Documents />

      {/* 7. Section 4 — Know the Cost / Live Calculator */}
      <CostCalculator />

      {/* 8. Section 5 — Real Parents, Real Stories Reviews */}
      <Reviews />

      {/* 9. Author Credibility Section */}
      <AuthorSection />

      {/* 10. From Our Desk Recent Articles */}
      <Articles />

      {/* 11. Section 6 — Newborn Visa FAQ */}
      <FAQ />

      {/* 12. Final CTA */}
      <FinalCTA 
        onOpenCalculator={onOpenCalculator}
        onScrollToCalculator={scrollToCalculator}
      />

      {/* 13. Official UAE Government Authorities */}
      <GovernmentAuthorities />
    </div>
  );
};

export default NewbornVisa;
