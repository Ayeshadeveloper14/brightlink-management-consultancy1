import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Landmark, 
  Coins, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  FileCheck2,
  Lock,
  TrendingUp,
  CreditCard
} from 'lucide-react';

export const RakBankingSupport = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const bankingPillars = [
    {
      title: 'Institutional Pre-Screening',
      desc: 'We match your company’s expected commercial flows, geographic counterparties, and turnover projections with the most suitable UAE or international banking partner.'
    },
    {
      title: 'Commercial Business Profile Dossier',
      desc: 'Banks scrutinize offshore entities rigorously. We draft institutional-grade business profiles outlining suppliers, clients, contracts, and flow of funds to secure fast compliance approval.'
    },
    {
      title: 'Multi-Currency Account Capability',
      desc: 'Operate active treasury lines in AED, USD, EUR, GBP, and other major currencies for friction-free global cross-border transactions and settlements.'
    },
    {
      title: 'International & Digital Banking Alternatives',
      desc: 'Beyond traditional tier-1 UAE banks, we connect your RAK ICC entity with leading international corporate fintech platforms and Swiss/European private banking institutions.'
    }
  ];

  const banksList = [
    { name: 'Emirates NBD', type: 'Tier 1 Commercial Banking' },
    { name: 'Mashreq NeoBiz', type: 'Digital SME & Trade Accounts' },
    { name: 'Wio Bank', type: 'Digital Corporate Multi-Currency' },
    { name: 'Abu Dhabi Commercial Bank (ADCB)', type: 'Corporate Wealth & Business' },
    { name: 'First Abu Dhabi Bank (FAB)', type: 'Enterprise Institutional Banking' },
    { name: 'International Digital Platforms', type: 'Global Treasury & Cross-Border' }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Landmark className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FINANCIAL INFRASTRUCTURE & ONBOARDING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Corporate Banking & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Treasury Solutions</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Opening a bank account for an offshore entity is often considered the most demanding stage of the setup. Brightlink demystifies the process with proactive compliance preparation and direct banker introductions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Advisory Services */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#0F172A] font-heading">
                Structured Bank Account Assistance for RAK ICC
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Because offshore entities do not maintain physical premises or resident staff in the UAE, traditional bank compliance units evaluate applications on substance, verifiable counterparties, and beneficial owner credibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {bankingPillars.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FCFAF8] border border-[#E6D7C3] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                    <h4 className="text-xs font-bold text-[#0F172A]">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('RAK ICC Corporate Banking Consultation')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-sm"
              >
                <span>Assess Banking Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <span className="text-xs text-[#64748B] font-medium">
                Compliant with UAE Central Bank KYC rules
              </span>
            </div>
          </div>

          {/* Right Column: Supported Banking Ecosystem */}
          <div className="lg:col-span-5 bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#DECBB5] shadow-md space-y-6">
            <div className="flex items-center justify-between border-b border-[#E6D7C3] pb-4">
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-5 h-5 text-[#B8864B]" />
                <span className="text-sm font-bold text-[#0F172A] font-heading">
                  Banking Ecosystem & Partners
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#8C5E28]">
                Multi-Currency
              </span>
            </div>

            <div className="space-y-3">
              {banksList.map((bank, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E6D7C3] shadow-2xs hover:border-[#B8864B] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] font-bold text-xs">
                      {bank.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0F172A]">{bank.name}</div>
                      <div className="text-[10px] text-[#64748B]">{bank.type}</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#DECBB5] text-xs text-[#475569] leading-relaxed flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#B8864B] shrink-0" />
              <span>Full compliance dossier compilation & banker interview prep included.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RakBankingSupport;
