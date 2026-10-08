import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';

export const WhatIsAmerCenter = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const blocks = [
    {
      badge: 'Official GDRFA Partnership',
      title: 'What Is an Amer Center in Dubai?',
      subtitle: 'The Premier Government Immigration Network',
      description: 'Amer Centers are official semi-governmental service facilities established in collaboration with the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). They serve as the primary legal gateway for all immigration, residency, visa typing, entry permits, and passport clearances across Dubai.',
      bullets: [
        'Accredited direct access to the federal GDRFA electronic system',
        'Official processing for individual, family, and corporate visas',
        'Direct ministerial issue of legal residency permits and entry permits',
        'Authorized fine inquiry, grace period extension, and violation settlements'
      ],
      image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
      imageAlt: 'Brightlink Amer Center Immigration Consultants in Dubai',
      ctaText: 'Explore Amer Capabilities'
    },
    {
      badge: 'Resident & Expatriate Support',
      title: 'Why Residents & Families Use Amer Centers',
      subtitle: 'Streamlined Sponsorship & Everyday Legalities',
      description: 'For expatriate residents, navigating complex residency rules can be stressful. Amer Centers provide the required legal framework to sponsor spouses, newborn infants, school-age children, and parents without risking document rejections or missed deadlines.',
      bullets: [
        'Turnkey family visa sponsorship from entry permit to residency stamping',
        'Synchronized Emirates ID and medical fitness screening appointments',
        'Fast in-country visa status amendments without leaving the UAE',
        'Automated grace period tracking preventing statutory late renewal fines'
      ],
      image: 'https://website-imges.vercel.app/family_visa_dubai.jpg',
      imageAlt: 'Family residency and visa processing at Amer Center Dubai',
      ctaText: 'Sponsor Family Members'
    },
    {
      badge: 'Immigration & Government Services',
      title: 'Comprehensive Government & Residency Solutions',
      subtitle: 'Unified Ministerial Integration',
      description: 'Beyond standard entry permits, Amer Centers interface directly with ICP, Dubai Health Authority (DHA), and the Ministry of Foreign Affairs (MOFA) to provide cohesive government typing solutions under one roof.',
      bullets: [
        'New residency visa stamping and biometric scheduling coordination',
        'Tourist visa extensions and long-term visit visa clearances',
        'Golden Visa 10-year residency nomination preparation and filing',
        'Official cancellation of visas for job transitions or repatriation'
      ],
      image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
      imageAlt: 'Dubai government immigration and residency clearance',
      ctaText: 'View Residency Services'
    },
    {
      badge: 'Corporate & Business Setup',
      title: 'Corporate PRO & Commercial Government Liaison',
      subtitle: 'Empowering Businesses with Workforce Compliance',
      description: 'Businesses operating in Dubai rely on Amer Centers for prompt corporate onboarding, employee quota clearances, establishment card renewals, and labour contract alignments with MOHRE and the Department of Economy and Tourism (DET).',
      bullets: [
        'Company Establishment Card (Immigration Card) issuance and renewal',
        'Turnkey employee work visa packages from offer letter to Emirates ID',
        'Corporate PRO liaison eliminating workforce immigration bottlenecks',
        'Full compliance support with UAE labor and immigration regulations'
      ],
      image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
      imageAlt: 'Corporate business setup and PRO government liaison Dubai',
      ctaText: 'Corporate PRO Assistance'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#F1EBE1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              GDRFA Dubai Gateway
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            What Is an Amer Center & How Does It Work?
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Understanding the vital role of Amer Centers in Dubai’s legal and immigration ecosystem. We provide seamless navigation across every government department.
          </p>
        </motion.div>

        {/* Zig-Zag Alternating Layout Blocks */}
        <div className="space-y-24 lg:space-y-32">
          {blocks.map((block, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Image Block */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative rounded-3xl overflow-hidden p-3 bg-[#FAF5EC] border border-[#E6D7C3] shadow-xl shadow-black/5 group">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900">
                      <img
                        src={block.image}
                        alt={block.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      
                      {/* Floating Bottom Badge inside image */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                        <span className="text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                          {block.badge}
                        </span>
                        <span className="text-xs text-white/80 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#F5D7A1]" />
                          Verified Protocol
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Editorial Block */}
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: isEven ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#E6D7C3] text-[11px] font-bold uppercase tracking-wider text-[#976A36]">
                    {block.badge}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight font-heading leading-snug">
                    {block.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#B8864B] uppercase tracking-wide">
                    {block.subtitle}
                  </div>

                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    {block.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-2">
                    {block.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => onOpenConsultation && onOpenConsultation(`Amer Center - ${block.title}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF5EC] text-[#976A36] border border-[#DECBB5] hover:bg-[#B8864B] hover:text-white hover:border-[#B8864B] text-xs font-bold transition-all duration-200 cursor-pointer shadow-2xs"
                    >
                      <span>{block.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatIsAmerCenter;
