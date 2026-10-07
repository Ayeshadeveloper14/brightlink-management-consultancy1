import React, { useLayoutEffect } from 'react';
import { ReraHero } from '../components/rera-license/ReraHero.jsx';
import { ReraServiceOverview } from '../components/rera-license/ReraServiceOverview.jsx';
import { ReraHowItWorksInPractice } from '../components/rera-license/ReraHowItWorksInPractice.jsx';
import { ReraWhyChooseUs } from '../components/rera-license/ReraWhyChooseUs.jsx';
import { ReraClientReviews } from '../components/rera-license/ReraClientReviews.jsx';
import { ReraFaqSection } from '../components/rera-license/ReraFaqSection.jsx';
import { ReraFurtherReading } from '../components/rera-license/ReraFurtherReading.jsx';
import { ReraConsultationForm } from '../components/rera-license/ReraConsultationForm.jsx';

export const ReraLicensePage = ({ onOpenConsultation }) => {
  useLayoutEffect(() => {
    document.title = 'RERA License Dubai: Certified Broker Card & Agency Setup | BrightLink';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#222222]">
      {/* 1. Hero Section */}
      <ReraHero onOpenConsultation={onOpenConsultation} />

      {/* 2. Service Overview (Broker Cards, Agency Setup, Property Management, Trakheesi) */}
      <ReraServiceOverview onOpenConsultation={onOpenConsultation} />

      {/* 3. How It Works in Practice (01 - 06 Practical Regulatory Journey) */}
      <ReraHowItWorksInPractice />

      {/* 4. Why Choose Us (DLD & DED Direct Liaison, First-Attempt Pass Rate, File Audit) */}
      <ReraWhyChooseUs onOpenConsultation={onOpenConsultation} />

      {/* 5. Client Reviews (Verified Broker & Agency Testimonials) */}
      <ReraClientReviews />

      {/* 6. FAQ Section (Key Regulatory & Exam Questions) */}
      <ReraFaqSection />

      {/* 7. Further Reading (Related Dubai Real Estate Guides) */}
      <ReraFurtherReading />

      {/* 8. Consultation Form (Application Audit & Direct WhatsApp) */}
      <ReraConsultationForm />
    </div>
  );
};

export const ReraLicense = ReraLicensePage;
export default ReraLicensePage;
