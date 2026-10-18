import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Calculator, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Compass
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AllFreeZonesFinalCTA = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20Brightlink%20to%20choose%20the%20best%20UAE%20Free%20Zone.', '_blank');
  };

  const guarantees = [
    'Unbiased Multi-Zone Comparative Advisory',
    'Official Activity Schedule & Sector Matching',
    'Transparent Fee Breakdowns & Renewal Planning',
    'End-to-End PRO, Visa & Banking File Dossier'
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF5EC] relative overflow-hidden border-t border-[#E6D7C3]/60">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#B8864B]/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DECBB5] shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading">
            FIND YOUR PERFECT UAE FREE ZONE
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] font-heading tracking-tight leading-tight">
            Ready to Launch in the Right UAE Free Zone?
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            With 40+ free zones to choose from, picking the wrong jurisdiction can mean higher renewal fees, restricted banking options, or licensing limitations. Let Brightlink’s senior corporate advisors guide your decision with clarity and confidence.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm sm:text-base hover:bg-[#1EBE5D] transition-colors shadow-sm cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (onOpenConsultation) {
                onOpenConsultation('All UAE Free Zones Comparison Consultation');
              } else {
                window.open('https://wa.me/971566556645', '_blank');
              }
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#B8864B] text-white font-semibold text-sm sm:text-base hover:bg-[#A3733A] transition-colors shadow-sm cursor-pointer"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Book Consultation</span>
          </button>
        </motion.div>

        {/* Cost Calculator Link */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => navigate('/calculator')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C5E28] hover:text-[#6D4518] transition-colors group cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#B8864B]" />
            <span>Prefer to estimate fees first? Try our Interactive Cost Calculator</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Value Guarantees Grid */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#E6D7C3]/80 text-left"
        >
          {guarantees.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 bg-white/70 p-3.5 rounded-xl border border-[#DECBB5]/60">
              <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-[#444444] leading-snug">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
