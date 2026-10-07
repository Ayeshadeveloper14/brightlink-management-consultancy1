import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { CostCalculator } from '../components/visa-calculator/CostCalculator.jsx';

export const VisaCalculatorPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '100% Upfront', label: 'Zero Hidden Charges' },
    { value: 'Official Rates', label: 'GDRFA & ICP Aligned' },
    { value: 'Express 24h', label: 'VIP Speed Tracks' },
    { value: 'Free Audit', label: 'Document Pre-Check' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="Instant Cost Transparency"
        title="UAE Official Visa"
        titleHighlight="Fee Calculator"
        description="Calculate exact government immigration fees, Emirates ID charges, VIP medical options, and certified typing costs before you apply. No surprise charges, 100% transparent pricing."
        breadcrumbs={[
          { label: 'Tools', path: '/services' },
          { label: 'Visa Fee Calculator' }
        ]}
        image="/images/why_fast_process_1790842377870.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('Visa Calculator Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <CostCalculator onOpenConsultation={onOpenConsultation} />
        </div>
      </section>
    </div>
  );
};

export const VisaCalculator = VisaCalculatorPage;
export default VisaCalculatorPage;
