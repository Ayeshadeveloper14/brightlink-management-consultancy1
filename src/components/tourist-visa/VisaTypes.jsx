import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  FileText, 
  ExternalLink 
} from 'lucide-react';

export const VisaTypes = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleCardCTA = (visaTitle, actionLabel) => {
    if (onOpenConsultation) {
      onOpenConsultation(`${visaTitle} - ${actionLabel}`);
    }
  };

  const visaCards = [
    {
      id: 'tourist-visa',
      emoji: '🌴',
      title: 'Tourist Visa',
      description: 'For holidays, sightseeing and ordinary leisure travel. Common options include 14-day, 30-day and 60-day stays with single or multiple entry.',
      cta: 'Read the tourist visa guide',
      isPrimaryPillar: true
    },
    {
      id: 'visit-visa',
      emoji: '👪',
      title: 'Visit Visa',
      description: 'Visit visas can cover eligible family, friend or other short-visit purposes. Sponsorship and supporting evidence vary, so the correct purpose must be confirmed before submission.',
      cta: 'Ask about visit eligibility'
    },
    {
      id: 'transit-visa',
      emoji: '✈️',
      title: 'Transit Visa',
      description: 'Designed for short stopovers. The 48-hour and 96-hour routes have separate validity, airline and itinerary requirements.',
      cta: 'Read transit visa guide'
    },
    {
      id: 'multiple-entry-visa',
      emoji: '🔁',
      title: 'Multiple-Entry Visa',
      description: 'Useful when a traveller must leave and re-enter the UAE during the approved period. Entry validity and permitted stay still apply on every trip.',
      cta: 'Read the multiple-entry visa guide'
    },
    {
      id: 'longer-stay-tourist-visa',
      emoji: '📅',
      title: 'Longer-Stay Tourist Visa',
      description: 'A 60-day tourist visa gives eligible visitors more time for a longer holiday or family trip. It remains a temporary visitor route and does not permit employment.',
      cta: 'View 60-day tourist visa'
    }
  ];

  const scrollToTopOrEligibility = () => {
    const el = document.getElementById('eligibility-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
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
            Choose the correct route
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Dubai Visa Types
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            This pillar explains the categories briefly. Use the linked specialist page for detailed conditions or to start the correct application.
          </p>
        </motion.div>

        {/* 5 Visa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visaCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-200 ${
                card.isPrimaryPillar
                  ? 'bg-white border-[#B8864B] shadow-md shadow-[#B8864B]/10 ring-1 ring-[#B8864B]/20'
                  : 'bg-white border-[#EBE4D8] hover:border-[#DECBB5] shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-2xl shrink-0">
                    {card.emoji}
                  </div>
                  {card.isPrimaryPillar && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3]">
                      Current Pillar
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#222222] mb-2.5 font-heading">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5EFE6]">
                <button
                  type="button"
                  onClick={() => {
                    if (card.isPrimaryPillar) {
                      scrollToTopOrEligibility();
                    } else {
                      handleCardCTA(card.title, card.cta);
                    }
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                    card.isPrimaryPillar
                      ? 'bg-[#FAF5EC] text-[#B8864B] hover:bg-[#F3EAD9]'
                      : 'bg-[#FAF8F5] text-[#444444] hover:text-[#B8864B] hover:bg-[#FAF5EC]'
                  }`}
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* 6th Slot: Decision Support Card "Not Sure Which One?" */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#2B231A] via-[#332A20] to-[#1E1712] text-white border border-[#4A3D2F] flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl font-bold text-[#F5D7A1] shrink-0">
                  ?
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#B8864B]/30 text-[#F5D7A1] border border-[#B8864B]/40">
                  Decision Support
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 font-heading">
                Not sure which one?
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Use the passport you will travel with, then match your stay duration and number of entries. Our team can review the documents before submission.
              </p>
            </div>

            <div className="pt-4 border-t border-white/15">
              <button
                type="button"
                onClick={() => handleCardCTA('Not Sure Which One', 'Check my eligibility')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 transition-all flex items-center justify-between cursor-pointer shadow-md"
              >
                <span>Check my eligibility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
