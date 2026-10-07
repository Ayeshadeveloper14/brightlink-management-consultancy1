import React, { useEffect } from 'react';
import { Hero } from '../components/maid-visa/Hero.jsx';
import { TrustBar } from '../components/maid-visa/TrustBar.jsx';
import { VisaOverview } from '../components/maid-visa/VisaOverview.jsx';
import { Eligibility } from '../components/maid-visa/Eligibility.jsx';
import { Process } from '../components/maid-visa/Process.jsx';
import { Documents } from '../components/maid-visa/Documents.jsx';
import { Articles } from '../components/maid-visa/Articles.jsx';
import { FAQ } from '../components/maid-visa/FAQ.jsx';
import { FinalCTA } from '../components/maid-visa/FinalCTA.jsx';

export const MaidVisa = ({ onOpenConsultation, onOpenCalculator }) => {
  useEffect(() => {
    document.title = 'Maid Visa UAE | Domestic Worker Visa Dubai';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Apply for a UAE maid or domestic worker visa in Dubai. Get help with entry permit, status change, DHA medical, Emirates ID, MOHRE contract and GDRFA residency stamping.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToProcess = () => {
    const el = document.getElementById('process') || document.getElementById('maid-process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#B8864B] selection:text-white">
      {/* 1. Hero Section */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onScrollToProcess={handleScrollToProcess}
      />

      {/* 2. Featured / Trust Bar */}
      <TrustBar />

      {/* 3. Domestic Worker Visa Overview */}
      <VisaOverview
        onOpenConsultation={onOpenConsultation}
      />

      {/* 4. Important Eligibility / Salary & Accommodation Rules */}
      <Eligibility />

      {/* 5. How It Works (6 Process Steps) */}
      <Process
        onOpenConsultation={onOpenConsultation}
      />

      {/* 6. Documents Required (Sponsor & Domestic Worker) */}
      <Documents />

      {/* 7. Articles Section */}
      <Articles />

      {/* 8. FAQ Section */}
      <FAQ />

      {/* 9. Final CTA */}
      <FinalCTA
        onOpenConsultation={onOpenConsultation}
        onOpenCalculator={onOpenCalculator}
      />
    </div>
  );
};

export default MaidVisa;
