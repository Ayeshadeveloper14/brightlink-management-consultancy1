import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileCheck2, 
  Baby, 
  Stamp, 
  Globe2, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  MessageSquare,
  Calculator,
  ShieldCheck
} from 'lucide-react';

export const ProcessPhases = ({ onOpenCalculator, onScrollToCalculator, onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Brightlink! I have a question about the newborn baby visa process and 120-day timeline in Dubai.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const handleCalculator = () => {
    if (onScrollToCalculator) onScrollToCalculator();
    else if (onOpenCalculator) onOpenCalculator();
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            2 · The full journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            The newborn visa process, in 5 phases.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed font-sans">
            Every step explained — what happens, who does it, and what you do. Each phase builds on the previous one, so the order matters.
          </p>
        </motion.div>

        {/* 5 Distinct Phase Cards */}
        <div className="space-y-8">
          
          {/* Phase 1: Pre-Documentation */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm font-heading">
                1
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
                Pre-Documentation
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mb-3">
              Phase 1: Pre-documentation — passports, Emirates IDs and marriage certificate
            </h3>

            <p className="text-sm text-[#475569] leading-relaxed mb-6">
              Before your baby arrives, keep these ready — the hospital asks for them within hours of birth:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white border border-[#EBE4D8]">
                <strong className="text-xs font-bold text-[#0F172A] block mb-1">
                  Father's passport & Emirates ID
                </strong>
                <span className="text-xs text-[#64748B]">Originals and clear copies</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EBE4D8]">
                <strong className="text-xs font-bold text-[#0F172A] block mb-1">
                  Mother's passport & Emirates ID
                </strong>
                <span className="text-xs text-[#64748B]">Originals and clear copies</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EBE4D8]">
                <strong className="text-xs font-bold text-[#0F172A] block mb-1">
                  Attested marriage certificate
                </strong>
                <span className="text-xs text-[#64748B]">Must be attested for UAE use — start early</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECBB5] text-xs text-[#475569] leading-relaxed">
              If your marriage certificate isn't attested yet, we can handle the full attestation for you. Earlier is better — it takes time.{' '}
              <Link to="/services" className="font-bold text-[#B8864B] hover:text-[#976A36] underline">
                See attestation service
              </Link>
            </div>
          </div>

          {/* Phase 2: Birth Certificate */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm font-heading">
                2
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
                Birth Certificate
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mb-4">
              Phase 2: Birth certificate issued via the DHA portal
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Birth notification</strong> — the hospital issues it within hours of delivery.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Hospital upload</strong> — the hospital uploads your documents to the DHA portal and registers your phone & email.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>DHA review & payment link</strong> — DHA reviews and sends a payment link to your registered contact.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Online payment & delivery</strong> — pay online; the certificate is couriered to you. No government office visit needed.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECBB5] text-xs text-[#475569] leading-relaxed">
              <strong>Important note:</strong> Request English too: the Arabic certificate is mandatory, but most embassies need the English version for the passport. Getting both now saves a translation later.
            </div>
          </div>

          {/* Phase 3: MOFA Attestation */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm font-heading">
                3
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
                MOFA Attestation
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mb-3">
              Phase 3: MOFA attestation — official document stamped and sealed
            </h3>

            <p className="text-sm text-[#475569] leading-relaxed mb-6">
              The physical birth certificate must be attested by the UAE Ministry of Foreign Affairs (MOFA) before it's legally accepted for the passport and the visa.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#B8864B]/40 shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B8864B]" />
                <h4 className="font-bold text-base text-[#0F172A] font-heading">
                  Full door-to-door service
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                We collect the original birth certificate from your home, complete the MOFA attestation on your behalf, and return the attested document to you — no government office visit needed.
              </p>
            </div>
          </div>

          {/* Phase 4: Passport Issuance */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm font-heading">
                4
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
                Passport Issuance
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mb-3">
              Phase 4: Passport issuance at the embassy or consulate
            </h3>

            <p className="text-sm text-[#475569] leading-relaxed mb-4">
              Your baby's passport is issued by your home country's embassy or consulate. The exact steps vary by country, but the flow is consistent:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Book an appointment through the embassy/consulate portal.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Attend with originals: attested birth certificate, both parents' passports, baby's photo (white background).</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Submit the application — fees vary by country.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Receive the passport — anywhere from 2 days to 6 weeks depending on the country.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECBB5] text-xs text-[#475569] leading-relaxed">
              <strong>Heads up:</strong> embassy timelines are the least predictable part. If your country is slow, prioritise this phase early in the 120-day window.
            </div>
          </div>

          {/* Phase 5: Visa Issuance */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm font-heading">
                5
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
                Visa Issuance
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mb-4">
              Phase 5: Emirates ID and residence visa stamping
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Emirates ID application</strong> — filed first; required before visa stamping.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Visa stamping application</strong> — submitted once the EID file is open.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Immigration review</strong> — the residence visa is approved; you get the digital copy by email/SMS.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-[#475569]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Emirates ID delivery</strong> — the physical card is printed and couriered to you.</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECBB5] text-xs text-[#475569] leading-relaxed">
              <strong>Good to know:</strong> children under 18 are exempt from the medical fitness test and biometric fingerprinting. Only a recent passport-sized photo is needed.
            </div>
          </div>

        </div>

        {/* Post-Process CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={handleCalculator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-[#0F172A] hover:bg-[#B8864B] transition-all cursor-pointer shadow-sm font-sans"
          >
            <Calculator className="w-4 h-4 text-[#F5D7A1]" />
            <span>Calculate newborn cost</span>
          </motion.button>

          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-[#0F172A] bg-white border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#B8864B] transition-all cursor-pointer shadow-xs font-sans"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Ask a question</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default ProcessPhases;
