import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const Hero = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  return (
    <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FFFFFF]">
      {/* Background Subtle Gradient Lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[950px] h-[360px] bg-gradient-to-r from-[#B8864B]/10 via-[#F3E7D7]/30 to-transparent blur-3xl pointer-events-none rounded-full" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Supporting Content & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label Kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B8864B]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B8864B] uppercase font-heading">
                DOCUMENT ATTESTATION
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.18] mb-6">
              Document Attestation Services in the UAE
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mb-8">
              Brightlink assists individuals and businesses with official document attestation, notarization, and consular legalization for employment, family visas, educational admissions, commercial business setup, and all government procedures across the UAE.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Document Attestation') : navigate('/contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-[#222222] bg-white border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#976A36] hover:bg-[#FAF6F0] active:scale-98 transition-all shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#B8864B]" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Legalization Assurance Tagline */}
            <div className="mt-8 pt-6 border-t border-[#F0E8DC] w-full flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#666666]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>MOFA Electronic Attestation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>Embassy Legalization</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>Secure Courier Handling</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Document-Attestation Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative halo border */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#B8864B]/20 via-[#FAF1E3] to-transparent rotate-1 opacity-80" 
              />

              {/* Main Visual Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8DEC9] shadow-2xl shadow-black/8 group">
                <img
                  src="/images/document_attestation_hero.jpg"
                  alt="Official UAE document attestation with authentic government stamp and embossed seal"
                  className="w-full h-[330px] sm:h-[400px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg';
                  }}
                />

                {/* Subtle Floating Verified Document Seal Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-[#DECBB5] shadow-lg flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-[#1A1A1A] leading-tight font-heading">
                      Official Legalization
                    </span>
                    <span className="text-[10px] text-[#8B6B3E] font-medium">
                      Apostille & MOFA Verified
                    </span>
                  </div>
                </div>

                {/* Bottom Information Bar */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#F7E7CD] flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-[#B8864B]" />
                      Educational · Personal · Commercial
                    </span>
                    <span className="text-white/80 text-[11px]">Valid Across All Emirates</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
