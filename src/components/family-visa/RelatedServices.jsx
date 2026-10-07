import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Home, 
  FileCheck2, 
  Languages, 
  Briefcase, 
  Building2, 
  ArrowRight 
} from 'lucide-react';

export const RelatedServices = () => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: 'Golden Visa',
      desc: '10-year self-sponsored UAE residency for investors, executives, and specialized talents.',
      link: '/golden-visa',
      icon: Star
    },
    {
      title: 'Property Visa',
      desc: 'Residency permits through qualifying freehold property ownership across Dubai.',
      link: '/visa',
      icon: Home
    },
    {
      title: 'Attestation',
      desc: 'Consular and MOFA attestation of marriage, birth, and degree certificates worldwide.',
      link: '/services',
      icon: FileCheck2
    },
    {
      title: 'Legal Translation',
      desc: 'Court-certified Arabic translation of foreign documents for government submissions.',
      link: '/services',
      icon: Languages
    },
    {
      title: 'PRO Services',
      desc: 'Comprehensive corporate government liaison, labor quotas, and trade license renewals.',
      link: '/services',
      icon: Briefcase
    },
    {
      title: 'Business Setup',
      desc: 'Mainland and Free Zone company formation, commercial licensing, and bank accounts.',
      link: '/business-setup',
      icon: Building2
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              Brigitlink Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Related services
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors"
          >
            <span>View all services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Related Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs hover:border-[#B8864B] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#0F172A] font-heading">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1EBE1]">
                  <Link
                    to={srv.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

export default RelatedServices;
