import React, { useEffect } from 'react';
import { Hero } from '../components/investor-visa/Hero.jsx';
import { VisaOverview } from '../components/investor-visa/VisaOverview.jsx';
import { AboutVisa } from '../components/investor-visa/AboutVisa.jsx';
import { Eligibility } from '../components/investor-visa/Eligibility.jsx';
import { CostBreakdown } from '../components/investor-visa/CostBreakdown.jsx';
import { Process } from '../components/investor-visa/Process.jsx';
import { Documents } from '../components/investor-visa/Documents.jsx';
import { CompareVisas } from '../components/investor-visa/CompareVisas.jsx';
import { FAQ } from '../components/investor-visa/FAQ.jsx';
import { ConsultationCTA } from '../components/investor-visa/ConsultationCTA.jsx';
import { ApplicationForm } from '../components/investor-visa/ApplicationForm.jsx';

export const InvestorVisa = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'Investor Visa UAE | 2-3 Year UAE Investor Visa';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Apply for a UAE Investor Visa as a shareholder or director of a Free Zone or Mainland company. Explore eligibility, costs, documents and the application process.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('application-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero 
        onOpenConsultation={onOpenConsultation}
        onScrollToForm={scrollToForm}
      />

      {/* 2. Visa Overview Stats Strip */}
      <VisaOverview />

      {/* 3. About This Visa */}
      <AboutVisa 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 4. Eligibility Criteria */}
      <Eligibility 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 5. Cost Breakdown */}
      <CostBreakdown 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 6. Step-by-Step Process Timeline */}
      <Process 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. Documents Required Checklist */}
      <Documents 
        onOpenConsultation={onOpenConsultation}
      />

      {/* 8. Compare Investor Visa vs Other Visas */}
      <CompareVisas />

      {/* 9. Frequently Asked Questions */}
      <FAQ />

      {/* 10. Consultation CTA & Consultant Stats Block */}
      <ConsultationCTA 
        onOpenConsultation={onOpenConsultation}
        onScrollToForm={scrollToForm}
      />

      {/* 11. Application Form */}
      <ApplicationForm />
    </div>
  );
};

export default InvestorVisa;
