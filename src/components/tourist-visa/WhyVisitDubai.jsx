import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Compass, 
  Umbrella, 
  ShoppingBag, 
  Briefcase, 
  Users, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const WhyVisitDubai = () => {
  const shouldReduceMotion = useReducedMotion();

  const experiences = [
    {
      id: 'burj-khalifa',
      iconEmoji: '🏙',
      title: 'Burj Khalifa',
      subtitle: 'Iconic observation decks & skyline'
    },
    {
      id: 'desert-safari',
      iconEmoji: '🏜',
      title: 'Desert safari',
      subtitle: 'Dune drives, sunset & camps'
    },
    {
      id: 'beaches',
      iconEmoji: '🏖',
      title: 'Beaches',
      subtitle: 'Public beaches & luxury coastal resorts'
    },
    {
      id: 'shopping',
      iconEmoji: '🛍',
      title: 'Shopping',
      subtitle: 'Dubai Mall, souks & festival retail'
    },
    {
      id: 'business-events',
      iconEmoji: '💼',
      title: 'Business events',
      subtitle: 'Exhibitions, summits & trade fairs'
    },
    {
      id: 'family-attractions',
      iconEmoji: '👨‍👩‍👧',
      title: 'Family attractions',
      subtitle: 'Waterparks, aquariums & theme parks'
    }
  ];

  const emiratesList = [
    'Dubai',
    'Abu Dhabi',
    'Sharjah',
    'Ajman',
    'Umm Al Quwain',
    'Ras Al Khaimah',
    'Fujairah'
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Tourism, family and business
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-6 font-heading">
            Why Visit Dubai?
          </h2>
          <div className="prose prose-neutral max-w-none">
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed font-normal">
              Dubai combines globally recognised landmarks with year-round leisure and major commercial activity. Visitors can view the city from the Burj Khalifa, explore Dubai Mall, see Palm Jumeirah, join a desert safari, relax on public and resort beaches, or stay in luxury hotels with convenient access to the city. Families can plan waterparks, theme parks, aquariums, museums and indoor attractions, while business travellers attend exhibitions, conferences and international events. Seasonal shopping festivals, traditional souks and modern retail districts add more reasons to visit. Short-stay travellers can build an itinerary around one or two areas, while longer stays allow time to explore beyond Dubai. An approved UAE tourist visa generally allows eligible travellers to visit Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah, subject to the conditions of the issued visa.
            </p>
          </div>
        </motion.div>

        {/* Dubai Experiences Highlight Row / Cards */}
        <div className="mb-12">
          {/* Intro Label */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#B8864B] text-sm">✦</span>
            <span className="text-sm font-bold uppercase tracking-wider text-[#222222] font-heading">
              One trip, many experiences
            </span>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-[#FCFAF8] rounded-2xl p-5 border border-[#EFEAE2] hover:border-[#DECBB5] hover:bg-white transition-all shadow-xs group flex flex-col items-center text-center justify-between min-h-[160px]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {exp.iconEmoji}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#222222] mb-1 font-heading">
                    {exp.title}
                  </h3>
                  <p className="text-[11px] text-[#777777] leading-tight">
                    {exp.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 7 Emirates Scope Callout */}
        <div className="rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2] p-6 sm:p-7">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#B8864B]" />
              <h3 className="text-sm sm:text-base font-bold text-[#222222] font-heading">
                All-Emirates Travel Scope on Approved UAE Tourist Visas
              </h3>
            </div>
            <span className="text-xs text-[#777777]">
              *Subject to the conditions of the issued visa
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {emiratesList.map((emirate) => (
              <span
                key={emirate}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E6D7C3] text-xs font-semibold text-[#444444]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                {emirate}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
