import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const DocumentPreparation = () => {
  const requirements = [
    {
      title: 'Valid Identification / Passport',
      detail: 'Original passport copies and valid UAE Emirates IDs (or foreign national identification) for both parties.'
    },
    {
      title: 'Details of the Person Granting Authority',
      detail: 'Full legal name, nationality, residency status, contact information, and signature capacity of the principal.'
    },
    {
      title: 'Details of the Authorised Person',
      detail: 'Clear legal identification and full personal details of the appointed agent or attorney-in-fact.'
    },
    {
      title: 'Purpose & Scope of the Power of Attorney',
      detail: 'Specific clauses outlining the exact limits, transactions, authorities, and validity term of the document.'
    },
    {
      title: 'Supporting Documents Where Applicable',
      detail: 'Title deed / Oqood for property transactions, trade license & MOA for commercial matters, or bank account statements where applicable.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Preparation Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Documents & Information Required
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            General information and records typically necessary to draft and notarise legal authorisations.
          </p>
        </div>

        {/* Compact List Box */}
        <div className="bg-[#FCFAF8] rounded-2xl border border-[#E8DEC9] p-6 sm:p-8 space-y-4 shadow-2xs">
          {requirements.map((req, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="flex items-start gap-3.5 pb-4 border-b border-[#F0E8DC] last:border-b-0 last:pb-0"
            >
              <CheckCircle2 className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#222222] mb-0.5 font-heading">
                  {req.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {req.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Essential Discretionary Note */}
        <div className="mt-6 flex items-start gap-2.5 p-4 rounded-xl bg-[#FAF5EB] border border-[#DECBB5] text-xs text-[#8B6B3E]">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#B8864B]" />
          <p className="leading-relaxed">
            <strong>Requirements may vary depending on the document type and intended use.</strong> Additional certifications or translations may be requested by the notary public based on the legal scope.
          </p>
        </div>

      </div>
    </section>
  );
};
