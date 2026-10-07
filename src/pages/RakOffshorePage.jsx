import React, { useEffect } from 'react';
import { RakHero } from '../components/rak-offshore/RakHero.jsx';
import { RakOverview } from '../components/rak-offshore/RakOverview.jsx';
import { RakUseCases } from '../components/rak-offshore/RakUseCases.jsx';
import { RakBenefits } from '../components/rak-offshore/RakBenefits.jsx';
import { RakLimitationsComparison } from '../components/rak-offshore/RakLimitationsComparison.jsx';
import { RakProcessTimeline } from '../components/rak-offshore/RakProcessTimeline.jsx';
import { RakDocumentsChecklist } from '../components/rak-offshore/RakDocumentsChecklist.jsx';
import { RakComplianceRenewal } from '../components/rak-offshore/RakComplianceRenewal.jsx';
import { RakBankingSupport } from '../components/rak-offshore/RakBankingSupport.jsx';
import { RakWhyBrigitlink } from '../components/rak-offshore/RakWhyBrigitlink.jsx';
import { RakFaq, FAQ_DATA_RAK_OFFSHORE } from '../components/rak-offshore/RakFaq.jsx';
import { RakFinalCTA } from '../components/rak-offshore/RakFinalCTA.jsx';

export const RakOffshorePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'RAK Offshore (RAK ICC) Company Formation | Brigitlink Business Setup Dubai';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Incorporate a RAK ICC offshore entity with Brigitlink. Premier UAE offshore vehicle for global asset protection, Dubai freehold property holding via DLD, international trading, and multi-currency banking.';

    // 3. Inject Schema.org JSON-LD for Service & FAQ
    const schemaScriptId = 'rak-offshore-schema';
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
          'name': 'RAK ICC Offshore Company Formation',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brigitlink Typing & Consulting',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Offshore Company Setup / RAK ICC Registered Agent',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'Licensed Registered Agent services for RAK ICC offshore entity formation, global asset holding, Dubai Land Department property ownership, corporate holding structures, and banking assistance.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_RAK_OFFSHORE.map(item => ({
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

    // 4. Scroll to top on page mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      const tag = document.getElementById(schemaScriptId);
      if (tag) {
        tag.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <RakHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Overview & Architectural Framework */}
      <RakOverview onOpenConsultation={onOpenConsultation} />

      {/* 3. Core Strategic Use Cases Matrix */}
      <RakUseCases onOpenConsultation={onOpenConsultation} />

      {/* 4. Key Benefits & Advantages */}
      <RakBenefits />

      {/* 5. Scope & Limitations Comparison */}
      <RakLimitationsComparison onOpenConsultation={onOpenConsultation} />

      {/* 6. Step-by-Step Incorporation Journey */}
      <RakProcessTimeline onOpenConsultation={onOpenConsultation} />

      {/* 7. Required Documents & Due Diligence */}
      <RakDocumentsChecklist onOpenConsultation={onOpenConsultation} />

      {/* 8. Annual Renewal & Ongoing Compliance */}
      <RakComplianceRenewal onOpenConsultation={onOpenConsultation} />

      {/* 9. Corporate Banking & Treasury Solutions */}
      <RakBankingSupport onOpenConsultation={onOpenConsultation} />

      {/* 10. Why Choose Brigitlink */}
      <RakWhyBrigitlink onOpenConsultation={onOpenConsultation} />

      {/* 11. Comprehensive FAQs */}
      <RakFaq onOpenConsultation={onOpenConsultation} />

      {/* 12. Final High-Converting CTA */}
      <RakFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default RakOffshorePage;
