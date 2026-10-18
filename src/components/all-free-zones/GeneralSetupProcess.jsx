import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Scale, 
  FileCheck2, 
  Building, 
  Send, 
  CreditCard, 
  Award, 
  ShieldCheck, 
  Clock, 
  ArrowRight
} from 'lucide-react';

export const GeneralSetupProcess = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      step: '01',
      title: 'Define the Business Activity',
      desc: 'Pinpoint your exact proposed commercial, technical, consulting, or industrial operations against the official UAE activity classification schedules.',
      icon: Layers
    },
    {
      step: '02',
      title: 'Shortlist Suitable Free Zones',
      desc: 'Evaluate candidate economic zones based on industry focus, geographic access, total annual renewal costs, and facility availability.',
      icon: Compass
    },
    {
      step: '03',
      title: 'Select Legal Structure',
      desc: 'Choose between an FZE (single owner), FZC (multiple shareholders), or a Branch of an existing UAE mainland or foreign corporation.',
      icon: Scale
    },
    {
      step: '04',
      title: 'Trade Name Reservation',
      desc: 'Submit at least three proposed corporate trade names compliant with UAE naming guidelines for authority verification and trademark clearance.',
      icon: FileCheck2
    },
    {
      step: '05',
      title: 'Prepare Documentation',
      desc: 'Collect shareholder identification records, passport copies, residential address proofs, and (for corporate entities) attested parent resolutions.',
      icon: FileCheck2
    },
    {
      step: '06',
      title: 'Select Licence & Facility',
      desc: 'Execute the required commercial workspace tenancy agreement—ranging from shared flexi-desks to serviced offices or industrial warehouses.',
      icon: Building
    },
    {
      step: '07',
      title: 'Submit Application',
      desc: 'Submit formal constitutive documents, passport copies, and application forms directly into the free zone authority registration portal.',
      icon: Send
    },
    {
      step: '08',
      title: 'Approvals & Payment',
      desc: 'Settle official government registration and licensing invoices, and finalize any required external ministerial clearances (MOIAT, MOHAP, etc.).',
      icon: CreditCard
    },
    {
      step: '09',
      title: 'Receive Corporate Kit',
      desc: 'The authority issues your official Commercial Trade Licence, Certificate of Incorporation, Memorandum of Association, and Tenancy Lease.',
      icon: Award
    },
    {
      step: '10',
      title: 'Visas, Banking & Tax',
      desc: 'Open your corporate immigration file (Establishment Card), process residence visas, submit bank account dossiers, and register for Corporate Tax.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FORMATION METHODOLOGY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            The UAE Free Zone Company Formation Roadmap
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            While each free zone authority maintains specific administrative nuances, the general incorporation process follows a structured 10-step lifecycle:
          </p>
        </div>

        {/* 10 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-5 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-[#B8864B] font-heading">
                      {st.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-[#0F172A] font-heading">
                    {st.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#EFEAE2] text-[10px] text-[#8C5E28] font-semibold">
                  Phase {st.step} of 10
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Variation Note */}
        <div className="p-6 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
          <Clock className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#1E293B] block">Procedural Variation & Regulatory Review:</strong>
            Specific procedures, turnaround timelines, and document formalities vary according to the respective free zone authority, applicant country of origin, and chosen commercial activities. While standard consulting or e-commerce licences can often be issued in 3 to 5 business days, regulated activities (financial, healthcare, industrial, educational) require mandatory external ministerial review. Brightlink coordinates each stage to ensure compliant, timely progress.
          </div>
        </div>

      </div>
    </section>
  );
};
