import React, { useEffect } from 'react';
import { Hero } from '../components/legal-translation/Hero.jsx';
import { ServiceHighlights } from '../components/legal-translation/ServiceHighlights.jsx';
import { WhenYouNeed } from '../components/legal-translation/WhenYouNeed.jsx';
import { DocumentsWeTranslate } from '../components/legal-translation/DocumentsWeTranslate.jsx';
import { LanguagesSupported } from '../components/legal-translation/LanguagesSupported.jsx';
import { CertificationSection } from '../components/legal-translation/CertificationSection.jsx';
import { HowItWorks } from '../components/legal-translation/HowItWorks.jsx';
import { TurnaroundPricing } from '../components/legal-translation/TurnaroundPricing.jsx';
import { WhyChooseBrigitlink } from '../components/legal-translation/WhyBrigitlink.jsx';
import { FAQ } from '../components/legal-translation/FAQ.jsx';
import { FinalCTA } from '../components/legal-translation/FinalCTA.jsx';

export const LegalTranslationPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Legal Translation UAE | Certified Legal Translation in Dubai | Brigitlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Certified legal translation services in Dubai & across UAE. Arabic to English & multilingual legal document translation for courts, ministries, visas, and business.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Legal Translation UAE | Certified Legal Translation in Dubai | Brigitlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Official certified legal document translation in UAE: Arabic, English, court documents, contracts, civil certificates, and MOJ compliance.'
      );
    }

    // Dynamic Schema.org JSON-LD structured data for Legal Service
    const schemaScriptId = 'legal-translation-schema';
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = schemaScriptId;
      existingScript.type = 'application/ld+json';
      existingScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Certified Legal Translation Services UAE',
        'serviceType': 'Certified Legal Translation & Document Legalization',
        'provider': {
          '@type': 'Organization',
          'name': 'Brigitlink Legal Translation & Government Liaison Services',
          'areaServed': ['Dubai', 'Abu Dhabi', 'Sharjah', 'United Arab Emirates']
        },
        'description': 'Accredited legal translation services for court pleadings, commercial agreements, personal certificates, and educational documents for UAE government submissions.',
        'availableLanguage': ['Arabic', 'English', 'French', 'Russian', 'German', 'Spanish', 'Urdu', 'Hindi', 'Chinese', 'Tagalog'],
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

      {/* 2. Compact Service Highlights */}
      <ServiceHighlights />

      {/* 3. When You Need Legal Translation (2x2 Layout) */}
      <WhenYouNeed />

      {/* 4. Documents We Translate (3 Distinct Blocks) */}
      <DocumentsWeTranslate onOpenConsultation={onOpenConsultation} />

      {/* 5. Languages We Support (Arabic ↔ English Featured) */}
      <LanguagesSupported />

      {/* 6. Certified & Official Translation */}
      <CertificationSection />

      {/* 7. How It Works (Connected 4-Step Timeline) */}
      <HowItWorks />

      {/* 8. Turnaround & Pricing */}
      <TurnaroundPricing onOpenConsultation={onOpenConsultation} />

      {/* 9. Why Choose Brigitlink (Compact 4-Point Layout) */}
      <WhyChooseBrigitlink />

      {/* 10. FAQ Accordion */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 11. Final CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </article>
  );
};

export const LegalTranslation = LegalTranslationPage;
export default LegalTranslationPage;
