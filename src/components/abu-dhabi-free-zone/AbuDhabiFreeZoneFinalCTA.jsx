import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Landmark, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  MessageSquare,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const AbuDhabiFreeZoneFinalCTA = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const [activityInput, setActivityInput] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const handleStartSetup = (e) => {
    e.preventDefault();
    const query = activityInput.trim() 
      ? `Hello, I would like to inquire about Abu Dhabi Free Zone setup for: ${encodeURIComponent(activityInput.trim())}`
      : 'Hello, I would like to inquire about Abu Dhabi Free Zone Business Setup.';
    window.open(`https://wa.me/971566556645?text=${encodeURIComponent(query)}`, '_blank');
  };

  const handleOpenConsultationModal = () => {
    onOpenConsultation(activityInput.trim() ? `Abu Dhabi Free Zone Setup - ${activityInput.trim()}` : 'Abu Dhabi Free Zone Business Setup');
  };

  return (
    <section id="abu-dhabi-final-cta-section" className="py-20 lg:py-24 bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#B8864B]/10 via-[#DECBB5]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-[#0F172A] border border-[#B8864B]/40 shadow-2xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden"
        >
          {/* Subtle Ambient Accent Glows Inside Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8C5E28]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Label */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F5D7A1] text-xs font-bold uppercase tracking-wider mb-5">
            <Landmark className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Incorporate in Abu Dhabi</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Discuss Your Abu Dhabi Business Setup
          </h2>

          {/* Supporting Text */}
          <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Share your proposed commercial activities, intended legal structure, or facility requirements with Brightlink. Our corporate advisors will help you evaluate jurisdictions, prepare compliance documents, and plan your establishment.
          </p>

          {/* Activity Input Form */}
          <form onSubmit={handleStartSetup} className="mt-8 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
              <input
                type="text"
                value={activityInput}
                onChange={(e) => setActivityInput(e.target.value)}
                placeholder="Enter your activity (e.g., Asset Management, Green Tech, Industrial Logistics)..."
                className="flex-1 px-4 py-3 bg-transparent text-xs sm:text-sm text-white placeholder:text-neutral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 transition-all cursor-pointer whitespace-nowrap shadow-md flex items-center justify-center gap-1.5 font-heading"
              >
                <span>Request a Tailored Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          {/* Contact Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleOpenConsultationModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white font-semibold text-xs border border-white/15 transition-all cursor-pointer font-heading"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F5D7A1]" />
              <span>Get a Free Consultation</span>
            </button>
            
            <a
              href="https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Abu%20Dhabi%20Free%20Zone%20Business%20Setup."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 hover:text-emerald-200 font-semibold text-xs border border-[#25D366]/30 transition-all cursor-pointer font-heading"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Contact Brightlink on WhatsApp (+971 56 655 6645)</span>
            </a>
          </div>

          {/* Direct Verified Contact Details */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
            <div className="flex items-center justify-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#B8864B]" />
              <span>Call: <strong className="text-white">+971 4 330 0011</strong></span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-[#B8864B]" />
              <span>Email: <strong className="text-white">info@brightlinktyping.com</strong></span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#B8864B]" />
              <span>Office: <strong className="text-white">Al Barsha, Dubai, UAE</strong></span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
