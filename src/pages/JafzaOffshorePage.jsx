import React, { useEffect } from 'react';
import { JafzaHero } from '../components/jafza-offshore/JafzaHero.jsx';
import { JafzaOverview } from '../components/jafza-offshore/JafzaOverview.jsx';
import { JafzaBenefits } from '../components/jafza-offshore/JafzaBenefits.jsx';
import { JafzaSuitableFor } from '../components/jafza-offshore/JafzaSuitableFor.jsx';
import { JafzaFormationJourney } from '../components/jafza-offshore/JafzaFormationJourney.jsx';
import { JafzaInclusions } from '../components/jafza-offshore/JafzaInclusions.jsx';
import { JafzaDocuments } from '../components/jafza-offshore/JafzaDocuments.jsx';
import { JafzaCanCannot } from '../components/jafza-offshore/JafzaCanCannot.jsx';
import { JafzaVsRak } from '../components/jafza-offshore/JafzaVsRak.jsx';
import { JafzaCompliance } from '../components/jafza-offshore/JafzaCompliance.jsx';
import { JafzaWhyBrigitlink } from '../components/jafza-offshore/JafzaWhyBrigitlink.jsx';
import { JafzaFaq, FAQ_DATA_JAFZA_OFFSHORE } from '../components/jafza-offshore/JafzaFaq.jsx';
import { JafzaFinalCTA } from '../components/jafza-offshore/JafzaFinalCTA.jsx';

export const JafzaOffshorePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'JAFZA Offshore Company Formation in Dubai | Brigitlink Business Setup';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Establish a JAFZA Offshore company in Dubai with Brigitlink. Premier Dubai-domiciled offshore entity for asset holding, Dubai real estate ownership, corporate holding, and multi-currency banking.';

    // 3. Inject Schema.org JSON-LD for Service & FAQ
    const schemaScriptId = 'jafza-offshore-schema';
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
          'name': 'JAFZA Offshore Company Formation in Dubai',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brigitlink Typing & Consulting',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / JAFZA Offshore Registered Agent',
          'areaServed': {
            '@type': 'City',
            'name': 'Dubai'
          },
          'description': 'Authorized Registered Agent services for JAFZA Offshore entity incorporation in Dubai, global asset holding, Dubai Land Department property ownership, corporate holding structures, and banking assistance.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_JAFZA_OFFSHORE.map(item => ({
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
      <JafzaHero onOpenConsultation={onOpenConsultation} />

      {/* 2. What Is JAFZA Offshore? */}
      <JafzaOverview />

      {/* 3. Why Choose JAFZA Offshore? */}
      <JafzaBenefits />

      {/* 4. Who Is It Suitable For? */}
      <JafzaSuitableFor onOpenConsultation={onOpenConsultation} />

      {/* 5. JAFZA Offshore Formation Journey */}
      <JafzaFormationJourney onOpenConsultation={onOpenConsultation} />

      {/* 6. What Is Included? */}
      <JafzaInclusions />

      {/* 7. Required Documents */}
      <JafzaDocuments onOpenConsultation={onOpenConsultation} />

      {/* 8. What JAFZA Offshore CAN & CANNOT Do */}
      <JafzaCanCannot onOpenConsultation={onOpenConsultation} />

      {/* 9. JAFZA vs RAK Offshore */}
      <JafzaVsRak onOpenConsultation={onOpenConsultation} />

      {/* 10. Compliance & Annual Renewals */}
      <JafzaCompliance onOpenConsultation={onOpenConsultation} />

      {/* 11. Why Brigitlink */}
      <JafzaWhyBrigitlink onOpenConsultation={onOpenConsultation} />

      {/* 12. FAQ Section */}
      <JafzaFaq onOpenConsultation={onOpenConsultation} />

      {/* 13. Final CTA */}
      <JafzaFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default JafzaOffshorePage;
