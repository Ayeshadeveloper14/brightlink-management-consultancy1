import React, { useEffect } from 'react';
import { AjmanHero } from '../components/ajman-offshore/AjmanHero.jsx';
import { AjmanOverview } from '../components/ajman-offshore/AjmanOverview.jsx';
import { AjmanAdvantages } from '../components/ajman-offshore/AjmanAdvantages.jsx';
import { AjmanSuitableFor } from '../components/ajman-offshore/AjmanSuitableFor.jsx';
import { AjmanFormationJourney } from '../components/ajman-offshore/AjmanFormationJourney.jsx';
import { AjmanDocuments } from '../components/ajman-offshore/AjmanDocuments.jsx';
import { AjmanCanCannot } from '../components/ajman-offshore/AjmanCanCannot.jsx';
import { AjmanCostTimeline } from '../components/ajman-offshore/AjmanCostTimeline.jsx';
import { AjmanCompliance } from '../components/ajman-offshore/AjmanCompliance.jsx';
import { AjmanVsMainland } from '../components/ajman-offshore/AjmanVsMainland.jsx';
import { AjmanTriComparison } from '../components/ajman-offshore/AjmanTriComparison.jsx';
import { AjmanWhyBrightlink } from '../components/ajman-offshore/AjmanWhyBrightlink.jsx';
import { AjmanFaq, FAQ_DATA_AJMAN_OFFSHORE } from '../components/ajman-offshore/AjmanFaq.jsx';
import { AjmanFinalCTA } from '../components/ajman-offshore/AjmanFinalCTA.jsx';

export const AjmanOffshorePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'Ajman Offshore Company Formation | Brightlink Business Setup Dubai';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Set up an Ajman Offshore company with Brightlink. Cost-effective UAE offshore entity for holding companies, asset ownership, intellectual property custody, and cross-border business structures.';

    // 3. Inject Schema.org JSON-LD for Service & FAQ
    const schemaScriptId = 'ajman-offshore-schema';
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
          'name': 'Ajman Offshore Company Formation',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Consulting',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Ajman Offshore Registered Agent',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'Authorized Registered Agent services for Ajman Offshore entity incorporation, asset ownership, intellectual property custody, corporate holding structures, and banking preparation.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_AJMAN_OFFSHORE.map(item => ({
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
      <AjmanHero onOpenConsultation={onOpenConsultation} />

      {/* 2. What Is Ajman Offshore? */}
      <AjmanOverview />

      {/* 3. Key Advantages */}
      <AjmanAdvantages />

      {/* 4. Who Is Ajman Offshore Suitable For? */}
      <AjmanSuitableFor onOpenConsultation={onOpenConsultation} />

      {/* 5. Ajman Offshore Formation Journey */}
      <AjmanFormationJourney onOpenConsultation={onOpenConsultation} />

      {/* 6. Required Documents */}
      <AjmanDocuments onOpenConsultation={onOpenConsultation} />

      {/* 7. What Ajman Offshore CAN & CANNOT Do */}
      <AjmanCanCannot onOpenConsultation={onOpenConsultation} />

      {/* 8. Cost & Timeline */}
      <AjmanCostTimeline onOpenConsultation={onOpenConsultation} />

      {/* 9. Compliance & Annual Renewal */}
      <AjmanCompliance onOpenConsultation={onOpenConsultation} />

      {/* 10. Ajman Offshore vs Mainland */}
      <AjmanVsMainland onOpenConsultation={onOpenConsultation} />

      {/* 11. Ajman Offshore vs RAK vs JAFZA */}
      <AjmanTriComparison onOpenConsultation={onOpenConsultation} />

      {/* 12. Why Brightlink */}
      <AjmanWhyBrightlink onOpenConsultation={onOpenConsultation} />

      {/* 13. FAQ Section */}
      <AjmanFaq onOpenConsultation={onOpenConsultation} />

      {/* 14. Final CTA */}
      <AjmanFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default AjmanOffshorePage;
