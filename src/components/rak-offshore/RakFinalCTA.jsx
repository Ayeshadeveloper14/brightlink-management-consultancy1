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
  MessageSquare,
  Lock,
  Globe2
} from 'lucide-react';

export const RakFinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Dubai Real Estate & Asset Holding',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      id="rak-final-cta-section"
      className="py-20 lg:py-24 bg-gradient-to-b from-[#FAF7F0] via-[#FAF5EC] to-[#F5EEDF] relative overflow-hidden border-t border-[#E6D7C3]"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#DECBB5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Reassurance & Value */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>START YOUR OFFSHORE SETUP TODAY</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.2] font-heading">
                Structure Your International Holding with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Brigitlink</span>
              </h2>

              <p className="text-base text-[#475569] leading-relaxed">
                Connect with our licensed Registered Agent specialists. Whether you are safeguarding prime Dubai real estate, shielding family wealth, or launching cross-border commercial invoicing, we deliver discreet, institutional-grade execution.
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
                  Direct liaison with RAK ICC Registrar & Dubai Land Department
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#334155]">
                  Fast 3 to 5 working day incorporation turnaround
                </span>
              </div>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-4 border-t border-[#DECBB5]/70 flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('RAK Offshore Direct Call Booking')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0F172A] bg-white border border-[#DECBB5] hover:bg-[#FAF5EC] hover:border-[#B8864B] transition-all cursor-pointer shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#B8864B]" />
                <span>Book Direct Phone Call</span>
              </button>

              <div className="text-xs text-[#64748B]">
                Immediate advisory response within 2 business hours.
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Interactive Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-[#DECBB5] p-6 sm:p-8 shadow-xl relative">
              <div className="flex items-center justify-between border-b border-[#F5F1EB] pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    Request a Free Offshore Proposal
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Receive customized structure options and fee schedule.
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
                    Thank You for Reaching Out
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
                    Your confidential RAK ICC inquiry has been received. A dedicated senior corporate advisor will contact you within 2 hours.
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
                        Intended Primary Purpose
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] text-xs sm:text-sm bg-white focus:outline-none focus:border-[#B8864B] focus:ring-1 focus:ring-[#B8864B]"
                      >
                        <option value="Dubai Real Estate & Asset Holding">Dubai Real Estate Holding</option>
                        <option value="Corporate Holding / Subsidiary Ownership">Corporate Holding Company</option>
                        <option value="International Trading & Billing">International Trading</option>
                        <option value="Intellectual Property (IP) Custody">Intellectual Property Protection</option>
                        <option value="Family Wealth & Succession Planning">Wealth & Succession Planning</option>
                        <option value="Other Offshore Vehicle">Other Structuring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1">
                      Brief Message or Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the assets you wish to hold, expected banking needs, or timeline..."
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
                    <span>Your data is protected under UAE data privacy regulations.</span>
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

export default RakFinalCTA;
