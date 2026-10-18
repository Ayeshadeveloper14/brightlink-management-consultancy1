import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CreditCard, 
  Users, 
  Landmark, 
  ShieldCheck, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles,
  ArrowRight,
  Clock
} from 'lucide-react';

export const RakVisaAndBanking = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const visaCategories = [
    {
      title: '2-Year Investor & Partner Visas',
      desc: 'Granted to company shareholders and foreign owners, conferring full UAE legal residency, freedom to live anywhere across the seven emirates, and tax residency certificate eligibility.'
    },
    {
      title: 'Employment Visas for Staff',
      desc: 'Seamless sponsorship for executives, managers, sales staff, and operational workers under the company’s RAKEZ Establishment Card.'
    },
    {
      title: 'Family & Dependent Sponsorship',
      desc: 'Once the primary investor or employee visa is stamped, sponsor spouse, children, and parents with complete housing and income proof.'
    }
  ];

  const bankingPartners = [
    { name: 'RAKBANK', type: 'Primary Emirate Tier-1 Bank', highlight: 'Tailored business solutions for RAKEZ entities' },
    { name: 'Emirates NBD', type: 'National Banking Leader', highlight: 'Extensive global correspondent network' },
    { name: 'Mashreq Bank', type: 'Digital & Corporate Pioneer', highlight: 'Streamlined online onboarding via Mashreq NEOBiz' },
    { name: 'Wio Bank', type: 'UAE Digital Business Neobank', highlight: 'Fast account opening with multi-currency IBANs' },
    { name: 'First Abu Dhabi Bank (FAB)', type: 'UAE Largest Corporate Bank', highlight: 'Premier institutional and trade finance' },
    { name: 'ADCB', type: 'Abu Dhabi Commercial Bank', highlight: 'Robust commercial SME banking accounts' }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <CreditCard className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>RESIDENCY & BANKING FACILITATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            RAK Free Zone Visa Processing & Corporate Banking Support
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Securing your trade licence is only half the journey. Brightlink manages your complete residency visa cycle and compiles high-compliance corporate banking dossiers to ensure reliable UAE bank account approval.
          </p>
        </div>

        {/* 2 Column Section: Visas on Left, Banking on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* UAE Residence Visas */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
                    UAE Residency Visas via RAKEZ
                  </h3>
                  <p className="text-xs text-[#8C5E28] font-semibold">
                    Fast-track investor, employee & family residency
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {visaCategories.map((vc, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-[#EFEAE2] space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                      <h4 className="text-xs font-bold text-[#1E293B]">{vc.title}</h4>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed pl-6">{vc.desc}</p>
                  </div>
                ))}
              </div>

              {/* Visa Step Highlights */}
              <div className="bg-[#FAF5EC] rounded-xl p-4 border border-[#DECBB5] space-y-2 text-xs text-[#475569]">
                <div className="font-bold text-[#8C5E28]">Brightlink End-to-End PRO Assistance:</div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Entry permit issuance: 48 to 72 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>VIP medical fitness & Emirates ID typing handled in Dubai or RAK</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EFEAE2] text-xs text-[#64748B] flex items-center justify-between">
              <span>Indefinitely renewable every 2 years</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
          </motion.div>

          {/* Corporate Banking Support */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
                    Corporate Bank Account Assistance
                  </h3>
                  <p className="text-xs text-[#8C5E28] font-semibold">
                    Comprehensive dossier preparation & bank introductions
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#475569] leading-relaxed">
                UAE banks uphold strict Central Bank KYC/AML protocols. Our banking specialists prepare your comprehensive corporate profile, customer/supplier invoices, business plan, and source of funds documentation before official submission.
              </p>

              {/* Banking Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {bankingPartners.map((bank, bIdx) => (
                  <div key={bIdx} className="bg-white rounded-xl p-3 border border-[#EFEAE2] space-y-1">
                    <div className="font-bold text-xs text-[#0F172A]">{bank.name}</div>
                    <div className="text-[10px] text-[#8C5E28] font-semibold">{bank.type}</div>
                    <div className="text-[10px] text-[#64748B]">{bank.highlight}</div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] text-xs text-[#475569]">
                <strong className="text-[#1E293B]">Banking Inclusions:</strong> Multi-currency IBAN accounts (AED, USD, EUR, GBP), debit cards, and secure online merchant payment gateway integrations.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EFEAE2] text-xs text-[#64748B] flex items-center justify-between">
              <span>Dedicated banker introductions</span>
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
