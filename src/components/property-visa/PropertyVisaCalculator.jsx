import React, { useState } from 'react';
import { Calculator, RotateCcw, MessageSquare, ArrowRight, Home } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const PropertyVisaCalculator = ({ onOpenConsultation }) => {
  const { tItem } = useLanguage();

  const [propertyVisaType, setPropertyVisaType] = useState('10-Year Golden Visa');
  const [medicalType, setMedicalType] = useState('Normal medical');
  const [addingFamily, setAddingFamily] = useState('No, just me');
  const [adultsCount, setAdultsCount] = useState('0');
  const [childrenCount, setChildrenCount] = useState('0');

  const propertyVisaOptions = [
    '10-Year Golden Visa',
    '5-Year Retirement Visa',
    '2-Year Investor Visa'
  ];

  const medicalTestOptions = [
    'Normal medical',
    'VIP medical'
  ];

  const addingFamilyOptions = [
    'No, just me',
    'Yes, adding family'
  ];

  const countOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  const hasFamily = addingFamily === 'Yes, adding family';
  const adults = hasFamily ? (parseInt(adultsCount, 10) || 0) : 0;
  const children = hasFamily ? (parseInt(childrenCount, 10) || 0) : 0;

  const isVip = (medicalType || '').toLowerCase().includes('vip');
  const medicalPrice = isVip ? 703 : 273;
  const medicalName = isVip ? 'Medical VIP' : 'Medical Normal';

  let sponsorBreakdown = [];
  let sponsorTotal = 0;

  if (propertyVisaType === '10-Year Golden Visa') {
    sponsorBreakdown = [
      { key: 'dld', name: 'DLD & Admin Fees', price: 5284 },
      { key: 'immigration', name: 'Immigration & Visa', price: 2710 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', price: 1154 },
      { key: 'medical', name: medicalName, price: medicalPrice }
    ];
    sponsorTotal = 5284 + 2710 + 1154 + medicalPrice;
  } else if (propertyVisaType === '5-Year Retirement Visa') {
    sponsorBreakdown = [
      { key: 'dld', name: 'DLD & Admin Fees', price: 3124 },
      { key: 'immigrationFees', name: 'Immigration Fees', price: 2260 },
      { key: 'emiratesId5', name: 'Emirates ID – 5 Years', price: 654 },
      { key: 'medical', name: medicalName, price: medicalPrice }
    ];
    sponsorTotal = 3124 + 2260 + 654 + medicalPrice;
  } else if (propertyVisaType === '2-Year Investor Visa') {
    sponsorBreakdown = [
      { key: 'pcc', name: 'PCC', price: 220 },
      { key: 'dldBlock', name: 'DLD Block & Recommendation', price: 2020 },
      { key: 'dldLicense', name: 'DLD Trade License', price: 4041 },
      { key: 'establishmentCard', name: 'Establishment Card', price: 575 },
      { key: 'entryPermit', name: 'Entry Permit', price: 1126 },
      { key: 'changeStatus', name: 'Change Status', price: 675 },
      { key: 'visaStamping', name: 'Visa Stamping', price: 550 },
      { key: 'emiratesId2', name: 'Emirates ID – 2 Years', price: 354 },
      { key: 'medical', name: medicalName, price: medicalPrice }
    ];
    sponsorTotal = 220 + 2020 + 4041 + 575 + 1126 + 675 + 550 + 354 + medicalPrice;
  }

  // Adult Breakdown
  let adultBreakdown = [];
  let adultTotal = 0;
  if (adults > 0) {
    adultBreakdown = [
      { key: 'immigration', name: 'Immigration & Visa', unitPrice: 2710, count: adults, total: adults * 2710 },
      { key: 'medical', name: 'Medical Normal', unitPrice: 273, count: adults, total: adults * 273 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', unitPrice: 1154, count: adults, total: adults * 1154 }
    ];
    adultTotal = adults * 4137;
  }

  // Child Breakdown
  let childBreakdown = [];
  let childTotal = 0;
  if (children > 0) {
    childBreakdown = [
      { key: 'immigration', name: 'Immigration & Visa', unitPrice: 2710, count: children, total: children * 2710 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', unitPrice: 1154, count: children, total: children * 1154 }
    ];
    childTotal = children * 3864;
  }

  const grandTotal = sponsorTotal + adultTotal + childTotal;

  const formatAmount = (val) => {
    if (val === null || val === undefined || isNaN(val)) return '--';
    return Number(val).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleReset = () => {
    setPropertyVisaType('10-Year Golden Visa');
    setMedicalType('Normal medical');
    setAddingFamily('No, just me');
    setAdultsCount('0');
    setChildrenCount('0');
  };

  const handleWhatsApp = () => {
    const familyInfo = hasFamily ? ` (Adults: ${adults}, Children: ${children})` : '';
    const text = encodeURIComponent(
      `Hello Brightlink! I calculated my Dubai Property Visa government fees on your Property Visa page.\n` +
      `• Route: ${propertyVisaType}\n` +
      `• Medical: ${medicalType}\n` +
      `• Family Members: ${hasFamily ? 'Yes' + familyInfo : 'None'}\n` +
      `• Estimated Total Government Fees: ${formatAmount(grandTotal)} AED\n\n` +
      `Please assist me with my Property Visa application.`
    );
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <section id="property-visa-calculator" className="py-16 sm:py-20 lg:py-24 bg-[#FCFAF8] border-t border-[#F1EBE1] scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3.5">
            <Home className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#8C6230]">
              {tItem('Property Visa Fee Calculator')}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight">
            {tItem('Property Visa Fee Calculator')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            {tItem('Estimate your visa fees and family sponsorship costs below.')}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E8DFD5] rounded-2xl shadow-sm p-6 sm:p-7 space-y-5">
            <h3 className="text-base sm:text-lg font-bold text-[#222222] border-b border-neutral-200 pb-3">
              {tItem('Property Visa')} — {tItem('Select Option')}
            </h3>

            {/* Input 1: Which property visa? */}
            <div>
              <label htmlFor="pv-type" className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5">
                {tItem('Which property visa?')} <span className="text-red-500">*</span>
              </label>
              <select
                id="pv-type"
                value={propertyVisaType}
                onChange={(e) => setPropertyVisaType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
              >
                {propertyVisaOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {tItem(opt)}
                  </option>
                ))}
              </select>
            </div>

            {/* Input 2: Medical Test */}
            <div>
              <label htmlFor="pv-med" className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5">
                {tItem('Choose your medical test')} <span className="text-red-500">*</span>
              </label>
              <select
                id="pv-med"
                value={medicalType}
                onChange={(e) => setMedicalType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
              >
                {medicalTestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {tItem(opt)}
                  </option>
                ))}
              </select>
            </div>

            {/* Input 3: Adding Family */}
            <div>
              <label htmlFor="pv-family" className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5">
                {tItem('Adding family members too?')} <span className="text-red-500">*</span>
              </label>
              <select
                id="pv-family"
                value={addingFamily}
                onChange={(e) => {
                  const val = e.target.value;
                  setAddingFamily(val);
                  if (val === 'No, just me') {
                    setAdultsCount('0');
                    setChildrenCount('0');
                  }
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
              >
                {addingFamilyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {tItem(opt)}
                  </option>
                ))}
              </select>
            </div>

            {/* Dependent Inputs: Adults & Children */}
            {hasFamily && (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label htmlFor="pv-adults" className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5">
                    {tItem('Adults')}
                  </label>
                  <select
                    id="pv-adults"
                    value={adultsCount}
                    onChange={(e) => setAdultsCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                  >
                    {countOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="pv-children" className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5">
                    {tItem('Children')}
                  </label>
                  <select
                    id="pv-children"
                    value={childrenCount}
                    onChange={(e) => setChildrenCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#B8864B] focus:border-transparent transition-all cursor-pointer"
                  >
                    {countOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Reset Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs sm:text-sm border border-neutral-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-neutral-600" />
                <span>{tItem('Reset Calculator')}</span>
              </button>
            </div>
          </div>

          {/* Fee Results Column (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E8DFD5] rounded-2xl shadow-sm p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
              <h3 className="text-base sm:text-lg font-bold text-[#8C6230]">
                {tItem('Property Visa Fees')}
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#FAF5EC] text-[#8C6230] font-semibold border border-[#E8DFD5]">
                {tItem(propertyVisaType)}
              </span>
            </div>

            {/* Primary Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-neutral-300 text-xs sm:text-sm">
                <colgroup>
                  <col style={{ width: '70%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup>
                <thead>
                  <tr className="border-b border-neutral-300 bg-neutral-50/70">
                    <th className="py-2.5 px-4 text-left font-bold text-[#222222] border-r border-neutral-300">
                      {tItem('What you pay for')}
                    </th>
                    <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                      {tItem('Total Government Fees')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorBreakdown.map((item) => (
                    <tr key={item.key} className="border-b border-neutral-300">
                      <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                        {tItem(item.name)}
                      </td>
                      <td className="py-2.5 px-4 text-neutral-800">
                        {`${formatAmount(item.price)} AED`}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b border-neutral-300 bg-neutral-50/50">
                    <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                      {tItem('Sponsor Total')}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-[#222222]">
                      {`${formatAmount(sponsorTotal)} AED`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Adult Breakdown (if adults > 0) */}
            {adultBreakdown.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-[#8C6230] mb-2.5">
                  {tItem('Adult Fees')}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-neutral-300 text-xs sm:text-sm">
                    <colgroup>
                      <col style={{ width: '70%' }} />
                      <col style={{ width: '30%' }} />
                    </colgroup>
                    <tbody>
                      {adultBreakdown.map((item) => {
                        const adultQtyText = item.count === 1 ? tItem('1 adult') : `${item.count} ${tItem('adults')}`;
                        return (
                          <tr key={item.key} className="border-b border-neutral-300">
                            <td className="py-2 px-4 text-neutral-800 border-r border-neutral-300">
                              {`${tItem(item.name)} (${adultQtyText} x ${formatAmount(item.unitPrice)})`}
                            </td>
                            <td className="py-2 px-4 text-neutral-800">
                              {`${formatAmount(item.total)} AED`}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="border-b border-neutral-300 bg-neutral-50/50">
                        <td className="py-2 px-4 font-bold text-[#222222] border-r border-neutral-300">
                          {tItem('Adult Total')}
                        </td>
                        <td className="py-2 px-4 font-bold text-[#222222]">
                          {`${formatAmount(adultTotal)} AED`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Child Breakdown (if children > 0) */}
            {childBreakdown.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-[#8C6230] mb-2.5">
                  {tItem('Children Fees')}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-neutral-300 text-xs sm:text-sm">
                    <colgroup>
                      <col style={{ width: '70%' }} />
                      <col style={{ width: '30%' }} />
                    </colgroup>
                    <tbody>
                      {childBreakdown.map((item) => {
                        const childQtyText = item.count === 1 ? tItem('1 child') : `${item.count} ${tItem('children')}`;
                        return (
                          <tr key={item.key} className="border-b border-neutral-300">
                            <td className="py-2 px-4 text-neutral-800 border-r border-neutral-300">
                              {`${tItem(item.name)} (${childQtyText} x ${formatAmount(item.unitPrice)})`}
                            </td>
                            <td className="py-2 px-4 text-neutral-800">
                              {`${formatAmount(item.total)} AED`}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="border-b border-neutral-300 bg-neutral-50/50">
                        <td className="py-2 px-4 font-bold text-[#222222] border-r border-neutral-300">
                          {tItem('Children Total')}
                        </td>
                        <td className="py-2 px-4 font-bold text-[#222222]">
                          {`${formatAmount(childTotal)} AED`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Total Bar */}
            <div className="w-full py-3.5 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-[#B8864B] via-[#A8763E] to-[#8C6230] text-white flex items-center justify-between shadow-sm">
              <span className="font-bold text-sm sm:text-base tracking-wide">
                {tItem('Total:')}
              </span>
              <span className="font-extrabold text-lg sm:text-xl tracking-wide">
                {`${formatAmount(grandTotal)} AED`}
              </span>
            </div>

            {/* Notes */}
            <div className="space-y-1 text-xs text-neutral-600 bg-[#FCFAF8] p-3.5 rounded-xl border border-[#E8DFD5]">
              <p>{tItem('* VAT & our Service Charges are already included.')}</p>
              <p>{tItem('* There will be no other hidden charges.')}</p>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm text-center shadow-md shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>{tItem('Apply for Property Visa')} · WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PropertyVisaCalculator;
