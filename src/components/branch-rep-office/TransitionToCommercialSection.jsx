import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Search, 
  Building2, 
  TrendingUp, 
  Layers, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const TransitionToCommercialSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const roadmap = [
    {
      num: '01',
      title: 'Market Research',
      desc: 'Operate a Representative Office to observe domestic demand, test client receptivity, and study competitors with minimal capital commitment.'
    },
    {
      num: '02',
      title: 'UAE Presence',
      desc: 'Build on-the-ground industry credibility, establish direct partner relationships, and hire a local country representative.'
    },
    {
      num: '03',
      title: 'Evaluate Opportunity',
      desc: 'Assess commercial viability, projected transaction volumes, and procurement opportunities across Dubai and the wider GCC.'
    },
    {
      num: '04',
      title: 'Choose Commercial Structure',
      desc: 'Determine whether converting to a full commercial Branch Office or establishing a separate Mainland LLC best suits your liability and equity profile.'
    },
    {
      num: '05',
      title: 'Expand Operations',
      desc: 'Incorporate the commercial entity, obtain invoicing authority, expand physical office space, and scale your onshore workforce.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Growth Trajectory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Expanding from Representative Office to Commercial Operations
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Many international enterprises begin with a Representative Office to explore the UAE market before establishing full-scale commercial operations. Here is how that progression typically unfolds.
          </p>
        </div>

        {/* 5-Step Progressive Horizontal Flow */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#DECBB5] shadow-sm mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {roadmap.map((step, idx) => (
              <div key={idx} className="relative bg-[#FCFAF8] rounded-2xl p-4 border border-[#DECBB5] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#B8864B] font-heading">
                      STEP {step.num}
                    </span>
                    {idx < roadmap.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#DECBB5]" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-heading mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Note Explaining New Entity Requirement */}
        <div className="p-5 rounded-2xl bg-white border border-[#B8864B]/40 shadow-xs flex items-start gap-3.5 max-w-4xl mx-auto mb-8">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#0F172A] font-heading">
              Transition Advisory Note:
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed font-sans">
              Moving from a non-revenue Representative Office to active commercial operations requires formally establishing the appropriate new legal entity (such as a full commercial Branch Office or a standalone Mainland LLC) and obtaining the relevant commercial trade license, rather than an automatic re-designation. Brightlink manages this transition seamlessly to preserve your staff visas and banking continuity.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Transition from Rep Office to Commercial')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer shadow-md"
          >
            <span>Plan Your Commercial Scaling Strategy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TransitionToCommercialSection;
