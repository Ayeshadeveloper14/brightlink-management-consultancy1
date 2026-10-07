import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../../data/servicesData.js';
import { 
  Award, 
  Users, 
  Building2, 
  Home, 
  Plane, 
  Stethoscope, 
  HelpCircle, 
  FileCheck, 
  RefreshCw, 
  ShieldCheck, 
  CreditCard, 
  Briefcase, 
  ArrowRight 
} from 'lucide-react';

export const ServicesCatalog = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const getIcon = (name) => {
    const iconClass = "w-4 h-4 text-[#B8864B]";
    switch (name) {
      case 'Award': return <Award className={iconClass} />;
      case 'Users': return <Users className={iconClass} />;
      case 'Building2': return <Building2 className={iconClass} />;
      case 'Home': return <Home className={iconClass} />;
      case 'Plane': return <Plane className={iconClass} />;
      case 'Stethoscope': return <Stethoscope className={iconClass} />;
      case 'HelpCircle': return <HelpCircle className={iconClass} />;
      case 'FileCheck': return <FileCheck className={iconClass} />;
      case 'RefreshCw': return <RefreshCw className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      case 'CreditCard': return <CreditCard className={iconClass} />;
      case 'Briefcase': return <Briefcase className={iconClass} />;
      default: return <Award className={iconClass} />;
    }
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'residency', label: 'Residency & Golden' },
            { id: 'family', label: 'Family Visa' },
            { id: 'corporate', label: 'Business & Setup' },
            { id: 'property & support', label: 'Property & Support' },
            { id: 'travel', label: 'Tourist & Travel' },
            { id: 'legal', label: 'Legal & Attestation' },
            { id: 'consular', label: 'Passport & Consular' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#B8864B] text-white shadow-md shadow-[#B8864B]/20'
                  : 'bg-[#FCFAF8] border border-neutral-200/80 text-[#555555] hover:text-[#222222] hover:border-neutral-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-200/85 hover:border-[#B8864B]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 w-full overflow-hidden bg-neutral-100 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#8C6230]">
                    <span className="uppercase tracking-wider text-[11px] font-bold">
                      {service.category}
                    </span>
                    <span className="text-neutral-500 font-medium">
                      From {service.startingFee}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 pt-0.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F1EB] group-hover:bg-[#B8864B]/15 transition-colors flex items-center justify-center shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={() => {
                    if (service.id === 'dld-trustee') {
                      navigate('/services/dld-trustee');
                    } else {
                      onSelectService(service);
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-[#222222] bg-[#F5F1EB] group-hover:bg-[#B8864B] group-hover:text-white transition-all duration-200 cursor-pointer shadow-xs"
                >
                  <span>{service.id === 'dld-trustee' ? 'Explore Trustee Support' : 'View Requirements & Pricing'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesCatalog;
