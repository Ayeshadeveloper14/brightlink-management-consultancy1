import React from 'react';
import { Star } from 'lucide-react';

export const TrustBar = () => {
  return (
    <section className="py-8 lg:py-10 bg-[#FAF7F2] border-y border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* As featured in */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
              As featured in
            </span>
            <div className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base font-bold text-[#0F172A] font-heading">
              <span>Gulf News</span>
              <span className="text-slate-300">·</span>
              <span>Khaleej Times</span>
              <span className="text-slate-300">·</span>
              <span>The National</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-[#DECBB5] shadow-2xs">
            <span className="text-xl font-bold text-[#0F172A] font-heading">4.9</span>
            <div className="flex items-center gap-0.5 text-[#B8864B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-[#64748B] font-medium font-sans">
              Based on 625 reviews
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TrustBar;
