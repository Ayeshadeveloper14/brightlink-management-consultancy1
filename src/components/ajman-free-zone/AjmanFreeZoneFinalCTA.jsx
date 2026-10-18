import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  MessageSquare,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Anchor
} from 'lucide-react';

export const AjmanFreeZoneFinalCTA = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const [activityInput, setActivityInput] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const handleStartSetup = (e) => {
    e.preventDefault();
    const query = activityInput.trim() 
      ? `Hello, I would like to inquire about Ajman Free Zone setup for: ${encodeURIComponent(activityInput.trim())}`
      : 'Hello, I would like to inquire about Ajman Free Zone Business Setup.';
    window.open(`https://wa.me/971566556645?text=${encodeURIComponent(query)}`, '_blank');
  };

  const handleOpenConsultationModal = () => {
    onOpenConsultation(activityInput.trim() ? `Ajman Free Zone Setup - ${activityInput.trim()}` : 'Ajman Free Zone Business Setup');
  };

  return (
    <section id="ajman-final-cta-section" className="py-20 lg:py-24 bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF7F0] relative overflow-hidden">
      
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
            <Anchor className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Incorporate in Ajman Free Zone</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Form Your Ajman Free Zone Company?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get personalized guidance on selecting the right licence, optimizing activity groupings, securing workspace solutions, and fast-tracking your UAE residence visas and corporate bank account.
          </p>

          {/* Quick Interactive Search / WhatsApp Form */}
          <form onSubmit={handleStartSetup} className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={activityInput}
              onChange={(e) => setActivityInput(e.target.value)}
              placeholder="Enter planned activity (e.g. General Trading, IT Consulting, E-Commerce)"
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all backdrop-blur-xs"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Alternative Quick Consultation Button */}
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span>Or request a direct consultation:</span>
            <button
              type="button"
              onClick={handleOpenConsultationModal}
              className="text-[#F5D7A1] hover:text-white underline font-medium cursor-pointer"
            >
              Request Callback via Form
            </button>
          </div>

          {/* Trust Value Badges */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-[#B8864B] mb-1.5" />
              <span className="text-xs font-bold text-white font-heading">100% Foreign Ownership</span>
              <span className="text-[11px] text-slate-400">Zero Local Sponsor Required</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-5 h-5 text-[#B8864B] mb-1.5" />
              <span className="text-xs font-bold text-white font-heading">24-48h Fast Track</span>
              <span className="text-[11px] text-slate-400">Rapid Digital Licence</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 className="w-5 h-5 text-[#B8864B] mb-1.5" />
              <span className="text-xs font-bold text-white font-heading">In-House Typing Center</span>
              <span className="text-[11px] text-slate-400">Amer & Medical Coordination</span>
            </div>
            <div className="flex flex-col items-center">
              <PhoneCall className="w-5 h-5 text-[#B8864B] mb-1.5" />
              <span className="text-xs font-bold text-white font-heading">Dedicated Advisor</span>
              <span className="text-[11px] text-slate-400">End-to-End Support</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Strip */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="tel:+971566556645"
            className="rounded-2xl bg-white border border-[#E6D7C3] p-5 flex items-center gap-4 hover:border-[#B8864B] transition-colors shadow-xs group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#8C5E28] font-bold block uppercase tracking-wider font-heading">Call Consultant</span>
              <span className="text-sm font-extrabold text-[#0F172A]">+971 56 655 6645</span>
            </div>
          </a>

          <a
            href="https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Ajman%20Free%20Zone%20Business%20Setup"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white border border-[#E6D7C3] p-5 flex items-center gap-4 hover:border-[#B8864B] transition-colors shadow-xs group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#8C5E28] font-bold block uppercase tracking-wider font-heading">WhatsApp Advisor</span>
              <span className="text-sm font-extrabold text-[#0F172A]">Instant Chat (24/7)</span>
            </div>
          </a>

          <div
            onClick={handleOpenConsultationModal}
            className="rounded-2xl bg-white border border-[#E6D7C3] p-5 flex items-center gap-4 hover:border-[#B8864B] transition-colors shadow-xs group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#8C5E28] font-bold block uppercase tracking-wider font-heading">Online Inquiry</span>
              <span className="text-sm font-extrabold text-[#0F172A]">Request Free Call Back</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
