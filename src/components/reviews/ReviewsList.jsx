import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../../data/servicesData.js';
import { Star, Quote } from 'lucide-react';

export const ReviewsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {TESTIMONIALS_DATA.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
          whileHover={{ y: -8 }}
          className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-7 border border-neutral-200/80 hover:border-[#B8864B]/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#B8864B]/15 transition-colors flex items-center justify-center text-[#B8864B] shadow-xs">
                <Quote className="w-4 h-4" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
              "{item.review}"
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-neutral-200/60 flex items-center gap-3.5">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#B8864B]/30 group-hover:ring-[#B8864B] group-hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
            <div className="space-y-0.5 truncate">
              <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors truncate">
                {item.name}
              </h4>
              <p className="text-xs text-[#666666] truncate">
                {item.role} · <span className="font-medium text-[#222222]">{item.country}</span>
              </p>
              <span className="inline-block text-[10px] font-bold text-[#8C6230] uppercase tracking-wide">
                {item.service}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewsList;
