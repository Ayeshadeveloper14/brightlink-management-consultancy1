import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  UserCheck, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  Award
} from 'lucide-react';

export const WhyChooseBrigitlink = () => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      title: 'Dedicated Corporate Consultants',
      description: 'Your business is assigned a dedicated senior PRO account manager who knows your company structure, workforce quotas, and ongoing hiring requirements.',
      image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
      icon: UserCheck
    },
    {
      title: 'Fast Turnaround Times',
      description: 'Pre-vetted document checks and express direct API access to GDRFA and MOHRE systems enable same-day or 24–48 hour work permit and visa clearances.',
      image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
      icon: Clock
    },
    {
      title: 'Transparent Communication',
      description: 'No hidden fees or unexpected billings. You receive official government payment vouchers and real-time application milestone updates via dedicated WhatsApp channels.',
      image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
      icon: MessageSquare
    },
    {
      title: 'Government Process Expertise',
      description: 'Over 12 years of hands-on ministerial liaison across Dubai Economy & Tourism, MOHRE, GDRFA, Civil Defence, and Dubai Courts ensures zero regulatory friction.',
      image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
      icon: ShieldCheck
    },
    {
      title: 'End-to-End Corporate Solutions',
      description: 'From company establishment cards and quota increases to VIP medical fitness escorts and physical Emirates ID delivery, we handle the complete lifecycle.',
      image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
      icon: Building2
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
              Why Partner With Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Why Choose Brigitlink for Corporate PRO Services?
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Headquartered in Business Bay, Dubai, Brigitlink delivers seamless, enterprise-grade public relations management to startups, SMEs, and multinational corporations.
          </p>
        </motion.div>

        {/* 5 Reasons Modern Image Cards Grid */}
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
                    <span>Brigitlink Assurance</span>
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
                    <span>Business-Focused Solutions</span>
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
