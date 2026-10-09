import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageSquare, 
  PhoneCall, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const FamilyVisaFinalCta = ({ onOpenConsultation }) => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#0F172A] text-white overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#B8864B]/15 via-transparent to-[#B8864B]/10 blur-3xl pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Prop (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#F5D7A1] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-[#F5D7A1]" />
              <span>GDRFA Dubai & ICP Authorized Family Center</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
              Ready to Reunite Your Family in the UAE with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E8BE78] to-[#C5985B]">100% Peace of Mind</span>?
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
              Don’t risk document rejections, delays, or unexpected fines. Our senior government liaison typists review your marriage certificates, salary eligibility, and Ejari leases with zero upfront commitment.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-white/10 text-xs">
              <div>
                <p className="text-xl font-bold text-[#F5D7A1]">3 – 5 Days</p>
                <p className="text-neutral-400 text-[11px]">Normal Turnaround</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">5,400+</p>
                <p className="text-neutral-400 text-[11px]">Families Sponsored</p>
              </div>
              <div>
                <p className="text-xl font-bold text-emerald-400">0% Rejection</p>
                <p className="text-neutral-400 text-[11px]">Pre-Audit Guarantee</p>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => onOpenConsultation('Family Visa Final CTA')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] via-[#E8BE78] to-[#C5985B] hover:brightness-105 active:scale-98 shadow-lg shadow-black/20 transition-all cursor-pointer"
              >
                <span>Book Free Eligibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/971500000000?text=Hello%20Brightlink,%20I%20am%20ready%20to%20apply%20for%20my%20Family%20Visa.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm active:scale-98 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Office Location & Case Support Box (4 cols) */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 space-y-4">
            <div className="border-b border-white/10 pb-3">
              <span className="text-[10px] font-bold text-[#F5D7A1] uppercase tracking-wider block mb-1">
                Walk-In or Online Service
              </span>
              <h3 className="text-base font-bold text-white">
                Brightlink Typing Office
              </h3>
            </div>

            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5D7A1] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Prime Tower, Business Bay</span>
                  <p className="text-[11px] text-neutral-400">Downtown Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F5D7A1] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Operating Hours:</span>
                  <p className="text-[11px] text-neutral-400">Mon – Sat: 8:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Government Accreditations:</span>
                  <p className="text-[11px] text-neutral-400">Amer GDRFA, ICP Federal & MOHRE</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => onOpenConsultation('Business Bay Office Appointment')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#F5D7A1] bg-white/10 hover:bg-white/15 border border-[#F5D7A1]/30 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule In-Person Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FamilyVisaFinalCta;
