import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Coins, 
  Calculator, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Receipt
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BudgetAndCostPlanning = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const costComponents = [
    {
      title: '1. Registration & Incorporation Fees',
      desc: 'One-time government fees payable to the free zone authority for trade name approval, security screening, corporate registry incorporation, and charter documentation.',
      variable: 'Varies by authority, legal structure (FZE vs FZC vs Branch), and corporate shareholder complexity.'
    },
    {
      title: '2. Licence Issuance & Annual Renewal',
      desc: 'The annual commercial fee levied by the authority to issue and maintain your active business licence.',
      variable: 'Standard single-group licences are typically more economical than General Trading or multi-sector licences.'
    },
    {
      title: '3. Commercial Workspace & Facility Leases',
      desc: 'Mandatory registered physical presence required under UAE corporate law to maintain an active commercial address.',
      variable: 'Flexi-desk coworking options provide the lowest entry overhead, while private serviced offices and warehouses scale with square footage.'
    },
    {
      title: '4. Establishment / Immigration File',
      desc: 'Mandatory corporate registration with the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) or GDRFA.',
      variable: 'Required if the company intends to sponsor investor or employee residence visas; renewable annually or biennially.'
    },
    {
      title: '5. Residence Visa & Medical Processing',
      desc: 'Government fees for 2-year entry permits, status adjustments, VIP medical fitness examinations, and Emirates ID biometric processing.',
      variable: 'Directly multiplied by the total number of investors, partners, and employees being sponsored.'
    },
    {
      title: '6. Ongoing Accounting, Tax & Audit Compliance',
      desc: 'Statutory bookkeeping, Corporate Tax registration with the FTA, annual tax return filing, and accredited financial audit filings.',
      variable: 'Scaled to transactional volume, gross revenue, and Qualifying Free Zone Person (QFZP) audit requirements.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Coins className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>BUDGET PLANNING & COST DRIVERS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAE Free Zone Costs & Financial Planning
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Accurate financial planning requires looking beyond headline starter packages. A realistic budget accounts for government licensing, facility leases, visa quotas, and ongoing statutory compliance.
          </p>
        </div>

        {/* 6 Cost Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {costComponents.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-6 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <h3 className="text-base font-bold text-[#0F172A] font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>

                <div className="p-3 rounded-xl bg-white border border-[#EFEAE2] text-xs text-[#334155] leading-relaxed">
                  <strong className="text-[#8C5E28]">Cost Variable: </strong>
                  {item.variable}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EFEAE2] flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Statutory & Operational Component</span>
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Integrity Callout */}
        <div className="p-6 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] space-y-2">
          <div className="flex items-center gap-2">
            <Receipt className="w-5 h-5 text-[#B8864B]" />
            <h4 className="font-bold text-sm text-[#1E293B] font-heading">
              Our Transparent Quoting Standard
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Brightlink does not publish speculative promotional prices or promote misleading “all-inclusive” slogans. Total setup costs depend entirely on the specific authority chosen, the exact business activity codes, facility footprint, visa count, and statutory audit obligations. Every quotation we prepare clearly distinguishes direct authority fees from third-party disbursements and professional services.
          </p>
        </div>

        {/* Personalized Setup Quote CTA Banner */}
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5D7A1] text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Customized Fee Modeling</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Get a Personalised Free Zone Setup Quote
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Share your business model, preferred emirates, and visa headcount. Our corporate team will compile a transparent, itemized comparison across multiple relevant free zones.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('Personalized Free Zone Setup Quote');
                } else {
                  window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20a%20personalized%20free%20zone%20setup%20quote.', '_blank');
                }
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Get a Personalised Free Zone Setup Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/calculator')}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#F5D7A1]" />
              <span>Cost Calculator</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
