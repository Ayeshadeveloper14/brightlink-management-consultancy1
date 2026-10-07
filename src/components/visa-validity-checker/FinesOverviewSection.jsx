import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  FileCheck2, 
  HelpCircle, 
  Scale, 
  MessageSquare, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

export const FinesOverviewSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const gracePeriods = [
    {
      category: 'Golden Visa (10 Years)',
      duration: '180 Days (6 Months)',
      details: 'Self-sponsored investors, scientists, executives, and their sponsored dependents receive an extensive 6-month grace window.'
    },
    {
      category: 'Green Visa & Skilled Professionals',
      duration: '60 to 90 Days',
      details: 'Skilled professionals (MOHRE skill level 1, 2, 3), freelance green visa holders, and property titleholders.'
    },
    {
      category: 'Standard Employment & Residency',
      duration: '30 Days',
      details: 'Private sector employees, mainland LLC partners, and family visa holders following official visa cancellation.'
    },
    {
      category: 'Tourist & Visit Visa Holders',
      duration: '10 Days Grace (Emirate Dependent)',
      details: 'Tourist visa holders should verify exact terms as some emirates enforce immediate fine calculation upon permit expiration.'
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Compliance & Legal Regulations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Overview: Fines in the UAE
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Under updated Federal immigration decrees, the UAE government standardized overstay penalties across all seven emirates to ensure transparent compliance.
          </p>
        </motion.div>

        {/* Content Body */}
        <div className="space-y-10 text-neutral-800 font-sans leading-relaxed text-sm sm:text-base">
          
          {/* Key Stat / Callout Banner: Fade-in + Subtle Hover Depth */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            className="bg-[#FAF7F2] border border-[#DECBB5] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs hover:shadow-md hover:border-[#B8864B]/40 transition-all"
          >
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider block font-heading">
                Standardized National Overstay Rate
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-heading">
                AED 50 <span className="text-base font-semibold text-[#64748B]">/ day</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] max-w-md">
                Applied equally across visit visas, tourist visas, and expired residency permits following the conclusion of your legal grace period.
              </p>
            </div>

            <div className="sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-[#DECBB5] pt-4 sm:pt-0 sm:pl-6 space-y-1">
              <span className="text-xs text-[#64748B] block">Exit Clearance Fee:</span>
              <span className="text-xl font-bold text-[#0F172A]">AED 250 - 320</span>
              <span className="text-[11px] text-slate-500 block">Outpass required at airport departures</span>
            </div>
          </motion.div>

          {/* Grace Periods Breakdown Table / List */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mb-4">
              Understanding UAE Visa Grace Periods
            </h3>
            <p className="text-sm text-[#475569] mb-6">
              When your visa reaches its expiration date or is officially cancelled by your sponsor, you do not face immediate fines. The UAE government grants a transitional window to either change your status, renew your permit, or exit the country lawfully.
            </p>

            <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8]">
              {gracePeriods.map((gp, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={shouldReduceMotion ? {} : { backgroundColor: 'rgba(250, 245, 236, 0.4)', x: 3 }}
                  transition={{ duration: 0.18 }}
                  className="py-4.5 px-2 rounded-lg flex flex-col sm:flex-row sm:items-start justify-between gap-3 transition-colors"
                >
                  <div className="sm:w-1/3">
                    <span className="font-bold text-sm text-[#0F172A] block">{gp.category}</span>
                    <span className="inline-block mt-1 text-xs font-bold text-[#B8864B] bg-[#FAF5EC] px-2 py-0.5 rounded-md">
                      {gp.duration}
                    </span>
                  </div>
                  <div className="sm:w-2/3 text-xs sm:text-sm text-[#475569]">
                    {gp.details}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What Happens If You Overstay: 3 Consequence Pillars with Hover Lift */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mb-4">
              Consequences of Extended Overstay in the UAE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="border-t-2 border-[#B8864B] pt-4 space-y-2 p-2 rounded-b-xl hover:bg-[#FAF7F2]/50 transition-colors"
              >
                <span className="text-xs font-bold uppercase text-[#B8864B] font-heading">Compounding Penalty</span>
                <h4 className="font-bold text-[#0F172A] text-sm">Accumulating Fines</h4>
                <p className="text-xs text-[#64748B]">
                  Fines accumulate daily at AED 50 without an automatic cap. After several months, fines can reach tens of thousands of dirhams.
                </p>
              </motion.div>

              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="border-t-2 border-[#B8864B] pt-4 space-y-2 p-2 rounded-b-xl hover:bg-[#FAF7F2]/50 transition-colors"
              >
                <span className="text-xs font-bold uppercase text-[#B8864B] font-heading">Immigration Restrictions</span>
                <h4 className="font-bold text-[#0F172A] text-sm">Travel Ban & Outpass</h4>
                <p className="text-xs text-[#64748B]">
                  Overstayers cannot exit through airport e-gates. An official exit permit (Outpass) must be paid and issued before flight boarding.
                </p>
              </motion.div>

              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="border-t-2 border-[#B8864B] pt-4 space-y-2 p-2 rounded-b-xl hover:bg-[#FAF7F2]/50 transition-colors"
              >
                <span className="text-xs font-bold uppercase text-[#B8864B] font-heading">Labor Compliance</span>
                <h4 className="font-bold text-[#0F172A] text-sm">Absconding Notice (Circular)</h4>
                <p className="text-xs text-[#64748B]">
                  Employers are legally obligated to report missing staff after 7 days, resulting in an immigration circular and entry block.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* BrightLink Fine Reduction & Waiver Section */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#F5EFE6] border border-[#DECBB5] relative overflow-hidden shadow-xs"
          >
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#8C6230] text-[11px] font-bold uppercase tracking-wider shadow-xs">
                <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>Authorized Legal Committee Representation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                Can Overstay Fines Be Reduced or Waived?
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                <strong>Yes.</strong> If you or an employee accumulated heavy overstay fines due to health emergencies, employer salary disputes, sponsor delays, or unforeseen circumstances, BrightLink types and submits official <em>Fine Reduction Mercy Petitions</em> before the GDRFA Dubai and ICP Judicial Committees.
              </p>
              <ul className="text-xs sm:text-sm text-[#475569] space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Reductions up to 50% to 90% of total accumulated fines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Clearing absconding reports and immigration circulars</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Status modification (in-country transfer) without exiting the UAE</span>
                </li>
              </ul>

              <div className="pt-4">
                <motion.button
                  type="button"
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  onClick={() => onOpenConsultation('Fine Reduction & Waiver Application')}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer shadow-md hover:shadow-lg hover:shadow-slate-900/15"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5985B]" />
                  <span>Apply for Fine Reduction Review</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FinesOverviewSection;
