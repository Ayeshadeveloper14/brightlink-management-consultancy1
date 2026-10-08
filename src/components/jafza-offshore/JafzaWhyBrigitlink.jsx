import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  Landmark, 
  Compass, 
  Headphones, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const JafzaWhyBrightlink = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Compass,
      title: 'Offshore Structuring Guidance',
      desc: 'Expert advisory on aligning your JAFZA offshore company with multi-jurisdictional holding structures, Dubai real estate titles, or global subsidiaries.'
    },
    {
      icon: FileCheck2,
      title: 'Documentation Support',
      desc: 'Full assistance in drafting bespoke constitutional documents (MOA/AOA), shareholder board resolutions, and statutory beneficial ownership disclosures.'
    },
    {
      icon: ShieldCheck,
      title: 'Registered Agent Coordination',
      desc: 'Seamless provision of the mandatory licensed Registered Agent service and official registered office address required by JAFZA regulations.'
    },
    {
      icon: Award,
      title: 'Incorporation Assistance',
      desc: 'Direct electronic submission and proactive liaison with JAFZA Registry officers for expedited review, clearance, and certificate issuance.'
    },
    {
      icon: Landmark,
      title: 'Banking Preparation Support',
      desc: 'Comprehensive bank dossier compilation, institutional business profiling, and introductions to premier UAE and international banking institutions.'
    },
    {
      icon: Layers,
      title: 'Compliance Guidance',
      desc: 'Proactive legal guidance navigating UAE Corporate Tax, Ultimate Beneficial Ownership (UBO) filings, and AML/CFT compliance mandates.'
    },
    {
      icon: Headphones,
      title: 'Ongoing Corporate Support',
      desc: 'Dedicated corporate secretarial assistance covering annual renewals, share transfers, director amendments, and certificates of good standing.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>ADVISORY EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Brightlink</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Offshore company formation in Dubai demands legal precision, strict compliance oversight, and reliable registered agent representation. Here is how Brightlink protects your corporate interests.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-14">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all duration-300 flex flex-col justify-between group"
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
                  <span>Brightlink Corporate Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default JafzaWhyBrightlink;
