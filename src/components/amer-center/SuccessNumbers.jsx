import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CountUp } from '../shared/CountUp.jsx';
import { Building2, Users, FileCheck, ThumbsUp } from 'lucide-react';

export const SuccessNumbers = () => {
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    {
      label: 'Applications Assisted',
      end: 34000,
      prefix: '',
      suffix: '+',
      icon: Building2,
      description: 'GDRFA visa & residency submissions cleared'
    },
    {
      label: 'Happy Clients',
      end: 26500,
      prefix: '',
      suffix: '+',
      icon: Users,
      description: 'Families, executives, and company founders'
    },
    {
      label: 'Service Requests Processed',
      end: 58000,
      prefix: '',
      suffix: '+',
      icon: FileCheck,
      description: 'Emirates ID, medical, and status amendments'
    },
    {
      label: 'Customer Satisfaction',
      end: 99.6,
      prefix: '',
      suffix: '%',
      icon: ThumbsUp,
      description: 'Consistent 5-star positive feedback rating'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EFEAE2] text-center flex flex-col items-center justify-between shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] mb-4">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] font-heading mb-1">
                  {metric.prefix}
                  <CountUp 
                    end={metric.end} 
                    duration={2000} 
                  />
                  {metric.suffix}
                </div>

                <div className="font-heading font-bold text-xs sm:text-sm text-[#B8864B] mb-1.5 uppercase tracking-wide">
                  {metric.label}
                </div>

                <p className="text-xs text-[#777777] leading-relaxed max-w-[210px]">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessNumbers;
