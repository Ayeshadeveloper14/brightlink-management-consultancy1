import React, { useEffect } from 'react';
import { FujairahHero } from '../components/fujairah-free-zone/FujairahHero.jsx';
import { FujairahIntroduction } from '../components/fujairah-free-zone/FujairahIntroduction.jsx';
import { FujairahActivities } from '../components/fujairah-free-zone/FujairahActivities.jsx';
import { FujairahLicences } from '../components/fujairah-free-zone/FujairahLicences.jsx';
import { FujairahLegalStructures } from '../components/fujairah-free-zone/FujairahLegalStructures.jsx';
import { FujairahBenefits } from '../components/fujairah-free-zone/FujairahBenefits.jsx';
import { FujairahSetupProcess } from '../components/fujairah-free-zone/FujairahSetupProcess.jsx';
import { FujairahDocuments } from '../components/fujairah-free-zone/FujairahDocuments.jsx';
import { FujairahCostOverview } from '../components/fujairah-free-zone/FujairahCostOverview.jsx';
import { FujairahFacilities } from '../components/fujairah-free-zone/FujairahFacilities.jsx';
import { FujairahVisaAndBanking } from '../components/fujairah-free-zone/FujairahVisaAndBanking.jsx';
import { FujairahTaxAndCompliance } from '../components/fujairah-free-zone/FujairahTaxAndCompliance.jsx';
import { WhyBrightlinkFujairah } from '../components/fujairah-free-zone/WhyBrightlinkFujairah.jsx';
import { FujairahFaq, FAQ_DATA_FUJAIRAH_FREE_ZONE } from '../components/fujairah-free-zone/FujairahFaq.jsx';
import { FujairahFinalCTA } from '../components/fujairah-free-zone/FujairahFinalCTA.jsx';

export const FujairahFreeZonePage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Document Title
    document.title = 'Fujairah Free Zone Business Setup | Brightlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Explore Fujairah Free Zone company formation, business licences, required documents, setup costs, facility options and visa guidance with Brightlink.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/business-setup/free-zone/fujairah-free-zone`;

    // 4. Set Open Graph Metadata
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'Fujairah Free Zone Business Setup | Brightlink';

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = 'Explore Fujairah Free Zone company formation, business licences, required documents, setup costs, facility options and visa guidance with Brightlink.';

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = `${window.location.origin}/images/fujairah_freezone_hero.jpg`;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = `${window.location.origin}/business-setup/free-zone/fujairah-free-zone`;

    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.content = 'website';

    // 5. Inject Schema.org JSON-LD (BreadcrumbList, Service, FAQPage)
    const schemaScriptId = 'fujairah-free-zone-schema';
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
              'name': 'Fujairah Free Zone',
              'item': `${window.location.origin}/business-setup/free-zone/fujairah-free-zone`
            }
          ]
        },
        {
          '@type': 'Service',
          '@id': `${window.location.origin}/business-setup/free-zone/fujairah-free-zone#service`,
          'name': 'Fujairah Free Zone Business Setup',
          'serviceType': 'Company Formation & Trade Licensing',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Brightlink Typing & Business Setup Services',
            'url': window.location.origin,
            'telephone': '+971 56 655 6645',
            'email': 'info@brightlinktyping.com',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Dubai',
              'addressRegion': 'Dubai',
              'addressCountry': 'AE'
            }
          },
          'areaServed': {
            '@type': 'AdministrativeArea',
            'name': 'Fujairah, United Arab Emirates'
          },
          'description': 'End-to-end company formation, commercial trading licences, bonded warehousing, industrial manufacturing leases, and residency visa services in Fujairah Free Zone Authority (FFZA).'
        },
        {
          '@type': 'FAQPage',
          'mainEntity': FAQ_DATA_FUJAIRAH_FREE_ZONE.map(faq => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.a
            }
          }))
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    return () => {
      // Cleanup script tag on unmount if needed
      const existingScript = document.getElementById(schemaScriptId);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans">
      <FujairahHero onOpenConsultation={onOpenConsultation} />
      <FujairahIntroduction onOpenConsultation={onOpenConsultation} />
      <FujairahActivities onOpenConsultation={onOpenConsultation} />
      <FujairahLicences onOpenConsultation={onOpenConsultation} />
      <FujairahLegalStructures onOpenConsultation={onOpenConsultation} />
      <FujairahBenefits onOpenConsultation={onOpenConsultation} />
      <FujairahSetupProcess onOpenConsultation={onOpenConsultation} />
      <FujairahDocuments onOpenConsultation={onOpenConsultation} />
      <FujairahCostOverview onOpenConsultation={onOpenConsultation} />
      <FujairahFacilities onOpenConsultation={onOpenConsultation} />
      <FujairahVisaAndBanking onOpenConsultation={onOpenConsultation} />
      <FujairahTaxAndCompliance onOpenConsultation={onOpenConsultation} />
      <WhyBrightlinkFujairah onOpenConsultation={onOpenConsultation} />
      <FujairahFaq onOpenConsultation={onOpenConsultation} />
      <FujairahFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export default FujairahFreeZonePage;
