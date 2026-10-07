import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { LicenseTypes } from '../components/business-setup/LicenseTypes.jsx';
import { SetupProcess } from '../components/business-setup/SetupProcess.jsx';
import { BusinessSetupForm } from '../components/business-setup/BusinessSetupForm.jsx';

export const BusinessSetupPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '100%', label: 'Foreign Ownership' },
    { value: '3 - 5 Days', label: 'License Delivery' },
    { value: 'Top Banks', label: 'Account Introduction' },
    { value: '500+ Setup', label: 'Successful Businesses' }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="UAE Corporate Formation & Trade Licensing"
        title="Business Setup"
        titleHighlight="in Dubai & UAE Mainland / Freezones"
        description="Launch your commercial venture in the world’s most dynamic business capital. We manage trade licensing, Ejari, investor visas, and corporate bank accounts from start to finish."
        breadcrumbs={[{ label: 'Business Setup' }]}
        image="/images/why_experienced_team_1790842362837.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('Business Setup General Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
          <LicenseTypes onOpenConsultation={onOpenConsultation} />
          <SetupProcess />
          <BusinessSetupForm />
        </div>
      </section>
    </div>
  );
};

export const BusinessSetup = BusinessSetupPage;
export default BusinessSetupPage;
