import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  Receipt,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Printer,
  Search,
  Sparkles,
  Info,
  Clock,
  Building,
  Building2,
  Users,
  Award,
  Baby,
  Briefcase,
  FileCheck,
  FileSignature,
  FileText,
  Globe,
  Home,
  Landmark,
  Languages,
  Laptop,
  Plane,
  Scale,
  Settings,
  Shield,
  UserCheck,
  CreditCard,
  Activity,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import {
  CALCULATOR_CATEGORIES,
  CALCULATOR_SERVICES
} from '../../data/calculatorServicesData.js';

// Icon mapper for dynamic service icons
const ICON_MAP = {
  Activity,
  Award,
  Baby,
  Briefcase,
  Building,
  Building2,
  CreditCard,
  FileCheck,
  FileSignature,
  FileText,
  Globe,
  Home,
  Landmark,
  Languages,
  Laptop,
  Plane,
  Scale,
  Settings,
  Shield,
  ShieldCheck,
  UserCheck,
  Users
};

export const UniversalCalculator = ({
  initialServiceId = 'family-visa',
  initialCategory = 'all',
  onOpenConsultation,
  showCategoryFilter = true,
  showSearch = true
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId);
  const [inputs, setInputs] = useState({});
  const [copied, setCopied] = useState(false);

  // Active selected service object
  const currentService = useMemo(() => {
    return (
      CALCULATOR_SERVICES.find((s) => s.id === selectedServiceId) ||
      CALCULATOR_SERVICES[0]
    );
  }, [selectedServiceId]);

  // Synchronize default values when service changes
  useEffect(() => {
    if (currentService) {
      setInputs(currentService.defaultValues || {});
    }
  }, [currentService]);

  // Filter services by category and search query
  const filteredServices = useMemo(() => {
    return CALCULATOR_SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategoryId === 'all' || service.category === selectedCategoryId;
      const matchesSearch =
        searchQuery.trim() === '' ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryId, searchQuery]);

  // Count services per category for the filter tabs
  const categoryCounts = useMemo(() => {
    const counts = { all: CALCULATOR_SERVICES.length };
    CALCULATOR_SERVICES.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Update input value helper
  const handleInputChange = (fieldId, value) => {
    setInputs((prev) => ({
      ...prev,
      [fieldId]: value
    }));
  };

  // Reset inputs to service defaults
  const handleResetInputs = () => {
    if (currentService) {
      setInputs(currentService.defaultValues || {});
    }
  };

  // Perform calculation
  const calculationResult = useMemo(() => {
    if (!currentService || typeof currentService.calculate !== 'function') {
      return {
        total: 0,
        govtFees: 0,
        typingFees: 0,
        addOns: 0,
        items: [],
        processingDays: '1 - 3 Days',
        isEstimate: true,
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
        processingDays: 'Contact Office',
        isEstimate: true,
        notes: 'Please contact our office for a customized quote.'
      };
    }
  }, [currentService, inputs]);

  // WhatsApp click handler with pre-populated message
  const handleWhatsAppQuote = () => {
    const message = `Hello Brightlink Typing,\n\nI just calculated an estimate on your website for:\n*${currentService.name}*\n\nEstimated Total: *AED ${calculationResult.total?.toLocaleString()}*\nGovt Fees: AED ${calculationResult.govtFees?.toLocaleString()}\nTyping Fees: AED ${calculationResult.typingFees?.toLocaleString()}\nEstimated Turnaround: ${calculationResult.processingDays}\n\nCould you please review my documents and confirm the next steps? Thank you!`;
    const url = `https://wa.me/971566556645?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Copy estimate summary
  const handleCopyEstimate = () => {
    const breakdownText = calculationResult.items
      ?.map((item) => `• ${item.label}: AED ${item.amount?.toLocaleString()}`)
      .join('\n');

    const summary = `Brightlink Typing & Consulting - Official Cost Estimate\n----------------------------------------\nService: ${currentService.name} (${currentService.categoryLabel})\nTotal Cost: AED ${calculationResult.total?.toLocaleString()}\nOfficial Govt Fees: AED ${calculationResult.govtFees?.toLocaleString()}\nCertified Typing & Service: AED ${calculationResult.typingFees?.toLocaleString()}\nEst. Turnaround: ${calculationResult.processingDays}\n\nBreakdown:\n${breakdownText}\n\nNotes: ${calculationResult.notes || 'Fees subject to official GDRFA/ICP verification.'}\n----------------------------------------\nOffice: Crystal Tower, Business Bay, Dubai | WhatsApp: +971 56 655 6645`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Print estimate handler
  const handlePrint = () => {
    window.print();
  };

  const ServiceIconComponent = ICON_MAP[currentService?.icon] || FileText;

  return (
    <div className="w-full">
      {/* Category Pills & Search Bar */}
      <div className="space-y-4 mb-8">
        {showSearch && (
          <div className="relative max-w-xl mx-auto md:mx-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C6230]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 23+ services (e.g. Golden Visa, Emirates ID, MOFA, LLC Setup...)"
              className="w-full pl-11 pr-4 py-3 bg-[#FCFAF8] border border-[#E8DFD5] rounded-xl text-sm text-[#222222] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-400 hover:text-neutral-700 bg-neutral-200 hover:bg-neutral-300 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        )}

        {showCategoryFilter && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CALCULATOR_CATEGORIES.map((cat) => {
              const isActive = selectedCategoryId === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#B8864B] to-[#976A36] text-white shadow-md shadow-[#B8864B]/20'
                      : 'bg-[#F8F5F0] hover:bg-[#EFE9DF] text-[#555555] border border-[#E8DFD5]/60'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-neutral-200 text-[#555555]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Main Calculator Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Service Selector & Configurable Form (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Service Selector Carousel / Grid */}
          <div className="bg-[#FFFFFF] border border-[#EFE9DF] rounded-2xl p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-[#8C6230] tracking-wider uppercase">
                  Step 1: Select Service
                </span>
                <h3 className="text-lg font-bold text-[#222222]">
                  Available Official Services ({filteredServices.length})
                </h3>
              </div>
              <span className="text-xs text-neutral-400">
                {currentService?.categoryLabel}
              </span>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-8 bg-[#FCFAF8] rounded-xl border border-dashed border-[#E8DFD5]">
                <Info className="w-8 h-8 text-[#B8864B] mx-auto mb-2 opacity-60" />
                <p className="text-sm font-semibold text-[#333333]">
                  No services match your search
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Try searching with a different keyword or select "All Services".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategoryId('all');
                  }}
                  className="mt-3 text-xs font-bold text-[#8C6230] underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[290px] overflow-y-auto pr-1">
                {filteredServices.map((svc) => {
                  const isSelected = svc.id === selectedServiceId;
                  const Icon = ICON_MAP[svc.icon] || FileText;
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedServiceId(svc.id)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 flex items-start gap-3 cursor-pointer group ${
                        isSelected
                          ? 'border-[#B8864B] bg-[#FBF7F0] shadow-xs'
                          : 'border-[#EFE9DF] hover:border-[#D6C4B0] bg-white hover:bg-[#FAF7F2]'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#B8864B] to-[#976A36] text-white'
                            : 'bg-[#F5EFE6] text-[#8C6230] group-hover:bg-[#EAE1D5]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <p
                            className={`text-xs font-bold truncate ${
                              isSelected ? 'text-[#8C6230]' : 'text-[#222222]'
                            }`}
                          >
                            {svc.name}
                          </p>
                        </div>
                        <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                          {svc.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Dynamic Configuration Form */}
          <div className="bg-[#FFFFFF] border border-[#EFE9DF] rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#EFE9DF] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8864B] to-[#976A36] text-white flex items-center justify-center shadow-xs">
                  <ServiceIconComponent className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#8C6230] tracking-wider uppercase">
                    Step 2: Customize Requirements
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#222222]">
                    {currentService.name}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetInputs}
                className="text-xs font-semibold text-neutral-500 hover:text-[#8C6230] flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-[#F5EFE6] transition-colors"
                title="Reset options to defaults"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Dynamic Fields */}
            <div className="space-y-5">
              {currentService.fields && currentService.fields.length > 0 ? (
                currentService.fields.map((field) => {
                  // Check conditional display
                  if (field.condition && !field.condition(inputs)) {
                    return null;
                  }

                  const value = inputs[field.id];

                  // Render SELECT
                  if (field.type === 'select') {
                    return (
                      <div key={field.id} className="space-y-1.5">
                        <label className="block text-xs sm:text-sm font-semibold text-[#333333]">
                          {field.label}
                        </label>
                        <select
                          value={value ?? ''}
                          onChange={(e) =>
                            handleInputChange(field.id, e.target.value)
                          }
                          className="w-full px-3.5 py-2.5 bg-[#FCFAF8] border border-[#E8DFD5] rounded-xl text-xs sm:text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] transition-all cursor-pointer"
                        >
                          {field.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {field.helperText && (
                          <p className="text-[11px] text-neutral-400">
                            {field.helperText}
                          </p>
                        )}
                      </div>
                    );
                  }

                  // Render NUMBER STEPPER
                  if (field.type === 'number') {
                    const currentNum = parseInt(value, 10) || field.min || 1;
                    const min = field.min ?? 1;
                    const max = field.max ?? 100;
                    const step = field.step ?? 1;

                    return (
                      <div
                        key={field.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-[#FCFAF8] rounded-xl border border-[#E8DFD5]"
                      >
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-[#333333]">
                            {field.label}
                          </label>
                          <span className="text-[11px] text-neutral-400">
                            Min: {min} | Max: {max}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <button
                            type="button"
                            onClick={() =>
                              handleInputChange(
                                field.id,
                                Math.max(min, currentNum - step)
                              )
                            }
                            disabled={currentNum <= min}
                            className="w-9 h-9 rounded-lg bg-white border border-[#E8DFD5] text-neutral-700 font-bold hover:bg-[#F5EFE6] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            min={min}
                            max={max}
                            step={step}
                            value={currentNum}
                            onChange={(e) => {
                              const parsed = parseInt(e.target.value, 10);
                              if (!isNaN(parsed)) {
                                handleInputChange(
                                  field.id,
                                  Math.min(max, Math.max(min, parsed))
                                );
                              }
                            }}
                            className="w-16 text-center py-1.5 bg-white border border-[#E8DFD5] rounded-lg text-sm font-bold text-[#222222] focus:outline-none focus:ring-1 focus:ring-[#B8864B]"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleInputChange(
                                field.id,
                                Math.min(max, currentNum + step)
                              )
                            }
                            disabled={currentNum >= max}
                            className="w-9 h-9 rounded-lg bg-white border border-[#E8DFD5] text-neutral-700 font-bold hover:bg-[#F5EFE6] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  }

                  // Render CHECKBOX / TOGGLE
                  if (field.type === 'checkbox') {
                    const isChecked = Boolean(value);
                    return (
                      <label
                        key={field.id}
                        className={`flex items-start gap-3.5 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-[#FBF7F0] border-[#B8864B]'
                            : 'bg-[#FCFAF8] border-[#E8DFD5] hover:border-[#D6C4B0]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) =>
                            handleInputChange(field.id, e.target.checked)
                          }
                          className="mt-1 w-4 h-4 rounded text-[#B8864B] focus:ring-[#B8864B] accent-[#B8864B] cursor-pointer"
                        />
                        <div className="flex-1 text-xs sm:text-sm">
                          <span
                            className={`font-semibold ${
                              isChecked ? 'text-[#8C6230]' : 'text-[#333333]'
                            }`}
                          >
                            {field.label}
                          </span>
                          {field.helperText && (
                            <p className="text-[11px] text-neutral-500 mt-0.5">
                              {field.helperText}
                            </p>
                          )}
                        </div>
                      </label>
                    );
                  }

                  return null;
                })
              ) : (
                <div className="text-center py-6 bg-[#FCFAF8] rounded-xl border border-dashed border-[#E8DFD5]">
                  <p className="text-xs text-neutral-500">
                    Standard all-inclusive official fixed package. No extra configuration needed.
                  </p>
                </div>
              )}
            </div>

            {/* Official Note / Prerequisite Notice */}
            {calculationResult.notes && (
              <div className="mt-6 p-3.5 bg-[#FAF7F2] rounded-xl border border-[#EFE9DF] flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#8C6230] shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-600 leading-relaxed">
                  <span className="font-semibold text-[#8C6230]">Official Note: </span>
                  {calculationResult.notes}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Cost Breakdown & Estimate Summary (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-b from-[#1E1E1E] to-[#121212] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-neutral-800 relative overflow-hidden">
            {/* Ambient Gold Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-56 h-56 rounded-full bg-[#B8864B]/15 blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-[#E5BA82]">
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Itemized Fee Calculation</span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full">
                  <Clock className="w-3 h-3 text-[#B8864B]" />
                  <span>{calculationResult.processingDays}</span>
                </div>
              </div>

              {/* Service Title */}
              <h4 className="text-lg font-bold text-white tracking-tight">
                {currentService.name}
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5 mb-6">
                Official transparent quote based on Dubai GDRFA, ICP & MOHRE portals.
              </p>

              {/* Big Total Box */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    Total Estimated Cost
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold">
                    100% Upfront Transparent
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-xs font-bold text-[#E5BA82]">AED</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {calculationResult.total?.toLocaleString()}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2">
                  Includes government statutory fees, application vouchers, and certified typing.
                </p>
              </div>

              {/* High-Level 3 Metric Split */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-[11px] text-neutral-400 block font-medium">
                    Govt Statutory Fees
                  </span>
                  <span className="text-sm font-bold text-neutral-200 mt-1 block">
                    AED {calculationResult.govtFees?.toLocaleString()}
                  </span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-[11px] text-neutral-400 block font-medium">
                    Typing & Office PRO
                  </span>
                  <span className="text-sm font-bold text-[#E5BA82] mt-1 block">
                    AED {calculationResult.typingFees?.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Detailed Itemized List */}
              <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block mb-2">
                  Itemized Fee Breakdown
                </span>

                {calculationResult.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs py-1.5 border-b border-white/5 last:border-b-0"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                          item.type === 'government'
                            ? 'bg-blue-900/60 text-blue-200 border border-blue-700/50'
                            : item.type === 'medical'
                            ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-700/50'
                            : item.type === 'identity'
                            ? 'bg-purple-900/60 text-purple-200 border border-purple-700/50'
                            : 'bg-amber-900/60 text-amber-200 border border-amber-700/50'
                        }`}
                      >
                        {item.type || 'fee'}
                      </span>
                      <span className="text-neutral-300 max-w-[220px] truncate" title={item.label}>
                        {item.label}
                      </span>
                    </div>
                    <span className="font-semibold text-neutral-100 shrink-0">
                      AED {item.amount?.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary Action Buttons */}
              <div className="space-y-2.5">
                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenConsultation(
                        `${currentService.name} (Est. AED ${calculationResult.total})`
                      )
                    }
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:from-[#B8864B] hover:to-[#865928] text-white font-bold text-sm shadow-lg shadow-[#B8864B]/30 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Proceed With Document Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#25D366]/20 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M20.52 3.48A11.9 11.9 0 0012.04 0C5.43 0 .07 5.37.07 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.22-1.63a11.95 11.95 0 005.82 1.5h.01c6.61 0 11.97-5.37 11.97-11.98 0-3.2-1.25-6.22-3.5-8.41zm-8.48 18.36h-.01a9.95 9.95 0 01-5.07-1.39l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.93 9.93 0 01-1.53-5.2c0-5.5 4.47-9.97 9.98-9.97 2.66 0 5.17 1.04 7.05 2.92a9.9 9.9 0 012.92 7.05c0 5.5-4.48 9.96-9.98 9.96zm5.47-7.46c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.51s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35z" />
                  </svg>
                  <span>Chat on WhatsApp With Quote</span>
                </button>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyEstimate}
                    className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-neutral-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Quote</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-neutral-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Estimate</span>
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[10px] text-neutral-400 text-center mt-5 leading-normal">
                Brightlink Typing is a certified UAE documentation & consulting centre. Government fees subject to system eligibility and client file status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalCalculator;
