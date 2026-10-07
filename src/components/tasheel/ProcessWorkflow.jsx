import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  SearchCheck, 
  Cpu, 
  Send, 
  BellRing, 
  CheckCircle2,
  Clock
} from 'lucide-react';

export const ProcessWorkflow = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Share Your Requirements',
      description: 'Detail your intended workforce transaction, permit type, or establishment update.',
      icon: FileText
    },
    {
      num: '02',
      title: 'Document Review',
      description: 'Our consultants verify employee credentials, quotas, and licensing for full compliance.',
      icon: SearchCheck
    },
    {
      num: '03',
      title: 'Application Processing',
      description: 'We prepare and type the official electronic forms according to current MOHRE guidelines.',
      icon: Cpu
    },
    {
      num: '04',
      title: 'Government Submission',
      description: 'Applications are transmitted directly through authorized Tasheel electronic portals.',
      icon: Send
    },
    {
      num: '05',
      title: 'Follow-Up & Updates',
      description: 'Continuous monitoring of government clearance status with prompt milestone notifications.',
      icon: BellRing
    },
    {
      num: '06',
      title: 'Completion & Delivery',
      description: 'Approved work permits, labour contracts, and official fee vouchers delivered to you.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Step-by-Step Workflow
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Our Tasheel Process
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            A clear, 6-stage procedural workflow connecting initial inquiry to successful government completion.
          </p>
        </motion.div>

        {/* Desktop Connected Horizontal Flow / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Subtle connecting horizontal line on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#E6D7C3] -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;

              return (
                <motion.div
                  key={st.num}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="p-5 rounded-2xl bg-white border border-[#EFEAE2] hover:border-[#DECBB5] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Number badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold font-heading text-[#B8864B] bg-[#FAF5EC] border border-[#E6D7C3] px-2 py-0.5 rounded">
                        STEP {st.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-sm sm:text-base text-[#222222] mb-2 leading-snug">
                      {st.title}
                    </h3>

                    <p className="text-xs text-[#666666] leading-relaxed">
                      {st.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-[#F5EFE6] text-[10px] text-neutral-400 font-medium">
                    Stage {idx + 1} of 6
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessWorkflow;
