import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  X,
  Send
} from 'lucide-react';

export const Eligibility = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCheckCategory, setActiveCheckCategory] = useState(null);

  const factors = [
    {
      id: 'passport-nationality',
      factorNum: '01',
      emoji: '📘',
      title: 'Passport nationality',
      description: 'The passport presented to the airline and UAE immigration is the main starting point.'
    },
    {
      id: 'country-of-residence',
      factorNum: '02',
      emoji: '🪪',
      title: 'Country of residence',
      description: 'A BRP, Green Card, PR card, EU permit, GCC ID or other residence document may affect a conditional route.'
    },
    {
      id: 'existing-visas',
      factorNum: '03',
      emoji: '🌐',
      title: 'Existing visas',
      description: 'Some valid visas or residence permits from qualifying countries can affect entry-on-arrival eligibility for selected nationalities.'
    },
    {
      id: 'purpose-of-travel',
      factorNum: '04',
      emoji: '🧳',
      title: 'Purpose of travel',
      description: 'Tourism, transit, employment, study and residence are different legal categories and must not be mixed.'
    }
  ];

  const handleActionClick = (routeType) => {
    if (onOpenConsultation) {
      onOpenConsultation(`Tourist Visa Eligibility - ${routeType}`);
    }
    setActiveCheckCategory(routeType);
  };

  return (
    <section id="eligibility-section" className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Eligibility first
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Do You Need a Dubai Visa?
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Whether you are travelling for a holiday, family visit, cruise, business meeting or short stopover, your visa requirements depend on your passport nationality and travel circumstances. Use the four connected factors below together rather than relying on residence alone.
          </p>
        </motion.div>

        {/* 4 Connected Factors Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          {factors.map((factor, index) => (
            <motion.div
              key={factor.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#EBE4D8] hover:border-[#DECBB5] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              {/* Connector indicator for desktop */}
              {index < factors.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#B8864B] text-[10px] font-bold flex items-center justify-center pointer-events-none">
                  →
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                    {factor.emoji}
                  </div>
                  <span className="text-xs font-bold text-[#B8864B] font-heading px-2 py-0.5 rounded-md bg-[#FAF8F5]">
                    Factor {factor.factorNum}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#222222] mb-2 font-heading">
                  {factor.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {factor.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F5EFE6] flex items-center gap-1.5 text-[11px] font-semibold text-[#888888]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>Assessed cumulatively</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Eligibility CTA Controls Area */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E6D7C3] shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#B8864B]" />
                <h3 className="text-base sm:text-lg font-bold text-[#222222] font-heading">
                  Begin Your Eligibility Evaluation
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#555555] max-w-2xl leading-relaxed">
                Rules vary based on passport nationality, residence status, and existing permits. Select how you would like our team to review your circumstances before travel.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleActionClick('Check by Nationality')}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-xs sm:text-sm shadow-sm hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Check by Nationality</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => handleActionClick('Check by Residence')}
                className="px-5 py-3 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#444444] hover:text-[#B8864B] hover:border-[#B8864B] font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Check by Residence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => handleActionClick('Review Entry-on-Arrival Routes')}
                className="px-5 py-3 rounded-full bg-white border border-[#DECBB5] text-[#444444] hover:text-[#B8864B] hover:border-[#B8864B] font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Review Entry-on-Arrival Routes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
