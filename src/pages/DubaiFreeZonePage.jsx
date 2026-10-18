import React, { useEffect } from 'react';
import { DubaiFreeZoneHero } from '../components/dubai-free-zone/DubaiFreeZoneHero.jsx';
import { WhatIsDubaiFreeZone } from '../components/dubai-free-zone/WhatIsDubaiFreeZone.jsx';
import { FreeZoneBenefits } from '../components/dubai-free-zone/FreeZoneBenefits.jsx';
import { FreeZoneVsMainland } from '../components/dubai-free-zone/FreeZoneVsMainland.jsx';
import { TopFreeZonesDubai } from '../components/dubai-free-zone/TopFreeZonesDubai.jsx';
import { FreeZoneLicenseTypes } from '../components/dubai-free-zone/FreeZoneLicenseTypes.jsx';
import { FreeZoneDocuments } from '../components/dubai-free-zone/FreeZoneDocuments.jsx';
import { FreeZoneSetupProcess } from '../components/dubai-free-zone/FreeZoneSetupProcess.jsx';
import { FreeZoneCostOverview } from '../components/dubai-free-zone/FreeZoneCostOverview.jsx';
import { WhyBrightlinkFreeZone } from '../components/dubai-free-zone/WhyBrightlinkFreeZone.jsx';
import { DubaiFreeZoneFaq, FAQ_DATA_DUBAI_FREE_ZONE } from '../components/dubai-free-zone/DubaiFreeZoneFaq.jsx';
import { DubaiFreeZoneFinalCTA } from '../components/dubai-free-zone/DubaiFreeZoneFinalCTA.jsx';

export const DubaiFreeZonePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'Dubai Free Zone Business Setup & Company Formation | Brightlink Dubai';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Complete Dubai Free Zone business setup and company formation. Enjoy 100% foreign ownership, 0% personal income tax, and express licensing with Brightlink.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/business-setup/free-zone/dubai-free-zone`;

    // 4. Inject Schema.org JSON-LD for Service & FAQPage
    const schemaScriptId = 'dubai-free-zone-schema';
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
          'name': 'Dubai Free Zone Business Setup & Company Formation',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Business Setup Services LLC',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Dubai Free Zone Formation',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'End-to-end Dubai Free Zone business setup, company formation, commercial and service trade licensing, flexi-desk leasing, establishment card, and UAE residence visa processing.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_DUBAI_FREE_ZONE.map(item => ({
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

    // 5. Scroll to top on mount
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
      <DubaiFreeZoneHero onOpenConsultation={onOpenConsultation} />

      {/* 2. What is a Dubai Free Zone? */}
      <WhatIsDubaiFreeZone onOpenConsultation={onOpenConsultation} />

      {/* 3. Core Benefits of Dubai Free Zone Setup */}
      <FreeZoneBenefits onOpenConsultation={onOpenConsultation} />

      {/* 4. Free Zone vs Mainland Comparison */}
      <FreeZoneVsMainland onOpenConsultation={onOpenConsultation} />

      {/* 5. Top Dubai Free Zones Directory */}
      <TopFreeZonesDubai onOpenConsultation={onOpenConsultation} />

      {/* 6. License Types Available */}
      <FreeZoneLicenseTypes onOpenConsultation={onOpenConsultation} />

      {/* 7. Requirements & Document Checklist */}
      <FreeZoneDocuments onOpenConsultation={onOpenConsultation} />

      {/* 8. Step-by-Step Setup Process */}
      <FreeZoneSetupProcess onOpenConsultation={onOpenConsultation} />

      {/* 9. Transparent Fee & Cost Overview */}
      <FreeZoneCostOverview onOpenConsultation={onOpenConsultation} />

      {/* 10. Why Brightlink */}
      <WhyBrightlinkFreeZone onOpenConsultation={onOpenConsultation} />

      {/* 11. FAQ Accordion */}
      <DubaiFreeZoneFaq onOpenConsultation={onOpenConsultation} />

      {/* 12. Final High-Converting Call to Action */}
      <DubaiFreeZoneFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default DubaiFreeZonePage;
