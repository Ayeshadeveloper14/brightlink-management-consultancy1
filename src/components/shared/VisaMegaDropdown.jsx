import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Star, 
  Home, 
  TrendingUp, 
  Baby, 
  UserCheck, 
  Plane, 
  Laptop, 
  ArrowRight,
  Sparkles,
  FileCheck
} from 'lucide-react';

export const VISA_DROPDOWN_ITEMS = [
  {
    id: 'family-visa',
    title: 'Family Visa Sponsorship',
    shortTitle: 'Family Visa',
    icon: Users,
    image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
    category: 'Residency & Sponsorship',
    description: 'Complete turnkey sponsorship for spouse, children, and parents with VIP medical fitness and Emirates ID biometrics typing.',
    ctaText: 'Explore Visa Options'
  },
  {
    id: 'golden-visa',
    title: 'UAE Golden Visa (10-Yr)',
    shortTitle: 'Golden Visa',
    path: '/golden-visa',
    icon: Star,
    image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
    category: 'Long-Term Residency',
    description: 'Prestigious 10-year self-sponsored residency for real estate investors (≥ AED 2M), public investors, executives, and specialized talents.',
    ctaText: 'Explore Golden Visa'
  },
  {
    id: 'property-visa',
    title: 'Property Investor Visa',
    shortTitle: 'Property Visa',
    icon: Home,
    image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
    category: 'Real Estate Investor',
    description: 'Secure multi-year residency through freehold property investment across Dubai with fast-track Dubai Land Department (DLD) attestation.',
    ctaText: 'Explore Visa Options'
  },
  {
    id: 'investor-visa',
    title: 'Investor & Partner Visa',
    shortTitle: 'Investor Visa',
    icon: TrendingUp,
    image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
    category: 'Corporate & Business',
    description: 'Official residency for company partners and business shareholders across UAE Mainland (DED) and all UAE Free Zones.',
    ctaText: 'Explore Visa Options'
  },
  {
    id: 'newborn-visa',
    title: 'Newborn Baby Visa',
    shortTitle: 'Newborn Visa',
    icon: Baby,
    image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
    category: 'ICP / GDRFA Registration',
    description: 'Hassle-free residency application and passport birth registration assistance for infants born in the UAE within 120 days.',
    ctaText: 'Explore Visa Options'
  },
  {
    id: 'maid-visa',
    title: 'Domestic Worker & Maid Visa',
    shortTitle: 'Maid Visa',
    icon: UserCheck,
    image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
    category: 'Domestic Support',
    description: 'Official legal sponsorship for housemaids, nannies, and private chauffeurs with MOHRE contract and medical screening.',
    ctaText: 'Explore Visa Options'
  },
  {
    id: 'tourist-visa',
    title: 'Tourist & Visit Visa',
    shortTitle: 'Tourist Visa',
    path: '/tourist-visa',
    icon: Plane,
    image: 'https://website-imges.vercel.app/hero_dubai_skyline_1790842330436.jpg',
    category: 'Travel & Visit',
    description: 'Quick-approval 30-day and 60-day single and multiple entry UAE visit visas for tourists, visiting relatives, and business visitors.',
    ctaText: 'Explore Tourist Visa'
  },
  {
    id: 'virtual-work-visa',
    title: 'Virtual Work & Nomad Visa',
    shortTitle: 'Virtual Work Visa',
    path: '/virtual-work-visa',
    icon: Laptop,
    image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
    category: 'Remote Work Residency',
    description: '1-year renewable UAE remote work visa allowing international professionals and digital nomads to live legally in Dubai.',
    ctaText: 'Explore Virtual Work Visa'
  }
];

export const VisaMegaDropdown = ({
  isOpen,
  activeVisaId,
  onSelectVisa,
  onOpenConsultation,
  onMouseEnter,
  onMouseLeave
}) => {
  const currentVisa = VISA_DROPDOWN_ITEMS.find((item) => item.id === activeVisaId) || VISA_DROPDOWN_ITEMS[0];
  const ActiveIcon = currentVisa.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[820px] max-w-[95vw] pointer-events-auto"
        >
          {/* Top Pointer Notch Centered Under Visa */}
          <div className="relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FCFAF8] border-t border-l border-[#E6D7C3] rotate-45 z-20 shadow-xs" />

            {/* Main Mega Dropdown Card */}
            <div className="relative bg-[#FCFAF8] rounded-[22px] border border-[#E6D7C3] shadow-2xl shadow-black/15 p-5 sm:p-6 overflow-hidden backdrop-blur-sm">
              
              {/* Top Category Label */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#B8864B] uppercase font-heading">
                  RESIDENCY AND VISAS
                </span>
                <span className="text-[10px] text-[#B8864B]/80 font-bold">▼</span>
              </div>

              {/* Two Column Layout: Left Column gets +100px, Right Column stays exactly 326px */}
              <div className="flex gap-5 items-stretch">
                
                {/* Left Column: Dynamic Highlight Card (Expanded by 100px) */}
                <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[350px] flex flex-col justify-between p-5 text-white shadow-lg border border-black/10 group">
                  
                  {/* Dynamic Background Image with Smooth Crossfade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVisa.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={currentVisa.image}
                        alt={currentVisa.title}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                        onError={(e) => {
                          const target = e.currentTarget;
                          const filename = target.src.split('/').pop();
                          if (target.src.startsWith('https://')) {
                            target.src = `/images/${filename}`;
                          } else {
                            target.src = `https://website-imges.vercel.app/${filename}`;
                          }
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Dual Gradients for High Legibility & Warm Dubai Golden Aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/35 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8864B]/20 via-transparent to-black/60 pointer-events-none mix-blend-overlay" />

                  {/* Top Frosted Glass Icon Badge */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-[#F5D7A1] shadow-lg shadow-black/30">
                      <ActiveIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Bottom Text Content & Action Button */}
                  <div className="relative z-10 mt-auto pt-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentVisa.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl font-bold tracking-tight text-white leading-snug drop-shadow-sm font-heading mb-1.5">
                          {currentVisa.title}
                        </h3>
                        <p className="text-xs text-white/85 leading-relaxed font-normal line-clamp-3 mb-4">
                          {currentVisa.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={() => onOpenConsultation(currentVisa.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 rounded-full shadow-md shadow-black/25 transition-all cursor-pointer"
                    >
                      <span>{currentVisa.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: 8 Visa Items List (Preserved Width) */}
                <div className="w-[326px] shrink-0 flex flex-col justify-between gap-1.5">
                  {VISA_DROPDOWN_ITEMS.map((item) => {
                    const isHovered = item.id === currentVisa.id;
                    const ItemIcon = item.icon;

                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => onSelectVisa(item.id)}
                        onClick={() => onOpenConsultation(item.title)}
                        className={`group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition-all duration-150 cursor-pointer select-none ${
                          isHovered
                            ? 'bg-[#FAF5EC] border-[#B8864B]/60 shadow-xs'
                            : 'bg-white/85 border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5]'
                        }`}
                      >
                        {/* Icon Container */}
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isHovered
                              ? 'bg-[#B8864B] text-white shadow-xs'
                              : 'bg-[#F7F2E9] text-[#B8864B] group-hover:bg-[#EFE5D5]'
                          }`}
                        >
                          <ItemIcon className="w-4 h-4 stroke-[1.8]" />
                        </div>

                        {/* Title */}
                        <span
                          className={`text-xs tracking-normal transition-colors font-sans ${
                            isHovered
                              ? 'text-[#976A36] font-bold'
                              : 'text-[#2B2B2B] font-medium group-hover:text-[#B8864B]'
                          }`}
                        >
                          {item.shortTitle}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
