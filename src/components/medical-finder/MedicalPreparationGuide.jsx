import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  UtensilsCrossed, 
  Baby, 
  Activity, 
  AlertCircle, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export const MedicalPreparationGuide = () => {
  const guidelines = [
    {
      title: '1. Required Documents',
      badge: 'Essential',
      description: 'Original Passport (with minimum 6 months validity), copy of electronic UAE Entry Permit or current residence visa, and 2 passport-sized photos with white background.',
      icon: FileText
    },
    {
      title: '2. Fasting Rules',
      badge: 'No Fasting',
      description: 'Fasting is NOT strictly mandatory for routine UAE residency screening (HIV, Hepatitis B/C, Chest X-Ray). You may consume light meals and water before your appointment.',
      icon: UtensilsCrossed
    },
    {
      title: '3. Pregnant Applicants',
      badge: 'Exemption Available',
      description: 'Pregnant women are legally exempt from the mandatory Chest X-Ray screening upon submitting an authorized obstetrician ultrasound report or medical certificate.',
      icon: Baby
    },
    {
      title: '4. Screened Health Conditions',
      badge: 'Federal Health Law',
      description: 'Standard tests screen for infectious diseases (HIV 1 & 2, Hepatitis B/C for designated occupational categories, and active Pulmonary Tuberculosis via chest radiograph).',
      icon: Activity
    }
  ];

  return (
    <section className="space-y-6 pt-10 border-t border-[#EFEAE2]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
            SCREENING PROTOCOLS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          UAE Residency Medical Fitness Preparation Guidelines
        </h2>
        <p className="text-xs sm:text-sm text-[#555555] mt-1 leading-relaxed max-w-3xl">
          Follow these official preparation instructions issued by the Dubai Health Authority (DHA) and Ministry of Health and Prevention (MOHAP) to ensure a seamless screening with zero delays.
        </p>
      </div>

      {/* 4 Guidance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {guidelines.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5] transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF5EC] text-[#8C6230] border border-[#E6D7C3]/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#222222]">
                  {item.title}
                </h3>

                <p className="text-xs text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Highlight Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF8] border-l-4 border-[#B8864B] border-y border-r border-[#EFEAE2] flex items-start gap-3.5">
        <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wider">
            Important Protocol for Golden Visa Holders & Dependents
          </h4>
          <p className="text-xs text-[#555555] leading-relaxed">
            10-Year Golden Visa applicants and sponsored family members are entitled to VIP priority lanes at Smart Salem centers. Pre-booking via Brightlink guarantees dedicated executive escort and synchronous Emirates ID typing in one appointment slot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedicalPreparationGuide;
