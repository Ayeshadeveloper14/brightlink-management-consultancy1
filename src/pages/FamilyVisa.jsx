import React, { useEffect } from 'react';
import { Hero } from '../components/family-visa/Hero.jsx';
import { FeeFinder } from '../components/family-visa/FeeFinder.jsx';
import { QuickFacts } from '../components/family-visa/QuickFacts.jsx';
import { WhoYouCanSponsor } from '../components/family-visa/WhoYouCanSponsor.jsx';
import { HowItWorks } from '../components/family-visa/HowItWorks.jsx';
import { Documents } from '../components/family-visa/Documents.jsx';
import { GovernmentFees } from '../components/family-visa/GovernmentFees.jsx';
import { GoodToKnow } from '../components/family-visa/GoodToKnow.jsx';
import { Reviews } from '../components/family-visa/Reviews.jsx';
import { FAQ } from '../components/family-visa/FAQ.jsx';
import { RelatedServices } from '../components/family-visa/RelatedServices.jsx';
import { FinalCTA } from '../components/family-visa/FinalCTA.jsx';
import { GovernmentAuthorities } from '../components/family-visa/GovernmentAuthorities.jsx';

export const FamilyVisa = ({ onOpenConsultation, onOpenCalculator }) => {
  useEffect(() => {
    document.title = 'Family Visa Dubai | UAE Family Residence Visa | Brigitlink';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Apply for a UAE family visa with professional support for sponsorship, GDRFA or ICP filing, medical and Emirates ID appointments, document attestation and visa stamping.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero 
        onOpenConsultation={onOpenConsultation} 
        onOpenCalculator={onOpenCalculator} 
      />

      {/* 2. Fee Finder */}
      <FeeFinder 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 3. Quick Facts */}
      <QuickFacts />

      {/* 4. Section 01 — Who You Can Sponsor */}
      <WhoYouCanSponsor 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 5. Section 02 — How It Works & Process Timeline */}
      <HowItWorks 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 6. Section 03 — Documents */}
      <Documents />

      {/* 7. Section 04 — Government Fees */}
      <GovernmentFees 
        onOpenCalculator={onOpenCalculator}
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 8. Section 05 — Good To Know */}
      <GoodToKnow />

      {/* 9. Section 06 — Reviews */}
      <Reviews />

      {/* 10. Section 07 — FAQ */}
      <FAQ />

      {/* 11. Related Services */}
      <RelatedServices />

      {/* 12. Final CTA */}
      <FinalCTA 
        onOpenConsultation={onOpenConsultation} 
      />

      {/* 13. Government Authorities */}
      <GovernmentAuthorities />
    </div>
  );
};

export default FamilyVisa;
