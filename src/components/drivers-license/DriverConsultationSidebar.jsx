import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  MessageCircle, 
  Phone, 
  Mail, 
  User, 
  Globe2, 
  CheckCircle2, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export const DriverConsultationSidebar = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    licenseCountry: '',
    serviceType: 'Foreign License Direct Exchange (No Test)'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Brightlink, I need Driver's License assistance in Dubai. Name: ${formData.name || 'Client'}, License Country: ${formData.licenseCountry || 'Foreign License'}, Service: ${formData.serviceType}`
    );
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <aside className="w-full">
      <div className="sticky top-28 bg-[#FCFAF8] rounded-3xl p-6 sm:p-7 border border-[#EFEAE2] shadow-sm space-y-6">
        
        {/* Card Header with Road Image */}
        <div className="relative rounded-2xl overflow-hidden h-36 bg-neutral-900 border border-[#EFEAE2]">
          <img
            src="/images/why_fast_process_1790842377870.jpg"
            alt="RTA Driver's License Assistance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5D7A1] block">
              Direct RTA File Support
            </span>
            <h3 className="text-sm font-bold leading-tight">
              Get Your UAE Driving License
            </h3>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-6 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]/40">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[#222222]">
                Request Submitted!
              </h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Thank you, <strong className="text-[#B8864B]">{formData.name}</strong>. Our RTA licensing consultant will contact you via WhatsApp within 15 minutes.
              </p>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp Now</span>
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3.5"
            >
              <div>
                <h4 className="text-base font-bold text-[#222222]">
                  Check License Eligibility
                </h4>
                <p className="text-[11px] text-[#666666]">
                  Find out if your country qualifies for direct swap or Golden Visa exemption.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#555555] block mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Smith"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#EFEAE2] text-xs text-[#222222] placeholder:text-neutral-400 focus:outline-none focus:border-[#B8864B] transition-colors"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#555555] block mb-1">
                  Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#EFEAE2] text-xs text-[#222222] placeholder:text-neutral-400 focus:outline-none focus:border-[#B8864B] transition-colors"
                  />
                </div>
              </div>

              {/* Current License Country */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#555555] block mb-1">
                  Country of Current License *
                </label>
                <div className="relative">
                  <Globe2 className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.licenseCountry}
                    onChange={(e) => setFormData({ ...formData, licenseCountry: e.target.value })}
                    placeholder="e.g. UK, USA, India, Germany, etc."
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#EFEAE2] text-xs text-[#222222] placeholder:text-neutral-400 focus:outline-none focus:border-[#B8864B] transition-colors"
                  />
                </div>
              </div>

              {/* Service Needed */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#555555] block mb-1">
                  Required Service
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#EFEAE2] text-xs text-[#222222] focus:outline-none focus:border-[#B8864B] transition-colors"
                >
                  <option value="Foreign License Direct Exchange (No Test)">Foreign License Direct Exchange (No Test)</option>
                  <option value="Golden Visa Direct Road Test Exemption">Golden Visa Direct Road Test Exemption</option>
                  <option value="New UAE Driver's License (Full Course)">New UAE Driver's License (Full Course)</option>
                  <option value="RTA Approved Eye Test Booking">RTA Approved Eye Test Booking</option>
                  <option value="Legal Translation of Foreign License">Legal Translation of Foreign License</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-1.5"
                >
                  {isSubmitting ? (
                    <span>Verifying...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Check My Eligibility</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Direct WhatsApp Help</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[10px] text-neutral-400">
                  ⚡ 15-Minute Guaranteed Response Time
                </span>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Small Trust Badges */}
        <div className="pt-4 border-t border-neutral-200/60 space-y-2 text-xs text-[#555555]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8864B] shrink-0" />
            <span>Authorized Dubai RTA Typing Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#B8864B] shrink-0" />
            <span>Same-Day Eye Test Scheduling</span>
          </div>
        </div>

      </div>
    </aside>
  );
};
