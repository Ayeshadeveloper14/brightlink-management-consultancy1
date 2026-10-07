import React, { useEffect } from 'react';
import { Hero } from '../components/tawjeeh/Hero.jsx';
import { WhatIsTawjeeh } from '../components/tawjeeh/WhatIsTawjeeh.jsx';
import { WhoNeedsTawjeeh } from '../components/tawjeeh/WhoNeedsTawjeeh.jsx';
import { OurServices } from '../components/tawjeeh/OurServices.jsx';
import { WhatYoullLearn } from '../components/tawjeeh/WhatYoullLearn.jsx';
import { ProcessWorkflow } from '../components/tawjeeh/ProcessWorkflow.jsx';
import { WhyChooseBrigitlink } from '../components/tawjeeh/WhyChooseBrigitlink.jsx';
import { FAQ } from '../components/tawjeeh/FAQ.jsx';
import { FinalCTA } from '../components/tawjeeh/FinalCTA.jsx';

export const TawjeehPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Tawjeeh Services UAE | MOHRE Labour Orientation & Compliance | Brigitlink';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional MOHRE Tawjeeh services in Dubai, Abu Dhabi & UAE. Employee labour-law orientation, employer awareness sessions, and completion certificate processing with Brigitlink.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Tawjeeh Services UAE | MOHRE Labour Orientation & Compliance | Brigitlink'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'MOHRE Tawjeeh orientation services in UAE: employee awareness, labour law guidance, workplace rights, and certificate support.'
      );
    }

    // Dynamic Schema.org JSON-LD structured data
    const schemaScriptId = 'tawjeeh-services-schema';
    let existingScript = document.getElementById(schemaScriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = schemaScriptId;
      existingScript.type = 'application/ld+json';
      existingScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'GovernmentService',
        'name': 'MOHRE Tawjeeh Services UAE',
        'serviceType': 'Ministry of Human Resources & Emiratisation (MOHRE) Labour Orientation',
        'provider': {
          '@type': 'Organization',
          'name': 'Brigitlink UAE Government Liaison & PRO Services',
          'areaServed': ['Dubai', 'Abu Dhabi', 'United Arab Emirates']
        },
        'description': 'Comprehensive MOHRE Tawjeeh orientation support, employer awareness, labour law guidance, and official certificate processing across the UAE.',
        'audience': {
          '@type': 'Audience',
          'audienceType': 'Employees & Employers in UAE Mainland Private Sector'
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

      {/* 2. What is Tawjeeh? */}
      <WhatIsTawjeeh />

      {/* 3. Who Needs Tawjeeh? */}
      <WhoNeedsTawjeeh />

      {/* 4. Our Tawjeeh Services */}
      <OurServices onOpenConsultation={onOpenConsultation} />

      {/* 5. What the Session Covers (What You'll Learn) */}
      <WhatYoullLearn />

      {/* 6. Simple Process (How It Works) */}
      <ProcessWorkflow />

      {/* 7. Why Choose Brigitlink */}
      <WhyChooseBrigitlink />

      {/* 8. FAQ */}
      <FAQ onOpenConsultation={onOpenConsultation} />

      {/* 9. Final CTA */}
      <FinalCTA onOpenConsultation={onOpenConsultation} />
    </article>
  );
};

export const Tawjeeh = TawjeehPage;
export default TawjeehPage;
