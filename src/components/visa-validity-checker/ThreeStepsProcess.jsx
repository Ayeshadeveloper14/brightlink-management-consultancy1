import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileEdit, MessageSquare, CheckCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const ThreeStepsProcess = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      stepNumber: '01',
      title: 'Enter your details',
      subtitle: 'Simple Passport Submission',
      description: 'Fill in your passport number, nationality, and date of birth in our secure status verification form. No complicated government account logins or UAE Pass credentials required.',
      highlight: 'Takes under 30 seconds',
      icon: FileEdit
    },
    {
      stepNumber: '02',
      title: 'Verify via WhatsApp',
      subtitle: 'Instant Specialist Match',
      description: 'Our automated system matches your record with authorized GDRFA / ICP databases and connects you with a dedicated UAE PRO specialist on WhatsApp to ensure complete accuracy.',
      highlight: 'Direct human verification',
      icon: MessageSquare
    },
    {
      stepNumber: '03',
      title: 'Get status result',
      subtitle: 'Official Report & Action Plan',
      description: 'Receive your verified visa validity report, exact expiration date, remaining grace days, and official fine audit right on WhatsApp along with personalized renewal advice.',
      highlight: 'Official PDF certificate',
      icon: CheckCircle
    }
  ];

  const scrollToChecker = () => {
    const el = document.getElementById('visa-checker-tool');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 25 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Fast & Seamless Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Your status, checked in three steps
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed font-sans">
            Avoid government portal downtime, session timeouts, and confusing error codes. Get your legal status confirmed quickly and accurately.
          </p>
        </motion.div>

        {/* Editorial Numbered Steps Flow: Animate steps one-by-one */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          
          {/* Subtle connecting divider on desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#DECBB5] to-transparent pointer-events-none" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.stepNumber} 
                variants={cardVariants}
                className="relative flex flex-col group p-2 rounded-2xl transition-all duration-300 hover:bg-[#FCFAF8]/60"
              >
                
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  {/* Icon Box with Subtle Scale-in & Hover Lift */}
                  <motion.div 
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08, rotate: 2 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="w-14 h-14 rounded-2xl bg-[#FCFAF8] border border-[#EBE4D8] group-hover:border-[#B8864B] group-hover:bg-[#FAF5EC] flex items-center justify-center transition-colors duration-300 shadow-xs"
                  >
                    <Icon className="w-6 h-6 text-[#B8864B] transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  
                  {/* Step Number: Subtle Scale-In */}
                  <span className="text-3xl font-black text-[#E2D8C9] font-heading group-hover:text-[#B8864B] transition-colors duration-300 select-none">
                    {item.stepNumber}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] mb-1 font-heading">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] tracking-tight font-heading mb-3 group-hover:text-[#B8864B] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#475569] leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>

                {/* Bottom Highlight */}
                <div className="mt-auto pt-4 border-t border-[#F1EBE1] flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                  <span>{item.highlight}</span>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Action Callout with Subtle Lift / Scale Hover */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={scrollToChecker}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold text-white bg-[#0F172A] hover:bg-[#B8864B] transition-colors duration-200 shadow-md hover:shadow-lg hover:shadow-slate-900/15 cursor-pointer"
          >
            <span>Start Your Status Check Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ThreeStepsProcess;
