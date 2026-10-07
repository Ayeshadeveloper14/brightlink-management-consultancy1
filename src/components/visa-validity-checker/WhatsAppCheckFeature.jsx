import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Clock, FileCheck, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export const WhatsAppCheckFeature = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: 'Step 1',
      title: 'Send Passport Copy on WhatsApp',
      desc: 'Snap a clear photo of your passport information page or send your previous visa PDF directly to our verified business WhatsApp line.'
    },
    {
      num: 'Step 2',
      title: 'Government System Cross-Reference',
      desc: 'Our registered immigration typists query the back-end GDRFA & ICP portals to retrieve your active file status, unified ID, and fine records.'
    },
    {
      num: 'Step 3',
      title: 'Get Official Status & Renewal Plan',
      desc: 'Receive your verified status sheet, remaining days, and step-by-step guidance on how to renew, change status, or avoid exit penalties.'
    }
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Hello BrightLink! I would like to verify my UAE visa validity and status via WhatsApp. Please advise on the required documents.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Priority Human Verification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            WhatsApp Check in 3 Steps
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Prefer not to fiddle with government captchas, payment gateways, and language barriers? Check your visa validity directly over WhatsApp in minutes.
          </p>
        </motion.div>

        {/* Narrative & Flow */}
        <div className="space-y-10">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((st, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="space-y-3 p-3 rounded-xl hover:bg-[#FAF7F2]/50 transition-colors"
              >
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#B8864B] font-heading">
                  {st.num}
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                  {st.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed font-sans">
                  {st.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Why WhatsApp Check Feature Spotlight */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs hover:border-[#B8864B]/40 transition-colors"
          >
            <div className="space-y-3 max-w-xl">
              <h4 className="text-xl font-bold text-[#0F172A] font-heading flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <span>Why 45,000+ Expats Verify via WhatsApp:</span>
              </h4>
              <ul className="text-xs sm:text-sm text-[#475569] space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Immediate human support from authorized UAE PROs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>No UAE Pass login required & no website captcha errors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Receive official immigration PDF reports sent straight to your chat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Immediate assistance with fine discounts or express renewal</span>
                </li>
              </ul>
            </div>

            <div className="shrink-0">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#25D366]/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Verify via WhatsApp Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhatsAppCheckFeature;
