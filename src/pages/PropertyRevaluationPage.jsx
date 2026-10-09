import React, { useLayoutEffect } from 'react';
import { RevaluationHero } from '../components/property-revaluation/RevaluationHero.jsx';
import { RevaluationIntroSection } from '../components/property-revaluation/RevaluationIntroSection.jsx';
import { RevaluationApplicationsSection } from '../components/property-revaluation/RevaluationApplicationsSection.jsx';
import { RevaluationServiceCards } from '../components/property-revaluation/RevaluationServiceCards.jsx';
import { RevaluationProcessSection } from '../components/property-revaluation/RevaluationProcessSection.jsx';
import { RevaluationRequiredDocsSection } from '../components/property-revaluation/RevaluationRequiredDocsSection.jsx';
import { RevaluationFaqSection } from '../components/property-revaluation/RevaluationFaqSection.jsx';
import { RevaluationFinalCtaSection } from '../components/property-revaluation/RevaluationFinalCtaSection.jsx';

export const PropertyRevaluationPage = ({ onOpenConsultation }) => {
  useLayoutEffect(() => {
    document.title = 'Official Property Revaluation Dubai: DLD Valuation Certificate | Brightlink';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222]">
      {/* 1. Hero Section */}
      <RevaluationHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Intro / Official Property Valuation Section (Two-Column) */}
      <RevaluationIntroSection onOpenConsultation={onOpenConsultation} />

      {/* 3. One Certificate, Many Applications (Golden Visa, Bank Refinance, Asset Division) */}
      <RevaluationApplicationsSection />

      {/* 4. Service / Application Cards (Ready, Off-Plan, Commercial, Plots) */}
      <RevaluationServiceCards />

      {/* 5. Process Section (01, 02, 03, 04 Timeline) */}
      <RevaluationProcessSection />

      {/* 6. Requirements & Statutory Fees (Consolidated Checklist & Official DLD Tariffs) */}
      <RevaluationRequiredDocsSection />

      {/* 7. Frequently Asked Questions */}
      <RevaluationFaqSection />

      {/* 8. Final Conversion CTA */}
      <RevaluationFinalCtaSection />
    </div>
  );
};

export const PropertyRevaluation = PropertyRevaluationPage;
export default PropertyRevaluationPage;
