import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calculator, CheckCircle2, ArrowRight, MessageSquare, Info } from 'lucide-react';

export const CostCalculator = () => {
  const shouldReduceMotion = useReducedMotion();
  const [sponsorType, setSponsorType] = useState('2yr'); // '2yr' | '3yr' | 'golden'
  const [certOption, setCertOption] = useState('bilingual'); // 'arabic' | 'bilingual'

  // Itemized calculations
  const birthCertFee = certOption === 'bilingual' ? 140 : 70;
  const mofaFee = 150;
  const eidFee = sponsorType === 'golden' ? 1070 : sponsorType === '3yr' ? 450 : 355;
  const stampingFee = sponsorType === 'golden' ? 1120 : sponsorType === '3yr' ? 510 : 410;
  const totalGovFee = birthCertFee + mofaFee + eidFee + stampingFee;

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Brightlink! I calculated my newborn visa fees (${sponsorType.toUpperCase()} sponsor, ${certOption} birth certificate) at approximately AED ${totalGovFee}. Please confirm and send me the itemized quote.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section id="cost-calculator" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            4 · Know the cost
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Your exact government fees, in 30 seconds.
          </h2>
          <p className="text-sm text-[#475569] leading-relaxed font-sans">
            Fees change from time to time, so instead of listing numbers that age out of date we keep a live calculator that pulls the latest official rates — itemized for birth certificate, MOFA, Emirates ID and visa stamping, with zero signup. (Passport fees are set by your embassy and vary, so they're not included.)
          </p>
        </motion.div>

        {/* Calculator Card */}
        <div className="p-7 sm:p-10 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-sm space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-[#E8DFC8]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading block">
                Free calculator · estimate in AED
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                UAE newborn visa cost calculator.
              </h3>
            </div>
            <span className="text-xs text-[#64748B] italic">
              Featured in Gulf News, Khaleej Times & The National
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#64748B]">
            Pick the sponsor's visa type and the birth-certificate option, and see every government fee broken down. No signup, no phone number.
          </p>

          {/* Interactive Controls */}
          <div className="space-y-6">
            
            {/* Control 1: Sponsor Visa Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] font-heading mb-3">
                1. Sponsor's Residence Visa Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: '2yr', label: '2-Year Sponsor (Standard)' },
                  { id: '3yr', label: '3-Year Sponsor (Free Zone)' },
                  { id: 'golden', label: '10-Year Golden Visa' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSponsorType(opt.id)}
                    className={`p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-left ${
                      sponsorType === opt.id
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                        : 'bg-white text-[#475569] border-[#DECBB5] hover:border-[#B8864B]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Birth Certificate Option */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0F172A] font-heading mb-3">
                2. DHA Birth Certificate Language Option
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'bilingual', label: 'Arabic & English Bilingual (Recommended)' },
                  { id: 'arabic', label: 'Arabic Only' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setCertOption(opt.id)}
                    className={`p-3.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-left ${
                      certOption === opt.id
                        ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                        : 'bg-white text-[#475569] border-[#DECBB5] hover:border-[#B8864B]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Itemized Calculation Result */}
          <div className="rounded-2xl bg-white border border-[#DECBB5] p-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading pb-2 border-b border-slate-100">
              Live Estimated Breakdown
            </h4>

            <div className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-2 flex justify-between">
                <span className="text-[#475569]">DHA Birth Certificate ({certOption === 'bilingual' ? 'Bilingual' : 'Arabic'})</span>
                <strong className="text-[#0F172A]">AED {birthCertFee}</strong>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-[#475569]">MOFA UAE Attestation</span>
                <strong className="text-[#0F172A]">AED {mofaFee}</strong>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-[#475569]">Emirates ID Typing</span>
                <strong className="text-[#0F172A]">AED {eidFee}</strong>
              </div>
              <div className="py-2 flex justify-between">
                <span className="text-[#475569]">Residence Visa Stamping</span>
                <strong className="text-[#0F172A]">AED {stampingFee}</strong>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-[#B8864B] flex justify-between items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading block">
                  Total Government Fees
                </span>
                <span className="text-[10px] text-slate-400">Zero markup on official government receipts</span>
              </div>
              <span className="text-2xl font-bold text-emerald-800 font-heading">
                AED {totalGovFee}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-2">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleWhatsAppQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#0F172A] hover:bg-[#B8864B] shadow-md transition-all cursor-pointer font-sans"
            >
              <Calculator className="w-4 h-4 text-[#F5D7A1]" />
              <span>Calculate Visa Cost</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CostCalculator;
