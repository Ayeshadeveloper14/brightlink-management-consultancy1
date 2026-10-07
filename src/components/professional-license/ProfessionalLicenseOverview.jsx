import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Briefcase, 
  Lightbulb, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Monitor,
  PenTool,
  Calculator,
  Scale,
  Megaphone,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export const ProfessionalLicenseOverview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const activityCategories = [
    {
      title: 'Management & Strategic Consulting',
      icon: Briefcase,
      examples: 'Business management, HR advisory, operational consulting, risk management, and market research.',
      badge: 'High Demand'
    },
    {
      title: 'Information Technology & Software',
      icon: Monitor,
      examples: 'Software development, cloud systems, cybersecurity, web applications, IT infrastructure, and AI solutions.',
      badge: 'Tech Sector'
    },
    {
      title: 'Marketing, Media & PR Agencies',
      icon: Megaphone,
      examples: 'Digital marketing, brand development, public relations, social media management, content creation, and event production.',
      badge: 'Creative'
    },
    {
      title: 'Design & Architectural Studios',
      icon: PenTool,
      examples: 'Interior design, architectural drawings, landscape concept design, graphic design, and UI/UX design.',
      badge: 'Specialized'
    },
    {
      title: 'Accounting & Financial Advisory',
      icon: Calculator,
      examples: 'Bookkeeping, tax agency representation, financial modeling, payroll management, and corporate reporting.',
      badge: 'Regulated'
    },
    {
      title: 'Legal & Professional Services',
      icon: Scale,
      examples: 'Legal consultancy, contractual review, compliance advisory, intellectual property advisory, and translation.',
      badge: 'Professional'
    },
    {
      title: 'Education, Training & Coaching',
      icon: GraduationCap,
      examples: 'Professional training institutes, corporate leadership coaching, language instruction, and educational consultancy.',
      badge: 'Education'
    },
    {
      title: 'Technical & Engineering Services',
      icon: Lightbulb,
      examples: 'Technical consultancy, project management, environmental assessment, and quality control inspection.',
      badge: 'Engineering'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Legal Definition & Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            What is a Mainland Professional License?
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">
            In the UAE, a <strong className="text-[#0F172A]">Professional License</strong> is issued by the Dubai Department of Economy and Tourism (DET) to individuals and corporate entities whose primary capital is their <strong className="text-[#0F172A]">specialized talent, intellectual expertise, or professional services</strong>, rather than goods trading or industrial manufacturing.
          </p>
        </div>

        {/* 3 Core Pillars: Who It's For, Mainland Power, Ownership Freedom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Pillar 1 */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#F5D7A1] flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                Designed for Service Businesses
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Whether you are a solo practitioner, boutique consultancy, or international service firm, a Professional License legally structures your operations based on expertise, client deliverables, and professional service agreements.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#DECBB5]/70 flex items-center gap-2 text-xs font-semibold text-[#8C5E28]">
              <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
              <span>Service-Driven Capital Model</span>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#F5D7A1] flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                Unrestricted Mainland Reach
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Unlike Free Zone licenses with territorial trading boundaries, a Mainland Professional License allows you to serve clients anywhere in Dubai and the wider UAE, rent commercial premises anywhere, and bid on government contracts.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#DECBB5]/70 flex items-center gap-2 text-xs font-semibold text-[#8C5E28]">
              <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
              <span>No Geographic Service Borders</span>
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#F5D7A1] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                100% Foreign Ownership
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Foreign investors and expatriates can own 100% of their professional company. For select activities requiring a Local Service Agent (LSA), the LSA acts solely as a liaison without holding shares, voting rights, or profit entitlement.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-[#DECBB5]/70 flex items-center gap-2 text-xs font-semibold text-[#8C5E28]">
              <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
              <span>Full Equity & Profit Control</span>
            </div>
          </motion.div>

        </div>

        {/* Permitted Activities Section */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#DECBB5] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#F5F1EB]">
            <div>
              <span className="text-xs font-bold text-[#B8864B] uppercase tracking-wider block mb-1">
                DET Approved Activities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                Eligible Professional & Service Activities
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Explore popular service domains supported under Dubai Department of Economy and Tourism.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation && onOpenConsultation('Activity Verification Check')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5E28] hover:text-[#B8864B] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Verify your business activity with our team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Activity Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activityCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#B8864B]/60 hover:bg-[#FAF5EC] transition-all group duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#DECBB5] text-[#8C5E28] flex items-center justify-center group-hover:bg-[#B8864B] group-hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-white px-2 py-0.5 rounded-full border border-[#DECBB5]/60">
                      {cat.badge}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#0F172A] font-heading mb-1.5 group-hover:text-[#8C5E28] transition-colors">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {cat.examples}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Helpful Information Notice */}
          <div className="mt-8 pt-6 border-t border-[#F5F1EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#64748B]">
            <p>
              Can’t find your specific service? Over 1,000 distinct professional and vocational activities are registered with DET. Multiple related activities can frequently be grouped under a single license.
            </p>
            <button
              type="button"
              onClick={() => onOpenConsultation && onOpenConsultation('Custom Activity Inquiry')}
              className="px-4 py-2 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] font-bold hover:bg-[#B8864B] hover:text-white transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              Check Activity Code
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalLicenseOverview;
