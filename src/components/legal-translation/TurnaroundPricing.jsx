import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calculator, ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const TurnaroundPricing = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  const factors = [
    'Language combination (standard vs. rare language pairs)',
    'Document classification and legal terminology complexity',
    'Total word count, page volume, and formatting requirements',
    'Standard vs. urgent same-day turnaround requests',
    'Court, ministry, or notary public certification specifications'
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Pricing & Timelines
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Turnaround & Pricing
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Transparent pricing based on exact document parameters with responsive turnaround options.
          </p>
        </div>

        {/* Compact Information Layout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-white border border-[#E8DEC9] p-6 sm:p-10 shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Factors & Timeline Info */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#976A36] uppercase tracking-wider font-heading">
                <Clock className="w-4 h-4 text-[#B8864B]" />
                <span>Estimation Parameters</span>
              </div>

              <h3 className="text-lg font-bold text-[#1A1A1A] font-heading">
                How Cost and Delivery are Calculated
              </h3>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Standard certificates (birth, marriage, single diplomas) are typically turned around in 24 to 48 business hours, while urgent express processing is available for time-sensitive filings. Extensive commercial contracts and court briefs are estimated based on word volume.
              </p>

              <div className="space-y-2 pt-2">
                {factors.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#333333]">
                    <Check className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Request a Quote Card */}
            <div className="md:col-span-5 bg-[#FCFAF8] rounded-2xl p-6 border border-[#DECBB5] text-center flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-base font-bold text-[#1A1A1A] mb-1 font-heading">
                  Get an Instant Quote
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed mb-5">
                  Share your document pages to receive an exact fixed quote and confirmed delivery timeline with zero obligation.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Legal Translation Quote') : navigate('/contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 shadow-sm transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
