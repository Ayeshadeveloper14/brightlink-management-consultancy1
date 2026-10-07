import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const ReraClientReviews = () => {
  const reviews = [
    {
      id: 'rev-1',
      name: 'Tariq Al-Mansouri',
      role: 'Managing Director',
      company: 'Horizon Prime Real Estate, Downtown Dubai',
      rating: 5,
      avatar: '/images/service_golden_visa_1790842391749.jpg',
      service: 'Mainland Brokerage Setup',
      text: 'BrightLink established our 20-broker mainland real estate brokerage from initial name reservation to commercial Ejari and RERA NOC in just 10 business days. Their understanding of Dubai Land Department regulations is peerless.'
    },
    {
      id: 'rev-2',
      name: 'Elena Rostova',
      role: 'Senior Luxury Property Consultant',
      company: 'Palm Jumeirah Specialist',
      rating: 5,
      avatar: '/images/about_visa_consultant_1790842347102.jpg',
      service: 'Individual RERA Broker Card',
      text: 'Coming from Europe, the RERA exam and degree attestation process felt daunting. BrightLink provided succinct study outlines, booked my DREI slot, and had my active digital Broker ID issued within 48 hours of passing.'
    },
    {
      id: 'rev-3',
      name: 'Marcus Vance',
      role: 'Managing Partner',
      company: 'Prime Capital Assets, Business Bay',
      rating: 5,
      avatar: '/images/why_experienced_team_1790842362837.jpg',
      service: 'Agency License & Trakheesi Setup',
      text: 'Handling Trakheesi advertising permits and DLD compliance is where most agents get stuck and fined. BrightLink configured our portal correctly from day one. Transparent government fee breakdown and zero surprises.'
    },
    {
      id: 'rev-4',
      name: 'Sarah Jenkins',
      role: 'Independent Leasing Agent',
      company: 'Dubai Marina & JLT',
      rating: 5,
      avatar: '/images/why_fast_process_1790842377870.jpg',
      service: 'RERA Card Renewal & Police Clearance',
      text: 'My broker card renewal was urgent because I had a major commercial lease transaction closing that week. BrightLink expedited my Dubai Police clearance and DLD card renewal in less than 24 hours. Exceptional service!'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
                Client Reviews
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight">
              What Real Estate Professionals Say
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#555555]">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-[#222222]">4.9 / 5.0</span>
            <span className="text-neutral-400">•</span>
            <span className="text-xs text-neutral-500 font-medium">800+ Verified UAE Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#B8864B]/15 transition-colors flex items-center justify-center text-[#B8864B] shadow-2xs">
                    <Quote className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-200/60 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#B8864B]/30 group-hover:ring-[#B8864B] transition-all"
                  loading="lazy"
                />
                <div className="space-y-0.5 truncate">
                  <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors truncate">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#666666] truncate font-medium">
                    {item.role}
                  </p>
                  <span className="inline-block text-[10px] font-bold text-[#8C6230] uppercase tracking-wide truncate">
                    {item.service}
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
