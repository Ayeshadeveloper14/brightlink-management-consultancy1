import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const DocumentRequirements = () => {
  const requirements = [
    {
      title: 'Original Document or Acceptable Official Copy',
      detail: 'Depending on the country and document category, authorities may require the original certificate, an official transcript, or a certified true duplicate.'
    },
    {
      title: 'Passport / Identification Documents',
      detail: 'Clear color copies of the document holder’s passport and current UAE visa / Emirates ID where required for embassy records.'
    },
    {
      title: 'Supporting Documents Where Required',
      detail: 'Educational verification letters from universities, mark sheets, or civil certificates (e.g., father’s passport for birth certificates).'
    },
    {
      title: 'Prior Authentication / Notarization',
      detail: 'Preliminary certification from state education boards, local notarization, or regional ministries prior to consular dispatch.'
    },
    {
      title: 'Issuing Country Specific Requisites',
      detail: 'Additional authorizations such as Power of Attorney authorization letters, translation into Arabic, or specific ministry application vouchers.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Checklist & Prerequisites
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            What You May Need
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Prepare your documents with confidence. Here are common requirements typically requested across legalization channels.
          </p>
        </div>

        {/* Short Checklist */}
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

        {/* Essential Variation Note */}
        <div className="mt-6 flex items-start gap-2.5 p-4 rounded-xl bg-[#FAF5EB] border border-[#DECBB5] text-xs text-[#8B6B3E]">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#B8864B]" />
          <p className="leading-relaxed">
            <strong>Important Notice:</strong> Requirements vary significantly depending on the document type, issuing country, and the specific guidelines of the UAE receiving department. Contact our team to confirm the precise checklist for your case.
          </p>
        </div>

      </div>
    </section>
  );
};
