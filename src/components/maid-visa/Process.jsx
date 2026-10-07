import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  RefreshCw, 
  Activity, 
  Fingerprint, 
  FileCheck2, 
  Award,
  ArrowRight
} from 'lucide-react';

export const Process = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '1',
      title: 'Entry permit',
      desc: 'We apply for the initial employment entry permit (the "pink visa") that lets your maid enter the UAE or begin a status change.',
      icon: FileText
    },
    {
      number: '2',
      title: 'Status change',
      desc: 'If the maid is already inside the UAE on a visit visa, we process the official status change to an employment visa.',
      icon: RefreshCw
    },
    {
      number: '3',
      title: 'Medical fitness',
      desc: 'We type the medical application. The maid attends a DHA medical centre for the standard blood test and x-ray.',
      icon: Activity
    },
    {
      number: '4',
      title: 'Emirates ID & biometrics',
      desc: 'We submit the Emirates ID application. For a first EID, she visits an ICP centre for fingerprinting.',
      icon: Fingerprint
    },
    {
      number: '5',
      title: 'MOHRE labour contract',
      desc: 'We draft and submit the official Ministry of Human Resources & Emiratisation (MOHRE) domestic worker contract.',
      icon: FileCheck2
    },
    {
      number: '6',
      title: 'Visa stamping',
      desc: 'The digital residency visa is issued by GDRFA and the physical Emirates ID is couriered to you.',
      icon: Award
    }
  ];

  return (
    <section id="process" className="relative py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EBE4D8] scroll-mt-20">
      <div id="maid-process" className="absolute -top-20 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 text-center sm:text-left"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-3">
            The maid visa journey.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            The complete legal roadmap for securing your domestic worker's UAE residency — handled online, start to finish.
          </p>
        </motion.div>

        {/* 6 Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] p-7 sm:p-8 flex flex-col justify-between hover:border-[#B8864B] hover:shadow-md transition-all group"
              >
                <div>
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-heading font-bold text-base shadow-sm group-hover:bg-[#B8864B] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#EBE4D8] flex items-center justify-center text-[#B8864B] shrink-0">
                      <Icon className="w-4 h-4 text-[#B8864B]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#0F172A] font-heading mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-sans font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EBE4D8]/80 flex items-center justify-between text-xs text-[#8C6230] font-semibold">
                  <span>Step 0{step.number} of 06</span>
                  <span className="text-[#B8864B] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
