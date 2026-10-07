import React from 'react';
import { motion } from 'framer-motion';
import { Scale, HeartHandshake, GraduationCap, Check } from 'lucide-react';

export const DocumentsWeTranslate = ({ onOpenConsultation }) => {
  const categories = [
    {
      title: 'Legal, Commercial & Court',
      desc: 'High-precision legal translation tailored for court filings, arbitration, corporate governance, and commercial contracting.',
      icon: Scale,
      items: [
        'Commercial & Employment Contracts',
        'Shareholder & Partnership Agreements',
        'Court Pleadings, Judgments & Summons',
        'Powers of Attorney (General & Special POA)',
        'Memorandums of Association (MOA & AOA)',
        'Wills & Probate Documentation',
        'Sworn Affidavits & Legal Undertakings',
        'Trade Licences & Commercial Registers',
        'Public & Private Procurement Tenders'
      ]
    },
    {
      title: 'Personal & Civil Documents',
      desc: 'Accurate translation of civil status records ensuring smooth processing with UAE immigration, embassies, and civil courts.',
      icon: HeartHandshake,
      items: [
        'Birth Certificates',
        'Marriage Certificates & Affidavits',
        'Divorce Decrees & Settlement Deeds',
        'Death Certificates & Succession Records',
        'Passports & National Identity Cards',
        'Emirates IDs & Foreign Identity Cards',
        'International & National Driving Licences',
        'Police Clearance Certificates (PCC)',
        'Hospital Discharge & Medical Reports'
      ]
    },
    {
      title: 'Academic & Educational',
      desc: 'Certified translations for degree equivalency applications, professional licensing exams, and school or university registrations.',
      icon: GraduationCap,
      items: [
        'University Degrees (Bachelor’s, Master’s, PhD)',
        'Higher Diplomas & Vocational Certificates',
        'Official Academic Transcripts & Mark Sheets',
        'School Transfer & Leaving Certificates',
        'Board Qualifications & Professional Memberships',
        'Medical & Engineering Practice Licences'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Coverage Scope
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Documents We Translate
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Every document is assigned to translators specialized in the respective legal, corporate, or academic terminology.
          </p>
        </div>

        {/* 3 Visually Distinct Category Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DEC9] hover:border-[#DECBB5] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold text-[#B8864B] tracking-wider uppercase font-heading">
                      Block 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 font-heading">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5">
                    {cat.desc}
                  </p>

                  {/* Clean List Inside Block */}
                  <div className="pt-4 border-t border-[#F2ECE2] space-y-2.5">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#333333]">
                        <Check className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2ECE2]">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation && onOpenConsultation(`Translation for ${cat.title}`)}
                    className="text-xs font-bold text-[#976A36] hover:text-[#B8864B] transition-colors cursor-pointer"
                  >
                    Translate {cat.title} →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
