import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  Mail, 
  User, 
  ShieldCheck, 
  Clock, 
  Building2, 
  FileCheck 
} from 'lucide-react';

export const ReraConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licenseCategory: 'Individual RERA Broker Card',
    residencyStatus: 'UAE Resident (Emirates ID Holder)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Brightlink, I would like to get RERA Licensing assistance for: ${formData.licenseCategory}. My Name: ${formData.name || 'Client'}, Phone: ${formData.phone || 'N/A'}`
    );
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <section id="consultation" className="py-20 lg:py-24 bg-[#141414] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form Copy & Trust Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5D7A1] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="uppercase tracking-wider text-[11px] font-bold">
                RERA Desk Online
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Book Your Free <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">
                RERA Eligibility Audit
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-lg">
              Speak directly with our senior Dubai Land Department licensing consultants. We review your academic credentials, outline exact government fees, and book your DREI exam slot with zero delays.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#B8864B]/20 text-[#F5D7A1] flex items-center justify-center shrink-0 border border-[#B8864B]/30">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">15-Minute Response Time</h4>
                  <p className="text-xs text-neutral-400">Our government relations team replies promptly during UAE business hours.</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#B8864B]/20 text-[#F5D7A1] flex items-center justify-center shrink-0 border border-[#B8864B]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Confidentiality Guaranteed</h4>
                  <p className="text-xs text-neutral-400">Your personal identity documents and business plans remain strictly private.</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#B8864B]/20 text-[#F5D7A1] flex items-center justify-center shrink-0 border border-[#B8864B]/30">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Authorized Dubai Typing Center</h4>
                  <p className="text-xs text-neutral-400">Direct integration with DLD, DED, DREI, and Dubai Police systems.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Fast-Track on WhatsApp</span>
              </button>
              <span className="text-xs text-neutral-400">No waiting list</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#1C1A17] rounded-3xl p-7 sm:p-10 border border-[#B8864B]/30 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center mx-auto shadow-lg shadow-[#25D366]/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      Inquiry Received!
                    </h3>

                    <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#F5D7A1]">{formData.name}</strong>. A dedicated RERA licensing officer has received your request and will contact you via WhatsApp and email within 15 minutes.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleDirectWhatsApp}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat Now on WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            licenseCategory: 'Individual RERA Broker Card',
                            residencyStatus: 'UAE Resident (Emirates ID Holder)',
                            message: ''
                          });
                        }}
                        className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Request RERA Assistance
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Fill in your details below for personalized advice and fee estimates.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alexander Vance"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#B8864B] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                          Phone / WhatsApp *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+971 50 123 4567"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#B8864B] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="alex@domain.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#B8864B] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* License Type */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                        License Category Needed *
                      </label>
                      <select
                        value={formData.licenseCategory}
                        onChange={(e) => setFormData({ ...formData, licenseCategory: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#B8864B] transition-colors"
                      >
                        <option value="Individual RERA Broker Card" className="bg-[#1C1A17] text-white">Individual RERA Broker Card (Agent)</option>
                        <option value="New Real Estate Brokerage Firm" className="bg-[#1C1A17] text-white">New Real Estate Brokerage Firm (Company)</option>
                        <option value="Property Management License" className="bg-[#1C1A17] text-white">Property Management & Leasing License</option>
                        <option value="Holiday Homes Rental Operator" className="bg-[#1C1A17] text-white">Holiday Homes Operator License</option>
                        <option value="RERA Broker Card Annual Renewal" className="bg-[#1C1A17] text-white">RERA Broker Card Annual Renewal</option>
                        <option value="Trakheesi Advertising Permit Setup" className="bg-[#1C1A17] text-white">Trakheesi Advertising Permit Setup</option>
                      </select>
                    </div>

                    {/* Residency Status */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                        Current UAE Residency Status
                      </label>
                      <select
                        value={formData.residencyStatus}
                        onChange={(e) => setFormData({ ...formData, residencyStatus: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#B8864B] transition-colors"
                      >
                        <option value="UAE Resident (Emirates ID Holder)" className="bg-[#1C1A17] text-white">UAE Resident (Emirates ID Holder)</option>
                        <option value="UAE Golden Visa Holder" className="bg-[#1C1A17] text-white">UAE Golden Visa Holder</option>
                        <option value="Currently on Visit / Tourist Visa" className="bg-[#1C1A17] text-white">Currently on Visit / Tourist Visa</option>
                        <option value="Outside UAE / Moving to Dubai" className="bg-[#1C1A17] text-white">Outside UAE / Moving to Dubai</option>
                      </select>
                    </div>

                    {/* Message / Details */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 block mb-1">
                        Specific Questions or Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us if you have degree attestations ready, or details of your planned real estate agency..."
                        className="w-full p-3.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs sm:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-[#B8864B] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#B8864B]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processing Request...</span>
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Free Eligibility Audit</span>
                          </>
                        )}
                      </motion.button>
                    </div>

                    <p className="text-[10px] text-center text-neutral-400">
                      By submitting, you agree to receive official RERA compliance advice from Brightlink Typing.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
