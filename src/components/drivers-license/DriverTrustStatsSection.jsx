import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe2, 
  Clock, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export const DriverTrustStatsSection = () => {
  const stats = [
    {
      value: '10+ Years',
      label: 'Authorized Dubai Typing',
      desc: 'Deep operational experience with RTA, Dubai Police, and driving institutes.',
      icon: Award
    },
    {
      value: '15,000+',
      label: 'Traffic Files Processed',
      desc: 'Seamless license exchanges, test enrollments, and eye test bookings.',
      icon: Users
    },
    {
      value: '40+ Countries',
      label: 'Exemption Eligibility',
      desc: 'Direct replacement guidance for European, American, GCC, and Asian licenses.',
      icon: Globe2
    },
    {
      value: '15 Minutes',
      label: 'Document Audit Speed',
      desc: 'Fast preliminary check on WhatsApp during UAE business hours.',
      icon: Clock
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-[#EFEAE2] my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Why Choose Brightlink
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight">
            Trusted by Thousands of Drivers in Dubai
          </h2>

          <p className="text-xs sm:text-sm text-[#555555] mt-2 leading-relaxed">
            From direct license swaps to complex Golden Visa test exemptions, our certified typing officers ensure error-free submissions with zero queues.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center mb-4 group-hover:bg-[#B8864B] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <span className="text-2xl sm:text-3xl font-extrabold text-[#222222] font-heading group-hover:text-[#B8864B] transition-colors block mb-1">
                    {item.value}
                  </span>

                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#976A36] mb-2">
                    {item.label}
                  </h3>

                  <p className="text-xs text-[#666666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
