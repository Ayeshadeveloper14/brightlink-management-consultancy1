import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Star, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

export const VisaRouteCards = ({ onOpenCalculator, onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeRoute, setActiveRoute] = useState(0);

  const routeCards = [
    {
      id: 'golden-visa',
      years: '10',
      durationLabel: 'years',
      title: 'Golden Visa',
      propertyRequirement: 'AED 2M+ property',
      badge: 'Premier Route',
      highlights: [
        '10-year self-sponsored residency without an employer or sponsor',
        'Can purchase completed, mortgaged, or off-plan (Oqood) properties',
        'Sponsors spouse, children of any age, and domestic staff',
        'No limit on continuous stay outside the UAE'
      ]
    },
    {
      id: 'investor-visa',
      years: '2',
      durationLabel: 'years',
      title: 'Investor Visa',
      propertyRequirement: 'Under AED 2M property',
      badge: 'Standard Investor',
      highlights: [
        '2-year renewable Dubai property investor residency',
        'No minimum purchase value for single owners (joint AED 400K+)',
        'Police Clearance Certificate (PCC) required',
        'Must enter the UAE at least once every 180 days'
      ]
    },
    {
      id: 'retirement-visa',
      years: '5',
      durationLabel: 'years',
      title: 'Retirement Visa',
      propertyRequirement: 'AED 1M+ property · age 55+',
      badge: 'Retirees 55+',
      highlights: [
        '5-year renewable residency for property owners aged 55 and over',
        'Property value of AED 1,000,000 or more with DLD valuation',
        'Allows sponsorship of spouse and dependent children',
        'Enjoy Dubai lifestyle with full banking and healthcare privileges'
      ]
    }
  ];

  const handleCardClick = (idx) => {
    setActiveRoute(idx);
  };

  const handleWhatsAppRoute = (cardTitle) => {
    const text = encodeURIComponent(
      `Hello 800 DOCS! I am interested in the ${cardTitle} via Dubai property. Please confirm the requirements and government fees.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section id="visa-routes" className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {routeCards.map((card, idx) => {
            const isSelected = activeRoute === idx;
            return (
              <motion.div
                key={card.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                onClick={() => handleCardClick(idx)}
                className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between select-none ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#FAF5EC] to-[#FFFFFF] border-[#B8864B] shadow-xl shadow-[#B8864B]/10 ring-2 ring-[#B8864B]/30'
                    : 'bg-[#FCFAF8] border-[#DECBB5] hover:border-[#B8864B]/60 hover:bg-white shadow-xs'
                }`}
              >
                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E8DFC8]">
                    <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider font-heading px-3 py-1 rounded-full bg-white border border-[#DECBB5] shadow-2xs">
                      {card.badge}
                    </span>
                    <div className="text-right">
                      <span className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-heading block leading-none">
                        {card.years}
                      </span>
                      <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                        {card.durationLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Property Requirement */}
                  <h3 className="text-2xl font-bold text-[#0F172A] font-heading mb-2">
                    {card.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#FAF5EC] text-xs font-bold text-[#8C6230] font-heading mb-6 border border-[#B8864B]/20">
                    {card.propertyRequirement}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {card.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-[#DECBB5]/70">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppRoute(card.title);
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0F172A] text-white hover:bg-[#B8864B]'
                        : 'bg-white text-[#0F172A] border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#B8864B]'
                    }`}
                  >
                    <span>Check {card.title} Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Statistics Strip Below Route Cards */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left"
        >
          {/* Trust Stat 1: 625+ Google reviews */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-xs">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#B8864B] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-base sm:text-lg font-bold text-[#0F172A] font-heading block">
                625+ Google reviews
              </span>
              <span className="text-[11px] text-[#64748B]">Verified Dubai property buyers</span>
            </div>
          </div>

          <div className="hidden sm:block h-10 w-[1px] bg-[#DECBB5]" />

          {/* Trust Stat 2: 20K+ visas processed */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-xs">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading leading-tight">
                20K+
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#8C6230] font-heading block">
                visas processed
              </span>
              <span className="text-[11px] text-[#64748B]">Through official DLD & GDRFA channels</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VisaRouteCards;
