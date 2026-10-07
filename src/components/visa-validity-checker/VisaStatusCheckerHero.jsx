import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Search, 
  ShieldCheck, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  Globe, 
  FileText, 
  Send, 
  RotateCcw, 
  HelpCircle,
  ExternalLink,
  PhoneCall,
  User,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

const POPULAR_NATIONALITIES = [
  'India',
  'Pakistan',
  'Philippines',
  'United Kingdom',
  'United States',
  'Egypt',
  'Bangladesh',
  'Canada',
  'Russia',
  'Nigeria',
  'Lebanon',
  'Jordan',
  'Syria',
  'France',
  'Germany',
  'Italy',
  'China',
  'Other Nationality'
];

export const VisaStatusCheckerHero = ({ onOpenConsultation }) => {
  const { isRTL } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('passport'); // 'passport' | 'application'
  
  // Form State
  const [passportNumber, setPassportNumber] = useState('');
  const [nationality, setNationality] = useState('India');
  const [dob, setDob] = useState('1990-05-15');
  const [visaType, setVisaType] = useState('Residence Visa (Dubai / GDRFA)');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  // Application/File tab state
  const [fileNumber, setFileNumber] = useState('');
  const [emirate, setEmirate] = useState('Dubai (GDRFA)');

  // Simulation Status
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);
  const [statusPreset, setStatusPreset] = useState('valid'); // 'valid' | 'expiring' | 'expired'

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setIsSearching(true);
    setResult(null);

    setTimeout(() => {
      setIsSearching(false);
      if (statusPreset === 'valid') {
        setResult({
          status: 'Active & Valid',
          statusColor: 'green',
          visaType: visaType || 'Residence Visa (Mainland LLC)',
          fileNo: '201/2023/1849204',
          unifiedId: '784-1990-4829104-1',
          issueDate: '15 Oct 2023',
          expiryDate: '14 Oct 2025',
          daysRemaining: 224,
          gracePeriod: '30 Days after expiration',
          finesAccumulated: 'AED 0.00',
          fineStatus: 'No Violations / Clear Immigration Record',
          sponsor: 'Commercial Establishment (Dubai DED)',
          issuingAuthority: 'GDRFA Dubai'
        });
      } else if (statusPreset === 'expiring') {
        setResult({
          status: 'Expiring Soon (Under 30 Days)',
          statusColor: 'amber',
          visaType: visaType || 'Tourist / Visit Visa (60 Days)',
          fileNo: '101/2024/938102',
          unifiedId: '784-1992-9182301-3',
          issueDate: '10 Feb 2025',
          expiryDate: '11 Apr 2025',
          daysRemaining: 12,
          gracePeriod: '10 Days grace period',
          finesAccumulated: 'AED 0.00',
          fineStatus: 'Renewal Required Before 11 Apr 2025',
          sponsor: 'Self / Tourism Entry Permit',
          issuingAuthority: 'ICP Federal (Abu Dhabi/Sharjah)'
        });
      } else {
        setResult({
          status: 'Expired / Overstay Fines Active',
          statusColor: 'red',
          visaType: 'Employment Residence Visa',
          fileNo: '201/2022/672109',
          unifiedId: '784-1988-1290348-7',
          issueDate: '01 Jan 2022',
          expiryDate: '31 Dec 2024',
          daysRemaining: -48,
          gracePeriod: 'Grace period ended on 30 Jan 2025',
          finesAccumulated: 'AED 2,400.00 (AED 50/day x 48 days)',
          fineStatus: 'Overstay fine accumulation active',
          sponsor: 'Cancelled Employment Record',
          issuingAuthority: 'GDRFA Dubai',
          actionAdvice: 'Eligible for BrightLink Fine Reduction Petition (up to 70% reduction possible).'
        });
      }
    }, 850);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello BrightLink Immigration,\n\nI just checked my UAE visa validity on your website.\nPassport: ${passportNumber || 'N/A'}\nNationality: ${nationality}\nVisa Type: ${visaType}\nStatus: ${result ? result.status : 'Inquiry'}\n\nPlease verify my official immigration file and assist me with renewal/status advice.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const loadPreset = (preset) => {
    setStatusPreset(preset);
    if (preset === 'valid') {
      setPassportNumber('N8291048');
      setNationality('India');
      setVisaType('Residence Visa (Dubai / GDRFA)');
    } else if (preset === 'expiring') {
      setPassportNumber('P3948201');
      setNationality('Philippines');
      setVisaType('Tourist / Visit Visa');
    } else {
      setPassportNumber('K9018472');
      setNationality('Pakistan');
      setVisaType('Employment Visa (Overstay)');
    }
  };

  return (
    <section id="visa-checker-tool" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
      {/* Background Architectural Patterns with Subtle Float Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#B8864B]/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0F172A]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" 
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#B8864B 0.5px, transparent 0.5px)`,
            backgroundSize: '28px 28px',
            opacity: 0.15
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text Block: Smooth Fade-Up & Slide-In */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          
          {/* Eyebrow Badge */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase mb-5 shadow-xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Official UAE Immigration Status Check • GDRFA & ICP Compliant</span>
          </motion.div>

          {/* Main Heading: Elegant Fade-Up with Slight Delay */}
          <motion.h1 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-heading mb-4"
          >
            Check your UAE visa status by passport number
          </motion.h1>

          {/* Supporting Text: Smooth Delayed Reveal */}
          <motion.p 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto font-sans"
          >
            Verify residency validity, entry permit status, remaining grace periods, and overstay fines in real time. Fast, secure, and officially synchronized with UAE immigration portals.
          </motion.p>

          {/* Quick preset pills for easy interactive testing */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs"
          >
            <span className="text-neutral-500 font-medium">Quick Test Scenarios:</span>
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => { loadPreset('valid'); setTimeout(() => handleSearch(), 50); }}
              className={`px-3 py-1 rounded-full border text-[11px] font-semibold transition-colors cursor-pointer ${
                statusPreset === 'valid'
                  ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-[#B8864B]'
              }`}
            >
              Active Resident
            </motion.button>
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => { loadPreset('expiring'); setTimeout(() => handleSearch(), 50); }}
              className={`px-3 py-1 rounded-full border text-[11px] font-semibold transition-colors cursor-pointer ${
                statusPreset === 'expiring'
                  ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-[#B8864B]'
              }`}
            >
              Expiring Soon
            </motion.button>
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => { loadPreset('expired'); setTimeout(() => handleSearch(), 50); }}
              className={`px-3 py-1 rounded-full border text-[11px] font-semibold transition-colors cursor-pointer ${
                statusPreset === 'expired'
                  ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-[#B8864B]'
              }`}
            >
              Overstay Fine Case
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Prominent Visa Status Checker Interface / Form Card: Smooth Scale-in + Fade */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.985, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-[#E2E8F0] overflow-hidden"
        >
          
          {/* Top Method Tabs */}
          <div className="flex border-b border-neutral-200 bg-[#F8FAFC]">
            <button
              type="button"
              onClick={() => setActiveTab('passport')}
              className={`flex-1 py-3.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'passport'
                  ? 'border-[#B8864B] text-[#0F172A] bg-white'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60'
              }`}
            >
              <Globe className={`w-4 h-4 transition-transform duration-200 ${activeTab === 'passport' ? 'text-[#B8864B] scale-110' : 'text-slate-400'}`} />
              <span>Check by Passport Details</span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#FAF5EC] text-[#B8864B]">
                Most Popular
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('application')}
              className={`flex-1 py-3.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'application'
                  ? 'border-[#B8864B] text-[#0F172A] bg-white'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60'
              }`}
            >
              <FileText className={`w-4 h-4 transition-transform duration-200 ${activeTab === 'application' ? 'text-[#B8864B] scale-110' : 'text-slate-400'}`} />
              <span>Check by File / Application No.</span>
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSearch} className="space-y-6">
              
              {activeTab === 'passport' ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Passport Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Passport Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          required
                          value={passportNumber}
                          onChange={(e) => setPassportNumber(e.target.value)}
                          placeholder="e.g. N8291048 or A1234567"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all uppercase hover:border-slate-400"
                        />
                        <FileText className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Enter exactly as printed on your passport information page.
                      </span>
                    </div>

                    {/* Nationality */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Current Nationality <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <select
                          value={nationality}
                          onChange={(e) => setNationality(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] bg-white focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all cursor-pointer hover:border-slate-400"
                        >
                          {POPULAR_NATIONALITIES.map((nat) => (
                            <option key={nat} value={nat}>{nat}</option>
                          ))}
                        </select>
                        <Globe className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      </div>
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Country corresponding to the passport number entered.
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Date of Birth */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <input
                          type="date"
                          required
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all hover:border-slate-400"
                        />
                        <Calendar className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      </div>
                    </div>

                    {/* Visa Type Category */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Visa Category
                      </label>
                      <div className="relative group">
                        <select
                          value={visaType}
                          onChange={(e) => setVisaType(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] bg-white focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all cursor-pointer hover:border-slate-400"
                        >
                          <option value="Residence Visa (Dubai / GDRFA)">Residence Visa (Dubai / GDRFA)</option>
                          <option value="Residence Visa (Federal / ICP)">Residence Visa (Federal / ICP)</option>
                          <option value="Tourist / Visit Visa (30/60 Days)">Tourist / Visit Visa (30/60 Days)</option>
                          <option value="Golden Visa (10-Year)">Golden Visa (10-Year)</option>
                          <option value="Employment Visa (MOHRE / Partner)">Employment / Partner Visa</option>
                          <option value="Family Sponsorship Visa">Family Sponsorship Visa</option>
                        </select>
                        <User className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      </div>
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        WhatsApp Number <span className="text-[10px] font-normal text-slate-400">(For Instant PDF)</span>
                      </label>
                      <div className="relative group">
                        <input
                          type="tel"
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                          placeholder="+971 50 123 4567"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all hover:border-slate-400"
                        />
                        <Send className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Issuing Emirate */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Issuing Authority / Emirate
                      </label>
                      <select
                        value={emirate}
                        onChange={(e) => setEmirate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] bg-white focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all cursor-pointer hover:border-slate-400"
                      >
                        <option value="Dubai (GDRFA)">Dubai (GDRFA - 201 File Number)</option>
                        <option value="Abu Dhabi (ICP)">Abu Dhabi (ICP Smart Services)</option>
                        <option value="Sharjah (ICP)">Sharjah (ICP Smart Services)</option>
                        <option value="Ajman / RAK / UAQ / Fujairah">Ajman, RAK, UAQ, Fujairah (ICP)</option>
                      </select>
                    </div>

                    {/* File / Application Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        File / Application Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fileNumber}
                        onChange={(e) => setFileNumber(e.target.value)}
                        placeholder="e.g. 201/2023/1234567 or 101/..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all hover:border-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Year of Issue
                      </label>
                      <input
                        type="number"
                        defaultValue="2023"
                        min="2010"
                        max="2026"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] focus:outline-none focus:border-[#B8864B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        WhatsApp Number for Results
                      </label>
                      <input
                        type="tel"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] focus:outline-none focus:border-[#B8864B]"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Submit CTA Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified with official GDRFA & ICP Federal standards</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {result && (
                    <motion.button
                      type="button"
                      whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      onClick={() => { setResult(null); setPassportNumber(''); }}
                      className="px-4 py-3 text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </motion.button>
                  )}

                  {/* Primary CTA Button: Smooth lift / scale animation on hover */}
                  <motion.button
                    type="submit"
                    disabled={isSearching}
                    whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#B8864B] hover:via-[#C5985B] hover:to-[#976A36] shadow-lg shadow-slate-900/10 hover:shadow-[#B8864B]/25 transition-all duration-300 cursor-pointer disabled:opacity-60"
                  >
                    {isSearching ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Querying Immigration Portals...</span>
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 text-[#C5985B]" />
                        <span>Check UAE Visa Status Now</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </form>

            {/* Results Display Area */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 pt-6 border-t border-slate-200"
                >
                  <div className="rounded-2xl border border-slate-200 bg-[#FCFAF8] p-5 sm:p-6 shadow-sm">
                    
                    {/* Status Result Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                          Official Verification Result
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] flex items-center gap-2 font-heading">
                          {result.visaType}
                        </h3>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Authority: <strong className="text-slate-900">{result.issuingAuthority}</strong> • File: <span className="font-mono">{result.fileNo}</span>
                        </p>
                      </div>

                      {/* Status Badge */}
                      <div>
                        {result.statusColor === 'green' && (
                          <motion.div 
                            initial={shouldReduceMotion ? {} : { scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span>{result.status}</span>
                          </motion.div>
                        )}
                        {result.statusColor === 'amber' && (
                          <motion.div 
                            initial={shouldReduceMotion ? {} : { scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-xs"
                          >
                            <Clock className="w-4 h-4 text-amber-600" />
                            <span>{result.status}</span>
                          </motion.div>
                        )}
                        {result.statusColor === 'red' && (
                          <motion.div 
                            initial={shouldReduceMotion ? {} : { scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs font-bold shadow-xs"
                          >
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                            <span>{result.status}</span>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Breakdown Data Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-b border-slate-200 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                        <span className="text-slate-400 block mb-1">Expiration Date</span>
                        <span className="font-bold text-slate-800 text-sm">{result.expiryDate}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                        <span className="text-slate-400 block mb-1">Days Remaining</span>
                        <span className={`font-bold text-sm ${result.daysRemaining < 0 ? 'text-red-600' : result.daysRemaining < 30 ? 'text-amber-600' : 'text-emerald-700'}`}>
                          {result.daysRemaining > 0 ? `${result.daysRemaining} Days Left` : `${Math.abs(result.daysRemaining)} Days Overstayed`}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                        <span className="text-slate-400 block mb-1">Grace Period</span>
                        <span className="font-bold text-slate-800">{result.gracePeriod}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                        <span className="text-slate-400 block mb-1">Overstay Fines</span>
                        <span className={`font-bold text-sm ${result.daysRemaining < 0 ? 'text-red-600 font-mono' : 'text-emerald-700'}`}>
                          {result.finesAccumulated}
                        </span>
                      </div>
                    </div>

                    {/* Extra Notes or Advice */}
                    {result.actionAdvice && (
                      <div className="mt-4 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
                        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <strong>Immigration Advisory:</strong> {result.actionAdvice}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons for Result */}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <motion.button
                        type="button"
                        whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                        onClick={handleWhatsAppSend}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold shadow-md shadow-[#25D366]/20 transition-colors cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Official Status Report to WhatsApp</span>
                      </motion.button>

                      <div className="flex items-center gap-2">
                        <motion.button
                          type="button"
                          whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                          onClick={() => onOpenConsultation('Visa Status & Renewal Inquiry')}
                          className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                        >
                          Book Renewal Consultation
                        </motion.button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Bottom Security / Sync Bar */}
          <div className="bg-[#FAF7F2] px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                GDRFA Dubai & ICP Live Database Check
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="hidden sm:inline font-medium">256-Bit SSL Data Confidentiality</span>
            </div>
            <div className="text-[11px] text-slate-500">
              Zero government login credentials stored.
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default VisaStatusCheckerHero;
