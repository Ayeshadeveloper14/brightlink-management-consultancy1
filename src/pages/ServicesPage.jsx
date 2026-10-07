import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { ServicesCatalog } from '../components/services/ServicesCatalog.jsx';

export const ServicesPage = ({ onSelectService, onOpenConsultation }) => {
  const heroStats = [
    { value: '12+ Core', label: 'Service Categories' },
    { value: 'Same Day', label: 'Express Portal Typing' },
    { value: '100% Legal', label: 'Government Compliant' },
    { value: 'Zero Errors', label: 'Multi-Tier Pre-Audit' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="Complete UAE Government Typing Catalog"
        title="Comprehensive"
        titleHighlight="Government & Visa Services"
        description="Explore our full portfolio of official residency, legal translation, corporate licensing, consular typing, and family sponsorship services. Fast, transparent, and certified."
        breadcrumbs={[
          { label: 'All Services' }
        ]}
        image="/images/why_fast_process_1790842377870.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('Comprehensive Services Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <ServicesCatalog onSelectService={onSelectService} />
    </div>
  );
};

export const Services = ServicesPage;
export default ServicesPage;
