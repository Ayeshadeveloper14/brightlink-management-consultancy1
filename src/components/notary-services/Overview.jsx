import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, Landmark } from 'lucide-react';

export const Overview = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FCFAF8] border-y border-[#F0E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading and Concise Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
              Official Legal Authentication
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4 font-heading">
              Notary Services
            </h2>
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
              Notarisation helps formally authenticate documents and authorisations for use with relevant UAE authorities, courts, banks and other official entities.
            </p>
          </motion.div>

          {/* Right Column: Clean Visual Document Element Beside the Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DEC9] shadow-xs space-y-4">
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#F2ECE2]">
                <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1A1A1A] font-heading">Formal Legal Validation</h3>
                  <p className="text-xs text-[#666666]">Official witness and attestation by certified notary</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pb-4 border-b border-[#F2ECE2]">
                <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1A1A1A] font-heading">Judicial & Banking Recognition</h3>
                  <p className="text-xs text-[#666666]">Accepted across UAE courts, ministries, and financial bodies</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1A1A1A] font-heading">Complete Authority & Scope</h3>
                  <p className="text-xs text-[#666666]">Clear representation for specified legal transactions</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
