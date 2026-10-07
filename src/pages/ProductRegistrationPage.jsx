import React, { useEffect } from 'react';
import { ProductRegistrationHero } from '../components/product-registration/ProductRegistrationHero.jsx';
import { ProductIntroSection } from '../components/product-registration/ProductIntroSection.jsx';
import { ProductCategoriesSection } from '../components/product-registration/ProductCategoriesSection.jsx';
import { ProductRequirementsDocs } from '../components/product-registration/ProductRequirementsDocs.jsx';
import { ProductProcessTimeline } from '../components/product-registration/ProductProcessTimeline.jsx';
import { ProductRegulationsSection } from '../components/product-registration/ProductRegulationsSection.jsx';
import { ProductFaqAccordion } from '../components/product-registration/ProductFaqAccordion.jsx';
import { ProductFinalCta } from '../components/product-registration/ProductFinalCta.jsx';

export const ProductRegistrationPage = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'Product Registration Dubai | Dubai Municipality Montaji & MoIAT Compliance';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section with Professional Product Visual & CTAs */}
      <ProductRegistrationHero onOpenConsultation={onOpenConsultation} />

      {/* 2. What is Product Registration & Who Needs It */}
      <ProductIntroSection onOpenConsultation={onOpenConsultation} />

      {/* 3. Regulated Product Categories & Authorities */}
      <ProductCategoriesSection onOpenConsultation={onOpenConsultation} />

      {/* 4. Requirements & Required Documents Checklist */}
      <ProductRequirementsDocs onOpenConsultation={onOpenConsultation} />

      {/* 5. Our 4-Step Process Timeline: 01 → 02 → 03 → 04 */}
      <ProductProcessTimeline onOpenConsultation={onOpenConsultation} />

      {/* 6. Important Regulations, Validity & Enforcement */}
      <ProductRegulationsSection onOpenConsultation={onOpenConsultation} />

      {/* 7. Frequently Asked Questions Accordion */}
      <ProductFaqAccordion onOpenConsultation={onOpenConsultation} />

      {/* 8. Final Call to Action */}
      <ProductFinalCta onOpenConsultation={onOpenConsultation} />
    </div>
  );
};

export const ProductRegistration = ProductRegistrationPage;
export default ProductRegistrationPage;
