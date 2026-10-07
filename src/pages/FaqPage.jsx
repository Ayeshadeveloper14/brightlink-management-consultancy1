import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { FaqAccordion } from '../components/faq/FaqAccordion.jsx';
import { FaqContactCTA } from '../components/faq/FaqContactCTA.jsx';

export const FaqPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: 'Verified', label: 'GDRFA & ICP Guidelines' },
    { value: '100% Upfront', label: 'Fee Transparency' },
    { value: '24/7 Desk', label: 'WhatsApp Help' },
    { value: '< 15 Mins', label: 'Consultant Response' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="Official UAE Knowledge Base"
        title="Frequently Asked"
        titleHighlight="Questions & Guidance"
        description="Clear, authoritative answers to common inquiries regarding UAE residence visas, 10-year Golden Visas, family sponsorships, and consular passport services."
        breadcrumbs={[
          { label: 'Help & FAQ' }
        ]}
        image="/images/about_visa_consultant_1790842347102.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('FAQ Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <section className="py-20 bg-white">
        <FaqAccordion />
        <FaqContactCTA onOpenConsultation={onOpenConsultation} />
      </section>
    </div>
  );
};

export const FAQ = FaqPage;
export default FaqPage;
