import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Heart, 
  UserCheck, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Building2, 
  Sparkles,
  Info,
  Scale,
  Baby
} from 'lucide-react';

export const FamilyEligibilityRules = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('spouse');

  const categories = [
    { id: 'spouse', label: 'Spouse Sponsorship', icon: Heart },
    { id: 'children', label: 'Children & Daughters', icon: Users },
    { id: 'parents', label: 'Parents (Humanitarian)', icon: Building2 },
    { id: 'special', label: 'Newborns & Stepchildren', icon: Baby }
  ];

  return (
    <section id="family-eligibility-rules" className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Editorial Typography */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6230]">
              Eligibility & Guidelines
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight font-heading">
            Who Qualifies for UAE Family Sponsorship?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Under updated UAE immigration guidelines, both male and female residents holding a valid residence permit can sponsor direct family members. Eligibility is determined primarily by your registered salary and certified accommodation.
          </p>
        </div>

        {/* Clean Interactive Tab Switcher (Segmented Control, not pill badges) */}
        <div className="flex items-center gap-2 p-1.5 bg-[#FAF7F2] rounded-xl border border-[#E6D7C3] max-w-2xl mb-10 overflow-x-auto">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#8C6230] shadow-sm border border-[#DECBB5]'
                    : 'text-[#4B5563] hover:text-[#111827] hover:bg-white/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#B8864B]' : 'text-neutral-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content: Editorial Deep-Dive with High-Legibility Structure */}
        <AnimatePresence mode="wait">
          {activeTab === 'spouse' && (
            <motion.div
              key="spouse"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Requirements & Rules (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2 font-heading">
                    Sponsoring Your Husband or Wife in Dubai
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    Expatriates residing in the UAE can sponsor their legal spouse for a 2-year renewable residence visa. Male and female residents can both act as sponsors, provided they meet the minimum income criteria and registered housing conditions.
                  </p>
                </div>

                {/* Key Rules List with Subtle Dividers */}
                <div className="space-y-4 pt-2">
                  
                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Husband Sponsoring Wife
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Minimum salary of <strong>AED 4,000 per month</strong> (or AED 3,000 plus company accommodation provided by employer). The applicant can work under any legal profession listed on their residence permit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Wife Sponsoring Husband
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        A woman working in the UAE can sponsor her husband and children. For engineering, medical (doctors/nurses), and teaching professions, the salary threshold is typically <strong>AED 3,000 – 4,000 + housing</strong>. For other professions, a minimum monthly salary of <strong>AED 10,000</strong> or special approval from GDRFA is required.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Attested Marriage Certificate
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        The marriage certificate must be authenticated by the Ministry of Foreign Affairs (MOFA) of the issuing country, the UAE Embassy abroad, and the UAE MOFA in Dubai, followed by certified legal translation into Arabic.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      04
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Accommodation Requirement (Ejari)
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        A registered tenancy contract under the sponsor's name (or spouse's name) is mandatory. Studio or 1-bedroom apartments are acceptable for spouse and 1 child.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation('Spouse Visa Sponsorship')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Start Spouse Visa Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Highlight Box with Checklist & Quick Facts (5 cols) */}
              <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E6D7C3] space-y-5">
                <div className="border-b border-[#E6D7C3] pb-3">
                  <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block mb-1">
                    At A Glance
                  </span>
                  <h4 className="text-base font-bold text-[#111827]">
                    Spouse Visa Key Specifications
                  </h4>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Visa Duration</span>
                    <span className="font-bold text-[#111827]">2 Years (Renewable)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Min Salary</span>
                    <span className="font-bold text-[#111827]">AED 4,000 / month</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Medical Fitness Test</span>
                    <span className="font-bold text-[#111827]">Mandatory (18+ Yrs)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Emirates ID Biometrics</span>
                    <span className="font-bold text-[#111827]">Mandatory (New Cards)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Health Insurance</span>
                    <span className="font-bold text-[#111827]">Mandatory (DHA Compliant)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#6B7280]">Turnaround Time</span>
                    <span className="font-bold text-emerald-700">3 – 5 Working Days</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-[#E8DFC8] text-xs text-[#555555] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#8C6230]">
                    <Info className="w-3.5 h-3.5" />
                    <span>Important Legal Note</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Under UAE federal decree law, a Muslim male resident may sponsor only one wife at a time under the standard family sponsorship visa scheme.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'children' && (
            <motion.div
              key="children"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2 font-heading">
                    Sponsoring Sons, Daughters & Dependents
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    The modern UAE immigration system significantly eased age restrictions for children, giving expat parents greater flexibility to keep their families united.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Sons Sponsored Up to 25 Years Old
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Under the latest UAE residency reforms, male children can now be sponsored until they reach <strong>25 years of age</strong> (expanded from the prior 18-year cap), allowing them to complete university studies or job seek without visa interruption.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Unmarried Daughters Sponsored at Any Age
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Parents can sponsor their unmarried female children <strong>regardless of their age</strong>. There is no maximum age limit, provided they are not legally married.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Children of Determination (Special Needs)
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Children with disabilities or special needs receive lifelong residence permits sponsored by parents, completely exempt from any age limitations upon presenting a medical fitness exemption card from DHA / MOHAP.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      04
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Medical Fitness Exemption Under 18
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Children below 18 years of age are completely exempt from the mandatory blood screening and chest X-ray tests, making their visa issuance faster and more affordable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation('Children Visa Sponsorship')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Sponsor Children in UAE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column (5 cols) */}
              <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E6D7C3] space-y-5">
                <div className="border-b border-[#E6D7C3] pb-3">
                  <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block mb-1">
                    At A Glance
                  </span>
                  <h4 className="text-base font-bold text-[#111827]">
                    Children Visa Rules Summary
                  </h4>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Son Age Cap</span>
                    <span className="font-bold text-[#111827]">Up to 25 Years Old</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Daughter Age Cap</span>
                    <span className="font-bold text-[#111827]">No Age Limit (Unmarried)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Medical Test (Under 18)</span>
                    <span className="font-bold text-emerald-700">Exempt (Not Required)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Medical Test (18+ Sons)</span>
                    <span className="font-bold text-[#111827]">Required (Blood & X-ray)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Attested Birth Certificate</span>
                    <span className="font-bold text-[#111827]">Mandatory (MOFA + Arabic)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#6B7280]">Turnaround</span>
                    <span className="font-bold text-emerald-700">2 – 4 Working Days</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-[#E8DFC8] text-xs text-[#555555] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#8C6230]">
                    <Info className="w-3.5 h-3.5" />
                    <span>Birth Certificate Attestation</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    The child's birth certificate must clearly state both parents' names matching their passports exactly. We handle home country attestation & MOFA UAE stamping if not yet certified.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'parents' && (
            <motion.div
              key="parents"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2 font-heading">
                    Sponsoring Both Parents (Humanitarian Appeal)
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    Expatriates who want to bring their elderly parents to live with them in the UAE can do so on humanitarian grounds under specific GDRFA criteria. Visas for parents are granted for 1 year and renewable annually.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Must Sponsor Both Parents Together
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Under UAE law, an expatriate must sponsor <strong>both parents together</strong>. You cannot sponsor only one parent unless you submit official attested proof that one parent is deceased (death certificate) or that parents are divorced (divorce deed + custody proof).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Minimum Salary: AED 20,000 / month
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        The sponsor must earn at least <strong>AED 20,000 per month</strong> (or AED 19,000 plus a 2-bedroom accommodation provided by the employer). Bank statements for the last 3 to 6 months must be provided.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Minimum 2-Bedroom Ejari Accommodation
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Immigration regulations mandate adequate living space: a registered 2-bedroom apartment or villa tenancy contract (Ejari) is required. Studio or 1-bedroom apartments will be rejected.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      04
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Dependency Proof & Security Deposit
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        A consular dependency certificate stating you are the sole caregiver and parents have no other supporters in their home country. A refundable security deposit of <strong>AED 5,000</strong> per parent is submitted to GDRFA.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation('Parents Visa Sponsorship')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Assess Parents Visa Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column (5 cols) */}
              <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E6D7C3] space-y-5">
                <div className="border-b border-[#E6D7C3] pb-3">
                  <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block mb-1">
                    At A Glance
                  </span>
                  <h4 className="text-base font-bold text-[#111827]">
                    Parents Visa Requirements
                  </h4>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Residency Validity</span>
                    <span className="font-bold text-[#111827]">1 Year (Renewable Annually)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Minimum Salary</span>
                    <span className="font-bold text-[#111827]">AED 20,000 / month</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Accommodation</span>
                    <span className="font-bold text-[#111827]">2-Bedroom Ejari Required</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Both Parents Rule</span>
                    <span className="font-bold text-[#111827]">Mandatory (unless deceased)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Govt Refundable Deposit</span>
                    <span className="font-bold text-[#8C6230]">AED 5,000 / parent</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#6B7280]">Health Insurance</span>
                    <span className="font-bold text-emerald-700">Mandatory Senior Policy</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-[#E8DFC8] text-xs text-[#555555] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#8C6230]">
                    <Info className="w-3.5 h-3.5" />
                    <span>BrightLink Humanitarian Support</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    If your salary is slightly below AED 20,000 or you have a single parent situation, our Senior Typing Specialists prepare a customized humanitarian petition with notarized dependency affidavits for GDRFA director approval.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'special' && (
            <motion.div
              key="special"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2 font-heading">
                    Newborn Babies, Step-Children & Custody Cases
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    BrightLink specializes in handling complex family cases, from urgent newborn visa issuance within the 120-day legal window to stepchildren sponsorship requiring overseas court custody approvals.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Newborn Baby in the UAE (120 Days Rule)
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Parents have exactly <strong>120 days from the date of birth</strong> to obtain the official UAE birth certificate, embassy passport, and residency visa stamping. A fine of AED 100 per day applies if the visa is not stamped within this grace window.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 pb-4 border-b border-neutral-100">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Stepchildren from Previous Marriage
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        A stepparent can sponsor stepchildren subject to approval from the GDRFA humanitarian committee. Requires a fully attested No-Objection Certificate (NOC) from the biological parent, official legal custody judgments, and a refundable security deposit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">
                        Domestic Helpers & Nannies for the Family
                      </h4>
                      <p className="text-xs text-[#555555] leading-relaxed mt-0.5">
                        Families who need full-time domestic support (housemaid, nanny, private chauffeur) can sponsor through the official MOHRE domestic worker scheme. Requires minimum sponsor salary of AED 25,000/month or medical recommendation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation('Special Case / Newborn Visa')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Consult on Special Family Case</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column (5 cols) */}
              <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E6D7C3] space-y-5">
                <div className="border-b border-[#E6D7C3] pb-3">
                  <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block mb-1">
                    At A Glance
                  </span>
                  <h4 className="text-base font-bold text-[#111827]">
                    Newborn & Special Cases Checklist
                  </h4>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Newborn Visa Window</span>
                    <span className="font-bold text-emerald-700">120 Days from Birth</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Overstay Fine (After 120 Days)</span>
                    <span className="font-bold text-red-600">AED 100 / day</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Stepchildren Biological NOC</span>
                    <span className="font-bold text-[#111827]">Mandatory (Attested)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#EFEAE2]">
                    <span className="text-[#6B7280]">Court Custody Order</span>
                    <span className="font-bold text-[#111827]">Required (Legal Arabic)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#6B7280]">Newborn Medical Test</span>
                    <span className="font-bold text-emerald-700">Exempt (Not Applicable)</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-[#E8DFC8] text-xs text-[#555555] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#8C6230]">
                    <Info className="w-3.5 h-3.5" />
                    <span>Fast-Track Newborn Service</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    We coordinate with Dubai Health Authority (DHA) for the digital birth notification, arrange certified Arabic translation, and expedite residency stamping in as little as 48 hours.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default FamilyEligibilityRules;
