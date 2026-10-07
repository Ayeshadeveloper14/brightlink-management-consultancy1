import React, { useEffect } from 'react';
import { ProfessionalLicenseHero } from '../components/professional-license/ProfessionalLicenseHero.jsx';
import { ProfessionalLicenseOverview } from '../components/professional-license/ProfessionalLicenseOverview.jsx';
import { WhyChooseMainlandLicense } from '../components/professional-license/WhyChooseMainlandLicense.jsx';
import { SetupJourneyTimeline } from '../components/professional-license/SetupJourneyTimeline.jsx';
import { RequiredDocumentsChecklist } from '../components/professional-license/RequiredDocumentsChecklist.jsx';
import { CostAndTimelineSection } from '../components/professional-license/CostAndTimelineSection.jsx';
import { ComplianceObligations } from '../components/professional-license/ComplianceObligations.jsx';
import { WhoIsThisFor } from '../components/professional-license/WhoIsThisFor.jsx';
import { WhyBrigitlinkSupport } from '../components/professional-license/WhyBrigitlinkSupport.jsx';
import { ProfessionalLicenseFaq, FAQ_DATA_PROFESSIONAL_LICENSE } from '../components/professional-license/ProfessionalLicenseFaq.jsx';
import { ProfessionalLicenseFinalCTA } from '../components/professional-license/ProfessionalLicenseFinalCTA.jsx';

export const ProfessionalLicensePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'Professional License Dubai | Mainland Company Setup | Brigitlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Set up a Dubai Mainland Professional License with 100% foreign ownership. Complete DET company formation for consulting, IT, marketing, and service firms with Brigitlink.';

    // 3. Inject Schema.org JSON-LD for Service & FAQ
    const schemaScriptId = 'professional-license-schema';
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
          'name': 'Mainland Professional License in Dubai',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brigitlink Typing & Consulting',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Mainland Company Formation',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'End-to-end Dubai Mainland Professional License issuance, initial approvals, documentation, and office Ejari registration for service businesses.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_PROFESSIONAL_LICENSE.map(item => ({
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
      <ProfessionalLicenseHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Professional License Overview & Business Activities */}
      <ProfessionalLicenseOverview onOpenConsultation={onOpenConsultation} />

      {/* 3. Why Choose Mainland License (Strategic Benefits) */}
      <WhyChooseMainlandLicense onOpenConsultation={onOpenConsultation} />

      {/* 4. Setup Journey Timeline (Interactive 01-06 Process) */}
      <SetupJourneyTimeline onOpenConsultation={onOpenConsultation} />

      {/* 5. Required Documents Checklist */}
      <RequiredDocumentsChecklist onOpenConsultation={onOpenConsultation} />

      {/* 6. Cost Determinants & Realistic Timeline */}
      <CostAndTimelineSection onOpenConsultation={onOpenConsultation} />

      {/* 7. Corporate & Tax Compliance Obligations */}
      <ComplianceObligations onOpenConsultation={onOpenConsultation} />

      {/* 8. Who is This For? (Business Profiles) */}
      <WhoIsThisFor onOpenConsultation={onOpenConsultation} />

      {/* 9. Why Brigitlink Support */}
      <WhyBrigitlinkSupport onOpenConsultation={onOpenConsultation} />

      {/* 10. Frequently Asked Questions (Accordion) */}
      <ProfessionalLicenseFaq onOpenConsultation={onOpenConsultation} />

      {/* 11. Premium Final Call to Action */}
      <ProfessionalLicenseFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default ProfessionalLicensePage;
