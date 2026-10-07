import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  CheckCircle2, 
  Languages, 
  Activity, 
  CreditCard, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

export const Documents = () => {
  const shouldReduceMotion = useReducedMotion();

  const coreDocuments = [
    {
      title: 'Valid Passport',
      description: 'Clear colour copy with at least six months remaining validity at submission.'
    },
    {
      title: 'Recent Colour Photograph',
      description: 'High-resolution digital photograph taken against a clean white background.'
    },
    {
      title: 'Proof of Remote Employment Outside UAE',
      description: 'Official employment contract, company confirmation letter, or valid overseas business licence.'
    },
    {
      title: 'Employment Verification Contract',
      description: 'Employment contract, company letter, or business licence confirming foreign corporate jurisdiction.'
    },
    {
      title: 'Income Verification',
      description: 'Salary certificate or official bank statements showing minimum monthly income of USD 3,500 or equivalent.'
    },
    {
      title: 'Valid Health Insurance Policy',
      description: 'Active health insurance policy providing comprehensive healthcare coverage in the UAE.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Checklist
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Required Documents for the UAE Virtual Work Visa
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The documentation requirements differ slightly depending on the application channel. The core documents listed below apply to all applicants.
          </p>
        </motion.div>

        {/* Core Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreDocuments.map((doc, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="bg-[#FCFAF8] rounded-2xl p-6 border border-[#EFEAE2] hover:border-[#DECBB5] hover:bg-white transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center mb-4">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#222222] font-heading mb-2">
                  {doc.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Core Requirement</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authority Channel Specifics & Post-Entry Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Dubai GDRFA Post-Entry Requirements */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EFEAE2] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-[#B8864B]" />
                <h4 className="text-sm font-bold text-[#222222] font-heading">
                  Dubai (GDRFA) In-Country Procedures
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                The GDRFA's virtual work residence permit service page also requires the result of a medical fitness test and an Emirates ID receipt as part of the residency issuance process. These steps are completed after the initial entry permit is approved.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAE3D5] text-[11px] font-semibold text-[#888888]">
              Completed after arrival or status amendment
            </div>
          </div>

          {/* ICP Channel Specifications */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EFEAE2] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-5 h-5 text-[#B8864B]" />
                <h4 className="text-sm font-bold text-[#222222] font-heading">
                  Federal (ICP) Submission Requirements
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Applicants submitting through ICP must provide a salary certificate and proof of work outside the UAE, alongside health insurance and a copy of their passport.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAE3D5] text-[11px] font-semibold text-[#888888]">
              Applicable across Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ
            </div>
          </div>

          {/* Language and Translation Mandate */}
          <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EFEAE2] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-5 h-5 text-[#B8864B]" />
                <h4 className="text-sm font-bold text-[#222222] font-heading">
                  Language & Certified Legal Translation
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                All documents must be in English or Arabic. If originally issued in another language, certified translation may be required.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#EAE3D5] text-[11px] font-semibold text-[#888888]">
              Official MOJ certified translation standards apply
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
