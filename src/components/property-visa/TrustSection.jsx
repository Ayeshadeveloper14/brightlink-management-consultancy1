import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Star, Building2, Quote, CheckCircle2 } from 'lucide-react';

export const TrustSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Introduction */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Licensed UAE Documentation Company
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            We are 800 DOCS — on your side, working on your behalf.
          </h2>
          <div className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading mb-4">
            The FamilyVisa.ae team — 800 DOCS, Deira, Dubai
          </div>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
            800 DOCS LLC SOC is the licensed documentation company behind FamilyVisa.ae — a private typing centre, not a government office. We check your eligibility free, file through the official DLD, GDRFA and ICP channels, and follow up until your Emirates ID is in your hand.
          </p>
        </div>

        {/* CEO Trust Block */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs relative overflow-hidden"
        >
          {/* Subtle Quote Watermark */}
          <Quote className="absolute right-6 bottom-6 w-24 h-24 text-[#DECBB5]/20 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
            
            <div className="space-y-4 max-w-2xl">
              <blockquote className="text-base sm:text-lg font-medium text-[#0F172A] leading-relaxed font-heading italic">
                “We process around 300 property visa applications a month — Golden, Retirement and 2-Year Investor. Everything on this page comes from real case handling, not copy-pasted content.”
              </blockquote>

              <div className="pt-2 flex items-center gap-3.5">
                {/* Monogram RA */}
                <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#F5D7A1] font-black text-sm flex items-center justify-center font-heading shadow-xs">
                  RA
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0F172A] font-heading">
                    Razeeb Abdulla
                  </h4>
                  <p className="text-xs text-[#8C6230] font-medium font-heading">
                    CEO · FamilyVisa.ae · 800 DOCS LLC SOC
                  </p>
                </div>
              </div>
            </div>

            {/* Google Rating Badge */}
            <div className="shrink-0 p-5 rounded-2xl bg-white border border-[#DECBB5] text-center shadow-xs md:self-center">
              <div className="flex items-center justify-center gap-1 text-[#B8864B] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#0F172A] block font-heading">
                Rated 4.9 on Google.
              </span>
              <span className="text-[10.5px] text-[#64748B] block mt-0.5">
                Over 625+ real reviews
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustSection;
