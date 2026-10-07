import React from 'react';
import { motion } from 'framer-motion';
import { Building2, FileText, Gift, Landmark, CheckSquare, Calculator, ArrowUpRight, MessageCircle } from 'lucide-react';

export const WhatWeHandleSection = ({ onOpenConsultation }) => {
  const services = [
    {
      id: 'property-sale-transfer',
      title: 'Property Sale Transfer',
      description: 'Support for buyer and seller document preparation, transfer file review, NOC coordination, appointment readiness and transaction guidance.',
      icon: Building2
    },
    {
      id: 'title-deed-assistance',
      title: 'Title Deed Assistance',
      description: 'Guidance for title deed issuance, ownership record support, correction follow-ups and document collection coordination.',
      icon: FileText
    },
    {
      id: 'gift-transfer-support',
      title: 'Gift Transfer Support',
      description: 'Assistance for family gift transfer requirements, relationship documents, identity papers, POA checks and transaction preparation.',
      icon: Gift
    },
    {
      id: 'mortgage-release-registration',
      title: 'Mortgage Release & Registration',
      description: 'Support with bank NOC, mortgage release documents, liability letter checks and required papers for trustee transaction readiness.',
      icon: Landmark
    },
    {
      id: 'noc-developer-coordination',
      title: 'NOC & Developer Coordination',
      description: 'Help with developer NOC requirements, seller-buyer paperwork, clearance checks and transaction sequencing.',
      icon: CheckSquare
    },
    {
      id: 'valuation-supporting-documents',
      title: 'Valuation & Supporting Documents',
      description: 'Assistance for valuation-related documentation, property value proof and supporting documents for visa or ownership requirements.',
      icon: Calculator
    }
  ];

  const handleInquiry = (serviceTitle) => {
    const query = encodeURIComponent(`Hello Brightlink, I am inquiring regarding DLD Trustee Service: ${serviceTitle}. Can you help me prepare the documents?`);
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section id="what-we-handle" className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading & Intro */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Core Offerings
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            What we handle
          </h2>
          
          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Property trustee services support in Dubai.
          </p>
          
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Trustee transactions are document-sensitive — one missing paper can delay the entire deal. We prepare the file properly before you go for the transaction.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FCFAF8] rounded-2xl p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shadow-xs group-hover:bg-[#B8864B] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <button
                      onClick={() => handleInquiry(item.title)}
                      title="Inquire via WhatsApp"
                      className="w-9 h-9 rounded-full bg-white border border-[#EFEAE2] text-neutral-400 hover:text-[#25D366] hover:border-[#25D366]/40 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFEAE2]/80 flex items-center justify-between">
                  <button
                    onClick={() => handleInquiry(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire file check</span>
                  </button>

                  <span className="text-[11px] text-neutral-400 font-medium">
                    Pre-visit audit
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
