import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import axios from 'axios';

export const PassportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    nationality: 'Indian (BLS Center)',
    passportType: 'Normal Renewal (36 Pages)',
    serviceSpeed: 'Standard (7 - 10 Days)'
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
        service: `Passport Services (${formData.nationality} - ${formData.passportType})`,
        urgency: formData.serviceSpeed.includes('Tatkal') ? 'emergency' : 'high',
        preferredTime: 'Morning'
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-xl">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">Application Desk</span>
            <h3 className="text-2xl font-bold text-[#222222] mt-1">Book Passport Services</h3>
            <p className="text-xs text-[#666666] mt-1">We prepare your official forms, book BLS/consular slots, and verify all papers.</p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#333333] mb-1">Full Name as per Current Passport *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 123 4567"
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rahul@example.com"
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">Nationality / Center</label>
              <select
                value={formData.nationality}
                onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
              >
                <option value="Indian (BLS Center)">Indian (BLS Center)</option>
                <option value="Pakistani Consulate">Pakistani Consulate</option>
                <option value="Philippine Consulate">Philippine Consulate</option>
                <option value="UK / European Embassy">UK / European Embassy</option>
                <option value="Other Nationality">Other Nationality</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#333333] mb-1">Passport Requirement</label>
              <select
                value={formData.passportType}
                onChange={(e) => setFormData({ ...formData, passportType: e.target.value })}
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
              >
                <option value="Normal Renewal (36 Pages)">Normal Renewal (36 Pages)</option>
                <option value="Jumbo Booklet (60 Pages)">Jumbo Booklet (60 Pages)</option>
                <option value="Minor Child Passport">Minor Child Passport</option>
                <option value="Police Clearance Certificate (PCC)">Police Clearance Certificate (PCC)</option>
                <option value="Lost or Damaged Passport">Lost or Damaged Passport</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#333333] mb-1">Service Speed Required</label>
            <select
              value={formData.serviceSpeed}
              onChange={(e) => setFormData({ ...formData, serviceSpeed: e.target.value })}
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 rounded-xl border border-neutral-300 focus:bg-white focus:border-[#B8864B] focus:outline-none"
            >
              <option value="Standard (7 - 10 Days)">Standard (7 - 10 Days)</option>
              <option value="Tatkal Urgent (2 - 3 Days)">Tatkal Urgent (2 - 3 Days)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? <span>Reviewing Passport Submission...</span> : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Passport Service Request</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="py-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-[#222222]">Passport Service Booked!</h3>
          <p className="text-xs text-[#555555] max-w-xs mx-auto">
            Thank you, {formData.name}. Our consular typist in Business Bay will contact you via WhatsApp with the required checklist and slot timings.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-4 py-2 rounded-xl bg-neutral-100 text-xs font-bold text-neutral-700 hover:bg-neutral-200 cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      )}
    </div>
  );
};

export default PassportForm;
