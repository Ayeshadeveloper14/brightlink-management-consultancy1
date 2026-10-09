import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  MessageSquare, 
  ArrowRight, 
  Smartphone, 
  FileCheck2, 
  Clock, 
  ShieldCheck, 
  Activity,
  CheckCircle2
} from 'lucide-react';

export const OnlineProcess = ({ onOpenCalculator, onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Check eligibility online',
      desc: 'Free calculator — your route and the exact government fees, no signup.',
      icon: Calculator
    },
    {
      num: '02',
      title: 'Send documents on WhatsApp',
      desc: 'Photos of your Title Deed or Oqood, passport and photo.',
      icon: Smartphone
    },
    {
      num: '03',
      title: 'We file & follow up',
      desc: 'DLD, immigration, status change and stamping — tracked with updates at every stage.',
      icon: FileCheck2
    }
  ];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello 800 DOCS! I want to start my Property Visa application online from my phone. Please review my property documents.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const handleCalculatorClick = () => {
    if (onOpenCalculator) {
      onOpenCalculator();
    } else if (onOpenConsultation) {
      onOpenConsultation('Property Visa Calculator');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            100% Remote Government Typing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Rather not do it yourself? 100% online, from your phone.
          </h2>
        </motion.div>

        {/* 3 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.num}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.12 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="p-7 rounded-3xl bg-white border border-[#DECBB5] shadow-xs hover:border-[#B8864B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-[#DECBB5] font-heading">
                      {st.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Medical & Emirates ID Arranged Block */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#DECBB5] shadow-xs mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C6230] uppercase tracking-wider font-heading">
              <Activity className="w-4 h-4 text-[#B8864B]" />
              <span>Medical & Emirates ID arranged</span>
            </div>
            <h4 className="text-lg font-bold text-[#0F172A] font-heading">
              We book both; your Emirates ID is delivered to your door.
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Skip booking queues and appointment mix-ups. We schedule your priority medical test and biometrics center nearest to your home.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-emerald-800 bg-white px-4 py-2 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Door-to-door VIP Service</span>
          </div>
        </motion.div>

        {/* Trust Statement */}
        <div className="text-center text-xs text-[#64748B] mb-8">
          No hidden charges. Our service fee is quoted on WhatsApp before you pay anything.
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-md shadow-[#25D366]/20 transition-all cursor-pointer font-sans"
          >
            <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Start on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={handleCalculatorClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white bg-[#0F172A] hover:bg-[#B8864B] transition-all cursor-pointer shadow-md font-sans"
          >
            <Calculator className="w-4 h-4 text-[#F5D7A1]" />
            <span>Visa Calculator</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default OnlineProcess;
