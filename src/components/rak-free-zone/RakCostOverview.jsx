import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Coins, 
  ShieldCheck, 
  Calculator, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RakCostOverview = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const costBreakdown = [
    {
      category: '1. RAKEZ Licence & Government Fees',
      range: 'From AED 6,500 – AED 12,500 / year',
      details: 'Varies according to business activity type (commercial, service, industrial, or e-commerce) and number of registered activities.',
      includes: ['Initial name reservation and preliminary approval', 'RAKEZ Trade Licence issuance', 'Chamber of Commerce registration']
    },
    {
      category: '2. Facility Lease & Commercial Space',
      range: 'Included (Flexi-desk) to AED 18,000+ (Offices)',
      details: 'Coworking flexi-desks are bundled with standard starter licences. Dedicated executive suites and warehouses scale with floor area.',
      includes: ['Official registered UAE business address', 'Ejari-equivalent RAKEZ tenancy contract', 'Meeting room and business center access']
    },
    {
      category: '3. Establishment Card & Immigration Channel',
      range: 'Approx. AED 2,000 – AED 2,500',
      details: 'Mandatory file setup with Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) to enable visa sponsorship.',
      includes: ['Immigration establishment file activation', 'Smart services e-channel registration', 'Annual establishment card renewal']
    },
    {
      category: '4. Residence Visa Processing (Per Visa)',
      range: 'Approx. AED 3,500 – AED 4,800 per 2-year visa',
      details: 'Costs depend on whether the applicant is applying from outside the UAE or changing status from an existing in-country tourist/employment visa.',
      includes: ['Entry permit issuance & status change', 'VIP medical fitness testing', 'Emirates ID biometrics and residence stamping']
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Coins className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TRANSPARENT COST STRUCTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            RAK Free Zone Setup Costs & Pricing Factors
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Ras Al Khaimah Economic Zone is renowned across the GCC for transparent, cost-efficient company formation. No hidden charges, no sudden price spikes on renewal.
          </p>
        </div>

        {/* 4 Cost Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {costBreakdown.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-[#E6D7C3] p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                    {item.category}
                  </h3>
                  <span className="self-start sm:self-auto text-xs font-extrabold text-[#B8864B] bg-[#FAF5EC] px-2.5 py-1 rounded-md border border-[#DECBB5] whitespace-normal break-words">
                    {item.range}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.details}
                </p>

                <div className="space-y-2 pt-3 border-t border-[#F1EAE0]">
                  <span className="text-[11px] font-bold text-[#1E293B] uppercase tracking-wider block">
                    Typical Inclusions:
                  </span>
                  {item.includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#F1EAE0] text-[11px] text-[#64748B] flex items-center justify-between">
                <span>Transparent government invoicing</span>
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cost Calculator CTA Banner */}
        <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5D7A1] text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Interactive Estimates</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Need a tailored quote for your exact visa and facility requirements?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Use the Brightlink Cost Calculator or speak directly with our setup consultants to get an itemized quote with zero surprises.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => navigate('/calculator')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-[#0F172A] text-xs font-bold transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#B8864B]" />
              <span>Open Cost Calculator</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('RAK Free Zone Custom Quote');
                } else {
                  window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20an%20itemized%20cost%20quote%20for%20a%20RAK%20Free%20Zone%20company.', '_blank');
                }
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Get Itemized Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
