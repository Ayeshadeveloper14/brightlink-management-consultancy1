import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  UserCheck, 
  RefreshCw, 
  Users, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const RequiredDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [expandedCategory, setExpandedCategory] = useState(0);

  const documentCategories = [
    {
      title: 'New Emirates ID (First-Time Applicants)',
      subtitle: 'New Work Permit / Investor / Resident Visa Holders',
      icon: FileText,
      badge: 'First Application',
      documents: [
        { name: 'Original Passport Copy', note: 'Clear color copy with minimum 6 months validity remaining.' },
        { name: 'UAE Entry Permit or Stamped Visa', note: 'GDRFA or ICP approved entry permit showing UID number.' },
        { name: 'High-Resolution Digital Passport Photograph', note: 'White background, 35x45mm, no headwear (except religious).' },
        { name: 'Medical Fitness Certificate (if 18+)', note: 'Cleared DHA / Smart Salem medical fitness screening results.' },
        { name: 'Sponsor Details / Employment Contract', note: 'Company establishment card or family sponsor Emirates ID copy.' }
      ]
    },
    {
      title: 'Emirates ID Renewal Checklist',
      subtitle: 'Existing UAE Residents Extending Residency',
      icon: RefreshCw,
      badge: 'Renewal Filing',
      documents: [
        { name: 'Current / Expiring Emirates ID Card', note: 'Front and back scan of physical card or digital copy from ICP app.' },
        { name: 'Valid Passport Copy', note: 'Passport must be valid for at least 6 months.' },
        { name: 'Renewed UAE Residence Visa Copy', note: 'Electronic residency document or active visa stamping verification.' },
        { name: 'Cleared Medical Fitness Certificate', note: 'Standard bi-annual medical test results for renewal.' },
        { name: 'Recent Digital Passport Photo', note: 'Recent digital photo adhering to ICP specifications.' }
      ]
    },
    {
      title: 'Lost or Damaged Card Replacement',
      subtitle: 'Emergency Reprint & Stolen Card Reissuance',
      icon: UserCheck,
      badge: 'Card Replacement',
      documents: [
        { name: 'Original Passport Copy', note: 'Current valid passport for personal verification.' },
        { name: 'Valid UAE Residence Visa Copy', note: 'Proof of active, legal residence status in the country.' },
        { name: 'Copy of Lost Emirates ID or ID Number', note: '15-digit Emirates ID number (starts with 784).' },
        { name: 'Police Report (for lost/stolen cards)', note: 'Required in certain jurisdictions or if card was stolen.' },
        { name: 'Damaged Physical Card (for damaged swap)', note: 'Surrendered to the center during physical replacement pickup.' }
      ]
    },
    {
      title: 'Family Members & Children (Under 15)',
      subtitle: 'Spouses, Dependents & Newborns',
      icon: Users,
      badge: 'Family Sponsorship',
      documents: [
        { name: 'Child / Spouse Passport Copy', note: 'Valid passport with at least 6 months validity.' },
        { name: 'Attested Birth / Marriage Certificate', note: 'MOFA attested relationship proof for legal sponsorship.' },
        { name: 'Sponsor Passport, Visa & Emirates ID', note: 'Valid legal documentation of parent or working spouse.' },
        { name: 'Digital Passport Photo with White Background', note: 'Required for all dependents regardless of age.' },
        { name: 'Biometric Exemption Status', note: 'Children under 15 are exempt from physical fingerprint capture.' }
      ]
    }
  ];

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
              Document Checklist
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Required Documents for Emirates ID
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Ensure an error-free submission by having the correct papers ready. Click through the categories below to view the precise requirements for your application type.
          </p>
        </motion.div>

        {/* Expandable Accordion Cards */}
        <div className="space-y-4">
          {documentCategories.map((cat, idx) => {
            const isExpanded = expandedCategory === idx;
            const Icon = cat.icon;

            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#FCFAF8] border-[#B8864B]/50 shadow-md shadow-black/5'
                    : 'bg-white border-[#EFEAE2] hover:border-[#D9C4A9]'
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => setExpandedCategory(isExpanded ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isExpanded 
                        ? 'bg-[#B8864B] text-white shadow-xs' 
                        : 'bg-[#FAF5EC] text-[#B8864B]'
                    }`}>
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-[#222222]">
                          {cat.title}
                        </h3>
                        <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF5EC] text-[#976A36] border border-[#E6D7C3]">
                          {cat.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#777777]">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 bg-[#FAF5EC] text-[#B8864B]' : 'bg-[#FAF5EC] text-[#777777]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#F1EBE1]/80">
                        <div className="space-y-3 mt-3">
                          {cat.documents.map((doc, dIdx) => (
                            <div
                              key={dIdx}
                              className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] flex items-start justify-between gap-3"
                            >
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                                <div>
                                  <div className="text-xs sm:text-sm font-bold text-[#222222]">
                                    {doc.name}
                                  </div>
                                  <div className="text-xs text-[#666666]">
                                    {doc.note}
                                  </div>
                                </div>
                              </div>
                              <span className="shrink-0 text-[11px] font-semibold text-[#976A36] bg-[#FAF5EC] px-2 py-0.5 rounded border border-[#E6D7C3]">
                                Required
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Callout action */}
                        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3]">
                          <span className="text-xs text-[#555555]">
                            Need assistance pre-checking your document specifications?
                          </span>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation && onOpenConsultation(`Emirates ID Document Audit - ${cat.title}`)}
                            className="shrink-0 px-4 py-2 rounded-full bg-[#B8864B] text-white text-xs font-bold hover:bg-[#9E723E] transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <span>Free Document Audit</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RequiredDocuments;
