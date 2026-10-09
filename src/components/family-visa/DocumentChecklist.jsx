import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export const DocumentChecklist = () => {
  const roadmapSteps = [
    {
      step: '01',
      title: 'Salary & Ejari Verification',
      desc: 'We verify your salary certificate/MOHRE labor contract and tenancy Ejari to confirm compliance before payment.'
    },
    {
      step: '02',
      title: 'Document Attestation (MOFA)',
      desc: 'Marriage & birth certificates must be attested by Ministry of Foreign Affairs (MOFA) and legally translated into Arabic.'
    },
    {
      step: '03',
      title: 'Entry Permit & Status Change',
      desc: 'We issue the electronic entry visa. If family is already in UAE, we perform an in-country change of status without airport run.'
    },
    {
      step: '04',
      title: 'Medical Fitness & Emirates ID',
      desc: 'VIP fast-track medical typing (DHA 4-hour results) and biometrics appointment booking for all adult dependents.'
    },
    {
      step: '05',
      title: 'Residence Stamping & Delivery',
      desc: 'Residency is electronically approved on ICP/GDRFA, and physical Emirates ID cards are dispatched to your door.'
    }
  ];

  const requiredDocuments = [
    'Sponsor Passport, Visa & Emirates ID copy',
    'Attested Salary Certificate / MOHRE Contract',
    'Registered Tenancy Contract (Ejari)',
    'Original Attested Marriage Certificate (for spouse)',
    'Original Attested Birth Certificate (for children)',
    'Recent white background passport photos of dependents',
    'Bank statement (last 3 months for parent sponsorship)'
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left 7 cols: Roadmap */}
      <div className="lg:col-span-7 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider">
            Complete Procedure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
            How We Process Your Family Visa
          </h2>
          <p className="text-xs sm:text-sm text-[#666666]">
            A transparent step-by-step roadmap from file opening to Emirates ID delivery.
          </p>
        </div>

        <div className="space-y-3.5 pt-2">
          {roadmapSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-xl p-5 border border-neutral-200/80 hover:border-[#B8864B]/40 transition-all flex items-start gap-4 shadow-xs hover:shadow-md group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] group-hover:bg-[#B8864B] group-hover:text-white text-[#8C6230] font-black text-sm flex items-center justify-center shrink-0 transition-colors">
                {step.step}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right 5 cols: Documents Checklist */}
      <div className="lg:col-span-5 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-md space-y-4"
        >
          <div className="flex items-center gap-2 text-base font-bold text-[#222222]">
            <FileText className="w-5 h-5 text-[#B8864B]" />
            <span>Required Documents Checklist</span>
          </div>

          <div className="space-y-2.5 pt-1">
            {requiredDocuments.map((doc, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#444444]">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Brightlink pre-verifies all attestations to ensure 0% rejection.</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocumentChecklist;
