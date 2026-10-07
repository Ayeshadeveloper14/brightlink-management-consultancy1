import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, MapPin, Users } from 'lucide-react';

export const FamilyVisaTestimonials = () => {
  const reviews = [
    {
      name: 'Julian Harrison',
      role: 'Finance Director, UK Expat',
      location: 'Dubai Marina',
      family: 'Wife & 2 Daughters',
      timeframe: '4 Days Total',
      rating: 5,
      review: 'Moving my wife and two girls over from London seemed daunting with all the marriage and birth certificate attestations. BrightLink handled the entire pre-audit and booked VIP Smart Salem medical in City Walk. The residence permits were stamped in 4 business days. Zero headaches.'
    },
    {
      name: 'Rajesh & Priya Venkat',
      role: 'Software Architect, Indian Expat',
      location: 'Downtown Dubai',
      family: 'Both Elderly Parents',
      timeframe: '6 Days Total',
      rating: 5,
      review: 'Sponsoring both my retired parents was tricky because of the strict AED 20,000 salary requirement and consular dependency certificate. BrightLink prepared our humanitarian file with precision and secured the GDRFA approval without a single query. My parents are happily living with us now.'
    },
    {
      name: 'Maxime De Clercq',
      role: 'Tech Founder, French Expat',
      location: 'Palm Jumeirah',
      family: 'Spouse & Infant Son',
      timeframe: '3 Days Total',
      rating: 5,
      review: 'My family was already inside Dubai on 60-day tourist visas. Other typing shops insisted they had to exit to Oman for a border run. BrightLink executed the in-country change of status completely online without my family having to leave the apartment. Incredible service.'
    },
    {
      name: 'Sarah Al-Mansouri',
      role: 'Clinical Psychologist, Canadian Expat',
      location: 'Jumeirah Lake Towers (JLT)',
      family: 'Husband & Son',
      timeframe: '5 Days Total',
      rating: 5,
      review: 'As a working female professional sponsoring my husband, there are specific profession and salary documents required by immigration. The team walked me through every step and had his 2-year Emirates ID delivered right to my clinic door. Highly recommended.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6230]">
              Verified Client Experiences
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight font-heading">
            Trusted by 5,400+ Expat Families Across the UAE
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Read verified feedback from professionals, entrepreneurs, and families who brought their loved ones to live in Dubai with BrightLink’s authorized typing team.
          </p>
        </div>

        {/* Testimonials Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-7 border border-[#E6D7C3] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#B8864B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Sponsorship
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-200/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-[#111827]">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-[#6B7280]">
                    {rev.role} · <span className="text-[#8C6230]">{rev.location}</span>
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#8C6230] uppercase block">
                    {rev.family}
                  </span>
                  <span className="text-[11px] font-extrabold text-[#111827]">
                    {rev.timeframe}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FamilyVisaTestimonials;
