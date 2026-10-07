import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FileCheck, User, Users, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Documents = () => {
  const shouldReduceMotion = useReducedMotion();

  const sponsorDocs = [
    'Passport & visa copy',
    'Emirates ID copy',
    'Salary certificate / labour contract',
    'Ejari tenancy contract (min. 2 bedrooms)'
  ];

  const workerDocs = [
    'Passport copy',
    'Recent photograph (white background)',
    'Tourist / visit visa copy (if inside the UAE)',
    'Entry stamp (if already arrived)'
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#EBE4D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 text-center sm:text-left"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Paperwork
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-3">
            Documents required.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Have clear colour copies of each ready — blurry scans are the most common reason for a GDRFA rejection.
          </p>
        </motion.div>

        {/* 2 Checklists: Sponsor (employer) & Domestic worker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Sponsor (employer) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl bg-white border border-[#DECBB5] p-8 sm:p-10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#EBE4D8]">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <User className="w-5 h-5 text-[#B8864B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                    Sponsor (employer)
                  </h3>
                  <span className="text-xs text-[#64748B]">Sponsoring family head</span>
                </div>
              </div>

              <ul className="space-y-4">
                {sponsorDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#1E293B]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EBE4D8] flex items-center gap-2 text-xs text-[#8C6230]">
              <ShieldCheck className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>Digital PDF or high-res photo scans accepted</span>
            </div>
          </motion.div>

          {/* Card 2: Domestic worker */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl bg-white border border-[#DECBB5] p-8 sm:p-10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#EBE4D8]">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <Users className="w-5 h-5 text-[#B8864B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                    Domestic worker
                  </h3>
                  <span className="text-xs text-[#64748B]">Maid, nanny, or helper</span>
                </div>
              </div>

              <ul className="space-y-4">
                {workerDocs.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#1E293B]">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EBE4D8] flex items-center gap-2 text-xs text-[#8C6230]">
              <AlertTriangle className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>Passport must have minimum 6 months validity</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Documents;
