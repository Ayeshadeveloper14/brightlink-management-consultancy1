import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  FileCheck2, 
  ShieldCheck, 
  Lock, 
  Landmark, 
  Headphones, 
  CheckCircle2, 
  Award,
  ArrowRight
} from 'lucide-react';

export const AjmanWhyBrigitlink = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Compass,
      title: 'Structure Guidance',
      desc: 'We evaluate your planned business models, asset profiles, and operational parameters to determine whether Ajman Offshore fits your intended purpose.'
    },
    {
      icon: FileCheck2,
      title: 'Documentation Support',
      desc: 'Our legal specialists assist in drafting customized constitutional documents (MOA/AOA), corporate resolutions, and organizing shareholder registers.'
    },
    {
      icon: ShieldCheck,
      title: 'Registered Agent Coordination',
      desc: 'We provide direct liaison through authorized Registered Agent representation, coordinating all formal filings and regulatory communications.'
    },
    {
      icon: Lock,
      title: 'KYC & UBO Support',
      desc: 'We assist clients in compiling comprehensive Beneficial Ownership (UBO) filings and compliant KYC packages aligned with UAE AML regulations.'
    },
    {
      icon: Landmark,
      title: 'Banking Preparation',
      desc: 'We help assemble a bank-ready corporate documentation package, business activity narratives, and facilitate introductions to commercial banks.'
    },
    {
      icon: Headphones,
      title: 'Ongoing Compliance Support',
      desc: 'We guide clients through annual renewals, 7-year accounting record retention obligations, and UAE corporate tax compliance guidelines.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>EXPERT CORPORATE PARTNERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Brigitlink</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            From strategic scoping and custom drafting to registered agent representation and banking dossier preparation, discover how Brigitlink protects your corporate interests.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-[#B8864B]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading group-hover:text-[#8C5E28] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F1EB] flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brigitlink Quality Assurance</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AjmanWhyBrigitlink;
