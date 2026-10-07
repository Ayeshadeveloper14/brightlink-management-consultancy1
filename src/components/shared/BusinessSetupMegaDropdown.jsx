import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Globe, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const MAINLAND_ITEMS = [
  { id: 'professional-license', title: 'Professional License' },
  { id: 'llc-company', title: 'LLC Company' },
  { id: 'branch-rep-office', title: 'Branch / Representative Office' }
];

export const FREE_ZONE_ITEMS = [
  { id: 'dubai-free-zone', title: 'Dubai Free Zone' },
  { id: 'abu-dhabi-free-zone', title: 'Abu Dhabi Free Zone' },
  { id: 'sharjah-free-zone', title: 'Sharjah Free Zone' },
  { id: 'ajman-free-zone', title: 'Ajman Free Zone' },
  { id: 'fujairah-free-zone', title: 'Fujairah Free Zone' },
  { id: 'rak-free-zone', title: 'RAK Free Zone' },
  { id: 'uaq-free-zone', title: 'UAQ Free Zone' },
  { id: 'all-free-zones', title: 'All Free Zones', isSpecial: true }
];

export const OFFSHORE_ITEMS = [
  { id: 'rak-offshore', title: 'RAK Offshore' },
  { id: 'jafza-offshore', title: 'JAFZA Offshore' },
  { id: 'ajman-offshore', title: 'Ajman Offshore' }
];

export const BusinessSetupMegaDropdown = ({
  isOpen,
  onOpenConsultation,
  onMouseEnter,
  onMouseLeave
}) => {
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
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[840px] max-w-[95vw] pointer-events-auto"
        >
          {/* Top Pointer Notch Centered Under Business Setup */}
          <div className="relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FCFAF8] border-t border-l border-[#E6D7C3] rotate-45 z-20 shadow-xs" />

            {/* Main Mega Dropdown Card */}
            <div className="relative bg-[#FCFAF8] rounded-[22px] border border-[#E6D7C3] shadow-2xl shadow-black/15 p-5 sm:p-6 overflow-hidden backdrop-blur-sm">
              
              {/* Top Heading */}
              <div className="flex items-center gap-1.5 mb-5">
                <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#B8864B] uppercase font-heading">
                  START YOUR BUSINESS JOURNEY
                </span>
              </div>

              {/* Three Columns Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                
                {/* Column 1: MAINLAND */}
                <div className="flex flex-col">
                  {/* Column Header Card */}
                  <div className="bg-[#f7ebd9] border border-[#e7d5bf] rounded-xl px-4 py-3 flex items-center gap-3 text-[#8c5e28] shadow-2xs mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8864b] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Building2 className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8c5e28] font-heading">
                      MAINLAND
                    </span>
                  </div>

                  {/* Mainland Items */}
                  <div className="flex flex-col gap-2">
                    {MAINLAND_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onOpenConsultation(`Mainland Setup - ${item.title}`)}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/85 border border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5] transition-all duration-150 cursor-pointer select-none shadow-2xs"
                      >
                        <span className="text-xs font-medium text-[#2B2B2B] group-hover:text-[#B8864B] group-hover:font-semibold transition-colors">
                          {item.title}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#B8864B] transition-transform duration-150 group-hover:translate-x-0.5 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: FREE ZONE */}
                <div className="flex flex-col">
                  {/* Column Header Card */}
                  <div className="bg-[#f7ebd9] border border-[#e7d5bf] rounded-xl px-4 py-3 flex items-center gap-3 text-[#8c5e28] shadow-2xs mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8864b] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Globe className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8c5e28] font-heading">
                      FREE ZONE
                    </span>
                  </div>

                  {/* Free Zone Items */}
                  <div className="flex flex-col gap-2">
                    {FREE_ZONE_ITEMS.map((item) => {
                      if (item.isSpecial) {
                        return (
                          <div
                            key={item.id}
                            onClick={() => onOpenConsultation('Free Zone Setup - All Free Zones')}
                            className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#FAF2E6] to-[#F5E8D4] border border-[#B8864B]/60 hover:from-[#F5E8D4] hover:to-[#EED8BC] transition-all duration-150 cursor-pointer select-none shadow-xs mt-0.5"
                          >
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-3 h-3 text-[#B8864B] fill-[#B8864B]" />
                              <span className="text-xs font-bold text-[#8C5E28] group-hover:text-[#6D4518] transition-colors">
                                {item.title}
                              </span>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#B8864B] group-hover:translate-x-0.5 transition-transform shrink-0" />
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.id}
                          onClick={() => onOpenConsultation(`Free Zone Setup - ${item.title}`)}
                          className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/85 border border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5] transition-all duration-150 cursor-pointer select-none shadow-2xs"
                        >
                          <span className="text-xs font-medium text-[#2B2B2B] group-hover:text-[#B8864B] group-hover:font-semibold transition-colors">
                            {item.title}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#B8864B] transition-transform duration-150 group-hover:translate-x-0.5 shrink-0" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: OFFSHORE */}
                <div className="flex flex-col">
                  {/* Column Header Card */}
                  <div className="bg-[#f7ebd9] border border-[#e7d5bf] rounded-xl px-4 py-3 flex items-center gap-3 text-[#8c5e28] shadow-2xs mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8864b] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8c5e28] font-heading">
                      OFFSHORE
                    </span>
                  </div>

                  {/* Offshore Items */}
                  <div className="flex flex-col gap-2">
                    {OFFSHORE_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onOpenConsultation(`Offshore Setup - ${item.title}`)}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/85 border border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5] transition-all duration-150 cursor-pointer select-none shadow-2xs"
                      >
                        <span className="text-xs font-medium text-[#2B2B2B] group-hover:text-[#B8864B] group-hover:font-semibold transition-colors">
                          {item.title}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#B8864B] transition-transform duration-150 group-hover:translate-x-0.5 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusinessSetupMegaDropdown;
