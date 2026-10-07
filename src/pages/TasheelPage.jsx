import React, { useEffect } from 'react';
import { Hero } from '../components/tasheel/Hero.jsx';
import { Overview } from '../components/tasheel/Overview.jsx';
import { ServicesList } from '../components/tasheel/ServicesList.jsx';
import { WhyChooseBrigitlink } from '../components/tasheel/WhyChooseBrigitlink.jsx';
import { ProcessWorkflow } from '../components/tasheel/ProcessWorkflow.jsx';
import { RequirementsChecklist } from '../components/tasheel/RequirementsChecklist.jsx';
import { ComplianceTrust } from '../components/tasheel/ComplianceTrust.jsx';
import { FAQ } from '../components/tasheel/FAQ.jsx';
import { FinalCTA } from '../components/tasheel/FinalCTA.jsx';

export const TasheelPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Tasheel Services UAE | MOHRE Labour & Work Permit Solutions | Brigitlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional Tasheel and MOHRE services in Dubai and UAE. Work permits, labour contracts, establishment services, visa quotas, and WPS compliance support.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Tasheel Services UAE | MOHRE Labour & Work Permit Solutions | Brigitlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Professional Tasheel and MOHRE services in Dubai and UAE. Work permits, labour contracts, establishment services, visa quotas, and WPS compliance support.'
      );
    }

    // Dynamic Schema.org JSON-LD structured data for Tasheel government services
    const schemaScriptId = 'tasheel-services-schema';
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = schemaScriptId;
      existingScript.type = 'application/ld+json';
      existingScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'GovernmentService',
        'name': 'Tasheel & MOHRE Labour Services UAE',
        'provider': {
          '@type': 'Organization',
          'name': 'Brigitlink UAE Legal & Government Liaison Services',
          'areaServed': 'United Arab Emirates'
        },
        'serviceType': 'Ministry of Human Resources & Emiratisation (MOHRE) Labour Processing',
        'description': 'Professional assistance with UAE Tasheel services including work permit issuance and renewals, labour contracts, quota allocations, establishment records, and Wage Protection System (WPS) compliance.',
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'AED',
          'availability': 'https://schema.org/InStock'
        }
      });
      document.head.appendChild(existingScript);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    return () => {
      const scriptToRemove = document.getElementById(schemaScriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Introduction / Overview */}
      <Overview onOpenConsultation={onOpenConsultation} />

      {/* 3 & 4. Our Tasheel Services (Asymmetric Staggered Grid) */}
      <ServicesList onOpenConsultation={onOpenConsultation} />

      {/* 5. Why Choose Brigitlink (Vertical Connected List) */}
      <WhyChooseBrigitlink onOpenConsultation={onOpenConsultation} />

      {/* 6. How the Process Works (6-Stage Connected Workflow) */}
      <ProcessWorkflow />

      {/* 7. What You May Need (Document Requirements Checklist) */}
      <RequirementsChecklist onOpenConsultation={onOpenConsultation} />

      {/* 8. Handled With Accuracy & Compliance */}
      <ComplianceTrust />

      {/* 9. FAQ Section */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 10. Final CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const Tasheel = TasheelPage;
export default TasheelPage;
