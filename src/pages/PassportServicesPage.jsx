import React from 'react';
import { PassportHero } from '../components/passport-services/PassportHero.jsx';
import { PassportTypes } from '../components/passport-services/PassportTypes.jsx';
import { BlsChecklist } from '../components/passport-services/BlsChecklist.jsx';
import { PassportForm } from '../components/passport-services/PassportForm.jsx';

export const PassportServicesPage = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PassportHero onOpenConsultation={onOpenConsultation} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <PassportTypes />
        <BlsChecklist />
        <PassportForm />
      </div>
    </div>
  );
};

export const PassportServices = PassportServicesPage;
export default PassportServicesPage;
