import React, { useLayoutEffect } from 'react';
import { TrusteeHero } from '../components/dld-trustee/TrusteeHero.jsx';
import { WhatWeHandleSection } from '../components/dld-trustee/WhatWeHandleSection.jsx';
import { TrusteeHowItWorksSection } from '../components/dld-trustee/TrusteeHowItWorksSection.jsx';
import { DocumentChecklistSection } from '../components/dld-trustee/DocumentChecklistSection.jsx';
import { RealEstatePartnersSection } from '../components/dld-trustee/RealEstatePartnersSection.jsx';
import { TrusteeArticlesSection } from '../components/dld-trustee/TrusteeArticlesSection.jsx';
import { TrusteeFaqSection } from '../components/dld-trustee/TrusteeFaqSection.jsx';
import { TrusteeFinalCtaSection } from '../components/dld-trustee/TrusteeFinalCtaSection.jsx';

export const DldTrusteePage = ({ onOpenConsultation }) => {
  useLayoutEffect(() => {
    document.title = 'Dubai Property Trustee Support | Brightlink Typing & Consulting';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222]">
      {/* 1. Hero Section */}
      <TrusteeHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Main Services Handled (6 Core DLD Transaction Cards) */}
      <WhatWeHandleSection onOpenConsultation={onOpenConsultation} />

      {/* 3. How It Works Section (01 - 04 Process Timeline) */}
      <TrusteeHowItWorksSection />

      {/* 4. Document Checklist Section (8 Essential Requirements) */}
      <DocumentChecklistSection />

      {/* 5. For Real Estate Companies Section (B2B Partner Support) */}
      <RealEstatePartnersSection onOpenConsultation={onOpenConsultation} />

      {/* 6. Recent Articles Section (From Our Desk) */}
      <TrusteeArticlesSection />

      {/* 7. FAQ Section (Accordion with Specific DLD Procedures) */}
      <TrusteeFaqSection />

      {/* 8. Final Conversion CTA Section */}
      <TrusteeFinalCtaSection />
    </div>
  );
};

export const DldTrustee = DldTrusteePage;
export default DldTrusteePage;
