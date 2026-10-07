import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';

export const RequirementsChecklist = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const requirements = [
    {
      title: 'Valid Passport Copy',
      note: 'Clear color copy of the employee passport with minimum 6 months validity remaining.'
    },
    {
      title: 'UAE Entry Permit',
      note: 'Applicable for incoming foreign employees or in-country status change permits.'
    },
    {
      title: 'Medical Fitness Test Results',
      note: 'Cleared medical fitness certificate from DHA / MOHAP / authorized healthcare centers.'
    },
    {
      title: 'Passport-Size Digital Photograph',
      note: 'Recent white-background photograph conforming to UAE official identity specifications.'
    },
    {
      title: 'Signed Employment Offer & Contract',
      note: 'Endorsed electronic offer letter and standard MOHRE contract executed by both parties.'
    },
    {
      title: 'Establishment & E-Signature Card',
      note: 'Active company establishment card and authorized signatory credentials registered with MOHRE.'
    },
    {
      title: 'Attested Educational Degree',
      note: 'Applicable for professional and managerial job titles (MOHRE skill levels 1 and 2).'
    },
    {
      title: 'Trade Licence & Commercial Registration',
      note: 'Valid commercial trade licence copy issued by the relevant UAE licensing authority.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <FileCheck2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Document Checklist
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            What You May Need
          </h2>

          <p className="text-base text-[#666666] leading-relaxed">
            Essential documentation typically required for MOHRE work permits, labour contracts, and establishment filings.
          </p>
        </motion.div>

        {/* Clean Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {requirements.map((req, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="p-4.5 sm:p-5 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5] transition-colors flex items-start gap-3.5"
            >
              <CheckCircle2 className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#222222] mb-0.5">
                  {req.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {req.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clear Regulatory Caveat Callout */}
        <div className="p-5 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            <strong className="text-[#222222] font-semibold">Important Note: </strong>
            Exact document requirements vary depending on the specific transaction, employer jurisdiction (Mainland vs Free Zone), employee nationality, and MOHRE occupational skill classification. Our consultants provide a tailored document checklist following an initial review.
          </div>
        </div>

      </div>
    </section>
  );
};

export default RequirementsChecklist;
