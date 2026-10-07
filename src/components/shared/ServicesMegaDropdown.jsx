import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  CreditCard, 
  Users, 
  Settings, 
  UserCheck, 
  FileCheck, 
  Languages, 
  FileSignature, 
  Scale, 
  Home, 
  Building2, 
  TrendingUp, 
  Car, 
  Activity, 
  Search, 
  Shield, 
  Package, 
  ArrowRight
} from 'lucide-react';

export const PRO_LEGAL_SERVICES = [
  {
    id: 'pro-services',
    title: 'Corporate PRO & Government Liaison',
    shortTitle: 'PRO Services',
    path: '/services/pro-services',
    icon: FileText,
    image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
    category: 'PRO & Legal Services',
    description: 'Comprehensive corporate and individual government clearance across DED, MOHRE, ICP, and Dubai Municipality.',
    ctaText: 'Explore PRO Services'
  },
  {
    id: 'emirates-id',
    title: 'Emirates ID Typing & Biometrics',
    shortTitle: 'Emirates ID',
    path: '/services/emirates-id',
    icon: CreditCard,
    image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
    category: 'Identity Documentation',
    description: 'VIP biometric appointment booking, new card issuance, renewal, replacement, and status tracking for UAE residents.',
    ctaText: 'Apply for Emirates ID'
  },
  {
    id: 'amer-center',
    title: 'Amer Center Services (GDRFA)',
    shortTitle: 'Amer Center',
    path: '/services/amer-center',
    icon: Users,
    image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
    category: 'GDRFA Immigration',
    description: 'Authorized GDRFA Dubai immigration processing, entry permits, residency renewal, cancellation, and fine adjustments.',
    ctaText: 'Access Amer Services'
  },
  {
    id: 'tasheel-services',
    title: 'Tasheel MOHRE Services',
    shortTitle: 'Tasheel Services',
    path: '/services/tasheel-services',
    icon: Settings,
    image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
    category: 'MOHRE Labor Relations',
    description: 'Ministry of Human Resources & Emiratisation quota approvals, work permits, labor card renewals, and contract typing.',
    ctaText: 'Get Tasheel Support'
  },
  {
    id: 'tawjeeh-services',
    title: 'Tawjeeh Labor Guidance & Training',
    shortTitle: 'Tawjeeh Services',
    icon: UserCheck,
    image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
    category: 'Labor Compliance',
    description: 'Mandatory worker orientation sessions, labor law compliance, and certificate issuance for newly hired staff.',
    ctaText: 'Schedule Tawjeeh'
  },
  {
    id: 'document-attestation',
    title: 'MOFA & Embassy Document Attestation',
    shortTitle: 'Document Attestation',
    icon: FileCheck,
    image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
    category: 'Document Legalization',
    description: 'Apostille, Ministry of Foreign Affairs (MOFA), and embassy legalization for educational, marriage, and corporate certificates.',
    ctaText: 'Attest Documents'
  },
  {
    id: 'legal-translation',
    title: 'Certified MOJ Legal Translation',
    shortTitle: 'Legal Translation',
    icon: Languages,
    image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
    category: 'Official Translation',
    description: 'Ministry of Justice (MOJ) certified translation for UAE courts, government authorities, and banks across 50+ languages.',
    ctaText: 'Get Legal Translation'
  },
  {
    id: 'notary-services',
    title: 'Dubai Courts & Private Notary Services',
    shortTitle: 'Notary Services',
    icon: FileSignature,
    image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
    category: 'Judicial & Notary',
    description: 'Authentication of Power of Attorney (POA), declarations, contracts, and legal agreements with Dubai Courts notarization.',
    ctaText: 'Notarize Documents'
  },
  {
    id: 'wills-testament',
    title: 'DIFC & Dubai Courts Wills Registration',
    shortTitle: 'Wills & Testament',
    icon: Scale,
    image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
    category: 'Estate Planning',
    description: 'Comprehensive estate planning and asset protection for expatriates through DIFC Wills Service and Dubai Courts.',
    ctaText: 'Register a Will'
  }
];

export const PROPERTY_SUPPORT_SERVICES = [
  {
    id: 'dld-trustee',
    title: 'Dubai Land Department (DLD) Trustee',
    shortTitle: 'DLD Trustee Service',
    path: '/services/dld-trustee',
    icon: Home,
    image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
    category: 'Real Estate Transactions',
    description: 'Official property title deed transfer, mortgage registration, gift transfers, and sales contract execution.',
    ctaText: 'Explore DLD Trustee Service'
  },
  {
    id: 'rera-license',
    title: 'RERA Broker & Real Estate Licensing',
    shortTitle: 'RERA License Dubai',
    path: '/services/rera-license',
    icon: Building2,
    image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
    category: 'Real Estate Regulation',
    description: 'Real Estate Regulatory Agency (RERA) exam registration, broker cards, company licensing, and permit typing.',
    ctaText: 'Explore RERA License Dubai'
  },
  {
    id: 'property-revaluation',
    title: 'Official DLD Property Valuation',
    shortTitle: 'Property Revaluation',
    path: '/services/property-revaluation',
    icon: TrendingUp,
    image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
    category: 'Valuation & Advisory',
    description: 'Certified property valuation reports required for 10-Year Golden Visa qualification and bank refinancing.',
    ctaText: 'Explore Property Revaluation'
  },
  {
    id: 'drivers-license',
    title: "Driver's License in the UAE",
    shortTitle: "Driver's License in the UAE",
    path: '/services/drivers-license',
    icon: Car,
    image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
    category: 'RTA Licensing',
    description: 'RTA direct foreign license exchange for eligible country passport holders and golden visa holders with eye test booking.',
    ctaText: "Explore Driver's License in the UAE"
  },
  {
    id: 'medical-eid',
    title: 'Visa Medical & Emirates ID Centers',
    shortTitle: 'Medical aur EID Visa',
    path: '/medical-finder',
    icon: Activity,
    image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
    category: 'Health & Identity',
    description: 'Express VIP medical fitness typing at premium Smart Salem centers with simultaneous Emirates ID processing.',
    ctaText: 'Explore Medical aur EID Visa'
  },
  {
    id: 'visa-validity-checker',
    title: 'Visa Validity Checker',
    shortTitle: 'Visa Validity Checker',
    icon: Search,
    image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
    category: 'Compliance & Verification',
    description: 'Live real-time ICP & GDRFA file validity verification, fine calculation, and overstay grace period review.',
    ctaText: 'Check Visa Status'
  },
  {
    id: 'iloe-insurance',
    title: 'ILOE Insurance',
    shortTitle: 'ILOE Insurance',
    icon: Shield,
    image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
    category: 'Mandatory Insurance',
    description: 'Compulsory Involuntary Loss of Employment scheme subscription to avoid government fines and maintain labor compliance.',
    ctaText: 'Subscribe ILOE'
  },
  {
    id: 'product-registration',
    title: 'Product Registration',
    shortTitle: 'Product Registration',
    icon: Package,
    image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
    category: 'Municipality Compliance',
    description: 'Official Dubai Municipality Montaji registration for cosmetics, food products, health supplements, and consumer goods.',
    ctaText: 'Register Products'
  }
];

export const ALL_SERVICES_ITEMS = [...PRO_LEGAL_SERVICES, ...PROPERTY_SUPPORT_SERVICES];

export const DEFAULT_SERVICES_PREVIEW = {
  id: 'default-services',
  title: 'Expert Support, Every Step',
  shortTitle: 'Expert Support',
  icon: FileText,
  image: 'https://website-imges.vercel.app/hero_dubai_skyline_1790842330436.jpg',
  category: 'Full Government Typing Solutions',
  description: 'Reliable assistance for life and business in the UAE',
  ctaText: 'Explore All Services'
};

export const ServicesMegaDropdown = ({
  isOpen,
  activeServiceId,
  onSelectService,
  onOpenConsultation,
  onNavigate,
  onMouseEnter,
  onMouseLeave
}) => {
  const currentService = activeServiceId
    ? ALL_SERVICES_ITEMS.find((item) => item.id === activeServiceId) || DEFAULT_SERVICES_PREVIEW
    : DEFAULT_SERVICES_PREVIEW;

  const ActiveIcon = currentService.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[980px] max-w-[96vw] pointer-events-auto"
        >
          {/* Top Pointer Notch Centered Under Services */}
          <div className="relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FCFAF8] border-t border-l border-[#E6D7C3] rotate-45 z-20 shadow-xs" />

            {/* Main Mega Dropdown Card */}
            <div className="relative bg-[#FCFAF8] rounded-[22px] border border-[#E6D7C3] shadow-2xl shadow-black/15 p-5 sm:p-6 overflow-hidden backdrop-blur-sm">
              
              {/* Top Category Label */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#B8864B] uppercase font-heading">
                  OUR SERVICES
                </span>
                <span className="text-[10px] text-[#B8864B]/80 font-bold">▼</span>
              </div>

              {/* Three Column / Showcase + 2 Service Columns Layout */}
              <div className="flex gap-5 items-stretch">
                
                {/* Left Column: Dynamic Highlight Card */}
                <div className="w-[320px] shrink-0 relative rounded-2xl overflow-hidden min-h-[430px] flex flex-col justify-between p-5 text-white shadow-lg border border-black/10 group">
                  
                  {/* Dynamic Background Image with Smooth Crossfade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={currentService.image}
                        alt={currentService.title}
                        className="w-full h-full object-cover object-center"
                        loading="eager"
                        onError={(e) => {
                          const target = e.currentTarget;
                          const filename = target.src.split('/').pop();
                          if (target.src.startsWith('https://')) {
                            target.src = `/images/${filename}`;
                          } else {
                            target.src = `https://website-imges.vercel.app/${filename}`;
                          }
                        }}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Dual Gradients for High Legibility & Warm Dubai Golden Aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/35 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8864B]/20 via-transparent to-black/60 pointer-events-none mix-blend-overlay" />

                  {/* Top Frosted Glass Icon Badge */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-[#F5D7A1] shadow-lg shadow-black/30">
                      <ActiveIcon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Bottom Text Content & Action Button */}
                  <div className="relative z-10 mt-auto pt-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentService.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl font-bold tracking-tight text-white leading-snug drop-shadow-sm font-heading mb-1.5">
                          {currentService.title}
                        </h3>
                        <p className="text-xs text-white/85 leading-relaxed font-normal line-clamp-3 mb-4">
                          {currentService.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={() => {
                        if ((currentService.id === 'dld-trustee' || currentService.path) && onNavigate) {
                          onNavigate(currentService.path || '/services/dld-trustee');
                        } else {
                          onOpenConsultation(currentService.title);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 rounded-full shadow-md shadow-black/25 transition-all cursor-pointer"
                    >
                      <span>{currentService.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Area: Two Distinct Service Columns */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  
                  {/* Column 1: PRO & LEGAL SERVICES */}
                  <div className="flex flex-col">
                    <div className="mb-2 px-1">
                      <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#B8864B] uppercase font-heading">
                        PRO & LEGAL SERVICES
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 flex-1 justify-between">
                      {PRO_LEGAL_SERVICES.map((item) => {
                        const isHovered = item.id === currentService.id;
                        const ItemIcon = item.icon;

                        return (
                          <div
                            key={item.id}
                            onMouseEnter={() => onSelectService(item.id)}
                            onClick={() => {
                              if (item.path && onNavigate) {
                                onNavigate(item.path);
                              } else {
                                onOpenConsultation(item.title);
                              }
                            }}
                            className={`group relative flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all duration-150 cursor-pointer select-none ${
                              isHovered
                                ? 'bg-[#FAF5EC] border-[#B8864B]/60 shadow-xs'
                                : 'bg-white/85 border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5]'
                            }`}
                          >
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isHovered
                                  ? 'bg-[#B8864B] text-white shadow-xs'
                                  : 'bg-[#F7F2E9] text-[#B8864B] group-hover:bg-[#EFE5D5]'
                              }`}
                            >
                              <ItemIcon className="w-3.5 h-3.5 stroke-[1.8]" />
                            </div>

                            <span
                              className={`text-[12px] tracking-normal transition-colors font-sans truncate ${
                                isHovered
                                  ? 'text-[#976A36] font-bold'
                                  : 'text-[#2B2B2B] font-medium group-hover:text-[#B8864B]'
                              }`}
                            >
                              {item.shortTitle}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Column 2: PROPERTY & SUPPORT */}
                  <div className="flex flex-col">
                    <div className="mb-2 px-1">
                      <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#B8864B] uppercase font-heading">
                        PROPERTY & SUPPORT
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5 flex-1 justify-between">
                      {PROPERTY_SUPPORT_SERVICES.map((item) => {
                        const isHovered = item.id === currentService.id;
                        const ItemIcon = item.icon;

                        return (
                          <div
                            key={item.id}
                            onMouseEnter={() => onSelectService(item.id)}
                            onClick={() => {
                              if ((item.id === 'dld-trustee' || item.path) && onNavigate) {
                                onNavigate(item.path || '/services/dld-trustee');
                              } else {
                                onOpenConsultation(item.title);
                              }
                            }}
                            className={`group relative flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all duration-150 cursor-pointer select-none ${
                              isHovered
                                ? 'bg-[#FAF5EC] border-[#B8864B]/60 shadow-xs'
                                : 'bg-white/85 border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5]'
                            }`}
                          >
                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isHovered
                                  ? 'bg-[#B8864B] text-white shadow-xs'
                                  : 'bg-[#F7F2E9] text-[#B8864B] group-hover:bg-[#EFE5D5]'
                              }`}
                            >
                              <ItemIcon className="w-3.5 h-3.5 stroke-[1.8]" />
                            </div>

                            <span
                              className={`text-[12px] tracking-normal transition-colors font-sans truncate ${
                                isHovered
                                  ? 'text-[#976A36] font-bold'
                                  : 'text-[#2B2B2B] font-medium group-hover:text-[#B8864B]'
                              }`}
                            >
                              {item.shortTitle}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
