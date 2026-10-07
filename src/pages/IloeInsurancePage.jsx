import React, { useEffect } from 'react';
import { IloeHeroChecker } from '../components/iloe-insurance/IloeHeroChecker.jsx';
import { IloeClaimCalculator } from '../components/iloe-insurance/IloeClaimCalculator.jsx';
import { IloeExplanationSection } from '../components/iloe-insurance/IloeExplanationSection.jsx';
import { IloeFinesSection } from '../components/iloe-insurance/IloeFinesSection.jsx';
import { IloeHowToClaim } from '../components/iloe-insurance/IloeHowToClaim.jsx';
import { IloeFaqAccordion } from '../components/iloe-insurance/IloeFaqAccordion.jsx';
import { IloeFinalCta } from '../components/iloe-insurance/IloeFinalCta.jsx';

export const IloeInsurancePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'ILOE Insurance Check | UAE Unemployment Insurance & Fine Inquiry';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Heading & ILOE Status / Fine Checker Panel */}
      <IloeHeroChecker onOpenConsultation={onOpenConsultation} />

      {/* 2. ILOE Claim & Payout Calculator */}
      <IloeClaimCalculator onOpenConsultation={onOpenConsultation} />

      {/* 3. ILOE Insurance in the UAE, Explained & Category Comparison */}
      <IloeExplanationSection onOpenConsultation={onOpenConsultation} />

      {/* 4. ILOE Fines & Non-Compliance Penalties */}
      <IloeFinesSection onOpenConsultation={onOpenConsultation} />

      {/* 5. How to Claim ILOE Compensation */}
      <IloeHowToClaim onOpenConsultation={onOpenConsultation} />

      {/* 6. ILOE Questions & FAQ Accordion */}
      <IloeFaqAccordion onOpenConsultation={onOpenConsultation} />

      {/* 7. Final Call to Action */}
      <IloeFinalCta onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const IloeInsurance = IloeInsurancePage;
export default IloeInsurancePage;
