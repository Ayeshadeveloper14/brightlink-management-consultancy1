import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  FileCheck2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  Users
} from 'lucide-react';

export const Overview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Professional Image / Visual Block */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-3 bg-[#FAF5EC] border border-[#E6D7C3] shadow-md">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900">
                <img
                  src="https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg"
                  alt="Tasheel and MOHRE Labour Transaction Management"
                  className="w-full h-full object-cover opacity-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Bottom Stamp */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#B8864B]" />
                    <div>
                      <div className="text-xs font-bold text-[#222222]">MOHRE Standardized System</div>
                      <div className="text-[10px] text-[#777777]">Regulated UAE Labour Procedures</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#976A36] bg-[#FAF5EC] px-2 py-0.5 rounded border border-[#E6D7C3]">
                    Official
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Editorial Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Supporting Highlight Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#E6D7C3] text-xs font-bold uppercase tracking-wider text-[#976A36] font-heading">
              Efficient • Compliant • Hassle-Free
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight font-heading leading-tight">
              What Are Tasheel Services?
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
              Tasheel is an authorized institutional government service platform designed by the UAE Ministry of Human Resources & Emiratisation (MOHRE). It provides employers, human resources departments, and commercial entities with a standardized, electronic gateway to process all official workforce and labour-related transactions.
            </p>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Through Tasheel, companies submit employee work permits, file electronic labour contracts, maintain corporate establishment records, and manage statutory Wage Protection System (WPS) requirements. Brightlink acts as your professional liaison partner, preparing accurate paperwork and facilitating prompt submission to keep your company fully compliant with UAE Labour Law.
            </p>

            {/* Structured Bullet Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444]">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Authorized MOHRE Electronic Typing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444]">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Workforce Quota Management</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444]">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Labour Card & Contract Renewals</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444]">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>WPS Regulatory Compliance</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => onOpenConsultation && onOpenConsultation('Tasheel Overview - Consultation')}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#B8864B] hover:text-[#976A36] cursor-pointer group"
              >
                <span>Learn more about employer compliance</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Overview;
