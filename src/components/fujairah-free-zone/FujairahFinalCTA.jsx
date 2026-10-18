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
  Mail,
  Clock,
  MapPin
} from 'lucide-react';

export const FujairahFinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    licenceType: 'Commercial Trading Licence',
    facilityType: 'Trading Office / Flexi-Desk',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const query = encodeURIComponent(`Hello Brightlink, I would like to request an itemized quotation for Fujairah Free Zone company setup (${formData.licenceType}).`);
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section id="fujairah-final-cta-section" className="py-20 bg-gradient-to-b from-[#FAF8F5] via-[#FFFFFF] to-[#FFFFFF] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#B8864B]/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-gradient-to-br from-[#E6D7C3]/40 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main CTA Container Card */}
        <div className="rounded-3xl border border-[#DECBB5] bg-white shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Call-to-Actions & Reassurance */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
                <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>START YOUR FUJAIRAH JOURNEY</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight leading-tight">
                Request a Tailored Fujairah Free Zone Quotation
              </h2>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Connect directly with Brightlink’s senior corporate setup specialists. We provide an itemized breakdown of official authority registration fees, licence categories, warehouse or office leasing, and residency visa quotas tailored to your operational profile.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation('Fujairah Free Zone Immediate Inquiry')}
                  className="px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Get a Free Consultation</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="px-5 py-3.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact on WhatsApp</span>
                </button>
              </div>

              {/* Direct Reassurances */}
              <div className="pt-6 border-t border-[#F1E8DC] space-y-3 text-xs text-[#334155]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Confidential initial consultation with zero upfront advisory charges</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Direct FFZA portal filing and liaison with Port of Fujairah departments</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Comprehensive visa typing, medical scheduling, and banking guidance</span>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6D7C3] flex flex-wrap items-center justify-between gap-4 text-xs text-[#475569]">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#8C5E28]" />
                  <span>Hotline: <strong>+971 56 655 6645</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#8C5E28]" />
                  <span>info@brightlinktyping.com</span>
                </div>
              </div>

            </div>

            {/* Right Column: Confidential Inbound Inquiry Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] shadow-md relative">
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                      Consultation Request Received
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
                      Thank you. A senior Brightlink corporate advisor will review your activity requirements and contact you within standard business hours with your customized quotation.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-lg bg-white border border-[#DECBB5] text-xs font-bold text-[#8C5E28] hover:bg-[#FAF5EC] cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                        Discuss Your Business Setup
                      </h3>
                      <p className="text-xs text-[#64748B]">
                        Provide your details below for an itemized quotation and activity assessment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#334155] mb-1 font-heading">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] bg-white text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#B8864B]/40 focus:border-[#B8864B]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#334155] mb-1 font-heading">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] bg-white text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#B8864B]/40 focus:border-[#B8864B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#334155] mb-1 font-heading">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] bg-white text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#B8864B]/40 focus:border-[#B8864B]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#334155] mb-1 font-heading">
                          Desired Licence
                        </label>
                        <select
                          value={formData.licenceType}
                          onChange={(e) => setFormData({ ...formData, licenceType: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#DECBB5] bg-white text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#B8864B]/40 focus:border-[#B8864B]"
                        >
                          <option value="Commercial Trading Licence">Commercial Trading Licence</option>
                          <option value="General Trading Licence">General Trading Licence</option>
                          <option value="Warehousing Licence">Warehousing Licence</option>
                          <option value="Industrial / Manufacturing Licence">Manufacturing Licence</option>
                          <option value="Professional Consultancy Licence">Service / Consultancy</option>
                          <option value="Logistics / Marine Licence">Marine / Logistics Licence</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#334155] mb-1 font-heading">
                          Facility Preference
                        </label>
                        <select
                          value={formData.facilityType}
                          onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#DECBB5] bg-white text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#B8864B]/40 focus:border-[#B8864B]"
                        >
                          <option value="Trading Office / Flexi-Desk">Flexi-Desk / Office</option>
                          <option value="Pre-Built Business Unit">Pre-Built Business Unit</option>
                          <option value="Bonded Warehouse (500+ sqm)">Bonded Warehouse</option>
                          <option value="Industrial Land Plot">Industrial Land Plot</option>
                          <option value="Undecided / Needs Guidance">Undecided / Guidance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#334155] mb-1 font-heading">
                        Brief Operational Overview or Target Activities
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your proposed goods, target markets, or required visa quota..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DECBB5] bg-white text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#B8864B]/40 focus:border-[#B8864B]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request a Fujairah Free Zone Quote</span>
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#64748B] pt-1">
                      <Lock className="w-3 h-3 text-[#16A34A]" />
                      <span>Your personal information is confidential and protected by NDA.</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
