import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  CreditCard, 
  MapPin, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

export const RevaluationProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'File Setup & Document Audit',
      description: 'Submit your Title Deed or Oqood copy, owner passport, and property Makani number. We verify that ownership is unencumbered and ready for DLD filing.',
      icon: FileText
    },
    {
      number: '02',
      title: 'Official DLD Fee Processing',
      description: 'We lodge your valuation application on the Dubai Land Department electronic portal, generate the payment voucher, and clear official government fees.',
      icon: CreditCard
    },
    {
      number: '03',
      title: 'Site Inspection & Engineering Survey',
      description: 'A licensed DLD valuation surveyor visits the property to verify actual condition, architectural floor layout, finish quality, and view orientation.',
      icon: MapPin
    },
    {
      number: '04',
      title: 'Valuation Certificate Issuance',
      description: 'The Dubai Land Department releases the electronic Valuation Certificate with an official QR code, immediately verifiable across UAE government systems.',
      icon: Award
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Step-by-Step Workflow
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            How the Revaluation Process Works
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B]">
            From initial document audit to receiving your official Valuation Certificate.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Horizontal connector line on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-[#E6D7C3] z-10" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold font-heading text-[#B8864B]/35 group-hover:text-[#B8864B] transition-colors">
                      {step.number}
                    </span>

                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shadow-xs group-hover:bg-[#B8864B] group-hover:text-white transition-all">
                      <StepIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
