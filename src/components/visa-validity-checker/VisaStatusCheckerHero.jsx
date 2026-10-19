import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Globe, 
  FileText, 
  Send, 
  RotateCcw, 
  HelpCircle,
  ExternalLink,
  User,
  ArrowRight,
  AlertCircle,
  MessageSquare
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
  const [fullName, setFullName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [nationality, setNationality] = useState('India');
  const [dob, setDob] = useState('');
  const [visaType, setVisaType] = useState('Residence Visa (Dubai / GDRFA)');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  // Application/File tab state
  const [fileNumber, setFileNumber] = useState('');
  const [emirate, setEmirate] = useState('Dubai (GDRFA)');
  const [issueYear, setIssueYear] = useState('2024');

  // Validation & Submission State
  const [errors, setErrors] = useState({});
  const [submittedRequest, setSubmittedRequest] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (activeTab === 'passport') {
      if (!passportNumber.trim()) {
        newErrors.passportNumber = 'Please enter your passport number.';
      }
      if (!nationality.trim()) {
        newErrors.nationality = 'Please select your nationality.';
      }
      if (!dob) {
        newErrors.dob = 'Please select your date of birth.';
      }
    } else {
      if (!fileNumber.trim()) {
        newErrors.fileNumber = 'Please enter your application or file number.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      'Visa Check Assistance Request',
      ''
    ];

    if (fullName.trim()) {
      lines.push(`Name: ${fullName.trim()}`);
    }

    if (activeTab === 'passport') {
      lines.push(`Visa Type: ${visaType}`);
      lines.push(`Passport Number: ${passportNumber.trim().toUpperCase()}`);
      lines.push(`Nationality: ${nationality}`);
      if (dob) {
        lines.push(`Date of Birth: ${dob}`);
      }
    } else {
      lines.push(`Visa Type: ${emirate}`);
      lines.push(`Application Number: ${fileNumber.trim()}`);
      if (issueYear) {
        lines.push(`Year of Issue: ${issueYear}`);
      }
      if (nationality) {
        lines.push(`Nationality: ${nationality}`);
      }
    }

    if (whatsappNumber.trim()) {
      lines.push(`Contact Number: ${whatsappNumber.trim()}`);
    }

    lines.push('');
    lines.push('Request: Please assist me with checking my visa status.');

    return lines.join('\n');
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = generateWhatsAppMessage();
    const waUrl = `https://wa.me/971566556645?text=${encodeURIComponent(message)}`;

    // Store submitted information before attempting to open
    const summaryData = {
      method: activeTab === 'passport' ? 'Passport Details' : 'File / Application Number',
      fullName: fullName.trim(),
      passportNumber: passportNumber.trim().toUpperCase(),
      fileNumber: fileNumber.trim(),
      nationality,
      dob,
      visaType: activeTab === 'passport' ? visaType : emirate,
      whatsappNumber: whatsappNumber.trim(),
      waUrl
    };

    setSubmittedRequest(summaryData);

    // Direct opening of WhatsApp without popup form
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.error('Auto-open WhatsApp blocked by browser:', err);
    }
  };

  const handleReset = () => {
    setSubmittedRequest(null);
    setErrors({});
  };

  return (
    <section id="visa-checker-tool" className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
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
            <span>Official UAE Immigration Visa Check Assistance • GDRFA & ICP Portals</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-heading mb-4"
          >
            Check your UAE visa status by passport number
          </motion.h1>

          {/* Supporting Text */}
          <motion.p 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto font-sans"
          >
            Submit your information below to request an official visa status check. Our authorized typists verify your records directly through authorized GDRFA Dubai and ICP Federal systems with instant WhatsApp support.
          </motion.p>
        </motion.div>

        {/* Prominent Visa Status Checker Interface / Form Card */}
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
              onClick={() => { setActiveTab('passport'); setErrors({}); }}
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
              onClick={() => { setActiveTab('application'); setErrors({}); }}
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
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
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
                          value={passportNumber}
                          onChange={(e) => {
                            setPassportNumber(e.target.value);
                            if (errors.passportNumber) setErrors(prev => ({ ...prev, passportNumber: null }));
                          }}
                          placeholder="e.g. N8291048 or A1234567"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all uppercase hover:border-slate-400 ${
                            errors.passportNumber 
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50/20' 
                              : 'border-slate-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                          }`}
                        />
                        <FileText className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      </div>
                      {errors.passportNumber ? (
                        <span className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.passportNumber}
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-500 mt-1 block">
                          Enter exactly as printed on your passport information page.
                        </span>
                      )}
                    </div>

                    {/* Nationality */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Current Nationality <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <select
                          value={nationality}
                          onChange={(e) => {
                            setNationality(e.target.value);
                            if (errors.nationality) setErrors(prev => ({ ...prev, nationality: null }));
                          }}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-[#0F172A] bg-white focus:outline-none focus:ring-2 transition-all cursor-pointer hover:border-slate-400 ${
                            errors.nationality 
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                              : 'border-slate-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                          }`}
                        >
                          {POPULAR_NATIONALITIES.map((nat) => (
                            <option key={nat} value={nat}>{nat}</option>
                          ))}
                        </select>
                        <Globe className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      </div>
                      {errors.nationality ? (
                        <span className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.nationality}
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-500 mt-1 block">
                          Country corresponding to the passport number entered.
                        </span>
                      )}
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
                          value={dob}
                          onChange={(e) => {
                            setDob(e.target.value);
                            if (errors.dob) setErrors(prev => ({ ...prev, dob: null }));
                          }}
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 transition-all hover:border-slate-400 ${
                            errors.dob 
                              ? 'border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50/20' 
                              : 'border-slate-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                          }`}
                        />
                        <Calendar className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                      </div>
                      {errors.dob && (
                        <span className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.dob}
                        </span>
                      )}
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

                    {/* Full Name (Optional) */}
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Full Name <span className="text-[10px] font-normal text-slate-400">(Optional)</span>
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. John Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all hover:border-slate-400"
                        />
                        <User className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
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
                        value={fileNumber}
                        onChange={(e) => {
                          setFileNumber(e.target.value);
                          if (errors.fileNumber) setErrors(prev => ({ ...prev, fileNumber: null }));
                        }}
                        placeholder="e.g. 201/2023/1234567 or 101/..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all hover:border-slate-400 ${
                          errors.fileNumber 
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50/20' 
                            : 'border-slate-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                        }`}
                      />
                      {errors.fileNumber && (
                        <span className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.fileNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Year of Issue
                      </label>
                      <input
                        type="number"
                        value={issueYear}
                        onChange={(e) => setIssueYear(e.target.value)}
                        min="2010"
                        max="2026"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] focus:outline-none focus:border-[#B8864B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Full Name <span className="text-[10px] font-normal text-slate-400">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] focus:outline-none focus:border-[#B8864B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                        Nationality
                      </label>
                      <select
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] bg-white focus:outline-none focus:border-[#B8864B]"
                      >
                        {POPULAR_NATIONALITIES.map((nat) => (
                          <option key={nat} value={nat}>{nat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Submit CTA Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Authorized UAE typing assistance for GDRFA & ICP Federal portals</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* Primary Submit CTA Button */}
                  <motion.button
                    type="submit"
                    whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#B8864B] hover:via-[#C5985B] hover:to-[#976A36] shadow-lg shadow-slate-900/10 hover:shadow-[#B8864B]/25 transition-all duration-300 cursor-pointer"
                  >
                    <Search className="w-4 h-4 text-[#C5985B]" />
                    <span>Check UAE Visa Status Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </div>
            </form>

            {/* Honest WhatsApp Confirmation Panel */}
            <AnimatePresence>
              {submittedRequest && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 pt-6 border-t border-slate-200"
                >
                  <div className="rounded-2xl border border-[#DECBB5] bg-[#FAF8F5] p-5 sm:p-7 shadow-sm space-y-6">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E6D7C3]">
                      <div>
                        <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block mb-1">
                          Direct WhatsApp Assistance Request
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-heading flex items-center gap-2">
                          <CheckCircle2 className="w-6 h-6 text-[#16A34A] shrink-0" />
                          <span>Visa Check Request Prepared</span>
                        </h3>
                        <p className="text-xs text-slate-600 mt-1">
                          Your request has been prepared for the Brightlink Typing immigration team. Send the message on WhatsApp to begin verification.
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                          <span>+971 56 655 6645</span>
                        </span>
                      </div>
                    </div>

                    {/* Summary of Submitted Fields */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-[#E6D7C3]/60 shadow-xs">
                        <span className="text-slate-400 block mb-1">Search Method</span>
                        <span className="font-bold text-slate-800">{submittedRequest.method}</span>
                      </div>

                      {submittedRequest.passportNumber && (
                        <div className="p-3 rounded-xl bg-white border border-[#E6D7C3]/60 shadow-xs">
                          <span className="text-slate-400 block mb-1">Passport Number</span>
                          <span className="font-bold text-slate-800 font-mono">{submittedRequest.passportNumber}</span>
                        </div>
                      )}

                      {submittedRequest.fileNumber && (
                        <div className="p-3 rounded-xl bg-white border border-[#E6D7C3]/60 shadow-xs">
                          <span className="text-slate-400 block mb-1">File / App Number</span>
                          <span className="font-bold text-slate-800 font-mono">{submittedRequest.fileNumber}</span>
                        </div>
                      )}

                      <div className="p-3 rounded-xl bg-white border border-[#E6D7C3]/60 shadow-xs">
                        <span className="text-slate-400 block mb-1">Nationality</span>
                        <span className="font-bold text-slate-800">{submittedRequest.nationality}</span>
                      </div>

                      {submittedRequest.dob && (
                        <div className="p-3 rounded-xl bg-white border border-[#E6D7C3]/60 shadow-xs">
                          <span className="text-slate-400 block mb-1">Date of Birth</span>
                          <span className="font-bold text-slate-800">{submittedRequest.dob}</span>
                        </div>
                      )}

                      {submittedRequest.visaType && (
                        <div className="p-3 rounded-xl bg-white border border-[#E6D7C3]/60 shadow-xs">
                          <span className="text-slate-400 block mb-1">Visa Type / Authority</span>
                          <span className="font-bold text-slate-800">{submittedRequest.visaType}</span>
                        </div>
                      )}

                      {submittedRequest.fullName && (
                        <div className="p-3 rounded-xl bg-white border border-[#E6D7C3]/60 shadow-xs">
                          <span className="text-slate-400 block mb-1">Applicant Name</span>
                          <span className="font-bold text-slate-800">{submittedRequest.fullName}</span>
                        </div>
                      )}
                    </div>

                    {/* Honest Advisory Disclosure */}
                    <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3 text-xs text-[#6D4518] leading-relaxed">
                      <HelpCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                      <div>
                        <strong>Honest Verification Process:</strong> Visa statuses are not automatically checked or verified on this website. Our registered typing specialists will manually query your active file on authorized GDRFA Dubai or ICP Smart Services portals upon receiving your WhatsApp request.
                      </div>
                    </div>

                    {/* Action Buttons: Primary WhatsApp + Reset/Edit */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <a
                        href={submittedRequest.waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#25D366]/25 transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Open WhatsApp (+971 56 655 6645)</span>
                        <ExternalLink className="w-4 h-4 opacity-80" />
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="w-full sm:w-auto px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Edit / Modify Details</span>
                      </button>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Bottom Security / Informational Bar */}
          <div className="bg-[#FAF7F2] px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                GDRFA Dubai & ICP Smart Services Support
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="hidden sm:inline font-medium">Direct WhatsApp Assistance</span>
            </div>
            <div className="text-[11px] text-slate-500">
              Zero government login passwords or OTPs required.
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default VisaStatusCheckerHero;
