import React from 'react';
import { PageHero } from '../components/shared/PageHero.jsx';
import { UniversalCalculator } from '../components/calculator/UniversalCalculator.jsx';
import { ShieldCheck, CheckCircle2, HelpCircle, FileCheck, PhoneCall, Sparkles } from 'lucide-react';

export const CalculatorPage = ({ onOpenConsultation }) => {
  const heroStats = [
    { value: '23+ Services', label: 'All UAE Portals' },
    { value: '100% Upfront', label: 'Zero Hidden Charges' },
    { value: 'Official Rates', label: 'GDRFA, ICP & MOHRE' },
    { value: 'Express 24h', label: 'VIP Speed Tracks' }
  ];

  const faqs = [
    {
      q: 'Are the fees calculated here official government fees?',
      a: 'Yes. All statutory fees are synchronized with official GDRFA Dubai, ICP Federal Authority, MOHRE, and Dubai Health Authority fee structures. Typing and consultation charges reflect our certified services in Business Bay, Dubai.'
    },
    {
      q: 'Can fees change depending on inside vs. outside UAE status?',
      a: 'Yes. When an applicant is already physically present in the UAE on a visit or expired visa, a status change voucher (approx. AED 650) is legally mandated by immigration before stamping residency without exiting the country.'
    },
    {
      q: 'Do you offer VIP same-day medical fitness and Emirates ID typing?',
      a: 'Yes. We provide priority booking at smart VIP medical fitness centres (results in 2 to 4 hours) as well as expedited Emirates ID biometric appointments.'
    },
    {
      q: 'Can I get a formal quotation for corporate PRO or multi-dependent packages?',
      a: 'Absolutely. Use our instant WhatsApp button or click "Proceed With Document Audit" to connect directly with our senior immigration consultants for a consolidated corporate invoice.'
    }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <PageHero
        badge="Universal Government Fee Transparency"
        title="UAE Service & Visa"
        titleHighlight="Cost Calculator"
        description="Instantly calculate exact government statutory fees, accredited typing charges, Emirates ID, DHA medical fitness, and corporate setup costs across 23+ official UAE portals. 100% transparent pricing with zero hidden fees."
        breadcrumbs={[
          { label: 'Tools', path: '/services' },
          { label: 'Service Cost Calculator' }
        ]}
        image="/images/why_fast_process_1790842377870.jpg"
        stats={heroStats}
        onOpenConsultation={() => onOpenConsultation('Universal Calculator Inquiry')}
        showConsultationBtn={true}
        showWhatsAppBtn={true}
      />

      {/* Main Interactive Universal Calculator Section */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FBF7F0] border border-[#B8864B]/30 inline-block mb-3">
              Real-Time Fee Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
              Select Your Service & Customize Parameters
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              Pick any visa, corporate, legal attestation, or identity service below. Adjust applicant count, urgency, or location to see instant itemized breakdowns.
            </p>
          </div>

          <UniversalCalculator onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* Transparency Guarantee & Benefits Section */}
      <section className="py-16 bg-[#FBF9F6] border-t border-b border-[#EFE9DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#E8DFD5] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#8C6230] flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#222222] mb-2">
                100% Upfront Pricing
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                No unexpected add-ons or hidden processing fees at counter. What you calculate is exactly what you pay for government receipts and certified typing.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8DFD5] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#8C6230] flex items-center justify-center mb-5">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#222222] mb-2">
                Pre-Submission File Audit
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Every application is thoroughly audited by authorized typing PROs before payment vouchers are issued to prevent government fines or application rejection.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E8DFD5] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] text-[#8C6230] flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#222222] mb-2">
                Official Ministry Portals
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Direct integration and accreditation with GDRFA Dubai, ICP Federal, MOHRE, Dubai Land Department (DLD), and Ministry of Foreign Affairs (MOFA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] mt-1">
              Fee Structure & Official Policies
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FCFAF8] border border-[#E8DFD5] rounded-xl p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#8C6230] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#222222]">
                      {faq.q}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Need help banner */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#1E1E1E] to-[#141414] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-neutral-800">
            <div>
              <h4 className="text-lg font-bold">Need a Custom Commercial or Family Assessment?</h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Our senior consultants in Business Bay, Dubai are ready to review your files today.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenConsultation('Calculator Page Custom Assessment')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:from-[#B8864B] hover:to-[#865928] text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Calculator = CalculatorPage;
export default CalculatorPage;
