import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Landmark, Users, CreditCard, ShieldCheck, FileCheck, Globe } from 'lucide-react';

export const VisaOverview = () => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      title: 'UAE Tax Residency',
      desc: 'Qualify for personal tax residency certificates in the UAE with 0% personal income tax.',
      icon: Globe
    },
    {
      title: 'Full Banking Access',
      desc: 'Open personal and corporate bank accounts with leading Tier-1 UAE commercial banks.',
      icon: CreditCard
    },
    {
      title: 'Family & Staff Sponsorship',
      desc: 'Sponsor your spouse, children, parents, and domestic employees under your own file.',
      icon: Users
    },
    {
      title: 'Renewable 2-3 Years',
      desc: 'Continuous residency renewed through your active business trade license with no cap.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#FAF7F2] border-y border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-white border border-[#DECBB5] shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0F172A] font-heading">
                    {b.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {b.desc}
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

export default VisaOverview;
