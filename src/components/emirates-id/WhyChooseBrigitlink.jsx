import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  UserCheck, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Building2, 
  HeartHandshake,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseBrigitlink = () => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      title: 'Experienced Consultants',
      description: 'Our senior consultants have processed over 25,000+ Emirates ID and residency applications across Dubai, Abu Dhabi, and the Northern Emirates.',
      image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
      icon: UserCheck
    },
    {
      title: 'Transparent Process',
      description: 'Official ICP electronic receipts with exact fees, zero hidden markups, and clear upfront guidance on processing times.',
      image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
      icon: MessageSquare
    },
    {
      title: 'Dedicated Support',
      description: 'You are assigned a dedicated identity specialist accessible via phone and direct WhatsApp for real-time milestone assistance.',
      image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
      icon: HeartHandshake
    },
    {
      title: 'UAE Compliance Expertise',
      description: 'Up-to-the-minute knowledge of federal ICP policies, grace periods, biometric exemptions, and electronic residency regulations.',
      image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
      icon: ShieldCheck
    },
    {
      title: 'Fast Turnaround Guidance',
      description: 'Express queue bookings at authorized Customer Happiness Centers and expedited courier dispatch to receive your card in days, not weeks.',
      image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
      icon: Clock
    },
    {
      title: 'Customer-Focused Service',
      description: 'Turnkey doorstep courier pickup of physical documents and physical Emirates ID hand-delivery at your office or residence.',
      image: 'https://website-imges.vercel.app/hero_dubai_skyline_1790842330436.jpg',
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFAF8] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              The Brigitlink Distinction
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Why Choose Brigitlink for Your Emirates ID?
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            We combine high-touch personal service with direct electronic government integration, delivering speed, reliability, and total peace of mind.
          </p>
        </motion.div>

        {/* 6-Card Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#EFEAE2] hover:border-[#DECBB5] hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Banner */}
                <div className="relative h-44 overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#B8864B] shadow-sm">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#222222] mb-2 group-hover:text-[#976A36] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F1EBE1] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Client Satisfaction Guaranteed</span>
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

export default WhyChooseBrigitlink;
