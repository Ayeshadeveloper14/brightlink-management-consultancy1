import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';

export const AjmanCanCannot = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const canItems = [
    'Hold eligible international real estate, cash, and tangible assets',
    'Hold diversified investment portfolios, private equity, and funds',
    'Own intellectual property, trademarks, patents, and software rights',
    'Hold shares in UAE Mainland, Free Zone, or foreign companies where permitted',
    'Support international business structures outside the UAE territory',
    'Support cross-border merchant trade and commercial billing arrangements',
    'Maintain corporate bank accounts subject to bank compliance approval',
    'Hold UAE property in approved designated areas where permitted by relevant authorities'
  ];

  const cannotItems = [
    'Conduct direct onshore commercial or retail trading within the UAE mainland',
    'Operate as a normal UAE mainland local storefront or domestic service enterprise',
    'Use the offshore license for UAE domestic commercial retail operations',
    'Automatically provide or sponsor UAE residence visas for shareholders or employees'
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Info className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STATUTORY CLARITY & SCOPE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            What Ajman Offshore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">CAN & CANNOT Do</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Understanding the precise regulatory permissions and restrictions ensures your offshore entity is structured legally and effectively.
          </p>
        </div>

        {/* 2-Column Scannable Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* CAN CARD */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-8 border border-emerald-200/90 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 border-b border-emerald-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] font-heading">CAN</h3>
                  <span className="text-xs text-emerald-700 font-semibold">Authorized Statutory Scope</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {canItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-100 text-xs text-emerald-800 font-medium">
              Ideal for international asset protection, corporate shareholding, and global trade.
            </div>
          </motion.div>

          {/* CANNOT CARD */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-8 border border-rose-200/90 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 border-b border-rose-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] font-heading">CANNOT</h3>
                  <span className="text-xs text-rose-700 font-semibold">Statutory Offshore Restrictions</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {cannotItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-100 text-xs text-rose-800 font-medium flex items-center justify-between flex-wrap gap-2">
              <span>Require domestic UAE market trading or employment visas?</span>
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('Comparing Ajman Offshore vs Mainland LLC Setup')}
                className="font-bold underline text-rose-900 hover:text-rose-700 cursor-pointer"
              >
                Explore Mainland LLC Setup →
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AjmanCanCannot;
