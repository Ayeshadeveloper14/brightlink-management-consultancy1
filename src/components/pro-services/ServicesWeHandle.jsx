import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CreditCard, 
  UserCheck, 
  FileCheck2, 
  RefreshCw, 
  UserX, 
  Fingerprint, 
  FileSignature, 
  Settings, 
  Building2, 
  FolderArchive, 
  Stamp, 
  UsersRound,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const ServicesWeHandle = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 'labour-card',
      category: 'workforce',
      title: 'Labour Card Processing',
      description: 'Issuance, renewal, and replacement of MOHRE electronic labor cards and establishment worker registries.',
      icon: CreditCard,
      tag: 'MOHRE'
    },
    {
      id: 'employment-visa',
      category: 'visa',
      title: 'Employment Visa Processing',
      description: 'End-to-end turnkey work residency filing from entry permits to status change, medical fitness, and residency stamping.',
      icon: UserCheck,
      tag: 'GDRFA / ICP'
    },
    {
      id: 'work-permit',
      category: 'workforce',
      title: 'Work Permit Applications',
      description: 'New electronic work permits, quota expansions, temporary permits, mission permits, and part-time staff clearance.',
      icon: FileCheck2,
      tag: 'Quota & Labour'
    },
    {
      id: 'visa-renewals',
      category: 'visa',
      title: 'Visa Renewals',
      description: 'Proactive renewal management for company employees and partners to avert late renewal fines and grace period lapses.',
      icon: RefreshCw,
      tag: 'Timely Stamping'
    },
    {
      id: 'visa-cancellation',
      category: 'visa',
      title: 'Visa Cancellation',
      description: 'Official labour contract terminations, end-of-service settlement typing, and GDRFA departure or status modification clearances.',
      icon: UserX,
      tag: 'Grace Period'
    },
    {
      id: 'emirates-id',
      category: 'identity',
      title: 'Emirates ID Assistance',
      description: 'VIP biometrics appointments, express typing, status tracking, and direct courier dispatch for company staff.',
      icon: Fingerprint,
      tag: 'Federal ICP'
    },
    {
      id: 'labour-contract',
      category: 'workforce',
      title: 'Labour Contract Services',
      description: 'Bilingual standard MOHRE employment contracts, salary amendments, position changes, and dispute settlements.',
      icon: FileSignature,
      tag: 'Bilingual Law'
    },
    {
      id: 'mohre-support',
      category: 'compliance',
      title: 'MOHRE Support',
      description: 'Wage Protection System (WPS) compliance audits, establishment card renewals, and labour quota unblocking.',
      icon: Settings,
      tag: 'WPS & Quotas'
    },
    {
      id: 'immigration-services',
      category: 'compliance',
      title: 'Immigration Services',
      description: 'Amer Center and GDRFA portal typing, company immigration file updates, fine reduction petitions, and absconding removals.',
      icon: Building2,
      tag: 'Amer & GDRFA'
    },
    {
      id: 'company-docs',
      category: 'corporate',
      title: 'Company Documentation',
      description: 'Memorandum of Association (MOA) amendments, corporate share transfers, power of attorney (POA), and board resolutions.',
      icon: FolderArchive,
      tag: 'DED & Courts'
    },
    {
      id: 'gov-approvals',
      category: 'corporate',
      title: 'Government Approvals',
      description: 'External approvals from Dubai Municipality, Civil Defence, RTA, DHA, and custom regulatory bodies across all Emirates.',
      icon: Stamp,
      tag: 'Special Permits'
    },
    {
      id: 'onboarding-support',
      category: 'workforce',
      title: 'Employee Onboarding Support',
      description: 'Turnkey medical fitness escort, bank account opening paperwork, Ejari assistance, and legal orientation for new hires.',
      icon: UsersRound,
      tag: 'HR Concierge'
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All 12 Services' },
    { id: 'workforce', label: 'Work Permits & Labour' },
    { id: 'visa', label: 'Visa & Residency' },
    { id: 'compliance', label: 'MOHRE & Compliance' },
    { id: 'corporate', label: 'Corporate Legal' }
  ];

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(s => s.category === activeFilter);

  const handleConsultService = (title) => {
    if (onOpenConsultation) {
      onOpenConsultation(`PRO Service: ${title}`);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Comprehensive Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Corporate PRO Services We Handle
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            From single employee work visas to multi-hundred enterprise quota restructuring, our accredited PROs execute all documentation with precision and speed.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#B8864B] text-white shadow-md shadow-[#B8864B]/20'
                  : 'bg-white text-[#555555] hover:bg-[#F5F1EB] hover:text-[#222222] border border-[#EFEAE2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 12 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4D8] hover:border-[#B8864B] transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.9]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EFEAE2] text-[#B8864B]">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#222222] font-heading mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5EFE6]">
                  <button
                    type="button"
                    onClick={() => handleConsultService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#FAF5EC] text-[#976A36] hover:bg-[#B8864B] hover:text-white transition-all flex items-center justify-between cursor-pointer"
                  >
                    <span>Inquire on {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
