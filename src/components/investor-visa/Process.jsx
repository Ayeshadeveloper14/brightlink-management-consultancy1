import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  FileSignature, 
  RefreshCw, 
  Activity, 
  Award, 
  Clock, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const Process = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Company setup or activation',
      desc: 'You must have an active UAE business license — Free Zone or Mainland — listing you as shareholder/director.',
      icon: Building2
    },
    {
      num: '02',
      title: 'Entry permit application',
      desc: 'We submit your entry permit application (e-visa) through the relevant authority — typically issued in 3-7 days.',
      icon: FileSignature
    },
    {
      num: '03',
      title: 'Status change to UAE',
      desc: 'If you are already in the UAE on a visit visa, we convert your status to investor visa. Otherwise, you enter on the entry permit.',
      icon: RefreshCw
    },
    {
      num: '04',
      title: 'Medical fitness test',
      desc: '1-hour appointment at an approved medical centre (blood draw + chest X-ray). Results in 2-3 days.',
      icon: Activity
    },
    {
      num: '05',
      title: 'Emirates ID + visa stamping',
      desc: 'Biometrics capture (30 min), then visa is electronically issued. Emirates ID arrives within 5-10 days.',
      icon: Award
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Step-by-step Application
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] font-sans">
            A seamless timeline from company license activation to your residency card in hand.
          </p>
        </motion.div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.num}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="p-6 rounded-3xl bg-white border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-[#DECBB5] font-heading">
                      {st.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {st.desc}
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

export default Process;
