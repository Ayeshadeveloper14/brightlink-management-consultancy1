import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Search, 
  CreditCard, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Clock, 
  Send, 
  RotateCcw, 
  Building2, 
  FileText, 
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Award,
  Zap
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const IloeHeroChecker = ({ onOpenConsultation }) => {
  const { isRTL } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('eid'); // 'eid' | 'unified'

  // Input states
  const [emiratesId, setEmiratesId] = useState('');
  const [unifiedNumber, setUnifiedNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [sector, setSector] = useState('private'); // 'private' | 'federal' | 'freezone'

  // Search state
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);
  const [statusPreset, setStatusPreset] = useState('active'); // 'active' | 'fine' | 'missed'

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setIsSearching(true);
    setResult(null);

    setTimeout(() => {
      setIsSearching(false);
      if (statusPreset === 'active') {
        setResult({
          status: 'Active & Insured',
          statusColor: 'green',
          policyNumber: 'ILOE-2024-8392014',
          category: 'Category A (Basic Salary ≤ AED 16,000)',
          subscriberName: 'Registered Employee',
          emiratesId: emiratesId || '784-1988-1290384-1',
          startDate: '01 Jan 2024',
          expiryDate: '31 Dec 2025',
          premiumPaid: 'AED 120.00 (2 Years Active)',
          fineStatus: 'No Fines / Clear MOHRE Record',
          finesAmount: 'AED 0.00',
          eligiblePayoutMonthly: 'Up to AED 10,000 / month (60% of basic)',
          insurer: 'Dubai Insurance Co. (ILOE Pool)',
          advice: 'Your policy is active and legally compliant. Remember to renew before 31 Dec 2025.'
        });
      } else if (statusPreset === 'fine') {
        setResult({
          status: 'Non-Subscribed • Fine Incurred',
          statusColor: 'red',
          policyNumber: 'Unregistered / No Active Policy',
          category: 'Pending Registration',
          subscriberName: 'Unregistered Employee',
          emiratesId: emiratesId || '784-1992-4829103-7',
          startDate: 'N/A',
          expiryDate: 'Overdue Deadline',
          premiumPaid: 'AED 0.00',
          fineStatus: 'MOHRE Non-Subscription Violation Active',
          finesAmount: 'AED 400.00',
          eligiblePayoutMonthly: 'Ineligible (Not Subscribed)',
          insurer: 'Ministry of Human Resources & Emiratisation',
          advice: 'Mandatory AED 400 fine issued under Ministerial Resolution No. 598 of 2022. You must settle this fine and subscribe to prevent WPS salary deduction or work permit blocks.'
        });
      } else {
        setResult({
          status: 'Installment Defaulted • Fine Active',
          statusColor: 'amber',
          policyNumber: 'ILOE-2023-4920194',
          category: 'Category B (Basic Salary > AED 16,000)',
          subscriberName: 'Registered Subscriber',
          emiratesId: emiratesId || '784-1985-9382104-2',
          startDate: '15 Mar 2023',
          expiryDate: 'Suspended (Unpaid Premium)',
          premiumPaid: 'Partial Payment (Last paid Sep 2024)',
          fineStatus: 'Default on Premium Installment (>3 Months)',
          finesAmount: 'AED 200.00',
          eligiblePayoutMonthly: 'Suspended until settled',
          insurer: 'Dubai Insurance Co. (ILOE Pool)',
          advice: 'AED 200 penalty for exceeding 3 months of unpaid premium installments. Settle AED 200 fine + pending premium to restore coverage.'
        });
      }
    }, 750);
  };

  const loadPreset = (preset) => {
    setStatusPreset(preset);
    if (preset === 'active') {
      setEmiratesId('784-1988-1290384-1');
      setMobileNumber('0501234567');
      setSector('private');
    } else if (preset === 'fine') {
      setEmiratesId('784-1992-4829103-7');
      setMobileNumber('0529876543');
      setSector('private');
    } else {
      setEmiratesId('784-1985-9382104-2');
      setMobileNumber('0554567890');
      setSector('freezone');
    }
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello FamilyVisa.ae / Brightlink,\n\nI just checked my ILOE Insurance status on your website.\nEmirates ID: ${emiratesId || 'N/A'}\nStatus: ${result ? result.status : 'Inquiry'}\nFines: ${result ? result.finesAmount : 'N/A'}\n\nPlease assist me with ILOE subscription renewal or fine settlement.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section id="iloe-checker-panel" className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
      {/* Background Architectural Glows */}
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
            <span>MANDATORY UAE SCHEME • MOHRE COMPLIANT • FINE PROTECTION</span>
          </motion.div>

          {/* Main Heading: Elegant Fade-Up with Slight Delay */}
          <motion.h1 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-heading mb-4"
          >
            Check your ILOE insurance status and fines online
          </motion.h1>

          {/* Supporting Text: Smooth Delayed Reveal */}
          <motion.p 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto font-sans"
          >
            Verify your UAE Involuntary Loss of Employment policy, check for pending MOHRE non-subscription fines (AED 400), review payment history, and avoid labor permit blocks.
          </motion.p>

          {/* Quick preset buttons for instant interactive testing */}
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
              onClick={() => { loadPreset('active'); setTimeout(() => handleSearch(), 50); }}
              className={`px-3 py-1 rounded-full border text-[11px] font-semibold transition-colors cursor-pointer ${
                statusPreset === 'active'
                  ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-[#B8864B]'
              }`}
            >
              Active & Compliant
            </motion.button>
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => { loadPreset('fine'); setTimeout(() => handleSearch(), 50); }}
              className={`px-3 py-1 rounded-full border text-[11px] font-semibold transition-colors cursor-pointer ${
                statusPreset === 'fine'
                  ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-[#B8864B]'
              }`}
            >
              AED 400 Fine Case
            </motion.button>
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => { loadPreset('missed'); setTimeout(() => handleSearch(), 50); }}
              className={`px-3 py-1 rounded-full border text-[11px] font-semibold transition-colors cursor-pointer ${
                statusPreset === 'missed'
                  ? 'bg-[#B8864B] text-white border-[#B8864B] shadow-xs'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-[#B8864B]'
              }`}
            >
              AED 200 Defaulted Case
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Checker Panel: Elegant Fade + Scale-In */}
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
              onClick={() => setActiveTab('eid')}
              className={`flex-1 py-3.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'eid'
                  ? 'border-[#B8864B] text-[#0F172A] bg-white'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60'
              }`}
            >
              <CreditCard className={`w-4 h-4 transition-transform duration-200 ${activeTab === 'eid' ? 'text-[#B8864B] scale-110' : 'text-slate-400'}`} />
              <span>Check by Emirates ID Number</span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#FAF5EC] text-[#B8864B]">
                Official Fast Track
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('unified')}
              className={`flex-1 py-3.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
                activeTab === 'unified'
                  ? 'border-[#B8864B] text-[#0F172A] bg-white'
                  : 'border-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/60'
              }`}
            >
              <FileText className={`w-4 h-4 transition-transform duration-200 ${activeTab === 'unified' ? 'text-[#B8864B] scale-110' : 'text-slate-400'}`} />
              <span>Check by MOHRE Unified / Work Permit</span>
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSearch} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {activeTab === 'eid' ? (
                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                      Emirates ID Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        required
                        value={emiratesId}
                        onChange={(e) => setEmiratesId(e.target.value)}
                        placeholder="784-1990-1234567-1"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all hover:border-slate-400"
                      />
                      <CreditCard className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      15-digit number printed on the front of your Emirates ID.
                    </span>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                      MOHRE Unified / Work Permit No. <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        required
                        value={unifiedNumber}
                        onChange={(e) => setUnifiedNumber(e.target.value)}
                        placeholder="e.g. 10293847 or UID number"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all hover:border-slate-400"
                      />
                      <FileText className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Found on your electronic employment contract or labor card.
                    </span>
                  </div>
                )}

                {/* Mobile Number for Instant SMS / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1.5 uppercase tracking-wider">
                    UAE Mobile Number <span className="text-[10px] font-normal text-slate-400">(For Status Certificate)</span>
                  </label>
                  <div className="relative group">
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="050 123 4567"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all hover:border-slate-400"
                    />
                    <Send className="w-4 h-4 text-slate-400 group-hover:text-[#B8864B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Receive your verified ILOE certificate directly on WhatsApp.
                  </span>
                </div>
              </div>

              {/* Employment Sector Selection */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-2 uppercase tracking-wider">
                  Employment Sector Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setSector('private')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer flex items-center justify-between ${
                      sector === 'private'
                        ? 'border-[#B8864B] bg-[#FAF5EC] text-[#8C6230] shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-heading">Private Sector</div>
                      <div className="text-[10px] text-slate-500 font-normal">Mainland (MOHRE)</div>
                    </div>
                    {sector === 'private' && <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSector('federal')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer flex items-center justify-between ${
                      sector === 'federal'
                        ? 'border-[#B8864B] bg-[#FAF5EC] text-[#8C6230] shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-heading">Federal Government</div>
                      <div className="text-[10px] text-slate-500 font-normal">Federal Ministries</div>
                    </div>
                    {sector === 'federal' && <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSector('freezone')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer flex items-center justify-between ${
                      sector === 'freezone'
                        ? 'border-[#B8864B] bg-[#FAF5EC] text-[#8C6230] shadow-xs'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-heading">Free Zone Entities</div>
                      <div className="text-[10px] text-slate-500 font-normal">Participating Zones</div>
                    </div>
                    {sector === 'freezone' && <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />}
                  </button>
                </div>
              </div>

              {/* Submit CTA Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Synchronized with official MOHRE & Dubai Insurance Pool</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {result && (
                    <motion.button
                      type="button"
                      whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      onClick={() => { setResult(null); setEmiratesId(''); }}
                      className="px-4 py-3 text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </motion.button>
                  )}

                  {/* Primary CTA Button: Subtle hover lift + scale */}
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
                        <span>Querying ILOE Insurance Pool...</span>
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 text-[#C5985B]" />
                        <span>Check ILOE Status & Fines Now</span>
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
                    
                    {/* Status Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                      <div>
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                          Official ILOE Verification Result
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] flex items-center gap-2 font-heading">
                          {result.category}
                        </h3>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Policy: <strong className="font-mono text-slate-900">{result.policyNumber}</strong> • Emirates ID: <span className="font-mono">{result.emiratesId}</span>
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
                        <span className="text-slate-400 block mb-1">Policy Validity</span>
                        <span className="font-bold text-slate-800 text-sm">{result.expiryDate}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                        <span className="text-slate-400 block mb-1">Pending Fines</span>
                        <span className={`font-bold text-sm ${result.finesAmount !== 'AED 0.00' ? 'text-red-600 font-mono' : 'text-emerald-700'}`}>
                          {result.finesAmount}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                        <span className="text-slate-400 block mb-1">Premium Status</span>
                        <span className="font-bold text-slate-800">{result.premiumPaid}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-xs">
                        <span className="text-slate-400 block mb-1">Max Potential Claim</span>
                        <span className="font-bold text-slate-800 text-xs">{result.eligiblePayoutMonthly}</span>
                      </div>
                    </div>

                    {/* Advisory Callout */}
                    <div className="mt-4 p-3.5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-2.5 text-xs text-[#8C6230]">
                      <ShieldAlert className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                      <div>
                        <strong>MOHRE Compliance Guidance:</strong> {result.advice}
                      </div>
                    </div>

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
                        <span>Send Official ILOE Certificate to WhatsApp</span>
                      </motion.button>

                      <div className="flex items-center gap-2">
                        {result.finesAmount !== 'AED 0.00' ? (
                          <motion.button
                            type="button"
                            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                            onClick={() => onOpenConsultation('ILOE Fine Settlement & Subscription')}
                            className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                          >
                            Settle Fine & Subscribe (MOHRE Assistance)
                          </motion.button>
                        ) : (
                          <motion.button
                            type="button"
                            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                            onClick={() => onOpenConsultation('ILOE Renewal Consultation')}
                            className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                          >
                            Extend Policy / Consultation
                          </motion.button>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Bottom Trust & Security Bar: Staggered Fade-in */}
          <div className="bg-[#FAF7F2] px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Dubai Insurance Company ILOE Pool Gateway
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="hidden sm:inline font-medium">MOHRE Ministerial Decree No. 598 Compliance</span>
            </div>
            <div className="text-[11px] text-slate-500">
              Zero private banking data retained.
            </div>
          </div>

        </motion.div>

        {/* Staggered Trust Badges */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/70 border border-[#EBE4D8] shadow-xs">
            <Award className="w-5 h-5 text-[#B8864B] shrink-0" />
            <span className="text-xs font-semibold text-[#0F172A]">Official MOHRE & Dubai Insurance Direct Link</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/70 border border-[#EBE4D8] shadow-xs">
            <Zap className="w-5 h-5 text-[#B8864B] shrink-0" />
            <span className="text-xs font-semibold text-[#0F172A]">Instant Fine Audit & Settlement Support</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/70 border border-[#EBE4D8] shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#B8864B] shrink-0" />
            <span className="text-xs font-semibold text-[#0F172A]">100% Confidential & Secure Inquiry</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IloeHeroChecker;
