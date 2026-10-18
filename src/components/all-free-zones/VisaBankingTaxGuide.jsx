import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Landmark, 
  Scale, 
  Store, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const VisaBankingTaxGuide = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const regulatoryGuides = [
    {
      title: 'UAE Residence Visas & Immigration',
      badge: 'Immigration & Quotas',
      icon: Users,
      summary: 'Company formation in a UAE free zone provides the legal foundation for sponsoring 2-year renewable investor, partner, and employee residence visas.',
      keyPoints: [
        'Visa quota is tied to the physical facility package (flexi-desk vs dedicated office vs warehouse)',
        'Requires activating an Establishment Card with ICP or GDRFA',
        'Mandatory VIP medical fitness testing and Emirates ID biometric registration',
        'Company setup does NOT automatically guarantee visa approval; all applications undergo federal security clearance'
      ]
    },
    {
      title: 'UAE Corporate Banking Due Diligence',
      badge: 'Banking & KYC Standards',
      icon: Landmark,
      summary: 'UAE Central Bank regulations require commercial banks to conduct thorough Know-Your-Customer (KYC) and Anti-Money Laundering (AML) assessments.',
      keyPoints: [
        'Banks require commercial licences, MOA, share certificates, and registered tenancy leases',
        'Must provide 6-month bank statements proving source of funds and legitimate wealth origin',
        'Comprehensive business model description, client invoices, and supplier contracts required',
        'Banks evaluate accounts independently based on risk profile; approval cannot be guaranteed by any consultant'
      ]
    },
    {
      title: 'Corporate Tax (0% vs 9%) & VAT',
      badge: 'Federal Tax Authority (FTA)',
      desc: 'Free zone entities are subject to UAE Federal Corporate Tax under Federal Decree-Law No. 47 of 2022.',
      icon: Scale,
      keyPoints: [
        'A 0% Corporate Tax rate applies strictly to Qualifying Income for Qualifying Free Zone Persons (QFZP)',
        'QFZP status requires maintaining adequate economic substance in the UAE and audited financial statements',
        'Taxable non-qualifying income above AED 375,000 is taxed at the standard 9% rate',
        'Mandatory Corporate Tax registration with the FTA applies to all active free zone companies',
        'Standard 5% VAT applies to local taxable supplies once turnover exceeds AED 375,000'
      ]
    },
    {
      title: 'Trading on the UAE Mainland',
      badge: 'Territorial Scope',
      icon: Store,
      summary: 'Free zone licences are territorially distinct from the UAE mainland economic departments (DET/DED).',
      keyPoints: [
        'Free zone firms can freely trade with other free zone companies and international global clients',
        'Delivering physical goods to mainland consumers requires customs declaration, 5% duty, and a local mainland distributor or branch',
        'Corporate B2B consulting and professional services can be rendered remotely to mainland corporate clients',
        'Establishing a licensed mainland branch office allows direct commercial storefront operations'
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <BookOpen className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STATUTORY & OPERATIONAL COMPLIANCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAE Visas, Corporate Banking, Tax & Mainland Trade Rules
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Operating smoothly in the UAE requires clear knowledge of federal immigration policies, banking compliance, corporate tax mandates, and cross-border commercial boundaries.
          </p>
        </div>

        {/* 4 Regulatory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regulatoryGuides.map((guide, idx) => {
            const Icon = guide.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-7 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                          {guide.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B]">
                          {guide.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {guide.summary}
                  </p>

                  <ul className="space-y-2 border-t border-[#F1EAE0] pt-3">
                    {guide.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1EAE0] text-[11px] text-[#64748B] flex items-center justify-between">
                  <span>Federal Regulatory Standard</span>
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Advisory Footnote */}
        <div className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#8C5E28] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#475569] leading-relaxed space-y-1">
            <strong className="text-[#1E293B] block">
              Professional Verification Notice:
            </strong>
            <span>
              UAE fiscal and commercial laws are subject to ongoing federal legislative updates. Businesses should regularly evaluate their Qualifying Free Zone Person (QFZP) status, economic substance filings, and mainland trade arrangements with qualified tax and legal practitioners. Brightlink coordinates directly with accredited tax agents and audit firms to keep your corporate vehicle in full compliance.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
