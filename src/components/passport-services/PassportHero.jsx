import React from 'react';
import { Globe, MessageSquare } from 'lucide-react';

export const PassportHero = ({ onOpenConsultation }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello BrightLink, I need assistance with my Passport Renewal (BLS / Consular Services). Can you please guide me on documentation and appointment booking?');
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-[#FCFAF8] via-[#F8F4EC] to-[#FFFFFF] pt-28 pb-14 lg:pt-36 lg:pb-20 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F1EB] border border-[#B8864B]/30 mb-4">
            <Globe className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
              BLS Indian Passport & Global Consular Typing
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
            Passport Renewal & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] to-[#976A36]">
              Consular Services
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Complete online typing, annexure drafting, appointment booking, and photo compliance for Indian Passport (BLS), Pakistani Consulate, Philippine Consulate, and European missions in Dubai.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenConsultation('Passport Renewal Service')}
              className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-semibold text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer"
            >
              Book Passport Typing
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Instant BLS Guidance</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassportHero;
