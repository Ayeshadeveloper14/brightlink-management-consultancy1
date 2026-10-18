import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  FileCheck2, 
  Building, 
  PenTool, 
  Award, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const RakSetupProcess = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      step: '01',
      title: 'Activity Selection & Entity Structuring',
      days: 'Day 1',
      desc: 'Brightlink advisors review your business model to pinpoint exact RAKEZ activity codes (commercial, services, industrial, or e-commerce) and establish the optimal legal form (FZE, FZC, or Branch).',
      checklist: [
        'Determine primary and secondary commercial activities',
        'Assess visa quota and facility requirements',
        'Review individual or corporate shareholding structure'
      ],
      icon: Compass
    },
    {
      step: '02',
      title: 'Trade Name Reservation & Initial Approval',
      days: 'Days 1 - 2',
      desc: 'Submit 3 proposed company names compliant with UAE naming guidelines along with shareholder identification for RAKEZ preliminary review and security clearance.',
      checklist: [
        'Ensure trade name does not conflict with existing trademarks',
        'Submit passport copies and proof of address for all partners',
        'Obtain RAKEZ Initial Approval certificate'
      ],
      icon: FileCheck2
    },
    {
      step: '03',
      title: 'Facility Selection & Lease Execution',
      days: 'Day 2',
      desc: 'Select the commercial facility that matches your business activity and visa allocation requirements—ranging from shared coworking flexi-desks to serviced offices or industrial warehouses.',
      checklist: [
        'Confirm workspace type (Flexi-desk, Executive Suite, or Warehouse)',
        'Execute the official RAKEZ Tenancy Lease Agreement',
        'Establish registered business address for UAE compliance'
      ],
      icon: Building
    },
    {
      step: '04',
      title: 'Legal Documentation & MOA Execution',
      days: 'Days 2 - 3',
      desc: 'Draft and execute the company’s Memorandum and Articles of Association (MOA/AOA), Board Resolutions, and specimen signature cards for official registry filing.',
      checklist: [
        'Draft custom MOA/AOA aligned with partner equity percentages',
        'Sign digitally or via in-person appointment with Brightlink PRO',
        'Appoint General Manager and Company Secretary'
      ],
      icon: PenTool
    },
    {
      step: '05',
      title: 'Licence Issuance & Corporate Registry Kit',
      days: 'Days 3 - 5',
      desc: 'RAKEZ issues the official Commercial Trade Licence, Certificate of Incorporation, Share Certificates, and Tenancy Contract. Your company is now legally incorporated in the UAE.',
      checklist: [
        'Receive official RAKEZ Business Licence (electronic & physical)',
        'Obtain Certificate of Formation & Chamber of Commerce registration',
        'Receive official corporate registry kit and seal'
      ],
      icon: Award
    },
    {
      step: '06',
      title: 'Immigration File, Visas & Corporate Banking',
      days: 'Days 5 - 15',
      desc: 'Brightlink opens the company Establishment Card with ICP, coordinates investor and employee residence visas (entry permit, medical test, Emirates ID biometrics), and assists with corporate bank account opening.',
      checklist: [
        'Issue RAKEZ Establishment Card (Immigration Card)',
        'Process 2-Year UAE Investor / Partner / Employee Visas',
        'Deliver banking assistance dossier to leading UAE corporate banks'
      ],
      icon: CreditCard
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STEP-BY-STEP ROADMAP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            How to Form a Company in RAK Free Zone
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Our structured 6-step incorporation methodology ensures fast-track turnaround, total regulatory compliance, and complete peace of mind from initial consultation to final banking introduction.
          </p>
        </div>

        {/* 6 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar with Step Number and Expected Timeline */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#B8864B] font-heading tracking-tight">
                      {st.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] bg-[#FAF5EC] px-2.5 py-0.5 rounded-full border border-[#DECBB5]">
                      {st.days}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                      {st.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {st.desc}
                  </p>

                  {/* Checklist */}
                  <div className="pt-3 border-t border-[#F1EAE0] space-y-2">
                    {st.checklist.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F1EAE0] text-[11px] text-[#8C5E28] font-semibold flex items-center justify-between">
                  <span>Full Brightlink PRO Management</span>
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="bg-white rounded-2xl border border-[#DECBB5] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
              Ready to begin your RAKEZ company incorporation?
            </h3>
            <p className="text-xs sm:text-sm text-[#475569]">
              Connect with our corporate advisors today for a complimentary eligibility assessment and complete cost breakdown.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              if (onOpenConsultation) {
                onOpenConsultation('RAK Free Zone Formation Roadmap');
              } else {
                window.open('https://wa.me/971566556645?text=Hello%2C%20I%20am%20ready%20to%20start%20my%20RAK%20Free%20Zone%20company%20formation.', '_blank');
              }
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 shrink-0 cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <span>Start Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
