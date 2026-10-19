import React, { useEffect } from 'react';
import { RakFreeZoneHero } from '../components/rak-free-zone/RakFreeZoneHero.jsx';
import { WhatIsRakFreeZone } from '../components/rak-free-zone/WhatIsRakFreeZone.jsx';
import { RakFreeZoneBenefits } from '../components/rak-free-zone/RakFreeZoneBenefits.jsx';
import { RakLicenceTypes } from '../components/rak-free-zone/RakLicenceTypes.jsx';
import { RakLegalStructures } from '../components/rak-free-zone/RakLegalStructures.jsx';
import { RakFacilities } from '../components/rak-free-zone/RakFacilities.jsx';
import { RakSetupProcess } from '../components/rak-free-zone/RakSetupProcess.jsx';
import { RakDocuments } from '../components/rak-free-zone/RakDocuments.jsx';
import { RakCostOverview } from '../components/rak-free-zone/RakCostOverview.jsx';
import { RakVisaAndBanking } from '../components/rak-free-zone/RakVisaAndBanking.jsx';
import { RakTaxAndCompliance } from '../components/rak-free-zone/RakTaxAndCompliance.jsx';
import { WhyBrightlinkRak } from '../components/rak-free-zone/WhyBrightlinkRak.jsx';
import { RakFreeZoneFaq, FAQ_DATA_RAK_FREE_ZONE } from '../components/rak-free-zone/RakFreeZoneFaq.jsx';
import { RakFreeZoneFinalCTA } from '../components/rak-free-zone/RakFreeZoneFinalCTA.jsx';

export const RakFreeZonePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Document Title
    document.title = 'RAK Free Zone Business Setup | Brightlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Complete guide to RAK Free Zone (RAKEZ) company setup, licences, facilities, required documents, setup costs, residence visas and corporate banking with Brightlink.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/business-setup/free-zone/rak-free-zone`;

    // 4. Set Open Graph Metadata
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'RAK Free Zone Business Setup | Brightlink';

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = 'Complete guide to RAK Free Zone (RAKEZ) company setup, licences, facilities, required documents, setup costs, residence visas and corporate banking with Brightlink.';

    // 5. Inject Schema.org JSON-LD Structured Data
    const schemaScriptId = 'rak-free-zone-schema';
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
          'name': 'RAK Free Zone Business Setup (RAKEZ)',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Consulting',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Free Zone Company Formation',
          'areaServed': {
            '@type': 'State',
            'name': 'Ras Al Khaimah, United Arab Emirates'
          },
          'description': 'End-to-end company formation in Ras Al Khaimah Economic Zone (RAKEZ), including commercial and industrial licensing, flexi-desk and warehouse leasing, residence visa processing, and corporate bank account opening.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_RAK_FREE_ZONE.map((item) => ({
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

    scriptTag.text = JSON.stringify(structuredData);

    // Scroll to top on mount
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    return () => {
      const el = document.getElementById(schemaScriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white w-full max-w-full overflow-x-clip">
      {/* 1. Hero Section */}
      <RakFreeZoneHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Overview / What is RAKEZ */}
      <WhatIsRakFreeZone onOpenConsultation={onOpenConsultation} />

      {/* 3. Core Free Zone Benefits */}
      <RakFreeZoneBenefits onOpenConsultation={onOpenConsultation} />

      {/* 4. Licence Types */}
      <RakLicenceTypes onOpenConsultation={onOpenConsultation} />

      {/* 5. Legal Structures / Entity Formats */}
      <RakLegalStructures onOpenConsultation={onOpenConsultation} />

      {/* 6. Facilities, Warehouses & Land Plots */}
      <RakFacilities onOpenConsultation={onOpenConsultation} />

      {/* 7. Step-by-Step Setup Process */}
      <RakSetupProcess onOpenConsultation={onOpenConsultation} />

      {/* 8. Required Documents Checklist */}
      <RakDocuments onOpenConsultation={onOpenConsultation} />

      {/* 9. Setup Costs & Cost Breakdown */}
      <RakCostOverview onOpenConsultation={onOpenConsultation} />

      {/* 10. Visas & Corporate Banking Assistance */}
      <RakVisaAndBanking onOpenConsultation={onOpenConsultation} />

      {/* 11. Tax, VAT & Annual Compliance */}
      <RakTaxAndCompliance onOpenConsultation={onOpenConsultation} />

      {/* 12. Why Choose Brightlink */}
      <WhyBrightlinkRak onOpenConsultation={onOpenConsultation} />

      {/* 13. Frequently Asked Questions (FAQ) */}
      <RakFreeZoneFaq onOpenConsultation={onOpenConsultation} />

      {/* 14. Final Conversion Call-to-Action */}
      <RakFreeZoneFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default RakFreeZonePage;