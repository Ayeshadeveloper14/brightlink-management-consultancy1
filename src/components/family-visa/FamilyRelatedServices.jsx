import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Search, 
  Star, 
  Baby, 
  FileCheck2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const FamilyRelatedServices = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: 'Visa Medical & Emirates ID',
      desc: 'VIP express DHA / Smart Salem medical fitness testing with 30-minute blood and X-ray results.',
      link: '/services/visa-medical-emirates-id',
      icon: Activity
    },
    {
      title: 'Visa Validity Checker',
      desc: 'Check GDRFA Dubai and Federal ICP visa status, grace periods, and fine calculation in real time.',
      link: '/services/visa-validity-checker',
      icon: Search
    },
    {
      title: 'UAE Golden Visa (10-Yr)',
      desc: '10-year self-sponsored residency for real estate investors, executives, and specialized talents.',
      link: '/golden-visa',
      icon: Star
    },
    {
      title: 'Newborn Baby Visa',
      desc: 'Fast birth certificate issuance, MOFA translation, and 120-day residence visa registration.',
      link: '/services',
      icon: Baby
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              Complementary Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Related UAE Residency Services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors"
          >
            <span>Explore All 24+ Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Clean Related Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs hover:border-[#B8864B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0F172A] font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EBE4D8]">
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FamilyRelatedServices;
