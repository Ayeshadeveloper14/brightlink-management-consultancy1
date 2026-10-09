import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck2, 
  Send, 
  RotateCcw, 
  Stethoscope, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Building,
  PlaneTakeoff
} from 'lucide-react';

export const FamilyVisaProcessRoadmap = ({ onOpenConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'Document Pre-Audit & MOFA Attestation',
      duration: 'Day 1',
      summary: 'We inspect your salary certificate, Ejari tenancy, marriage, and birth certificates to verify compliance with GDRFA rules before file opening.',
      details: [
        'Salary certificate & MOHRE contract verification',
        'Ejari active tenancy status check',
        'MOFA & Embassy attestation validity audit',
        'File opening in GDRFA Dubai / ICP portal'
      ]
    },
    {
      step: '02',
      title: 'Entry Permit (Pink Visa) Issuance',
      duration: 'Day 1 – 2',
      summary: 'Electronic entry visa issued by immigration. If your family is outside the UAE, they use this e-visa to board their flight and enter the country.',
      details: [
        'Electronic entry permit generation (GDRFA/ICP)',
        'Outside UAE: 60-day entry validity window',
        'Inside UAE: Electronic permit prepared for immediate status change',
        'No physical stamping required on passport'
      ]
    },
    {
      step: '03',
      title: 'Change of Status (In-Country)',
      duration: 'Day 2 – 3',
      summary: 'If your family is already inside the UAE on a visit or tourist visa, we convert their status to residence legally without leaving the country or doing an airport run.',
      details: [
        'Internal immigration status adjustment',
        'Eliminates need for Oman border or airport runs',
        'Old visit or cancelled visa converted seamlessly',
        'Starts 60-day medical & stamping completion clock'
      ]
    },
    {
      step: '04',
      title: 'DHA Medical Test & Biometrics Typing',
      duration: 'Day 3 – 4',
      summary: 'Adult dependents (18+) attend their medical fitness test at our affiliated smart centers, followed by biometric fingerprint registration for the Emirates ID.',
      details: [
        'VIP Smart Salem or standard DHA appointment',
        'Blood sample & digital chest X-ray screening',
        'ICP biometrics typing and appointment scheduling',
        'Digital medical fitness certificate generated'
      ]
    },
    {
      step: '05',
      title: 'Health Insurance & Residence Stamping',
      duration: 'Day 4 – 5',
      summary: 'We link mandatory health insurance, submit residency approval to immigration, and dispatch physical Emirates ID cards directly to your residence.',
      details: [
        'DHA compliant health insurance policy linked',
        'Digital residence visa approved and QR-coded',
        'ICP prints physical biometric Emirates ID card',
        'Doorstep courier dispatch to your location'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6230]">
              Transparent Procedure
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight font-heading">
            How We Process Your Family Visa in 5 Steps
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Our Senior PROs manage every government submission from start to finish. Follow our transparent 5-stage roadmap from document legalization to doorstep Emirates ID delivery.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="relative border-l-2 border-[#D5C2A5]/70 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#B8864B] flex items-center justify-center text-[#B8864B] text-[11px] sm:text-xs font-black shadow-xs group-hover:bg-[#B8864B] group-hover:text-white transition-colors">
                {item.step}
              </div>

              {/* Step Content Container */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E6D7C3] shadow-xs hover:shadow-md transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EFEAE2] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider">
                      Stage {item.step}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
                      Estimated: {item.duration}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    GDRFA Approved Protocol
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#111827] font-heading">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {item.summary}
                </p>

                {/* Sub-item bullet points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-[#374151]">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Fast-Track Express Notice */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-7 border border-[#DECBB5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
                Need Faster Processing?
              </span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                Express VIP
              </span>
            </div>
            <h4 className="text-base font-bold text-[#111827]">
              Urgent 48-Hour Stamping Service
            </h4>
            <p className="text-xs text-[#555555] max-w-2xl leading-relaxed">
              Facing an upcoming visa expiry or urgent international travel? We can arrange VIP 4-hour medical typing and express biometric stamping to finalize your residency in 2 to 3 days.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Express Family Visa Processing (48h)')}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            Inquire for Express VIP
          </button>
        </div>

      </div>
    </section>
  );
};

export default FamilyVisaProcessRoadmap;
