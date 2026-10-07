import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calendar, 
  RefreshCw, 
  Clock, 
  Users, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';

export const ValidityAndFamily = () => {
  const shouldReduceMotion = useReducedMotion();

  const rules = [
    {
      condition: 'Visa validity',
      detail: 'One year from issuance',
      icon: Calendar
    },
    {
      condition: 'Renewal',
      detail: 'By fresh application with updated documents',
      icon: RefreshCw
    },
    {
      condition: 'Grace period after expiry or cancellation',
      detail: '60 days',
      icon: Clock
    },
    {
      condition: 'Family sponsorship',
      detail: 'Spouse and children for the same duration',
      icon: Users
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Terms & Dependents
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Validity, Renewal, and Family Sponsorship
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The virtual work visa is valid for one year from the date of issuance. It is renewable by submitting a new application with updated documentation, provided the applicant continues to meet all eligibility requirements.
          </p>
        </motion.div>

        {/* Structured Conditions Table */}
        <div className="bg-white rounded-2xl border border-[#EBE4D8] shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#FAF8F5] border-b border-[#EFEAE2] text-xs font-bold uppercase tracking-wider text-[#777777] font-heading">
            <div className="col-span-5 sm:col-span-4">Condition</div>
            <div className="col-span-7 sm:col-span-8">Detail</div>
          </div>

          <div className="divide-y divide-[#F5EFE6]">
            {rules.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div 
                  key={idx}
                  className="grid grid-cols-12 gap-4 items-center p-5 sm:px-6 hover:bg-[#FCFAF8] transition-colors"
                >
                  <div className="col-span-5 sm:col-span-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-sm font-bold text-[#222222] font-heading">
                      {r.condition}
                    </span>
                  </div>

                  <div className="col-span-7 sm:col-span-8 text-xs sm:text-sm text-[#555555] font-medium">
                    {r.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grace Period & Compliance Callout */}
        <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#222222] font-heading mb-1.5">
              60-Day Grace Period Regulatory Rule
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              If the visa expires without renewal, a 60-day grace period applies. During this period, the holder must either apply for a new visa, change to a different residence visa category, or leave the UAE. Overstaying past the grace period incurs federal overstay fines.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
