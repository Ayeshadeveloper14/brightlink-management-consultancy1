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
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const UaqSetupProcess = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      step: '01',
      title: 'Initial Consultation',
      desc: 'Our advisors review your overall business plan, target customer demographic, budget constraints, and operational requirements to confirm whether UAQ FTZ is the optimal jurisdiction.',
      icon: Compass
    },
    {
      step: '02',
      title: 'Select Business Activity',
      desc: 'Determine your primary and secondary activities from the official UAQ FTZ schedule, verifying whether activities fall under commercial, consultancy, services, or industrial classes.',
      icon: Layers
    },
    {
      step: '03',
      title: 'Choose Legal Structure',
      desc: 'Decide the appropriate corporate framework (FZE for a single owner, FZC for multi-partner entities, or a Branch for an established domestic or foreign parent company).',
      icon: Scale
    },
    {
      step: '04',
      title: 'Trade Name Reservation',
      desc: 'Submit at least three proposed trade names that satisfy UAE naming guidelines (avoiding prohibited religious, political, or misleading terms) for authority verification.',
      icon: FileCheck2
    },
    {
      step: '05',
      title: 'Prepare Documentation',
      desc: 'Compile shareholder identification documents, valid passport copies, residential address proofs, and (for corporate shareholders) notarized parent company constitutive records.',
      icon: FileCheck2
    },
    {
      step: '06',
      title: 'Select Workspace Facility',
      desc: 'Select the commercial facility that corresponds to your operational footprint and desired visa quota—from shared flexi-desks to serviced offices or industrial warehouses.',
      icon: Building
    },
    {
      step: '07',
      title: 'Submit Official Application',
      desc: 'Submit the formal application dossier and initial registration forms directly to the UAQ FTZ licensing department for administrative and security clearance.',
      icon: Send
    },
    {
      step: '08',
      title: 'Fee Payment & Approvals',
      desc: 'Settle official government registration and licensing invoices, and finalize any required external ministerial approvals (for specialized or regulated activities).',
      icon: CreditCard
    },
    {
      step: '09',
      title: 'Receive Business Licence',
      desc: 'UAQ FTZ issues your official Commercial Trade Licence, Certificate of Incorporation, registered Tenancy Contract, and signed Memorandum of Association.',
      icon: Award
    },
    {
      step: '10',
      title: 'Post-Licensing Execution',
      desc: 'Brightlink coordinates your immigration establishment file, investor and employee residence visas, corporate bank account applications, and Corporate Tax registration.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FORMATION METHODOLOGY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Step-by-Step UAQ Free Zone Company Formation
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Our structured 10-step formation process provides complete transparency and meticulous document control from initial assessment to final banking and visa execution.
          </p>
        </div>

        {/* 10 Step Process Grid */}
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
                className="bg-white rounded-2xl border border-[#E6D7C3] p-5 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-[#B8864B] font-heading tracking-tight">
                      {st.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
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

                <div className="mt-4 pt-2 border-t border-[#F1EAE0] text-[10px] text-[#8C5E28] font-semibold">
                  Step {st.step} of 10
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Reality Statement */}
        <div className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex items-start gap-4">
          <Clock className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#475569] leading-relaxed space-y-1">
            <h4 className="font-bold text-[#1E293B]">
              Realistic Processing Timeline & Authority Considerations
            </h4>
            <p>
              Processing durations vary depending on document readiness, shareholding complexity, chosen activity categories, and external ministerial clearances. While straightforward standard licences can typically be issued within 3 to 5 business days following complete document submission, specialized or industrial activities require additional review. Brightlink coordinates with the authority daily to maintain swift progression without premature promises.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
