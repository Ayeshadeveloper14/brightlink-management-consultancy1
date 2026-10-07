import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const Hero = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FFFFFF]">
      {/* Subtle Background Accent Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[340px] bg-gradient-to-r from-[#B8864B]/10 via-[#FAF1E3]/20 to-transparent blur-3xl pointer-events-none rounded-full" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Information & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label Kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B8864B]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#B8864B] uppercase font-heading">
                TAWJEEH SERVICES
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.18] mb-6">
              Tawjeeh Services in the UAE
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mb-8">
              Tawjeeh is the official Ministry of Human Resources and Emiratisation (MOHRE) labour-law orientation program designed to help employees and employers understand their rights, responsibilities, and workplace obligations under UAE labour regulations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Tawjeeh Services') : navigate('/contact')}
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

            {/* Quiet Trust Indicator */}
            <div className="mt-8 pt-6 border-t border-[#F0E8DC] w-full flex items-center gap-2 text-xs text-[#777777]">
              <ShieldCheck className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>Aligned with official MOHRE guidelines and UAE Federal Decree-Law on Employment Relations</span>
            </div>
          </motion.div>

          {/* Right Column: Clean Photographic Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft decorative backdrop card */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#B8864B]/20 via-[#FAF1E3] to-transparent -rotate-1 opacity-70" 
              />

              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8DEC9] shadow-xl shadow-black/8 group">
                <img
                  src="/images/tawjeeh_hero.jpg"
                  alt="Tawjeeh labour law employee orientation and training in UAE"
                  className="w-full h-[320px] sm:h-[390px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.src = 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg';
                  }}
                />

                {/* Subtle bottom gradient for card grounding */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="font-semibold text-[#F7E7CD]">MOHRE Orientation Program</span>
                    <span className="text-white/80">UAE Workforce Guidance</span>
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
