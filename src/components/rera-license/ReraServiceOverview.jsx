import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  CreditCard, 
  Home, 
  KeyRound, 
  Landmark, 
  Palmtree, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  Users, 
  HelpCircle 
} from 'lucide-react';

export const ReraServiceOverview = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('broker-card');

  const licenseTypes = [
    {
      id: 'broker-card',
      title: 'Individual RERA Broker Card',
      shortTitle: 'Broker Card (Agents)',
      icon: CreditCard,
      badge: 'Individual License',
      summary: 'Mandatory personal license issued by the Dubai Land Department for agents actively listing, negotiating, and closing real estate transactions in Dubai.',
      whoNeeds: 'Individual real estate agents, property consultants, leasing executives, and brokers employed by a licensed Dubai agency.',
      validity: '1 Year (Renewable annually)',
      keyRequirements: [
        'Valid UAE Residency Visa & Emirates ID',
        'Certified DREI Certified Real Estate Broker Course completion',
        'Passing mark in the official RERA licensing examination',
        'Dubai Police Certificate of Good Conduct',
        'Attested high school diploma or university bachelor degree',
        'Valid employment contract with a RERA-licensed brokerage'
      ],
      estimatedFees: 'AED 500 (DREI Course) + AED 3,200 (RERA Exam & Card) + Govt Knowledge & Innovation Fees',
      actionPrompt: 'Get Your Broker Card'
    },
    {
      id: 'agency-brokerage',
      title: 'Real Estate Brokerage Firm (Company License)',
      shortTitle: 'Agency Setup (Company)',
      icon: Building2,
      badge: 'Corporate Setup',
      summary: 'Commercial company license allowing a business entity to open offices, hire real estate agents, sign brokerage contracts, and market properties across Dubai.',
      whoNeeds: 'Entrepreneurs, real estate investors, and international brokerages establishing an agency in Dubai Mainland (DED) or Freezones (IFZA, Meydan, DMCC).',
      validity: '1 Year Commercial License',
      keyRequirements: [
        'DED initial trade name reservation & commercial activity approval',
        '100% Foreign Ownership allowed in Dubai Mainland',
        'At least one partner/manager holding a valid RERA Broker Card',
        'Commercial physical office space with registered Ejari tenancy',
        'RERA initial approval certificate prior to DED commercial license issuance',
        'Trakheesi system registration for property marketing permits'
      ],
      estimatedFees: 'Approx. AED 15,000 - 25,000 (DED license + RERA corporate activity fees + Ejari)',
      actionPrompt: 'Setup Brokerage Firm'
    },
    {
      id: 'property-management',
      title: 'Property Management & Leasing Services',
      shortTitle: 'Property Management',
      icon: KeyRound,
      badge: 'Asset Administration',
      summary: 'Authorized license to supervise, manage, maintain, and rent properties on behalf of landlords, collect rent cheques, and issue Ejari tenancy contracts.',
      whoNeeds: 'Property management firms, landlord representation companies, and asset holding operations.',
      validity: '1 Year Commercial License',
      keyRequirements: [
        'Specific commercial activity: "Leasing and Management of Other People’s Property"',
        'Specialized DREI Property Management training certification',
        'Corporate bank guarantee / bank trust account compliance',
        'Standardized landlord-manager contracts approved by DLD',
        'Ejari portal agency authorization and login credentials'
      ],
      estimatedFees: 'Approx. AED 18,000 - 28,000 depending on jurisdiction and commercial office space',
      actionPrompt: 'Apply for Management License'
    },
    {
      id: 'valuation-consultation',
      title: 'Real Estate Valuation & Surveying License',
      shortTitle: 'Property Valuation',
      icon: Landmark,
      badge: 'Advisory & Appraisal',
      summary: 'Accreditation to appraise real estate assets for mortgage underwriting, bank refinancing, corporate mergers, and Golden Visa qualification audits.',
      whoNeeds: 'Certified property appraisers, survey consultants, and financial valuation advisory entities.',
      validity: '1 Year Accredited License',
      keyRequirements: [
        'Degree in Surveying, Real Estate, or Civil Engineering',
        'Documented 2-5 years certified appraisal track record',
        'Pass specialized DREI / RERA Valuer Assessment exam',
        'Professional indemnity insurance coverage',
        'Registration on the official Dubai Land Department Valuers Register'
      ],
      estimatedFees: 'Approx. AED 12,000 - 22,000 including RERA Valuer Council enrollment',
      actionPrompt: 'Inquire for Valuation License'
    },
    {
      id: 'holiday-homes',
      title: 'Holiday Homes & Short-Term Rental Operator',
      shortTitle: 'Holiday Homes',
      icon: Palmtree,
      badge: 'Tourism & Short-Stay',
      summary: 'Dual regulatory permit from Dubai Department of Economy and Tourism (DET) and RERA to sublease residential units for vacationers on Airbnb and Booking.com.',
      whoNeeds: 'Short-term rental operators, holiday home managers, serviced apartment companies, and hospitality investors.',
      validity: '1 Year Tourism & Commercial Permit',
      keyRequirements: [
        'Commercial license with "Holiday Homes Rental" activity',
        'Individual unit electronic permits (DET QR code per listing)',
        'Landlord NOC letter granting short-term subleasing authority',
        'Unit interior staging compliance with Dubai Tourism standard checklist',
        'Tourism Dirham fee monthly settlement system connection'
      ],
      estimatedFees: 'Approx. AED 15,000 base license + AED 300 - 1,200 per unit annual tourism permit',
      actionPrompt: 'Launch Holiday Home Setup'
    }
  ];

  const currentItem = licenseTypes.find((l) => l.id === activeTab) || licenseTypes[0];
  const CurrentIcon = currentItem.icon;

  const handleInquiry = (title) => {
    const query = encodeURIComponent(`Hello Brightlink, I would like to inquire about: ${title}. Please provide full pricing and requirements.`);
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section id="rera-overview" className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Comprehensive Regulation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            Service Overview
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            What is a RERA License in Dubai?
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The <strong>Real Estate Regulatory Agency (RERA)</strong>, an executive arm of the <strong>Dubai Land Department (DLD)</strong>, governs and licenses every real estate transaction, professional agent, and commercial agency in the Emirate of Dubai. Operating without an authorized RERA license or Trakheesi permit carries severe financial fines up to AED 50,000 and blacklisting. BrightLink provides complete, turnkey processing for every tier of RERA licensing.
          </p>
        </div>

        {/* Tab Selection Bar (Segmented Controls) */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] w-max min-w-full sm:min-w-0">
            {licenseTypes.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#B8864B] text-white shadow-md shadow-[#B8864B]/20'
                      : 'text-[#555555] hover:text-[#222222] hover:bg-neutral-100/70'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed License Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-10 border border-[#EFEAE2] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Details & Requirements */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shadow-xs">
                    <CurrentIcon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#B8864B] block">
                      {currentItem.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#222222]">
                      {currentItem.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                  {currentItem.summary}
                </p>

                {/* Who Needs It */}
                <div className="p-4 rounded-2xl bg-white border border-[#EFEAE2]">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#976A36] block mb-1">
                    Target Audience / Who Must Apply
                  </span>
                  <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed">
                    {currentItem.whoNeeds}
                  </p>
                </div>

                {/* Requirements Checklist */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#222222] mb-3">
                    Key Mandatory Requirements:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentItem.keyRequirements.map((req, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#EFEAE2]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#444444] font-medium leading-snug">
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Fees, Validity & Direct Action */}
              <div className="lg:col-span-4 space-y-5">
                <div className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs space-y-4">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-[#B8864B] block">
                    Financial & Renewal Profile
                  </span>

                  <div>
                    <span className="text-[11px] text-neutral-400 block font-medium">License Validity:</span>
                    <span className="text-sm font-bold text-[#222222]">
                      {currentItem.validity}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-neutral-100">
                    <span className="text-[11px] text-neutral-400 block font-medium">Government & Typing Cost:</span>
                    <p className="text-xs font-semibold text-[#B8864B] mt-0.5 leading-relaxed">
                      {currentItem.estimatedFees}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 space-y-2.5">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleInquiry(currentItem.title)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold shadow-md shadow-[#25D366]/20 transition-all cursor-pointer"
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>

                    <button
                      onClick={() => onOpenConsultation?.(`RERA License: ${currentItem.title}`)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF5EC] hover:bg-[#B8864B] text-[#B8864B] hover:text-white text-xs font-bold border border-[#E6D7C3] transition-all cursor-pointer"
                    >
                      <span>Book Free Consultation</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF5EC]/70 border border-[#E6D7C3] flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#555555] leading-relaxed">
                    Unsure which category matches your commercial activity? Our government PRO team audits your academic and corporate profile free of charge.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
