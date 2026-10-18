import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  User, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const RakDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const individualDocs = [
    { title: 'Colored Passport Copy', desc: 'Valid passport copy for each individual shareholder, director, and manager (minimum 6 months remaining validity).' },
    { title: 'UAE Visa & Emirates ID (If Applicable)', desc: 'Current UAE residency visa, Emirates ID, or recent UAE tourist entry stamp for in-country applicants.' },
    { title: 'Passport-Sized Photograph', desc: 'High-resolution digital photograph with white background compliant with UAE ICP immigration standards.' },
    { title: 'Proof of Residential Address', desc: 'Recent utility bill (electricity, water, or piped gas) or bank statement dated within the last 3 months.' },
    { title: 'Curriculum Vitae (CV) & Profile', desc: 'Brief professional background for general manager and directors, especially for specialized advisory or industrial activities.' }
  ];

  const corporateDocs = [
    { title: 'Certificate of Incorporation / Good Standing', desc: 'Official certificate of registration from the corporate parent’s home jurisdiction proving current active standing.' },
    { title: 'Memorandum & Articles of Association (MOA)', desc: 'Constitutive bylaws and charter of the parent corporate shareholder.' },
    { title: 'Board Resolution for RAKEZ Formation', desc: 'Formal resolution authorizing company establishment in RAKEZ, capital allocation, and appointing the authorized manager.' },
    { title: 'Power of Attorney (POA)', desc: 'Document designating the authorized legal representative or Brightlink PRO to sign on behalf of the parent board.' },
    { title: 'Ultimate Beneficial Owner (UBO) Register', desc: 'Passports, KYC disclosures, and ownership tier charts for all individuals holding 25%+ equity in the parent company.' },
    { title: 'Legalization & Attestation', desc: 'Foreign corporate records must be notarized, attested by the Ministry of Foreign Affairs (MOFA), and legalized by the UAE Embassy in the origin country.' }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <FileText className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>DOCUMENTATION & COMPLIANCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Required Documents for RAK Free Zone Setup
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Streamlined paperwork requirements ensure rapid onboarding. Document checklists differ based on whether the entity is owned by individual entrepreneurs or a corporate holding company.
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
                    Natural persons forming an FZE or FZC
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
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
              <span>Standard turnaround: 2 to 4 working days</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
          </motion.div>

          {/* Corporate Shareholders */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
                    Corporate Entity / Foreign Branch
                  </h3>
                  <p className="text-xs text-[#8C5E28] font-semibold">
                    Holding company subsidiaries & corporate branches
                  </p>
                </div>
              </div>

              <div className="space-y-3.5">
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
              <span>Attestation services managed by Brightlink</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
          </motion.div>

        </div>

        {/* Translation & Attestation Notice */}
        <div className="bg-[#FAF5EC] rounded-2xl border border-[#DECBB5] p-5 sm:p-6 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#475569] space-y-1">
            <h4 className="font-bold text-[#1E293B]">
              Document Legalization & Certified Translation Support
            </h4>
            <p className="leading-relaxed">
              Documents issued in languages other than English or Arabic must be accompanied by certified sworn legal translations. Brightlink provides comprehensive in-house ministry attestation and Ministry of Justice (MOJ) legal translation services for seamless RAKEZ submission.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
