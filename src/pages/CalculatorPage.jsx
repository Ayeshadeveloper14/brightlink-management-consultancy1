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

  // Golden Visa specific state
  const [goldenVisaQualification, setGoldenVisaQualification] = useState(previousState.goldenVisaQualification || '');
  const [medicalType, setMedicalType] = useState(previousState.medicalType || '');
  const [addingFamily, setAddingFamily] = useState(previousState.addingFamily || '');
  const [adultsCount, setAdultsCount] = useState(previousState.adultsCount !== undefined ? String(previousState.adultsCount) : '');

  // Property Visa specific state
  const [propertyVisaType, setPropertyVisaType] = useState(previousState.propertyVisaType || '');

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
      if (location.state.goldenVisaQualification) setGoldenVisaQualification(location.state.goldenVisaQualification);
      if (location.state.medicalType) setMedicalType(location.state.medicalType);
      if (location.state.addingFamily) setAddingFamily(location.state.addingFamily);
      if (location.state.adultsCount !== undefined) setAdultsCount(String(location.state.adultsCount));
      if (location.state.propertyVisaType) setPropertyVisaType(location.state.propertyVisaType);
    }
  }, [location.state]);

  // Field 1 options
  const serviceOptions = [
    'Family New Residency Visa',
    'Family Residency Visa Renewal',
    'New Born in U.A.E',
    'Family Visa Cancellation',
    'Golden Visa',
    'Property Visa',
    'PRO Visa'
  ];

  // Property Visa options
  const propertyVisaTypeOptions = [
    '10-Year Golden Visa',
    '5-Year Retirement Visa',
    '2-Year Investor Visa'
  ];

  // Golden Visa options
  const goldenVisaQualOptions = [
    'Property Owner',
    'Company Owner',
    'Manager / Executive',
    'Fixed Deposit',
    'Family of a Golden Visa'
  ];

  const medicalTestOptions = [
    'Normal medical',
    'VIP medical'
  ];

  const addingFamilyOptions = [
    'No, just me',
    'Yes, adding family'
  ];

  const adultsOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

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
  const locationOptions = service === 'Family Visa Cancellation'
    ? ['Inside UAE', 'Outside UAE']
    : ['Outside Country', 'Inside Country'];

  // Button 1: Calculate Fees
  const handleCalculateFees = (e) => {
    e.preventDefault();

    // Determine selected service conditions
    const isPropertyVisa = service === 'Property Visa';
    const isGoldenVisa = service === 'Golden Visa';
    const isNewBorn = service === 'New Born in U.A.E';
    const isRenewal = service === 'Family Residency Visa Renewal';
    const isCancellation = service === 'Family Visa Cancellation';

    // Validate that required dropdowns have a selected value
    const missing = [];
    if (!service) missing.push('Select The Service');

    if (isPropertyVisa) {
      if (!propertyVisaType) missing.push('Which property visa?');
      if (!medicalType) missing.push('Choose your medical test');
      if (!addingFamily) missing.push('Adding family members too?');
      if (addingFamily === 'Yes, adding family') {
        if (adultsCount === '') missing.push('Adults');
        if (childrenCount === '') missing.push('Children');
      }
    } else if (isGoldenVisa) {
      if (!goldenVisaQualification) missing.push('How do you qualify for the Golden Visa?');
      if (!medicalType) missing.push('Choose your medical test');
      if (goldenVisaQualification !== 'Family of a Golden Visa') {
        if (!addingFamily) missing.push('Adding family members too?');
      }
      const showFamilyCounts =
        goldenVisaQualification === 'Family of a Golden Visa' ||
        addingFamily === 'Yes, adding family';
      if (showFamilyCounts) {
        if (adultsCount === '') missing.push('Adults');
        if (childrenCount === '') missing.push('Children');
      }
    } else {
      if (!emirate) missing.push('Select Which Emirates Sponsor Visa Is');
      if (!isNewBorn && childrenCount === '') missing.push('Number of Children');
      if (!isNewBorn && !isRenewal && !isCancellation) {
        if (!sponsorVisaType) missing.push('Sponsor Visa Types');
      }
      if (!isNewBorn && !isRenewal) {
        if (!familyLocation) missing.push('Is Family Outside/Inside UAE');
      }
    }

    if (missing.length > 0) {
      setValidationError(`Please select all required fields to calculate fees: ${missing.join(', ')}.`);
      return;
    }

    setValidationError('');

    // Package the user's selected calculator values
    const calculatorPayload = isPropertyVisa
      ? {
          service,
          propertyVisaType,
          medicalType,
          addingFamily,
          adultsCount: addingFamily === 'Yes, adding family' ? adultsCount : '0',
          childrenCount: addingFamily === 'Yes, adding family' ? childrenCount : '0'
        }
      : isGoldenVisa
      ? {
          service,
          goldenVisaQualification,
          medicalType,
          addingFamily: goldenVisaQualification === 'Family of a Golden Visa' ? 'Yes, adding family' : addingFamily,
          adultsCount: (goldenVisaQualification === 'Family of a Golden Visa' || addingFamily === 'Yes, adding family') ? adultsCount : '0',
          childrenCount: (goldenVisaQualification === 'Family of a Golden Visa' || addingFamily === 'Yes, adding family') ? childrenCount : '0'
        }
      : {
          service,
          emirate,
          childrenCount: isNewBorn ? '0' : childrenCount,
          sponsorVisaType: (isNewBorn || isRenewal || isCancellation) ? '' : sponsorVisaType,
          familyLocation: (isNewBorn || isRenewal) ? '' : familyLocation
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
    setGoldenVisaQualification('');
    setMedicalType('');
    setAddingFamily('');
    setAdultsCount('');
    setPropertyVisaType('');
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
                  const val = e.target.value;
                  setService(val);
                  if (val === 'Property Visa') {
                    setEmirate('');
                    setSponsorVisaType('');
                    setFamilyLocation('');
                    setChildrenCount('');
                    setAdultsCount('');
                    setGoldenVisaQualification('');
                  } else if (val === 'Golden Visa') {
                    setEmirate('');
                    setSponsorVisaType('');
                    setFamilyLocation('');
                    setChildrenCount('');
                    setPropertyVisaType('');
                  } else if (val === 'New Born in U.A.E') {
                    setChildrenCount('');
                    setSponsorVisaType('');
                    setFamilyLocation('');
                    setGoldenVisaQualification('');
                    setMedicalType('');
                    setAddingFamily('');
                    setAdultsCount('');
                    setPropertyVisaType('');
                  } else if (val === 'Family Residency Visa Renewal') {
                    setSponsorVisaType('');
                    setFamilyLocation('');
                    setGoldenVisaQualification('');
                    setMedicalType('');
                    setAddingFamily('');
                    setAdultsCount('');
                    setPropertyVisaType('');
                  } else if (val === 'Family Visa Cancellation') {
                    setSponsorVisaType('');
                    setFamilyLocation('');
                    setGoldenVisaQualification('');
                    setMedicalType('');
                    setAddingFamily('');
                    setAdultsCount('');
                    setPropertyVisaType('');
                  } else {
                    setSponsorVisaType('');
                    setFamilyLocation('');
                    setGoldenVisaQualification('');
                    setMedicalType('');
                    setAddingFamily('');
                    setAdultsCount('');
                    setPropertyVisaType('');
                  }
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

            {/* ========================================================= */}
            {/* Property Visa Dynamic Inputs */}
            {/* ========================================================= */}
            {service === 'Property Visa' ? (
              <>
                {/* Property Visa Input 2: Which property visa? */}
                <div>
                  <label
                    htmlFor="select-property-visa-type"
                    className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                  >
                    {tItem('Which property visa?')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="select-property-visa-type"
                    value={propertyVisaType}
                    onChange={(e) => {
                      setPropertyVisaType(e.target.value);
                      if (validationError) setValidationError('');
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">{tItem('-- Select Property Visa --')}</option>
                    {propertyVisaTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {tItem(opt)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Visa Input 3: Choose your medical test */}
                <div>
                  <label
                    htmlFor="select-property-medical"
                    className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                  >
                    {tItem('Choose your medical test')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="select-property-medical"
                    value={medicalType}
                    onChange={(e) => {
                      setMedicalType(e.target.value);
                      if (validationError) setValidationError('');
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">{tItem('-- Select Medical Test --')}</option>
                    {medicalTestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {tItem(opt)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Visa Input 4: Adding family members too? */}
                <div>
                  <label
                    htmlFor="select-property-adding-family"
                    className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                  >
                    {tItem('Adding family members too?')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="select-property-adding-family"
                    value={addingFamily}
                    onChange={(e) => {
                      const val = e.target.value;
                      setAddingFamily(val);
                      if (val === 'No, just me') {
                        setAdultsCount('0');
                        setChildrenCount('0');
                      }
                      if (validationError) setValidationError('');
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">{tItem('-- Select Option --')}</option>
                    {addingFamilyOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {tItem(opt)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dependent Inputs: Adults & Children if adding family */}
                {addingFamily === 'Yes, adding family' && (
                  <>
                    {/* Adults dropdown */}
                    <div>
                      <label
                        htmlFor="select-property-adults"
                        className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                      >
                        {tItem('Adults')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="select-property-adults"
                        value={adultsCount}
                        onChange={(e) => {
                          setAdultsCount(e.target.value);
                          if (validationError) setValidationError('');
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                      >
                        <option value="">{tItem('-- Select Adults --')}</option>
                        {adultsOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Children dropdown */}
                    <div>
                      <label
                        htmlFor="select-property-children"
                        className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                      >
                        {tItem('Children')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="select-property-children"
                        value={childrenCount}
                        onChange={(e) => {
                          setChildrenCount(e.target.value);
                          if (validationError) setValidationError('');
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                      >
                        <option value="">{tItem('-- Select Children --')}</option>
                        {childrenOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </>
            ) : service === 'Golden Visa' ? (
              <>
                {/* Golden Visa Input 2: How do you qualify for the Golden Visa? */}
                <div>
                  <label
                    htmlFor="select-qualification"
                    className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                  >
                    {tItem('How do you qualify for the Golden Visa?')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="select-qualification"
                    value={goldenVisaQualification}
                    onChange={(e) => {
                      const val = e.target.value;
                      setGoldenVisaQualification(val);
                      if (val === 'Family of a Golden Visa') {
                        setAddingFamily('Yes, adding family');
                      }
                      if (validationError) setValidationError('');
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">{tItem('-- Select Qualification --')}</option>
                    {goldenVisaQualOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {tItem(opt)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Golden Visa Input 3: Choose your medical test */}
                <div>
                  <label
                    htmlFor="select-medical"
                    className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                  >
                    {tItem('Choose your medical test')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="select-medical"
                    value={medicalType}
                    onChange={(e) => {
                      setMedicalType(e.target.value);
                      if (validationError) setValidationError('');
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">{tItem('-- Select Medical Test --')}</option>
                    {medicalTestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {tItem(opt)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Golden Visa Input 4: Adding family members too? (Hidden for Family of a Golden Visa) */}
                {goldenVisaQualification !== 'Family of a Golden Visa' && (
                  <div>
                    <label
                      htmlFor="select-adding-family"
                      className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                    >
                      {tItem('Adding family members too?')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="select-adding-family"
                      value={addingFamily}
                      onChange={(e) => {
                        const val = e.target.value;
                        setAddingFamily(val);
                        if (val === 'No, just me') {
                          setAdultsCount('0');
                          setChildrenCount('0');
                        }
                        if (validationError) setValidationError('');
                      }}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="">{tItem('-- Select Option --')}</option>
                      {addingFamilyOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {tItem(opt)}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Dependent Inputs: Adults & Children */}
                {(goldenVisaQualification === 'Family of a Golden Visa' || addingFamily === 'Yes, adding family') && (
                  <>
                    {/* Adults dropdown */}
                    <div>
                      <label
                        htmlFor="select-adults"
                        className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                      >
                        {tItem('Adults')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="select-adults"
                        value={adultsCount}
                        onChange={(e) => {
                          setAdultsCount(e.target.value);
                          if (validationError) setValidationError('');
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                      >
                        <option value="">{tItem('-- Select Adults --')}</option>
                        {adultsOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Children dropdown */}
                    <div>
                      <label
                        htmlFor="select-golden-children"
                        className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
                      >
                        {tItem('Children')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="select-golden-children"
                        value={childrenCount}
                        onChange={(e) => {
                          setChildrenCount(e.target.value);
                          if (validationError) setValidationError('');
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                      >
                        <option value="">{tItem('-- Select Children --')}</option>
                        {childrenOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
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

                {/* Field 3: Number of Children (omitted for New Born in U.A.E) */}
                {service !== 'New Born in U.A.E' && (
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
                )}

                {/* Field 4: Sponsor Visa Types (omitted for Renewal, New Born, and Cancellation) */}
                {service !== 'Family Residency Visa Renewal' && service !== 'New Born in U.A.E' && service !== 'Family Visa Cancellation' && (
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
                )}

                {/* Field 5: Is Family Outside/Inside UAE (omitted for Renewal and New Born) */}
                {service !== 'Family Residency Visa Renewal' && service !== 'New Born in U.A.E' && (
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
                )}
              </>
            )}

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
