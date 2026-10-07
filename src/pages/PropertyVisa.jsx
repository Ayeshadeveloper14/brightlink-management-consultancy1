import React, { useEffect } from 'react';
import { Hero } from '../components/property-visa/Hero.jsx';
import { VisaRouteCards } from '../components/property-visa/VisaRouteCards.jsx';
import { OnlineProcess } from '../components/property-visa/OnlineProcess.jsx';
import { TrustSection } from '../components/property-visa/TrustSection.jsx';
import { Reviews } from '../components/property-visa/Reviews.jsx';
import { LatestUpdates } from '../components/property-visa/LatestUpdates.jsx';
import { FAQ } from '../components/property-visa/FAQ.jsx';
import { FinalCTA } from '../components/property-visa/FinalCTA.jsx';
import { GovernmentAuthorities } from '../components/property-visa/GovernmentAuthorities.jsx';

export const PropertyVisa = ({ onOpenCalculator, onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'Property Visa Dubai | Golden, Investor & Retirement Visa';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore UAE property visa routes including the 10-year Golden Visa, 2-year Investor Visa and 5-year Retirement Visa. Check eligibility and government fees online.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero 
        onOpenCalculator={onOpenCalculator}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. Three Property Visa Route Cards & Trust Statistics */}
      <VisaRouteCards 
        onOpenCalculator={onOpenCalculator}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 3. Online Process / Service CTA */}
      <OnlineProcess 
        onOpenCalculator={onOpenCalculator}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 4. Company Trust Section & Founder Credibility Card */}
      <TrustSection />

      {/* 5. Google Reviews Section (Rendered Once, No Duplicates) */}
      <Reviews />

      {/* 6. Latest Property Visa Updates */}
      <LatestUpdates />

      {/* 7. Common Questions (FAQ Accordion) */}
      <FAQ />

      {/* 8. Final CTA */}
      <FinalCTA 
        onOpenCalculator={onOpenCalculator}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 9. Official UAE Government Authorities */}
      <GovernmentAuthorities />
    </div>
  );
};

export default PropertyVisa;
