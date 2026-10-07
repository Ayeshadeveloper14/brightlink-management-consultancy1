import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, MapPin, ArrowRight, PhoneCall, ShieldCheck, Users, Briefcase, FileSearch, CheckCircle2 } from 'lucide-react';

export const TrusteeChecklistSection = () => {
  const checklistItems = [
    {
      number: '01',
      title: 'Buyer & seller document review',
      description: 'Passport, Emirates ID, visa, POA, company docs, ownership proof.',
      icon: FileSearch
    },
    {
      number: '02',
      title: 'Transaction type mapping',
      description: 'Sale transfer, gift transfer, mortgage release, title deed support, valuation.',
      icon: MapPin
    },
    {
      number: '03',
      title: 'Clear next step',
      description: "We tell you what's missing before you waste a trustee appointment.",
      icon: ArrowRight
    }
  ];

  const audienceStrips = [
    {
      label: 'Useful for',
      title: 'Buyers & Sellers',
      icon: Users
    },
    {
      label: 'Support for',
      title: 'Agents & Brokers',
      icon: Briefcase
    },
    {
      label: 'Documents',
      title: 'Checked Before Visit',
      icon: FileCheck
    },
    {
      label: 'Goal',
      title: 'Smooth Transfer',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header & Urgent Help Callout Grid */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
                DLD
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight">
              Trustee Checklist
            </h2>
          </div>

          {/* Urgent Help Callout Card */}
          <div className="w-full lg:w-auto">
            <div className="bg-white rounded-2xl border border-[#B8864B]/30 shadow-sm p-4 sm:p-5 flex items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#B8864B] to-[#976A36] text-white flex items-center justify-center shrink-0 shadow-sm shadow-[#B8864B]/30">
                  <PhoneCall className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block">
                    Need urgent help?
                  </span>
                  <a
                    href="tel:8003627"
                    className="text-lg sm:text-xl font-extrabold text-[#222222] hover:text-[#B8864B] transition-colors"
                  >
                    800 DOCS (3627)
                  </a>
                </div>
              </div>

              <a
                href="tel:8003627"
                className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#FAF5EC] hover:bg-[#B8864B] text-[#B8864B] hover:text-white text-xs font-bold transition-all border border-[#E6D7C3]"
              >
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Numbered Checklist Cards: 01, 02, 03 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {checklistItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#B8864B]/35 group-hover:text-[#B8864B] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] mb-2 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Audience / Benefits Strip */}
        <div className="bg-white rounded-2xl border border-[#EFEAE2] shadow-xs p-4 sm:p-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
            {audienceStrips.map((strip, index) => {
              const StripIcon = strip.icon;
              return (
                <div
                  key={strip.label}
                  className={`flex items-center gap-3.5 ${index !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 border border-[#E6D7C3]/80">
                    <StripIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#976A36] uppercase tracking-wider block">
                      {strip.label}
                    </span>
                    <span className="text-sm font-bold text-[#222222]">
                      {strip.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
