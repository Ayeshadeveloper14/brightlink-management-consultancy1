import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  RotateCcw, 
  MessageSquare,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export const ContactForm = () => {
  const shouldReduceMotion = useReducedMotion();

  const serviceOptions = [
    'Family Visa Sponsorship',
    'Golden Visa (10 Years)',
    'Partner & Investor Visa',
    'Employment & Freelance Visa',
    'Tourist & Visit Visa Express',
    'Visa Renewal & Fine Reductions',
    'DHA Medical & Emirates ID Biometrics',
    'Document Attestation (MOFA & Embassy)',
    'RAK Free Zone (RAKEZ) Business Setup',
    'Corporate PRO & Business Setup',
    'Other / General Legal Inquiry'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Family Visa Sponsorship',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // Field validation
  const validate = () => {
    const errs = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address (e.g. name@example.com).';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number with country/area code.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter an inquiry subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide details or questions regarding your inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please enter at least 10 characters describing your case.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
    if (serverError) setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError('');

    try {
      const response = await axios.post('/api/contact', {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        service: formData.service,
        subject: formData.subject.trim(),
        message: formData.message.trim()
      });

      if (response.data && response.data.success) {
        setSubmittedData({
          ...formData,
          id: response.data.data?.id || `CT-${Date.now().toString().slice(-6)}`,
          submittedAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        });
      } else {
        throw new Error(response.data?.message || 'Server did not acknowledge inquiry.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      const msg = err.response?.data?.message || err.message || 'Unable to submit your inquiry at this moment. Please try again or reach us immediately via WhatsApp.';
      setServerError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setServerError('');
    setErrors({});
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Family Visa Sponsorship',
      subject: '',
      message: ''
    });
  };

  const generateWhatsAppBackupUrl = () => {
    if (!submittedData) return 'https://wa.me/971566556645';
    const text = [
      `*New Inquiry (Ref: ${submittedData.id})*`,
      `*Name:* ${submittedData.name}`,
      `*Phone:* ${submittedData.phone}`,
      `*Email:* ${submittedData.email}`,
      `*Service:* ${submittedData.service}`,
      `*Subject:* ${submittedData.subject}`,
      `*Message:* ${submittedData.message}`,
      '',
      'Please confirm receipt and guide me regarding the required documents.'
    ].join('\n');

    return `https://wa.me/971566556645?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="contact-form-section" className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 lg:p-10 shadow-sm relative space-y-6">
      
      {/* Form Header */}
      <div className="space-y-2 border-b border-neutral-100 pb-5">
        <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading">
          ONLINE INQUIRY & FILE REGISTRATION
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading tracking-tight">
          Send Us a Direct Message
        </h3>
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
          Submit your requirements to our registered typing consultants in Business Bay. We review cases within 30 minutes during business hours.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!submittedData ? (
          <motion.form
            key="form"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            {/* Server Error Alert */}
            {serverError && (
              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 font-bold">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>Submission Error</span>
                </div>
                <p className="text-xs text-red-700 leading-relaxed">
                  {serverError}
                </p>
                <div className="pt-1 flex items-center gap-3">
                  <a
                    href="https://wa.me/971566556645"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#15803D] hover:underline flex items-center gap-1"
                  >
                    <span>Send directly via WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* Name Field */}
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-[#0F172A] mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g. Mohammed Al-Hashimi"
                className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-neutral-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.name 
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/20' 
                    : 'border-neutral-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email & Phone Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-[#0F172A] mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-neutral-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.email 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/20' 
                      : 'border-neutral-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold text-[#0F172A] mb-1.5">
                  Phone Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+971 50 123 4567"
                  className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-neutral-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.phone 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/20' 
                      : 'border-neutral-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Service & Subject Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-service" className="block text-xs font-bold text-[#0F172A] mb-1.5">
                  Service of Interest
                </label>
                <div className="relative">
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className="w-full appearance-none px-4 py-3 rounded-xl border border-neutral-300 text-xs sm:text-sm bg-neutral-50/50 focus:bg-white focus:border-[#B8864B] focus:outline-none focus:ring-2 focus:ring-[#B8864B]/20 cursor-pointer pr-10"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold text-[#0F172A] mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="e.g. Spouse Visa Transfer & Medical"
                  className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-neutral-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.subject 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/20' 
                      : 'border-neutral-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-[#0F172A] mb-1.5">
                Message & Case Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Please describe your current residency status, document requirements, or any questions you have for our typing team..."
                className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-neutral-50/50 transition-colors focus:bg-white focus:outline-none focus:ring-2 resize-none ${
                  errors.message 
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/20' 
                    : 'border-neutral-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Privacy Guarantee Note */}
            <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#DECBB5] flex items-start gap-2 text-xs text-[#6D4518] leading-relaxed">
              <ShieldCheck className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
              <span>
                <strong>Client Confidentiality:</strong> Your contact information is protected under UAE data privacy standards and used strictly to process your consultation. We never request banking credentials, OTPs, or passwords.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                loading 
                  ? 'bg-neutral-400 cursor-not-allowed' 
                  : 'bg-[#B8864B] hover:bg-[#9F7038] hover:shadow-lg hover:shadow-[#B8864B]/25 active:scale-[0.99]'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting Message to Typist...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </>
              )}
            </button>
          </motion.form>
        ) : (
          /* Confirmation Success Card */
          <motion.div
            key="success"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-6 space-y-6 text-center"
          >
            <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-[#16A34A] border border-emerald-200 mx-auto flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A34A] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Inquiry Logged Successfully
              </span>
              <h4 className="text-2xl font-bold text-[#0F172A] font-heading pt-2">
                Thank You, {submittedData.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                Your message has been registered with reference ID <strong className="text-[#0F172A] font-mono">{submittedData.id}</strong>. A Brightlink legal typist will review your details and contact you promptly.
              </p>
            </div>

            {/* Submission Summary Card */}
            <div className="max-w-md mx-auto p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left text-xs space-y-2">
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">Service:</span>
                <span className="font-semibold text-[#0F172A]">{submittedData.service}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">Subject:</span>
                <span className="font-semibold text-[#0F172A]">{submittedData.subject}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-200/60">
                <span className="text-neutral-500">Phone:</span>
                <span className="font-semibold text-[#0F172A] tabular-nums">{submittedData.phone}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">Email:</span>
                <span className="font-semibold text-[#0F172A]">{submittedData.email}</span>
              </div>
            </div>

            {/* Dual Action: Open in WhatsApp or Send Another */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppBackupUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Also Follow Up via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Send Another Message</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
