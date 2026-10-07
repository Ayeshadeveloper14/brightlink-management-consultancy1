import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const FinalCTA = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-white border border-[#DECBB5] p-8 sm:p-12 md:p-14 text-center shadow-xs"
        >
          {/* Subtle Ambient Glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-1/4 w-72 h-72 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-[#976A36] uppercase font-heading block mb-3">
              Power of Attorney & Notarisation
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-4 font-heading">
              Need Notary Assistance?
            </h2>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-8">
              Share your requirement and receive guidance on the applicable notarisation or Power of Attorney process.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Notary Services') : navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-[#222222] bg-white border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#976A36] hover:bg-[#FAF6F0] active:scale-98 transition-all shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#B8864B]" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
