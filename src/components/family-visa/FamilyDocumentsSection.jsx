import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  CheckCircle2, 
  FileText, 
  Languages, 
  ShieldCheck, 
  AlertCircle, 
  Building2, 
  User,
  ArrowRight
} from 'lucide-react';

export const FamilyDocumentsSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [docTab, setDocTab] = useState('sponsor'); // 'sponsor' | 'dependent' | 'attestation'

  const sponsorDocs = [
    { title: 'Emirates ID & Passport', desc: "Sponsor's original Emirates ID and passport copy with valid UAE residency page (min. 6 months validity)." },
    { title: 'Salary Contract / Certificate', desc: 'Official MOHRE electronic labor contract (Mainland) or stamped Salary Certificate from Free Zone / Government authority.' },
    { title: 'Bank Statement (3-6 Months)', desc: 'Bank statement stamped by bank showing monthly salary transfer credits (mandatory for partners/investors & parents).' },
    { title: 'Registered Ejari & DEWA Bill', desc: 'Attested Ejari tenancy contract in the sponsor’s name (or title deed if owning) and recent DEWA utility bill.' },
    { title: 'Trade License Copy (If Partner)', desc: 'Commercial trade license and memorandum of association (MOA) / partner list if holding an Investor visa.' }
  ];

  const dependentDocs = [
    { title: "Dependent's Passport Copy", desc: 'Clear color passport copy with minimum 6 months validity remaining.' },
    { title: 'Passport-Size Photographs', desc: 'Recent studio photograph with plain white background meeting UAE immigration biometric standards.' },
    { title: 'Attested Marriage Certificate', desc: 'Legalized by UAE Embassy in country of marriage and UAE Ministry of Foreign Affairs (MOFA) in Dubai.' },
    { title: 'Attested Birth Certificates', desc: 'For each child, legalized by the UAE Embassy in home country and UAE MOFA.' },
    { title: 'Previous Visa / Entry Permit Copy', desc: 'Tourist visa, visit visa copy, or previous residency cancellation form if dependent is already inside the UAE.' },
    { title: 'Medical Fitness Certificate', desc: 'Official DHA/EHS fitness test result (required for all sponsored dependents aged 18 and above).' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Document Preparation Checklist
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Requirements & Required Documents
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Our typing center audits every document prior to government submission to ensure zero rejection rates and fast 3 to 5 day visa stamping.
          </p>
        </motion.div>

        {/* Document Tabs */}
        <div className="flex border-b border-[#DECBB5] mb-8">
          <button
            type="button"
            onClick={() => setDocTab('sponsor')}
            className={`pb-3 px-5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              docTab === 'sponsor'
                ? 'border-[#B8864B] text-[#0F172A]'
                : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            Sponsor's Documents (5 Items)
          </button>
          <button
            type="button"
            onClick={() => setDocTab('dependent')}
            className={`pb-3 px-5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              docTab === 'dependent'
                ? 'border-[#B8864B] text-[#0F172A]'
                : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            Family Members' Documents (6 Items)
          </button>
          <button
            type="button"
            onClick={() => setDocTab('attestation')}
            className={`pb-3 px-5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              docTab === 'attestation'
                ? 'border-[#B8864B] text-[#0F172A]'
                : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            MOFA Attestation Guide
          </button>
        </div>

        {/* Tab 1: Sponsor Documents */}
        {docTab === 'sponsor' && (
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8] bg-white rounded-2xl overflow-hidden shadow-xs">
              {sponsorDocs.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#FAF5EC] text-[#B8864B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F172A] font-heading">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 2: Dependent Documents */}
        {docTab === 'dependent' && (
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8] bg-white rounded-2xl overflow-hidden shadow-xs">
              {dependentDocs.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[#FAF5EC] text-[#B8864B] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F172A] font-heading">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 3: MOFA Attestation Guide */}
        {docTab === 'attestation' && (
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DECBB5] shadow-xs space-y-4"
          >
            <div className="flex items-center gap-2 text-[#0F172A]">
              <Languages className="w-5 h-5 text-[#B8864B]" />
              <h3 className="font-bold text-lg font-heading">
                How Marriage & Birth Certificate Attestation Works:
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Foreign relationship certificates (marriage certificates and birth certificates) issued outside the UAE cannot be accepted directly by GDRFA / ICP until they undergo the official 3-tier legalization chain:
            </p>
            <ol className="text-xs sm:text-sm text-[#475569] space-y-2 list-decimal list-inside pl-2">
              <li><strong>Home Country Notarization & Foreign Affairs:</strong> Authentication by the issuing department/ministry in your country of origin.</li>
              <li><strong>UAE Embassy Legalization:</strong> Attestation stamp from the UAE Embassy / Consulate in your home country.</li>
              <li><strong>UAE MOFA & Arabic Legal Translation:</strong> Final electronic attestation stamp by the UAE Ministry of Foreign Affairs and certified legal Arabic translation by a licensed UAE court translator.</li>
            </ol>
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#8C6230] block">
                Don’t have attestation stamps yet? FamilyVisa.ae handles end-to-end global certificate attestation directly.
              </span>
            </div>
          </motion.div>
        )}

        {/* Document Consultation Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-white border border-[#DECBB5] shadow-xs">
          <div className="text-xs text-[#475569]">
            Want a dedicated typing specialist to audit your paperwork before filing?
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation('Family Visa Document Audit')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Request Free Document Review
          </button>
        </div>

      </div>
    </section>
  );
};

export default FamilyDocumentsSection;
