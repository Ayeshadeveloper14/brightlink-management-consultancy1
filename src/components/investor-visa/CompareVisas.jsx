import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export const CompareVisas = () => {
  const shouldReduceMotion = useReducedMotion();

  const comparisonData = [
    {
      visa: 'Investor Visa',
      isCurrent: true,
      validity: '2-3 years',
      cost: 'AED 6,340',
      bestFor: 'UAE company shareholders',
      ctaText: 'This visa',
      ctaLink: '#'
    },
    {
      visa: 'Golden Visa',
      isCurrent: false,
      validity: '10 years',
      cost: 'AED 15,540',
      bestFor: 'AED 2M+ investors / top talent',
      ctaText: 'Details',
      ctaLink: '/golden-visa'
    },
    {
      visa: 'Employment Visa',
      isCurrent: false,
      validity: '2 years',
      cost: 'AED 8,140',
      bestFor: 'UAE-employed staff',
      ctaText: 'Details',
      ctaLink: '/services'
    },
    {
      visa: 'Freelance Visa',
      isCurrent: false,
      validity: '2-3 years',
      cost: 'AED 15,800',
      bestFor: 'Self-employed creatives',
      ctaText: 'Details',
      ctaLink: '/services'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Compare
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Investor Visa vs Other UAE Visas
          </h2>
        </motion.div>

        {/* Comparison Table / Responsive Card Stack */}
        <div className="rounded-3xl border border-[#DECBB5] bg-white overflow-hidden shadow-xs">
          
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 p-5 bg-[#FAF7F2] border-b border-[#DECBB5] text-xs font-bold uppercase tracking-wider text-[#0F172A] font-heading">
            <div className="col-span-4">Visa</div>
            <div className="col-span-2">Validity</div>
            <div className="col-span-3">Cost from</div>
            <div className="col-span-3">Best for</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#EBE4D8]">
            {comparisonData.map((row, idx) => (
              <div 
                key={idx}
                className={`p-5 md:grid md:grid-cols-12 md:gap-4 md:items-center transition-colors ${
                  row.isCurrent ? 'bg-[#FAF5EC]/70' : 'hover:bg-[#FCFAF8]'
                }`}
              >
                {/* Visa Name + Badge */}
                <div className="col-span-4 mb-2 md:mb-0">
                  <div className="flex items-center gap-2">
                    <strong className="text-base font-bold text-[#0F172A] font-heading">
                      {row.visa}
                    </strong>
                    {row.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#B8864B] text-white text-[10px] font-bold uppercase tracking-wider">
                        this visa
                      </span>
                    )}
                  </div>
                </div>

                {/* Validity */}
                <div className="col-span-2 mb-2 md:mb-0 text-xs sm:text-sm">
                  <span className="text-slate-400 md:hidden text-xs">Validity: </span>
                  <span className="font-semibold text-[#0F172A]">{row.validity}</span>
                </div>

                {/* Cost from */}
                <div className="col-span-3 mb-2 md:mb-0 text-xs sm:text-sm">
                  <span className="text-slate-400 md:hidden text-xs">Cost from: </span>
                  <strong className="font-bold text-emerald-800 font-heading">{row.cost}</strong>
                </div>

                {/* Best for + CTA */}
                <div className="col-span-3 flex items-center justify-between gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 md:hidden text-xs">Best for: </span>
                    <span className="text-[#475569]">{row.bestFor}</span>
                  </div>

                  {!row.isCurrent && (
                    <Link
                      to={row.ctaLink}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#B8864B] hover:text-[#976A36] shrink-0"
                    >
                      <span>{row.ctaText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompareVisas;
