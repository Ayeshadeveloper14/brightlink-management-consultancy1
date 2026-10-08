import React, { useEffect } from 'react';
import { Hero } from '../components/virtual-work-visa/Hero.jsx';
import { Overview } from '../components/virtual-work-visa/Overview.jsx';
import { Eligibility } from '../components/virtual-work-visa/Eligibility.jsx';
import { Documents } from '../components/virtual-work-visa/Documents.jsx';
import { ApplicationProcess } from '../components/virtual-work-visa/ApplicationProcess.jsx';
import { Fees } from '../components/virtual-work-visa/Fees.jsx';
import { ValidityAndFamily } from '../components/virtual-work-visa/ValidityAndFamily.jsx';
import { Benefits } from '../components/virtual-work-visa/Benefits.jsx';
import { Comparison } from '../components/virtual-work-visa/Comparison.jsx';
import { WhereToApply } from '../components/virtual-work-visa/WhereToApply.jsx';
import { Considerations } from '../components/virtual-work-visa/Considerations.jsx';
import { RelatedServices } from '../components/virtual-work-visa/RelatedServices.jsx';
import { FAQ } from '../components/virtual-work-visa/FAQ.jsx';
import { Expert } from '../components/virtual-work-visa/Expert.jsx';
import { Sources } from '../components/virtual-work-visa/Sources.jsx';
import { FinalCTA } from '../components/virtual-work-visa/FinalCTA.jsx';

export const VirtualWorkVisa = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Page Title & Meta tags
    document.title = 'UAE Virtual Work Visa: Requirements, Fees, and Process | Brightlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'This guide covers every step of obtaining a UAE virtual work visa, from eligibility and documents to official fees and processing timelines.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'UAE Virtual Work Visa: Requirements, Fees, and Application Process'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'This guide covers every step of obtaining a UAE virtual work visa, from eligibility and documents to official fees and processing timelines.'
      );
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Overview & Positioning */}
      <Overview />

      {/* 3. Eligibility Requirements */}
      <Eligibility />

      {/* 4. Required Documents Checklist */}
      <Documents />

      {/* 5. Step-by-Step Application Process */}
      <ApplicationProcess />

      {/* 6. Official Fees */}
      <Fees />

      {/* 7. Validity, Renewal & Family Sponsorship */}
      <ValidityAndFamily />

      {/* 8. Benefits */}
      <Benefits />

      {/* 9. Comparison with Other Options */}
      <Comparison />

      {/* 10. Where to Apply */}
      <WhereToApply />

      {/* 11. Considerations & Advisory */}
      <Considerations />

      {/* 12. Related Services */}
      <RelatedServices onOpenConsultation={onOpenConsultation} />

      {/* 13. Frequently Asked Questions */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 14. Editorial / Authority Profile */}
      <Expert />

      {/* 15. Sources & Regulatory Notice */}
      <Sources />

      {/* 16. Final Closing CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default VirtualWorkVisa;
