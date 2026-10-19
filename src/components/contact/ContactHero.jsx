import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  ArrowDown, 
  Sparkles,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const ContactHero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-[#FAF7F0] via-[#FFFFFF] to-[#FFFFFF] border-b border-[#E6D7C3]/60 overflow-hidden">
      {/* Background Architectural Ambient Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#B8864B]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#E6D7C3]/30 to-transparent rounded-full blur-2xl" />
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#DECBB5 0.75px, transparent 0.75px)',
            backgroundSize: '32px 32px',
            opacity: 0.35
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Prop, CTA Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Government Authority Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] shadow-xs text-xs font-semibold text-[#8C5E28] font-heading"
            >
              <Building2 className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>BUSINESS BAY HEADQUARTERS · DUBAI</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] font-heading"
            >
              Let’s Make Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#6A471C]">
                Next Step Easier
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-base sm:text-lg text-[#334155] leading-relaxed font-sans max-w-2xl"
            >
              Have a question or need assistance with our services? Our team is here to help you with professional, reliable support. Connect with registered Dubai typing consultants online, visit our Business Bay office, or speak to us directly.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:shadow-[#B8864B]/25 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Contact Us</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <a
                href="https://wa.me/971566556645?text=Hello%20Brightlink%2C%20I%20have%20an%20inquiry%20regarding%20UAE%20visa%20and%20typing%20services.%20Please%20assist%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-[#0F172A] border border-[#DECBB5] hover:border-[#B8864B] text-sm font-bold tracking-wide transition-all shadow-xs flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+971566556645"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#FAF5EC] hover:bg-[#F3EBDE] text-[#8C5E28] border border-[#DECBB5] text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#B8864B]" />
                <span className="tabular-nums">+971 56 655 6645</span>
              </a>
            </motion.div>

            {/* Quick Assurance Strip */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#64748B] font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Government-Accredited Portals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Average 30-Min Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Free Visitor Parking</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Luxury Lounge Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-[#E6D7C3] bg-white shadow-xl shadow-neutral-200/50 group"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                <img
                  src="/images/contact_office_lounge.jpg"
                  alt="Brightlink Typing & Consulting Business Bay Office Lounge"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to existing office image if needed
                    e.currentTarget.src = '/images/professional_consulting_office.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                
                {/* Floating Office Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full border border-neutral-200 text-xs font-bold text-[#0F172A] flex items-center gap-2 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Crystal Tower, M1 Floor</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <p className="text-xs font-semibold text-[#F5D7A1] uppercase tracking-wider">
                    VIP Client Lounge & Typing Center
                  </p>
                  <p className="text-sm sm:text-base font-bold font-heading">
                    Millennium Central Building, Al Asayel St, Business Bay
                  </p>
                  <p className="text-xs text-neutral-300">
                    Open Mon–Sat: 9:00 AM – 6:00 PM GST
                  </p>
                </div>
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="p-4 bg-white border-t border-[#F1EAE0] flex items-center justify-between text-xs text-[#475569]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B8864B]" />
                  <span>Walk-ins & scheduled appointments welcome</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Crystal+Tower+Business+Bay+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#8C5E28] hover:text-[#B8864B] transition-colors"
                >
                  Directions →
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;
