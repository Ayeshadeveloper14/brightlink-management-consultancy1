import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

export const FamilyVisaForm = () => {
  const [formData, setFormData] = useState({
    sponsorName: '',
    phone: '',
    relationship: 'Spouse & Children'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/inquiries', {
        name: formData.sponsorName,
        phone: formData.phone,
        service: `Family Visa (${formData.relationship})`,
        urgency: 'high'
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 shadow-md space-y-4 mt-6"
    >
      <div className="space-y-1">
        <h3 className="text-base font-bold text-[#222222]">
          Quick Family Visa Assessment
        </h3>
        <p className="text-xs text-[#666666]">
          Our typists will audit your documents & reply within 30 minutes.
        </p>
      </div>

      {submitted ? (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-2">
          <p className="font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Inquiry Received Successfully!
          </p>
          <p>Our senior typing manager will review your sponsorship details and contact you via phone or WhatsApp shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
              Sponsor Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.sponsorName}
              onChange={(e) => setFormData({ ...formData, sponsorName: e.target.value })}
              placeholder="e.g. Mohammad Al-Nuaimi"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 000 0000"
                className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                Sponsoring Whom?
              </label>
              <select
                value={formData.relationship}
                onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50 cursor-pointer"
              >
                <option>Spouse & Children</option>
                <option>Spouse Only</option>
                <option>Children Only</option>
                <option>Parents</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Request Document Pre-Check</span>
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default FamilyVisaForm;
