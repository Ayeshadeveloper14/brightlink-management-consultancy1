import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  UserCheck, 
  MessageSquare, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseBrightlink = () => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      title: 'Experienced Consultants',
      subtitle: '12+ Years in Immigration Law',
      description: 'Our senior consultants have processed tens of thousands of GDRFA and Amer applications, ensuring full compliance and eliminating documentation rejections.',
      image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
      badge: 'Certified Team'
    },
    {
      title: 'Fast Communication',
      subtitle: 'Real-Time WhatsApp Updates',
      description: 'No wondering where your passport or file is. Receive milestone alerts directly to your phone the minute your application progresses through government channels.',
      image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
      badge: '24/7 Channels'
    },
    {
      title: 'Transparent Process',
      subtitle: 'Official Government Receipts',
      description: 'Zero hidden fees or surprise billings. Every government payment is accompanied by its official e-voucher and GDRFA payment transaction breakdown.',
      image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
      badge: '100% Transparent'
    },
    {
      title: 'Dedicated Support',
      subtitle: 'Single Point of Contact',
      description: 'Your case is managed by a dedicated case officer who knows your family or company requirements, guiding you through each stage from beginning to end.',
      image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
      badge: 'Personalized Care'
    },
    {
      title: 'UAE Regulatory Expertise',
      subtitle: 'Direct Ministerial Network',
      description: 'Deep familiarity with the latest cabinet resolutions, visa quota updates, and Amer processing standards ensures zero regulatory friction.',
      image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
      badge: 'GDRFA Aligned'
    },
    {
      title: 'End-to-End Assistance',
      subtitle: 'VIP Doorstep Delivery',
      description: 'From initial document checks and medical screening coordination to biometric center escorts and physical card courier delivery to your home or office.',
      image: 'https://website-imges.vercel.app/hero_dubai_skyline_1790842330436.jpg',
      badge: 'Turnkey Solution'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              The Brightlink Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Why Choose Brightlink for Amer Services?
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Experience corporate-grade professionalism, transparent government receipts, and attentive personal support across all Emirates.
          </p>
        </motion.div>

        {/* 6 Large Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-3xl overflow-hidden bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Large Image Header */}
              <div className="relative h-56 overflow-hidden bg-neutral-900">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#F5D7A1]">
                    {reason.badge}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-0.5">
                    {reason.title}
                  </h3>
                  <div className="text-xs text-white/80 font-medium">
                    {reason.subtitle}
                  </div>
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                  {reason.description}
                </p>

                <div className="pt-3 border-t border-[#F1EBE1] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Brightlink Quality Benchmark</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseBrightlink;
