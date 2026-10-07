import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CreditCard, 
  ShieldCheck, 
  Building2, 
  Landmark, 
  Smartphone, 
  HeartPulse, 
  Lock, 
  FileCheck2,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const WhatIsEmiratesId = () => {
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      title: 'Mandatory Federal Identification',
      description: 'The Emirates ID is the official identity card issued by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). Every UAE citizen, foreign resident, and employee is legally required to hold an active Emirates ID.',
      icon: CreditCard,
      tag: 'Legal Mandate'
    },
    {
      title: 'Government & Digital Gateways',
      description: 'Acts as your primary credential for UAE Pass, smart police services, Dubai Municipality, traffic fines, court filings, and all federal e-government portals nationwide.',
      icon: Landmark,
      tag: 'Smart Government'
    },
    {
      title: 'Banking & Financial Verification',
      description: 'Essential for opening personal and corporate bank accounts, securing mortgage loans, credit cards, investment accounts, and passing strict Anti-Money Laundering (AML) KYC verification.',
      icon: Lock,
      tag: 'Banking & KYC'
    },
    {
      title: 'Telecom & Utility Connections',
      description: 'Required to register mobile SIM cards (e& / du / Virgin Mobile), residential home internet, DEWA electricity & water connections, and municipal housing accounts.',
      icon: Smartphone,
      tag: 'Telecom & Utilities'
    },
    {
      title: 'Healthcare & Medical Insurance',
      description: 'Your physical card and digital ICP chip link directly to your UAE health insurance policy, hospital records, prescription dispensing, and DHA / DOH healthcare networks.',
      icon: HeartPulse,
      tag: 'Healthcare Access'
    },
    {
      title: 'Airport Smart Gates & Travel',
      description: 'UAE residents can use their Emirates ID to breeze through contactless electronic Smart Gates at Dubai International Airport (DXB) and Abu Dhabi Airport (AUH) without passport queuing.',
      icon: ShieldCheck,
      tag: 'Airport Smart Gates'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Official ICP Identity Card
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            What Is an Emirates ID & Why Is It Mandatory?
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-normal">
            The Emirates ID is the cornerstone of life and residency in the United Arab Emirates. Issued by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), it is a legally mandatory identification document for all citizens and expatriate residents.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative p-7 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5] hover:shadow-lg hover:shadow-black/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FAF5EC] text-[#976A36] border border-[#E6D7C3]">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#222222] mb-2.5 group-hover:text-[#976A36] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1EBE1] flex items-center gap-2 text-xs font-semibold text-[#B8864B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Essential UAE Residency Requirement</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informative Callout Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF5EC] via-[#F7EFE3] to-[#F5ECE0] border border-[#E6D7C3] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#B8864B] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#222222] mb-1">
                Unified ICP Number & Electronic Residency
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-3xl">
                In the UAE, your Emirates ID card number (e.g., 784-XXXX-XXXXXXX-X) is permanent and remains identical for life. Even when changing employers, renewing residency visas, or upgrading to a 10-Year Golden Visa, your personal identity number never changes.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatIsEmiratesId;
