import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  DollarSign, 
  HeartPulse, 
  UserCheck, 
  Building,
  AlertCircle
} from 'lucide-react';

export const Eligibility = () => {
  const shouldReduceMotion = useReducedMotion();

  const criteria = [
    {
      id: 1,
      requirement: 'Passport validity',
      detail: 'Minimum six months at time of application',
      authority: 'GDRFA / ICP',
      icon: FileText
    },
    {
      id: 2,
      requirement: 'Employment type',
      detail: 'Remote work for an employer or business outside the UAE',
      authority: 'GDRFA / ICP',
      icon: Briefcase
    },
    {
      id: 3,
      requirement: 'Minimum monthly income',
      detail: 'USD 3,500 or equivalent in foreign currency',
      authority: 'GDRFA / ICP',
      icon: DollarSign
    },
    {
      id: 4,
      requirement: 'Health insurance',
      detail: 'Valid policy covering the applicant in the UAE',
      authority: 'GDRFA / ICP',
      icon: HeartPulse
    },
    {
      id: 5,
      requirement: 'Age',
      detail: '18 years or older',
      authority: 'GDRFA / ICP',
      icon: UserCheck
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Qualification Criteria
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Eligibility Requirements for the Virtual Work Visa
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Applicants must meet all conditions set by the GDRFA (for Dubai) or the ICP (for other emirates). Eligibility applies to individuals of all nationalities, provided they satisfy the following criteria.
          </p>
        </motion.div>

        {/* Responsive Table / Cards */}
        <div className="bg-white rounded-2xl border border-[#EBE4D8] shadow-sm overflow-hidden mb-8">
          
          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-[#FAF8F5] border-b border-[#EFEAE2] text-xs font-bold uppercase tracking-wider text-[#777777] font-heading">
            <div className="col-span-1">No.</div>
            <div className="col-span-4">Requirement</div>
            <div className="col-span-5">Specification</div>
            <div className="col-span-2 text-right">Governing Authority</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#F5EFE6]">
            {criteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  className="p-5 sm:p-6 md:grid md:grid-cols-12 md:gap-4 md:items-center hover:bg-[#FCFAF8] transition-colors"
                >
                  {/* Number / Mobile Header */}
                  <div className="col-span-1 flex items-center justify-between md:block mb-2 md:mb-0">
                    <span className="text-xs font-bold text-[#B8864B] font-heading">
                      0{item.id}
                    </span>
                    <span className="md:hidden text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3]">
                      {item.authority}
                    </span>
                  </div>

                  {/* Requirement Name */}
                  <div className="col-span-4 flex items-center gap-3 mb-2 md:mb-0">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-[#222222] font-heading">
                      {item.requirement}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="col-span-5 text-xs sm:text-sm text-[#555555] mb-2 md:mb-0">
                    {item.detail}
                  </div>

                  {/* Desktop Authority Tag */}
                  <div className="hidden md:flex col-span-2 justify-end">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3]">
                      {item.authority}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Essential Authority Confirmations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#EBE4D8] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#222222] font-heading mb-1.5">
                Official Evidence of Remote Employment
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                The GDRFA confirms that applicants must provide evidence of remote work for an entity outside the UAE, along with proof of the minimum monthly income. The visa does not permit local employment within the UAE labour market.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EBE4D8] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 mt-0.5">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#222222] font-heading mb-1.5">
                Business Owner & Founder Eligibility
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Business owners applying under this category must also provide evidence of company ownership for at least one year and meet the income threshold.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
