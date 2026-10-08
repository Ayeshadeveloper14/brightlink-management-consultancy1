import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Clock, 
  CheckCircle2, 
  Zap, 
  Compass, 
  ShieldCheck, 
  Layers,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

export const WhyUseAmer = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <Award className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Value Proposition
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Why Businesses & Families Rely on Amer
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Discover why over 30,000 residents and enterprises choose professional Amer Center facilitation over self-navigation through government portals.
          </p>
        </motion.div>

        {/* Masonry / Varied Size Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Saves Time (Large Featured - 7 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white border border-[#EFEAE2] hover:border-[#B8864B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B]">
                  <Clock className="w-7 h-7 stroke-[1.8]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Save 20+ Hours
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-[#222222] mb-3">
                Saves Valuable Time & Eliminates Physical Queues
              </h3>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-6">
                Skip standing in multiple lines across separate ministerial facilities. From medical test booking to biometric reservations and residency issuance, we handle the entire chain through electronic channels.
              </p>

              {/* Visual Metric Bar */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EFEAE2] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#222222]">Turnaround Reduction</div>
                  <div className="text-xs text-[#777777]">Average process timeline with Brightlink</div>
                </div>
                <span className="text-xl font-extrabold text-[#B8864B] font-heading">
                  Up to 70% Faster
                </span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F1EBE1] flex items-center justify-between text-xs text-[#777777]">
              <span>Streamlined Digital Submission</span>
              <span className="font-semibold text-[#B8864B]">No Office Waiting</span>
            </div>
          </motion.div>

          {/* Card 2: Reduces Errors (Compact Precision - 5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#FAF5EC] to-[#F5ECE0] border border-[#E6D7C3] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#B8864B] text-white flex items-center justify-center mb-6 shadow-xs">
                <CheckCircle2 className="w-6 h-6 stroke-[2]" />
              </div>

              <h3 className="font-heading font-bold text-xl text-[#222222] mb-2.5">
                Reduces Errors & Rejection Risks
              </h3>

              <p className="text-sm text-[#555555] leading-relaxed mb-4">
                A single spelling typo or wrong Arabic profession title can cause GDRFA application rejections and lost government fees. Our certified typists pre-audit every character before transmission.
              </p>
            </div>

            <div className="pt-4 border-t border-[#DECBB5]/70 flex items-center gap-2 text-xs font-bold text-[#976A36]">
              <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
              <span>99.8% First-Time Approval Accuracy</span>
            </div>
          </motion.div>

          {/* Card 3: Faster Government Processing (4 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 p-7 rounded-3xl bg-white border border-[#EFEAE2] hover:border-[#B8864B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] mb-5">
                <Zap className="w-6 h-6 stroke-[1.8]" />
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#222222] mb-2">
                Faster Government Processing
              </h3>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Direct integration with GDRFA Dubai immigration backends enables faster processing queues and priority clearance flags for urgent applications.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F1EBE1] flex items-center gap-2 text-xs font-semibold text-[#B8864B]">
              <TrendingUp className="w-4 h-4" />
              <span>Express 24-Hour Routing Available</span>
            </div>
          </motion.div>

          {/* Card 4: Professional Guidance (4 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 p-7 rounded-3xl bg-white border border-[#EFEAE2] hover:border-[#B8864B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] mb-5">
                <Compass className="w-6 h-6 stroke-[1.8]" />
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#222222] mb-2">
                Professional Guidance
              </h3>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Understand salary eligibility thresholds, MOFA attestation standards, and legal family dependency rules with seasoned immigration professionals.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F1EBE1] flex items-center gap-2 text-xs font-semibold text-[#B8864B]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Expert UAE Immigration Counsel</span>
            </div>
          </motion.div>

          {/* Card 5: Compliance Support (4 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-4 p-7 rounded-3xl bg-white border border-[#EFEAE2] hover:border-[#B8864B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] mb-5">
                <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#222222] mb-2">
                Compliance & Fine Protection
              </h3>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Never miss an expiration date. Our automated compliance tracking alerts you before grace period deadlines to prevent daily overstay penalties.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F1EBE1] flex items-center gap-2 text-xs font-semibold text-[#B8864B]">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Late Fine Guarantee</span>
            </div>
          </motion.div>

          {/* Card 6: End-to-End Assistance (Full Width Banner - 12 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-12 p-8 rounded-3xl bg-[#FAF5EC] border border-[#E6D7C3] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#B8864B] text-white flex items-center justify-center shrink-0 shadow-md">
                <Layers className="w-7 h-7 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#222222] mb-1.5">
                  Complete End-to-End Turnkey Assistance
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed max-w-3xl">
                  From electronic entry permits, in-country status changes, and Smart Salem VIP medical typing, to biometric fingerprint slots and physical Emirates ID hand-delivery, Brightlink manages every single touchpoint.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation && onOpenConsultation('Amer Center Full-Service Assistance')}
              className="shrink-0 px-7 py-3.5 rounded-full bg-[#B8864B] text-white font-bold text-xs sm:text-sm hover:bg-[#9E723E] transition-all cursor-pointer shadow-md shadow-[#B8864B]/20 flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyUseAmer;
