import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';

export const FamilyTestimonialsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const reviews = [
    {
      name: 'Aditya & Priya Sharma',
      location: 'Dubai Marina',
      visaType: 'Wife & 2 Children Sponsorship',
      comment: 'FamilyVisa.ae made bringing my family from Mumbai so effortless. They guided us on the marriage certificate MOFA attestation and booked our VIP medical fitness at Smart Salem. My wife and kids had their Emirates IDs in hand within 4 days!',
      rating: 5,
      date: 'February 2025'
    },
    {
      name: 'Michael & Claire Henderson',
      location: 'Downtown Dubai',
      visaType: 'Spouse & Newborn Visa',
      comment: 'When our daughter was born in Dubai, we were worried about the 120-day deadline while waiting for her British passport. The team at FamilyVisa handled her birth registration and residency stamping in record time. Professional and reliable.',
      rating: 5,
      date: 'January 2025'
    },
    {
      name: 'Tariq Al-Mansoor',
      location: 'Jumeirah Village Circle',
      visaType: 'Both Parents Residency',
      comment: 'Sponsoring both of my elderly parents required extensive humanitarian paperwork and an Ejari 2-bedroom inspection. FamilyVisa arranged the health insurance and GDRFA deposit flawlessly. My parents now live happily with us in Dubai.',
      rating: 5,
      date: 'December 2024'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase mb-3">
            <Heart className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Trusted By Over 12,000+ UAE Families</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Real Stories of UAE Family Reunification
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            Hear from expatriates who reunited with their loved ones in Dubai smoothly and compliantly.
          </p>
        </motion.div>

        {/* 3 Clean Editorial Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs hover:border-[#B8864B]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#B8864B]">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EBE4D8]">
                <strong className="text-sm font-bold text-[#0F172A] block font-heading">{rev.name}</strong>
                <span className="text-[11px] text-[#B8864B] font-semibold block">{rev.visaType}</span>
                <span className="text-[10px] text-slate-400 block">{rev.location} • {rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FamilyTestimonialsSection;
