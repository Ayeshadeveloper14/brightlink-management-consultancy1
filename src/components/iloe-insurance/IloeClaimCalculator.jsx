import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  DollarSign, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Info,
  TrendingUp,
  Percent
} from 'lucide-react';

const QUICK_SALARY_PRESETS = [
  3000,
  5000,
  8000,
  12000,
  16000,
  20000,
  30000,
  45000
];

export const IloeClaimCalculator = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [basicSalary, setBasicSalary] = useState(12000);

  const numericSalary = Number(basicSalary) || 0;
  const isCategoryA = numericSalary <= 16000;
  const categoryName = isCategoryA ? 'Category A' : 'Category B';
  const categoryLimit = isCategoryA ? 10000 : 20000;
  const monthlyPremium = isCategoryA ? 5 : 10;
  const annualPremium = isCategoryA ? 60 : 120;
  
  // Compensation formula: 60% of basic salary, capped at category limit
  const uncappedMonthly = numericSalary * 0.6;
  const monthlyPayout = Math.min(uncappedMonthly, categoryLimit);
  const totalPayout = monthlyPayout * 3;

  return (
    <section id="iloe-calculator" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Interactive UAE Unemployment Compensation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            ILOE Claim & Payout Calculator
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            Calculate your legally guaranteed unemployment compensation. Compensation pays <strong>60% of your average basic salary</strong> for up to 3 consecutive months following involuntary job loss.
          </p>
        </motion.div>

        {/* Main Calculator Panel: Smooth Viewport Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.985, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#FCFAF8] rounded-3xl border border-[#DECBB5] p-6 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Salary Input & Quick Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2 font-heading">
                  Average Monthly Basic Salary (AED)
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-[#B8864B]">
                    AED
                  </div>
                  <input
                    type="number"
                    min="1000"
                    max="200000"
                    step="500"
                    value={basicSalary}
                    onChange={(e) => setBasicSalary(e.target.value)}
                    placeholder="e.g. 12000"
                    className="w-full pl-16 pr-4 py-3.5 rounded-xl border border-slate-300 text-lg font-bold text-[#0F172A] bg-white focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all shadow-xs"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-1.5 block">
                  * Basic salary only (excluding housing allowance, transport, or overtime), as recorded in your MOHRE / Freezone contract.
                </span>
              </div>

              {/* Salary Quick-Select Pills */}
              <div>
                <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2.5 font-heading">
                  Quick-Select Basic Salary:
                </span>
                <div className="flex flex-wrap gap-2">
                  {QUICK_SALARY_PRESETS.map((val) => (
                    <motion.button
                      key={val}
                      type="button"
                      whileHover={shouldReduceMotion ? {} : { y: -1.5, scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => setBasicSalary(val)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        numericSalary === val
                          ? 'bg-[#0F172A] text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-[#B8864B] hover:text-[#B8864B]'
                      }`}
                    >
                      AED {val.toLocaleString()}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Category Qualification Explanation */}
              <div className="p-4 rounded-xl bg-white border border-[#EBE4D8] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A] font-heading">
                    Official Assigned Tier:
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#FAF5EC] text-[#8C6230] border border-[#B8864B]/30">
                    {categoryName}
                  </span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {isCategoryA ? (
                    <>
                      <strong>Category A (Basic Salary ≤ AED 16,000):</strong> Mandatory contribution is only <strong>AED 5/month</strong> (AED 60/year). Monthly payout ceiling is capped at <strong>AED 10,000/month</strong> for up to 3 months.
                    </>
                  ) : (
                    <>
                      <strong>Category B (Basic Salary &gt; AED 16,000):</strong> Mandatory contribution is <strong>AED 10/month</strong> (AED 120/year). Monthly payout ceiling is capped at <strong>AED 20,000/month</strong> for up to 3 months.
                    </>
                  )}
                </p>
              </div>

              {/* Requirement Rule Disclaimer */}
              <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-1">
                <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <span>
                  Eligibility requirement: You must be subscribed to ILOE for at least 12 consecutive months without policy default, and termination must be involuntary.
                </span>
              </div>

            </div>

            {/* Right Column: Estimated Payout Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-2xl p-6 sm:p-7 shadow-lg shadow-slate-900/15 flex flex-col justify-between space-y-6">
              
              <div>
                <span className="text-[11px] font-bold text-[#F5D7A1] uppercase tracking-wider block mb-1">
                  Estimated Payout Assessment
                </span>
                <h3 className="text-xl font-bold font-heading text-white">
                  3-Month Unemployment Safety Net
                </h3>
              </div>

              {/* Payout Numbers */}
              <div className="space-y-4 py-2 border-y border-white/10">
                <div>
                  <span className="text-xs text-slate-300 block mb-0.5">
                    Monthly Payout (60% of Basic):
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#F5D7A1] font-heading">
                    AED {monthlyPayout.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    <span className="text-xs font-normal text-slate-300 ml-1">/ month</span>
                  </div>
                  {uncappedMonthly > categoryLimit && (
                    <span className="text-[10px] text-amber-300 block mt-0.5">
                      Capped at {categoryName} maximum limit of AED {categoryLimit.toLocaleString()}/mo
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-xs text-slate-300 block mb-0.5">
                    Maximum Total Claim Payout (3 Months):
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold text-white font-heading">
                    AED {totalPayout.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Disbursed directly into your UAE bank account via Dubai Insurance.
                  </span>
                </div>
              </div>

              {/* Premium Breakdown */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span>Your Required Monthly Premium:</span>
                  <strong className="text-white">AED {monthlyPremium}.00 / month</strong>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/10">
                  <span>Your Required Annual Premium:</span>
                  <strong className="text-[#F5D7A1]">AED {annualPremium}.00 / year</strong>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span>Late Non-Subscription Fine:</span>
                  <strong className="text-red-400">AED 400.00 (MOHRE penalty)</strong>
                </div>
              </div>

              {/* Bottom Action */}
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => onOpenConsultation(`ILOE Subscription Assistance (${categoryName})`)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-xs text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] via-[#E2C08D] to-[#C5985B] hover:brightness-105 active:scale-98 shadow-md transition-all cursor-pointer font-sans"
              >
                <span>Subscribe or Settle ILOE Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IloeClaimCalculator;
