import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  Coins, 
  AlertCircle, 
  ArrowRight, 
  Building, 
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';

export const AbuDhabiCostOverview = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const costFactors = [
    {
      title: 'Company Registration Fees',
      category: 'Initial Incorporation',
      description: 'The one-time statutory fee charged by the Free Zone Authority to examine the initial application, review KYC dossiers, and register the entity in the official corporate registry.',
      driver: 'Determined by authority scale (e.g. ADGM Registration Authority vs KEZAD or Masdar City).'
    },
    {
      title: 'Business Licence Fees',
      category: 'Annual Authority Permitting',
      description: 'The recurring annual government fee authorizing the company to perform its approved commercial, professional, industrial, or technology activities.',
      driver: 'Varies according to activity classifications, number of activities bundled, and sector sensitivity.'
    },
    {
      title: 'Office or Facility Costs',
      category: 'Premises & Leases',
      description: 'Every licensed free zone entity requires a physical or designated business address. Options include flexible shared desks, serviced private offices, light industrial units, or large industrial plots.',
      driver: 'Scales based on square footage, building grade (e.g. ADGM Square vs Masdar incubator), and visa quota needs.'
    },
    {
      title: 'Establishment & Immigration Fees',
      category: 'Corporate File Setup',
      description: 'Registration of the company’s corporate immigration file (Establishment Card) with the immigration authorities to enable visa issuance and management.',
      driver: 'Standard government immigration tariffs, renewable every 1 to 2 years depending on authority rules.'
    },
    {
      title: 'Visa Application & Medical Costs',
      category: 'Residency Processing',
      description: 'Expenses per individual visa including entry permit, medical fitness examination (blood test & chest X-ray), Emirates ID biometric fees, and residency stamping.',
      driver: 'Directly multiplied by the total number of shareholders, executive managers, and employees sponsored.'
    },
    {
      title: 'External Approvals & Legal Services',
      category: 'Regulatory Clearance',
      description: 'Third-party clearances required for specific regulated sectors (e.g., FSRA application fees, environmental permits from EAD, or industrial safety certifications).',
      driver: 'Applicable solely to activities requiring external ministry or regulatory supervision.'
    },
    {
      title: 'Annual Renewal & Ongoing Compliance',
      category: 'Annual Maintenance',
      description: 'Ongoing statutory costs including annual licence renewals, facility lease renewals, and annual audit submissions where mandated by authority bylaws.',
      driver: 'Annual operational requirement across all UAE free zones.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Coins className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FEE TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Abu Dhabi Free Zone Company Setup Cost
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            The overall cost of establishing an Abu Dhabi free zone company depends directly on the selected jurisdiction, your specific business activities, facility type, visa requirements, and corporate structure.
          </p>
        </div>

        {/* Cost Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {costFactors.map((cf, idx) => (
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
                    {cf.category}
                  </span>
                  <span className="text-xs font-bold text-[#B8864B]">Component 0{idx + 1}</span>
                </div>

                <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                  {cf.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                  {cf.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-start gap-1.5 text-[11px] text-[#475569]">
                <AlertCircle className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                <span><strong>Key Determinant:</strong> {cf.driver}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quotation Request Box */}
        <div className="rounded-3xl bg-white border border-[#E6D7C3] p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-xs font-bold text-[#8C5E28]">
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Official Authority Fee Assessment</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0F172A]">
              Request a Tailored Cost Quotation for Abu Dhabi
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Because fee schedules vary substantially between international financial centres like ADGM, industrial hubs like KEZAD, and digital clusters like Masdar City and twofour54, Brightlink prepares comprehensive, itemized proposals reflecting verified authority tariffs for your exact operational profile.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenConsultation('Abu Dhabi Free Zone - Tailored Cost Quote')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer font-heading"
            >
              Request a Tailored Quote
            </button>
            <button
              type="button"
              onClick={() => navigate('/calculator')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FAF7F0] hover:bg-[#FAF5EC] text-[#0F172A] border border-[#E6D7C3] font-semibold text-xs tracking-wide transition-colors cursor-pointer"
            >
              Cost Estimator
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
