import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Building, ArrowRight, Sparkles } from 'lucide-react';

export const SponsorshipRules = ({ onOpenConsultation }) => {
  const eligibilityCards = [
    {
      title: 'Spouse & Children',
      salary: 'Min AED 4,000 / month',
      desc: 'Or AED 3,000 + company accommodation. Male or female expatriates with legal profession status can sponsor spouse & children.',
      icon: <Heart className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Most Popular'
    },
    {
      title: 'Parents Sponsorship',
      salary: 'Min AED 20,000 / month',
      desc: 'Must sponsor both parents together unless deceased/divorced. Requires 2-bedroom accommodation Ejari and basic health insurance.',
      icon: <Users className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Special Humanitarian'
    },
    {
      title: 'Step-Children / Newborn',
      salary: 'Min AED 4,000 / month',
      desc: 'Special GDRFA approval with biological father NOC, legal translation, home country custody judgments, and MOFA attestations.',
      icon: <Building className="w-5 h-5 text-[#B8864B]" />,
      badge: 'Legal Approval'
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
              Salary & Requirements
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight"
          >
            Who Can Sponsor in Dubai?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base text-[#666666] leading-relaxed"
          >
            Both male and female residents holding valid UAE residency can sponsor their immediate family members subject to minimum income thresholds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eligibilityCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-7 border border-neutral-200/80 hover:border-[#B8864B]/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#B8864B] flex items-center justify-center shadow-xs border border-neutral-200/60 group-hover:bg-[#B8864B]/15 transition-colors">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F5F1EB] text-[#8C6230]">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                  {card.title}
                </h3>

                <div className="text-sm font-semibold text-[#8C6230] bg-white px-3 py-1.5 rounded-lg border border-neutral-200/60 inline-block">
                  {card.salary}
                </div>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed pt-1">
                  {card.desc}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-200/60">
                <button
                  onClick={() => onOpenConsultation(`Family Visa: ${card.title}`)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-[#8C6230] bg-white hover:bg-[#B8864B] hover:text-white border border-neutral-200/80 hover:border-[#B8864B] transition-all cursor-pointer shadow-xs"
                >
                  <span>Check Your Eligibility</span>
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

export default SponsorshipRules;
