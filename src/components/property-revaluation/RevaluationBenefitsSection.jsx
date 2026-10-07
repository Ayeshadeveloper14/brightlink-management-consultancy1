import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  TrendingUp, 
  FileCheck2, 
  Clock, 
  Award, 
  Headphones 
} from 'lucide-react';

export const RevaluationBenefitsSection = () => {
  const benefits = [
    {
      title: 'Zero Paperwork Fatigue',
      description: 'We handle the entire DLD submission, payment processing, inspection scheduling, and certificate retrieval remotely on your behalf.',
      icon: ShieldCheck
    },
    {
      title: 'Golden Visa Equity Recognition',
      description: 'Even if your purchase contract was AED 1.2M or AED 1.5M, a certified valuation of AED 2M+ legally opens 10-Year Golden Visa eligibility.',
      icon: TrendingUp
    },
    {
      title: 'Mortgaged Property Support',
      description: 'We liaise directly with mortgage lending institutions to obtain bank inspection NOCs and liability statements for smooth processing.',
      icon: FileCheck2
    },
    {
      title: 'Accelerated Inspection Slots',
      description: 'Our daily interaction with DLD surveying coordinators helps secure earlier physical inspection appointments, saving weeks of delays.',
      icon: Clock
    },
    {
      title: 'Official Transaction Benchmarking',
      description: 'Valuation is grounded in registered DLD transfer records, building sales history, and actual completed market comps.',
      icon: Award
    },
    {
      title: 'Direct Link to Visa & Trustee Services',
      description: 'Once your certificate is issued, our team immediately initiates your Golden Visa nomination or prepares your DLD Trustee transfer file.',
      icon: Headphones
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Key Advantages
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            Why Revalue with BrightLink
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Precision, speed, and sovereign authority recognition.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Navigating property revaluation without professional coordination can result in scheduling bottlenecks, incorrect fee allocations, or surveyor access issues. BrightLink ensures a seamless experience.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FCFAF8] rounded-3xl p-7 sm:p-8 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#B8864B] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
