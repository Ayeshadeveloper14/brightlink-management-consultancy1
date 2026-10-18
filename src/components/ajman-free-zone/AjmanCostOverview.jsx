import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  Coins, 
  Building2, 
  Users, 
  FileCheck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';

export const AjmanCostOverview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const costDrivers = [
    {
      icon: FileCheck,
      title: 'Licence Category & Activities',
      desc: 'Commercial, services, and e-commerce licences have different fee schedules compared to general trading or heavy industrial manufacturing licences. Adding multiple activity codes across distinct sectors may incur incremental authority activity fees.'
    },
    {
      icon: Building2,
      title: 'Workspace & Facility Allocation',
      desc: 'Costs scale based on your operational premises—from cost-effective Smart Desks and shared flexi-desks in AFZ business centres to private executive suites, dedicated commercial offices, or heavy-duty industrial warehouses.'
    },
    {
      icon: Users,
      title: 'Visa Quota & Immigration Dossier',
      desc: 'Each UAE residence visa allocation requires authority quota registration, corporate Establishment Card issuance, entry permit, in-country status change (if applicable), medical examination, and Emirates ID biometric processing.'
    },
    {
      icon: Coins,
      title: 'Corporate Legal Structure',
      desc: 'Establishing a single-shareholder FZE or multi-shareholder FZC involves standard registration tariffs. Setting up a Branch of a Foreign Company involves parent company document verification and legal translation fees.'
    },
    {
      icon: ShieldCheck,
      title: 'External Approvals & Municipal Clearances',
      desc: 'Regulated activities (e.g. food handling, pharmaceuticals, chemical manufacturing, telecommunications) require external NOCs and approvals from federal UAE ministries and Ajman municipal departments.'
    },
    {
      icon: CalendarCheck,
      title: 'Annual Licence Renewal & Maintenance',
      desc: 'Trade licences and registered facility leases must be renewed on an annual basis. Ongoing compliance costs also include annual corporate tax filings, accounting records maintenance, and statutory audit submissions where mandated.'
    }
  ];

  const packageIllustrations = [
    {
      name: 'Smart Desk / Zero-Visa Package',
      ideal: 'Digital solopreneurs, remote consultants & e-commerce startups requiring no local residency visas.',
      features: [
        'Ajman Free Zone Trade Licence (1 Year)',
        'Certificate of Incorporation & Chamber of Commerce',
        'Smart Desk facility agreement in AFZ business centre',
        'Authority digital portal access',
        'Zero visa quota allocation (lowest setup cost)'
      ],
      badge: 'Starter Tier'
    },
    {
      name: 'Business Centre Executive Package',
      ideal: 'Active trading, advisory, and commercial businesses requiring 1 to 3 UAE residence visas.',
      features: [
        'Commercial or Services Trade Licence (1 Year)',
        'Registered Flexi-Desk or Shared Executive Workspace',
        'Corporate Establishment Card registration',
        '1 to 3 UAE Residence Visa allocations',
        'Company seal, MOA execution & bank account dossier'
      ],
      badge: 'Popular Tier'
    },
    {
      name: 'Dedicated Office & Warehouse Package',
      ideal: 'Industrial operators, logistics hubs, bulk traders & companies employing on-site operational staff.',
      features: [
        'Industrial, Manufacturing or General Trading Licence',
        'Dedicated physical office or pre-built industrial warehouse',
        'Customized visa quota tailored to square footage',
        'Direct Ajman Port customs code registration',
        'High electrical load connectivity and waste management support'
      ],
      badge: 'Enterprise Tier'
    }
  ];

  return (
    <section id="ajman-cost" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Calculator className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FINANCIAL TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Ajman Free Zone Business Setup Cost
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Company formation fees in Ajman Free Zone are determined by your chosen licence category, operational activities, workspace arrangement, and required residence visas.
          </p>
        </div>

        {/* 6 Key Cost Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {costDrivers.map((cd, index) => {
            const Icon = cd.icon;
            return (
              <motion.div
                key={cd.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {cd.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {cd.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#DECBB5]/60 text-[11px] font-semibold text-[#8C5E28] flex items-center gap-1.5">
                  <Coins className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Itemized in Official Proposal</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicative Package Tier Illustrations */}
        <div className="mb-14">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-2xl font-bold text-[#0F172A] font-heading">
              Setup Package Architectures
            </h3>
            <p className="text-sm text-[#475569] max-w-2xl mx-auto">
              Review how packages are structured based on commercial facility needs and residency visa allocations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packageIllustrations.map((pkg, idx) => (
              <div
                key={pkg.name}
                className="bg-white rounded-3xl p-8 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] bg-[#FAF5EC] px-3 py-1 rounded-full border border-[#DECBB5] font-heading">
                      {pkg.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">AFZ Package</span>
                  </div>

                  <h4 className="text-xl font-bold text-[#0F172A] font-heading mb-2">
                    {pkg.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                    {pkg.ideal}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#F1E8DC] mb-6">
                    <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-heading block">
                      Package Inclusions:
                    </span>
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#475569] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(`Cost Quote: ${pkg.name}`)}
                  className="w-full py-3 rounded-xl bg-[#FAF7F0] hover:bg-[#B8864B] text-[#8C5E28] hover:text-white border border-[#DECBB5] hover:border-transparent font-bold text-xs font-heading transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Itemized Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Quote Banner */}
        <div className="rounded-3xl bg-[#0F172A] p-8 sm:p-10 text-white relative overflow-hidden border border-[#B8864B]/30 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                Zero Hidden Charges Guarantee
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-heading">
                Get an Exact, Transparent Price Quote for Your Business
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Brightlink generates verified proposals reflecting official authority tariffs, workspace rents, establishment registration, and visa processing without surprise markups.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('Ajman Free Zone Cost Calculation Request')}
                className="px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Request Custom Quote
              </button>
              <a
                href="https://wa.me/971566556645?text=Hello%2C%20please%20send%20me%20a%20cost%20breakdown%20for%20Ajman%20Free%20Zone%20setup."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
