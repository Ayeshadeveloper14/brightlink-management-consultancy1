import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Briefcase, 
  Monitor, 
  Megaphone, 
  PenTool, 
  Scale, 
  GraduationCap, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const WhoIsThisFor = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const profiles = [
    {
      title: 'Strategic & Management Consultants',
      description: 'Advisors serving corporate headquarters, family offices, and SMEs on organizational change, human capital, and operational efficiency.',
      suitedFor: 'Management, HR, Business Strategy, Operations'
    },
    {
      title: 'IT Professionals & Tech Innovators',
      description: 'Software engineers, cybersecurity firms, SaaS platforms, cloud architects, and data intelligence consultancies.',
      suitedFor: 'DevOps, Cybersecurity, Web Development, Cloud'
    },
    {
      title: 'Marketing Agencies & Media Studios',
      description: 'Digital performance agencies, branding boutiques, PR firms, influencer management, and video production houses.',
      suitedFor: 'Digital Marketing, Public Relations, Creative Content'
    },
    {
      title: 'Architects & Creative Design Studios',
      description: 'Interior decorators, architectural concept designers, industrial modelers, and commercial visualization studios.',
      suitedFor: 'Interior Design, Architecture, CAD, Concept Studios'
    },
    {
      title: 'Accounting & Tax Advisory Providers',
      description: 'Bookkeeping practitioners, VAT agents, financial modeling analysts, and payroll management firms.',
      suitedFor: 'Bookkeeping, FTA Tax Agents, Financial Planning'
    },
    {
      title: 'Executive Coaches & Training Centers',
      description: 'Corporate leadership mentors, vocational institutes, certified professional tutors, and language academies.',
      suitedFor: 'Corporate Training, Leadership Coaching, Tutors'
    },
    {
      title: 'Specialists & Independent Entrepreneurs',
      description: 'Project managers, legal consultants, technical inspectors, and boutique advisory professionals establishing autonomy in Dubai.',
      suitedFor: 'Technical Contractors, Advisory, Solo Founders'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Target Profiles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Who is a Professional License Designed For?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            From solo practitioners to expanding corporate agencies, the Mainland Professional License provides the ideal legal wrapper for intellectual, technical, and service deliverables.
          </p>
        </div>

        {/* Feature Split Showcase: Left Editorial Image Card, Right Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Visual Feature Box */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#DECBB5] shadow-lg relative min-h-[380px] lg:min-h-full flex flex-col justify-end p-6 sm:p-8 text-white group">
            <img
              src="/images/professional_consulting_office.jpg"
              alt="Dubai modern professional consulting studio workspace"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = '/images/why_experienced_team_1790842362837.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8864B]/25 via-transparent to-black/40 pointer-events-none mix-blend-overlay" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-[#F5D7A1] border border-white/20">
                Service-First Commercial Framework
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                Built for Intellectual & Professional Excellence
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                No manufacturing equipment, customs bonding, or import warehousing required. Invoice corporate clients directly across the UAE mainland with complete legal legitimacy.
              </p>
              
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation('Check Profile Eligibility')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <span>Evaluate Your Practice Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profiles.map((prof, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="p-5 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] hover:border-[#B8864B] transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-heading mb-1.5">
                    {prof.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed mb-3">
                    {prof.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#DECBB5]/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3 h-3 text-[#B8864B] shrink-0" />
                  <span className="truncate">{prof.suitedFor}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
