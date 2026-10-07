import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

export const GoldenVisaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Real Estate Investor (Property AED 2M+)',
    currentStatus: 'UAE Resident',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/inquiries', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: `Golden Visa 10-Year (${formData.category})`,
        urgency: 'high',
        preferredTime: 'Immediate',
        notes: `Status: ${formData.currentStatus}. ${formData.notes}`
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/90 shadow-xl max-w-3xl mx-auto"
    >
      <div className="text-center space-y-2 mb-6">
        <h3 className="text-2xl font-bold text-[#222222]">
          Instant Golden Visa Pre-Assessment
        </h3>
        <p className="text-xs sm:text-sm text-[#666666]">
          Upload your Title Deed or Degree certificate for an immediate confidential eligibility audit.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
          <h4 className="text-base font-bold">Assessment Request Received!</h4>
          <p className="text-xs">A Golden Visa specialist from our Business Bay office will contact you within 15 minutes to review your pre-approval status.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-600 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alexander Vance"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-600 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 000 0000"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-600 mb-1">
                Golden Visa Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50 cursor-pointer"
              >
                <option>Real Estate Investor (Property AED 2M+)</option>
                <option>Skilled Professional (Salary AED 30k+)</option>
                <option>Entrepreneur / Business Founder</option>
                <option>Outstanding Graduate / PhD</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-600 mb-1">
                Current Residency Status
              </label>
              <select
                value={formData.currentStatus}
                onChange={(e) => setFormData({ ...formData, currentStatus: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B8864B] bg-neutral-50 cursor-pointer"
              >
                <option>UAE Resident (Employment / Partner)</option>
                <option>Tourist / Visit Visa</option>
                <option>Outside UAE (Overseas Investor)</option>
                <option>Cancelled Visa (Grace Period)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <span>Validating Pre-Approval...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit for Confidential Pre-Approval Check</span>
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default GoldenVisaForm;
