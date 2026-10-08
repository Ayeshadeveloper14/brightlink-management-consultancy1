import React, { useEffect } from 'react';
import { Hero } from '../components/wills-testament/Hero.jsx';
import { WhyAWillMatters } from '../components/wills-testament/WhyAWillMatters.jsx';
import { WhoShouldConsider } from '../components/wills-testament/WhoShouldConsider.jsx';
import { TypesOfWills } from '../components/wills-testament/TypesOfWills.jsx';
import { WhatCanAWillCover } from '../components/wills-testament/WhatCanAWillCover.jsx';
import { TheProcess } from '../components/wills-testament/TheProcess.jsx';
import { DocumentsRequired } from '../components/wills-testament/DocumentsRequired.jsx';
import { WhyChooseBrightlink } from '../components/wills-testament/WhyBrightlink.jsx';
import { FAQ } from '../components/wills-testament/FAQ.jsx';
import { FinalCTA } from '../components/wills-testament/FinalCTA.jsx';

export const WillsTestamentPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Wills and Testament UAE | Will Registration Services Dubai | Brightlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional Wills and Testament registration services in Dubai and UAE. Expatriate estate planning, guardianship wills, property protection, and DIFC / Dubai Courts registration.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Wills and Testament UAE | Will Registration Services Dubai | Brightlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Protect your family, real estate, and financial assets in the UAE through structured Will and Last Testament registration services with Brightlink.'
      );
    }

    // Dynamic Schema.org JSON-LD structured data for Legal Service
    const schemaScriptId = 'wills-testament-schema';
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = schemaScriptId;
      existingScript.type = 'application/ld+json';
      existingScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Wills and Testament Registration Services UAE',
        'serviceType': 'Will Preparation, Drafting & Legal Registration',
        'provider': {
          '@type': 'Organization',
          'name': 'Brightlink Legal Documentation & Government Liaison Services',
          'areaServed': ['Dubai', 'Abu Dhabi', 'United Arab Emirates']
        },
        'description': 'Comprehensive Will and Last Testament drafting, guardianship protection, property wills, and registration assistance through DIFC Wills Service and Dubai Courts.',
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

      {/* 2. Why a Will Matters (Editorial-Style Flow) */}
      <WhyAWillMatters />

      {/* 3. Who Should Consider a Will? (2-Column Presentation) */}
      <WhoShouldConsider />

      {/* 4. Types of Wills (8 Distinct Structures) */}
      <TypesOfWills />

      {/* 5. What Can a Will Cover? (Clean Visual List) */}
      <WhatCanAWillCover />

      {/* 6. The Process (Connected 5-Step Timeline - Main Visual Feature) */}
      <TheProcess />

      {/* 7. Documents Commonly Required (Checklist) */}
      <DocumentsRequired />

      {/* 8. Why Choose Brightlink (Compact 4-Point Layout) */}
      <WhyChooseBrightlink />

      {/* 9. FAQ Accordion */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 10. Final CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </article>
  );
};

export const WillsTestament = WillsTestamentPage;
export default WillsTestamentPage;
