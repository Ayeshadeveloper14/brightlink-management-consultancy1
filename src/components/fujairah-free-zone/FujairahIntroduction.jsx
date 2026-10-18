import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Compass, 
  Scale, 
  Anchor, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  MapPin,
  Layers,
  ArrowRight
} from 'lucide-react';

export const FujairahIntroduction = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const keyDifferentiators = [
    {
      title: 'Strategic Indian Ocean Seaboard',
      description: 'Fujairah is the only UAE emirate with a coastline exclusively on the Gulf of Oman and Indian Ocean. Situated completely outside the Strait of Hormuz, shipping routes bypass regional chokepoints and access direct maritime corridors to South Asia, East Africa, and the Far East.',
      icon: Anchor
    },
    {
      title: 'Tri-Modal Logistics Infrastructure',
      description: 'Direct adjacency to the Port of Fujairah (the world’s second-largest bunkering hub) is paired with proximity to Fujairah International Airport and high-speed highway corridors connecting seamlessly to Dubai, Sharjah, and Abu Dhabi.',
      icon: Compass
    },
    {
      title: 'Custom Industrial & Commercial Leases',
      description: 'Unlike service-only free zones, Fujairah Free Zone Authority accommodates heavy and light industrial manufacturing, expansive bonded warehousing, oilfield engineering services, bulk commodity distribution, and open land development.',
      icon: Building2
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Layers className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>JURISDICTION ASSESSMENT & STRATEGIC OVERVIEW</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Understanding Fujairah Free Zone (FFZA)
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Established under Emiri Decree No. 6 of 1987 by His Highness the Ruler of Fujairah, the Fujairah Free Zone Authority (FFZA) serves as an international commercial, industrial, and maritime trade enclave designed to foster foreign direct investment on the UAE’s eastern seaboard.
          </p>
        </div>

        {/* 3 Pillar Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyDifferentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-7 rounded-2xl bg-[#FCFAF8] border border-[#E6D7C3] hover:border-[#B8864B] transition-all shadow-xs flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* In-Depth Free Zone vs Mainland & Authority Clarity Matrix */}
        <div className="rounded-2xl border border-[#DECBB5] bg-[#FAF8F5] p-6 sm:p-8 lg:p-10 space-y-8">
          
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
              Jurisdiction Distinction: Free Zone vs. UAE Mainland
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Choosing the right legal jurisdiction is essential. A company registered with Fujairah Free Zone operates under independent authority regulations, distinct from the Fujairah Department of Economic Development (Mainland DED).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Free Zone Box */}
            <div className="p-6 rounded-xl bg-white border border-[#DECBB5] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F1E8DC]">
                <h4 className="text-base font-bold text-[#8C5E28] font-heading flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#B8864B]" />
                  Fujairah Free Zone Company (FFZA)
                </h4>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]">
                  Enclave Structure
                </span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>100% Foreign Ownership:</strong> Full international ownership without mandatory UAE national shareholding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Customs Duty Exemption:</strong> 0% customs tariffs on imported goods stored, processed, or re-exported through the free zone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Dedicated Authority Services:</strong> One-stop-shop for licensing, visas, building permits, and environmental approvals directly from FFZA.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Operating Scope:</strong> Transact freely inside the zone and across international markets; mainland sales require a local distributor, commercial agent, or branch permit.</span>
                </li>
              </ul>
            </div>

            {/* Mainland Box */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <h4 className="text-base font-bold text-[#0F172A] font-heading flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#64748B]" />
                  UAE Mainland Entity (DED)
                </h4>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-neutral-100 text-[#475569]">
                  Onshore Structure
                </span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                  <span><strong>Direct Domestic Retail & Services:</strong> Authorized to deliver services and sell goods directly to local consumers across all 7 emirates without an intermediary.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                  <span><strong>Government Tenders:</strong> Eligible to bid directly on federal, municipal, and state-backed procurement contracts onshore.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                  <span><strong>Onshore Premises:</strong> Physical tenancy (Ejari) must be secured in mainland commercial districts outside the free zone boundary.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                  <span><strong>Standard Customs & VAT:</strong> Standard customs tariffs (typically 5%) apply upon entry of goods into UAE mainland territory.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Authority Distinction Notice: FFZA vs Creative City */}
          <div className="p-5 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-start gap-3.5 text-xs sm:text-sm text-[#6D4518]">
            <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-[#8C5E28]">
                Authority Clarity: Fujairah Free Zone Authority (FFZA) vs. Fujairah Creative City
              </p>
              <p className="text-[#6D4518] leading-relaxed">
                This page specifically covers <strong>Fujairah Free Zone Authority (FFZA)</strong>, established in 1987 adjacent to Port of Fujairah, which licenses trading, warehousing, maritime, industrial manufacturing, logistics, and professional consultancy. It is separate from <em>Fujairah Creative City Free Zone</em>, which primarily focuses on digital media, entertainment, freelancers, and creative publishing. Brightlink assists clients with both jurisdictions according to operational requirements.
              </p>
            </div>
          </div>

          {/* Activity Impact Note */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#DECBB5]">
            <p className="text-xs text-[#64748B]">
              Your choice of business activity determines licensing fees, required external approvals, warehouse space specifications, and visa quotas.
            </p>
            <button
              type="button"
              onClick={() => onOpenConsultation('Fujairah Activity Assessment')}
              className="px-4 py-2 rounded-lg bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs font-bold whitespace-nowrap cursor-pointer transition-colors"
            >
              Verify Your Business Activity
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
