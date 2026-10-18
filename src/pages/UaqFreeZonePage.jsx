import React, { useEffect } from 'react';
import { UaqHero } from '../components/uaq-free-zone/UaqHero.jsx';
import { UaqIntroduction } from '../components/uaq-free-zone/UaqIntroduction.jsx';
import { UaqBenefits } from '../components/uaq-free-zone/UaqBenefits.jsx';
import { UaqActivitiesAndLicences } from '../components/uaq-free-zone/UaqActivitiesAndLicences.jsx';
import { UaqTargetBusinesses } from '../components/uaq-free-zone/UaqTargetBusinesses.jsx';
import { UaqLegalStructures } from '../components/uaq-free-zone/UaqLegalStructures.jsx';
import { UaqSetupProcess } from '../components/uaq-free-zone/UaqSetupProcess.jsx';
import { UaqDocuments } from '../components/uaq-free-zone/UaqDocuments.jsx';
import { UaqCostOverview } from '../components/uaq-free-zone/UaqCostOverview.jsx';
import { UaqVisaAndImmigration } from '../components/uaq-free-zone/UaqVisaAndImmigration.jsx';
import { UaqFacilities } from '../components/uaq-free-zone/UaqFacilities.jsx';
import { UaqBankingGuidance } from '../components/uaq-free-zone/UaqBankingGuidance.jsx';
import { UaqTaxAndCompliance } from '../components/uaq-free-zone/UaqTaxAndCompliance.jsx';
import { UaqMainlandTrading } from '../components/uaq-free-zone/UaqMainlandTrading.jsx';
import { WhyBrightlinkUaq } from '../components/uaq-free-zone/WhyBrightlinkUaq.jsx';
import { UaqFreeZoneFaq, FAQ_DATA_UAQ_FREE_ZONE } from '../components/uaq-free-zone/UaqFreeZoneFaq.jsx';
import { UaqFinalCTA } from '../components/uaq-free-zone/UaqFinalCTA.jsx';

export const UaqFreeZonePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Document Title
    document.title = 'UAQ Free Zone Company Formation | Brightlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Explore UAQ Free Zone (UAQ FTZ) company formation in Umm Al Quwain. Professional guidance on licences, business activities, setup costs, residence visas, and corporate banking with Brightlink.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/business-setup/free-zone/uaq-free-zone/`;

    // 4. Set Open Graph Metadata
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'UAQ Free Zone Company Formation | Brightlink';

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = 'Explore UAQ Free Zone (UAQ FTZ) company formation in Umm Al Quwain. Professional guidance on licences, business activities, setup costs, residence visas, and corporate banking with Brightlink.';

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = `${window.location.origin}/src/assets/images/uaq_freezone_hero_1792345014619.jpg`;

    // 5. Inject Schema.org JSON-LD Structured Data
    const schemaScriptId = 'uaq-free-zone-schema';
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
          'name': 'UAQ Free Zone Company Formation (UAQ FTZ)',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Consulting',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Free Zone Company Formation',
          'areaServed': {
            '@type': 'State',
            'name': 'Umm Al Quwain, United Arab Emirates'
          },
          'description': 'End-to-end company formation guidance in Umm Al Quwain Free Trade Zone (UAQ FTZ), including commercial, consultancy, and e-commerce licensing, flexi-desk and warehouse leasing, residence visa processing, and corporate bank account dossier preparation.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_UAQ_FREE_ZONE.map((item) => ({
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
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <UaqHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Introduction to UAQ Free Trade Zone */}
      <UaqIntroduction onOpenConsultation={onOpenConsultation} />

      {/* 3. Key Benefits */}
      <UaqBenefits onOpenConsultation={onOpenConsultation} />

      {/* 4. Business Activities and Licence Options */}
      <UaqActivitiesAndLicences onOpenConsultation={onOpenConsultation} />

      {/* 5. Which Businesses May Consider UAQ FTZ? */}
      <UaqTargetBusinesses onOpenConsultation={onOpenConsultation} />

      {/* 6. Company Legal Structures */}
      <UaqLegalStructures onOpenConsultation={onOpenConsultation} />

      {/* 7. Step-by-Step Formation Process */}
      <UaqSetupProcess onOpenConsultation={onOpenConsultation} />

      {/* 8. Required Documents Checklist */}
      <UaqDocuments onOpenConsultation={onOpenConsultation} />

      {/* 9. Setup Costs and Financial Breakdown */}
      <UaqCostOverview onOpenConsultation={onOpenConsultation} />

      {/* 10. Visa & Immigration Framework */}
      <UaqVisaAndImmigration onOpenConsultation={onOpenConsultation} />

      {/* 11. Office & Workspace Options */}
      <UaqFacilities onOpenConsultation={onOpenConsultation} />

      {/* 12. Corporate Bank Account Guidance */}
      <UaqBankingGuidance onOpenConsultation={onOpenConsultation} />

      {/* 13. Corporate Tax, VAT & Compliance */}
      <UaqTaxAndCompliance onOpenConsultation={onOpenConsultation} />

      {/* 14. Mainland Trading Boundaries */}
      <UaqMainlandTrading onOpenConsultation={onOpenConsultation} />

      {/* 15. Why Choose Brightlink */}
      <WhyBrightlinkUaq onOpenConsultation={onOpenConsultation} />

      {/* 16. Frequently Asked Questions (20 Q&As) */}
      <UaqFreeZoneFaq onOpenConsultation={onOpenConsultation} />

      {/* 17. Final Conversion Call-to-Action */}
      <UaqFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default UaqFreeZonePage;
