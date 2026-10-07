import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Plane, 
  Send, 
  Ban, 
  AlertTriangle, 
  FileText, 
  CheckCircle2, 
  Info,
  Clock
} from 'lucide-react';

export const EntryConditions = () => {
  const shouldReduceMotion = useReducedMotion();

  const conditions = [
    {
      id: 'tourism-only',
      title: 'Tourism and short visits only',
      description: 'The visa is strictly intended for leisure travel, family reunions, tourism, and brief business visits. It is legally restricted to temporary visitor purposes.',
      icon: Plane,
      status: 'Visitor Scope',
      statusClass: 'bg-[#FAF5EC] text-[#B8864B] border-[#E6D7C3]'
    },
    {
      id: 'delivered-electronically',
      title: 'Delivered electronically when approved',
      description: 'Once issued by UAE immigration authorities, your entry permit is provided in electronic PDF format. You carry a printed or digital copy to board and pass border control.',
      icon: Send,
      status: 'Digital Delivery',
      statusClass: 'bg-[#F0F7FF] text-[#1E6091] border-[#CCE0F5]'
    },
    {
      id: 'no-work-or-reside',
      title: 'Not permission to work or reside',
      description: 'A tourist visa does not grant the right to undertake employment, earn wages, or establish residency in the UAE. Working without an official employment permit carries severe penalties.',
      icon: Ban,
      status: 'Strict Limitation',
      statusClass: 'bg-[#FFF2F0] text-[#D83B28] border-[#FFCCC7]'
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
          className="text-center max-w-3xl mx-auto mb-14"
        >
          {/* Country / Category Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8864B] font-heading">
              UAE
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-xs font-semibold text-[#666666]">Mandatory Pre-Travel Requirements</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Entry conditions before flying.
          </h2>

          {/* Supplied Explanation */}
          <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#EFEAE2] text-left sm:text-center">
            <p className="text-sm font-bold text-[#222222] mb-1 font-heading">
              Dubai visa and UAE visa
            </p>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Travellers use both phrases. “Dubai visa” reflects the destination people search for; “UAE visa” describes the country-level entry permission.
            </p>
          </div>
        </motion.div>

        {/* 3 Key Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {conditions.map((item, index) => {
            const Icon = item.icon;
            const isRestriction = item.id === 'no-work-or-reside';

            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-200 ${
                  isRestriction 
                    ? 'bg-[#FFFDFB] border-[#F2DAC6] hover:border-[#E2B790] shadow-sm' 
                    : 'bg-[#FCFAF8] border-[#EFEAE2] hover:border-[#DECBB5] shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isRestriction ? 'bg-[#FEECEB] text-[#D83B28]' : 'bg-[#FAF5EC] text-[#B8864B]'
                    }`}>
                      <Icon className="w-6 h-6 stroke-[1.9]" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.statusClass}`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] mb-2.5 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {isRestriction && (
                  <div className="mt-6 pt-4 border-t border-[#F5E2D2] flex items-center gap-2 text-xs font-semibold text-[#B84018]">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Non-convertible to employment while in country without official change of status.</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Visual Callout: Legal Visitor Status Disclaimer */}
        <div className="rounded-2xl bg-gradient-to-r from-[#222222] to-[#2E2820] text-white p-6 sm:p-8 shadow-lg border border-black/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#F5D7A1] flex items-center justify-center shrink-0 mt-0.5 border border-white/15">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 font-heading">
                  Clear Distinction: Temporary Visitor Entry vs. Residency
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
                  A tourist visa remains a temporary visitor permission and must never be treated as an alternative to an employment contract or residency card. Ensure all eligibility requirements are verified before boarding your departure flight.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#F5D7A1]" />
              <span>Federal Immigration Standard</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
