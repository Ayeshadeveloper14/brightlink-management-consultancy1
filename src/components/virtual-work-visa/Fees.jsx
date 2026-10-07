import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Receipt, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  CreditCard,
  ShieldCheck 
} from 'lucide-react';

export const Fees = () => {
  const shouldReduceMotion = useReducedMotion();

  const fees = [
    {
      component: 'Virtual work visa fee',
      amount: 'AED 200',
      scope: 'Standard base visa issuance fee'
    },
    {
      component: 'VAT',
      amount: '5%',
      scope: 'Applied on visa fee'
    },
    {
      component: 'Knowledge Dirham',
      amount: 'AED 10',
      scope: 'In-country applications only'
    },
    {
      component: 'Innovation Dirham',
      amount: 'AED 10',
      scope: 'In-country applications only'
    },
    {
      component: 'In-country processing fee',
      amount: 'AED 500',
      scope: 'In-country applications only (status adjustment)'
    },
    {
      component: 'Delivery fee',
      amount: 'AED 20',
      scope: 'Emirates Post / courier delivery'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
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
              Official Tariffs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Official Fees for the Virtual Work Visa in Dubai
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The GDRFA regulates all fees for the virtual work visa in Dubai. The total amount depends on whether the applicant is inside or outside the UAE at the time of submission.
          </p>
        </motion.div>

        {/* Official Fee Table */}
        <div className="bg-white rounded-2xl border border-[#EBE4D8] shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#FAF8F5] border-b border-[#EFEAE2] text-xs font-bold uppercase tracking-wider text-[#777777] font-heading">
            <div className="col-span-6 sm:col-span-5">Fee Component</div>
            <div className="col-span-6 sm:col-span-3 text-right sm:text-left">Amount</div>
            <div className="hidden sm:block sm:col-span-4 text-right">Applicability & Condition</div>
          </div>

          <div className="divide-y divide-[#F5EFE6]">
            {fees.map((f, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-12 gap-4 items-center p-5 sm:px-6 hover:bg-[#FCFAF8] transition-colors"
              >
                <div className="col-span-6 sm:col-span-5 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#B8864B]" />
                  <span className="text-sm font-bold text-[#222222] font-heading">
                    {f.component}
                  </span>
                </div>

                <div className="col-span-6 sm:col-span-3 text-right sm:text-left">
                  <span className="text-sm font-extrabold text-[#B8864B] font-heading">
                    {f.amount}
                  </span>
                </div>

                <div className="col-span-12 sm:col-span-4 text-xs text-[#666666] sm:text-right">
                  {f.scope}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Distinctions and Mandatory Costs Notice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#FFFDFB] border border-[#F2DAC6] shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-[#9A400B] font-bold text-sm font-heading">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Separate Government Procedures & Service Costs</span>
            </div>
            <p className="text-xs sm:text-sm text-[#7D3409] leading-relaxed">
              Medical fitness testing, Emirates ID registration, and typing centre services are charged separately and vary depending on the service provider. Applicants should confirm current total costs directly with the GDRFA or the service centre at the time of submission.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2] shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-[#222222] font-bold text-sm font-heading">
              <Info className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>ICP Fees in Other Emirates</span>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              For applications through the ICP in other emirates, the fee structure differs. Applicants should confirm the current applicable fees directly with the ICP before submitting.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
