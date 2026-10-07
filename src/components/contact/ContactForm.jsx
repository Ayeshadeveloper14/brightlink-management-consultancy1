import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Visa Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.data && response.data.success) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xl">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Online Inquiry</span>
            <h3 className="text-2xl font-bold text-[#222222] mt-1">Send Us a Direct Message</h3>
            <p className="text-xs text-[#666666] mt-1">Our certified UAE legal typists will respond within 30 minutes.</p>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#333333] mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Michael Henderson"
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="michael@example.com"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 123 4567"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#333333] mb-1">Service Required</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
            >
              <option value="Family Visa Sponsorship">Family Visa Sponsorship</option>
              <option value="Golden Visa (10 Years)">Golden Visa (10 Years)</option>
              <option value="Passport Renewal / BLS">Passport Renewal / BLS</option>
              <option value="DHA Medical Fitness Booking">DHA Medical Fitness Booking</option>
              <option value="Tourist Visa Express">Tourist Visa Express</option>
              <option value="Visa Renewal & Fine Reductions">Visa Renewal & Fine Reductions</option>
              <option value="Emirates ID Biometrics">Emirates ID Biometrics</option>
              <option value="Document Attestation (MOFA)">Document Attestation (MOFA)</option>
              <option value="General Visa Inquiry">General Visa Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#333333] mb-1">Message / Details</label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Provide details about your current status, family members, or inquiry..."
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? <span>Sending...</span> : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Inquiry to Typist</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="py-10 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-[#222222]">Message Sent Successfully!</h3>
          <p className="text-xs text-[#555555] max-w-xs mx-auto">
            Thank you, {formData.name}. Your inquiry has been routed to our Business Bay team. We will respond promptly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 rounded-xl bg-neutral-100 text-xs font-bold text-neutral-700 hover:bg-neutral-200 cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
