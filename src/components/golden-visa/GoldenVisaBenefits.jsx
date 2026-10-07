import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export const GoldenVisaBenefits = () => {
  const benefits = [
    { title: '10-Year Self-Sponsored Residency', desc: 'No employer, company, or national sponsor required.' },
    { title: 'Stay Outside UAE Without Cancellation', desc: 'Nullifies the standard 6-month stay requirement outside the UAE.' },
    { title: 'Unlimited Family Sponsorship', desc: 'Sponsor your spouse and children of any age, plus domestic staff.' },
    { title: 'Esaad Privilege Discount Card', desc: 'Exclusive access to government loyalty discounts across UAE.' },
    { title: '100% Commercial Ownership', desc: 'Full enterprise control in mainland Dubai with zero local partners.' },
    { title: 'Family Security in Case of Demise', desc: 'Family members can stay until the end of the 10-year term.' }
  ];

  return (
    <div className="space-y-14">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
          Exclusive Privileges
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
          Why Upgrade to the UAE Golden Visa?
        </h2>
        <p className="text-sm text-[#666666]">
          Unrivaled stability, lifestyle privileges, and long-term security in the world’s safest metropolis.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-[#B8864B]/40 shadow-xs hover:shadow-md transition-all space-y-2"
          >
            <div className="w-9 h-9 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-[#222222]">
              {b.title}
            </h4>
            <p className="text-xs text-[#555555] leading-relaxed">
              {b.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GoldenVisaBenefits;
