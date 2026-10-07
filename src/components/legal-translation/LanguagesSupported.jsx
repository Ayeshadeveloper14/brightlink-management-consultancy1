import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Globe, Languages } from 'lucide-react';

export const LanguagesSupported = () => {
  const languages = [
    { name: 'Urdu', region: 'South Asia' },
    { name: 'Hindi', region: 'South Asia' },
    { name: 'French', region: 'Europe & Africa' },
    { name: 'Russian', region: 'Eurasia' },
    { name: 'Filipino (Tagalog)', region: 'Southeast Asia' },
    { name: 'German', region: 'Europe' },
    { name: 'Chinese (Mandarin)', region: 'East Asia' },
    { name: 'Spanish', region: 'Europe & Americas' },
    { name: 'Italian', region: 'Europe' },
    { name: 'Farsi (Persian)', region: 'Middle East' },
    { name: 'Turkish', region: 'Eurasia' },
    { name: 'Other Languages', region: 'Available on request' }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Multilingual Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Languages We Support
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            From standard Arabic-English legalization to international language pairings, we coordinate accredited translations across major world languages.
          </p>
        </div>

        {/* Highlighted Primary Bilingual Pair: Arabic ↔ English */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-2xl mx-auto rounded-2xl bg-gradient-to-r from-[#FAF5EC] via-[#F5ECE0] to-[#FAF5EC] border-2 border-[#D8C7B0] p-6 text-center shadow-xs"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <Languages className="w-5 h-5 text-[#976A36]" />
            <span className="text-xs font-bold text-[#976A36] uppercase tracking-widest font-heading">
              Core Legalization Pairing
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xl sm:text-2xl font-extrabold text-[#1A1A1A] font-heading my-1">
            <span>Arabic (العربية)</span>
            <div className="w-9 h-9 rounded-full bg-white border border-[#D8C7B0] text-[#B8864B] flex items-center justify-center shadow-2xs">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
            <span>English</span>
          </div>

          <p className="text-xs text-[#666666] max-w-md mx-auto mt-2">
            The fundamental standard for UAE government and court filings: foreign documents are rendered into certified Arabic, while UAE-issued records are translated into English for international presentation.
          </p>
        </motion.div>

        {/* Additional Languages: Clean, Compact Grid */}
        <div className="border border-[#E8DEC9] rounded-2xl bg-[#FCFAF8] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold text-[#8B6B3E] uppercase tracking-wider">
            <Globe className="w-4 h-4 text-[#B8864B]" />
            <span>Additional International Languages Available Where Applicable:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {languages.map((lang, idx) => (
              <div 
                key={idx}
                className="p-3 rounded-xl bg-white border border-[#EFEAE2] hover:border-[#DECBB5] transition-colors flex items-center justify-between"
              >
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#222222] block">
                    {lang.name}
                  </span>
                  <span className="text-[10px] text-[#777777]">
                    {lang.region}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#B8864B]">→</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#777777] text-center mt-5">
            Note: Multi-tier translations (e.g., German/Russian to English, then to Arabic) can be coordinated where mandated by specific court or embassy requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
