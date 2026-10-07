import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  UserCheck, 
  FileCheck2, 
  Zap, 
  Building2, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const WhyChooseBrigitlink = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const points = [
    {
      step: '01',
      title: 'Experienced Support',
      description: 'Our consultants possess deep knowledge of UAE Labour Law, ministerial decrees, and evolving MOHRE procedural guidelines, ensuring your workforce files remain legally sound.',
      icon: UserCheck
    },
    {
      step: '02',
      title: 'Accurate Documentation',
      description: 'We audit every employee job offer, educational certificate, and establishment filing prior to submission, reducing the likelihood of government application rejections.',
      icon: FileCheck2
    },
    {
      step: '03',
      title: 'Efficient Processing',
      description: 'With direct electronic integration into government portals, your transactions are lodged promptly without unnecessary bureaucratic downtime or delay.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Government Transaction Assistance',
      description: 'End-to-end guidance across interconnected entities including MOHRE, GDRFA, and ICP, giving you a single unified liaison for all workforce paperwork.',
      icon: Building2
    },
    {
      step: '05',
      title: 'Clear Communication',
      description: 'Transparent updates at every stage of your transaction, official government fee vouchers provided with every filing, and direct access to dedicated advisors.',
      icon: MessageSquare
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Our Professional Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Why Choose Brigitlink for Tasheel Services?
          </h2>

          <p className="text-base text-[#666666] leading-relaxed">
            A structured, reliable approach to managing corporate labour compliance and ministerial transactions across the United Arab Emirates.
          </p>
        </motion.div>

        {/* Vertical Connected List / Timeline Style */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E6D7C3] space-y-10 my-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;

            return (
              <motion.div
                key={pt.step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Node Bullet */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF5EC] border-2 border-[#B8864B] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                  <span className="text-[10px] sm:text-xs font-bold font-heading">{idx + 1}</span>
                </div>

                {/* Content Block */}
                <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5] hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E6D7C3] flex items-center justify-center text-[#B8864B]">
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-[#222222] group-hover:text-[#976A36] transition-colors">
                        {pt.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold text-[#B8864B] uppercase tracking-wider">
                      Standard {pt.step}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed pt-1">
                    {pt.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Small Advisory Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#555555]">
            <strong className="text-[#222222] font-semibold">Corporate Advisory: </strong>
            Looking to audit your company’s current MOHRE establishment quota or WPS compliance status?
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Tasheel Corporate Compliance Audit')}
            className="shrink-0 px-4 py-2 rounded-full bg-[#B8864B] text-white text-xs font-bold hover:bg-[#9E723E] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Request Account Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseBrigitlink;
