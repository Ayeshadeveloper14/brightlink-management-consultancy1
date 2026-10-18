import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  Check, 
  AlertCircle, 
  ArrowRight, 
  Coins, 
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';

export const FreeZoneCostOverview = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const costComponents = [
    {
      title: 'Free Zone Trade License Fee',
      category: 'Annual Authority Fee',
      description: 'Covers official registration, business activity approvals, and the annual trade license permit issued by the chosen authority.',
      impactFactor: 'Varies by authority (e.g. IFZA vs DMCC vs DAFZA) and number of registered activities.'
    },
    {
      title: 'Registered Office / Workspace Facility',
      category: 'Facility & Lease',
      description: 'Mandatory registered commercial presence. Options range from flexible smart desks (flexi-desk) to dedicated coworking spaces, private executive offices, or industrial warehouses.',
      impactFactor: 'Scales based on space size, physical location prestige, and required visa quotas.'
    },
    {
      title: 'Immigration Establishment Card',
      category: 'Immigration File Registry',
      description: 'Establishes the corporate immigration file with the General Directorate of Residency and Foreigners Affairs (GDRFA), enabling the company to issue residence visas.',
      impactFactor: 'Standard government immigration tariff renewable annually or biennially depending on authority.'
    },
    {
      title: 'UAE Residence Visas (Per Person)',
      category: 'Residency & Biometrics',
      description: 'Covers entry permit, express medical fitness examination (blood test & chest X-ray), Emirates ID biometric registration, and 2-year electronic residence visa stamping.',
      impactFactor: 'Multiplied by number of partners, investors, executive directors, and employees.'
    },
    {
      title: 'Mandatory Health Insurance',
      category: 'Healthcare Compliance',
      description: 'Dubai Health Authority (DHA) mandates basic or comprehensive health insurance coverage for all UAE residence visa holders.',
      impactFactor: 'Varies according to age, medical history, coverage network, and insurance underwriter.'
    },
    {
      title: 'Corporate Bank Account Assistance',
      category: 'Banking Onboarding',
      description: 'Documentation compilation, shareholder profile dossier preparation, and direct introduction to top-tier UAE corporate banks (e.g., Emirates NBD, Wio, Mashreq).',
      impactFactor: 'Complimentary advisory included in Brightlink full-service setup packages.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Coins className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TRANSPARENT FEE FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Dubai Free Zone Setup Cost Breakdown
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Free zone setup costs in Dubai vary depending on the chosen authority, your commercial activities, the number of residence visas needed, and the type of office facility. Brightlink provides complete cost transparency with no hidden typing or PRO surcharges.
          </p>
        </div>

        {/* Cost Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {costComponents.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:border-[#DECBB5] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]/60 font-heading">
                    {comp.category}
                  </span>
                  <span className="text-xs font-bold text-[#B8864B]">Component 0{idx + 1}</span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                  {comp.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {comp.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-start gap-1.5 text-[11px] text-[#475569]">
                <AlertCircle className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                <span><strong>Cost Drivers:</strong> {comp.impactFactor}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cost Calculator CTA Banner */}
        <div className="rounded-3xl bg-white border border-[#E6D7C3] p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-xs font-bold text-[#8C5E28]">
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Get Itemized Government & Authority Quotation</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0F172A]">
              Want a Tailored Cost Estimate for Your Specific Activity?
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Every free zone has unique promotional tariffs and visa packages. Speak directly with a Brightlink business setup specialist to receive a comprehensive, itemized cost comparison across IFZA, DMCC, Meydan, and Dubai South.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenConsultation('Dubai Free Zone - Itemized Cost Sheet')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer font-heading"
            >
              Request Custom Quote
            </button>
            <button
              type="button"
              onClick={() => navigate('/calculator')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FAF7F0] hover:bg-[#FAF5EC] text-[#0F172A] border border-[#E6D7C3] font-semibold text-xs tracking-wide transition-colors cursor-pointer"
            >
              Use Cost Calculator
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
