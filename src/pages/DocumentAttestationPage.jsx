import React, { useEffect } from 'react';
import { Hero } from '../components/document-attestation/Hero.jsx';
import { QuickHighlights } from '../components/document-attestation/QuickHighlights.jsx';
import { WhenDoYouNeed } from '../components/document-attestation/WhenDoYouNeed.jsx';
import { DocumentTypes } from '../components/document-attestation/DocumentTypes.jsx';
import { AttestationJourney } from '../components/document-attestation/AttestationJourney.jsx';
import { ProcessWithBrigitlink } from '../components/document-attestation/ProcessWithBrigitlink.jsx';
import { FeesTransparency } from '../components/document-attestation/FeesTransparency.jsx';
import { WhyChooseBrigitlink } from '../components/document-attestation/WhyChooseBrigitlink.jsx';
import { DocumentRequirements } from '../components/document-attestation/DocumentRequirements.jsx';
import { FAQ } from '../components/document-attestation/FAQ.jsx';
import { FinalCTA } from '../components/document-attestation/FinalCTA.jsx';

export const DocumentAttestationPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Document Attestation UAE | MOFA & Embassy Certificate Legalization | Brigitlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional document attestation services in Dubai and across the UAE. Legalization for educational degrees, marriage and birth certificates, and commercial documents with MOFA and embassy authentication.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Document Attestation UAE | MOFA & Embassy Certificate Legalization | Brigitlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Turnkey UAE document attestation and legalization services: educational degrees, personal civil certificates, commercial documents, apostille, and MOFA stamps.'
      );
    }

    // Dynamic Schema.org JSON-LD structured data for Government Legalization Service
    const schemaScriptId = 'document-attestation-schema';
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = schemaScriptId;
      existingScript.type = 'application/ld+json';
      existingScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'GovernmentService',
        'name': 'UAE Document Attestation & MOFA Legalization Services',
        'serviceType': 'Document Legalization, Consular Attestation & MOFA Certification',
        'provider': {
          '@type': 'Organization',
          'name': 'Brigitlink UAE Legal & Government Liaison Services',
          'areaServed': ['Dubai', 'Abu Dhabi', 'United Arab Emirates']
        },
        'description': 'End-to-end document attestation and consular legalization for educational degrees, marriage certificates, birth certificates, and commercial documents with UAE Ministry of Foreign Affairs (MOFA) certification.',
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
      {/* 1. Hero — Document-Focused Design */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Quick Service Highlights (Slim Horizontal Bar) */}
      <QuickHighlights />

      {/* 3. When Do You Need Document Attestation? */}
      <WhenDoYouNeed />

      {/* 4. Documents We Can Assist With (3 Asymmetric Categories) */}
      <DocumentTypes onOpenConsultation={onOpenConsultation} />

      {/* 5. Attestation Journey (MAIN VISUAL HIGHLIGHT: Connected Pathway) */}
      <AttestationJourney />

      {/* 6. Simple Process With Brigitlink */}
      <ProcessWithBrigitlink />

      {/* 7. Fees & Transparency */}
      <FeesTransparency onOpenConsultation={onOpenConsultation} />

      {/* 8. Why Choose Brigitlink (Compact 4-Point Layout) */}
      <WhyChooseBrigitlink />

      {/* 9. Document Requirements (What You May Need Checklist) */}
      <DocumentRequirements />

      {/* 10. Clean Accordion FAQ */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 11. Final CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </article>
  );
};

export const DocumentAttestation = DocumentAttestationPage;
export default DocumentAttestationPage;
