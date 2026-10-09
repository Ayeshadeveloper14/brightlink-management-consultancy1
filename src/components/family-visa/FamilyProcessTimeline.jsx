import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  FileSignature, 
  RefreshCw, 
  Activity, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  Send
} from 'lucide-react';

export const FamilyProcessTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Document Audit',
      subtitle: 'Attestation Check',
      description: 'Audit of sponsor salary certificate, registered Ejari tenancy, marriage certificate, and children birth certificates to ensure MOFA compliance.',
      duration: 'Day 1',
      icon: FileCheck2
    },
    {
      num: '02',
      title: 'Entry Permit Filing',
      subtitle: 'E-Visa Issuance',
      description: 'Opening file with GDRFA Dubai or ICP and issuing the official Family Entry Permit (E-Visa) for dependents inside or outside the country.',
      duration: 'Day 1 - 2',
      icon: FileSignature
    },
    {
      num: '03',
      title: 'Status Change',
      subtitle: 'In-Country Transfer',
      description: 'If family is already inside the UAE on a visit or tourist visa, status is changed to new residency without any airport border exit required.',
      duration: 'Day 2',
      icon: RefreshCw
    },
    {
      num: '04',
      title: 'Medical & Biometrics',
      subtitle: 'DHA / Smart Salem',
      description: 'VIP blood screening and chest X-ray for adults 18+, followed by Emirates ID biometric fingerprint enrollment at authorized typing centers.',
      duration: 'Day 3',
      icon: Activity
    },
    {
      num: '05',
      title: 'Visa Stamping & ID',
      subtitle: 'Residency Delivered',
      description: 'Immigration stamps the 2-year or 3-year residence visa. Digital residence visa activates immediately, and physical Emirates ID is dispatched.',
      duration: 'Day 4 - 5',
      icon: Award
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
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
    <section id="family-process-timeline" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
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
            <span>Turnkey Application Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Our 5-Step Family Visa Process
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            From preliminary paperwork audit to final Emirates ID doorstep delivery, we navigate the entire government process seamlessly.
          </p>
        </motion.div>

        {/* Horizontal on Desktop, Vertical on Mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative"
        >
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#DECBB5] to-transparent pointer-events-none" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.num}
                variants={itemVariants}
                className="relative flex flex-col group p-4 rounded-2xl transition-all duration-300 hover:bg-[#FCFAF8]/70 border border-transparent hover:border-[#EBE4D8]"
              >
                {/* Header: Icon Box & Number */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div 
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08, rotate: 2 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="w-12 h-12 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] group-hover:border-[#B8864B] group-hover:bg-[#FAF5EC] flex items-center justify-center transition-colors duration-300 shadow-xs"
                  >
                    <Icon className="w-5 h-5 text-[#B8864B] transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>
                  <span className="text-2xl font-black text-[#E2D8C9] font-heading group-hover:text-[#B8864B] transition-colors duration-300 select-none">
                    {step.num}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8864B] mb-1 font-heading">
                  {step.subtitle}
                </span>
                <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2 group-hover:text-[#B8864B] transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#475569] leading-relaxed mb-4 font-sans">
                  {step.description}
                </p>

                {/* Duration Highlight */}
                <div className="mt-auto pt-3 border-t border-[#F1EBE1] flex items-center gap-1.5 text-xs font-semibold text-[#0F172A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
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
            onClick={() => onOpenConsultation('Family Visa Fast-Track Processing')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0F172A] hover:bg-[#B8864B] transition-colors duration-200 shadow-md hover:shadow-lg hover:shadow-slate-900/15 cursor-pointer"
          >
            <span>Start Your Family Sponsorship Today</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default FamilyProcessTimeline;
