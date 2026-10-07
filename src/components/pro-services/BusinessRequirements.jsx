import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  UserCheck, 
  FolderArchive, 
  RefreshCw, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const BusinessRequirements = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState(0);

  const requirementGroups = [
    {
      id: 'establishment-card',
      title: 'Company Establishment & Labour Card Renewal',
      icon: Building2,
      badge: 'Corporate Baseline',
      summary: 'Required documents to establish and maintain active immigration and labour accounts.',
      requirements: [
        { name: 'Valid Trade Licence Copy', note: 'Mainland DED or Free Zone authority commercial licence.' },
        { name: 'Memorandum of Association (MOA)', note: 'Copy of notarized company incorporation agreement.' },
        { name: 'Ejari Tenancy Certificate', note: 'Commercial office tenancy contract registered under company name.' },
        { name: 'Passport & Emirates ID of Partners', note: 'All authorized signatories and local service agents.' },
        { name: 'Existing Establishment Card Copy', note: 'Immigration file card for GDRFA verification.' }
      ]
    },
    {
      id: 'employee-onboarding',
      title: 'New Employee Work Permit & Residence Visa',
      icon: UserCheck,
      badge: 'Staff Hiring',
      summary: 'Mandatory documentation required to hire and sponsor foreign employees under UAE labour law.',
      requirements: [
        { name: 'Employee Passport Copy', note: 'Minimum 6 months validity from date of application.' },
        { name: 'High-Resolution Biometric Photo', note: 'White background digital passport specification photo.' },
        { name: 'Attested Educational Degree', note: 'MOFA attested degree for professional/managerial levels (MOHRE 1 & 2).' },
        { name: 'Offer Letter Signed by Both Parties', note: 'Standard MOHRE electronic offer letter template.' },
        { name: 'Current UAE Visa Status (if in-country)', note: 'Copy of tourist visa, visit visa, or cancelled residency.' }
      ]
    },
    {
      id: 'visa-renewal-staff',
      title: 'Employee Residency & Labour Card Renewals',
      icon: RefreshCw,
      badge: 'Periodic Renewal',
      summary: 'Documentation needed every two years to renew existing company employment visas.',
      requirements: [
        { name: 'Original Passport of Employee', note: 'Required for validation and physical Emirates ID issuance.' },
        { name: 'Current Emirates ID Card', note: 'Physical card copy for biometric profile update.' },
        { name: 'Medical Fitness Certificate', note: 'Cleared test results from DHA or authorized health center.' },
        { name: 'Valid Company Health Insurance', note: 'Active corporate insurance policy covering the worker.' },
        { name: 'Signed Labour Contract Renewal', note: 'Updated standard electronic contract submitted to MOHRE.' }
      ]
    },
    {
      id: 'visa-cancellation-requirements',
      title: 'Employment Cancellation & End of Service',
      icon: FolderArchive,
      badge: 'Offboarding',
      summary: 'Required documents to cancel work permits and residency upon resignation or termination.',
      requirements: [
        { name: 'Employee Passport & Emirates ID Copies', note: 'Identification documents of departing staff.' },
        { name: 'Signed MOHRE Cancellation Document', note: 'Acknowledging receipt of end-of-service gratuity and dues.' },
        { name: 'Company Establishment Card', note: 'Authorized representative digital signature.' },
        { name: 'Labour Card Cancellation Approval', note: 'Generated electronically via MOHRE portal.' },
        { name: 'GDRFA Visa Cancellation Form', note: 'Grants standard 30–60 day departure or status amendment grace period.' }
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
              Prerequisites & Documents
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Common Business Requirements & Checklists
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Ensure your corporate filings proceed without requests for correction. Expand each category below to review the required company and employee documents.
          </p>
        </motion.div>

        {/* Expandable Cards List */}
        <div className="space-y-4 mb-10">
          {requirementGroups.map((group, idx) => {
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
                          {group.requirements.map((req, rIdx) => (
                            <div 
                              key={rIdx}
                              className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] flex items-start gap-2.5"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                              <div>
                                <span className="text-xs font-bold text-[#222222] block font-heading">
                                  {req.name}
                                </span>
                                <span className="text-[11px] text-[#666666] leading-tight block mt-0.5">
                                  {req.note}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#F1EBE1] text-xs text-[#777777]">
                          <span>Need help preparing or attesting these documents? We provide full PRO support.</span>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation && onOpenConsultation(`Requirement Audit: ${group.title}`)}
                            className="inline-flex items-center gap-1.5 font-bold text-[#B8864B] hover:text-[#976A36] cursor-pointer"
                          >
                            <span>Request Document Audit</span>
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
