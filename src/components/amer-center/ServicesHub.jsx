import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Building2, 
  CreditCard, 
  RefreshCw, 
  UserX, 
  ArrowRightLeft, 
  Crown, 
  FileText, 
  HeartPulse, 
  Briefcase, 
  Rocket, 
  FileCheck2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const ServicesHub = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 'family-visa',
      title: 'Family Visa',
      category: 'residency',
      shortDesc: 'Sponsor your spouse, children, and parents with turnkey medical and Emirates ID typing.',
      image: 'https://website-imges.vercel.app/family_visa_dubai.jpg',
      icon: Users,
      sla: '2–3 Days'
    },
    {
      id: 'employee-visa',
      title: 'Employee Visa',
      category: 'corporate',
      shortDesc: 'Turnkey work permit clearances, electronic quotas, and residency stamping under UAE labour law.',
      image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
      icon: Building2,
      sla: '3–5 Days'
    },
    {
      id: 'emirates-id',
      title: 'Emirates ID Typing',
      category: 'identity',
      shortDesc: 'Fast-track ICP new registration, biometrics appointment scheduling, and renewals.',
      image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
      icon: CreditCard,
      sla: 'Same-Day'
    },
    {
      id: 'visa-renewal',
      title: 'Visa Renewal',
      category: 'residency',
      shortDesc: 'Proactive renewal management preventing costly ministerial delay fines within the grace period.',
      image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
      icon: RefreshCw,
      sla: '24–48 Hrs'
    },
    {
      id: 'visa-cancellation',
      title: 'Visa Cancellation',
      category: 'residency',
      shortDesc: 'Official cancellation of residency permits for job departures, switching sponsors, or repatriation.',
      image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
      icon: UserX,
      sla: 'Same-Day'
    },
    {
      id: 'status-change',
      title: 'Status Change',
      category: 'residency',
      shortDesc: 'In-country visa conversion between visit/tourist and residence visas without exiting the country.',
      image: 'https://website-imges.vercel.app/hero_dubai_skyline_1790842330436.jpg',
      icon: ArrowRightLeft,
      sla: 'Instant'
    },
    {
      id: 'golden-visa',
      title: 'Golden Visa (10 Years)',
      category: 'residency',
      shortDesc: 'Self-sponsored 10-year residency nomination for property owners (AED 2M+), executives, and talents.',
      image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
      icon: Crown,
      sla: '3–7 Days'
    },
    {
      id: 'entry-permit',
      title: 'Entry Permit',
      category: 'residency',
      shortDesc: 'GDRFA electronic entry permits for new hires, family members, tourists, and transit visitors.',
      image: 'https://website-imges.vercel.app/property_visa_dubai.jpg',
      icon: FileText,
      sla: '24 Hours'
    },
    {
      id: 'medical-typing',
      title: 'Medical Typing & DHA',
      category: 'identity',
      shortDesc: 'Express VIP medical fitness appointment reservation with Smart Salem and DHA health centers.',
      image: 'https://website-imges.vercel.app/medical_hero_1790966817427.jpg',
      icon: HeartPulse,
      sla: 'VIP 30 Min'
    },
    {
      id: 'pro-services',
      title: 'Corporate PRO Services',
      category: 'corporate',
      shortDesc: 'Complete ministerial liaison covering establishment cards, MOHRE quotas, and trade licences.',
      image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
      icon: Briefcase,
      sla: 'Continuous'
    },
    {
      id: 'business-setup',
      title: 'Business Setup Support',
      category: 'corporate',
      shortDesc: 'Company formation guidance across Dubai Mainland (DED/DET) and premier Free Zones.',
      image: 'https://website-imges.vercel.app/investor_visa_dubai.jpg',
      icon: Rocket,
      sla: '2–5 Days'
    },
    {
      id: 'document-attestation',
      title: 'Document Attestation',
      category: 'identity',
      shortDesc: 'MOFA, embassy, and consular legalization for educational degrees, marriage, and birth certificates.',
      image: 'https://website-imges.vercel.app/passport_hero_1790966832173.jpg',
      icon: FileCheck2,
      sla: '3–5 Days'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Amer Services' },
    { id: 'residency', label: 'Residency & Visas' },
    { id: 'identity', label: 'Identity & Medical' },
    { id: 'corporate', label: 'Corporate & PRO' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E6D7C3] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              GDRFA Immigration Catalog
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Amer Center Services Hub
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Explore our comprehensive suite of 12 government-approved Amer services. Each request is verified by senior immigration advisors.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#B8864B] text-white shadow-md shadow-[#B8864B]/20'
                  : 'bg-white text-[#555555] border border-[#DECBB5] hover:bg-[#FAF5EC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12-Card Image-Based Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#EFEAE2] hover:border-[#B8864B]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Background Header with Overlay */}
                <div className="relative h-44 overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  {/* Top SLA Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 text-[#F5D7A1]">
                      {service.sla}
                    </span>
                  </div>

                  {/* Icon Badge Overlay */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 flex items-center justify-center text-[#B8864B] shadow-md">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#222222] mb-1.5 group-hover:text-[#976A36] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F5EFE6] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenConsultation && onOpenConsultation(`Amer Services Hub - ${service.title}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] group-hover:text-[#976A36] cursor-pointer"
                    >
                      <span>Inquire Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] text-neutral-400 font-medium">GDRFA Linked</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesHub;
