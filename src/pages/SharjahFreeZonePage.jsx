import React, { useEffect } from 'react';
import { SharjahFreeZoneHero } from '../components/sharjah-free-zone/SharjahFreeZoneHero.jsx';
import { WhatIsSharjahFreeZone } from '../components/sharjah-free-zone/WhatIsSharjahFreeZone.jsx';
import { SharjahMajorJurisdictions } from '../components/sharjah-free-zone/SharjahMajorJurisdictions.jsx';
import { SharjahBenefits } from '../components/sharjah-free-zone/SharjahBenefits.jsx';
import { SharjahLicenceTypes } from '../components/sharjah-free-zone/SharjahLicenceTypes.jsx';
import { SharjahLegalStructures } from '../components/sharjah-free-zone/SharjahLegalStructures.jsx';
import { SharjahSetupProcess } from '../components/sharjah-free-zone/SharjahSetupProcess.jsx';
import { SharjahDocuments } from '../components/sharjah-free-zone/SharjahDocuments.jsx';
import { SharjahCostOverview } from '../components/sharjah-free-zone/SharjahCostOverview.jsx';
import { SharjahFacilityOptions } from '../components/sharjah-free-zone/SharjahFacilityOptions.jsx';
import { SharjahVisaAndBanking } from '../components/sharjah-free-zone/SharjahVisaAndBanking.jsx';
import { SharjahTaxCompliance } from '../components/sharjah-free-zone/SharjahTaxCompliance.jsx';
import { WhyBrightlinkSharjah } from '../components/sharjah-free-zone/WhyBrightlinkSharjah.jsx';
import { SharjahFreeZoneFaq, FAQ_DATA_SHARJAH_FREE_ZONE } from '../components/sharjah-free-zone/SharjahFreeZoneFaq.jsx';
import { SharjahFreeZoneFinalCTA } from '../components/sharjah-free-zone/SharjahFreeZoneFinalCTA.jsx';

export const SharjahFreeZonePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'Sharjah Free Zone Business Setup | Brightlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Explore Sharjah free zone company formation, licensing options (SAIF Zone, SHAMS, SPC, HFZA, SRTIP), required documents, setup costs, visa allocations, and business setup support with Brightlink.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/business-setup/free-zone/sharjah-free-zone`;

    // 4. Set Open Graph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Sharjah Free Zone Business Setup | Brightlink';

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = 'Explore Sharjah free zone company formation, licensing options (SAIF Zone, SHAMS, SPC, HFZA, SRTIP), required documents, setup costs, visa allocations, and business setup support with Brightlink.';

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = `${window.location.origin}/images/sharjah_freezone_hero.jpg`;

    // 5. Inject Schema.org JSON-LD for Service, BreadcrumbList & FAQPage
    const schemaScriptId = 'sharjah-free-zone-schema';
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
              'name': 'Sharjah Free Zone',
              'item': `${window.location.origin}/business-setup/free-zone/sharjah-free-zone`
            }
          ]
        },
        {
          '@type': 'Service',
          'name': 'Sharjah Free Zone Business Setup & Company Formation',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Business Setup Services LLC',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Sharjah Free Zone Formation',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'Consultancy and company formation guidance for Sharjah free zones including SAIF Zone, SHAMS, SPC Free Zone, Hamriyah Free Zone, and SRTIP. Assistance with activity selection, licensing, documents, facilities, and residency visas.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_SHARJAH_FREE_ZONE.map(item => ({
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
      <SharjahFreeZoneHero onOpenConsultation={onOpenConsultation} />

      {/* 2. What Is a Sharjah Free Zone */}
      <WhatIsSharjahFreeZone onOpenConsultation={onOpenConsultation} />

      {/* 3. Major Free Zone Jurisdictions in Sharjah */}
      <SharjahMajorJurisdictions onOpenConsultation={onOpenConsultation} />

      {/* 4. Strategic Advantages & Benefits */}
      <SharjahBenefits onOpenConsultation={onOpenConsultation} />

      {/* 5. Licence Types & Activities */}
      <SharjahLicenceTypes onOpenConsultation={onOpenConsultation} />

      {/* 6. Legal Entity Formations */}
      <SharjahLegalStructures onOpenConsultation={onOpenConsultation} />

      {/* 7. Step-by-Step Setup Process */}
      <SharjahSetupProcess onOpenConsultation={onOpenConsultation} />

      {/* 8. Required Documents Dossier */}
      <SharjahDocuments onOpenConsultation={onOpenConsultation} />

      {/* 9. Estimated Setup Costs & Packages */}
      <SharjahCostOverview onOpenConsultation={onOpenConsultation} />

      {/* 10. Workspace & Facility Options */}
      <SharjahFacilityOptions onOpenConsultation={onOpenConsultation} />

      {/* 11. Residence Visas & Bank Account Guidance */}
      <SharjahVisaAndBanking onOpenConsultation={onOpenConsultation} />

      {/* 12. Corporate Tax, VAT & Auditing Compliance */}
      <SharjahTaxCompliance onOpenConsultation={onOpenConsultation} />

      {/* 13. Why Choose Brightlink for Sharjah Setup */}
      <WhyBrightlinkSharjah onOpenConsultation={onOpenConsultation} />

      {/* 14. Frequently Asked Questions */}
      <SharjahFreeZoneFaq onOpenConsultation={onOpenConsultation} />

      {/* 15. Final Call To Action */}
      <SharjahFreeZoneFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default SharjahFreeZonePage;
