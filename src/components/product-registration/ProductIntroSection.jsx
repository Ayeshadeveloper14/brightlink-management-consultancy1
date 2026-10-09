import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Truck, 
  Store, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  ShoppingBag, 
  FileCheck2,
  Info
} from 'lucide-react';

export const ProductIntroSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const audienceGroups = [
    {
      title: 'Importers & Exporters',
      description: 'Businesses shipping consumer goods into Dubai through Jebel Ali Port, Dubai International Airport Cargo, or federal land ports requiring customs release.',
      icon: Truck
    },
    {
      title: 'Local Manufacturers',
      description: 'Factories and production facilities operating in Dubai Industrial City, Dubai South, mainland industrial zones, or UAE Free Zones packaging goods locally.',
      icon: Building2
    },
    {
      title: 'Wholesale Distributors & Retailers',
      description: 'Merchants supplying supermarkets (Carrefour, Lulu, Spinneys), pharmacies (Aster, Boots), department stores, and licensed beauty centers across the Emirates.',
      icon: Store
    },
    {
      title: 'E-Commerce Sellers (Amazon & Noon)',
      description: 'Online merchants and D2C brands. Amazon.ae and Noon.com strictly mandate valid Dubai Municipality Montaji approval certificates before un-gating categories.',
      icon: ShoppingBag
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Regulatory Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            What is Product Registration in the UAE?
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Under UAE public safety laws, consumer goods cannot be released from customs or sold on UAE shelves without prior government registration and safety clearance.
          </p>
        </motion.div>

        {/* Editorial Body */}
        <div className="space-y-10 text-neutral-800 font-sans leading-relaxed text-sm sm:text-base">
          
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            Product registration is an official regulatory safety assessment conducted by the <strong>Dubai Municipality (Public Health & Safety Department)</strong> through the smart <strong>Montaji Portal</strong>, or by the <strong>Ministry of Industry and Advanced Technology (MoIAT)</strong> through the ECAS program. Its purpose is to verify that consumer products entering the UAE market are completely free from banned chemical substances, heavy metals, harmful microbiological contamination, and false labeling claims.
          </motion.p>

          {/* Montaji Portal Spotlight Banner */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#DECBB5] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#8C6230] text-[11px] font-bold uppercase tracking-wider shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>Dubai Municipality Montaji System</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                Why Montaji Registration is Essential for Business:
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Once a product is approved in the Montaji database, it is issued an official <strong>Product Registration Certificate</strong> valid for <strong>5 years</strong>. This certificate serves as the master clearance document for Dubai Customs, shipping clearance, marketplace merchant accounts, and retail distribution across all seven Emirates.
              </p>
            </div>

            <div className="shrink-0 text-center sm:text-right border-t sm:border-t-0 sm:border-l border-[#DECBB5] pt-4 sm:pt-0 sm:pl-6 space-y-1">
              <span className="text-xs text-[#64748B] block">Standard Validity:</span>
              <span className="text-2xl font-black text-[#0F172A] font-heading">5 Years</span>
              <span className="text-[11px] text-emerald-700 font-semibold block">Renewable Online</span>
            </div>
          </motion.div>

          {/* Who Needs Product Registration: 4 Targeted Pillars */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="space-y-6 pt-4"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                Who Needs Product Registration in Dubai?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Any legal entity bringing consumer goods into the commercial circulation of the United Arab Emirates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audienceGroups.map((group, idx) => {
                const Icon = group.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={shouldReduceMotion ? {} : { y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 rounded-2xl bg-white border border-[#EBE4D8] shadow-xs hover:border-[#B8864B]/50 hover:shadow-md transition-all space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0F172A] font-heading">
                      {group.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {group.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProductIntroSection;
