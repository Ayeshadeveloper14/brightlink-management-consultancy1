import React, { useLayoutEffect } from 'react';
import { MedicalHero } from '../components/medical-finder/MedicalHero.jsx';
import { MedicalCenterList } from '../components/medical-finder/MedicalCenterList.jsx';
import { MedicalHelpCtaSection } from '../components/medical-finder/MedicalHelpCtaSection.jsx';
import { MedicalPreparationGuide } from '../components/medical-finder/MedicalPreparationGuide.jsx';
import { MedicalArticlesSection } from '../components/medical-finder/MedicalArticlesSection.jsx';
import { MedicalFaqSection } from '../components/medical-finder/MedicalFaqSection.jsx';
import { MedicalFinalCtaSection } from '../components/medical-finder/MedicalFinalCtaSection.jsx';

export const MedicalFinderPage = ({ onOpenConsultation }) => {
  useLayoutEffect(() => {
    document.title = "Visa Medical & Emirates ID Centers in Dubai | BrightLink";
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222]">
      {/* 1. Page Hero with Distinctive Medical Visual & Fast Facts */}
      <MedicalHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Main Content Container */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* B & C. Official Centers Section with Live Search & Speed Filters */}
          <MedicalCenterList onOpenConsultation={onOpenConsultation} />

          {/* D. Help / Consultation Section ("Don't want to figure it out alone?") */}
          <MedicalHelpCtaSection onOpenConsultation={onOpenConsultation} />

          {/* Screening Preparation Guidelines */}
          <MedicalPreparationGuide />

          {/* E. Recent Articles / Knowledge Base Guides */}
          <MedicalArticlesSection />

          {/* F. FAQ Accordion */}
          <MedicalFaqSection />

        </div>
      </div>

      {/* G. Final High-Impact Consultation & Contact CTA */}
      <MedicalFinalCtaSection onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const MedicalFinder = MedicalFinderPage;
export default MedicalFinderPage;
