import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Coins, 
  Calculator, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Receipt,
  FileSpreadsheet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const UaqCostOverview = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const costDrivers = [
    {
      title: 'Registration & Initial Incorporation',
      badge: 'One-Time Authority Fee',
      desc: 'Encompasses initial trade name reservation, preliminary authority approval, corporate charter registration, and certificate of formation issuance.',
      factors: 'Varies based on legal structure (FZE vs FZC vs Branch) and shareholder complexity.'
    },
    {
      title: 'Licence Issuance & Activity Schedule',
      badge: 'Annual Recurring Fee',
      desc: 'The annual fee payable directly to the free zone authority for your active trade licence.',
      factors: 'Standard single-group trading or consultancy licences differ from General Trading licences or multi-activity bundled packages.'
    },
    {
      title: 'Commercial Facility & Workspace Lease',
      badge: 'Lease Contract (Annual)',
      desc: 'The official physical or shared workspace package required by UAE law to maintain an active registered address.',
      factors: 'Flexi-desk coworking options offer entry-level budgeting, whereas private serviced suites and warehouses scale with square footage.'
    },
    {
      title: 'Establishment / Immigration Card',
      badge: 'Immigration File Fee',
      desc: 'Required to open the company’s corporate immigration file with the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).',
      factors: 'Essential if the company intends to sponsor investor or employee residence visas; renewable annually or biennially.'
    },
    {
      title: 'Residence Visas & Medical Testing',
      badge: 'Per-Applicant Expense',
      desc: 'Government fees for entry permits, in-country status adjustments, VIP medical fitness tests, and Emirates ID biometric processing.',
      factors: 'Depends on the number of visas required and whether the applicant is applying from abroad or changing status inside the UAE.'
    },
    {
      title: 'Ongoing Accounting & Annual Compliance',
      badge: 'Statutory Operations',
      desc: 'Periodic bookkeeping, Corporate Tax registration and annual return filing, VAT compliance (if applicable), and year-end audit readiness.',
      factors: 'Scaled to transactional volume, gross revenue, and specific UAE tax classification (Qualifying Free Zone Person vs standard).'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Coins className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FINANCIAL TRANSPARENCY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAQ Free Zone Setup Costs & Financial Factors
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Understanding the complete cost landscape ensures your business is budgeted accurately from day one. Rather than relying on unverified promotional slogans, we provide a transparent breakdown of official fees, facility costs, and third-party disbursements.
          </p>
        </div>

        {/* 6 Cost Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {costDrivers.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl border border-[#E6D7C3] p-6 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-[#FAF5EC] px-2.5 py-0.5 rounded border border-[#DECBB5]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>

                <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#EFEAE2] text-xs text-[#334155] leading-relaxed">
                  <strong className="text-[#8C5E28]">Cost Variable: </strong>
                  {item.factors}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F1EAE0] flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Official government breakdown</span>
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clear Cost Distinctions Notice */}
        <div className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <Receipt className="w-5 h-5 text-[#B8864B]" />
            <h4 className="font-bold text-sm text-[#1E293B] font-heading">
              How Brightlink Distinguishes Official Fees from Service Costs
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Many online advertisements claim “all-inclusive packages” without clarifying that visa quotas, medical fitness fees, establishment cards, or third-party bank fees are billed separately. Brightlink maintains strict integrity: every quote we issue clearly segregates: (1) direct government authority fees payable to UAQ FTZ and ICP, (2) mandatory facility lease rates, (3) medical and Emirates ID third-party disbursements, and (4) professional PRO and document preparation fees.
          </p>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5D7A1] text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Personalized Cost Modeling</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Request a UAQ Free Zone Cost Estimate
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Tell us your planned business activities and visa requirements. Our corporate team will compile a customized, itemized fee schedule with zero hidden surprises.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('UAQ Free Zone Cost Estimate Request');
                } else {
                  window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20request%20a%20UAQ%20Free%20Zone%20cost%20estimate.', '_blank');
                }
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Request a UAQ Free Zone Cost Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/calculator')}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#F5D7A1]" />
              <span>Open Calculator</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
