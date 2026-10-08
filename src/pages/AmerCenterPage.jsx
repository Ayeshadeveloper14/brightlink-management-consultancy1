import React, { useEffect } from 'react';
import { Hero } from '../components/amer-center/Hero.jsx';
import { WhatIsAmerCenter } from '../components/amer-center/WhatIsAmerCenter.jsx';
import { ServicesHub } from '../components/amer-center/ServicesHub.jsx';
import { InteractiveJourney } from '../components/amer-center/InteractiveJourney.jsx';
import { WhyUseAmer } from '../components/amer-center/WhyUseAmer.jsx';
import { MostRequestedServices } from '../components/amer-center/MostRequestedServices.jsx';
import { DocumentChecklist } from '../components/amer-center/DocumentChecklist.jsx';
import { WhyChooseBrightlink } from '../components/amer-center/WhyChooseBrightlink.jsx';
import { SuccessNumbers } from '../components/amer-center/SuccessNumbers.jsx';
import { FAQ } from '../components/amer-center/FAQ.jsx';
import { FinalCTA } from '../components/amer-center/FinalCTA.jsx';

export const AmerCenterPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Amer Center Services UAE | Brightlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional Amer Center assistance including visas, Emirates ID, renewals, status changes, and government services across the UAE.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Amer Center Services UAE | Brightlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Professional Amer Center assistance including visas, Emirates ID, renewals, status changes, and government services across the UAE.'
      );
    }

    // Dynamic Schema.org JSON-LD structured data
    const schemaScriptId = 'amer-center-schema';
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = schemaScriptId;
      existingScript.type = 'application/ld+json';
      existingScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'GovernmentService',
        'name': 'Amer Center GDRFA Immigration & Visa Services UAE',
        'provider': {
          '@type': 'Organization',
          'name': 'Brightlink UAE Legal & Government Liaison Services',
          'areaServed': 'United Arab Emirates'
        },
        'serviceType': 'Immigration, Visa Typing and Residency Services',
        'description': 'Professional Amer Center facilitation in Dubai for family visas, work permits, status changes, residency renewals, and Emirates ID processing.',
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'AED',
          'availability': 'https://schema.org/InStock'
        }
      });
      document.head.appendChild(existingScript);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    return () => {
      const scriptToRemove = document.getElementById(schemaScriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
      {/* 1. Unique Split-Screen Hero with Interactive Service Dashboard */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. What is Amer Center (Zig-Zag Alternating Layout) */}
      <WhatIsAmerCenter onOpenConsultation={onOpenConsultation} />

      {/* 3. Modern Services Hub 12-Item Grid */}
      <ServicesHub onOpenConsultation={onOpenConsultation} />

      {/* 4. Interactive Curved Journey Roadmap */}
      <InteractiveJourney onOpenConsultation={onOpenConsultation} />

      {/* 5. Why Businesses & Families Use Amer (Masonry Varied Card Layout) */}
      <WhyUseAmer onOpenConsultation={onOpenConsultation} />

      {/* 6. Most Requested Services (Horizontal Showcase Panels) */}
      <MostRequestedServices onOpenConsultation={onOpenConsultation} />

      {/* 7. Interactive Document Checklist with Checkbox State */}
      <DocumentChecklist onOpenConsultation={onOpenConsultation} />

      {/* 8. Why Choose Brightlink (Large Photography Cards) */}
      <WhyChooseBrightlink />

      {/* 9. Success Numbers Animated Counters */}
      <SuccessNumbers />

      {/* 10. Modern Accordion FAQs */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 11. Full-Width Glassmorphic Dark Final CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const AmerCenter = AmerCenterPage;
export default AmerCenterPage;
