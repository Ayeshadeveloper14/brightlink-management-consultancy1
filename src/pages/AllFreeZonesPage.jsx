import React, { useEffect } from 'react';
import { AllFreeZonesHero } from '../components/all-free-zones/AllFreeZonesHero.jsx';
import { FreeZonesDirectorySection } from '../components/all-free-zones/FreeZonesDirectorySection.jsx';
import { HowToChooseFreeZone } from '../components/all-free-zones/HowToChooseFreeZone.jsx';
import { CommonLicenceTypes } from '../components/all-free-zones/CommonLicenceTypes.jsx';
import { GeneralSetupProcess } from '../components/all-free-zones/GeneralSetupProcess.jsx';
import { BudgetAndCostPlanning } from '../components/all-free-zones/BudgetAndCostPlanning.jsx';
import { VisaBankingTaxGuide } from '../components/all-free-zones/VisaBankingTaxGuide.jsx';
import { AllFreeZonesFaq, FAQ_DATA_ALL_FREE_ZONES } from '../components/all-free-zones/AllFreeZonesFaq.jsx';
import { AllFreeZonesFinalCTA } from '../components/all-free-zones/AllFreeZonesFinalCTA.jsx';

export const AllFreeZonesPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // 1. Set SEO Document Title
    document.title = 'All UAE Free Zones Directory | Complete List & Comparison Guide | Brightlink';

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Explore and compare 40+ UAE Free Zones across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, and Fujairah. Complete directory, licence types, setup costs, residence visas, and corporate banking guidance with Brightlink.';

    // 3. Set Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/business-setup/free-zone/all-free-zones/`;

    // 4. Set Open Graph Metadata
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = 'All UAE Free Zones Directory | Complete List & Comparison Guide | Brightlink';

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = 'Explore and compare 40+ UAE Free Zones across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, and Fujairah. Complete directory, licence types, setup costs, residence visas, and corporate banking guidance with Brightlink.';

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.content = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80';

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = `${window.location.origin}/business-setup/free-zone/all-free-zones/`;

    // 5. Schema.org Structured Data: FAQPage & BreadcrumbList
    const faqSchemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_DATA_ALL_FREE_ZONES.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    const breadcrumbSchemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${window.location.origin}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Business Setup',
          item: `${window.location.origin}/business-setup/`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Free Zone',
          item: `${window.location.origin}/business-setup/free-zone/`
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'All Free Zones',
          item: `${window.location.origin}/business-setup/free-zone/all-free-zones/`
        }
      ]
    };

    let scriptFaq = document.getElementById('all-free-zones-faq-schema');
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'all-free-zones-faq-schema';
      scriptFaq.type = 'application/ld+json';
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchemaData);

    let scriptBreadcrumb = document.getElementById('all-free-zones-breadcrumb-schema');
    if (!scriptBreadcrumb) {
      scriptBreadcrumb = document.createElement('script');
      scriptBreadcrumb.id = 'all-free-zones-breadcrumb-schema';
      scriptBreadcrumb.type = 'application/ld+json';
      document.head.appendChild(scriptBreadcrumb);
    }
    scriptBreadcrumb.textContent = JSON.stringify(breadcrumbSchemaData);

    return () => {
      // Clean up script tags on unmount
      if (scriptFaq && scriptFaq.parentNode) {
        scriptFaq.parentNode.removeChild(scriptFaq);
      }
      if (scriptBreadcrumb && scriptBreadcrumb.parentNode) {
        scriptBreadcrumb.parentNode.removeChild(scriptBreadcrumb);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <AllFreeZonesHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Interactive Free Zones Directory (Search, Filters, Grid, Comparison, Modals) */}
      <FreeZonesDirectorySection onOpenConsultation={onOpenConsultation} />

      {/* 3. Strategic Framework: How to Choose the Right Free Zone */}
      <HowToChooseFreeZone onOpenConsultation={onOpenConsultation} />

      {/* 4. Common Licence Types Across UAE Free Zones */}
      <CommonLicenceTypes onOpenConsultation={onOpenConsultation} />

      {/* 5. 8-Step General Free Zone Setup Roadmap */}
      <GeneralSetupProcess onOpenConsultation={onOpenConsultation} />

      {/* 6. Budget, Cost Factors & Renewal Transparency */}
      <BudgetAndCostPlanning onOpenConsultation={onOpenConsultation} />

      {/* 7. Residence Visas, Banking Due Diligence & Corporate Tax Guide */}
      <VisaBankingTaxGuide onOpenConsultation={onOpenConsultation} />

      {/* 8. Frequently Asked Questions */}
      <AllFreeZonesFaq onOpenConsultation={onOpenConsultation} />

      {/* 9. Final Strategic Call-to-Action */}
      <AllFreeZonesFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
export default AllFreeZonesPage;
