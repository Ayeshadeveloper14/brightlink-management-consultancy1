import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Clock, HeartHandshake } from 'lucide-react';

export const CoreValues = () => {
  const coreValues = [
    {
      title: 'Legal Precision & Compliance',
      desc: 'Every application undergoes double legal verification against current GDRFA and ICP regulatory circulars.',
      icon: <ShieldCheck className="w-5 h-5 text-[#B8864B]" />
    },
    {
      title: 'Transparent, Fixed Pricing',
      desc: 'We publish all government rates, typing fees, and medical options upfront. Zero hidden surcharges or surprises.',
      icon: <Award className="w-5 h-5 text-[#B8864B]" />
    },
    {
      title: 'Fast-Track VIP Execution',
      desc: 'Direct electronic integration with immigration gateways allows same-day submission and express medical results.',
      icon: <Clock className="w-5 h-5 text-[#B8864B]" />
    },
    {
      title: 'Dedicated Client Care',
      desc: 'You receive a designated case specialist who manages appointments, status updates, and courier delivery.',
      icon: <HeartHandshake className="w-5 h-5 text-[#B8864B]" />
    }
  ];

  return (
    <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
      <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
        Our Principles
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
        Why Dubai Residents Choose Us
      </h2>
      <p className="text-sm text-[#666666]">
        Built upon integrity, legal rigor, and an uncompromising commitment to customer satisfaction.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 text-left">
        {coreValues.map((val, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 border border-neutral-200/80 hover:border-[#B8864B]/50 transition-all shadow-sm hover:shadow-xl space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center">
              {val.icon}
            </div>
            <h3 className="text-base font-bold text-[#222222]">
              {val.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              {val.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
