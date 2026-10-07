import React, { useEffect } from 'react';
import { Hero } from '../components/tourist-visa/Hero.jsx';
import { EntryConditions } from '../components/tourist-visa/EntryConditions.jsx';
import { Eligibility } from '../components/tourist-visa/Eligibility.jsx';
import { WhyVisitDubai } from '../components/tourist-visa/WhyVisitDubai.jsx';
import { VisaTypes } from '../components/tourist-visa/VisaTypes.jsx';
import { FAQ } from '../components/tourist-visa/FAQ.jsx';
import { FinalCTA } from '../components/tourist-visa/FinalCTA.jsx';

export const TouristVisa = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Page Title & Meta Description setup
    document.title = 'Dubai Tourist Visa & UAE Visa | Entry Requirements | Brigitlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Check UAE tourist visa and Dubai visa requirements before flying. Understand eligibility by passport nationality, residence, existing visas and travel purpose.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Dubai Tourist Visa & UAE Visa | Entry Requirements');
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Check UAE tourist visa and Dubai visa requirements before flying. Understand eligibility by passport nationality, residence, existing visas and travel purpose.'
      );
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero / Introduction */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Entry Conditions Before Flying */}
      <EntryConditions />

      {/* 3. Eligibility Section */}
      <Eligibility onOpenConsultation={onOpenConsultation} />

      {/* 4. Why Visit Dubai & Experiences */}
      <WhyVisitDubai />

      {/* 5. Dubai Visa Types & Decision Support */}
      <VisaTypes onOpenConsultation={onOpenConsultation} />

      {/* 6. FAQ Accordion */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 7. Final CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default TouristVisa;
