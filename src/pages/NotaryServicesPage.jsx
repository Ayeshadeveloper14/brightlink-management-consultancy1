import React, { useEffect } from 'react';
import { Hero } from '../components/notary-services/Hero.jsx';
import { Overview } from '../components/notary-services/Overview.jsx';
import { WhenYouMayNeed } from '../components/notary-services/WhenYouMayNeed.jsx';
import { PowerOfAttorneyServices } from '../components/notary-services/PowerOfAttorneyServices.jsx';
import { OnlineNotarisation } from '../components/notary-services/OnlineNotarisation.jsx';
import { HowItWorks } from '../components/notary-services/HowItWorks.jsx';
import { DocumentPreparation } from '../components/notary-services/DocumentPreparation.jsx';
import { WhyBrightlink } from '../components/notary-services/WhyBrightlink.jsx';
import { FAQ } from '../components/notary-services/FAQ.jsx';
import { FinalCTA } from '../components/notary-services/FinalCTA.jsx';

export const NotaryServicesPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Notary Services UAE | Power of Attorney & POA Notarisation Dubai | Brightlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional notary services in Dubai & UAE. Power of Attorney drafting, general & special POA notarisation, property authorisations, and online notary services with Brightlink.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Notary Services UAE | Power of Attorney & POA Notarisation Dubai | Brightlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Professional assistance with UAE notary services and Power of Attorney: property, corporate, banking, legal representations, and online remote notarisation.'
      );
    }

    // Dynamic Schema.org JSON-LD structured data for Notary / Legal Service
    const schemaScriptId = 'notary-services-schema';
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = schemaScriptId;
      existingScript.type = 'application/ld+json';
      existingScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Notary & Power of Attorney Services UAE',
        'serviceType': 'Notary Public Legalization & Power of Attorney Drafting',
        'provider': {
          '@type': 'Organization',
          'name': 'Brightlink Legal Documentation & Government Liaison Services',
          'areaServed': ['Dubai', 'Abu Dhabi', 'United Arab Emirates']
        },
        'description': 'Professional assistance with Power of Attorney preparation, property authorization instruments, corporate declarations, and UAE online notary public procedures.',
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
    <article className="bg-[#FFFFFF] min-h-screen text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Notary Services Overview */}
      <Overview />

      {/* 3. When You May Need Notary Services */}
      <WhenYouMayNeed />

      {/* 4. Power of Attorney Services (2x2 Layout) */}
      <PowerOfAttorneyServices onOpenConsultation={onOpenConsultation} />

      {/* 5. Online Notarisation (3-Step Visual) */}
      <OnlineNotarisation />

      {/* 6. How It Works (Clean 5-Step Timeline) */}
      <HowItWorks />

      {/* 7. Document Preparation (Checklist) */}
      <DocumentPreparation />

      {/* 8. Why Choose Brightlink (Minimal 4-Point Layout) */}
      <WhyBrightlink />

      {/* 9. FAQ Accordion */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 10. Final CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </article>
  );
};

export const NotaryServices = NotaryServicesPage;
export default NotaryServicesPage;
