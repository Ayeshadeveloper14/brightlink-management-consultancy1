import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck2, Scale, Info } from 'lucide-react';

export const CertificationSection = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Standards & Accreditation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Certified & Official Translation
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Understanding official acceptance criteria across administrative and judicial authorities.
          </p>
        </div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-2xl border border-[#E8DEC9] p-6 sm:p-8 shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-4 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2]">
              <div className="w-8 h-8 rounded-lg bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4 stroke-[2]" />
              </div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-1 font-heading">
                Licensed Legal Translators
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Documents are prepared by appropriately accredited legal translators certified in accordance with official translation standards.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2]">
              <div className="w-8 h-8 rounded-lg bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center mb-3">
                <Scale className="w-4 h-4 stroke-[2]" />
              </div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-1 font-heading">
                Judicial & Court Submission
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Sworn translations formatted with official translator seals and sworn declaration sheets for presentation before UAE courts and notaries.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2]">
              <div className="w-8 h-8 rounded-lg bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center mb-3">
                <FileCheck2 className="w-4 h-4 stroke-[2]" />
              </div>
              <h3 className="text-sm font-bold text-[#1A1A1A] mb-1 font-heading">
                Government Compliance
              </h3>
              <p className="text-xs text-[#555555] leading-relaxed">
                Pre-configured for compliance with GDRFA immigration, MOHRE work permits, Dubai Municipality, and educational boards.
              </p>
            </div>
          </div>

          {/* Contextual Notice */}
          <div className="pt-4 border-t border-[#F0E8DC] flex items-start gap-3 text-xs text-[#666666]">
            <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Procedural Note:</strong> Specific departments may have distinct formatting or notary attestation prerequisites before accepting translated files. Brightlink reviews the target destination of your document to ensure the correct level of translation certification is applied.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
