import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  CheckCircle2, 
  Send, 
  RotateCcw, 
  HelpCircle, 
  ExternalLink, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';

export const StatusCheckForm = ({ onOpenConsultation }) => {
  const [searchMethod, setSearchMethod] = useState('passport');
  const [passportNum, setPassportNum] = useState('');
  const [nationality, setNationality] = useState('India');
  const [dob, setDob] = useState('');
  const [appNumber, setAppNumber] = useState('');
  const [visaType, setVisaType] = useState('Residence / Employment Visa');

  // Validation & Submission State
  const [errors, setErrors] = useState({});
  const [submittedRequest, setSubmittedRequest] = useState(null);

  const validate = () => {
    const errs = {};
    if (searchMethod === 'passport') {
      if (!passportNum.trim()) {
        errs.passportNum = 'Please enter your passport number.';
      }
      if (!nationality.trim()) {
        errs.nationality = 'Please enter your nationality.';
      }
    } else {
      if (!appNumber.trim()) {
        errs.appNumber = 'Please enter your application or file number.';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      'Visa Check Assistance Request',
      ''
    ];

    if (searchMethod === 'passport') {
      lines.push('Search Method: By Passport Details');
      lines.push(`Visa Type: ${visaType}`);
      lines.push(`Passport Number: ${passportNum.trim().toUpperCase()}`);
      lines.push(`Nationality: ${nationality}`);
      if (dob) {
        lines.push(`Date of Birth: ${dob}`);
      }
    } else {
      lines.push('Search Method: By Application / File No.');
      lines.push(`Application Number: ${appNumber.trim()}`);
      if (nationality) {
        lines.push(`Nationality: ${nationality}`);
      }
    }

    lines.push('');
    lines.push('Request: Please assist me with checking my visa status.');

    return lines.join('\n');
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    if (!validate()) {
      return;
    }

    const message = generateWhatsAppMessage();
    const waUrl = `https://wa.me/971566556645?text=${encodeURIComponent(message)}`;

    setSubmittedRequest({
      searchMethod: searchMethod === 'passport' ? 'By Passport Details' : 'By Application / File No.',
      passportNum: passportNum.trim().toUpperCase(),
      appNumber: appNumber.trim(),
      nationality,
      dob,
      visaType,
      waUrl
    });

    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.error('Auto-open WhatsApp blocked by browser:', err);
    }
  };

  const handleReset = () => {
    setSubmittedRequest(null);
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#FCFAF8] p-6 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-md">
      <div className="text-center space-y-2 mb-8">
        <span className="px-3 py-0.5 rounded-full bg-[#F5F1EB] text-[#8C6230] text-[11px] font-bold uppercase tracking-wider">
          Immigration Status Check Assistance
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
          Check Your UAE Visa Validity
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Submit your details to request an official visa status verification directly from our registered typing team.
        </p>
      </div>

      {/* Toggle Search Method */}
      <div className="flex justify-center mb-6">
        <div className="bg-white p-1 rounded-xl border border-neutral-200 flex text-xs font-bold">
          <button
            type="button"
            onClick={() => { setSearchMethod('passport'); setErrors({}); }}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              searchMethod === 'passport'
                ? 'bg-[#B8864B] text-white shadow-xs'
                : 'text-[#666666] hover:text-[#222222]'
            }`}
          >
            By Passport Details
          </button>
          <button
            type="button"
            onClick={() => { setSearchMethod('application'); setErrors({}); }}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              searchMethod === 'application'
                ? 'bg-[#B8864B] text-white shadow-xs'
                : 'text-[#666666] hover:text-[#222222]'
            }`}
          >
            By Application / File No.
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {searchMethod === 'passport' ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">
                  Passport Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={passportNum}
                  onChange={(e) => {
                    setPassportNum(e.target.value);
                    if (errors.passportNum) setErrors(prev => ({ ...prev, passportNum: null }));
                  }}
                  placeholder="e.g. M12345678"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white uppercase focus:outline-none focus:ring-2 ${
                    errors.passportNum
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/20'
                      : 'border-neutral-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                  }`}
                />
                {errors.passportNum && (
                  <span className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.passportNum}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">
                  Current Nationality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={nationality}
                  onChange={(e) => {
                    setNationality(e.target.value);
                    if (errors.nationality) setErrors(prev => ({ ...prev, nationality: null }));
                  }}
                  placeholder="e.g. India, Pakistan, UK, Philippines"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white focus:outline-none focus:ring-2 ${
                    errors.nationality
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/20'
                      : 'border-neutral-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
                  }`}
                />
                {errors.nationality && (
                  <span className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.nationality}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Visa Type</label>
                <select
                  value={visaType}
                  onChange={(e) => setVisaType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20"
                >
                  <option value="Residence / Employment Visa">Residence / Employment Visa</option>
                  <option value="Tourist / Visit Visa">Tourist / Visit Visa</option>
                  <option value="Golden Visa (10-Year)">Golden Visa (10-Year)</option>
                  <option value="Family Visa">Family Visa</option>
                  <option value="Partner / Investor Visa">Partner / Investor Visa</option>
                </select>
              </div>
            </div>
          </>
        ) : (
          <div>
            <label className="block text-[11px] font-bold text-[#333333] mb-1">
              Application / Unified / File Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={appNumber}
              onChange={(e) => {
                setAppNumber(e.target.value);
                if (errors.appNumber) setErrors(prev => ({ ...prev, appNumber: null }));
              }}
              placeholder="e.g. 201/2024/1234567"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white focus:outline-none focus:ring-2 ${
                errors.appNumber
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-100 bg-red-50/20'
                  : 'border-neutral-300 focus:border-[#B8864B] focus:ring-[#B8864B]/20'
              }`}
            />
            {errors.appNumber && (
              <span className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                {errors.appNumber}
              </span>
            )}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span>Check Status Now</span>
        </button>
      </form>

      {/* Honest WhatsApp Confirmation Card */}
      <AnimatePresence>
        {submittedRequest && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 p-5 sm:p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-sm space-y-4"
          >
            <div className="flex items-center gap-2 text-[#0F172A] font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0" />
              <span>Visa Check Assistance Request Prepared</span>
            </div>

            <p className="text-xs text-[#555555] leading-relaxed">
              Your visa assistance inquiry has been generated. If WhatsApp did not open automatically, click the button below to message our typing team directly at <strong>+971 56 655 6645</strong>.
            </p>

            {/* Summary Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                <span className="text-neutral-400 block text-[10px] uppercase font-bold">Search Method</span>
                <span className="font-semibold text-[#222222]">{submittedRequest.searchMethod}</span>
              </div>

              {submittedRequest.passportNum && (
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                  <span className="text-neutral-400 block text-[10px] uppercase font-bold">Passport Number</span>
                  <span className="font-semibold text-[#222222] font-mono">{submittedRequest.passportNum}</span>
                </div>
              )}

              {submittedRequest.appNumber && (
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                  <span className="text-neutral-400 block text-[10px] uppercase font-bold">Application / File Number</span>
                  <span className="font-semibold text-[#222222] font-mono">{submittedRequest.appNumber}</span>
                </div>
              )}

              <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                <span className="text-neutral-400 block text-[10px] uppercase font-bold">Nationality</span>
                <span className="font-semibold text-[#222222]">{submittedRequest.nationality}</span>
              </div>

              {submittedRequest.dob && (
                <div className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-100">
                  <span className="text-neutral-400 block text-[10px] uppercase font-bold">Date of Birth</span>
                  <span className="font-semibold text-[#222222]">{submittedRequest.dob}</span>
                </div>
              )}
            </div>

            {/* Honest Notice */}
            <div className="p-3.5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-2.5 text-xs text-[#6D4518] leading-relaxed">
              <HelpCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
              <div>
                <strong>Honest Verification Process:</strong> Visa statuses are not verified automatically by this website. Our registered typing specialists will check your active file status on official GDRFA Dubai or ICP Smart Services portals upon receiving your WhatsApp request.
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-3">
              <a
                href={submittedRequest.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open in WhatsApp (+971 56 655 6645)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="py-2.5 px-4 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-700 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Edit Details</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StatusCheckForm;
