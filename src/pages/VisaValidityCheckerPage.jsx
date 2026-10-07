import React, { useEffect } from 'react';
import { VisaStatusCheckerHero } from '../components/visa-validity-checker/VisaStatusCheckerHero.jsx';
import { ThreeStepsProcess } from '../components/visa-validity-checker/ThreeStepsProcess.jsx';
import { OnlineCheckGuide } from '../components/visa-validity-checker/OnlineCheckGuide.jsx';
import { FinesOverviewSection } from '../components/visa-validity-checker/FinesOverviewSection.jsx';
import { GdrfaVsIcpSection } from '../components/visa-validity-checker/GdrfaVsIcpSection.jsx';
import { WhatsAppCheckFeature } from '../components/visa-validity-checker/WhatsAppCheckFeature.jsx';
import { VisaFaqAccordion } from '../components/visa-validity-checker/VisaFaqAccordion.jsx';
import { FinalCtaSection } from '../components/visa-validity-checker/FinalCtaSection.jsx';

export const VisaValidityCheckerPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Set proper document page title
    document.title = 'Visa Validity Checker | Check UAE Visa Status by Passport Number';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section with Interactive Checker Widget */}
      <VisaStatusCheckerHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Your status, checked in three steps */}
      <ThreeStepsProcess onOpenConsultation={onOpenConsultation} />

      {/* 3. How to check UAE visa status online & Check by Passport Number */}
      <OnlineCheckGuide onOpenConsultation={onOpenConsultation} />

      {/* 4. Overview: Fines in the UAE */}
      <FinesOverviewSection onOpenConsultation={onOpenConsultation} />

      {/* 5. GDRFA vs ICP */}
      <GdrfaVsIcpSection onOpenConsultation={onOpenConsultation} />

      {/* 6. WhatsApp Check in 3 Steps */}
      <WhatsAppCheckFeature onOpenConsultation={onOpenConsultation} />

      {/* 7. Frequently Asked Questions (Accordion) */}
      <VisaFaqAccordion onOpenConsultation={onOpenConsultation} />

      {/* 8. Final CTA: “Not sure where your visa stands?” */}
      <FinalCtaSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const VisaValidityChecker = VisaValidityCheckerPage;
export default VisaValidityCheckerPage;
