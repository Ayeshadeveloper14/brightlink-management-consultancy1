import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const Hero = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  return (
    <section className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FFFFFF]">
      {/* Background glow accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-gradient-to-r from-[#B8864B]/10 via-[#F5ECE0]/30 to-transparent blur-3xl pointer-events-none rounded-full" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Information & CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B8864B]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B8864B] uppercase font-heading">
                NOTARY SERVICES
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.18] mb-6 font-heading">
              Professional Notary Services in the UAE
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mb-8">
              Brightlink provides assistance with notarisation and Power of Attorney requirements for property, business, banking, family and legal matters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Notary Services') : navigate('/contact')}
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
          </motion.div>

          {/* Right Column: Realistic Notary Document Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div 
                aria-hidden="true" 
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#B8864B]/20 via-[#FAF1E3] to-transparent -rotate-1 opacity-70" 
              />

              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8DEC9] shadow-xl shadow-black/8">
                <img
                  src="/images/notary_services_hero.jpg"
                  alt="Official Power of Attorney legal document with authentic notary public seal"
                  className="w-full h-[320px] sm:h-[390px] object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg';
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
