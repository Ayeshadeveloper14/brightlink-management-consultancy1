import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Landmark, 
  FileText, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Award,
  Headphones
} from 'lucide-react';

export const WhyBrightlinkFreeZone = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      icon: Award,
      title: 'Impartial Authority Guidance',
      badge: 'Unbiased Advice',
      description: 'Unlike single-zone sales agents, Brightlink partners with 40+ UAE free zones. We recommend the jurisdiction that genuinely aligns with your commercial activities, banking preferences, and budget.'
    },
    {
      icon: ShieldCheck,
      title: 'In-House Amer & Typing Hub',
      badge: 'Direct Government Portals',
      description: 'We operate our own fully accredited government typing and Amer documentation infrastructure. Your investor visas, medical testing, and Emirates ID applications are processed directly without third-party brokers.'
    },
    {
      icon: FileText,
      title: 'Complete Cost Transparency',
      badge: 'No Hidden Fees',
      description: 'Every proposal includes clear, itemized government tariffs and authority fees. We provide official payment receipts for all Free Zone Authority and GDRFA transactions.'
    },
    {
      icon: Landmark,
      title: 'Corporate Bank Account Assistance',
      badge: 'Banking Solutions',
      description: 'Opening a UAE corporate bank account requires strict compliance dossiers. Our dedicated banking specialists assist with document preparation, business plans, and direct banking introductions.'
    },
    {
      icon: Users,
      title: 'Family & Dependent Sponsorship',
      badge: 'End-to-End Care',
      description: 'Once your investor residence visa is active, our consultants seamlessly manage residence visa sponsorship for your spouse, children, parents, and domestic staff.'
    },
    {
      icon: Headphones,
      title: 'Ongoing PRO & Renewal Support',
      badge: 'Long-Term Partnership',
      description: 'Our advisory doesn’t conclude at license issuance. We provide annual trade license renewals, corporate amendments, activity additions, and tax compliance year-round.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>THE BRIGHTLINK ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Form Your Dubai Free Zone with Brightlink
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Establishing a company in the UAE should be an exciting milestone, not a bureaucratic puzzle. Discover how our experienced corporate advisors and in-house typing center ensure seamless incorporation.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-2xl p-6 bg-[#FAF7F0]/40 border border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#8C5E28] border border-[#DECBB5]/70 font-heading">
                      {r.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
