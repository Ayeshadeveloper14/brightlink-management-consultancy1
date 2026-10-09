import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  HelpCircle, 
  Scale, 
  FileWarning, 
  ArrowRight,
  Baby
} from 'lucide-react';

export const FamilyDeadlinesAndFines = ({ onOpenConsultation }) => {
  const deadlines = [
    {
      timeframe: '60 Days',
      title: 'Entry Permit & Status Change Window',
      desc: 'Once the electronic entry permit is issued or in-country change of status is approved, you have exactly 60 calendar days to complete the medical examination, Emirates ID typing, and residence visa stamping.',
      impact: 'Failing to stamp within 60 days results in permit cancellation and overstay fines of AED 50/day.'
    },
    {
      timeframe: '120 Days',
      title: 'Newborn Baby Registration Deadline',
      desc: 'If a baby is born in the UAE, parents must secure the birth certificate, home country embassy passport, and residency visa within 120 days from birth date.',
      impact: 'Overstay fine of AED 100/day applies automatically after day 120 if the visa is not stamped.'
    },
    {
      timeframe: '30 – 180 Days',
      title: 'Post-Cancellation Grace Period',
      desc: 'When an expat sponsor or dependent cancels their previous employment or residency visa, the UAE grants a legal grace period to either transfer to a new sponsor or exit the country safely.',
      impact: 'Allows ample time to gather attestations, finalize rental leases, and switch to family sponsorship without rush.'
    },
    {
      timeframe: 'AED 50 / Day',
      title: 'Standard UAE Overstay Fine Rate',
      desc: 'Under unified ICP regulations, individuals who exceed their legal visa validity or grace period are charged a standardized fine of AED 50 for every day of overstay.',
      impact: 'Brightlink files fine reduction requests and humanitarian amnesty petitions for qualifying families.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6230]">
              Immigration Compliance
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight font-heading">
            Critical Deadlines, Grace Periods & UAE Fines
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Understanding UAE immigration timelines protects your family from unexpected financial penalties and entry bans. Here are the core statutory milestones enforced by GDRFA and ICP.
          </p>
        </div>

        {/* 4 Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {deadlines.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6D7C3] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#B8864B] font-heading">
                    {item.timeframe}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#8C6230] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#111827] font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-[#555555] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-start gap-2 text-xs text-amber-800 bg-amber-50/60 p-3 rounded-xl border border-amber-100">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">{item.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine Reduction / Legalization Advisory Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#DECBB5] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                Already Overstayed or Approaching Expiry?
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#111827]">
              Overstay Fine Waiver & Humanitarian Legalization
            </h4>
            <p className="text-xs sm:text-sm text-[#555555] max-w-2xl leading-relaxed">
              If your family members have accrued overstay fines due to unforeseen delays in birth certificate attestation or passport renewal, Brightlink can submit a formal fine reduction petition to the GDRFA Dubai committee on your behalf.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenConsultation('Overstay Fine Waiver / Visa Legalization')}
              className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] shadow-xs transition-colors cursor-pointer"
            >
              Request Fine Audit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FamilyDeadlinesAndFines;
