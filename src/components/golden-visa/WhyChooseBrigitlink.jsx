import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  UserCheck, 
  Award, 
  CheckCircle2, 
  Crown,
  Sparkles 
} from 'lucide-react';

export const WhyChooseBrightlink = () => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      title: 'Licensed UAE Immigration Experts',
      description: 'Accredited government PRO specialists with direct daily integration across GDRFA Dubai, Federal ICP, Dubai Land Department, and MoHRE portals.',
      image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
      icon: Award
    },
    {
      title: 'End-to-End Turnkey Support',
      description: 'From preliminary property deed valuations and MOFA degree attestations to VIP Smart Salem medical escorts and doorstep Emirates ID courier delivery.',
      image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
      icon: ShieldCheck
    },
    {
      title: 'Fast-Track Processing Guidance',
      description: 'Pre-vetted documentation eliminates government file rejections and requests for correction, securing nomination approvals in as little as 3 to 5 business days.',
      image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
      icon: Clock
    },
    {
      title: 'Transparent Communication',
      description: 'Zero hidden typing charges. We provide itemized government fee vouchers and clear milestone updates via dedicated WhatsApp channels throughout your file lifecycle.',
      image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
      icon: MessageSquare
    },
    {
      title: 'Dedicated Senior Consultants',
      description: 'You are paired with a single dedicated immigration advisor who manages your application personally, ensuring privacy, consistency, and prompt answers.',
      image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
      icon: UserCheck
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Our Difference
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Why Choose Brightlink for Your Golden Visa?
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            With over a decade of government liaison experience in Business Bay, Dubai, Brightlink has guided thousands of high-net-worth investors and executives to secure long-term UAE residency.
          </p>
        </motion.div>

        {/* 5 Reasons Modern Image-Based Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.slice(0, 3).map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#EBE4D8] hover:border-[#B8864B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/service_golden_visa_1790842391749.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md text-[#F5D7A1] border border-white/20 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#222222] font-heading mb-2">
                      {r.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {r.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Brightlink Benchmark</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom 2 Wide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.slice(3, 5).map((r, idx) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={idx + 3}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#EBE4D8] hover:border-[#B8864B] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row group"
              >
                <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative shrink-0">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/service_golden_visa_1790842391749.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#222222] font-heading mb-2">
                      {r.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {r.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Personalized Executive Care</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
