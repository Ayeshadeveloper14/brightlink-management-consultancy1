import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  HelpCircle, 
  ShieldCheck, 
  ChevronRight, 
  Info 
} from 'lucide-react';

export const OnlineCheckGuide = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section 1: How to check UAE visa status online */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mb-20"
        >
          <div className="border-b border-[#E8DFC8] pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              Comprehensive Immigration Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              How to check UAE visa status online
            </h2>
            <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
              Whether you hold a tourist visa, an employment residency permit, or a 10-year Golden Visa, verifying your electronic status ensures you stay compliant with the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and Dubai’s General Directorate of Residency and Foreigners Affairs (GDRFA).
            </p>
          </div>

          <div className="space-y-8 text-neutral-800 font-sans leading-relaxed text-sm sm:text-base">
            <p>
              In the United Arab Emirates, visa records are entirely digitized under the UAE’s smart immigration initiative. Physical visa passport stickers have been phased out across all emirates, replaced by electronic residency records directly tethered to your <strong>Emirates ID</strong> and <strong>passport number</strong>.
            </p>

            {/* Two Main Official Systems Breakdown: Staggered Fade-Up with Hover Lift */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 pt-4">
              
              {/* Option A: ICP */}
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
                className="border-l-2 border-[#B8864B] pl-6 space-y-3 bg-white/50 p-4 rounded-r-2xl border-t border-r border-b border-[#EBE4D8]/60 shadow-xs"
              >
                <span className="text-xs font-bold tracking-wider uppercase text-[#B8864B] block font-heading">
                  Method 1 • Federal Emirates
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                  Through ICP Smart Services
                </h3>
                <p className="text-sm text-[#475569]">
                  Applicable for visas issued in Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.
                </p>
                <ol className="text-xs sm:text-sm text-[#475569] space-y-2 list-decimal list-inside">
                  <li>Visit the official portal at <strong className="text-slate-900">smartservices.icp.gov.ae</strong>.</li>
                  <li>Select <em>"Passport Information"</em> under the public services tab.</li>
                  <li>Choose between <em>"Visa"</em> (tourist/entry permits) or <em>"Residency"</em>.</li>
                  <li>Enter your passport number, nationality, and date of birth.</li>
                  <li>Complete captcha and view your file validity, expiry date, and status.</li>
                </ol>
                <div className="pt-2">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { x: 2 }}
                    href="https://smartservices.icp.gov.ae"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors"
                  >
                    <span>Open ICP Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Option B: GDRFA */}
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
                className="border-l-2 border-[#0F172A] pl-6 space-y-3 bg-white/50 p-4 rounded-r-2xl border-t border-r border-b border-[#EBE4D8]/60 shadow-xs"
              >
                <span className="text-xs font-bold tracking-wider uppercase text-[#0F172A] block font-heading">
                  Method 2 • Dubai Emirate
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                  Through GDRFA Dubai Portal
                </h3>
                <p className="text-sm text-[#475569]">
                  Applicable for all Dubai residency and tourist entry permits (file number prefix 201).
                </p>
                <ol className="text-xs sm:text-sm text-[#475569] space-y-2 list-decimal list-inside">
                  <li>Visit Dubai's immigration website at <strong className="text-slate-900">smart.gdrfad.gov.ae</strong> or use the DubaiNow app.</li>
                  <li>Select <em>"Visa Status / Application Tracking"</em>.</li>
                  <li>Select <em>"Search by Passport"</em>.</li>
                  <li>Input your passport number, nationality, and birth date.</li>
                  <li>Instant confirmation reveals issue date, validity, and remaining grace period.</li>
                </ol>
                <div className="pt-2">
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { x: 2 }}
                    href="https://smart.gdrfad.gov.ae"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#B8864B] transition-colors"
                  >
                    <span>Open GDRFA Dubai Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>

            </div>

            {/* Editorial Advisory Banner */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="p-5 rounded-xl bg-white border border-[#EBE4D8] shadow-xs flex items-start gap-4 hover:border-[#B8864B]/40 transition-colors"
            >
              <Info className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                <strong className="text-[#0F172A]">Need help deciphering a complicated file?</strong> If your visa shows as "Under Review", "Out of Country over 180 Days", or "Cancelled", portal automated systems may not disclose whether you face fine accumulation or travel bans. Our authorized PRO team can pull complete government audit certificates on your behalf.
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Editorial Section 2: Check UAE Visa Status by Passport Number */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="pt-12 border-t border-[#E8DFC8]"
        >
          <div className="border-b border-[#E8DFC8] pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              Deep Dive
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Check UAE Visa Status by Passport Number
            </h2>
            <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
              Why passport-based verification is the most reliable, universally accessible method for tourists, job seekers, and expatriate residents.
            </p>
          </div>

          <div className="space-y-6 text-neutral-800 font-sans leading-relaxed text-sm sm:text-base">
            <p>
              In previous years, checking your residency required knowing your 15-digit <em>Unified Identification Number (UID)</em> or specific 3-part file number (e.g. 201/2023/1234567). For tourists, transit passengers, or newcomers who have not yet memorized these government sequences, checking by <strong>Passport Number</strong> provides a direct gateway.
            </p>

            <h4 className="text-lg font-bold text-[#0F172A] font-heading mt-6">
              Information required for passport-based lookup:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4">
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white border border-[#EBE4D8] shadow-xs hover:border-[#B8864B]/40 transition-colors"
              >
                <div className="text-xs font-bold text-[#B8864B] uppercase tracking-wider mb-1 font-heading">Requirement 1</div>
                <div className="font-bold text-[#0F172A] text-sm mb-1">Exact Passport Number</div>
                <p className="text-xs text-[#64748B]">Include prefix letters without extra spaces or symbols.</p>
              </motion.div>

              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white border border-[#EBE4D8] shadow-xs hover:border-[#B8864B]/40 transition-colors"
              >
                <div className="text-xs font-bold text-[#B8864B] uppercase tracking-wider mb-1 font-heading">Requirement 2</div>
                <div className="font-bold text-[#0F172A] text-sm mb-1">Matching Nationality</div>
                <p className="text-xs text-[#64748B]">Must match the issuing nation on your passport document.</p>
              </motion.div>

              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-white border border-[#EBE4D8] shadow-xs hover:border-[#B8864B]/40 transition-colors"
              >
                <div className="text-xs font-bold text-[#B8864B] uppercase tracking-wider mb-1 font-heading">Requirement 3</div>
                <div className="font-bold text-[#0F172A] text-sm mb-1">Date of Birth</div>
                <p className="text-xs text-[#64748B]">Used by government security to verify record identity.</p>
              </motion.div>
            </div>

            <h4 className="text-lg font-bold text-[#0F172A] font-heading mt-6">
              What the different status classifications mean:
            </h4>

            <div className="space-y-3 pt-2">
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EBE4D8] shadow-xs hover:border-emerald-300 transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#0F172A]">Active / Valid:</strong> Your residency or entry permit is in full legal standing. You can travel in and out of the UAE freely without fines.
                </div>
              </motion.div>

              <motion.div 
                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EBE4D8] shadow-xs hover:border-amber-300 transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#0F172A]">In Grace Period:</strong> Your visa has expired or been cancelled, but you are currently within the legal grace window (30 to 180 days). No fines have started yet, but you must renew or exit before the grace window concludes.
                </div>
              </motion.div>

              <motion.div 
                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EBE4D8] shadow-xs hover:border-red-300 transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#0F172A]">Overstay / Fines Active:</strong> You have exceeded both your visa validity and grace period. Overstay fines of AED 50 per day are currently being charged to your immigration profile.
                </div>
              </motion.div>

              <motion.div 
                whileHover={shouldReduceMotion ? {} : { x: 3 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EBE4D8] shadow-xs hover:border-slate-300 transition-colors"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#0F172A]">Cancelled:</strong> Your employer, sponsor, or self-residency has undergone official cancellation. You have a designated departure grace timeframe.
                </div>
              </motion.div>
            </div>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <div className="text-xs text-slate-500">
                Facing an unexpected "No Record Found" error?
              </div>
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { x: 2 }}
                onClick={() => onOpenConsultation('Passport Visa Verification Inquiry')}
                className="text-xs font-bold text-[#B8864B] hover:text-[#976A36] underline cursor-pointer transition-colors"
              >
                Request Specialist File Audit →
              </motion.button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OnlineCheckGuide;
