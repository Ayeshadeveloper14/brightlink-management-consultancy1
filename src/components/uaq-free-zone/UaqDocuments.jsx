import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  User, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  FileCheck2,
  ArrowRight
} from 'lucide-react';

export const UaqDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const individualDocs = [
    { title: 'Colored Passport Copy', desc: 'High-resolution scan of passport photo and biodata pages for all individual shareholders, directors, and managers (minimum 6 months remaining validity).' },
    { title: 'UAE Visa & Emirates ID (Where Applicable)', desc: 'Current UAE residence visa copy, Emirates ID, or latest tourist visa entry stamp for applicants residing in or currently visiting the UAE.' },
    { title: 'Passport-Sized Photograph', desc: 'Recent digital passport-standard photograph with white background compliant with UAE ICP immigration requirements.' },
    { title: 'Proof of Residential Address', desc: 'Recent utility bill (water, electricity, gas) or bank account statement dated within the preceding 3 months reflecting current residential address.' },
    { title: 'Three Proposed Trade Names', desc: 'List of three distinct preferred company names submitted in order of preference compliant with UAE naming restrictions.' },
    { title: 'Curriculum Vitae (CV) & Profile', desc: 'Professional resume detailing academic qualifications and commercial experience, particularly for specialized advisory and consultancy licences.' }
  ];

  const corporateDocs = [
    { title: 'Certificate of Incorporation / Registration', desc: 'Official certificate of formation from the parent company’s home registry proving legal existence and corporate standing.' },
    { title: 'Memorandum & Articles of Association (MOA/AOA)', desc: 'Official constitutive charter, articles of association, or bylaws governing the parent corporate shareholder.' },
    { title: 'Certificate of Good Standing / Incumbency', desc: 'Recent document confirming that the parent entity is legally active and detailing current directors, officers, and shareholders.' },
    { title: 'Board Resolution for UAQ FTZ Formation', desc: 'Formal resolution passed by the parent company board authorizing company establishment in UAQ FTZ and designating the authorized manager.' },
    { title: 'Power of Attorney (POA)', desc: 'Legal authorization empowering the appointed general manager or Brightlink PRO to sign registry documents on behalf of the parent company.' },
    { title: 'UBO Ownership Chart & Director Passports', desc: 'Ownership tier diagram and passport copies for all ultimate beneficial owners holding 25% or more equity in the parent company.' },
    { title: 'Notarization & Consular Legalization', desc: 'Foreign corporate records must be notarized, attested by the Ministry of Foreign Affairs (MOFA) in the origin country, and legalized by the UAE Embassy.' }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <FileText className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>DOCUMENTATION STANDARDS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Required Documents for UAQ Free Zone Setup
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Review the standard documentation checklists for both individual entrepreneurs and corporate parent entities. Document completeness is the single most critical factor in achieving prompt licensing approvals.
          </p>
        </div>

        {/* 2 Column Comparison: Individual vs Corporate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Individual Shareholders */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
                    Individual Shareholders
                  </h3>
                  <p className="text-xs text-[#8C5E28] font-semibold">
                    Natural persons registering an FZE or FZC
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {individualDocs.map((doc, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3.5 border border-[#EFEAE2] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-bold text-[#1E293B]">{doc.title}</div>
                      <div className="text-[#475569] mt-0.5 leading-relaxed">{doc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EFEAE2] text-xs text-[#64748B] flex items-center justify-between">
              <span>Standard individual review: 2 to 4 working days</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
          </motion.div>

          {/* Corporate Shareholders */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
                    Corporate Shareholders & Branches
                  </h3>
                  <p className="text-xs text-[#8C5E28] font-semibold">
                    Corporate subsidiaries & multinational branch entities
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {corporateDocs.map((doc, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3.5 border border-[#EFEAE2] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <div className="font-bold text-[#1E293B]">{doc.title}</div>
                      <div className="text-[#475569] mt-0.5 leading-relaxed">{doc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EFEAE2] text-xs text-[#64748B] flex items-center justify-between">
              <span>Legalization & translation managed by Brightlink</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
          </motion.div>

        </div>

        {/* Translation and Specificity Disclaimer */}
        <div className="bg-[#FAF5EC] rounded-2xl border border-[#DECBB5] p-6 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#8C5E28] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#475569] leading-relaxed space-y-1">
            <h4 className="font-bold text-[#1E293B]">
              Application-Specific Requirements & Certified Translations
            </h4>
            <p>
              Please note that this checklist is indicative and not exhaustive. The authority reserves the right to request additional supporting documents, financial proofs, or professional CVs based on applicant nationality, risk tier, and business scope. All records in languages other than Arabic or English must be accompanied by certified sworn legal translations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
