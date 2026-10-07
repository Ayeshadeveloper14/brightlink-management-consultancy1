import React, { useEffect } from 'react';
import { GoldenVisaHero } from '../components/golden-visa/GoldenVisaHero.jsx';
import { EligibilityRoutes } from '../components/golden-visa/EligibilityRoutes.jsx';
import { CostOverview } from '../components/golden-visa/CostOverview.jsx';
import { BenefitsSection } from '../components/golden-visa/BenefitsSection.jsx';
import { ProcessTimeline } from '../components/golden-visa/ProcessTimeline.jsx';
import { DocumentChecklist } from '../components/golden-visa/DocumentChecklist.jsx';
import { WhyChooseBrigitlink } from '../components/golden-visa/WhyChooseBrigitlink.jsx';
import { SuccessMetrics } from '../components/golden-visa/SuccessMetrics.jsx';
import { GoldenVisaFAQ } from '../components/golden-visa/GoldenVisaFAQ.jsx';
import { GoldenVisaFinalCTA } from '../components/golden-visa/GoldenVisaFinalCTA.jsx';

export const GoldenVisaPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'UAE 10-Year Golden Visa | Eligibility, Fees & Fast-Track Application | Brigitlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Apply for the UAE 10-Year Golden Visa with Brigitlink. Complete guide for property investors (AED 2M+), skilled professionals (AED 30k+), entrepreneurs, executives, and family sponsorship.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'UAE 10-Year Golden Visa | Eligibility, Fees & Fast-Track Application | Brigitlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Apply for the UAE 10-Year Golden Visa with Brigitlink. Complete guide for property investors (AED 2M+), skilled professionals (AED 30k+), entrepreneurs, executives, and family sponsorship.'
      );
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <GoldenVisaHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Eligibility Routes Section */}
      <EligibilityRoutes onOpenConsultation={onOpenConsultation} />

      {/* 3. Cost & Investment Overview */}
      <CostOverview onOpenConsultation={onOpenConsultation} />

      {/* 4. Benefits Section */}
      <BenefitsSection />

      {/* 5. Process Timeline */}
      <ProcessTimeline onOpenConsultation={onOpenConsultation} />

      {/* 6. Document Requirements Checklist */}
      <DocumentChecklist onOpenConsultation={onOpenConsultation} />

      {/* 7. Why Choose Brigitlink */}
      <WhyChooseBrigitlink />

      {/* 8. Success Metrics Animated Counters */}
      <SuccessMetrics />

      {/* 9. Interactive FAQ Section */}
      <GoldenVisaFAQ onOpenConsultation={onOpenConsultation} />

      {/* 10. Final Conversion CTA */}
      <GoldenVisaFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const GoldenVisa = GoldenVisaPage;
export default GoldenVisaPage;
