import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  MessageSquare, 
  FileCheck2, 
  SearchCheck, 
  Send, 
  Clock, 
  CheckCircle2, 
  PackageCheck,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const InteractiveJourney = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const journeySteps = [
    {
      step: '01',
      title: 'Consultation',
      subtitle: 'Requirement Analysis',
      description: 'We evaluate your visa status, family requirements, and ensure optimal category selection.',
      icon: MessageSquare,
      time: 'Day 1'
    },
    {
      step: '02',
      title: 'Document Collection',
      subtitle: 'Secure Digital Upload',
      description: 'You upload passport scans, photos, and attested certificates to our encrypted client portal.',
      icon: FileCheck2,
      time: 'Day 1'
    },
    {
      step: '03',
      title: 'Application Review',
      subtitle: 'Pre-Submission Audit',
      description: 'Our senior PROs verify all specifications, salary quotas, and translations to eliminate rejection risks.',
      icon: SearchCheck,
      time: 'Day 1–2'
    },
    {
      step: '04',
      title: 'Government Submission',
      subtitle: 'GDRFA Electronic Lodgement',
      description: 'We transmit your application directly through official Amer & GDRFA server gateways with payment.',
      icon: Send,
      time: 'Day 2'
    },
    {
      step: '05',
      title: 'Processing',
      subtitle: 'Medical & Biometrics',
      description: 'We coordinate VIP medical fitness scheduling and biometric fingerprint slots with instant tracking.',
      icon: Clock,
      time: 'Day 2–3'
    },
    {
      step: '06',
      title: 'Approval',
      subtitle: 'Residency Authorization',
      description: 'Official GDRFA approval granted. Digital residency visa issued and Emirates ID printing initiated.',
      icon: CheckCircle2,
      time: 'Day 3–4'
    },
    {
      step: '07',
      title: 'Delivery',
      subtitle: 'Doorstep Handover',
      description: 'Physical Emirates ID card and official documentation delivered to your UAE residence via express courier.',
      icon: PackageCheck,
      time: 'Day 4–5'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#F1EBE1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Curved Service Roadmap
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            The Interactive Amer Center Journey
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Follow our 7-stage interconnected roadmap designed to eliminate friction from initial inquiry to final physical card delivery.
          </p>
        </motion.div>

        {/* Desktop Curved Roadmap Layout (Curved Snake/Wave Flow) */}
        <div className="relative">
          
          {/* Subtle connecting curved SVG wave background for large screens */}
          <div className="hidden xl:block absolute inset-0 pointer-events-none -z-0">
            <svg 
              className="w-full h-full text-[#E6D7C3]/60" 
              viewBox="0 0 1200 450" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 100 110 Q 350 40, 600 110 T 1100 110 Q 1150 225, 950 320 T 300 320" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* Stepped Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.step}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`group relative p-6 sm:p-7 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#B8864B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                    idx === 6 ? 'md:col-span-2 lg:col-span-1 xl:col-span-2 bg-[#FAF5EC]/70' : ''
                  }`}
                >
                  <div>
                    {/* Top Step Number and Time Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] group-hover:bg-[#B8864B] group-hover:text-white transition-colors flex items-center justify-center text-xs font-bold font-heading text-[#B8864B]">
                          {step.step}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-[#976A36] transition-colors">
                          Stage {idx + 1}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#976A36] bg-white border border-[#E6D7C3] px-2.5 py-0.5 rounded-full shadow-2xs">
                        {step.time}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-[#222222] leading-tight">
                          {step.title}
                        </h3>
                        <div className="text-[11px] font-semibold text-[#B8864B]">
                          {step.subtitle}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F1EBE1] flex items-center justify-between text-xs text-[#777777]">
                    <span className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                      Verified Milestone
                    </span>
                    <span className="text-[10px] text-neutral-400">Step {idx + 1}/7</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Fast-Track Guarantee Callout */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#FAF5EC] via-[#F7EFE3] to-[#F5ECE0] border border-[#E6D7C3] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#B8864B] text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#222222] mb-0.5">
                Urgent & Same-Day Express Routing
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-2xl">
                Facing visa expiry or immediate flight requirements? Our express channel expedites entry permits, status amendments, and medical fitness clearances in as little as 24 hours.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Amer Center Express 24-Hour Routing')}
            className="shrink-0 px-6 py-3 rounded-full bg-[#B8864B] text-white text-xs font-bold hover:bg-[#9E723E] transition-colors cursor-pointer shadow-sm flex items-center gap-2"
          >
            <span>Request Express Processing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default InteractiveJourney;
