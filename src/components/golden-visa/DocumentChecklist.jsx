import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FileCheck, 
  ChevronDown, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  Crown, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const DocumentChecklist = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState(0);

  const checklistGroups = [
    {
      id: 'real-estate',
      title: 'Real Estate Investor Checklist (AED 2M+)',
      icon: Building2,
      badge: 'Property Route',
      summary: 'Required for freehold owners with title deeds issued by the Dubai Land Department (DLD).',
      documents: [
        { name: 'Original Title Deed', note: 'Issued by DLD showing total purchase valuation ≥ AED 2,000,000.' },
        { name: 'Bank NOC Letter (if mortgaged)', note: 'Bank non-objection certificate stating minimum AED 2M paid-up equity.' },
        { name: 'Clear Passport Copy', note: 'Valid for a minimum of 6 months remaining validity.' },
        { name: 'Current UAE Visa & Emirates ID', note: 'If applicant is currently inside the UAE on visit or residency.' },
        { name: 'High-Resolution Biometric Photo', note: 'White background digital passport format photograph.' },
        { name: 'Valid UAE Health Insurance', note: 'Can be issued through Brigitlink partner network.' }
      ]
    },
    {
      id: 'professionals',
      title: 'Skilled Professionals & Executives (AED 30k+/mo)',
      icon: Briefcase,
      badge: 'Executive Route',
      summary: 'Required for senior corporate leaders, specialized engineers, tech architects, and managers.',
      documents: [
        { name: 'Attested Bachelor Degree or Higher', note: 'Attested by MOFA in home country and UAE MOFA + equivalency.' },
        { name: 'Active MOHRE Labour Contract', note: 'Confirming occupational level 1 or 2 with salary ≥ AED 30,000/month.' },
        { name: '6 Months Bank Statements', note: 'Showing regular salary transfers (WPS or official corporate bank transfer).' },
        { name: 'Company Salary Certificate', note: 'Printed on corporate letterhead and stamped by authorized signatory.' },
        { name: 'Valid Passport & Emirates ID', note: 'Minimum 6 months validity on current travel document.' },
        { name: 'Comprehensive Health Insurance Policy', note: 'Coverage valid throughout all seven Emirates.' }
      ]
    },
    {
      id: 'business-founders',
      title: 'Business Owners & Entrepreneurs',
      icon: Crown,
      badge: 'Corporate Route',
      summary: 'For company partners with AED 2M capital equity or approved incubator projects.',
      documents: [
        { name: 'Commercial Trade Licence Copy', note: 'Mainland DED or Free Zone licence with partner shares.' },
        { name: 'Memorandum of Association (MOA)', note: 'Proving ownership share capital ≥ AED 2,000,000.' },
        { name: 'Audited Financial Statement', note: 'Prepared by an accredited UAE chartered auditing firm.' },
        { name: 'Federal Tax Authority (FTA) Letter', note: 'Confirming annual tax payments ≥ AED 250,000 (if applicable).' },
        { name: 'Incubator Approval Letter (Entrepreneurs)', note: 'Endorsement from a recognized UAE incubator or Ministry of Economy.' }
      ]
    },
    {
      id: 'talents-students',
      title: 'Outstanding Graduates & Specialized Talents',
      icon: GraduationCap,
      badge: 'Merit Route',
      summary: 'For top university graduates (GPA 3.8+), doctors, scientists, and cultural creators.',
      documents: [
        { name: 'Attested University Graduation Certificate', note: 'Grade transcript confirming cumulative GPA ≥ 3.8/4.0.' },
        { name: 'Ministry of Education Equivalency Certificate', note: 'Official UAE MOE recognition for foreign university degrees.' },
        { name: 'Council Recommendation Letter (Scientists)', note: 'Formal endorsement from Emirates Scientists Council.' },
        { name: 'Dubai Culture NOC Approval (Creatives)', note: 'Official approval issued through Dubai Culture and Arts Authority.' },
        { name: 'Medical Licence (Doctors/Surgeons)', note: 'DHA, DOH, or MOHAP active clinical licence.' }
      ]
    }
  ];

  const toggleAccordion = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Paperwork Simplified
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Document Requirements Checklist
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Expand the relevant category below to review the specific documents required for your application. Brigitlink provides end-to-end attestation, Arabic translation, and DLD verification.
          </p>
        </motion.div>

        {/* Expandable Cards List */}
        <div className="space-y-4 mb-10">
          {checklistGroups.map((group, idx) => {
            const isExpanded = expandedIndex === idx;
            const Icon = group.icon;

            return (
              <div
                key={group.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-[#B8864B] bg-[#FCFAF8] shadow-sm'
                    : 'border-[#EBE4D8] bg-white hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8864B]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isExpanded ? 'bg-[#B8864B] text-white' : 'bg-[#FAF5EC] text-[#B8864B]'
                    }`}>
                      <Icon className="w-5 h-5 stroke-[1.9]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm sm:text-base font-bold text-[#222222] font-heading">
                          {group.title}
                        </span>
                        <span className="hidden sm:inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3]">
                          {group.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] line-clamp-1">
                        {group.summary}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 ${
                    isExpanded 
                      ? 'bg-[#B8864B] text-white border-[#B8864B] rotate-180' 
                      : 'bg-[#FAF8F5] text-[#888888] border-[#EFEAE2]'
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-[#F1EBE1]/70">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                          {group.documents.map((doc, dIdx) => (
                            <div 
                              key={dIdx}
                              className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                              <div>
                                <span className="text-xs font-bold text-[#222222] block font-heading">
                                  {doc.name}
                                </span>
                                <span className="text-[11px] text-[#666666] leading-tight block mt-0.5">
                                  {doc.note}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#F1EBE1] text-xs text-[#777777]">
                          <span>Missing an attested degree or DLD certificate? We manage it all.</span>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation && onOpenConsultation(`Document Review: ${group.title}`)}
                            className="inline-flex items-center gap-1.5 font-bold text-[#B8864B] hover:text-[#976A36] cursor-pointer"
                          >
                            <span>Request document audit</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
