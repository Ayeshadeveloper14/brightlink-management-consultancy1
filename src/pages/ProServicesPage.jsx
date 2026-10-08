import React, { useEffect } from 'react';
import { Hero } from '../components/pro-services/Hero.jsx';
import { WhatAreProServices } from '../components/pro-services/WhatAreProServices.jsx';
import { ServicesWeHandle } from '../components/pro-services/ServicesWeHandle.jsx';
import { BusinessRequirements } from '../components/pro-services/BusinessRequirements.jsx';
import { ProcessTimeline } from '../components/pro-services/ProcessTimeline.jsx';
import { PricingFeesOverview } from '../components/pro-services/PricingFeesOverview.jsx';
import { WhyChooseBrightlink } from '../components/pro-services/WhyChooseBrightlink.jsx';
import { ProServicesFAQ } from '../components/pro-services/ProServicesFAQ.jsx';
import { ProServicesFinalCTA } from '../components/pro-services/ProServicesFinalCTA.jsx';

export const ProServicesPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    // Dynamic SEO Titles & Meta Description
    document.title = 'Corporate PRO Services in Dubai & UAE | Brightlink Government Liaison';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Outsource your corporate PRO services in Dubai & UAE with Brightlink. Fast-track employment visas, labour cards, trade licence renewals, MOHRE work permits, and government liaison with 100% compliance.'
    );

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Corporate PRO Services in Dubai & UAE | Brightlink Government Liaison'
      );
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        'content',
        'Outsource your corporate PRO services in Dubai & UAE with Brightlink. Fast-track employment visas, labour cards, trade licence renewals, MOHRE work permits, and government liaison with 100% compliance.'
      );
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222] font-sans antialiased selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. What Are PRO Services & Value Proposition */}
      <WhatAreProServices onOpenConsultation={onOpenConsultation} />

      {/* 3. Comprehensive Services We Handle */}
      <ServicesWeHandle onOpenConsultation={onOpenConsultation} />

      {/* 4. Business & Employee Documentation Requirements */}
      <BusinessRequirements onOpenConsultation={onOpenConsultation} />

      {/* 5. 6-Step Government Process Timeline */}
      <ProcessTimeline onOpenConsultation={onOpenConsultation} />

      {/* 6. Pricing Models & Government Fees Overview */}
      <PricingFeesOverview onOpenConsultation={onOpenConsultation} />

      {/* 7. Why Choose Brightlink */}
      <WhyChooseBrightlink />

      {/* 8. Interactive FAQ Accordion */}
      <ProServicesFAQ onOpenConsultation={onOpenConsultation} />

      {/* 9. Final High-Converting Call to Action */}
      <ProServicesFinalCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const ProServices = ProServicesPage;
export default ProServicesPage;
