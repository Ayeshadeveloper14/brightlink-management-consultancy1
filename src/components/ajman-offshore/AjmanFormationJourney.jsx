import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Building2, 
  ShieldCheck, 
  Landmark, 
  FileCheck2, 
  Sparkles,
  Clock,
  Send,
  Lock,
  Layers,
  Scale
} from 'lucide-react';

export const AjmanFormationJourney = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const milestones = [
    {
      step: '01',
      title: 'Scope & Structure',
      summary: 'Review shareholders, directors, company purpose, intended use and banking objectives.',
      description: 'Our advisors conduct a thorough scoping session to analyze proposed shareholding classes, director appointments, asset holding intentions, and multi-currency banking targets.'
    },
    {
      step: '02',
      title: 'Name Selection',
      summary: 'Select the proposed company name and confirm the appropriate structure.',
      description: 'We review three proposed trade name choices ending in "Limited" or "Ltd." against restricted terminology and submit for official registry reservation.'
    },
    {
      step: '03',
      title: 'Documentation',
      summary: 'Prepare incorporation forms, shareholder/director documents and required corporate information.',
      description: 'Drafting of the Memorandum and Articles of Association (MOA/AOA), statutory shareholder registers, and collecting certified passport copies, proof of address, and CV profiles.'
    },
    {
      step: '04',
      title: 'KYC & UBO Review',
      summary: 'Complete KYC, beneficial ownership and relevant compliance checks.',
      description: 'Execution of statutory Ultimate Beneficial Ownership (UBO) filings, internal sanctions database screening, and source of funds verification compliant with UAE AML regulations.'
    },
    {
      step: '05',
      title: 'Registered Agent Submission',
      summary: 'Submit the application and required documents through the appropriate registered agent.',
      description: 'Brigitlink, as your authorized Registered Agent, lodges the official electronic application through the Ajman Free Zone Authority offshore registration portal.'
    },
    {
      step: '06',
      title: 'Registry Processing',
      summary: 'Track the application through review until approval.',
      description: 'Continuous proactive liaison with registry examiners, monitoring statutory review stages and addressing any additional informational requests.'
    },
    {
      step: '07',
      title: 'Incorporation Documents',
      summary: 'Receive relevant incorporation documents, including Certificate of Incorporation and MOA/AOA.',
      description: 'Issuance of the official Certificate of Incorporation, stamped Memorandum & Articles, and the official Company Extract confirming active statutory registration.'
    },
    {
      step: '08',
      title: 'Banking Preparation',
      summary: 'Prepare the corporate documentation required for a potential bank account application.',
      description: 'Compilation of bank-ready corporate dossiers, business activity narrative, transaction flow forecasts, and introductions to commercial banking institutions.'
    },
    {
      step: '09',
      title: 'Ongoing Compliance',
      summary: 'Maintain annual renewal, records and required compliance information.',
      description: 'Annual corporate renewal filings, statutory registered agent maintenance, 7-year accounting record archiving, and UAE Corporate Tax compliance advisory.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STEP-BY-STEP INCORPORATION PROTOCOL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Ajman Offshore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Formation Journey</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            By statutory mandate, Ajman Offshore companies must be formed and maintained through an authorized Registered Agent. Follow our structured 9-stage progression.
          </p>
        </div>

        {/* Vertical Alternating Stepped Cards Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Connecting Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#DECBB5] via-[#B8864B] to-[#DECBB5] -translate-x-1/2 hidden sm:block" />
          
          <div className="space-y-8 sm:space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Card Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="bg-[#FCFAF8] p-6 rounded-2xl border border-[#E6D7C3] shadow-xs hover:border-[#B8864B]/60 hover:shadow-md transition-all group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold text-[#8C5E28] font-heading bg-[#FAF5EC] px-2.5 py-0.5 rounded-full border border-[#DECBB5]">
                          PHASE {item.step}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-1.5 group-hover:text-[#8C5E28] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#8C5E28] font-semibold mb-2">
                        {item.summary}
                      </p>

                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF5EC] border-2 border-[#B8864B] items-center justify-center text-[11px] font-bold text-[#8C5E28] shadow-sm z-10">
                    {item.step}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenConsultation && onOpenConsultation('Initiate Ajman Offshore Formation Process')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md"
          >
            <span>Begin Your Formation Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AjmanFormationJourney;
