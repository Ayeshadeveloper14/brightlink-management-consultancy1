import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CountUp } from '../shared/CountUp.jsx';
import { CreditCard, Users, Award, ShieldCheck } from 'lucide-react';

export const SuccessMetrics = () => {
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    {
      label: 'Applications Assisted',
      end: 28500,
      prefix: '',
      suffix: '+',
      icon: CreditCard,
      description: 'Emirates ID typings, renewals & replacements finalized'
    },
    {
      label: 'Happy Clients',
      end: 19200,
      prefix: '',
      suffix: '+',
      icon: Users,
      description: 'Residents, executives, investors & families served'
    },
    {
      label: 'Success Rate',
      end: 99.8,
      prefix: '',
      suffix: '%',
      icon: ShieldCheck,
      description: 'First-time ICP approval & compliance rate'
    },
    {
      label: 'Years of Experience',
      end: 12,
      prefix: '',
      suffix: '+ Years',
      icon: Award,
      description: 'Dedicated government liaison expertise in the UAE'
    }
  ];

  return (
    <section className="py-16 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
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
                className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] text-center flex flex-col items-center justify-between"
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

                <div className="font-heading font-bold text-sm text-[#B8864B] mb-2 uppercase tracking-wide">
                  {metric.label}
                </div>

                <p className="text-xs text-[#777777] leading-relaxed max-w-[200px]">
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

export default SuccessMetrics;
