import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Briefcase, 
  Plane, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Sparkles,
  MessageSquare 
} from 'lucide-react';

export const VisaCategoryGrid = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const visaCategories = [
    { id: 'all', label: 'All Visas' },
    { id: 'residency', label: 'Golden & Green Visa' },
    { id: 'family', label: 'Family Sponsorship' },
    { id: 'business', label: 'Investor & Partner' },
    { id: 'employment', label: 'Work & Freelance' },
    { id: 'visit', label: 'Tourist & Visit' }
  ];

  const visas = [
    {
      id: 'golden-visa',
      category: 'residency',
      title: 'UAE Golden Visa (10-Year)',
      subtitle: 'Self-Sponsored Long-Term Residency',
      description: 'Exclusive 10-year independent residency for real estate investors, business owners, senior executives (AED 30k+ salary), engineers, and outstanding academic talents.',
      validity: '10 Years (Renewable)',
      time: '3 - 7 Working Days',
      fee: 'From AED 3,850',
      highlights: [
        '100% self-sponsored, no local employer needed',
        'Sponsor spouse, children of any age & unlimited domestic staff',
        'No maximum stay outside UAE limit (remain outside > 6 months without cancellation)',
        'VIP medical and priority biometric escort included'
      ],
      icon: <Award className="w-5 h-5 text-[#B8864B]" />,
      image: '/images/service_golden_visa_1790842391749.jpg'
    },
    {
      id: 'family-visa',
      category: 'family',
      title: 'Family & Dependent Visa',
      subtitle: 'Spouse, Children & Parents Sponsorship',
      description: 'Seamless sponsorship for your spouse, daughters (unmarried), sons (up to age 25), and parents with VIP medical fitness and Emirates ID typing.',
      validity: '1 - 3 Years (Matches Sponsor)',
      time: '2 - 5 Working Days',
      fee: 'From AED 1,650',
      highlights: [
        'Minimum sponsor salary AED 4,000 or AED 3,000 + accommodation',
        'Spouse and dependent daughters sponsored at any age',
        'Attested MOFA marriage & birth certificate support',
        'Express VIP medical fitness appointment booking'
      ],
      icon: <Users className="w-5 h-5 text-[#B8864B]" />,
      image: '/images/family_hero_1790966803470.jpg'
    },
    {
      id: 'green-visa',
      category: 'residency',
      title: 'UAE Green Visa (5-Year)',
      subtitle: 'Self-Employed, Freelancers & Skilled Employees',
      description: 'Five-year self-sponsored residency for qualified freelancers, self-employed professionals, and skilled employees without requiring a sponsor or employer.',
      validity: '5 Years',
      time: '4 - 7 Working Days',
      fee: 'From AED 2,950',
      highlights: [
        'Self-employed freelance permit from MOHRE required',
        'Minimum bachelor degree or specialized diploma',
        'Sponsorship of first-degree relatives for the full 5-year duration',
        'Flexible 6-month grace period after permit cancellation'
      ],
      icon: <Sparkles className="w-5 h-5 text-[#B8864B]" />,
      image: '/images/why_fast_process_1790842377870.jpg'
    },
    {
      id: 'investor-visa',
      category: 'business',
      title: 'Investor & Partner Visa',
      subtitle: 'Commercial Trade License Partners',
      description: 'Residency visa for shareholders and partners holding shares in Dubai mainland (DED) or Freezone companies across the UAE.',
      validity: '2 - 3 Years',
      time: '3 - 5 Working Days',
      fee: 'From AED 2,450',
      highlights: [
        'Establishment card and trade license clearance',
        'Full commercial partner status in mainland or freezone',
        'Family sponsorship eligibility and UAE bank account introduction',
        'Fast-track ICP/GDRFA VIP clearance'
      ],
      icon: <Briefcase className="w-5 h-5 text-[#B8864B]" />,
      image: '/images/why_experienced_team_1790842362837.jpg'
    },
    {
      id: 'employment-visa',
      category: 'employment',
      title: 'Employment & Work Visa',
      subtitle: 'MOHRE & Freezone Work Permits',
      description: 'End-to-end work permit typing, quota clearance, electronic work contract drafting, status change, and Emirates ID processing for corporate employees.',
      validity: '2 Years',
      time: '3 - 5 Working Days',
      fee: 'From AED 1,850',
      highlights: [
        'MOHRE entry permit & labor contract typing',
        'In-country status adjustment without leaving the UAE',
        'VIP medical fitness test appointment',
        'Complete regulatory compliance guarantee'
      ],
      icon: <FileText className="w-5 h-5 text-[#B8864B]" />,
      image: '/images/about_visa_consultant_1790842347102.jpg'
    },
    {
      id: 'tourist-visa',
      category: 'visit',
      title: 'Tourist & Visit Visa',
      subtitle: '30-Day & 60-Day Entry Permits',
      description: 'Express electronic tourist visas for single or multiple entry. Instant submission with same-day or 24-hour turnaround for individuals and groups.',
      validity: '30 / 60 Days (Extendable)',
      time: '24 - 48 Hours',
      fee: 'From AED 390',
      highlights: [
        '30-Day Single Entry & 60-Day Multiple Entry options',
        'In-country extension without airport border runs',
        'Mandatory UAE travel insurance included',
        'Passport copy and photo only required'
      ],
      icon: <Plane className="w-5 h-5 text-[#B8864B]" />,
      image: '/images/hero_dubai_skyline_1790842330436.jpg'
    }
  ];

  const filteredVisas = selectedCategory === 'all'
    ? visas
    : visas.filter(v => v.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
        {visaCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#B8864B] text-white shadow-md shadow-[#B8864B]/25'
                : 'bg-[#F9F7F4] text-[#555555] hover:bg-[#F2ECE1] hover:text-[#222222]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredVisas.map((visa) => (
          <motion.div
            key={visa.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FCFAF8] rounded-2xl border border-neutral-200/80 hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-lg overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={visa.image} 
                  alt={visa.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                
                <div className="absolute top-4 left-4 p-2 rounded-xl bg-white/95 backdrop-blur-md shadow-xs">
                  {visa.icon}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-semibold text-[#F5D7A1] uppercase tracking-wider">
                    {visa.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {visa.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                  {visa.description}
                </p>

                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-white border border-neutral-200/60 mb-6 text-center">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400">Validity</div>
                    <div className="text-xs font-bold text-[#222222] mt-0.5">{visa.validity}</div>
                  </div>
                  <div className="border-x border-neutral-200/60">
                    <div className="text-[10px] uppercase font-bold text-neutral-400">Processing</div>
                    <div className="text-xs font-bold text-[#222222] mt-0.5">{visa.time}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400">Typing Fee</div>
                    <div className="text-xs font-bold text-[#B8864B] mt-0.5">{visa.fee}</div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                    Key Features & Privileges:
                  </div>
                  {visa.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-neutral-200/50 flex flex-wrap items-center gap-3 mt-auto">
              {visa.id === 'tourist-visa' ? (
                <Link
                  to="/tourist-visa"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs shadow-md shadow-[#B8864B]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Tourist Visa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <button
                  onClick={() => onOpenConsultation(visa.title)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs shadow-md shadow-[#B8864B]/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Consult on {visa.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <a
                href={`https://wa.me/971566556645?text=${encodeURIComponent(`Hello BrightLink, I would like to inquire about ${visa.title}. Can you guide me on requirements and fees?`)}`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default VisaCategoryGrid;
