import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Sparkles, 
  FlaskConical, 
  Apple, 
  Pill, 
  SprayCan, 
  Tv, 
  Baby, 
  Check, 
  Building,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ProductCategoriesSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    {
      name: 'Cosmetics & Personal Care',
      authority: 'Dubai Municipality (Montaji)',
      items: 'Skincare creams, serums, lotions, hair shampoo & conditioners, soaps, lipsticks, foundations, makeup cosmetics, oral hygiene pastes.',
      icon: Sparkles
    },
    {
      name: 'Perfumes, Oud & Fragrances',
      authority: 'Dubai Municipality / IFRA Standards',
      items: 'Eau de Parfum (EDP), Eau de Toilette (EDT), natural essential oils, traditional Arabian oud, bakhoor incense, room fragrance sprays.',
      icon: FlaskConical
    },
    {
      name: 'Health Supplements & Nutrition',
      authority: 'Dubai Municipality & MOHAP',
      items: 'Nutritional dietary supplements, multivitamins, minerals, whey proteins, herbal botanical extracts, collagen peptides, sports nutrition.',
      icon: Pill
    },
    {
      name: 'Detergents & Disinfectants',
      authority: 'DM Public Health & Safety (Biocides)',
      items: 'Hand sanitizers, surface disinfectant sprays, dishwashing liquids, laundry detergents, floor cleaners, institutional chemical cleaners.',
      icon: SprayCan
    },
    {
      name: 'Packaged Food & Beverages',
      authority: 'Food Safety Department (FIRS)',
      items: 'Packaged snacks, confectionery, juices, carbonated beverages, canned foods, baked goods, cooking oils, organic health foods.',
      icon: Apple
    },
    {
      name: 'Electrical Goods & Electronics',
      authority: 'Ministry of Industry & Adv Tech (MoIAT)',
      items: 'Domestic consumer appliances, personal grooming shavers, mobile chargers, lighting equipment, audio-visual devices (ECAS / RoHS).',
      icon: Tv
    },
    {
      name: "Children's Toys & Nursery Goods",
      authority: 'MoIAT / GSO Toy Safety Standards',
      items: 'Plastic & plush toys, infant pacifiers, baby feeding bottles, strollers, educational games certified for non-toxic materials.',
      icon: Baby
    }
  ];

  const authoritiesList = [
    {
      name: 'Dubai Municipality (DM)',
      role: 'Governs consumer products, cosmetics, detergents, food safety, and personal care through the smart Montaji system.'
    },
    {
      name: 'MoIAT (Ministry of Industry & Adv Tech)',
      role: 'Regulates national technical standards, ECAS conformity, energy efficiency labels, and chemical RoHS compliance.'
    },
    {
      name: 'MOHAP (Ministry of Health & Prevention)',
      role: 'Oversees pharmaceutical items, medical devices, registered medicines, and therapeutic health formulations.'
    },
    {
      name: 'ESMA (Emirates Standardisation Authority)',
      role: 'Defines mandatory GCC Standardization Organization (GSO) safety, packaging, and halal conformity marks.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
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
            Scope of Registration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Regulated Product Categories & Authorities
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Every product category in the UAE is governed by specific technical regulations, allowable chemical thresholds, and laboratory testing mandates.
          </p>
        </motion.div>

        {/* Categories Clean List with Dividers */}
        <div className="space-y-4 mb-16">
          <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8] bg-white rounded-2xl overflow-hidden shadow-xs">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={idx}
                  whileHover={shouldReduceMotion ? {} : { backgroundColor: 'rgba(250, 245, 236, 0.5)', x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-[#0F172A] text-base font-heading">
                          {cat.name}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6230] bg-[#FAF5EC] px-2.5 py-0.5 rounded-full border border-[#B8864B]/30">
                          {cat.authority}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl">
                        {cat.items}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 sm:text-right">
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(`Product Registration: ${cat.name}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors cursor-pointer"
                    >
                      <span>Check Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Governing Authorities in the UAE */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
              UAE Governing Authorities & Portals
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1">
              Depending on the nature of your merchandise, applications are submitted to the appropriate government entity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {authoritiesList.map((auth, i) => (
              <motion.div 
                key={i} 
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-xl bg-white border border-[#EBE4D8] shadow-xs hover:border-[#B8864B]/40 transition-all space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8864B] shrink-0" />
                  <h4 className="font-bold text-sm text-[#0F172A] font-heading">{auth.name}</h4>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed pl-6">
                  {auth.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductCategoriesSection;
