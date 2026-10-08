import React, { useEffect } from 'react';
import { BranchHero } from '../components/branch-rep-office/BranchHero.jsx';
import { BranchVsRepresentativeOffice } from '../components/branch-rep-office/BranchVsRepresentativeOffice.jsx';
import { WhoIsThisForBranch } from '../components/branch-rep-office/WhoIsThisForBranch.jsx';
import { WhySetUpBranchOffice } from '../components/branch-rep-office/WhySetUpBranchOffice.jsx';
import { BranchSetupJourney } from '../components/branch-rep-office/BranchSetupJourney.jsx';
import { BranchRequiredDocuments } from '../components/branch-rep-office/BranchRequiredDocuments.jsx';
import { BranchEligibilitySection } from '../components/branch-rep-office/BranchEligibilitySection.jsx';
import { JurisdictionComparisonSection } from '../components/branch-rep-office/JurisdictionComparisonSection.jsx';
import { BranchCostAndTimeline } from '../components/branch-rep-office/BranchCostAndTimeline.jsx';
import { BranchComplianceSection } from '../components/branch-rep-office/BranchComplianceSection.jsx';
import { TransitionToCommercialSection } from '../components/branch-rep-office/TransitionToCommercialSection.jsx';
import { WhyBrightlinkBranch } from '../components/branch-rep-office/WhyBrightlinkBranch.jsx';
import { BranchFaqAccordion, FAQ_DATA_BRANCH } from '../components/branch-rep-office/BranchFaqAccordion.jsx';
import { BranchFinalCTA } from '../components/branch-rep-office/BranchFinalCTA.jsx';

export const BranchRepOfficePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Page Title
    document.title = 'Branch Office Setup Dubai | Representative Office UAE | Brightlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Expand your parent company into Dubai with a Mainland Branch Office or Representative Office. Complete DET & Ministry of Economy licensing, document attestations, and visas with Brightlink.';

    // 3. Inject Schema.org JSON-LD for Service & FAQ
    const schemaScriptId = 'branch-rep-office-schema';
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
          'name': 'Mainland Branch & Representative Office Setup in Dubai',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Consulting',
            'telephone': '+971566556645',
            'url': window.location.origin
          },
          'serviceType': 'Business Setup / Branch Office Formation',
          'areaServed': {
            '@type': 'Country',
            'name': 'United Arab Emirates'
          },
          'description': 'End-to-end Dubai Mainland Branch and Representative Office setup for domestic and international parent companies, including MOE registration, embassy attestations, and visas.'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_BRANCH.map(item => ({
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
      {/* 1. Split Hero Section */}
      <BranchHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Branch Office vs. Representative Office Comparison */}
      <BranchVsRepresentativeOffice onOpenConsultation={onOpenConsultation} />

      {/* 3. Who is This For? (Company Profiles) */}
      <WhoIsThisForBranch onOpenConsultation={onOpenConsultation} />

      {/* 4. Why Set Up a Branch Office (Strategic Benefits) */}
      <WhySetUpBranchOffice onOpenConsultation={onOpenConsultation} />

      {/* 5. Parent Company → UAE Branch Setup Journey (01-08 Timeline) */}
      <BranchSetupJourney onOpenConsultation={onOpenConsultation} />

      {/* 6. Required Documents Checklist */}
      <BranchRequiredDocuments onOpenConsultation={onOpenConsultation} />

      {/* 7. Eligibility & Corporate Requirements */}
      <BranchEligibilitySection onOpenConsultation={onOpenConsultation} />

      {/* 8. Jurisdiction Overview (Mainland Focus vs Free Zone vs Offshore) */}
      <JurisdictionComparisonSection onOpenConsultation={onOpenConsultation} />

      {/* 9. Cost Determinants & Realistic Timeline */}
      <BranchCostAndTimeline onOpenConsultation={onOpenConsultation} />

      {/* 10. Compliance & Ongoing Regulatory Obligations */}
      <BranchComplianceSection onOpenConsultation={onOpenConsultation} />

      {/* 11. Expanding from Representative Office to Commercial Operations */}
      <TransitionToCommercialSection onOpenConsultation={onOpenConsultation} />

      {/* 12. Why Brightlink Support */}
      <WhyBrightlinkBranch onOpenConsultation={onOpenConsultation} />

      {/* 13. FAQ Accordion (14 Questions) */}
      <BranchFaqAccordion onOpenConsultation={onOpenConsultation} />

      {/* 14. Premium Final Call to Action */}
      <BranchFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default BranchRepOfficePage;
