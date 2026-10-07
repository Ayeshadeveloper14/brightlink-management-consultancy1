import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe2, 
  Clock, 
  RefreshCw, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export const WhereToApply = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Official Portals
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Where to Apply for the Virtual Work Visa
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The virtual work visa can only be processed through official UAE government channels.
          </p>
        </motion.div>

        {/* Dubai vs Other Emirates Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Dubai Channels */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.35 }}
            className="bg-[#FCFAF8] rounded-2xl p-7 border border-[#EFEAE2] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#222222] font-heading">
                    In Dubai
                  </h3>
                  <span className="text-xs text-[#777777]">
                    Governed by GDRFA Dubai
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-[#555555]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>GDRFA Smart Services</strong> — online portal & mobile app using UAE Pass</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Authorised Amer Service Centres</strong> across Dubai</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>GDRFA Customer Happiness Centres</strong></span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EFEAE2] text-xs text-[#888888]">
              Target destination: Emirate of Dubai
            </div>
          </motion.div>

          {/* Other Emirates Channels */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="bg-[#FCFAF8] rounded-2xl p-7 border border-[#EFEAE2] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center font-bold">
                  <Globe2 className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#222222] font-heading">
                    In Other Emirates
                  </h3>
                  <span className="text-xs text-[#777777]">
                    Governed by Federal ICP
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-[#555555]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>ICP Smart Services portal</strong> (smartservices.icp.gov.ae)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>ICP Customer Happiness & Service Centres</strong> across the Northern Emirates & Abu Dhabi</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EFEAE2] text-xs text-[#888888]">
              Target destination: Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ
            </div>
          </motion.div>

        </div>

        {/* Expected Issuance Timeline & In-Country Status Change */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#222222] font-heading mb-1.5">
                Stated 48-Hour Issuance Benchmark
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                The GDRFA states that the expected completion time for visa issuance is 48 hours, provided all documents are complete and meet the requirements. Please note this refers to the initial electronic visa approval, rather than total end-to-end residency completion including medical fitness and physical Emirates ID card dispatch.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 mt-0.5">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#222222] font-heading mb-1.5">
                In-Country Status Amendment from Tourist Visa
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Applicants who wish to change their visa status from a tourist visa to a virtual work visa may do so from within the UAE, subject to status change approval and payment of the applicable in-country processing fee.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
