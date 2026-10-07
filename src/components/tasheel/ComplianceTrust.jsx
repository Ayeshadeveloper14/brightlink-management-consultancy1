import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, FileCheck, Scale, AlertCircle } from 'lucide-react';

export const ComplianceTrust = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 bg-[#FCFAF8] border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E6D7C3] shadow-sm text-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] mx-auto mb-4">
            <Scale className="w-6 h-6 stroke-[1.8]" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight mb-3 font-heading">
            Handled With Accuracy & Compliance
          </h2>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl mx-auto mb-6">
            Tasheel transactions govern statutory employment contracts, legal work authorisations, and official wage compliance under UAE Labour Law. Accurate document preparation and proper regulatory classification help avoid unnecessary application delays, administrative fines, or file blockages.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-[#F5EFE6] text-xs font-semibold text-[#777777]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
              <span>Regulated Ministerial Procedures</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-[#B8864B]" />
              <span>Pre-Submission Data Auditing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#B8864B]" />
              <span>Statutory Compliance Guidance</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ComplianceTrust;
