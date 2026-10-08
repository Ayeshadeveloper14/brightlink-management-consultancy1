import React, { useEffect } from 'react';
import { Hero } from '../components/emirates-id/Hero.jsx';
import { WhatIsEmiratesId } from '../components/emirates-id/WhatIsEmiratesId.jsx';
import { EmiratesIdServices } from '../components/emirates-id/EmiratesIdServices.jsx';
import { CostOverview } from '../components/emirates-id/CostOverview.jsx';
import { ProcessTimeline } from '../components/emirates-id/ProcessTimeline.jsx';
import { RequiredDocuments } from '../components/emirates-id/RequiredDocuments.jsx';
import { BenefitsAssistance } from '../components/emirates-id/BenefitsAssistance.jsx';
import { WhyChooseBrightlink } from '../components/emirates-id/WhyChooseBrightlink.jsx';
import { SuccessMetrics } from '../components/emirates-id/SuccessMetrics.jsx';
import { FAQ } from '../components/emirates-id/FAQ.jsx';
import { FinalCTA } from '../components/emirates-id/FinalCTA.jsx';

export const EmiratesIdPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Emirates ID Application, Renewal & Replacement in UAE | Brightlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional Emirates ID typing and renewal services across Dubai & UAE. Fast-track new applications, renewals, lost card replacements, biometrics scheduling, and ICP tracking.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Emirates ID Application, Renewal & Replacement in UAE | Brightlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Professional Emirates ID typing and renewal services across Dubai & UAE. Fast-track new applications, renewals, lost card replacements, biometrics scheduling, and ICP tracking.'
      );
    }

    // Add JSON-LD Structured Data Schema for Search Engines
    const schemaScriptId = 'emirates-id-schema';
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = schemaScriptId;
      existingScript.type = 'application/ld+json';
      existingScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'UAE Emirates ID Typing, Renewal & Replacement Services',
        'provider': {
          '@type': 'GovernmentService',
          'name': 'Brightlink UAE Legal & Government Liaison Services',
          'areaServed': 'United Arab Emirates'
        },
        'serviceType': 'Identity Verification and Government Liaison',
        'description': 'End-to-end assistance for Emirates ID new applications, renewals, lost replacements, biometrics appointments, and ICP tracking in Dubai and UAE.',
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'AED',
          'price': '270.00',
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
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. What is Emirates ID Section */}
      <WhatIsEmiratesId />

      {/* 3. Emirates ID Services We Provide */}
      <EmiratesIdServices onOpenConsultation={onOpenConsultation} />

      {/* 4. Cost Overview & Pricing */}
      <CostOverview onOpenConsultation={onOpenConsultation} />

      {/* 5. 6-Step Application Process Timeline */}
      <ProcessTimeline onOpenConsultation={onOpenConsultation} />

      {/* 6. Required Documents Checklist */}
      <RequiredDocuments onOpenConsultation={onOpenConsultation} />

      {/* 7. Benefits of Professional Assistance */}
      <BenefitsAssistance onOpenConsultation={onOpenConsultation} />

      {/* 8. Why Choose Brightlink */}
      <WhyChooseBrightlink />

      {/* 9. Success Metrics Animated Counters */}
      <SuccessMetrics />

      {/* 10. Interactive FAQ Section */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 11. Final High-Converting Call to Action */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const EmiratesId = EmiratesIdPage;
export default EmiratesIdPage;
