import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  CheckSquare, 
  Square, 
  ChevronDown, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const DocumentChecklist = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [expandedSection, setExpandedSection] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const checklistSections = [
    {
      title: 'Primary Identity Documents (Mandatory for All)',
      subtitle: 'Core applicant documents required for any Amer filing',
      badge: 'Core Identity',
      items: [
        {
          id: 'passport',
          name: 'Passport Copy (Color)',
          requirement: 'Minimum 6 months validity remaining. Clear high-resolution scan of data and observation pages.'
        },
        {
          id: 'photo',
          name: 'Digital Passport Photograph',
          requirement: 'Recent white-background passport photo (35x45mm), adhering to ICP biometrics specifications.'
        },
        {
          id: 'current-visa',
          name: 'Current Visa / Entry Permit Copy',
          requirement: 'Copy of existing tourist visa, visit visa, cancelled residency, or entry stamp with UID number.'
        },
        {
          id: 'emirates-id-copy',
          name: 'Existing Emirates ID Copy (if renewing)',
          requirement: 'Front and back scan of previous card or digital PDF export from the ICP smart app.'
        }
      ]
    },
    {
      title: 'Family Visa Sponsorship Documents',
      subtitle: 'Required when sponsoring spouse, children, or parents',
      badge: 'Family Sponsorship',
      items: [
        {
          id: 'sponsor-id',
          name: 'Sponsor Passport, Visa & Emirates ID',
          requirement: 'Valid residency documents of the family sponsor with minimum 6 months validity.'
        },
        {
          id: 'salary-cert',
          name: 'Salary Certificate & Labour Contract',
          requirement: 'Official electronic labour contract or free zone salary certificate showing minimum AED 4,000/mo.'
        },
        {
          id: 'ejari',
          name: 'Registered Ejari Tenancy Contract',
          requirement: 'Attested commercial or residential tenancy contract under sponsor name, with recent DEWA bill.'
        },
        {
          id: 'marriage-cert',
          name: 'Attested Marriage Certificate',
          requirement: 'Legalized by UAE Embassy in home country and Ministry of Foreign Affairs (MOFA) in UAE.'
        },
        {
          id: 'birth-cert',
          name: 'Attested Birth Certificates for Children',
          requirement: 'MOFA attested birth certificate with certified legal Arabic translation.'
        }
      ]
    },
    {
      title: 'Corporate Employee Visa Documents',
      subtitle: 'Required for workforce onboarding under company sponsorship',
      badge: 'Corporate Workforce',
      items: [
        {
          id: 'trade-licence',
          name: 'Valid UAE Trade Licence Copy',
          requirement: 'Commercial licence issued by Dubai Economy & Tourism (DET) or Free Zone authority.'
        },
        {
          id: 'establishment-card',
          name: 'Company Establishment Card Copy',
          requirement: 'Active immigration establishment card registered with GDRFA Dubai.'
        },
        {
          id: 'offer-letter',
          name: 'Signed MOHRE Electronic Job Offer',
          requirement: 'Official job offer letter endorsed by both employer and incoming employee.'
        },
        {
          id: 'attested-degree',
          name: 'Attested University Degree (Levels 1 & 2)',
          requirement: 'Required for managerial and skilled professional titles (MOHRE skill categories).'
        }
      ]
    },
    {
      title: 'In-Country Status Change & Renewals',
      subtitle: 'Transitioning visa types without leaving the UAE',
      badge: 'Status Amendment',
      items: [
        {
          id: 'cancellation-paper',
          name: 'Previous Visa Cancellation Paper / Tourist Visa',
          requirement: 'Official GDRFA cancellation receipt showing 30-day grace period expiration date.'
        },
        {
          id: 'medical-receipt',
          name: 'Cleared Medical Fitness Certificate',
          requirement: 'DHA or Smart Salem medical fitness screening results (fit for residency).'
        },
        {
          id: 'insurance-policy',
          name: 'Active UAE Health Insurance Certificate',
          requirement: 'Valid health insurance policy covering the applicant under Dubai mandatory health laws.'
        }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] relative border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <CheckSquare className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Interactive Document Checklist
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Required Documents for Amer Services
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Ensure an error-free submission. Click through the categories and tick the items you have ready to identify any missing certificates.
          </p>
        </motion.div>

        {/* Expandable Checklist Cards */}
        <div className="space-y-4">
          {checklistSections.map((section, sIdx) => {
            const isExpanded = expandedSection === sIdx;

            return (
              <motion.div
                key={sIdx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-[#B8864B]/50 shadow-md'
                    : 'bg-white border-[#EFEAE2] hover:border-[#DECBB5]'
                }`}
              >
                {/* Header Toggle Button */}
                <button
                  type="button"
                  onClick={() => setExpandedSection(isExpanded ? null : sIdx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isExpanded
                        ? 'bg-[#B8864B] text-white'
                        : 'bg-[#FAF5EC] text-[#B8864B]'
                    }`}>
                      <FileText className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-[#222222]">
                          {section.title}
                        </h3>
                        <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF5EC] text-[#976A36] border border-[#E6D7C3]">
                          {section.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#777777]">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 bg-[#FAF5EC] text-[#B8864B]' : 'bg-[#FAF5EC] text-[#777777]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Expanded Checklist Items */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#F1EBE1]/80">
                        <div className="space-y-3 mt-4">
                          {section.items.map((item) => {
                            const isChecked = !!checkedItems[item.id];

                            return (
                              <div
                                key={item.id}
                                onClick={() => toggleCheck(item.id)}
                                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                                  isChecked
                                    ? 'bg-[#FAF5EC]/70 border-[#B8864B]/60'
                                    : 'bg-[#FCFAF8] border-[#EFEAE2] hover:bg-white'
                                }`}
                              >
                                <div className="mt-0.5 shrink-0 text-[#B8864B]">
                                  {isChecked ? (
                                    <CheckSquare className="w-5 h-5 fill-[#B8864B] text-white" />
                                  ) : (
                                    <Square className="w-5 h-5 text-neutral-400" />
                                  )}
                                </div>

                                <div className="flex-1">
                                  <div className={`text-sm font-bold font-heading mb-0.5 ${
                                    isChecked ? 'text-[#976A36]' : 'text-[#222222]'
                                  }`}>
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-[#666666] leading-relaxed">
                                    {item.requirement}
                                  </div>
                                </div>

                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shrink-0 ${
                                  isChecked
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-neutral-100 text-neutral-600'
                                }`}>
                                  {isChecked ? 'Ready' : 'Pending'}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Document Pre-Audit Banner */}
                        <div className="mt-5 p-4 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex flex-col sm:flex-row items-center justify-between gap-4">
                          <span className="text-xs text-[#555555]">
                            Unsure if your documents meet GDRFA and MOFA criteria?
                          </span>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation && onOpenConsultation(`Amer Checklist Audit - ${section.title}`)}
                            className="shrink-0 px-4 py-2 rounded-full bg-[#B8864B] text-white text-xs font-bold hover:bg-[#9E723E] transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <span>Request Free Pre-Audit</span>
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

export default DocumentChecklist;
