import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck2, 
  MapPin, 
  Camera, 
  CheckCircle2, 
  Key, 
  Building2 
} from 'lucide-react';

export const RevaluationFilingSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Filing Procedure & Legal Framework */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
                Government Electronic Filing
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
              Direct Dubai REST & DLD <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#7A5424]">
                Portal Integration
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#333333] font-medium leading-relaxed">
              Every revaluation file is electronically logged into the Dubai Land Department core database using verified title deed records and spatial GIS mapping.
            </p>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              Once filed, the DLD Real Estate Valuation Committee assigns a certified municipal surveyor. The surveyor reviews the land registry, architectural blueprints, and historical transaction index before conducting the mandatory physical site audit.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#222222]">GIS Plot Identification</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Satellite alignment ensures building boundary integrity, master community land allocation, and view-corridor validation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#222222]">RERA Registered Transaction Index</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Valuations are calibrated against genuine closed contracts in the same building or villa sub-community over the previous 90 to 180 days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#222222]">Sovereign Digital QR Stamp</h4>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    The resulting Valuation Certificate carries a unique DLD cryptographic QR code, enabling instant electronic authentication by immigration and banking officers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Inspection Protocol Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#EFEAE2] shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center">
                  <Camera className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#976A36] block">
                    Surveyor Protocol
                  </span>
                  <h3 className="text-base font-bold text-[#222222]">
                    Physical Site Audit Rules
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2]">
                  <span className="text-xs font-bold text-[#222222] block mb-1">
                    1. Unimpeded Internal Access
                  </span>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    All rooms, terraces, balconies, and parking allocations must be accessible during the scheduled surveyor visit.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2]">
                  <span className="text-xs font-bold text-[#222222] block mb-1">
                    2. Tenant Cooperation & Notice
                  </span>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    If tenanted, the occupant must be notified at least 24-48 hours in advance to ensure smooth entry.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2]">
                  <span className="text-xs font-bold text-[#222222] block mb-1">
                    3. High-Resolution Photographic Survey
                  </span>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    The DLD engineer documents kitchen fittings, flooring finishes, view vistas, and general maintenance conditions.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-[#976A36] font-semibold">
                  BrightLink coordinates the surveyor timing directly with your building security.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
