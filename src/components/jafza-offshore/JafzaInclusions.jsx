import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  FileText, 
  ShieldCheck, 
  Users, 
  UserCheck, 
  Layers, 
  Sparkles, 
  Briefcase,
  CheckCircle2,
  FolderArchive
} from 'lucide-react';

export const JafzaInclusions = () => {
  const shouldReduceMotion = useReducedMotion();

  const inclusions = [
    {
      icon: FileCheck2,
      title: 'Certificate of Incorporation',
      desc: 'Official statutory Certificate of Incorporation issued and authenticated by the Jebel Ali Free Zone Authority (JAFZA).'
    },
    {
      icon: FileText,
      title: 'Memorandum & Articles (MOA/AOA)',
      desc: 'Formally stamped and registered constitutional bylaws establishing corporate objects, share capital, and director powers.'
    },
    {
      icon: Users,
      title: 'Shareholder Records & Certificates',
      desc: 'Official Share Certificates detailing equity proportions, par value, and registered legal owners of the offshore entity.'
    },
    {
      icon: UserCheck,
      title: 'Director Records & Appointments',
      desc: 'Statutory corporate appointment records and registry extracts confirming designated Directors and Company Secretary.'
    },
    {
      icon: Layers,
      title: 'Official Company Extract',
      desc: 'Certified JAFZA Registry Extract outlining company registration number, legal status, registered office, and officers.'
    },
    {
      icon: ShieldCheck,
      title: 'Statutory Corporate Registers',
      desc: 'Official maintenance of the Register of Members, Register of Directors, and Register of Charges required by law.'
    },
    {
      icon: FileCheck2,
      title: 'UBO Statutory Documentation',
      desc: 'Verified Ultimate Beneficial Ownership (UBO) filings compliant with UAE Cabinet Resolution and international AML standards.'
    },
    {
      icon: Briefcase,
      title: 'Compliance & Tax Guidance',
      desc: 'Clear roadmap for annual renewals, 7-year accounting record retention, and UAE Corporate Tax registration filing.'
    },
    {
      icon: FolderArchive,
      title: 'Offshore Corporate File Kit',
      desc: 'Complete digital and physical master dossier with electronic registry stamps ready for banking and real estate transactions.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMPLETE CORPORATE DELIVERABLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            What Is Included in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">JAFZA Offshore File?</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Every JAFZA Offshore formation managed by Brigitlink includes an institutional-grade corporate deliverable kit, prepared to the highest legal standards.
          </p>
        </div>

        {/* 3x3 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, idx) => {
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
                  <span>Verified JAFZA Deliverable</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default JafzaInclusions;
