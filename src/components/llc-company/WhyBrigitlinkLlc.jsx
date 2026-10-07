import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  FileText, 
  Layers, 
  Building2, 
  LifeBuoy, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const WhyBrigitlinkLlc = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Compass,
      title: 'Business Structure Guidance',
      description: 'Expert advisory helping you determine the appropriate setup route, ownership model, and compatible commercial activity codes for your intended operations.'
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'End-to-end assistance preparing required corporate documents, drafting compliant bilingual MOAs in Arabic and English, and coordinating Dubai Court notarizations.'
    },
    {
      icon: Layers,
      title: 'Application Coordination',
      description: 'Complete hands-on management throughout the DET licensing, trade name reservation, initial approval, and commercial registration procedures.'
    },
    {
      icon: Building2,
      title: 'Premises & Setup Guidance',
      description: 'Clear guidance regarding office and premises requirements, whether arranging cost-effective business center flexi-desks or commercial Ejari office spaces.'
    },
    {
      icon: LifeBuoy,
      title: 'Post-Setup Support',
      description: 'Continued corporate assistance with investor and employee residency visas, corporate bank account dossiers, FTA Corporate Tax registration, and ongoing compliance.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Dedicated Formation Partners</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Form Your Mainland LLC with Brigitlink?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Our corporate advisors simplify Dubai’s commercial licensing framework, providing precise legal guidance and reliable execution from inception to full operational launch.
          </p>
        </div>

        {/* 5 Distinct Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 3).map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#DECBB5] text-[#8C5E28] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#DECBB5]/60 flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brigitlink Professional Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.slice(3, 5).map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx + 3}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx + 3) * 0.05 }}
                className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#DECBB5] text-[#8C5E28] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {s.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#DECBB5]/60 flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brigitlink Professional Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Why Brigitlink LLC Consultation')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
          >
            <span>Speak with an LLC Formation Consultant</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyBrigitlinkLlc;
