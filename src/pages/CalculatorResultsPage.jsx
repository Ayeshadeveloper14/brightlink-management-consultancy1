import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';

/**
 * Placeholder pricing configuration structure.
 * Kept configurable for upcoming pricing rules in Task 3.
 */
export const INITIAL_PRICING_CONFIG = {
  primaryFees: {
    sponsorFile: 400.0,
  },
  spouseFees: {
    entryPermit: null, // Placeholder to be configured in Task 3
    changeStatus: null,
    medicalFitness: null,
    emiratesId: null,
    visaStamping: null,
    spouseTotal: null,
  },
  grandTotal: null,
};

export const CalculatorResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getLocalizedPath } = useLanguage();

  // Retrieve user selected values from route state or sessionStorage
  const selectedValues = location.state || (() => {
    try {
      const saved = sessionStorage.getItem('calculator_selected_values');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  })() || {
    service: 'Family New Residency Visa',
    emirate: 'Dubai',
    childrenCount: '0',
    sponsorVisaType: 'Employment Visa',
    familyLocation: 'Inside Country',
  };

  // Format amount or render clean placeholder
  const formatAmount = (val) => {
    if (val === null || val === undefined || isNaN(val)) {
      return '--';
    }
    return Number(val).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Navigate back to the calculator form while retaining selections
  const handleCalculateAgain = () => {
    navigate(getLocalizedPath('/calculator'), {
      state: {
        retainValues: true,
        ...selectedValues,
      },
    });
  };

  // Destination for existing documents & procedure page
  const handleDocumentsProcedure = () => {
    navigate(getLocalizedPath('/family-visa'));
  };

  return (
    <div className="bg-[#FCFAF8] min-h-[85vh] py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Container is ~2x wider than calculator form (max-w-4xl / max-w-5xl vs max-w-2xl) */}
      <div className="max-w-4xl mx-auto bg-white border border-[#E8DFD5] rounded-2xl shadow-sm p-6 sm:p-10 md:p-12">
        
        {/* =========================================================================
            Section 1: Primary Application Fees
            ========================================================================= */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
            Primary Application Fees
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-300 text-xs sm:text-sm">
              <colgroup>
                <col style={{ width: '75%' }} />
                <col style={{ width: '25%' }} />
              </colgroup>
              <thead>
                <tr className="border-b border-neutral-300 bg-neutral-50/70">
                  <th className="py-2.5 px-4 text-left font-bold text-[#222222] border-r border-neutral-300">
                    Service
                  </th>
                  <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                    Amount (AED)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-300">
                  <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                    Sponsor File
                  </td>
                  <td className="py-2.5 px-4 text-neutral-800">
                    {formatAmount(INITIAL_PRICING_CONFIG.primaryFees.sponsorFile)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            Section 2: Spouse Fees (Structural placeholders for upcoming Task 3)
            ========================================================================= */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
            Spouse Fees
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-neutral-300 text-xs sm:text-sm">
              <colgroup>
                <col style={{ width: '75%' }} />
                <col style={{ width: '25%' }} />
              </colgroup>
              <thead>
                <tr className="border-b border-neutral-300 bg-neutral-50/70">
                  <th className="py-2.5 px-4 text-left font-bold text-[#222222] border-r border-neutral-300">
                    Service
                  </th>
                  <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                    Amount (AED)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-300">
                  <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                    Entry Permit
                  </td>
                  <td className="py-2.5 px-4 text-neutral-800">
                    {formatAmount(INITIAL_PRICING_CONFIG.spouseFees.entryPermit)}
                  </td>
                </tr>
                <tr className="border-b border-neutral-300">
                  <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                    Change Status
                  </td>
                  <td className="py-2.5 px-4 text-neutral-800">
                    {formatAmount(INITIAL_PRICING_CONFIG.spouseFees.changeStatus)}
                  </td>
                </tr>
                <tr className="border-b border-neutral-300">
                  <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                    Medical Fitness (EHS)
                  </td>
                  <td className="py-2.5 px-4 text-neutral-800">
                    {formatAmount(INITIAL_PRICING_CONFIG.spouseFees.medicalFitness)}
                  </td>
                </tr>
                <tr className="border-b border-neutral-300">
                  <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                    Emirates ID
                  </td>
                  <td className="py-2.5 px-4 text-neutral-800">
                    {formatAmount(INITIAL_PRICING_CONFIG.spouseFees.emiratesId)}
                  </td>
                </tr>
                <tr className="border-b border-neutral-300">
                  <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                    Visa Stamping
                  </td>
                  <td className="py-2.5 px-4 text-neutral-800">
                    {formatAmount(INITIAL_PRICING_CONFIG.spouseFees.visaStamping)}
                  </td>
                </tr>
                {/* Final summary row */}
                <tr className="border-b border-neutral-300 bg-neutral-50/50">
                  <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                    Spouse Total <span className="font-normal text-xs text-neutral-600">(Including Primary application fees)</span>
                  </td>
                  <td className="py-2.5 px-4 font-bold text-[#222222]">
                    {INITIAL_PRICING_CONFIG.spouseFees.spouseTotal !== null
                      ? `${formatAmount(INITIAL_PRICING_CONFIG.spouseFees.spouseTotal)} AED`
                      : '--'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* =========================================================================
            Section 3: Total Bar (Prominent bar styled in Brightlink brand colors)
            ========================================================================= */}
        <div className="mb-8">
          <div className="w-full py-3 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-[#B8864B] via-[#A8763E] to-[#8C6230] text-white flex items-center justify-between shadow-sm">
            <span className="font-bold text-base sm:text-lg tracking-wide">
              Total:
            </span>
            <span className="font-extrabold text-lg sm:text-xl tracking-wide">
              {INITIAL_PRICING_CONFIG.grandTotal !== null
                ? `${formatAmount(INITIAL_PRICING_CONFIG.grandTotal)} AED`
                : '-- AED'}
            </span>
          </div>
        </div>

        {/* =========================================================================
            Section 4: Note Section
            ========================================================================= */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-bold text-[#8C6230] mb-3">
            Note:
          </h3>
          <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
            <p>
              * VAT &amp; our Service Charges are already included.
            </p>
            <p>
              * There will be no other hidden charges.
            </p>
            <p>
              * There will be additional charges from AED 50 to AED 150 that you need to pay at EHS Medical Fitness Centers. The charges depend on the center you visit.
            </p>
          </div>
        </div>

        {/* =========================================================================
            Section 5: Action Buttons (Three full-width buttons in exact order)
            ========================================================================= */}
        <div className="space-y-3 pt-2">
          {/* Button 1: Calculate Again */}
          <button
            type="button"
            onClick={handleCalculateAgain}
            className="w-full py-3.5 px-6 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-sm sm:text-base text-center shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer"
          >
            Calculate Again
          </button>

          {/* Button 2: Click to Know the Documents & Procedure */}
          <button
            type="button"
            onClick={handleDocumentsProcedure}
            className="w-full py-3.5 px-6 rounded-xl bg-[#8C6230] hover:bg-[#785327] text-white font-bold text-sm sm:text-base text-center shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer"
          >
            Click to Know the Documents &amp; Procedure
          </button>

          {/* Button 3: Call Us */}
          <a
            href="tel:+971566556645"
            className="w-full block py-3.5 px-6 rounded-xl bg-[#222222] hover:bg-[#333333] text-white font-bold text-sm sm:text-base text-center shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer"
          >
            Call Us
          </a>
        </div>

      </div>
    </div>
  );
};

export default CalculatorResultsPage;
