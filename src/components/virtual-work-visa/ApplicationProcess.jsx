import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  Send, 
  CreditCard, 
  FileCheck, 
  UserCheck, 
  ArrowRight, 
  Building2, 
  Laptop, 
  Activity, 
  Sparkles,
  Truck
} from 'lucide-react';

export const ApplicationProcess = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'Step 1 — Prepare Documents',
      summary: 'Gather all required documents, including passport copies, proof of remote employment, income verification, and valid health insurance. Ensure all documents meet the specifications set by the relevant authority.',
      icon: FileText
    },
    {
      number: '02',
      title: 'Step 2 — Submit the Application',
      summary: 'Submit via official regulated channels based on your target emirate of residency.',
      channels: [
        {
          region: 'Dubai',
          options: [
            'GDRFA Smart Services — available online via the GDRFA website or mobile application using UAE Pass login',
            'Authorised Amer Service Centres'
          ]
        },
        {
          region: 'Other Emirates',
          options: [
            'ICP Smart Services — for applicants targeting emirates other than Dubai'
          ]
        }
      ],
      icon: Send
    },
    {
      number: '03',
      title: 'Step 3 — Pay the Applicable Fees',
      summary: 'All fees are calculated automatically during submission. Payment is processed online or at the service centre.',
      icon: CreditCard
    },
    {
      number: '04',
      title: 'Step 4 — Receive the Entry Permit',
      summary: 'Upon approval, the GDRFA or ICP issues an entry permit. The holder has 60 days from the date of entry to complete the residency requirements, as confirmed by the UAE Government portal.',
      icon: FileCheck
    },
    {
      number: '05',
      title: 'Step 5 — Complete Residency Procedures',
      summary: 'After arriving in the UAE, or changing status if already in the country, applicants complete mandatory in-country residency steps.',
      residencyProcedures: [
        'Medical fitness test',
        'Biometric registration for Emirates ID',
        'Final residency issuance through the GDRFA or ICP system'
      ],
      closingDetail: 'The one-year virtual work residence permit is then issued electronically. For applicants who require Emirates ID services, the card is delivered through Emirates Post after biometric registration.',
      icon: UserCheck
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Application Roadmap
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            How to Apply for the Virtual Work Visa in Dubai
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The application process follows a regulated procedure managed by the GDRFA for Dubai-based applicants or the ICP for applicants in other emirates.
          </p>
        </motion.div>

        {/* Steps List / Process Cards */}
        <div className="space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EBE4D8] shadow-sm hover:border-[#DECBB5] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  
                  {/* Step Number Badge & Icon */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center font-bold text-lg font-heading">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#222222] font-heading mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-3">
                      {step.summary}
                    </p>

                    {/* Channels breakdown for Step 2 */}
                    {step.channels && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-[#F5EFE6]">
                        {step.channels.map((chan, cIdx) => (
                          <div key={cIdx} className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EFEAE2]">
                            <span className="text-xs font-bold text-[#B8864B] uppercase tracking-wider block mb-2 font-heading">
                              {chan.region} Channels
                            </span>
                            <ul className="space-y-2 text-xs text-[#555555]">
                              {chan.options.map((opt, oIdx) => (
                                <li key={oIdx} className="flex items-start gap-2">
                                  <span className="text-[#B8864B] font-bold">•</span>
                                  <span>{opt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Residency Procedures for Step 5 */}
                    {step.residencyProcedures && (
                      <div className="mt-4 pt-4 border-t border-[#F5EFE6] space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {step.residencyProcedures.map((proc, pIdx) => (
                            <div key={pIdx} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2] flex items-center gap-2 text-xs font-bold text-[#222222]">
                              <Activity className="w-4 h-4 text-[#B8864B] shrink-0" />
                              <span>{proc}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pt-2">
                          {step.closingDetail}
                        </p>
                      </div>
                    )}

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Notice on processing timelines */}
        <div className="mt-8 p-4 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2] text-xs text-[#777777] leading-relaxed">
          *Note: Processing times for medical fitness testing and Emirates ID biometric cards depend on individual appointment scheduling and government queue volumes.
        </div>

      </div>
    </section>
  );
};
