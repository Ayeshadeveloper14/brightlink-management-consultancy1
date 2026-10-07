import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, ShieldAlert, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const FeesTransparency = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  const costFactors = [
    'Document Type (Educational, Personal, or Commercial)',
    'Country of Origin & Hague Apostille Treaty Status',
    'Embassy / Consular Requirements & Ministry Tariffs',
    'Volume & Multiple Document Processing Packages',
    'Standard vs. Expedited International Processing',
    'Secure Diplomatic / Courier Dispatch Options'
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Pricing Structure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            Clear & Transparent Attestation Costs
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            We provide comprehensive itemized quotes prior to processing with zero hidden fees.
          </p>
        </div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] p-6 sm:p-10 shadow-xs"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Factors that determine costs */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-[#1A1A1A] font-heading">
                What Determines Your Attestation Fee?
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Because official legalization crosses international borders and multi-tiered government departments, pricing is calculated according to the specific profile of your documents:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {costFactors.map((factor, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-[#333333]">
                    <Check className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Reference Govt Fee Notice & CTA */}
            <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-[#E8DEC9] shadow-2xs text-center flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-base font-bold text-[#1A1A1A] mb-1 font-heading">
                  Customized Quotation
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed mb-4">
                  Send a scan or photo of your documents to receive an exact quotation reflecting current embassy and MOFA tariffs.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation ? onOpenConsultation('Document Attestation Quote') : navigate('/contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 shadow-sm transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            </div>

          </div>

          {/* Government Fee Disclaimer */}
          <div className="mt-8 pt-6 border-t border-[#EFEAE2] flex items-start gap-3 text-xs text-[#777777]">
            <ShieldAlert className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Government Fee Reference Notice:</strong> Government fees, embassy tariffs, and consular legalization rates are established directly by their respective sovereign ministries and are subject to regulatory updates without prior notice. Brigitlink passes through official ministerial fees at exact cost with transparent itemization.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
