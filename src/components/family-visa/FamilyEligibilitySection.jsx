import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Baby, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Home, 
  FileText,
  DollarSign,
  ArrowRight
} from 'lucide-react';

export const FamilyEligibilitySection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('spouse'); // 'spouse' | 'children' | 'parents' | 'stepchildren'

  const categories = [
    {
      id: 'spouse',
      title: 'Spouse Sponsorship (Wife / Husband)',
      salaryReq: 'AED 4,000 (Male) / AED 10,000 (Female)',
      accommodation: '1-Bedroom Registered Ejari',
      badge: 'Most Popular',
      points: [
        'Male residents earning AED 4,000/mo (or AED 3,000 + company accommodation) can sponsor their wife.',
        'Female residents can sponsor their husband and children with a minimum monthly salary of AED 10,000 (or AED 8,000 + accommodation).',
        'Specialized female professionals (doctors, engineers, nurses, executives) receive fast-track automatic clearance.',
        'Requires legally attested Marriage Certificate authenticated by the UAE Embassy in the home country and UAE Ministry of Foreign Affairs (MOFA).'
      ]
    },
    {
      id: 'children',
      title: 'Children (Sons, Daughters & Newborns)',
      salaryReq: 'AED 4,000 / Month',
      accommodation: '1-Bedroom or 2-Bedroom Ejari',
      badge: 'Updated 2025 Laws',
      points: [
        'Sons can now be sponsored up to age 25 (extended from age 18 under latest UAE residency decrees).',
        'Sons of determination (children with special needs / disabilities) can be sponsored with no age limit.',
        'Unmarried daughters can be sponsored indefinitely with no age limitation.',
        'Newborn infants born in the UAE must have passport and visa stamped within 120 days of delivery to prevent fines (AED 100 + AED 50/day).'
      ]
    },
    {
      id: 'parents',
      title: 'Parents & Parents-in-Law Sponsorship',
      salaryReq: 'AED 20,000 / Month',
      accommodation: '2-Bedroom Registered Ejari Apartment',
      badge: 'Humanitarian Category',
      points: [
        'Both father and mother must be sponsored jointly (sponsoring only one parent is only permitted if the other is deceased or divorced with certified death/divorce decrees).',
        'Sponsor must earn a minimum verified basic salary of AED 20,000 per month (or AED 19,000 + 2-bedroom accommodation).',
        'Mandatory comprehensive medical health insurance policy covering elderly parents throughout their UAE stay.',
        'Refundable humanitarian guarantee deposit (typically AED 2,500 - 5,000) placed with immigration authorities.'
      ]
    },
    {
      id: 'stepchildren',
      title: 'Stepchildren & Special Cases',
      salaryReq: 'AED 10,000 - 15,000 / Month',
      accommodation: 'Registered Ejari Apartment',
      badge: 'Court Approval',
      points: [
        'Expatriates can sponsor stepchildren subject to judicial approval from the GDRFA / ICP humanitarian committee.',
        'Requires written, legally notarized No-Objection Certificate (NOC) from the biological father or mother.',
        'Refundable security deposit and proof of sole legal custody or guardianship judgment.',
        'Validity is typically granted for 1 year renewable annually upon ongoing welfare review.'
      ]
    }
  ];

  const currentCat = categories.find((c) => c.id === activeCategory) || categories[0];

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
            Sponsorship Eligibility Guidelines
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Who Qualifies for UAE Family Sponsorship?
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Under updated UAE immigration executive regulations, both male and female residents holding valid employment, partner, or investor visas can sponsor direct family members.
          </p>
        </motion.div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0F172A] text-white shadow-md'
                  : 'bg-[#FCFAF8] text-[#475569] border border-[#EBE4D8] hover:border-[#B8864B] hover:text-[#0F172A]'
              }`}
            >
              {cat.title.split(' ')[0]} {cat.id === 'spouse' ? 'Spouse' : cat.id === 'children' ? 'Children' : cat.id === 'parents' ? 'Parents' : 'Stepchildren'}
            </button>
          ))}
        </div>

        {/* Selected Category Details Showcase (Split Editorial Layout) */}
        <motion.div 
          key={currentCat.id}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-[#DECBB5] bg-[#FCFAF8] p-6 sm:p-8 lg:p-10 shadow-sm"
        >
          {/* Header of Active Category */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DFC8]">
            <div>
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider block mb-1 font-heading">
                Eligibility Tier: {currentCat.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                {currentCat.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-[#EBE4D8] text-xs shadow-xs">
                <span className="text-slate-400 block text-[10px]">Min. Salary</span>
                <strong className="text-[#0F172A] font-bold">{currentCat.salaryReq}</strong>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white border border-[#EBE4D8] text-xs shadow-xs">
                <span className="text-slate-400 block text-[10px]">Accommodation</span>
                <strong className="text-[#0F172A] font-bold">{currentCat.accommodation}</strong>
              </div>
            </div>
          </div>

          {/* List of Qualification Rules */}
          <div className="py-6 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] font-heading">
              Key Requirements & Entitlements:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCat.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#EBE4D8]/80 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="pt-6 border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#64748B]">
              Need help checking if your salary certificate or Ejari qualifies?
            </div>
            <button
              type="button"
              onClick={() => onOpenConsultation(`Eligibility Check: ${currentCat.title}`)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              <span>Check My Sponsorship Eligibility</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FamilyEligibilitySection;
