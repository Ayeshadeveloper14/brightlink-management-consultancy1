import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Lock,
  Globe2
} from 'lucide-react';

export const AjmanFinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    structureType: 'Holding Company / Investment Structure',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      id="ajman-final-cta-section"
      className="py-20 lg:py-24 bg-gradient-to-b from-[#FAF7F0] via-[#FAF5EC] to-[#F5EEDF] relative overflow-hidden border-t border-[#E6D7C3]"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#DECBB5]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Reassurance & Value */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>START YOUR OFFSHORE SETUP</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.2] font-heading">
                Set Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Ajman Offshore Company</span>
              </h2>

              <p className="text-base text-[#475569] leading-relaxed">
                We invite you to share your ownership structure, business purpose or investment objectives so Brightlink can help determine the appropriate offshore setup route.
              </p>
            </div>

            {/* Value Guarantees */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#334155]">
                  100% Confidential Consultation & Non-Disclosure Assurance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#334155]">
                  Authorized Registered Agent representation under AFZA Offshore regime
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#334155]">
                  End-to-end banking dossier preparation & compliance filings
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-[#DECBB5]/70 flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('Ajman Offshore Setup - Get Started')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenConsultation && onOpenConsultation('Ajman Offshore Direct Contact Us')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0F172A] bg-white border border-[#DECBB5] hover:bg-[#FAF5EC] hover:border-[#B8864B] transition-all cursor-pointer shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#B8864B]" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>

          {/* Right Column: Confidential Proposal Request Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-[#DECBB5] p-6 sm:p-8 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-[#F5F1EB] pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    Request an Ajman Offshore Proposal
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Receive customized structure options and registered agent fee schedule.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28]">
                  <Lock className="w-4 h-4 text-[#B8864B]" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F172A] font-heading">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
                    Your confidential Ajman Offshore inquiry has been registered. An authorized senior corporate advisor will contact you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#8C5E28] hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] text-xs sm:text-sm focus:outline-none focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] text-xs sm:text-sm focus:outline-none focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] text-xs sm:text-sm focus:outline-none focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1">
                        Primary Holding Objective
                      </label>
                      <select
                        value={formData.structureType}
                        onChange={(e) => setFormData({ ...formData, structureType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] text-xs sm:text-sm bg-white focus:outline-none focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B]"
                      >
                        <option value="Holding Company / Investment Structure">Holding Company & Investments</option>
                        <option value="Asset Ownership & Protection">Asset Ownership & Protection</option>
                        <option value="Cross-Border Business & Invoicing">Cross-Border Trading Operations</option>
                        <option value="Intellectual Property Custody">Intellectual Property Ownership</option>
                        <option value="Approved UAE Property Ownership">Approved UAE Property Holding</option>
                        <option value="Other Corporate Structure">Other Offshore Vehicle</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">
                      Brief Message or Specific Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your planned holding assets, target banking requirements, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] text-xs sm:text-sm focus:outline-none focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Confidential Inquiry</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
                    <span>Protected under UAE corporate privacy standards.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AjmanFinalCTA;
