import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const DocumentsRequired = () => {
  const documents = [
    'Passport copy',
    'Emirates ID copy',
    'Contact and personal details',
    'Marriage certificate where relevant',
    'Beneficiary details',
    'Asset details',
    'Property information where applicable',
    'Business/share information where applicable',
    'Guardianship information where applicable'
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Documentation Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Documents Commonly Required
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Gathering these records in advance facilitates smooth drafting and registration coordination.
          </p>
        </div>

        {/* Clean Checklist Grid */}
        <div className="bg-[#FCFAF8] rounded-2xl border border-[#E8DEC9] p-6 sm:p-8 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {documents.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#EFEAE2]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#222222]">
                  {doc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Small Required Note */}
        <div className="mt-6 flex items-start gap-2.5 p-4 rounded-xl bg-[#FAF5EB] border border-[#DECBB5] text-xs text-[#8B6B3E]">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#B8864B]" />
          <p className="leading-relaxed">
            <strong>Exact requirements depend on the type of will and registration authority.</strong> Not all documents listed above are required for every type of will.
          </p>
        </div>

      </div>
    </section>
  );
};
