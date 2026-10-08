import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Award, 
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const BenefitsAssistance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      title: 'Faster Processing',
      description: 'Avoid lengthy queues and scheduling delays with express typing and priority biometric center reservation.',
      icon: Zap,
      tag: 'Speed'
    },
    {
      title: 'Error-Free Applications',
      description: 'Eliminate typos, incorrect photo dimensions, and name mismatches that trigger costly ICP rejections and delays.',
      icon: CheckCircle2,
      tag: 'Accuracy'
    },
    {
      title: 'Compliance Support',
      description: 'Proactive renewal alerts and grace period tracking protect you against accumulating daily government fines.',
      icon: ShieldCheck,
      tag: 'Fine Protection'
    },
    {
      title: 'Status Tracking',
      description: 'Live continuous monitoring of your PRAN application status with automated milestone updates sent straight to your phone.',
      icon: MapPin,
      tag: 'Live Updates'
    },
    {
      title: 'Expert Guidance',
      description: 'Direct consultations with accredited UAE immigration specialists who understand federal ICP nuances.',
      icon: Award,
      tag: 'Liaison'
    },
    {
      title: 'End-to-End Assistance',
      description: 'From initial document verification to VIP biometrics appointments and physical card courier delivery to your doorstep.',
      icon: Layers,
      tag: 'Turnkey'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF8] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Why Use Brightlink Assistance
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Benefits of Professional Emirates ID Assistance
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Navigating federal ICP government portals requires precision. Here is how our dedicated identity consultants save your time, avoid fines, and ensure seamless delivery.
          </p>
        </motion.div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-7 rounded-2xl bg-white border border-[#EFEAE2] hover:border-[#DECBB5] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF5EC] text-[#976A36] border border-[#E6D7C3]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#222222] mb-2 group-hover:text-[#976A36] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Premium Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BenefitsAssistance;
