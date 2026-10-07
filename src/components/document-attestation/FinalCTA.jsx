import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const FinalCTA = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Distinctive Visual Container: Elegant dark slate and warm gold accents */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1C1A17] via-[#24211D] to-[#1A1815] text-white p-8 sm:p-12 md:p-14 border border-[#3E3830] shadow-xl text-center"
        >
          {/* Subtle Ambient Radial Glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-1/4 w-80 h-80 bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold text-[#E5C9A4] tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Official Legalization Support</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
              Need Your Documents Attested?
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              Tell us what document you have and where you need to use it. Our team can guide you through the applicable attestation requirements and next steps.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Document Attestation Quote') : navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 shadow-md shadow-black/30 transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/15 active:scale-98 transition-all cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#E5C9A4]" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
