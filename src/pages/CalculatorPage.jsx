import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RotateCcw, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export const CalculatorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getLocalizedPath, tItem } = useLanguage();

  // Retrieve initial values if returning via "Calculate Again"
  const previousState = location.state || {};

  // Form fields state (5 required dropdowns)
  const [service, setService] = useState(previousState.service || '');
  const [emirate, setEmirate] = useState(previousState.emirate || '');
  const [childrenCount, setChildrenCount] = useState(previousState.childrenCount !== undefined ? String(previousState.childrenCount) : '');
  const [sponsorVisaType, setSponsorVisaType] = useState(previousState.sponsorVisaType || '');
  const [familyLocation, setFamilyLocation] = useState(previousState.familyLocation || '');

  // Validation state
  const [validationError, setValidationError] = useState('');

  // Synchronize state if route state updates
  useEffect(() => {
    if (location.state?.retainValues) {
      if (location.state.service) setService(location.state.service);
      if (location.state.emirate) setEmirate(location.state.emirate);
      if (location.state.childrenCount !== undefined) setChildrenCount(String(location.state.childrenCount));
      if (location.state.sponsorVisaType) setSponsorVisaType(location.state.sponsorVisaType);
      if (location.state.familyLocation) setFamilyLocation(location.state.familyLocation);
    }
  }, [location.state]);

  // Field 1 options
  const serviceOptions = [
    'Family New Residency Visa',
    'Family Residency Visa Renewal',
    'New Born in U.A.E',
    'Family Visa Cancellation'
  ];

  // Field 2 options
  const emirateOptions = [
    'Sharjah',
    'Dubai',
    'Ajman',
    'Abu Dhabi',
    'Ras Al Khaimah',
    'Umm Al Quwain',
    'Fujairah'
  ];

  // Field 3 options
  const childrenOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  // Field 4 options
  const sponsorOptions = ['Employment Visa', 'Investor Visa'];

  // Field 5 options
  const locationOptions = ['Outside Country', 'Inside Country'];

  // Button 1: Calculate Fees
  const handleCalculateFees = (e) => {
    e.preventDefault();

    // Validate that all five required dropdowns have a selected value
    const missing = [];
    if (!service) missing.push('Select The Service');
    if (!emirate) missing.push('Select Which Emirates Sponsor Visa Is');
    if (childrenCount === '') missing.push('Number of Children');
    if (!sponsorVisaType) missing.push('Sponsor Visa Types');
    if (!familyLocation) missing.push('Is Family Outside/Inside UAE');

    if (missing.length > 0) {
      setValidationError(`Please select all required fields to calculate fees: ${missing.join(', ')}.`);
      return;
    }

    setValidationError('');

    // Package the user's selected calculator values
    const calculatorPayload = {
      service,
      emirate,
      childrenCount,
      sponsorVisaType,
      familyLocation
    };

    // Store in sessionStorage to preserve on direct refresh
    try {
      sessionStorage.setItem('calculator_selected_values', JSON.stringify(calculatorPayload));
    } catch {
      // Ignore private browsing storage restrictions
    }

    // Navigate to the separate fee results page
    navigate(getLocalizedPath('/calculator/results'), {
      state: calculatorPayload
    });
  };

  // Button 2: Refresh
  const handleRefresh = () => {
    setService('');
    setEmirate('');
    setChildrenCount('');
    setSponsorVisaType('');
    setFamilyLocation('');
    setValidationError('');
    try {
      sessionStorage.removeItem('calculator_selected_values');
    } catch {
      // Ignore
    }
  };

  return (
    <div className="bg-[#FCFAF8] min-h-[80vh] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* 1. Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight text-center">
          {tItem('Family Visa Fee Calculator')}
        </h1>

        {/* 2. Short description */}
        <p className="mt-3 text-sm sm:text-base text-neutral-600 text-center max-w-xl mx-auto">
          {tItem('Estimate your family visa service fees by selecting the relevant details below.')}
        </p>

        {/* 3. Calculator form with six selection fields (5 user-facing dropdowns + Field 6 logic ready) */}
        <div className="mt-8 bg-white border border-[#E8DFD5] rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
          <form onSubmit={handleCalculateFees} className="space-y-5">
            {/* Field 1: Select The Service */}
            <div>
              <label
                htmlFor="select-service"
                className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
              >
                {tItem('Select The Service')} <span className="text-red-500">*</span>
              </label>
              <select
                id="select-service"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  if (validationError) setValidationError('');
                }}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">{tItem('-- Select The Service --')}</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {tItem(opt)}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Select Which Emirates Sponsor Visa Is */}
            <div>
              <label
                htmlFor="select-emirate"
                className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
              >
                {tItem('Select Which Emirates Sponsor Visa Is')} <span className="text-red-500">*</span>
              </label>
              <select
                id="select-emirate"
                value={emirate}
                onChange={(e) => {
                  setEmirate(e.target.value);
                  if (validationError) setValidationError('');
                }}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">{tItem('-- Select Emirate --')}</option>
                {emirateOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {tItem(opt)}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: Number of Children */}
            <div>
              <label
                htmlFor="select-children"
                className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
              >
                {tItem('Number of Children')} <span className="text-red-500">*</span>
              </label>
              <select
                id="select-children"
                value={childrenCount}
                onChange={(e) => {
                  setChildrenCount(e.target.value);
                  if (validationError) setValidationError('');
                }}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">{tItem('-- Select Number of Children --')}</option>
                {childrenOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 4: Sponsor Visa Types */}
            <div>
              <label
                htmlFor="select-sponsor"
                className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
              >
                {tItem('Sponsor Visa Types')} <span className="text-red-500">*</span>
              </label>
              <select
                id="select-sponsor"
                value={sponsorVisaType}
                onChange={(e) => {
                  setSponsorVisaType(e.target.value);
                  if (validationError) setValidationError('');
                }}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">{tItem('-- Select Sponsor Visa Type --')}</option>
                {sponsorOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {tItem(opt)}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 5: Is Family Outside/Inside UAE */}
            <div>
              <label
                htmlFor="select-location"
                className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
              >
                {tItem('Is Family Outside/Inside UAE')} <span className="text-red-500">*</span>
              </label>
              <select
                id="select-location"
                value={familyLocation}
                onChange={(e) => {
                  setFamilyLocation(e.target.value);
                  if (validationError) setValidationError('');
                }}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">{tItem('-- Select Family Location --')}</option>
                {locationOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {tItem(opt)}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. One short informational message */}
            <div className="pt-2 text-center">
              <p className="text-xs sm:text-sm font-medium text-neutral-500">
                {tItem('Please select All fields For Accurate Results.')}
              </p>
            </div>

            {/* Validation Message */}
            {validationError && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                <span>{validationError}</span>
              </div>
            )}

            {/* 5. Two buttons: Calculate Fees and Refresh */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-sm sm:text-base shadow-sm hover:shadow transition-all active:scale-98 cursor-pointer text-center"
              >
                {tItem('Calculate Fees')}
              </button>
              <button
                type="button"
                onClick={handleRefresh}
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-sm sm:text-base border border-neutral-300 transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4 text-neutral-600" />
                <span>{tItem('Refresh')}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const Calculator = CalculatorPage;
export const VisaCalculatorPage = CalculatorPage;
export const VisaCalculator = CalculatorPage;
export default CalculatorPage;
