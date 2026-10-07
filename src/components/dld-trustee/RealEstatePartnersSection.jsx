import React from 'react';
import { motion } from 'framer-motion';
import { Building, ShieldCheck, CheckCircle2, Handshake, ArrowRight } from 'lucide-react';

export const RealEstatePartnersSection = ({ onOpenConsultation }) => {
  const featurePoints = [
    'Client document pre-check',
    'POA and signatory review',
    'Developer and bank document guidance',
    'Transaction-ready checklist'
  ];

  const handlePartnerWithUs = () => {
    const query = encodeURIComponent('Hello Brightlink, I represent a real estate brokerage / agency and would like to partner with you for DLD trustee file pre-checks.');
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#1C1A17] via-[#24211D] to-[#141311] text-white p-8 sm:p-12 lg:p-16 border border-[#B8864B]/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Golden Glow Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C5985B]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5D7A1] text-xs font-semibold">
                <Building className="w-3.5 h-3.5 text-[#F5D7A1]" />
                <span className="uppercase tracking-widest text-[11px] font-extrabold">
                  B2B Corporate Desk
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                For real estate companies
              </h2>

              <p className="text-lg sm:text-xl font-semibold text-[#F5D7A1] leading-snug">
                Send your client file before the trustee appointment.
              </p>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-xl">
                If you're a broker or real estate company, we support your team with pre-checking documents, preparing client checklists, coordinating missing documents and reducing last-minute transaction issues.
              </p>

              <div className="pt-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePartnerWithUs}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-sm shadow-xl shadow-[#B8864B]/25 transition-all cursor-pointer whitespace-nowrap"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Partner with us</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Right Supporting Feature Points Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#F5D7A1] block mb-2">
                  Brokerage & Agency Benefits
                </span>

                <div className="space-y-3.5">
                  {featurePoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3.5 p-3 rounded-xl bg-black/25 border border-white/10"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#B8864B]/30 text-[#F5D7A1] flex items-center justify-center shrink-0 border border-[#B8864B]/40">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <span className="text-xs text-neutral-400 font-medium">
                    Priority turnaround for registered brokerage partners
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
