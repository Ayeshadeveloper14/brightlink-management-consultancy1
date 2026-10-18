import React, { useEffect } from 'react';
import { AjmanFreeZoneHero } from '../components/ajman-free-zone/AjmanFreeZoneHero.jsx';
import { WhatIsAjmanFreeZone } from '../components/ajman-free-zone/WhatIsAjmanFreeZone.jsx';
import { AjmanBusinessActivities } from '../components/ajman-free-zone/AjmanBusinessActivities.jsx';
import { AjmanLicenceTypes } from '../components/ajman-free-zone/AjmanLicenceTypes.jsx';
import { AjmanBenefits } from '../components/ajman-free-zone/AjmanBenefits.jsx';
import { AjmanLegalStructures } from '../components/ajman-free-zone/AjmanLegalStructures.jsx';
import { AjmanSetupProcess } from '../components/ajman-free-zone/AjmanSetupProcess.jsx';
import { AjmanDocuments } from '../components/ajman-free-zone/AjmanDocuments.jsx';
import { AjmanCostOverview } from '../components/ajman-free-zone/AjmanCostOverview.jsx';
import { AjmanFacilityOptions } from '../components/ajman-free-zone/AjmanFacilityOptions.jsx';
import { AjmanVisaAndBanking } from '../components/ajman-free-zone/AjmanVisaAndBanking.jsx';
import { AjmanTaxCompliance } from '../components/ajman-free-zone/AjmanTaxCompliance.jsx';
import { AjmanMainlandOperations } from '../components/ajman-free-zone/AjmanMainlandOperations.jsx';
import { WhyBrightlinkAjman } from '../components/ajman-free-zone/WhyBrightlinkAjman.jsx';
import { AjmanFreeZoneFaq, FAQ_DATA_AJMAN_FREE_ZONE } from '../components/ajman-free-zone/AjmanFreeZoneFaq.jsx';
import { AjmanFreeZoneFinalCTA } from '../components/ajman-free-zone/AjmanFreeZoneFinalCTA.jsx';

export const AjmanFreeZonePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'Ajman Free Zone Business Setup | Brightlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Explore Ajman Free Zone company formation, licence options, required documents, setup costs, visa guidance and business setup support with Brightlink.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/business-setup/free-zone/ajman-free-zone`;

    // 4. Set Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Ajman Free Zone Business Setup | Brightlink';

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = 'Explore Ajman Free Zone company formation, licence options, required documents, setup costs, visa guidance and business setup support with Brightlink.';

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = `${window.location.origin}/images/ajman_freezone_hero.jpg`;

    // 5. Inject Schema.org JSON-LD for Service, BreadcrumbList & FAQPage
    const schemaScriptId = 'ajman-free-zone-schema';
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
              'name': 'Ajman Free Zone',
              'item': `${window.location.origin}/business-setup/free-zone/ajman-free-zone`
            }
          ]
        },
        {
          '@type': 'Service',
          'name': 'Ajman Free Zone Business Setup & Company Formation',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Business Setup Services LLC',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Ajman Free Zone Formation',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'Comprehensive corporate consultancy and company formation guidance for Ajman Free Zone (AFZ). Assistance with activity selection, licensing, documents, facilities, residency visas, and corporate banking preparation.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_AJMAN_FREE_ZONE.map(item => ({
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
    <div className="w-full bg-white min-h-screen">
      {/* 1. Hero Section */}
      <AjmanFreeZoneHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Introduction to Ajman Free Zone */}
      <WhatIsAjmanFreeZone onOpenConsultation={onOpenConsultation} />

      {/* 3. Permitted Business Activities */}
      <AjmanBusinessActivities onOpenConsultation={onOpenConsultation} />

      {/* 4. Licence Types */}
      <AjmanLicenceTypes onOpenConsultation={onOpenConsultation} />

      {/* 5. Key Strategic Benefits */}
      <AjmanBenefits onOpenConsultation={onOpenConsultation} />

      {/* 6. Company Legal Structures */}
      <AjmanLegalStructures onOpenConsultation={onOpenConsultation} />

      {/* 7. Step-by-Step Formation Process */}
      <AjmanSetupProcess onOpenConsultation={onOpenConsultation} />

      {/* 8. Required Documents Dossier */}
      <AjmanDocuments onOpenConsultation={onOpenConsultation} />

      {/* 9. Setup Costs & Packages */}
      <AjmanCostOverview onOpenConsultation={onOpenConsultation} />

      {/* 10. Workspace & Facility Options */}
      <AjmanFacilityOptions onOpenConsultation={onOpenConsultation} />

      {/* 11. Residence Visas & Bank Account Guidance */}
      <AjmanVisaAndBanking onOpenConsultation={onOpenConsultation} />

      {/* 12. Corporate Tax & VAT Compliance */}
      <AjmanTaxCompliance onOpenConsultation={onOpenConsultation} />

      {/* 13. Mainland UAE Operations */}
      <AjmanMainlandOperations onOpenConsultation={onOpenConsultation} />

      {/* 14. Why Choose Brightlink */}
      <WhyBrightlinkAjman onOpenConsultation={onOpenConsultation} />

      {/* 15. Frequently Asked Questions */}
      <AjmanFreeZoneFaq onOpenConsultation={onOpenConsultation} />

      {/* 16. Final Call To Action */}
      <AjmanFreeZoneFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default AjmanFreeZonePage;
