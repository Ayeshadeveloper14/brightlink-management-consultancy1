import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle2 } from 'lucide-react';

export const StatusCheckForm = ({ onOpenConsultation }) => {
  const [searchMethod, setSearchMethod] = useState('passport');
  const [passportNum, setPassportNum] = useState('');
  const [nationality, setNationality] = useState('India');
  const [dob, setDob] = useState('');
  const [appNumber, setAppNumber] = useState('');
  const [statusResult, setStatusResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleSimulatedCheck = (e) => {
    e.preventDefault();
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      setStatusResult({
        status: 'Active & Valid',
        visaType: 'Residence / Employment Visa (Dubai)',
        validUntil: '14-Nov-2027',
        daysRemaining: 406,
        fineStatus: 'No Fines / Clear Record',
        gracePeriod: '30 Days after expiry',
        sponsorType: 'Company Sponsored / Mainland LLC'
      });
    }, 900);
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#FCFAF8] p-6 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-md">
      <div className="text-center space-y-2 mb-8">
        <span className="px-3 py-0.5 rounded-full bg-[#F5F1EB] text-[#8C6230] text-[11px] font-bold uppercase tracking-wider">
          Immigration Status Check
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
          Check Your UAE Visa Validity
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          Verify your visa expiry date, entry permit validity, and legal status.
        </p>
      </div>

      {/* Toggle Search Method */}
      <div className="flex justify-center mb-6">
        <div className="bg-white p-1 rounded-xl border border-neutral-200 flex text-xs font-bold">
          <button
            type="button"
            onClick={() => setSearchMethod('passport')}
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
            onClick={() => setSearchMethod('application')}
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

      <form onSubmit={handleSimulatedCheck} className="space-y-4">
        {searchMethod === 'passport' ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Passport Number</label>
                <input
                  type="text"
                  required
                  value={passportNum}
                  onChange={(e) => setPassportNum(e.target.value)}
                  placeholder="e.g. M12345678"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#333333] mb-1">Current Nationality</label>
                <input
                  type="text"
                  required
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  placeholder="e.g. India, Pakistan, UK"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#333333] mb-1">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
              />
            </div>
          </>
        ) : (
          <div>
            <label className="block text-[11px] font-bold text-[#333333] mb-1">Application / Unified / File Number</label>
            <input
              type="text"
              required
              value={appNumber}
              onChange={(e) => setAppNumber(e.target.value)}
              placeholder="e.g. 201/2026/1234567"
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs bg-white focus:outline-none focus:border-[#B8864B]"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isChecking}
          className="w-full py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span>{isChecking ? 'Verifying with UAE Immigration...' : 'Check Status Now'}</span>
        </button>
      </form>

      {/* Status Result Display */}
      {statusResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-5 rounded-2xl bg-white border border-emerald-300 shadow-sm"
        >
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Verified Status: {statusResult.status}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-neutral-50">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Visa Category</span>
              <span className="font-semibold text-[#222222]">{statusResult.visaType}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-neutral-50">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Expiry Date</span>
              <span className="font-semibold text-emerald-700">{statusResult.validUntil} ({statusResult.daysRemaining} days remaining)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-neutral-50">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Fine Summary</span>
              <span className="font-semibold text-emerald-600">{statusResult.fineStatus}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-neutral-50">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold">Grace Period Rule</span>
              <span className="font-semibold text-[#444444]">{statusResult.gracePeriod}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-wrap gap-2 justify-end">
            <button
              onClick={() => onOpenConsultation('Visa Renewal Assistance')}
              className="py-2 px-3 rounded-lg bg-[#B8864B] hover:bg-[#9F7038] text-white text-[11px] font-bold cursor-pointer"
            >
              Renew My Visa Early
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StatusCheckForm;
