import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, FileText, CheckSquare } from 'lucide-react';

export const Documents = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: 'Stage 1 — Birth Certificate',
      docs: [
        "Father's passport copy",
        "Father's Emirates ID copy",
        "Mother's passport copy",
        "Mother's Emirates ID copy",
        "Attested marriage certificate"
      ]
    },
    {
      id: 2,
      title: "Stage 2 — Baby's Passport",
      docs: [
        "Father's passport copy",
        "Mother's passport copy",
        "Baby's recent passport-sized photo (white background)",
        "Attested Birth Certificate"
      ]
    },
    {
      id: 3,
      title: 'Stage 3 — Visa Issuance',
      docs: [
        "Sponsor's passport copy",
        "Sponsor's Emirates ID copy",
        "Sponsor Labour Contract",
        "Baby's passport copy",
        "Baby's recent passport-sized photo",
        "Attested birth certificate"
      ]
    }
  ];

  const currentStage = stages.find(s => s.id === activeStage) || stages[0];

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
            3 · Documents at each stage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Document checklists, by stage.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed font-sans">
            Three separate stages, each with its own required documents. Use this as your exact checklist — a missing file delays the whole stage.
          </p>
        </motion.div>

        {/* Stage Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {stages.map(st => (
            <button
              key={st.id}
              type="button"
              onClick={() => setActiveStage(st.id)}
              className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeStage === st.id
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'bg-white text-[#475569] border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#0F172A]'
              }`}
            >
              {st.title}
            </button>
          ))}
        </div>

        {/* Active Stage Checklist */}
        <motion.div
          key={currentStage.id}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DECBB5] shadow-xs"
        >
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8DFC8]">
            <h3 className="text-lg font-bold text-[#0F172A] font-heading">
              {currentStage.title} Required Files
            </h3>
            <span className="text-xs font-bold text-[#8C6230] bg-[#FAF5EC] px-3 py-1 rounded-full border border-[#DECBB5]">
              {currentStage.docs.length} items
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentStage.docs.map((doc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#EBE4D8] flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Documents;
