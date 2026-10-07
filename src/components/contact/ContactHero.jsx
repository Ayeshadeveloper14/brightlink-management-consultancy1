import React from 'react';
import { MapPin } from 'lucide-react';

export const ContactHero = () => {
  return (
    <section className="bg-gradient-to-b from-[#FCFAF8] via-[#F8F4EC] to-[#FFFFFF] pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/30 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              Visit Us in Business Bay, Dubai
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
            Contact & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] to-[#976A36]">
              Consulting Office
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Have questions regarding UAE residency, fine reductions, or family sponsorship? Visit our government-approved typing office in Crystal Tower, Business Bay, or consult with us directly online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
