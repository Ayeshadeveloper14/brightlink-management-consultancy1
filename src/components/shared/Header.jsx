import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X,
  ChevronDown,
  Users, 
  Star, 
  Home, 
  TrendingUp, 
  Baby, 
  UserCheck, 
  Plane, 
  Laptop, 
  ArrowRight,
  FileText,
  CreditCard,
  Settings,
  FileCheck,
  Languages,
  FileSignature,
  Scale,
  Building2,
  Car,
  Activity,
  Search,
  Shield,
  ShieldCheck,
  Globe,
  ChevronRight,
  Sparkles,
  Package
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { LanguageSelector, MobileLanguageSelector } from './LanguageSelector.jsx';

/* =========================================================================
   VISA MEGA DROPDOWN DATA & COMPONENT
   ========================================================================= */

export const VISA_DROPDOWN_ITEMS = [
  {
    id: 'family-visa',
    title: 'Family Visa Sponsorship',
    shortTitle: 'Family Visa',
    path: '/family-visa',
    icon: Users,
    image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
    category: 'Residency & Sponsorship',
    description: 'Complete turnkey sponsorship for spouse, children, and parents with VIP medical fitness and Emirates ID biometrics typing.',
    ctaText: 'Explore Family Visa'
  },
  {
    id: 'golden-visa',
    title: 'UAE Golden Visa (10-Yr)',
    shortTitle: 'Golden Visa',
    path: '/golden-visa',
    icon: Star,
    image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg',
    category: 'Long-Term Residency',
    description: 'Prestigious 10-year self-sponsored residency for real estate investors (≥ AED 2M), public investors, executives, and specialized talents.',
    ctaText: 'Explore Golden Visa'
  },
  {
    id: 'property-visa',
    title: 'Property Investor Visa',
    shortTitle: 'Property Visa',
    path: '/property-visa',
    icon: Home,
    image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
    category: 'Real Estate Investor',
    description: 'Secure multi-year residency through freehold property investment across Dubai with fast-track Dubai Land Department (DLD) attestation.',
    ctaText: 'Explore Property Visa'
  },
  {
    id: 'investor-visa',
    title: 'Investor & Partner Visa',
    shortTitle: 'Investor Visa',
    path: '/investor-visa',
    icon: TrendingUp,
    image: 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg',
    category: 'Corporate & Business',
    description: 'Official residency for company partners and business shareholders across UAE Mainland (DED) and all UAE Free Zones.',
    ctaText: 'Explore Investor Visa'
  },
  {
    id: 'newborn-visa',
    title: 'Newborn Baby Visa',
    shortTitle: 'Newborn Visa',
    path: '/newborn-visa',
    icon: Baby,
    image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg',
    category: 'ICP / GDRFA Registration',
    description: 'Hassle-free residency application and passport birth registration assistance for infants born in the UAE within 120 days.',
    ctaText: 'Explore Newborn Visa'
  },
  {
    id: 'maid-visa',
    title: 'Domestic Worker & Maid Visa',
    shortTitle: 'Maid Visa',
    path: '/maid-visa',
    icon: UserCheck,
    image: 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg',
    category: 'Domestic Support',
    description: 'Official legal sponsorship for housemaids, nannies, and private chauffeurs with MOHRE contract and medical screening.',
    ctaText: 'Explore Maid Visa'
  },
  {
    id: 'tourist-visa',
    title: 'Tourist & Visit Visa',
    shortTitle: 'Tourist Visa',
    path: '/tourist-visa',
    icon: Plane,
    image: 'https://website-imges.vercel.app/hero_dubai_skyline_1790842330436.jpg',
    category: 'Travel & Visit',
    description: 'Quick-approval 30-day and 60-day single and multiple entry UAE visit visas for tourists, visiting relatives, and business visitors.',
    ctaText: 'Explore Tourist Visa'
  },
  {
    id: 'virtual-work-visa',
    title: 'Virtual Work & Nomad Visa',
    shortTitle: 'Virtual Work Visa',
    path: '/virtual-work-visa',
    icon: Laptop,
    image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg',
    category: 'Remote Work Residency',
    description: '1-year renewable UAE remote work visa allowing international professionals and digital nomads to live legally in Dubai.',
    ctaText: 'Explore Virtual Work Visa'
  }
];

export const VisaMegaDropdown = ({
  isOpen,
  activeVisaId,
  onSelectVisa,
  onOpenConsultation,
  onNavigate,
  onMouseEnter,
  onMouseLeave
}) => {
  const { t, tItem, isRTL } = useLanguage();
  const currentVisa = VISA_DROPDOWN_ITEMS.find((item) => item.id === activeVisaId) || VISA_DROPDOWN_ITEMS[0];
  const ActiveIcon = currentVisa.icon;

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
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[820px] max-w-[95vw] pointer-events-auto"
        >
          {/* Top Pointer Notch Centered Under Visa */}
          <div className="relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FCFAF8] border-t border-l border-[#E6D7C3] rotate-45 z-20 shadow-xs" />

            {/* Main Mega Dropdown Card */}
            <div className="relative bg-[#FCFAF8] rounded-[22px] border border-[#E6D7C3] shadow-2xl shadow-black/15 p-5 sm:p-6 overflow-hidden backdrop-blur-sm">
              
              {/* Top Category Label */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#B8864B] uppercase font-heading">
                  {t('visa_cat_header', 'RESIDENCY AND VISAS')}
                </span>
                <span className="text-[10px] text-[#B8864B]/80 font-bold">▼</span>
              </div>

              {/* Two Column Layout: Left Column gets +100px, Right Column stays exactly 326px */}
              <div className="flex gap-5 items-stretch">
                
                {/* Left Column: Dynamic Highlight Card (Expanded by 100px) */}
                <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[350px] flex flex-col justify-between p-5 text-white shadow-lg border border-black/10 group">
                  
                  {/* Dynamic Background Image with Smooth Crossfade */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVisa.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={currentVisa.image}
                        alt={currentVisa.title}
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
                        key={currentVisa.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h3 className="text-xl font-bold tracking-tight text-white leading-snug drop-shadow-sm font-heading mb-1.5">
                          {tItem(currentVisa.title)}
                        </h3>
                        <p className="text-xs text-white/85 leading-relaxed font-normal line-clamp-3 mb-4">
                          {currentVisa.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={() => {
                        if ((currentVisa.id === 'family-visa' || currentVisa.path) && onNavigate) {
                          onNavigate(currentVisa.path || '/family-visa');
                        } else {
                          onOpenConsultation(currentVisa.title);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 rounded-full shadow-md shadow-black/25 transition-all cursor-pointer"
                    >
                      <span>{currentVisa.id === 'family-visa' ? 'Explore Family Visa' : currentVisa.ctaText}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Right Column: 8 Visa Items List (Preserved Width) */}
                <div className="w-[326px] shrink-0 flex flex-col justify-between gap-1.5">
                  {VISA_DROPDOWN_ITEMS.map((item) => {
                    const isHovered = item.id === currentVisa.id;
                    const ItemIcon = item.icon;

                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => onSelectVisa(item.id)}
                        onClick={() => {
                          if ((item.id === 'family-visa' || item.path) && onNavigate) {
                            onNavigate(item.path || '/family-visa');
                          } else {
                            onOpenConsultation(item.title);
                          }
                        }}
                        className={`group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition-all duration-150 cursor-pointer select-none ${
                          isHovered
                            ? 'bg-[#FAF5EC] border-[#B8864B]/60 shadow-xs'
                            : 'bg-white/85 border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5]'
                        }`}
                      >
                        {/* Icon Container */}
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isHovered
                              ? 'bg-[#B8864B] text-white shadow-xs'
                              : 'bg-[#F7F2E9] text-[#B8864B] group-hover:bg-[#EFE5D5]'
                          }`}
                        >
                          <ItemIcon className="w-4 h-4 stroke-[1.8]" />
                        </div>

                        {/* Title */}
                        <span
                          className={`text-xs tracking-normal transition-colors font-sans ${
                            isHovered
                              ? 'text-[#976A36] font-bold'
                              : 'text-[#2B2B2B] font-medium group-hover:text-[#B8864B]'
                          }`}
                        >
                          {tItem(item.shortTitle)}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* =========================================================================
   SERVICES MEGA DROPDOWN DATA & COMPONENT
   ========================================================================= */

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
    path: '/services/tawjeeh-services',
    icon: UserCheck,
    image: '/images/tawjeeh_hero.jpg',
    category: 'Labor Compliance',
    description: 'Mandatory worker orientation sessions, labor law compliance, and certificate issuance for newly hired staff.',
    ctaText: 'Explore Tawjeeh Services'
  },
  {
    id: 'document-attestation',
    title: 'MOFA & Embassy Document Attestation',
    shortTitle: 'Document Attestation',
    path: '/services/document-attestation',
    icon: FileCheck,
    image: '/images/document_attestation_hero.jpg',
    category: 'Document Legalization',
    description: 'Apostille, Ministry of Foreign Affairs (MOFA), and embassy legalization for educational, marriage, and corporate certificates.',
    ctaText: 'Explore Document Attestation'
  },
  {
    id: 'legal-translation',
    title: 'Certified MOJ Legal Translation',
    shortTitle: 'Legal Translation',
    path: '/services/legal-translation',
    icon: Languages,
    image: '/images/legal_translation_hero.jpg',
    category: 'Official Translation',
    description: 'Ministry of Justice (MOJ) certified translation for UAE courts, government authorities, and banks across 50+ languages.',
    ctaText: 'Explore Legal Translation'
  },
  {
    id: 'notary-services',
    title: 'Dubai Courts & Private Notary Services',
    shortTitle: 'Notary Services',
    path: '/services/notary-services',
    icon: FileSignature,
    image: '/images/notary_services_hero.jpg',
    category: 'Judicial & Notary',
    description: 'Authentication of Power of Attorney (POA), declarations, contracts, and legal agreements with Dubai Courts notarization.',
    ctaText: 'Explore Notary Services'
  },
  {
    id: 'wills-testament',
    title: 'DIFC & Dubai Courts Wills Registration',
    shortTitle: 'Wills & Testament',
    path: '/services/wills-testament',
    icon: Scale,
    image: '/images/wills_testament_hero.jpg',
    category: 'Estate Planning',
    description: 'Comprehensive estate planning and asset protection for expatriates through DIFC Wills Service and Dubai Courts.',
    ctaText: 'Explore Wills & Testament'
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
    path: '/services/visa-validity-checker',
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
    path: '/services/iloe-insurance',
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
    path: '/services/product-registration',
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
  const { t, tItem, isRTL } = useLanguage();

  const currentService = activeServiceId
    ? ALL_SERVICES_ITEMS.find((item) => item.id === activeServiceId) || DEFAULT_SERVICES_PREVIEW
    : DEFAULT_SERVICES_PREVIEW;

  const ActiveIcon = currentService.icon;

  const isDefault = currentService.id === 'default-services';
  const displayTitle = isDefault ? t('services_default_title', currentService.title) : tItem(currentService.title);
  const displayDesc = isDefault ? t('services_default_desc', currentService.description) : currentService.description;
  const displayCta = isDefault ? t('services_default_btn', currentService.ctaText) : currentService.ctaText;

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
                  {t('services_cat_header', 'OUR SERVICES')}
                </span>
                <span className="text-[10px] text-[#B8864B]/80 font-bold">▼</span>
              </div>

              {/* Layout: Showcase Card (Left) + 2 Service Columns (Right) */}
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
                        alt={displayTitle}
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
                          {displayTitle}
                        </h3>
                        <p className="text-xs text-white/85 leading-relaxed font-normal line-clamp-3 mb-4">
                          {displayDesc}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={() => {
                        if ((currentService.id === 'dld-trustee' || currentService.path) && onNavigate) {
                          onNavigate(currentService.path || '/services/dld-trustee');
                        } else {
                          onOpenConsultation(displayTitle);
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 rounded-full shadow-md shadow-black/25 transition-all cursor-pointer"
                    >
                      <span>{currentService.id === 'dld-trustee' ? 'Explore DLD Trustee Service' : displayCta}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Right Area: Two Distinct Service Columns */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  
                  {/* Column 1: PRO & LEGAL SERVICES */}
                  <div className="flex flex-col">
                    <div className="mb-2 px-1">
                      <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#B8864B] uppercase font-heading">
                        {t('services_col1_header', 'PRO & LEGAL SERVICES')}
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
                              {tItem(item.shortTitle)}
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
                        {t('services_col2_header', 'PROPERTY & SUPPORT')}
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
                              {tItem(item.shortTitle)}
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

/* =========================================================================
   BUSINESS SETUP MEGA DROPDOWN DATA & COMPONENT (NO IMAGES, 3 COLUMNS)
   ========================================================================= */

export const MAINLAND_ITEMS = [
  { id: 'professional-license', title: 'Professional License', path: '/business-setup/mainland/professional-license' },
  { id: 'llc-company', title: 'LLC Company', path: '/business-setup/mainland/llc-company' },
  { id: 'branch-rep-office', title: 'Branch / Representative Office', path: '/business-setup/mainland/branch-rep-office' }
];

export const FREE_ZONE_ITEMS = [
  { id: 'dubai-free-zone', title: 'Dubai Free Zone' },
  { id: 'abu-dhabi-free-zone', title: 'Abu Dhabi Free Zone' },
  { id: 'sharjah-free-zone', title: 'Sharjah Free Zone' },
  { id: 'ajman-free-zone', title: 'Ajman Free Zone' },
  { id: 'fujairah-free-zone', title: 'Fujairah Free Zone' },
  { id: 'rak-free-zone', title: 'RAK Free Zone' },
  { id: 'uaq-free-zone', title: 'UAQ Free Zone' },
  { id: 'all-free-zones', title: 'All Free Zones', isSpecial: true }
];

export const OFFSHORE_ITEMS = [
  { id: 'rak-offshore', title: 'RAK Offshore', path: '/business-setup/offshore/rak-offshore' },
  { id: 'jafza-offshore', title: 'JAFZA Offshore', path: '/business-setup/offshore/jafza-offshore' },
  { id: 'ajman-offshore', title: 'Ajman Offshore', path: '/business-setup/offshore/ajman-offshore' }
];

export const BusinessSetupMegaDropdown = ({
  isOpen,
  onOpenConsultation,
  onNavigate,
  onMouseEnter,
  onMouseLeave
}) => {
  const { t, tItem, isRTL } = useLanguage();

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
          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-[840px] max-w-[95vw] pointer-events-auto"
        >
          {/* Top Pointer Notch Centered Under Business Setup */}
          <div className="relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FCFAF8] border-t border-l border-[#E6D7C3] rotate-45 z-20 shadow-xs" />

            {/* Main Mega Dropdown Card */}
            <div className="relative bg-[#FCFAF8] rounded-[22px] border border-[#E6D7C3] shadow-2xl shadow-black/15 p-5 sm:p-6 overflow-hidden backdrop-blur-sm">
              
              {/* Top Heading */}
              <div className="flex items-center gap-1.5 mb-5">
                <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#B8864B] uppercase font-heading">
                  {t('biz_header', 'START YOUR BUSINESS JOURNEY')}
                </span>
              </div>

              {/* Three Columns Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                
                {/* Column 1: MAINLAND */}
                <div className="flex flex-col">
                  {/* Column Header Card */}
                  <div className="bg-[#f7ebd9] border border-[#e7d5bf] rounded-xl px-4 py-3 flex items-center gap-3 text-[#8c5e28] shadow-2xs mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8864b] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Building2 className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8c5e28] font-heading">
                      {t('biz_col_mainland', 'MAINLAND')}
                    </span>
                  </div>

                  {/* Mainland Items */}
                  <div className="flex flex-col gap-2">
                    {MAINLAND_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          if (item.path && onNavigate) {
                            onNavigate(item.path);
                          } else {
                            onOpenConsultation(`Mainland Setup - ${item.title}`);
                          }
                        }}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/85 border border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5] transition-all duration-150 cursor-pointer select-none shadow-2xs"
                      >
                        <span className="text-xs font-medium text-[#2B2B2B] group-hover:text-[#B8864B] group-hover:font-semibold transition-colors">
                          {tItem(item.title)}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 text-[#B8864B] transition-transform duration-150 group-hover:translate-x-0.5 shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : ''}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: FREE ZONE */}
                <div className="flex flex-col">
                  {/* Column Header Card */}
                  <div className="bg-[#f7ebd9] border border-[#e7d5bf] rounded-xl px-4 py-3 flex items-center gap-3 text-[#8c5e28] shadow-2xs mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8864b] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Globe className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8c5e28] font-heading">
                      {t('biz_col_freezone', 'FREE ZONE')}
                    </span>
                  </div>

                  {/* Free Zone Items */}
                  <div className="flex flex-col gap-2">
                    {FREE_ZONE_ITEMS.map((item) => {
                      if (item.isSpecial) {
                        return (
                          <div
                            key={item.id}
                            onClick={() => onOpenConsultation('Free Zone Setup - All Free Zones')}
                            className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#FAF2E6] to-[#F5E8D4] border border-[#B8864B]/60 hover:from-[#F5E8D4] hover:to-[#EED8BC] transition-all duration-150 cursor-pointer select-none shadow-xs mt-0.5"
                          >
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-3 h-3 text-[#B8864B] fill-[#B8864B]" />
                              <span className="text-xs font-bold text-[#8C5E28] group-hover:text-[#6D4518] transition-colors">
                                {tItem(item.title)}
                              </span>
                            </div>
                            <ArrowRight className={`w-3.5 h-3.5 text-[#B8864B] group-hover:translate-x-0.5 transition-transform shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : ''}`} />
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.id}
                          onClick={() => onOpenConsultation(`Free Zone Setup - ${item.title}`)}
                          className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/85 border border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5] transition-all duration-150 cursor-pointer select-none shadow-2xs"
                        >
                          <span className="text-xs font-medium text-[#2B2B2B] group-hover:text-[#B8864B] group-hover:font-semibold transition-colors">
                            {tItem(item.title)}
                          </span>
                          <ChevronRight className={`w-3.5 h-3.5 text-[#B8864B] transition-transform duration-150 group-hover:translate-x-0.5 shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : ''}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: OFFSHORE */}
                <div className="flex flex-col">
                  {/* Column Header Card */}
                  <div className="bg-[#f7ebd9] border border-[#e7d5bf] rounded-xl px-4 py-3 flex items-center gap-3 text-[#8c5e28] shadow-2xs mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#b8864b] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8c5e28] font-heading">
                      {t('biz_col_offshore', 'OFFSHORE')}
                    </span>
                  </div>

                  {/* Offshore Items */}
                  <div className="flex flex-col gap-2">
                    {OFFSHORE_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          if (item.path && onNavigate) {
                            onNavigate(item.path);
                          } else {
                            onOpenConsultation(`Offshore Setup - ${item.title}`);
                          }
                        }}
                        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/85 border border-[#EFEAE2] hover:bg-[#FAF6F0] hover:border-[#DECBB5] transition-all duration-150 cursor-pointer select-none shadow-2xs"
                      >
                        <span className="text-xs font-medium text-[#2B2B2B] group-hover:text-[#B8864B] group-hover:font-semibold transition-colors">
                          {tItem(item.title)}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 text-[#B8864B] transition-transform duration-150 group-hover:translate-x-0.5 shrink-0 ${isRTL ? 'rotate-180 group-hover:-translate-x-0.5' : ''}`} />
                      </div>
                    ))}
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

/* =========================================================================
   MAIN HEADER COMPONENT
   ========================================================================= */

export const Header = ({ onOpenConsultation }) => {
  const { t, tItem, isRTL, currentLanguage, languageConfig } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Visa Mega Dropdown state
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);
  const [activeVisaId, setActiveVisaId] = useState('family-visa');
  const [mobileVisaOpen, setMobileVisaOpen] = useState(false);
  const visaCloseTimerRef = useRef(null);

  // Services Mega Dropdown state
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState(null); // null = default "Expert Support, Every Step"
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesCloseTimerRef = useRef(null);

  // Business Setup Mega Dropdown state
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const businessCloseTimerRef = useRef(null);

  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsVisaDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsBusinessDropdownOpen(false);
    setActiveServiceId(null);
  }, [location.pathname]);

  // Visa hover handlers
  const handleVisaMouseEnter = () => {
    if (visaCloseTimerRef.current) clearTimeout(visaCloseTimerRef.current);
    setIsServicesDropdownOpen(false);
    setIsBusinessDropdownOpen(false);
    setIsVisaDropdownOpen(true);
  };

  const handleVisaMouseLeave = () => {
    visaCloseTimerRef.current = setTimeout(() => {
      setIsVisaDropdownOpen(false);
    }, 180);
  };

  // Services hover handlers
  const handleServicesMouseEnter = () => {
    if (servicesCloseTimerRef.current) clearTimeout(servicesCloseTimerRef.current);
    setIsVisaDropdownOpen(false);
    setIsBusinessDropdownOpen(false);
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesCloseTimerRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
      setActiveServiceId(null);
    }, 180);
  };

  // Business Setup hover handlers
  const handleBusinessMouseEnter = () => {
    if (businessCloseTimerRef.current) clearTimeout(businessCloseTimerRef.current);
    setIsVisaDropdownOpen(false);
    setIsServicesDropdownOpen(false);
    setIsBusinessDropdownOpen(true);
  };

  const handleBusinessMouseLeave = () => {
    businessCloseTimerRef.current = setTimeout(() => {
      setIsBusinessDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (visaCloseTimerRef.current) clearTimeout(visaCloseTimerRef.current);
      if (servicesCloseTimerRef.current) clearTimeout(servicesCloseTimerRef.current);
      if (businessCloseTimerRef.current) clearTimeout(businessCloseTimerRef.current);
    };
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  const navItems = [
    { id: 'home', label: t('nav_home', 'Home'), path: '/' },
    { id: 'visa', label: t('nav_visa', 'Visa'), path: '/visa' },
    { id: 'services', label: t('nav_services', 'Services'), path: '/services' },
    { id: 'business-setup', label: t('nav_business_setup', 'Business Setup'), path: '/business-setup' },
    { id: 'visa-check', label: t('nav_visa_check', 'Visa Check'), path: '/visa-check' },
    { id: 'about', label: t('nav_about', 'About'), path: '/about' },
    { id: 'blog', label: t('nav_blog', 'Blog'), path: '/blog' },
    { id: 'contact', label: t('nav_contact', 'Contact'), path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5'
          : isHome
          ? 'bg-transparent py-5 border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5'
      }`}
    >
      <div className="w-full max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 xl:px-6 2xl:px-8 flex items-center justify-between gap-3 lg:gap-4 xl:gap-5">
        
        {/* Left: Brightlink Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-[#B8864B]/30 group-hover:scale-105 transition-transform duration-200">
            BT
          </div>
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold tracking-tight leading-none transition-colors ${
                isTransparent ? 'text-white' : 'text-[#222222]'
              }`}
            >
              Bright<span className={isTransparent ? 'text-[#F5D7A1]' : 'text-[#B8864B]'}>link</span>
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider font-semibold mt-0.5 transition-colors ${
                isTransparent ? 'text-neutral-300' : 'text-neutral-500'
              }`}
            >
              {t('nav_typing_sub', 'Typing & Consulting')}
            </span>
          </div>
        </Link>

        {/* Center: Navigation Menu */}
        <nav className="hidden xl:flex items-center justify-center flex-nowrap shrink-0 xl:shrink min-w-0 gap-[clamp(8px,1vw,20px)] 2xl:gap-[26px] text-[13px] min-[1380px]:text-[13.5px] 2xl:text-[14.5px] font-semibold">
          {navItems.map((item) => {
            const isItemHome = item.id === 'home';
            const isItemVisa = item.id === 'visa';
            const isItemServices = item.id === 'services';
            const isItemBusinessSetup = item.id === 'business-setup';

            // Mega Dropdown for Visa
            if (isItemVisa) {
              return (
                <div
                  key={item.id}
                  className="relative py-2 shrink-0"
                  onMouseEnter={handleVisaMouseEnter}
                  onMouseLeave={handleVisaMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIsVisaDropdownOpen(false);
                      navigate('/visa');
                    }}
                    className={`relative py-1 flex items-center gap-1 cursor-pointer select-none transition-colors whitespace-nowrap ${
                      isVisaDropdownOpen
                        ? isTransparent
                          ? 'text-[#F5D7A1] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#F5D7A1]'
                          : 'text-[#B8864B] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B8864B]'
                        : isTransparent
                        ? 'text-white/85 hover:text-[#F5D7A1]'
                        : 'text-[#444444] hover:text-[#B8864B]'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                        isVisaDropdownOpen
                          ? isTransparent ? 'rotate-180 text-[#F5D7A1]' : 'rotate-180 text-[#B8864B]'
                          : isTransparent ? 'text-neutral-300' : 'text-neutral-400'
                      }`}
                    />
                  </button>

                  {/* Visa Mega Dropdown */}
                  <VisaMegaDropdown
                    isOpen={isVisaDropdownOpen}
                    activeVisaId={activeVisaId}
                    onSelectVisa={(id) => setActiveVisaId(id)}
                    onOpenConsultation={(visaTitle) => {
                      setIsVisaDropdownOpen(false);
                      onOpenConsultation(visaTitle);
                    }}
                    onNavigate={(path) => {
                      setIsVisaDropdownOpen(false);
                      navigate(path);
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                    }}
                    onMouseEnter={handleVisaMouseEnter}
                    onMouseLeave={handleVisaMouseLeave}
                  />
                </div>
              );
            }

            // Mega Dropdown for Services
            if (isItemServices) {
              return (
                <div
                  key={item.id}
                  className="relative py-2 shrink-0"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIsServicesDropdownOpen(false);
                      navigate('/services');
                    }}
                    className={`relative py-1 flex items-center gap-1 cursor-pointer select-none transition-colors whitespace-nowrap ${
                      isServicesDropdownOpen
                        ? isTransparent
                          ? 'text-[#F5D7A1] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#F5D7A1]'
                          : 'text-[#B8864B] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B8864B]'
                        : isTransparent
                        ? 'text-white/85 hover:text-[#F5D7A1]'
                        : 'text-[#444444] hover:text-[#B8864B]'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                        isServicesDropdownOpen
                          ? isTransparent ? 'rotate-180 text-[#F5D7A1]' : 'rotate-180 text-[#B8864B]'
                          : isTransparent ? 'text-neutral-300' : 'text-neutral-400'
                      }`}
                    />
                  </button>

                  {/* Services Mega Dropdown */}
                  <ServicesMegaDropdown
                    isOpen={isServicesDropdownOpen}
                    activeServiceId={activeServiceId}
                    onSelectService={(id) => setActiveServiceId(id)}
                    onOpenConsultation={(serviceTitle) => {
                      setIsServicesDropdownOpen(false);
                      onOpenConsultation(serviceTitle);
                    }}
                    onNavigate={(path) => {
                      setIsServicesDropdownOpen(false);
                      navigate(path);
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                      if (document.documentElement) document.documentElement.scrollTop = 0;
                      if (document.body) document.body.scrollTop = 0;
                    }}
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  />
                </div>
              );
            }

            // Mega Dropdown for Business Setup
            if (isItemBusinessSetup) {
              return (
                <div
                  key={item.id}
                  className="relative py-2 shrink-0"
                  onMouseEnter={handleBusinessMouseEnter}
                  onMouseLeave={handleBusinessMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIsBusinessDropdownOpen(false);
                      navigate('/business-setup');
                    }}
                    className={`relative py-1 flex items-center gap-1 cursor-pointer select-none transition-colors whitespace-nowrap ${
                      isBusinessDropdownOpen
                        ? isTransparent
                          ? 'text-[#F5D7A1] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#F5D7A1]'
                          : 'text-[#B8864B] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B8864B]'
                        : isTransparent
                        ? 'text-white/85 hover:text-[#F5D7A1]'
                        : 'text-[#444444] hover:text-[#B8864B]'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                        isBusinessDropdownOpen
                          ? isTransparent ? 'rotate-180 text-[#F5D7A1]' : 'rotate-180 text-[#B8864B]'
                          : isTransparent ? 'text-neutral-300' : 'text-neutral-400'
                      }`}
                    />
                  </button>

                  {/* Business Setup Mega Dropdown */}
                  <BusinessSetupMegaDropdown
                    isOpen={isBusinessDropdownOpen}
                    onOpenConsultation={(serviceTitle) => {
                      setIsBusinessDropdownOpen(false);
                      onOpenConsultation(serviceTitle);
                    }}
                    onNavigate={(path) => {
                      setIsBusinessDropdownOpen(false);
                      navigate(path);
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                      if (document.documentElement) document.documentElement.scrollTop = 0;
                      if (document.body) document.body.scrollTop = 0;
                    }}
                    onMouseEnter={handleBusinessMouseEnter}
                    onMouseLeave={handleBusinessMouseLeave}
                  />
                </div>
              );
            }

            const itemPath = item.path || (item.id === 'home' ? '/' : `/${item.id}`);
            const isItemActive = item.id === 'home' ? isHome : location.pathname === itemPath;

            return (
              <Link
                key={item.id}
                to={itemPath}
                className={`relative py-1 flex items-center gap-1.5 cursor-pointer select-none transition-colors shrink-0 whitespace-nowrap ${
                  isItemActive
                    ? isTransparent
                      ? 'text-[#F5D7A1] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#F5D7A1]'
                      : 'text-[#B8864B] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#B8864B]'
                    : isTransparent
                    ? 'text-white/85 hover:text-[#F5D7A1]'
                    : 'text-[#444444] hover:text-[#B8864B]'
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop CTA Actions & Language Selector */}
        <div className="hidden xl:flex items-center gap-2 2xl:gap-2.5 shrink-0">
          <LanguageSelector isTransparent={isTransparent} />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-1.5 px-3.5 2xl:px-4 py-2 text-xs font-semibold text-white bg-[#B8864B] hover:bg-[#9F7038] rounded-xl shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>{t('nav_consultation_btn', 'Free Consultation')}</span>
          </motion.button>
        </div>

        {/* Mobile/Tablet Right Controls: Free Consultation (sm:flex) + Language Selector + Hamburger */}
        <div className="flex items-center gap-2 xl:hidden">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenConsultation()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#B8864B] hover:bg-[#9F7038] rounded-xl shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>{t('nav_consultation_btn', 'Free Consultation')}</span>
          </motion.button>

          <MobileLanguageSelector isTransparent={isTransparent} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className={`p-2 rounded-lg cursor-pointer transition-colors ${
              isTransparent ? 'text-white hover:text-[#F5D7A1]' : 'text-[#222222] hover:text-[#B8864B]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-white border-b border-neutral-200 px-6 py-6 shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            <nav className="flex flex-col space-y-2 text-sm font-semibold text-[#333333]">
              {navItems.map((item) => {
                const isItemHome = item.id === 'home';
                const isItemVisa = item.id === 'visa';
                const isItemServices = item.id === 'services';
                const isItemBusinessSetup = item.id === 'business-setup';

                // Mobile Visa Accordion
                if (isItemVisa) {
                  return (
                    <div key={item.id} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileVisaOpen(!mobileVisaOpen)}
                        className={`py-2.5 px-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                          mobileVisaOpen
                            ? 'border-[#B8864B]/40 bg-[#F5F1EB] text-[#B8864B] font-bold'
                            : 'border-neutral-100/70 text-[#555555] bg-neutral-50/50'
                        }`}
                      >
                        <span className="font-semibold">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 text-[#B8864B] transition-transform duration-200 ${mobileVisaOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileVisaOpen && (
                        <div className="pl-2 pr-1 pt-1.5 pb-2 flex flex-col gap-1 border-l-2 border-[#B8864B]/30 ml-3 mt-1.5">
                          {VISA_DROPDOWN_ITEMS.map((visa) => (
                            <button
                              key={visa.id}
                              type="button"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                if (visa.id === 'family-visa' || visa.path) {
                                  navigate(visa.path || '/family-visa');
                                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                } else {
                                  onOpenConsultation(visa.title);
                                }
                              }}
                              className="text-left text-xs py-2 px-2.5 rounded-lg text-neutral-700 hover:text-[#B8864B] hover:bg-[#F5F1EB] transition-colors flex items-center justify-between group cursor-pointer"
                            >
                              <span className="font-medium group-hover:font-semibold">{tItem(visa.shortTitle)}</span>
                              <span className="text-[10px] text-neutral-400 group-hover:text-[#B8864B]">→</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Mobile Services Accordion
                if (isItemServices) {
                  return (
                    <div key={item.id} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`py-2.5 px-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                          mobileServicesOpen
                            ? 'border-[#B8864B]/40 bg-[#F5F1EB] text-[#B8864B] font-bold'
                            : 'border-neutral-100/70 text-[#555555] bg-neutral-50/50'
                        }`}
                      >
                        <span className="font-semibold">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 text-[#B8864B] transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileServicesOpen && (
                        <div className="pl-2 pr-1 pt-1.5 pb-2 flex flex-col gap-2 border-l-2 border-[#B8864B]/30 ml-3 mt-1.5">
                          <div>
                            <span className="text-[10px] font-bold tracking-wider text-[#B8864B] uppercase block px-2.5 mb-1">
                              {t('services_col1_header', 'PRO & LEGAL SERVICES')}
                            </span>
                            {PRO_LEGAL_SERVICES.map((srv) => (
                              <button
                                key={srv.id}
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  if (srv.path) {
                                    navigate(srv.path);
                                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                    if (document.documentElement) document.documentElement.scrollTop = 0;
                                    if (document.body) document.body.scrollTop = 0;
                                  } else {
                                    onOpenConsultation(srv.title);
                                  }
                                }}
                                className="w-full text-left text-xs py-1.5 px-2.5 rounded-lg text-neutral-700 hover:text-[#B8864B] hover:bg-[#F5F1EB] transition-colors flex items-center justify-between group cursor-pointer"
                              >
                                <span className="font-medium group-hover:font-semibold">{tItem(srv.shortTitle)}</span>
                                <span className="text-[10px] text-neutral-400 group-hover:text-[#B8864B]">→</span>
                              </button>
                            ))}
                          </div>

                          <div className="pt-1 border-t border-neutral-100">
                            <span className="text-[10px] font-bold tracking-wider text-[#B8864B] uppercase block px-2.5 mb-1">
                              {t('services_col2_header', 'PROPERTY & SUPPORT')}
                            </span>
                            {PROPERTY_SUPPORT_SERVICES.map((srv) => (
                              <button
                                key={srv.id}
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  if (srv.id === 'dld-trustee' || srv.path) {
                                    navigate(srv.path || '/services/dld-trustee');
                                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                    if (document.documentElement) document.documentElement.scrollTop = 0;
                                    if (document.body) document.body.scrollTop = 0;
                                  } else {
                                    onOpenConsultation(srv.title);
                                  }
                                }}
                                className="w-full text-left text-xs py-1.5 px-2.5 rounded-lg text-neutral-700 hover:text-[#B8864B] hover:bg-[#F5F1EB] transition-colors flex items-center justify-between group cursor-pointer"
                              >
                                <span className="font-medium group-hover:font-semibold">{tItem(srv.shortTitle)}</span>
                                <span className="text-[10px] text-neutral-400 group-hover:text-[#B8864B]">→</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Mobile Business Setup Accordion
                if (isItemBusinessSetup) {
                  return (
                    <div key={item.id} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
                        className={`py-2.5 px-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                          mobileBusinessOpen
                            ? 'border-[#B8864B]/40 bg-[#F5F1EB] text-[#B8864B] font-bold'
                            : 'border-neutral-100/70 text-[#555555] bg-neutral-50/50'
                        }`}
                      >
                        <span className="font-semibold">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 text-[#B8864B] transition-transform duration-200 ${mobileBusinessOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileBusinessOpen && (
                        <div className="pl-2 pr-1 pt-1.5 pb-2 flex flex-col gap-2 border-l-2 border-[#B8864B]/30 ml-3 mt-1.5">
                          <div>
                            <span className="text-[10px] font-bold tracking-wider text-[#B8864B] uppercase block px-2.5 mb-1">
                              {t('biz_col_mainland', 'MAINLAND')}
                            </span>
                            {MAINLAND_ITEMS.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  if (item.path) {
                                    navigate(item.path);
                                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                    if (document.documentElement) document.documentElement.scrollTop = 0;
                                    if (document.body) document.body.scrollTop = 0;
                                  } else {
                                    onOpenConsultation(`Mainland Setup - ${item.title}`);
                                  }
                                }}
                                className="w-full text-left text-xs py-1.5 px-2.5 rounded-lg text-neutral-700 hover:text-[#B8864B] hover:bg-[#F5F1EB] transition-colors flex items-center justify-between group cursor-pointer"
                              >
                                <span className="font-medium group-hover:font-semibold">{tItem(item.title)}</span>
                                <span className="text-[10px] text-neutral-400 group-hover:text-[#B8864B]">→</span>
                              </button>
                            ))}
                          </div>

                          <div className="pt-1 border-t border-neutral-100">
                            <span className="text-[10px] font-bold tracking-wider text-[#B8864B] uppercase block px-2.5 mb-1">
                              {t('biz_col_freezone', 'FREE ZONE')}
                            </span>
                            {FREE_ZONE_ITEMS.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  onOpenConsultation(`Free Zone Setup - ${item.title}`);
                                }}
                                className="w-full text-left text-xs py-1.5 px-2.5 rounded-lg text-neutral-700 hover:text-[#B8864B] hover:bg-[#F5F1EB] transition-colors flex items-center justify-between group cursor-pointer"
                              >
                                <span className="font-medium group-hover:font-semibold">{tItem(item.title)}</span>
                                <span className="text-[10px] text-neutral-400 group-hover:text-[#B8864B]">→</span>
                              </button>
                            ))}
                          </div>

                          <div className="pt-1 border-t border-neutral-100">
                            <span className="text-[10px] font-bold tracking-wider text-[#B8864B] uppercase block px-2.5 mb-1">
                              {t('biz_col_offshore', 'OFFSHORE')}
                            </span>
                            {OFFSHORE_ITEMS.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  if (item.path) {
                                    navigate(item.path);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  } else {
                                    onOpenConsultation(`Offshore Setup - ${item.title}`);
                                  }
                                }}
                                className="w-full text-left text-xs py-1.5 px-2.5 rounded-lg text-neutral-700 hover:text-[#B8864B] hover:bg-[#F5F1EB] transition-colors flex items-center justify-between group cursor-pointer"
                              >
                                <span className="font-medium group-hover:font-semibold">{tItem(item.title)}</span>
                                <span className="text-[10px] text-neutral-400 group-hover:text-[#B8864B]">→</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const itemPath = item.path || (item.id === 'home' ? '/' : `/${item.id}`);
                const isItemActive = item.id === 'home' ? isHome : location.pathname === itemPath;

                return (
                  <Link
                    key={item.id}
                    to={itemPath}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-between cursor-pointer select-none transition-colors ${
                      isItemActive
                        ? 'border-neutral-100 bg-[#F5F1EB] text-[#B8864B] font-bold'
                        : 'border-neutral-100/70 text-[#555555] bg-neutral-50/50 hover:bg-[#F5F1EB] hover:text-[#B8864B]'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 px-4 text-sm font-bold text-white bg-[#B8864B] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{t('nav_consultation_btn', 'Free Consultation')}</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smooth GPU-Accelerated Golden Scroll Progress Bar under header */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C5985B] via-[#F3D7A4] to-[#976A36] origin-left pointer-events-none z-50 shadow-xs"
      />
    </header>
  );
};

export default Header;
