import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  UserCheck, 
  FileText, 
  ShieldCheck, 
  LifeBuoy, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';

export const WhyBrightlinkSupport = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      icon: Compass,
      title: 'Expert Guidance',
      description: 'Support with selecting the appropriate setup route and identifying the exact DET activity codes that match your operational scope and long-term vision.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Assistance',
      description: 'Tailored consulting based on your unique business model, budget constraints, shareholder arrangements, and target client profile across the UAE.'
    },
    {
      icon: FileText,
      title: 'Documentation Support',
      description: 'Comprehensive help organizing required documents, drafting bilingual agreements and MOAs, court notarization, and attestation pre-checks to avoid delays.'
    },
    {
      icon: ShieldCheck,
      title: 'End-to-End Setup Support',
      description: 'Hands-on management from trade name reservation, initial approval, and premises coordination right through to final license collection and commercial registration.'
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Business Support',
      description: 'Continued partnership for subsequent business requirements, including corporate bank account preparation, investor and staff visas, and compliance maintenance.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>The Brightlink Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Partner with Brightlink for Your Mainland License?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            We operate as your dedicated corporate liaison in Dubai, ensuring every document, approval, and governmental interaction is handled with precision and full regulatory compliance.
          </p>
        </div>

        {/* 5 Distinct Strategic Service Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.slice(0, 3).map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] text-[#8C5E28] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {r.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#F5F1EB] flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Core Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.slice(3, 5).map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={idx + 3}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx + 3) * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] text-[#8C5E28] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {r.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#F5F1EB] flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Core Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Why Brightlink Advisory Consultation')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
          >
            <span>Book a One-on-One Formation Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyBrightlinkSupport;
