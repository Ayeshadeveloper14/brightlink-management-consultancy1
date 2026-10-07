import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { ProcessSection } from '../components/home/ProcessSection.jsx';
import { PortalsIntegration } from '../components/how-it-works/PortalsIntegration.jsx';
import { HowItWorksCTA } from '../components/how-it-works/HowItWorksCTA.jsx';

export const HowItWorksPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '4 Steps', label: 'End-to-End Roadmap' },
    { value: 'Same Day', label: 'Initial Submission' },
    { value: '24 - 48h', label: 'VIP Medical Results' },
    { value: 'Doorstep', label: 'Emirates ID Delivery' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="Zero Delays & Full Transparency"
        title="How We Process"
        titleHighlight="Your UAE Visas & Documents"
        description="A streamlined four-step roadmap engineered to minimize paperwork and eliminate immigration delays from initial consultation to Emirates ID delivery."
        breadcrumbs={[
          { label: 'How It Works' }
        ]}
        image="/images/why_experienced_team_1790842362837.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('How It Works Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <ProcessSection onOpenConsultation={onOpenConsultation} />

      <PortalsIntegration />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
        <HowItWorksCTA onOpenConsultation={onOpenConsultation} />
      </div>
    </div>
  );
};

export const HowItWorks = HowItWorksPage;
export default HowItWorksPage;
