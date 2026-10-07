import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, Crown, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const GoldenVisaCategories = ({ onOpenConsultation }) => {
  const categories = [
    {
      id: 'real-estate',
      title: 'Real Estate Investors',
      criteria: 'Property value AED 2,000,000+',
      desc: 'Purchase one or more properties with a total purchase value of AED 2M or more. Mortgaged properties are accepted with a bank NOC letter.',
      icon: <Building2 className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Fastest Track',
      docs: ['Title Deed issued by Dubai Land Department (DLD)', 'Oqood certificate (for off-plan properties from approved developers)', 'Clear Passport & current Emirates ID copy']
    },
    {
      id: 'professionals',
      title: 'Skilled Professionals',
      criteria: 'Min Salary AED 30,000 / month',
      desc: 'Specialized executives, physicians, software architects, engineers, and scientists holding first or second occupational level per MOHRE classification.',
      icon: <Briefcase className="w-5 h-5 text-[#B8864B]" />,
      badge: 'High Approval',
      docs: ['Attested Bachelor degree / Master degree or higher', 'MOHRE Employment Contract with minimum AED 30,000 basic salary', '6-month bank statement with salary transfer record']
    },
    {
      id: 'entrepreneurs',
      title: 'Entrepreneurs & Founders',
      criteria: 'Certified SME or AED 500k Capital',
      desc: 'Founders or partners of an economic project of a technical or future nature based on risk and innovation, approved by an official auditor and UAE incubator.',
      icon: <Crown className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Business Growth',
      docs: ['Trade License and Memorandum of Association (MOA)', 'Approval letter from UAE Ministry of Economy or authorized SME incubator', 'Audited financial report proving valuation']
    },
    {
      id: 'graduates',
      title: 'Outstanding Graduates',
      criteria: 'GPA 3.8+ or Top 100 University',
      desc: 'High-performing high school students and university graduates from UAE accredited universities or world top 100 QS-ranked global universities.',
      icon: <GraduationCap className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Academic Merit',
      docs: ['Attested graduation degree with minimum GPA 3.8', 'Equivalency letter issued by UAE Ministry of Education (MOE)', 'Academic transcript & university recommendation']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Eligible Categories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight"
          >
            Choose Your Qualification Pathway
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base text-[#666666] leading-relaxed"
          >
            Select the category matching your investment, employment, or academic profile.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-7 border border-neutral-200/80 hover:border-[#B8864B]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white text-[#B8864B] flex items-center justify-center shadow-xs border border-neutral-200/60 group-hover:bg-[#B8864B]/15 transition-colors">
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F5F1EB] text-[#8C6230]">
                    {cat.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                    {cat.title}
                  </h3>
                  <div className="mt-1 text-xs font-bold text-[#8C6230] uppercase tracking-wide">
                    {cat.criteria}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {cat.desc}
                </p>

                <div className="pt-3 border-t border-neutral-200/60 space-y-1.5">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                    Required Documentation:
                  </span>
                  {cat.docs.map((doc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-200/60">
                <button
                  onClick={() => onOpenConsultation(`Golden Visa: ${cat.title}`)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#8C6230] bg-white hover:bg-[#B8864B] hover:text-white border border-neutral-200/80 hover:border-[#B8864B] transition-all cursor-pointer shadow-xs"
                >
                  <span>Check Pre-Approval for {cat.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaCategories;
