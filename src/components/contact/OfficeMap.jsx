import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  MapPin, 
  Navigation, 
  Car, 
  Train, 
  Building, 
  ExternalLink 
} from 'lucide-react';

export const OfficeMap = () => {
  const shouldReduceMotion = useReducedMotion();

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai', '_blank');
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-sm space-y-0"
    >
      {/* Visual Map Header */}
      <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden group">
        {/* Architectural Stylized Vector Map */}
        <svg 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" 
          viewBox="0 0 800 500" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dubai Canal Waterway & Roads Background */}
          <rect width="800" height="500" fill="#EAEFF5" />
          <path d="M0 0H800V150C620 160 520 130 380 180C260 220 120 190 0 210V0Z" fill="#CDE1F0" />
          <path d="M0 210C120 190 260 220 380 180C520 130 620 160 800 150V165C620 175 520 145 380 195C260 235 120 205 0 225V210Z" fill="#F4E9D8" />
          
          {/* Sheikh Zayed Road & Al Asayel St */}
          <path d="M0 340L800 230" stroke="#FFFFFF" strokeWidth="22" />
          <path d="M0 340L800 230" stroke="#CBD5E1" strokeWidth="8" />
          <path d="M120 500L550 0" stroke="#FFFFFF" strokeWidth="14" />
          <path d="M120 500L550 0" stroke="#CBD5E1" strokeWidth="6" />
          
          {/* Dubai Canal Curve */}
          <path d="M340 180C380 250 420 330 460 440" stroke="#93C5FD" strokeWidth="26" strokeLinecap="round" />
          
          {/* Crystal Tower Location Marker Pin */}
          <g transform="translate(435, 275)">
            <circle cx="0" cy="0" r="32" fill="#B8864B" fillOpacity="0.15" className="animate-ping" />
            <circle cx="0" cy="0" r="20" fill="#B8864B" fillOpacity="0.25" />
            <circle cx="0" cy="0" r="12" fill="#B8864B" />
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
          </g>

          {/* Location Callout Tag */}
          <g transform="translate(465, 245)">
            <rect x="0" y="0" width="165" height="42" rx="10" fill="#0F172A" />
            <text x="14" y="20" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
              Crystal Tower (M1 Floor)
            </text>
            <text x="14" y="33" fill="#D4AF37" fontSize="9" fontWeight="medium" fontFamily="sans-serif">
              Brightlink Typing Center
            </text>
          </g>
        </svg>

        {/* Floating Google Maps Overlay Button */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={openGoogleMaps}
            className="px-4 py-2.5 rounded-xl bg-[#0F172A]/90 hover:bg-[#B8864B] text-white text-xs font-bold flex items-center gap-2 backdrop-blur-sm transition-all shadow-md cursor-pointer group/btn"
          >
            <Navigation className="w-3.5 h-3.5 text-[#B8864B] group-hover/btn:text-white transition-colors" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </button>
        </div>
      </div>

      {/* Address & Building Details */}
      <div className="p-6 sm:p-7 space-y-5">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 mt-0.5">
            <Building className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              OFFICIAL OFFICE ADDRESS
            </span>
            <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
              Office M08-27, M1 Floor, Crystal Tower
            </h4>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Millennium Central Same Building, Al Asayel St, Business Bay, Dubai, United Arab Emirates — P.O. Box: 554552
            </p>
          </div>
        </div>

        {/* Commute Accessibility Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-100 text-xs text-[#334155]">
          <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center gap-2.5">
            <Train className="w-4 h-4 text-[#B8864B] shrink-0" />
            <span>5 Mins from Business Bay Metro (Red Line)</span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center gap-2.5">
            <Car className="w-4 h-4 text-[#B8864B] shrink-0" />
            <span>Free Designated Visitor Parking Available</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OfficeMap;
