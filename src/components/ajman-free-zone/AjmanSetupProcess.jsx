import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  Search, 
  Scale, 
  FileCheck, 
  PenTool, 
  Send, 
  Award, 
  Users, 
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const AjmanSetupProcess = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: '01',
      title: 'Initial Consultation',
      icon: Compass,
      summary: 'Understand the proposed business, ownership, target customers, products or services, budget, and operational requirements.',
      deliverable: 'Tailored proposal outlining suitable licence categories, fee estimates, and workspace choices.'
    },
    {
      num: '02',
      title: 'Select Business Activity',
      icon: Search,
      summary: 'Identify an activity permitted by Ajman Free Zone and determine whether any additional external ministry approvals may be needed.',
      deliverable: 'Confirmed AFZ activity classification codes and regulatory review.'
    },
    {
      num: '03',
      title: 'Choose Licence & Structure',
      icon: Scale,
      summary: 'Select a suitable licence category (Commercial, Service, Industrial, E-Commerce) and legal structure (FZE, FZC, or Branch).',
      deliverable: 'Optimized corporate architecture balancing shareholding and operational scope.'
    },
    {
      num: '04',
      title: 'Reserve Company Name',
      icon: FileCheck,
      summary: 'Prepare 3 proposed company trade names following Ajman Free Zone naming conventions and submit for official name approval.',
      deliverable: 'Official Trade Name Reservation Certificate from AFZ.'
    },
    {
      num: '05',
      title: 'Prepare Required Documents',
      icon: PenTool,
      summary: 'Collect shareholder identification, company details, application forms, and constitutional documents (MOA/AOA, Board Resolutions).',
      deliverable: 'Fully audited, compliant application dossier ready for authority upload.'
    },
    {
      num: '06',
      title: 'Submit the Application',
      icon: Send,
      summary: 'Submit the company registration application via the AFZ digital portal and address any authority clarifications.',
      deliverable: 'Security clearance and official approval notification.'
    },
    {
      num: '07',
      title: 'Complete Registration & Licensing',
      icon: Award,
      summary: 'Complete payment of official fees, execute the workspace tenancy agreement (lease), and receive formal corporate documents.',
      deliverable: 'Official Trade Licence, Certificate of Incorporation, and Chamber of Commerce registration.'
    },
    {
      num: '08',
      title: 'Immigration & Visa Procedures',
      icon: Users,
      summary: 'Open the corporate Establishment Card file, issue entry permits, complete medical fitness tests and Emirates ID biometrics, and stamp residence visas.',
      deliverable: '2-Year renewable UAE Residence Visas and Emirates IDs for shareholders and staff.'
    },
    {
      num: '09',
      title: 'Prepare Business Operations',
      icon: Briefcase,
      summary: 'Apply for a UAE corporate bank account, register for Corporate Tax TRN with the FTA, arrange accounting ledgers, and establish customs codes.',
      deliverable: 'Fully operational, banked, tax-registered, and compliant UAE enterprise.'
    }
  ];

  return (
    <section id="ajman-process" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>9-STAGE FORMATION ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Step-by-Step Ajman Free Zone Formation Process
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            From initial activity mapping to visa stamping and corporate banking, Brightlink guides your enterprise through every phase of incorporation.
          </p>
        </div>

        {/* 9-Step Interactive Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((st, index) => {
            const Icon = st.icon;
            const isActive = activeStep === index;
            return (
              <motion.div
                key={st.num}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'border-[#B8864B] bg-[#FAF7F0] shadow-md ring-1 ring-[#B8864B]'
                    : 'border-[#E6D7C3] bg-white hover:border-[#DECBB5] hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold font-heading text-[#8C5E28] bg-white px-2.5 py-1 rounded-md border border-[#DECBB5]">
                      Stage {st.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#B8864B] text-white' : 'bg-[#FAF5EC] text-[#8C5E28]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {st.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DECBB5]/60">
                  <div className="text-[11px] font-semibold text-[#8C5E28] flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span><strong>Output:</strong> {st.deliverable}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Advisory Note */}
        <div className="rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0F172A] font-heading mb-1">
                Estimated Processing Timelines
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Standard digital commercial, service, and e-commerce licences in Ajman Free Zone are typically issued within 24 to 48 working hours. Industrial entities, warehouses, and activities requiring external ministerial clearances take approximately 7 to 10 working days.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation('Ajman Setup Process Assistance')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs whitespace-nowrap cursor-pointer shrink-0"
          >
            Start Setup Process
          </button>
        </div>

      </div>
    </section>
  );
};
