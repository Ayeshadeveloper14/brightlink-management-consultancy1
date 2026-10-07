import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { VisaCategoryGrid } from '../components/visa/VisaCategoryGrid.jsx';
import { VisaRequirements } from '../components/visa/VisaRequirements.jsx';

export const VisaPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '10-Year', label: 'Golden Visa Priority' },
    { value: '2-5 Days', label: 'Average Processing' },
    { value: '99.4%', label: 'Approval Success Rate' },
    { value: '100% Legal', label: 'Direct ICP & GDRFA Typing' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="Official UAE Immigration & Residency Services"
        title="UAE Visa"
        titleHighlight="Services & Residency Solutions"
        description="From prestigious 10-year Golden Visas and family sponsorship to corporate employment and investor permits. Authorized, accurate, and expedited."
        breadcrumbs={[{ label: 'Visa Services' }]}
        image="/images/hero_dubai_skyline_1790842330436.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('UAE Visa General Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <VisaCategoryGrid onOpenConsultation={onOpenConsultation} />
          <VisaRequirements onOpenConsultation={onOpenConsultation} />
        </div>
      </section>
    </div>
  );
};

export const Visa = VisaPage;
export default VisaPage;
