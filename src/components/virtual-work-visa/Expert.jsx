import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Award, FileCheck2, CheckCircle2 } from 'lucide-react';

export const Expert = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-8 border border-[#EFEAE2] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6">
          
          {/* Avatar / Editorial Emblem */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white flex items-center justify-center font-bold text-xl shadow-md shadow-[#B8864B]/20 shrink-0 font-heading">
            BL
          </div>

          {/* Editorial Content */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#222222] font-heading">
                  Brightlink Immigration & Government Liaison Editorial Desk
                </h3>
                <span className="text-xs text-[#B8864B] font-semibold">
                  UAE Residency & Smart Services Advisory
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] text-[10px] font-bold text-[#976A36] shrink-0 self-center sm:self-auto">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
                Regulatory Compliance Review
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
              Our guides are researched and maintained by accredited typing specialists with extensive day-to-day experience across GDRFA Dubai, Federal ICP, and MoHRE government portals. We ensure technical accuracy, salary thresholds, and procedural checklists align with active ministerial standards.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-[#777777]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                Aligned with official UAE Government decrees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                Updated with current ministerial thresholds
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
