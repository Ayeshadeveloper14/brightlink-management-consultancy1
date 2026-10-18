import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Landmark, 
  ShieldCheck, 
  FileCheck2, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight,
  CreditCard
} from 'lucide-react';

export const UaqBankingGuidance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const bankChecklist = [
    {
      title: 'Constitutive Corporate Records',
      desc: 'Official UAQ FTZ Commercial Trade Licence, Certificate of Incorporation, Memorandum of Association (MOA), registered tenancy lease contract, and share certificates.'
    },
    {
      title: 'Shareholder & UBO Identification',
      desc: 'Valid passport copies, Emirates IDs, residential address proofs, and comprehensive CVs for all individual shareholders and Ultimate Beneficial Owners (UBOs) holding 25%+ equity.'
    },
    {
      title: 'Detailed Business Model Narrative',
      desc: 'A coherent corporate profile describing your core products or services, target supplier network, customer geographical locations, pricing models, and operational workflows.'
    },
    {
      title: 'Source of Funds & Financial Records',
      desc: 'Recent personal or corporate bank statements (preceding 6 months) substantiating initial working capital and demonstrating legitimate origin of investment funds.'
    },
    {
      title: 'Commercial Proof & Draft Agreements',
      desc: 'Sample customer invoices, draft service agreements, letters of intent (LOI), or supplier quotations proving active commercial relationships.'
    },
    {
      title: 'Transactional Projections & Volume',
      desc: 'Realistic monthly turnover expectations, anticipated cross-border wire corridors (currencies: AED, USD, EUR), and supplier payout structures.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Landmark className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FINANCIAL INFRASTRUCTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Corporate Bank Account Guidance for UAQ Companies
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Opening a UAE corporate bank account is essential for collecting payments, disbursing supplier funds, and complying with statutory accounting rules. Learn what documentation and due diligence banks require.
          </p>
        </div>

        {/* 6 Essential Preparation Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bankChecklist.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-6 flex flex-col justify-between hover:border-[#DECBB5] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                  <h3 className="text-base font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EFEAE2] text-[11px] text-[#8C5E28] font-semibold pl-6">
                Central Bank AML/KYC Factor
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banking Institutions Overview & Realistic Caveat */}
        <div className="bg-[#FAF7F0]/40 rounded-3xl border border-[#DECBB5] p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#0F172A] font-heading">
              UAE Corporate Banking Landscape & Independent Assessment
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              UAQ FTZ entities can submit corporate account applications across traditional commercial banks (such as Emirates NBD, Mashreq, Abu Dhabi Commercial Bank, First Abu Dhabi Bank, and RAKBANK) as well as modern digital corporate neobanks (such as Wio Bank and Ruya).
            </p>
          </div>

          {/* Strict Non-Guarantee Disclaimer */}
          <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#8C5E28] shrink-0 mt-0.5" />
            <div className="text-xs text-[#475569] leading-relaxed space-y-1">
              <strong className="text-[#1E293B] block">
                Independent Bank Assessment & Non-Guarantee Disclosure
              </strong>
              <span>
                Brightlink provides professional application preparation, profile compilation, and banker liaison services. However, UAE banks are federally regulated institutions that evaluate every application independently in accordance with Central Bank AML/CFT compliance mandates and their proprietary risk appetite. We do not guarantee bank account approval, mandate a specific bank, or claim arbitrary processing timelines.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
