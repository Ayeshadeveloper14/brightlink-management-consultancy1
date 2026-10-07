import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, User, Phone, Mail, Briefcase } from 'lucide-react';

export const ApplicationForm = () => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Investor Visa',
    agreeTerms: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.agreeTerms) return;

    // Send inquiry via WhatsApp for direct assistance
    const text = encodeURIComponent(
      `Hello Brigitlink! I submitted an Investor Visa inquiry:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nService: ${formData.service}`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="application-form" className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-3">
            Investor Visa Application
          </h2>
          <p className="text-sm text-[#64748B]">
            Submit your details and our senior corporate PRO will get in touch within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                Thank You for Your Submission
              </h3>
              <p className="text-sm text-[#64748B] max-w-md mx-auto">
                Your request has been forwarded to our corporate immigration desk. We will contact you on WhatsApp / phone shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Your name */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 font-heading">
                  Your name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-[#DECBB5] text-sm text-[#0F172A] placeholder-slate-400 focus:outline-hidden focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all"
                  />
                </div>
              </div>

              {/* Your phone */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 font-heading">
                  Your phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-[#DECBB5] text-sm text-[#0F172A] placeholder-slate-400 focus:outline-hidden focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all"
                  />
                </div>
              </div>

              {/* Your email */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 font-heading">
                  Your email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-[#DECBB5] text-sm text-[#0F172A] placeholder-slate-400 focus:outline-hidden focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all"
                  />
                </div>
              </div>

              {/* Service you need */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-2 font-heading">
                  Service you need
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    readOnly
                    value={formData.service}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#DECBB5] text-sm font-semibold text-[#0F172A] cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Agree terms */}
              <div className="pt-2 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  required
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded-sm border-gray-300 text-[#B8864B] focus:ring-[#B8864B]"
                />
                <label htmlFor="agreeTerms" className="text-xs text-[#64748B] leading-relaxed cursor-pointer select-none">
                  I have read and agree to the terms of personal data processing
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#B8864B] hover:via-[#C5985B] hover:to-[#976A36] shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 font-sans"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default ApplicationForm;
