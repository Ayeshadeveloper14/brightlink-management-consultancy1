import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Zap, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Award, 
  X, 
  Building2,
  Fingerprint,
  Sparkles
} from 'lucide-react';

export const MedicalCenterList = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeed, setSelectedSpeed] = useState('all');

  const medicalCenters = [
    {
      id: 'smart-salem-citywalk',
      name: 'Smart Salem VIP Medical Fitness Center',
      location: 'City Walk, Al Safa, Dubai',
      zone: 'Downtown & Jumeirah',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Thu: 7:00 AM – 9:30 PM | Fri: 7:30 AM – 8:00 PM | Sun: 9:00 AM – 6:00 PM',
      services: [
        'Autonomous AI Blood Sampling', 
        'Rapid Chest X-Ray & Screening', 
        'VIP Luxury Hospitality Lounge', 
        'Emirates ID Biometrics Inside'
      ],
      phone: '+971 4 290 8989',
      isPopular: true,
      hasEID: true
    },
    {
      id: 'smart-salem-difc',
      name: 'Smart Salem Index Tower',
      location: 'Index Tower, DIFC, Dubai',
      zone: 'DIFC & Business Bay',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Fri: 8:00 AM – 8:00 PM',
      services: [
        'Paperless Fast-Track VIP Flow', 
        'Exclusive Executive Private Suites', 
        'Same-Day DHA Certificate Issuance',
        'Direct ICP Biometrics Enrollment'
      ],
      phone: '+971 4 290 8989',
      isPopular: true,
      hasEID: true
    },
    {
      id: 'smart-salem-knowledge',
      name: 'Smart Salem Knowledge Park',
      location: 'Dubai Knowledge Park, Block 19',
      zone: 'Marina & JLT',
      speed: 'VIP 30-Mins to 4-Hours',
      speedTag: 'vip',
      hours: 'Mon – Thu: 8:00 AM – 8:00 PM | Fri: 8:00 AM – 12:00 PM',
      services: [
        'Rapid DHA Medical Certification', 
        'Digital Health Record Integration', 
        'Zero Wait Time VIP Escort',
        'Express Typing & Verification'
      ],
      phone: '+971 4 290 8989',
      isPopular: false,
      hasEID: true
    },
    {
      id: 'muhaisnah-center',
      name: 'Al Muhaisnah Medical Fitness Center',
      location: 'Al Muhaisnah 2, Dubai',
      zone: 'Deira & North Dubai',
      speed: '24/7 Regular & Express (24h)',
      speedTag: 'express',
      hours: 'Open 24 Hours / 7 Days a Week',
      services: [
        'Round-the-Clock Emergency Typing', 
        'Female Dedicated Screening Wings', 
        'High-Volume Corporate Processing',
        'Direct MOHRE & GDRFA Sync'
      ],
      phone: '+971 4 502 2400',
      isPopular: false,
      hasEID: false
    },
    {
      id: 'al-yulayis',
      name: 'Al Yulayis Medical Fitness Center',
      location: 'Dubai Investment Park (DIP) 2',
      zone: 'DIP & Dubai South',
      speed: 'Express 24h & Regular 48h',
      speedTag: 'express',
      hours: 'Mon – Thu: 7:00 AM – 8:00 PM | Fri: 7:30 AM – 12:00 PM',
      services: [
        'Industrial & Freezone Staff Exams', 
        'Large Fleet Testing Facility', 
        'Convenient Highway Parking',
        'Comprehensive Occupational Health'
      ],
      phone: '+971 4 502 2400',
      isPopular: false,
      hasEID: false
    },
    {
      id: 'al-baraha',
      name: 'Al Baraha Smart Medical Center',
      location: 'Al Baraha, Deira, Dubai',
      zone: 'Old Dubai & Waterfront',
      speed: 'Standard 24h - 48h',
      speedTag: 'standard',
      hours: 'Mon – Thu: 7:30 AM – 3:30 PM | Fri: 7:30 AM – 12:00 PM',
      services: [
        'Complete Residency Screening', 
        'Tuberculosis Diagnostic Support', 
        'Vaccination Consultation & Typing',
        'Government Tariff Compliance'
      ],
      phone: '+971 4 502 2400',
      isPopular: false,
      hasEID: false
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Centers', count: medicalCenters.length },
    { id: 'vip', label: 'VIP (30m - 4h)', count: medicalCenters.filter(c => c.speedTag === 'vip').length },
    { id: 'express', label: 'Express (24h / 24-7)', count: medicalCenters.filter(c => c.speedTag === 'express').length },
    { id: 'standard', label: 'Standard (48h)', count: medicalCenters.filter(c => c.speedTag === 'standard').length }
  ];

  const filteredCenters = medicalCenters.filter(center => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = 
      center.name.toLowerCase().includes(term) ||
      center.location.toLowerCase().includes(term) ||
      center.zone.toLowerCase().includes(term) ||
      center.services.some(s => s.toLowerCase().includes(term));
    const matchesSpeed = selectedSpeed === 'all' || center.speedTag === selectedSpeed;
    return matchesSearch && matchesSpeed;
  });

  return (
    <section id="centers-directory" className="space-y-10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              OFFICIAL LOCATIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
            Official Visa Medical & Emirates ID Centers
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-1 max-w-2xl leading-relaxed">
            Choose from DHA-authorized smart centers across Dubai with turnarounds ranging from 30-minute luxury VIP screening to round-the-clock 24/7 facilities.
          </p>
        </div>

        <div className="text-xs font-semibold text-[#8C6230] bg-[#FAF5EC] px-3.5 py-1.5 rounded-full border border-[#E6D7C3] shrink-0 self-start md:self-auto">
          Showing {filteredCenters.length} of {medicalCenters.length} Verified Centers
        </div>
      </div>

      {/* Filter & Live Search Toolbar */}
      <div className="bg-[#FCFAF8] rounded-3xl p-5 sm:p-6 border border-[#EFEAE2] shadow-xs">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by center name, location (e.g. City Walk, DIFC, Muhaisnah)..."
              className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-xl border border-[#EFEAE2] focus:outline-none focus:border-[#B8864B] bg-white text-xs sm:text-sm text-[#222222] placeholder:text-neutral-400 transition-colors shadow-2xs"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5"
                aria-label="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Speed Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((btn) => {
              const isActive = selectedSpeed === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setSelectedSpeed(btn.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                      : 'bg-white text-[#555555] border-[#EFEAE2] hover:border-[#DECBB5] hover:bg-[#FAF6F0]'
                  }`}
                >
                  <span>{btn.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-[#777777]'
                  }`}>
                    {btn.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Centers Grid */}
      {filteredCenters.length === 0 ? (
        <div className="text-center py-16 bg-[#FCFAF8] rounded-3xl border border-[#EFEAE2] p-8 space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center mx-auto">
            <Search className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#222222]">No Centers Found</h3>
          <p className="text-xs text-[#666666] max-w-md mx-auto">
            No medical center matched your query “{searchTerm}”. Try adjusting your search term or selecting “All Centers”.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSelectedSpeed('all');
            }}
            className="px-4 py-2 rounded-xl bg-[#B8864B] text-white text-xs font-bold hover:bg-[#976A36] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center, idx) => (
            <motion.div
              key={center.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -5 }}
              className="bg-[#FCFAF8] rounded-3xl p-6 sm:p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Tags */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FAF5EC] text-[#8C6230] border border-[#E6D7C3]/60 truncate">
                    {center.zone}
                  </span>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {center.hasEID && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#FAF5EC] text-[#8C6230] border border-[#E6D7C3] flex items-center gap-1" title="Emirates ID Biometrics Inside">
                        <Fingerprint className="w-3 h-3 text-[#B8864B]" />
                        <span>EID Inside</span>
                      </span>
                    )}
                    {center.isPopular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#B8864B] text-white flex items-center gap-1 shadow-2xs">
                        <Award className="w-3 h-3" />
                        <span>VIP Smart AI</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Center Title & Location */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors leading-snug">
                    {center.name}
                  </h3>
                  <div className="flex items-start gap-1.5 text-xs text-[#666666] mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{center.location}</span>
                  </div>
                </div>

                {/* Speed & Hours Info Box */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#EFEAE2] space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-bold text-[#8C6230]">
                    <Zap className="w-3.5 h-3.5 text-[#B8864B]" />
                    <span>{center.speed}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#666666] text-[11px] leading-relaxed">
                    <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-400" />
                    <span>{center.hours}</span>
                  </div>
                </div>

                {/* Facility Highlights Checklist */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-extrabold text-[#976A36] uppercase tracking-wider block">
                    Facility Highlights:
                  </span>
                  {center.services.map((srv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                      <span className="leading-snug">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Book Priority Slot + Phone Button */}
              <div className="pt-5 mt-5 border-t border-[#EFEAE2] flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation?.(`VIP Medical Booking: ${center.name}`)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white text-xs font-bold transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5 active:scale-98"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Priority Slot</span>
                </button>

                <a
                  href={`tel:${center.phone}`}
                  className="w-10 h-10 rounded-xl bg-white hover:bg-[#FAF5EC] border border-[#EFEAE2] hover:border-[#B8864B] flex items-center justify-center text-[#B8864B] transition-colors shadow-2xs"
                  title={`Call ${center.name}`}
                  aria-label={`Call ${center.name}`}
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MedicalCenterList;
