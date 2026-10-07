import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Briefcase, 
  BookOpen, 
  Award, 
  Users2, 
  Monitor,
  ArrowUpRight 
} from 'lucide-react';

export const OurServices = ({ onOpenConsultation }) => {
  const services = [
    {
      title: 'Employee Orientation',
      desc: 'MOHRE-oriented sessions covering labour law, employee rights, dispute resolution channels, and workplace responsibilities.',
      icon: UserCheck
    },
    {
      title: 'Employer Awareness Sessions',
      desc: 'Guidance for employers regarding labour regulations, Wage Protection System (WPS) adherence, and statutory compliance responsibilities.',
      icon: Briefcase
    },
    {
      title: 'Labour Law Training',
      desc: 'Focused training covering employment contracts, probation periods, working hours, statutory leave, and termination regulations.',
      icon: BookOpen
    },
    {
      title: 'Tawjeeh Certificate Processing',
      desc: 'Verification assistance with Tawjeeh attendance completion and fast issuance of official completion certificates required for residency completion.',
      icon: Award
    },
    {
      title: 'Group Orientation Sessions',
      desc: 'Structured orientation support for companies onboarding multiple staff simultaneously, organized to minimize corporate downtime.',
      icon: Users2
    },
    {
      title: 'Virtual Tawjeeh Sessions',
      desc: 'Accredited online Tawjeeh orientation coordination where permissible under official MOHRE remote eligibility criteria.',
      icon: Monitor
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Professional Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            Our Tawjeeh Services
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Brigitlink coordinates every phase of your Tawjeeh orientation requirements, delivering streamlined scheduling, documentation pre-checks, and official certificate processing.
          </p>
        </div>

        {/* Clean 2-Column Card Grid (Short cards, not giant) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -2 }}
                onClick={() => onOpenConsultation && onOpenConsultation(`Tawjeeh - ${item.title}`)}
                className="bg-white rounded-xl p-5 border border-[#E8DEC9] hover:border-[#B8864B] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center group-hover:bg-[#B8864B] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#A89882] group-hover:text-[#B8864B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h3 className="text-base font-bold text-[#222222] mb-1.5 group-hover:text-[#976A36] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F2ECE2] flex items-center justify-between text-xs font-semibold text-[#8B6B3E]">
                  <span>Book or Inquire</span>
                  <span className="text-[11px] opacity-70 group-hover:opacity-100 transition-opacity">MOHRE Compliant →</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
