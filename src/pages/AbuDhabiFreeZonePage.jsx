import React, { useEffect } from 'react';
import { AbuDhabiFreeZoneHero } from '../components/abu-dhabi-free-zone/AbuDhabiFreeZoneHero.jsx';
import { WhatIsAbuDhabiFreeZone } from '../components/abu-dhabi-free-zone/WhatIsAbuDhabiFreeZone.jsx';
import { AbuDhabiJurisdictions } from '../components/abu-dhabi-free-zone/AbuDhabiJurisdictions.jsx';
import { AbuDhabiBenefits } from '../components/abu-dhabi-free-zone/AbuDhabiBenefits.jsx';
import { AbuDhabiLicenceTypes } from '../components/abu-dhabi-free-zone/AbuDhabiLicenceTypes.jsx';
import { AbuDhabiLegalStructures } from '../components/abu-dhabi-free-zone/AbuDhabiLegalStructures.jsx';
import { AbuDhabiSetupProcess } from '../components/abu-dhabi-free-zone/AbuDhabiSetupProcess.jsx';
import { AbuDhabiDocuments } from '../components/abu-dhabi-free-zone/AbuDhabiDocuments.jsx';
import { AbuDhabiCostOverview } from '../components/abu-dhabi-free-zone/AbuDhabiCostOverview.jsx';
import { AbuDhabiVisaAndBanking } from '../components/abu-dhabi-free-zone/AbuDhabiVisaAndBanking.jsx';
import { AbuDhabiTaxCompliance } from '../components/abu-dhabi-free-zone/AbuDhabiTaxCompliance.jsx';
import { WhyBrightlinkAbuDhabi } from '../components/abu-dhabi-free-zone/WhyBrightlinkAbuDhabi.jsx';
import { AbuDhabiFreeZoneFaq, FAQ_DATA_ABU_DHABI_FREE_ZONE } from '../components/abu-dhabi-free-zone/AbuDhabiFreeZoneFaq.jsx';
import { AbuDhabiFreeZoneFinalCTA } from '../components/abu-dhabi-free-zone/AbuDhabiFreeZoneFinalCTA.jsx';

export const AbuDhabiFreeZonePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'Abu Dhabi Free Zone Business Setup | Brightlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Explore Abu Dhabi free zone company formation, licensing options, required documents, setup costs, visa guidance and business setup support with Brightlink.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/business-setup/free-zone/abu-dhabi-free-zone`;

    // 4. Set Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Abu Dhabi Free Zone Business Setup | Brightlink';

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = 'Explore Abu Dhabi free zone company formation, licensing options, required documents, setup costs, visa guidance and business setup support with Brightlink.';

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = `${window.location.origin}/images/abu_dhabi_freezone_hero.jpg`;

    // 5. Inject Schema.org JSON-LD for Service, BreadcrumbList & FAQPage
    const schemaScriptId = 'abu-dhabi-free-zone-schema';
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
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': window.location.origin
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Business Setup',
              'item': `${window.location.origin}/business-setup`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Free Zone',
              'item': `${window.location.origin}/business-setup/free-zone`
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': 'Abu Dhabi Free Zone',
              'item': `${window.location.origin}/business-setup/free-zone/abu-dhabi-free-zone`
            }
          ]
        },
        {
          '@type': 'Service',
          'name': 'Abu Dhabi Free Zone Business Setup & Company Formation',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Business Setup Services LLC',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Abu Dhabi Free Zone Formation',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'Consultancy and company formation guidance for Abu Dhabi free zones including ADGM, KEZAD, Masdar City, and Creative Media Authority. Assistance with activity selection, licensing, documents, and residency visas.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_ABU_DHABI_FREE_ZONE.map(item => ({
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

    // 6. Scroll to top on mount
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
      <AbuDhabiFreeZoneHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Introduction to Abu Dhabi Free Zones */}
      <WhatIsAbuDhabiFreeZone onOpenConsultation={onOpenConsultation} />

      {/* 3. Specialized Jurisdictions: ADGM, KEZAD, Masdar City, CMA */}
      <AbuDhabiJurisdictions onOpenConsultation={onOpenConsultation} />

      {/* 4. Strategic Benefits */}
      <AbuDhabiBenefits onOpenConsultation={onOpenConsultation} />

      {/* 5. Activities and Licence Types */}
      <AbuDhabiLicenceTypes onOpenConsultation={onOpenConsultation} />

      {/* 6. Company Legal Structures */}
      <AbuDhabiLegalStructures onOpenConsultation={onOpenConsultation} />

      {/* 7. Step-by-Step Formation Process */}
      <AbuDhabiSetupProcess onOpenConsultation={onOpenConsultation} />

      {/* 8. Required Documents Checklist */}
      <AbuDhabiDocuments onOpenConsultation={onOpenConsultation} />

      {/* 9. Abu Dhabi Free Zone Company Setup Cost Overview */}
      <AbuDhabiCostOverview onOpenConsultation={onOpenConsultation} />

      {/* 10. Visa Assistance & Corporate Banking Guidance */}
      <AbuDhabiVisaAndBanking onOpenConsultation={onOpenConsultation} />

      {/* 11. Tax and Compliance Considerations */}
      <AbuDhabiTaxCompliance onOpenConsultation={onOpenConsultation} />

      {/* 12. Why Choose Brightlink */}
      <WhyBrightlinkAbuDhabi onOpenConsultation={onOpenConsultation} />

      {/* 13. FAQ Accordion */}
      <AbuDhabiFreeZoneFaq onOpenConsultation={onOpenConsultation} />

      {/* 14. Final Call to Action */}
      <AbuDhabiFreeZoneFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default AbuDhabiFreeZonePage;
