import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  ShieldCheck, 
  FileText, 
  Receipt, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export const RevaluationFeesSection = () => {
  const feeTiers = [
    {
      title: 'Ready Residential Apartment / Villa',
      category: 'Completed Property',
      dldFee: 'AED 4,000 + 5% VAT',
      adminFee: 'AED 580 (Knowledge & Innovation Fees)',
      description: 'Official Dubai Land Department statutory fee for on-site physical inspection and valuation of completed residential assets.',
      highlight: true
    },
    {
      title: 'Off-Plan & Under-Construction Units',
      category: 'Oqood Registration',
      dldFee: 'AED 2,000 + 5% VAT',
      adminFee: 'AED 580 (Knowledge & Innovation Fees)',
      description: 'Applicable for registered off-plan developments, interim ownership deeds, and under-construction apartments.',
      highlight: false
    },
    {
      title: 'Commercial, Retail & Industrial Real Estate',
      category: 'Business Assets',
      dldFee: 'As per DLD Tariff (from AED 4,000+)',
      adminFee: 'AED 580 (Knowledge & Innovation Fees)',
      description: 'Scaled based on gross building area (GFA), industrial classification, and multi-tenant complexity as per official DLD schedules.',
      highlight: false
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Statutory Tariffs
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            Official DLD Valuation Fees
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Transparent government fees with official DLD receipts.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The Dubai Land Department sets fixed statutory fees for property valuations. BrightLink provides complete fee transparency with zero hidden markups or unauthorized surcharges.
          </p>
        </div>

        {/* Fee Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {feeTiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                tier.highlight
                  ? 'bg-[#FCFAF8] border-[#B8864B] shadow-md ring-1 ring-[#B8864B]/30'
                  : 'bg-white border-[#EFEAE2] hover:border-[#DECBB5] shadow-xs'
              }`}
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#976A36] block mb-2">
                  {tier.category}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#222222] mb-4 leading-snug">
                  {tier.title}
                </h3>

                <div className="p-4 rounded-2xl bg-white border border-[#EFEAE2] mb-5 space-y-1.5">
                  <span className="text-[11px] text-neutral-400 block font-medium">Government Valuation Fee:</span>
                  <span className="text-xl font-extrabold text-[#B8864B] font-heading block">
                    {tier.dldFee}
                  </span>
                  <span className="text-[11px] text-neutral-500 block">
                    + {tier.adminFee}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#222222]">
                <Receipt className="w-4 h-4 text-[#B8864B]" />
                <span>Official DLD Electronic Receipt</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agency Case Management Note */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF5EC]/70 border border-[#E6D7C3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#976A36] block">
              BrightLink Typing & File Management
            </span>
            <h4 className="text-base sm:text-lg font-bold text-[#222222]">
              Professional Case Coordination & Liaison
            </h4>
            <p className="text-xs sm:text-sm text-[#555555] max-w-2xl leading-relaxed">
              Our case management fee covers full file compilation, electronic DLD portal lodgement, surveyor inspection scheduling, bank coordination, and direct certificate delivery to your inbox.
            </p>
          </div>

          <a
            href="https://wa.me/971566556645?text=Hello%20BrightLink%2C%20please%20send%20me%20the%20complete%20fee%20estimate%20for%20my%20property%20valuation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shrink-0 cursor-pointer whitespace-nowrap shadow-sm shadow-[#B8864B]/30"
          >
            <span>Get Detailed Fee Quote</span>
          </a>
        </div>

      </div>
    </section>
  );
};
