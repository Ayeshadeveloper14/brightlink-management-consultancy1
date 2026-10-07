import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  AlertTriangle, 
  ShieldAlert, 
  Calendar, 
  RefreshCw, 
  Zap, 
  Scale, 
  CheckCircle2, 
  ArrowRight,
  FileWarning
} from 'lucide-react';

export const ProductRegulationsSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const rules = [
    {
      title: '5-Year Certificate Validity',
      subtitle: 'Long-Term Peace of Mind',
      description: 'Unlike annual licenses, a Dubai Municipality Montaji product certificate remains valid for 5 full calendar years. You can import recurring container shipments under the same registration number.'
    },
    {
      title: 'Formula vs Artwork Changes',
      subtitle: 'Amendment Rules',
      description: 'Cosmetic changes to packaging design or brand logos can be updated through an administrative label amendment. However, changing ingredients, percentages, or active compounds requires a new test review.'
    },
    {
      title: 'Severe Customs Non-Compliance Penalties',
      subtitle: 'Legal Enforcement',
      description: 'Unregistered goods arriving at UAE ports face immediate customs detention, mandatory re-exportation at the importer’s expense, and municipal fines ranging from AED 10,000 to AED 100,000.'
    },
    {
      title: 'VIP Fast-Track Clearance Support',
      subtitle: 'Urgent Cargo Release',
      description: 'Shipment already at Jebel Ali Port or DXB Airport? We coordinate expedited sample lab testing and priority municipal officer reviews to clear containers before demurrage fees accumulate.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Compliance & Enforcement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Important Regulations, Validity & Enforcement
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Understanding UAE municipal regulations protects your brand against unexpected shipment detentions, retail delistings, and costly customs penalties.
          </p>
        </motion.div>

        {/* 4 Informational Rule Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {rules.map((rule, idx) => (
            <motion.div 
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs hover:border-[#B8864B] hover:shadow-md transition-all space-y-2.5"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                {rule.subtitle}
              </span>
              <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                {rule.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {rule.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Urgent Customs Support Banner */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#DECBB5] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs"
        >
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#8C6230] text-[11px] font-bold uppercase tracking-wider shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Urgent Port Clearance</span>
            </div>
            <h4 className="text-xl font-bold text-[#0F172A] font-heading">
              Have a Container Pending at Dubai Customs?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              If your shipment is currently detained at Jebel Ali Port or DXB Airport Cargo due to missing Montaji numbers, our emergency PRO response team can file priority sample testing and obtain interim customs conditional releases.
            </p>
          </div>

          <div className="shrink-0">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => onOpenConsultation('Urgent Customs Product Clearance')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Request Urgent Customs Release</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductRegulationsSection;
