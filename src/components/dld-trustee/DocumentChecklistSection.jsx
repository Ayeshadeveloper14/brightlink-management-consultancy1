import React from 'react';
import { motion } from 'framer-motion';
import { Check, FileText, Info } from 'lucide-react';

export const DocumentChecklistSection = () => {
  const documents = [
    {
      title: 'Passport copies',
      description: 'Buyer, seller, owner or authorized signatory.'
    },
    {
      title: 'Emirates ID',
      description: 'Where applicable for UAE residents.'
    },
    {
      title: 'Title Deed / Oqood',
      description: 'Ownership proof for the property.'
    },
    {
      title: 'Developer NOC',
      description: 'Often needed before transfer.'
    },
    {
      title: 'Bank NOC',
      description: 'For mortgaged properties or release cases.'
    },
    {
      title: 'Power of Attorney',
      description: 'If someone signs on behalf of another party.'
    },
    {
      title: 'Company documents',
      description: 'License, MOA, board resolution, UBO or signatory proof.'
    },
    {
      title: 'Relationship proof',
      description: 'For gift transfer or family-related transactions.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Requirements
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-3">
            Document checklist
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Common documents required for trustee transactions.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Exact requirements depend on the transaction type, property status, owner and buyer profile, mortgage status, and whether any party is represented by POA.
          </p>
        </div>

        {/* 8-Item Document Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {documents.map((doc, idx) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shrink-0 group-hover:bg-[#B8864B] group-hover:text-white transition-all shadow-2xs">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <h3 className="text-base font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors leading-snug">
                    {doc.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed pl-11">
                  {doc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative Note Box */}
        <div className="bg-[#FAF5EC]/70 rounded-2xl border border-[#E6D7C3] p-5 sm:p-6 flex items-start gap-4">
          <Info className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            <strong className="text-[#222222] font-semibold">Important Note: </strong>
            All original identification documents (Passports, Emirates IDs) must be valid and present at the trustee appointment. Incomplete, expired, or non-attested documents cannot be processed by DLD trustee systems.
          </p>
        </div>

      </div>
    </section>
  );
};
