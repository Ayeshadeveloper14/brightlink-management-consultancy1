import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileStack, 
  Home, 
  Baby, 
  Building, 
  Landmark, 
  Users2, 
  User, 
  Compass,
  AlertCircle 
} from 'lucide-react';

export const TypesOfWills = () => {
  const willTypes = [
    {
      title: 'Full Will',
      desc: 'A broader will covering multiple aspects of an individual’s estate and wishes, encompassing real estate, financial assets, personal effects, and guardianship.',
      icon: FileStack
    },
    {
      title: 'Property Will',
      desc: 'Focused specifically on real-estate interests, addressing the distribution and succession of UAE apartments, villas, and land plots.',
      icon: Home
    },
    {
      title: 'Guardianship Will',
      desc: 'Focused strictly on guardianship wishes for minor children where applicable, naming interim and permanent legal guardians.',
      icon: Baby
    },
    {
      title: 'Business / Share Will',
      desc: 'For business ownership, company shares, or partnership interests, ensuring orderly corporate continuity and transition.',
      icon: Building
    },
    {
      title: 'Financial Assets Will',
      desc: 'For relevant financial assets and accounts, including UAE bank deposits, investments, and capital holdings.',
      icon: Landmark
    },
    {
      title: 'Mirror / Couple Will',
      desc: 'For couples who wish to coordinate their estate planning through reciprocal provisions reflecting mutual intentions.',
      icon: Users2
    },
    {
      title: 'Single Person Will',
      desc: 'A will prepared around an individual’s specific personal and financial circumstances without joint provisions.',
      icon: User
    },
    {
      title: 'Expat-Focused Will',
      desc: 'Estate planning structured for foreign expatriates based on their home-country nationality, residency, and chosen legal route.',
      icon: Compass
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Tailored Legal Structures
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Types of Wills
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Select from established will categories tailored to the scope of your assets, guardianship objectives, and family structure.
          </p>
        </div>

        {/* 8 Types in an Elegant 4-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {willTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-[#E8DEC9] hover:border-[#DECBB5] shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] group-hover:bg-[#B8864B] group-hover:text-white flex items-center justify-center mb-3.5 transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1.5 font-heading group-hover:text-[#976A36] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Crucial Legal Framework Variation Notice */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#DECBB5] p-5 flex items-start gap-3.5 text-xs text-[#666666] shadow-2xs">
          <AlertCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Legal Notice:</strong> The exact will type, naming, jurisdictional provisions, and registration route (such as DIFC Wills Service Centre, Dubai Courts, or Abu Dhabi Judicial Department) vary depending on your personal circumstances, religious background, family composition, and chosen legal framework.
          </p>
        </div>

      </div>
    </section>
  );
};
