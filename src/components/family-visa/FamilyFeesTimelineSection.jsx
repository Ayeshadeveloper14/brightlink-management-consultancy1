import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  DollarSign, 
  Clock, 
  Calendar, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const FamilyFeesTimelineSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const governmentFees = [
    {
      item: 'Family Entry Permit (Inside UAE)',
      amount: 'AED 1,180',
      details: 'Official GDRFA / ICP file opening and electronic entry visa for dependents residing inside the country.'
    },
    {
      item: 'Family Entry Permit (Outside UAE)',
      amount: 'AED 490',
      details: 'Entry visa permit issued for dependents traveling to the UAE from abroad.'
    },
    {
      item: 'Status Change (In-Country Transfer)',
      amount: 'AED 680',
      details: 'Legal status modification from previous visit/tourist visa without requiring airport exit or re-entry flight.'
    },
    {
      item: 'Medical Fitness Screening (Adults 18+)',
      amount: 'AED 320 - 850',
      details: 'AED 320 for standard 24-hr DHA center; AED 850 for VIP Smart Salem (blood & X-ray results in 30 minutes).'
    },
    {
      item: 'Emirates ID Application (2 Years)',
      amount: 'AED 370',
      details: 'Official 2-year Emirates ID card typing, biometric processing, and courier home delivery.'
    },
    {
      item: 'Residence Visa Stamping (2 Years)',
      amount: 'AED 580',
      details: 'Final immigration residence approval, digital residency permit issuance, and passport file stamping.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Transparent Pricing & Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Visa Fees & Processing Timelines
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Clear, transparent government fees with zero hidden charges. Choose between our standard and express VIP fast-track processing options.
          </p>
        </motion.div>

        {/* Itemized Government Fee Breakdown Table (Clean Editorial List) */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 overflow-hidden rounded-2xl border border-[#DECBB5] bg-white shadow-xs"
        >
          <div className="bg-[#FAF7F2] p-4 px-6 border-b border-[#DECBB5] flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-heading">
              Official Government Fee Breakdown
            </span>
            <span className="text-[11px] text-[#8C6230] font-semibold">
              GDRFA Dubai / ICP Standard Rates
            </span>
          </div>

          <div className="divide-y divide-[#EBE4D8] text-xs sm:text-sm">
            {governmentFees.map((fee, idx) => (
              <div 
                key={idx} 
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#FAF9F6] transition-colors"
              >
                <div className="space-y-1 sm:max-w-xl">
                  <span className="font-bold text-[#0F172A] text-sm block font-heading">{fee.item}</span>
                  <p className="text-xs text-[#64748B] leading-relaxed">{fee.details}</p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <span className="text-base sm:text-lg font-black text-[#0F172A] font-heading">{fee.amount}</span>
                  <span className="text-[10px] text-slate-400 block font-normal">+ VAT & typing</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Deadlines Callouts: 2 Clean Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <motion.div 
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs space-y-2"
          >
            <div className="flex items-center gap-2 text-[#0F172A]">
              <Clock className="w-5 h-5 text-[#B8864B]" />
              <h3 className="font-bold text-base font-heading">60-Day Status Change Deadline</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Once an entry permit is issued for family members already in the UAE, you have exactly <strong>60 calendar days</strong> to complete medical fitness and residence visa stamping. Overstaying past 60 days attracts daily fines of AED 50/day.
            </p>
          </motion.div>

          <motion.div 
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs space-y-2"
          >
            <div className="flex items-center gap-2 text-[#0F172A]">
              <Calendar className="w-5 h-5 text-[#B8864B]" />
              <h3 className="font-bold text-base font-heading">120-Day Newborn Grace Period</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Babies born in the UAE have a statutory <strong>120-day grace window</strong> from the date of birth to secure a passport, birth certificate, and residence visa. Failure to stamp the visa within 120 days incurs an initial fine of AED 100 plus AED 50/day.
            </p>
          </motion.div>

        </div>

        {/* All-Inclusive Turnkey Package Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#F5EFE6] border border-[#DECBB5] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider block font-heading">
              Complete Hassle-Free PRO Service
            </span>
            <h4 className="text-xl font-bold text-[#0F172A] font-heading">
              Prefer an All-Inclusive Turnkey Family Visa Package?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              We manage the entire cycle: MOFA attestation, entry permit, in-country status change, VIP medical transport/chaperone, biometrics typing, and passport delivery with transparent fixed pricing.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => onOpenConsultation('All-Inclusive Family Visa Package Quote')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Get Custom Family Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FamilyFeesTimelineSection;
