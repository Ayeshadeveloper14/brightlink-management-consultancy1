import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  FileText, 
  Layers, 
  Building2, 
  CreditCard, 
  LifeBuoy, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const WhyBrightlinkBranch = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Compass,
      title: 'Eligibility Guidance',
      description: 'Pre-auditing parent company legal standing and home country registration to determine whether a Branch or Representative Office is the optimal and permitted route.'
    },
    {
      icon: FileText,
      title: 'Document Support',
      description: 'End-to-end guidance compiling parent company charters, drafting compliant board resolutions, coordinating international embassy attestations, and certified Arabic legal translation.'
    },
    {
      icon: Layers,
      title: 'Application Coordination',
      description: 'Complete hands-on management through the Dubai Department of Economy and Tourism (DET), Ministry of Economy (MOE), and trade name reservation registries.'
    },
    {
      icon: Building2,
      title: 'Office Setup Guidance',
      description: 'Connecting your organization with compliant physical office premises in prime business districts, coordinating lease agreements, and securing certified Ejari registrations.'
    },
    {
      icon: CreditCard,
      title: 'Visa & Banking Support',
      description: 'Managing GDRFA and MOHRE establishment cards, processing executive residence visas for appointed general managers, and preparing corporate bank account applications.'
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Compliance Support',
      description: 'Continuous corporate PRO services, annual trade license renewals, Ministry of Economy re-validations, and Corporate Tax filing support.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Dedicated Corporate Liaison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Partner with Brightlink for Branch Setup?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            International expansions require cross-border legal precision. We bridge your corporate headquarters with UAE government authorities to execute a seamless, compliant launch.
          </p>
        </div>

        {/* 6 Structured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((item, idx) => {
            const Icon = item.icon;
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
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#DECBB5]/60 flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Execution Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Why Brightlink Branch Consultation')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer shadow-md"
          >
            <span>Consult with an International Expansion Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyBrightlinkBranch;
