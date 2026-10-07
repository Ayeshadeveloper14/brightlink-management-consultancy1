import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileSearch, 
  Languages, 
  FlaskRound, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const ProductProcessTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const processSteps = [
    {
      num: '01',
      title: 'Formula Audit & Document Review',
      subtitle: 'Pre-Submission Check',
      description: 'Our regulatory specialists cross-reference your quantitative formula and CAS/INCI ingredient names against Dubai Municipality and GSO banned substance registers to guarantee compliance before filing.',
      duration: '1 - 2 Business Days',
      icon: FileSearch
    },
    {
      num: '02',
      title: 'Bilingual Label Formatting',
      subtitle: 'Arabic Translation & Artwork',
      description: 'We format your product packaging artwork to satisfy mandatory UAE labeling laws, ensuring accurate Arabic translations, metric measurements, manufacturer data, and barcode placement.',
      duration: '2 - 3 Business Days',
      icon: Languages
    },
    {
      num: '03',
      title: 'Montaji Portal Filing & Testing',
      subtitle: 'Official Municipality Review',
      description: 'We submit your application through the official Dubai Municipality Montaji system, submit physical samples to accredited municipal laboratories (if requested), and handle government fee clearances.',
      duration: '5 - 7 Business Days',
      icon: FlaskRound
    },
    {
      num: '04',
      title: 'Certificate Issuance & Clearance',
      subtitle: '5-Year Approval Certificate',
      description: 'Dubai Municipality issues the official Product Registration Certificate valid for 5 years. Your product is instantly cleared for UAE customs entry, Amazon/Noon listings, and retail shelf sales.',
      duration: 'Final Delivery',
      icon: Award
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
        delayChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="registration-process" className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase mb-3">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Turnkey Registration Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Our 4-Step Product Registration Process
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            From initial formula screening to government certificate delivery, we manage the entire municipality process on your behalf.
          </p>
        </motion.div>

        {/* 01 → 02 → 03 → 04 Sequential Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[#DECBB5] to-transparent pointer-events-none" />

          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.num}
                variants={itemVariants}
                className="relative flex flex-col group p-2 rounded-2xl transition-all duration-300 hover:bg-white/60"
              >
                {/* Header: Icon Box & Number */}
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08, rotate: 2 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="w-14 h-14 rounded-2xl bg-white border border-[#DECBB5] group-hover:border-[#B8864B] group-hover:bg-[#FAF5EC] flex items-center justify-center transition-colors duration-300 shadow-xs"
                  >
                    <Icon className="w-6 h-6 text-[#B8864B] transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <span className="text-3xl font-bold text-[#E2D8C9] font-heading group-hover:text-[#B8864B] transition-colors duration-300 select-none">
                    {step.num}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] mb-1 font-heading">
                  {step.subtitle}
                </span>
                <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-3 group-hover:text-[#B8864B] transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-sans">
                  {step.description}
                </p>

                {/* Duration Highlight */}
                <div className="mt-auto pt-4 border-t border-[#F1EBE1] flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                  <span>{step.duration}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Bar below timeline */}
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
            onClick={() => onOpenConsultation('Product Registration Timeline Inquiry')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0F172A] hover:bg-[#B8864B] transition-colors duration-200 shadow-md hover:shadow-lg hover:shadow-slate-900/15 cursor-pointer"
          >
            <span>Start Your 4-Step Registration Now</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductProcessTimeline;
