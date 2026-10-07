import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export const MedicalGuide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-[#FAF7F0] rounded-3xl p-8 border border-[#B8864B]/30 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#B8864B] text-white flex items-center justify-center">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-[#222222]">
            UAE Mandatory Residency Medical Fitness Guidelines
          </h3>
          <p className="text-xs text-[#666666]">
            Key preparation instructions for smooth screening without delays or re-tests.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-[#444444]">
        <div className="space-y-1">
          <span className="font-bold text-[#222222] block">1. Required Documents</span>
          <p>Original Passport, electronic UAE Entry Permit or current residence visa copy, and 2 passport-sized photos.</p>
        </div>
        <div className="space-y-1">
          <span className="font-bold text-[#222222] block">2. Fasting Requirements</span>
          <p>Fasting is NOT strictly mandatory for routine UAE residency tests (HIV, Hepatitis B/C, and Chest X-ray for TB).</p>
        </div>
        <div className="space-y-1">
          <span className="font-bold text-[#222222] block">3. Pregnant Applicants</span>
          <p>Pregnant women are exempt from Chest X-Ray with a physician’s certified medical certificate or ultrasound proof.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MedicalGuide;
