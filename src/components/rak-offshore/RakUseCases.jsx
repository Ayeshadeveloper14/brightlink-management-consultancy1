import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe2, 
  Landmark, 
  ShieldCheck, 
  Layers, 
  FileCheck2, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Coins, 
  Sparkles,
  Lock,
  PieChart
} from 'lucide-react';

export const RakUseCases = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('property-holding');

  const useCases = [
    {
      id: 'property-holding',
      title: 'Dubai Real Estate & Asset Holding',
      icon: Building2,
      tag: 'DLD MoU Recognized',
      summary: 'Direct ownership of freehold properties across Dubai with robust inheritance shielding and corporate succession.',
      details: [
        'Officially sanctioned by Dubai Land Department (DLD) to register title deeds directly under RAK ICC company names.',
        'Prevents probate court delays and complex statutory inheritance freezes on personal titles in event of death.',
        'Enables co-investment between multiple family members or institutional partners under a structured corporate charter.',
        'Permits direct transfer of property ownership through private share transfer without standard land transfer taxes (subject to DLD notification protocols).'
      ],
      idealFor: 'International real estate investors, private family offices, and foreign buyers holding multiple UAE residential or commercial properties.'
    },
    {
      id: 'corporate-holding',
      title: 'Corporate Holding & Group Subsidiaries',
      icon: Layers,
      tag: 'Multi-Tier Structures',
      summary: 'Centralize equity holdings, dividends, and governance across onshore UAE entities and global operating businesses.',
      details: [
        'Acts as the parent holding company for UAE Mainland LLCs, UAE Free Zone entities, or overseas operational firms.',
        'Shields parent investors and holding assets from operational liabilities of individual operating commercial subsidiaries.',
        'Facilitates corporate restructuring, venture funding, private equity rounds, and joint-venture governance models.',
        'Consolidates multinational ownership into a singular, cost-efficient UAE registry jurisdiction.'
      ],
      idealFor: 'Entrepreneurs operating multiple regional entities, private equity syndicates, and corporate groups scaling internationally.'
    },
    {
      id: 'international-trade',
      title: 'International Trade & Cross-Border Billing',
      icon: Globe2,
      tag: 'Global Commercial Reach',
      summary: 'Conduct cross-border international trade, merchant transactions, and consulting operations outside the UAE borders.',
      details: [
        'Facilitates buying and selling physical commodities, manufactured goods, or digital services between third-party nations.',
        'Supports multi-currency business banking transactions in AED, USD, EUR, GBP, and major world reserve currencies.',
        'Zero UAE domestic customs duty incurred when goods do not physically enter or touch the UAE mainland borders.',
        'Transparent international invoicing recognized by corporate counterparties worldwide.'
      ],
      idealFor: 'Global merchants, drop-shippers, software exporters, maritime shipping agents, and cross-border consulting firms.'
    },
    {
      id: 'ip-holding',
      title: 'Intellectual Property (IP) & Patent Custody',
      icon: Lock,
      tag: 'Intangible Asset Protection',
      summary: 'House proprietary software code, brand trademarks, copyrighted assets, patents, and royalty-generating rights.',
      details: [
        'Ring-fences critical proprietary intellectual property away from everyday operating business risks and commercial lawsuits.',
        'Enables licensing and royalty agreements with domestic or overseas distribution companies on standardized commercial terms.',
        'Protects enterprise valuations ahead of potential mergers, acquisitions, or institutional liquidity events.',
        'Maintains strong contractual enforceability governed by Common Law standards.'
      ],
      idealFor: 'Tech founders, SaaS enterprises, pharmaceutical inventors, franchise owners, and media/creative agencies.'
    },
    {
      id: 'wealth-succession',
      title: 'Wealth Management & Succession Planning',
      icon: ShieldCheck,
      tag: 'Estate & Legacy Protection',
      summary: 'Formulate bespoke shareholding classes, succession bylaws, and generational asset transfer protocols.',
      details: [
        'Supports customized Articles of Association with varying share classes: voting, non-voting, preference, and redeemable shares.',
        'Allows predetermined succession rules to bypass default Sharia court probate distribution for non-Muslim expatriates.',
        'Can integrate seamlessly with ADGM or DIFC foundation or trust wrappers for supreme multi-generational legacy security.',
        'Confidential share registers safeguard family wealth profiles from public curiosity and commercial solicitations.'
      ],
      idealFor: 'High-net-worth individuals (HNWIs), expatriate families residing in the UAE or abroad, and multigenerational family enterprises.'
    },
    {
      id: 'spv-joint-ventures',
      title: 'Special Purpose Vehicles (SPVs) & JVs',
      icon: PieChart,
      tag: 'Project Finance & SPVs',
      summary: 'Isolate specific venture risks, ring-fence capital projects, or structure cross-border joint ventures.',
      details: [
        'Creation of single-purpose legal wrappers for financing discrete infrastructure, tech, or real estate developments.',
        'Clean balance-sheet separation shielding parent company assets from project debt or counterparty default.',
        'Tailored voting agreements, drag-along, tag-along, and pre-emption rights embedded directly into corporate constitutional documents.',
        'Fast dissolution and liquidation protocols once project lifecycle or investment exit is concluded.'
      ],
      idealFor: 'Syndicate investors, real estate developers, co-founders entering joint ventures, and venture capital syndicates.'
    }
  ];

  const currentCase = useCases.find((c) => c.id === activeTab) || useCases[0];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STRATEGIC STRUCTURING CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Primary Use Cases for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">RAK Offshore</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            From safeguarding prime Dubai real estate portfolios to managing cross-border commercial invoicing and IP rights, discover how international entities leverage the RAK ICC corporate chassis.
          </p>
        </div>

        {/* Tab Navigation Buttons */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {useCases.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer select-none ${
                  isActive 
                    ? 'bg-[#0F172A] text-white shadow-md border border-[#0F172A]' 
                    : 'bg-[#FAF7F0] text-[#475569] hover:bg-[#F3EDE2] hover:text-[#0F172A] border border-[#DECBB5]/70'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F5D7A1]' : 'text-[#8C5E28]'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#FAF7F0] via-[#FFFFFF] to-[#FAF5EC] rounded-3xl border border-[#DECBB5] p-6 sm:p-10 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Content Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
                      <span>{currentCase.tag}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading">
                      {currentCase.title}
                    </h3>

                    <p className="text-sm text-[#475569] leading-relaxed">
                      {currentCase.summary}
                    </p>
                  </div>

                  {/* Operational Bullet Points */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                      Structural & Operational Mechanics:
                    </div>
                    {currentCase.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Target Audience Profile */}
                  <div className="p-4 rounded-xl bg-white border border-[#E6D7C3] shadow-2xs">
                    <span className="text-xs font-bold text-[#8C5E28] block mb-1">
                      Who uses this structure?
                    </span>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {currentCase.idealFor}
                    </p>
                  </div>

                  {/* Consultation Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenConsultation && onOpenConsultation(`RAK Offshore - ${currentCase.title}`)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-sm"
                    >
                      <span>Inquire About This Structure</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual / Graphic Column */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-[#DECBB5] shadow-md bg-white">
                    <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-100">
                      <img 
                        src="/images/rak_asset_holding.jpg" 
                        alt={currentCase.title}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.currentTarget.src = '/images/process_bg_skyline_1790959277672.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-[#0F172A]/70 backdrop-blur-md border border-white/10">
                        <div className="flex items-center justify-between text-xs font-bold text-[#F5D7A1] mb-1">
                          <span>Institutional Security</span>
                          <span>Common Law Registry</span>
                        </div>
                        <p className="text-[11px] text-neutral-200">
                          Complete statutory flexibility with no paid-up capital requirement.
                        </p>
                      </div>
                    </div>

                    {/* Snapshot Statistics */}
                    <div className="p-4 bg-white grid grid-cols-2 gap-3 divide-x divide-[#F5F1EB]">
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">Foreign Ownership</span>
                        <div className="text-base font-extrabold text-[#0F172A]">100% Autonomy</div>
                      </div>
                      <div className="space-y-0.5 pl-3">
                        <span className="text-[10px] text-[#64748B] uppercase font-bold tracking-wider">Physical Office</span>
                        <div className="text-base font-extrabold text-[#B8864B]">Zero Mandate</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default RakUseCases;
