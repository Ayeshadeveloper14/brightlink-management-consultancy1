import React, { useEffect } from 'react';
import { LlcHero } from '../components/llc-company/LlcHero.jsx';
import { WhatIsMainlandLlc } from '../components/llc-company/WhatIsMainlandLlc.jsx';
import { WhyChooseMainlandLlc } from '../components/llc-company/WhyChooseMainlandLlc.jsx';
import { LlcFormationJourney } from '../components/llc-company/LlcFormationJourney.jsx';
import { LlcDocumentsRequired } from '../components/llc-company/LlcDocumentsRequired.jsx';
import { LlcBusinessActivities } from '../components/llc-company/LlcBusinessActivities.jsx';
import { LlcCostAndTimeline } from '../components/llc-company/LlcCostAndTimeline.jsx';
import { LlcComplianceAndSetup } from '../components/llc-company/LlcComplianceAndSetup.jsx';
import { LlcVsOtherStructures } from '../components/llc-company/LlcVsOtherStructures.jsx';
import { WhyBrigitlinkLlc } from '../components/llc-company/WhyBrigitlinkLlc.jsx';
import { LlcFaqAccordion, FAQ_DATA_LLC } from '../components/llc-company/LlcFaqAccordion.jsx';
import { LlcFinalCTA } from '../components/llc-company/LlcFinalCTA.jsx';

export const LlcCompanyPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'LLC Company Formation Dubai | Mainland Business Setup | Brigitlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Form a Dubai Mainland LLC with 100% foreign ownership and limited liability protection. Complete trade licensing, MOA, premises, establishment cards, and visas with Brigitlink.';

    // 3. Inject Schema.org JSON-LD for Service & FAQ
    const schemaScriptId = 'llc-company-schema';
    let scriptTag = document.getElementById(schemaScriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaScriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          'name': 'Mainland LLC Company Formation in Dubai',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brigitlink Typing & Consulting',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Mainland LLC Formation',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'End-to-end Dubai Mainland Limited Liability Company (LLC) formation, commercial trade licensing, MOA notarization, Ejari, and visa processing.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_LLC.map(item => ({
            '@type': 'Question',
            'name': item.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': item.a
            }
          }))
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);

    // 4. Scroll to top on mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    return () => {
      const existingScript = document.getElementById(schemaScriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <LlcHero onOpenConsultation={onOpenConsultation} />

      {/* 2. What is a Mainland LLC? */}
      <WhatIsMainlandLlc onOpenConsultation={onOpenConsultation} />

      {/* 3. Why Choose a Mainland LLC? (Benefits) */}
      <WhyChooseMainlandLlc onOpenConsultation={onOpenConsultation} />

      {/* 4. LLC Formation Journey (01 through 08 Responsive Timeline) */}
      <LlcFormationJourney onOpenConsultation={onOpenConsultation} />

      {/* 5. Documents Required Checklist */}
      <LlcDocumentsRequired onOpenConsultation={onOpenConsultation} />

      {/* 6. Commercial Activities Supported */}
      <LlcBusinessActivities onOpenConsultation={onOpenConsultation} />

      {/* 7. Cost Determinants & Realistic Timeline */}
      <LlcCostAndTimeline onOpenConsultation={onOpenConsultation} />

      {/* 8. Compliance & After Setup Responsibilities */}
      <LlcComplianceAndSetup onOpenConsultation={onOpenConsultation} />

      {/* 9. LLC vs Other Corporate Structures Comparison */}
      <LlcVsOtherStructures onOpenConsultation={onOpenConsultation} />

      {/* 10. Why Brigitlink LLC Support */}
      <WhyBrigitlinkLlc onOpenConsultation={onOpenConsultation} />

      {/* 11. FAQ Accordion (12 Questions) */}
      <LlcFaqAccordion onOpenConsultation={onOpenConsultation} />

      {/* 12. Final Call to Action */}
      <LlcFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default LlcCompanyPage;
