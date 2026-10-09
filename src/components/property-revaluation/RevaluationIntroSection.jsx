import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Award, 
  FileCheck2 
} from 'lucide-react';

export const RevaluationIntroSection = ({ onOpenConsultation }) => {
  const handleInquiry = () => {
    const query = encodeURIComponent('Hello Brightlink, I would like to start my Dubai Land Department Property Valuation file. Please guide me through opening a case.');
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  const panelHighlights = [
    {
      title: 'Issuing Authority',
      value: 'Dubai Land Department (DLD)',
      detail: 'Official Government Valuation Committee',
      icon: Award
    },
    {
      title: 'Inspection Standard',
      value: 'Certified On-Site Survey',
      detail: 'Physical architectural audit & GIS satellite registry',
      icon: MapPin
    },
    {
      title: 'Turnaround Window',
      value: '3 - 7 Working Days',
      detail: 'From fee payment & physical site inspection',
      icon: Clock
    },
    {
      title: 'Immigration Integration',
      value: 'Direct ICP & GDRFA Link',
      detail: 'Instant system sync for 10-Year Golden Visa',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="valuation-intro" className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Description, CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3]">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
                Official Property Valuation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight leading-tight">
              Accredited Dubai Land Department <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#7A5424]">
                Property Revaluation
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#333333] font-medium leading-relaxed">
              When property values appreciate in Dubai's dynamic market, an official Revaluation Certificate provides legal, government-stamped proof of your asset's true fair market value.
            </p>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed font-normal">
              Whether your original purchase price was below the AED 2,000,000 threshold for the UAE 10-Year Golden Visa, or your financing bank requires an independent valuation for mortgage refinancing, Brightlink manages the entire liaison process directly with the Dubai Land Department.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span className="text-xs sm:text-sm text-[#444444] font-medium">
                  Qualify for Golden Visa even if property purchase contract was under AED 2M
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span className="text-xs sm:text-sm text-[#444444] font-medium">
                  Official certified evaluation recognized by all UAE banks, courts, and ministries
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span className="text-xs sm:text-sm text-[#444444] font-medium">
                  Complete file preparation, appointment coordination, and electronic certificate delivery
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleInquiry}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Start Valuation File</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <button
                onClick={() => onOpenConsultation?.('Property Revaluation File Review')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FAF5EC] hover:bg-[#EFEAE2] text-[#B8864B] font-bold text-xs sm:text-sm border border-[#E6D7C3] transition-colors cursor-pointer whitespace-nowrap"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Upload Title Deed for Check</span>
              </button>
            </div>
          </div>

          {/* Right Column: Professional Information / Card Panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-8 border border-[#EFEAE2] shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#EFEAE2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center">
                    <Building2 className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#976A36] block">
                      Government Certificate
                    </span>
                    <h3 className="text-base font-bold text-[#222222]">
                      DLD Valuation Standard
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] text-[10px] font-bold text-[#B8864B]">
                  Official DLD
                </span>
              </div>

              <div className="space-y-4">
                {panelHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-[#EFEAE2] flex items-start gap-3.5 shadow-2xs"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 border border-[#E6D7C3]/80">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[11px] font-semibold text-neutral-400 block uppercase tracking-wider">
                          {item.title}
                        </span>
                        <h4 className="text-sm font-bold text-[#222222]">
                          {item.value}
                        </h4>
                        <p className="text-xs text-[#666666]">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span className="text-xs text-[#555555] font-medium">
                  Valid across GDRFA, ICP, Central Bank of UAE, and Dubai Courts.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
