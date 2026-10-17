import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ChevronDown, 
  RotateCcw, 
  Send, 
  CheckCircle2, 
  Clock, 
  Receipt, 
  ShieldCheck, 
  Info,
  HelpCircle
} from 'lucide-react';
import { 
  CALCULATOR_CATEGORIES, 
  CALCULATOR_SERVICES 
} from '../../data/calculatorServicesData.js';

export const CostCalculator = () => {
  // Service selection (defaults to family-visa matching the reference image)
  const [selectedServiceId, setSelectedServiceId] = useState('family-visa');
  const [emirate, setEmirate] = useState('Dubai');
  const [inputs, setInputs] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [aiTipActive, setAiTipActive] = useState(false);

  // Active service metadata
  const currentService = useMemo(() => {
    return CALCULATOR_SERVICES.find((s) => s.id === selectedServiceId) || CALCULATOR_SERVICES[0];
  }, [selectedServiceId]);

  // Synchronize defaults on service change
  React.useEffect(() => {
    if (currentService) {
      setInputs(currentService.defaultValues || {});
      setShowResult(false);
      setValidationError('');
    }
  }, [currentService]);

  // Handle dynamic field changes
  const handleFieldChange = (fieldId, value) => {
    setInputs((prev) => ({
      ...prev,
      [fieldId]: value
    }));
    if (validationError) setValidationError('');
  };

  // Group services by category for clean organized dropdown options
  const groupedServices = useMemo(() => {
    const groups = {};
    CALCULATOR_SERVICES.forEach((service) => {
      const cat = service.categoryLabel || 'General Services';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(service);
    });
    return groups;
  }, []);

  // Compute fee calculation result
  const calculationResult = useMemo(() => {
    if (!currentService || typeof currentService.calculate !== 'function') {
      return {
        total: 0,
        govtFees: 0,
        typingFees: 0,
        addOns: 0,
        items: [],
        processingDays: '2 - 4 Working Days',
        notes: ''
      };
    }
    try {
      return currentService.calculate(inputs);
    } catch {
      return {
        total: 0,
        govtFees: 0,
        typingFees: 0,
        addOns: 0,
        items: [],
        processingDays: '2 - 4 Working Days',
        notes: 'Official fees subject to GDRFA/ICP file verification.'
      };
    }
  }, [currentService, inputs]);

  // Validate and trigger calculation
  const handleCalculate = (e) => {
    if (e) e.preventDefault();

    // Check required fields
    if (currentService.fields && currentService.fields.length > 0) {
      for (const field of currentService.fields) {
        if (field.condition && !field.condition(inputs)) continue;
        const val = inputs[field.id];
        if (val === undefined || val === null || val === '') {
          setValidationError(`Please select ${field.label} before calculating.`);
          return;
        }
      }
    }

    setValidationError('');
    setShowResult(true);
  };

  // Refresh and reset calculator
  const handleRefresh = () => {
    setInputs(currentService?.defaultValues || {});
    setEmirate('Dubai');
    setShowResult(false);
    setValidationError('');
    setAiTipActive(false);
  };

  // Submit via WhatsApp with pre-filled, cleanly formatted quote message
  const handleWhatsAppSubmit = () => {
    const totalAmount = calculationResult.total?.toLocaleString();
    const govtAmount = calculationResult.govtFees?.toLocaleString();
    const typingAmount = calculationResult.typingFees?.toLocaleString();

    // Formatted details list
    const details = [];
    details.push(`• Service: ${currentService.name}`);
    details.push(`• Emirate / Authority: ${emirate}`);

    if (currentService.fields && currentService.fields.length > 0) {
      currentService.fields.forEach((field) => {
        if (field.condition && !field.condition(inputs)) return;
        const val = inputs[field.id];
        if (val !== undefined && val !== null) {
          if (field.type === 'select') {
            const opt = field.options?.find((o) => o.value === val);
            details.push(`• ${field.label}: ${opt ? opt.label : val}`);
          } else if (field.type === 'checkbox') {
            details.push(`• ${field.label}: ${val ? 'Yes (Included)' : 'No'}`);
          } else {
            details.push(`• ${field.label}: ${val}`);
          }
        }
      });
    }

    // Breakdown list
    const breakdown = calculationResult.items
      ?.map((item) => `  - ${item.label}: AED ${item.amount?.toLocaleString()}`)
      .join('\n');

    const message = `*Brightlink Typing & Consulting - Official Fee Calculation*\n` +
      `-----------------------------------------\n` +
      `*Selected Service:* ${currentService.name}\n` +
      `*Emirate:* ${emirate}\n\n` +
      `*Application Parameters:*\n` +
      details.join('\n') + `\n\n` +
      `*Calculated Fee Breakdown:*\n` +
      (breakdown || `  - Statutory Government Fees: AED ${govtAmount}\n  - Certified Typing & File Handling: AED ${typingAmount}`) + `\n\n` +
      `*TOTAL ESTIMATED FEES:* AED ${totalAmount}\n` +
      `*Turnaround Time:* ${calculationResult.processingDays}\n` +
      `-----------------------------------------\n` +
      `Hello Brightlink team, I have calculated my official fee estimate on your website. Please review my file requirements and guide me on the next steps. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/971566556645?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full flex justify-center py-6 px-4">
      <div className="w-full max-w-[420px] bg-white rounded-3xl border border-[#EFE9DF] shadow-2xl p-5 sm:p-6 transition-all duration-300 relative">
        
        {/* Top Announcement / AI Guidance Banner in Website Color Scheme */}
        <div className="rounded-2xl p-4 bg-gradient-to-br from-[#1E1913] via-[#382B1B] to-[#B8864B] text-white shadow-md relative overflow-hidden mb-6 text-center">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#C5985B]/25 rounded-full blur-xl pointer-events-none" />

          <p className="text-[12px] sm:text-[13px] leading-snug font-normal text-neutral-100 drop-shadow-xs">
            To add basic insurance or medical fees for children above 18 years, or custom PRO services, please use our Smart Assist for a guided experience!
          </p>

          <button
            type="button"
            onClick={() => setAiTipActive(!aiTipActive)}
            className="mt-3.5 inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-white text-[#8C6230] hover:text-[#6E4B1F] hover:bg-[#FAF7F2] font-extrabold text-[11px] tracking-wider uppercase transition-all shadow-sm cursor-pointer mx-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>{aiTipActive ? 'Smart Assist Active' : 'Activate Smart Assist'}</span>
          </button>

          {aiTipActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-white/15 text-[11px] text-amber-100 text-left space-y-1"
            >
              <p>✓ All UAE statutory rates updated to GDRFA Dubai & ICP 2026 portal regulations.</p>
              <p>✓ Dependents under 18 years are exempt from mandatory blood & X-ray medical testing.</p>
            </motion.div>
          )}
        </div>

        {/* Dynamic View: Initial Form vs Calculate Fees Result */}
        <AnimatePresence mode="wait">
          {!showResult ? (
            /* ============================================================ */
            /* VIEW 1: INITIAL CALCULATOR FORM (Matching Reference Image)   */
            /* ============================================================ */
            <motion.div
              key="calculator-form"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Centered Heading */}
              <div className="text-center mb-5">
                <h2 className="text-xl sm:text-2xl font-black text-[#1F1912] tracking-tight">
                  {currentService.name} Calculator
                </h2>
                <p className="text-[11px] text-neutral-500 mt-1">
                  {currentService.shortDesc}
                </p>
              </div>

              {/* Field 1: Service Selection Dropdown */}
              <div className="relative">
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#DCD5CB] hover:border-[#B8864B] focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#222222] font-medium pr-10 shadow-2xs transition-all cursor-pointer"
                >
                  {Object.entries(groupedServices).map(([category, services]) => (
                    <optgroup key={category} label={category}>
                      {services.map((svc) => (
                        <option key={svc.id} value={svc.id}>
                          {svc.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Field 2: Emirate / Jurisdiction Selection */}
              <div className="relative">
                <select
                  value={emirate}
                  onChange={(e) => setEmirate(e.target.value)}
                  className="w-full appearance-none bg-white border border-[#DCD5CB] hover:border-[#B8864B] focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#222222] font-medium pr-10 shadow-2xs transition-all cursor-pointer"
                >
                  <option value="Dubai">Dubai (GDRFA / DLD / MOHRE)</option>
                  <option value="Abu Dhabi">Abu Dhabi (ICP / TAMM)</option>
                  <option value="Sharjah">Sharjah (SEDD / ICP)</option>
                  <option value="Ajman">Ajman (Freezone / Mainland)</option>
                  <option value="Ras Al Khaimah">Ras Al Khaimah (RAKEZ / ICP)</option>
                  <option value="Fujairah">Fujairah</option>
                  <option value="Umm Al Quwain">Umm Al Quwain</option>
                </select>
                <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Field 3+: Dynamic Fields Configured for the Selected Service */}
              {currentService.fields?.map((field) => {
                if (field.condition && !field.condition(inputs)) return null;
                const value = inputs[field.id];

                // Dropdown Select Field
                if (field.type === 'select') {
                  return (
                    <div key={field.id} className="relative">
                      <select
                        value={value ?? ''}
                        onChange={(e) => handleFieldChange(field.id, e.target.value)}
                        className="w-full appearance-none bg-white border border-[#DCD5CB] hover:border-[#B8864B] focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#222222] font-medium pr-10 shadow-2xs transition-all cursor-pointer"
                      >
                        <option value="" disabled>
                          Select {field.label}
                        </option>
                        {field.options?.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  );
                }

                // Number Dropdown / Stepper Field
                if (field.type === 'number') {
                  const min = field.min ?? 1;
                  const max = field.max ?? 10;
                  const options = [];
                  for (let i = min; i <= max; i += (field.step || 1)) {
                    options.push(i);
                  }

                  return (
                    <div key={field.id} className="relative">
                      <select
                        value={value ?? min}
                        onChange={(e) => handleFieldChange(field.id, parseInt(e.target.value, 10))}
                        className="w-full appearance-none bg-white border border-[#DCD5CB] hover:border-[#B8864B] focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#222222] font-medium pr-10 shadow-2xs transition-all cursor-pointer"
                      >
                        {options.map((num) => (
                          <option key={num} value={num}>
                            {num} {field.label} {num > 1 ? '(Multiple)' : ''}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  );
                }

                // Checkbox / Addon Option Field
                if (field.type === 'checkbox') {
                  const isChecked = Boolean(value);
                  return (
                    <label
                      key={field.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#B8864B] bg-[#FBF7F0]'
                          : 'border-[#DCD5CB] bg-white hover:border-[#B8864B]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleFieldChange(field.id, e.target.checked)}
                        className="w-4 h-4 rounded text-[#B8864B] focus:ring-[#B8864B] accent-[#B8864B] cursor-pointer"
                      />
                      <span className="text-xs font-semibold text-[#333333] flex-1">
                        {field.label}
                      </span>
                    </label>
                  );
                }

                return null;
              })}

              {/* Inline Validation Alert if required field is missing */}
              {validationError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-600 font-semibold">
                  <Info className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Helper Prompt Text Matching Reference Image */}
              <p className="text-xs font-bold text-[#8C6230] text-center my-3">
                Please Select All Fields For Accurate Results.
              </p>

              {/* Two Full-Width Buttons Styled in Website Brand Gradient */}
              <div className="space-y-2.5 pt-1">
                {/* 1. Calculate Fees Button */}
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:from-[#D4A76A] hover:to-[#A77945] shadow-lg shadow-[#B8864B]/30 hover:shadow-xl hover:shadow-[#B8864B]/40 transition-all duration-200 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Receipt className="w-4 h-4 text-white" />
                  <span>Calculate Fees</span>
                </button>

                {/* 2. Refresh Button */}
                <button
                  type="button"
                  onClick={handleRefresh}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#3A3025] to-[#221C15] hover:from-[#4D4032] hover:to-[#2F271E] shadow-md transition-all duration-200 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4 text-neutral-300" />
                  <span>Refresh</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* ============================================================ */
            /* VIEW 2: CALCULATED FEES RESULT SCREEN (In Same Card!)        */
            /* ============================================================ */
            <motion.div
              key="calculator-result"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Result Header */}
              <div className="text-center pb-2 border-b border-[#EFE9DF]">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F5F1EB] border border-[#B8864B]/30 text-[11px] font-bold text-[#8C6230] uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Official Fee Assessment</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#1F1912] leading-tight">
                  {currentService.name}
                </h3>
                <span className="text-xs text-neutral-500 font-medium">
                  {emirate} • {calculationResult.processingDays} Turnaround
                </span>
              </div>

              {/* Selected Options Summary Tags */}
              <div className="flex flex-wrap gap-1.5 justify-center py-1">
                {inputs.relativeType && (
                  <span className="text-[11px] font-semibold bg-[#FAF7F2] text-[#8C6230] border border-[#E8DFD5] px-2.5 py-0.5 rounded-md capitalize">
                    {inputs.relativeType}
                  </span>
                )}
                {inputs.location && (
                  <span className="text-[11px] font-semibold bg-[#FAF7F2] text-[#8C6230] border border-[#E8DFD5] px-2.5 py-0.5 rounded-md">
                    {inputs.location === 'inside' ? 'Inside UAE Status' : 'Outside UAE Entry'}
                  </span>
                )}
                {inputs.dependents && (
                  <span className="text-[11px] font-semibold bg-[#FAF7F2] text-[#8C6230] border border-[#E8DFD5] px-2.5 py-0.5 rounded-md">
                    {inputs.dependents} Applicant(s)
                  </span>
                )}
                {inputs.includeVipMedical && (
                  <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md">
                    VIP Medical
                  </span>
                )}
                {inputs.includeExpressEid && (
                  <span className="text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-md">
                    Express EID
                  </span>
                )}
              </div>

              {/* Itemized Breakdown Box */}
              <div className="bg-[#FCFAF8] rounded-2xl border border-[#E8DFD5] p-3.5 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 block border-b border-[#EFE9DF] pb-1.5">
                  Fee Breakdown
                </span>

                {calculationResult.items?.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs text-neutral-700">
                    <span className="max-w-[230px] truncate" title={item.label}>
                      {item.label}
                    </span>
                    <span className="font-bold text-[#1F1912] shrink-0">
                      AED {item.amount?.toLocaleString()}
                    </span>
                  </div>
                ))}

                <div className="pt-2 border-t border-[#EFE9DF] flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Government Statutory Fees:</span>
                  <span className="font-semibold text-neutral-800">
                    AED {calculationResult.govtFees?.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">Certified Typing & File Audit:</span>
                  <span className="font-semibold text-[#8C6230]">
                    AED {calculationResult.typingFees?.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Total Estimated Fees Box */}
              <div className="rounded-2xl p-4 bg-gradient-to-br from-[#FBF7F0] to-[#F5EFE6] border border-[#B8864B]/40 text-center space-y-1">
                <span className="text-[11px] font-extrabold text-[#8C6230] uppercase tracking-wider block">
                  Total Estimated Amount
                </span>
                <div className="text-3xl font-black text-[#1F1912] tracking-tight">
                  AED {calculationResult.total?.toLocaleString()}
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Est. Turnaround: {calculationResult.processingDays}</span>
                </div>
              </div>

              {/* Official Notes / Prerequisite Reminder */}
              {calculationResult.notes && (
                <p className="text-[10px] text-neutral-500 text-center leading-normal px-1">
                  * {calculationResult.notes}
                </p>
              )}

              {/* Two Buttons Below the Result: Submit (WhatsApp) and Refresh */}
              <div className="space-y-2.5 pt-2">
                {/* 1. Submit Button -> Opens WhatsApp directly with formatted quote */}
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#25D366] to-[#1EA952] hover:bg-[#1EBE5D] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-200 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Submit via WhatsApp</span>
                </button>

                {/* 2. Refresh Button -> Resets back to initial form in same card */}
                <button
                  type="button"
                  onClick={handleRefresh}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#3A3025] to-[#221C15] hover:from-[#4D4032] hover:to-[#2F271E] shadow-md transition-all duration-200 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4 text-neutral-300" />
                  <span>Refresh</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Security / Trust badge */}
        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-center gap-1.5 text-[11px] text-neutral-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Government accredited typing & consulting centre, Dubai</span>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
