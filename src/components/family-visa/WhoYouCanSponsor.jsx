import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Baby, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';

export const WhoYouCanSponsor = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title: 'Spouse',
      subtitle: 'Salary AED 4,000+ · attested marriage certificate',
      price: 'from AED 1,579',
      details: 'Sponsor husband or wife with official marriage certificate attested by home country, UAE embassy, and MOFA.',
      icon: Heart
    },
    {
      title: 'Children',
      subtitle: 'Same salary rule · sons to 25, daughters any age',
      price: 'from AED 1,103',
      details: 'Sons sponsored up to age 25; daughters sponsored at any age while unmarried. Children under 18 exempt from medical.',
      icon: Users
    },
    {
      title: 'Parents',
      subtitle: 'Higher income · two-bedroom tenancy · insurance',
      price: 'from AED 1,579',
      details: 'Both parents sponsored jointly with verified income around AED 20,000, 2-bedroom registered Ejari, and medical insurance.',
      icon: Home
    },
    {
      title: 'Newborn',
      subtitle: 'Residence visa within 120 days of birth',
      price: 'from AED 1,099',
      details: 'Must be stamped within 120 days of birth in the UAE to prevent government overstay penalties.',
      icon: Baby
    }
  ];

  const handleCheckCase = () => {
    const text = encodeURIComponent(
      "Hello 800 DOCS! I want to check my family sponsorship case (salary/profession/relative eligibility). Here are my details:"
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            01 — Who you can sponsor
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Who qualifies, and what each visa needs.
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            The rules differ by relative — tap one for the short version. We confirm your case on WhatsApp before anything is filed.
          </p>
        </motion.div>

        {/* 4 Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs hover:border-[#B8864B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] font-heading mb-1.5">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-[#8C6230] font-heading mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed mb-6">
                    {item.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DECBB5]/70 flex items-center justify-between">
                  <span className="text-xs text-[#64748B]">Price</span>
                  <span className="text-base font-black text-[#0F172A] font-heading">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Guidance & CTA Banner */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#DECBB5] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs"
        >
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] font-heading">
              Salary a little below the line?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Some professions and free zones are assessed differently, and a spouse on her own residence visa can sponsor children in certain cases. Send us your visa and salary certificate — we'll tell you honestly whether it will go through.
            </p>
          </div>

          <div className="shrink-0">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleCheckCase}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-[#0F172A] hover:bg-[#B8864B] transition-all cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#F5D7A1]" />
              <span>Check my case</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoYouCanSponsor;
