import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CountUp } from '../shared/CountUp.jsx';
import { Award, Users, CheckCircle, Clock, Star } from 'lucide-react';

export const SuccessMetrics = () => {
  const shouldReduceMotion = useReducedMotion();

  const metrics = [
    {
      value: 2500,
      suffix: '+',
      label: 'Applications Processed',
      description: 'Golden Visa files successfully stamped across Dubai & Federal ICP.',
      icon: Award
    },
    {
      value: 99.4,
      suffix: '%',
      label: 'Success Rate',
      description: 'Pre-submission legal audits ensure exceptional approval consistency.',
      icon: CheckCircle
    },
    {
      value: 12,
      suffix: '+',
      label: 'Years Experience',
      description: 'Established presence in Business Bay, Dubai with deep ministerial roots.',
      icon: Clock
    },
    {
      value: 98.8,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Verified 5-star ratings from international investors and C-level executives.',
      icon: Star
    }
  ];

  return (
    <section className="py-16 bg-[#222222] text-white relative overflow-hidden">
      {/* Subtle gold ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#B8864B] to-[#C5985B] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#F5D7A1] border border-white/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.9]" />
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5D7A1] font-heading tracking-tight mb-2">
                    {/* If float, format properly */}
                    {m.value % 1 === 0 ? (
                      <CountUp end={m.value} duration={2000} suffix={m.suffix} separator="," />
                    ) : (
                      <span>{m.value}{m.suffix}</span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white font-heading mb-1">
                    {m.label}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {m.description}
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
