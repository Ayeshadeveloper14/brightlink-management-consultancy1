import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  Users, 
  Activity, 
  Star, 
  ArrowRight, 
  FileText 
} from 'lucide-react';

export const RelatedServices = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      id: 'family-visa',
      title: 'Family Visa Sponsorship',
      description: 'Sponsor your spouse and dependent children under your virtual work residence permit with complete document attestation and typing support.',
      link: '/family-visa',
      icon: Users
    },
    {
      id: 'medical-eid',
      title: 'Visa Medical & Emirates ID',
      description: 'Fast-track biometric appointments and express DHA / Smart Salem medical fitness typing across Dubai and the UAE.',
      link: '/medical-finder',
      icon: Activity
    },
    {
      id: 'status-change',
      title: 'In-Country Status Amendment',
      description: 'Switch legally from an existing tourist, visit, or cancelled residence visa to virtual work residency without leaving the UAE.',
      consultationTag: 'Visa Status Change',
      icon: RefreshCw
    },
    {
      id: 'golden-visa',
      title: '10-Year UAE Golden Visa',
      description: 'Explore long-term residency options for property investors, executives, and specialized talent seeking 10-year self-sponsorship.',
      link: '/golden-visa',
      icon: Star
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
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Ecosystem Support
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Related Government Services
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Complementary typing and government liaison services to support your relocation and residency journey across Dubai and the UAE.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 border border-[#EFEAE2] hover:border-[#DECBB5] hover:bg-white transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.9]" />
                  </div>
                  <h3 className="text-base font-bold text-[#222222] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5EFE6]">
                  {item.link ? (
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] group"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onOpenConsultation && onOpenConsultation(item.consultationTag || item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] group cursor-pointer"
                    >
                      <span>Request Assistance</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
