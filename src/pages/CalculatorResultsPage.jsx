import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';

/**
 * Pricing Configuration 1: Sponsor File Fee
 * 
 * Rules:
 * 1. Applicable Service: "Family New Residency Visa" only.
 *    For other services ("Family Residency Visa Renewal", "New Born in U.A.E", "Family Visa Cancellation"),
 *    returns null so the Sponsor File row is not displayed.
 * 2. Emirate pricing:
 *    - Dubai: 260.00 AED
 *    - Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Umm Al Quwain, Fujairah: 400.00 AED
 * 3. Does not depend on Children Count, Sponsor Visa Type, or Family Location.
 */
export const calculateSponsorFileFee = (service, emirate) => {
  if (!service || service.trim() !== 'Family New Residency Visa') {
    return null;
  }

  const cleanEmirate = (emirate || '').trim().toLowerCase();
  if (!cleanEmirate) {
    return null;
  }

  if (cleanEmirate === 'dubai') {
    return 260.0;
  }

  const standardEmirates = [
    'sharjah',
    'ajman',
    'abu dhabi',
    'ras al khaimah',
    'umm al quwain',
    'fujairah'
  ];

  if (standardEmirates.includes(cleanEmirate)) {
    return 400.0;
  }

  return 400.0;
};

/**
 * Pricing Configuration 3: New Born in U.A.E Fee
 * 
 * Rules:
 * 1. Applicable Service: "New Born in U.A.E" only.
 * 2. Emirate pricing:
 *    - Dubai: 860.00 AED
 *    - Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, Umm Al Quwain, Fujairah: 835.00 AED
 * 3. Does not depend on Children Count, Sponsor Visa Type, or Family Location.
 */
export const calculateNewBornBabyFee = (service, emirate) => {
  if (!service || service.trim() !== 'New Born in U.A.E') {
    return null;
  }

  const cleanEmirate = (emirate || '').trim().toLowerCase();
  if (!cleanEmirate) {
    return null;
  }

  if (cleanEmirate === 'dubai') {
    return 860.0;
  }

  const standardEmirates = [
    'sharjah',
    'ajman',
    'abu dhabi',
    'ras al khaimah',
    'umm al quwain',
    'fujairah'
  ];

  if (standardEmirates.includes(cleanEmirate)) {
    return 835.0;
  }

  return 835.0;
};

/**
 * Reusable child base pricing configuration for Family New Residency Visa.
 * Keys: [emirateGroup (dubai | sharjah)][visaType (employment | investor)][location (inside | outside)]
 */
export const CHILD_BASE_PRICING = {
  dubai: {
    employment: {
      inside: [
        { key: 'entryPermit', name: 'Entry Permit', price: 1070 },
        { key: 'changeStatus', name: 'Change Status', price: 670 },
        { key: 'emiratesId', name: 'Emirates ID', price: 385 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 475 },
      ],
      outside: [
        { key: 'entryPermit', name: 'Entry Permit', price: 400 },
        { key: 'emiratesId', name: 'Emirates ID', price: 385 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 475 },
      ],
    },
    investor: {
      inside: [
        { key: 'entryPermit', name: 'Entry Permit (including Deposit)', price: 4250 },
        { key: 'changeStatus', name: 'Change Status', price: 670 },
        { key: 'emiratesId', name: 'Emirates ID', price: 385 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 475 },
      ],
      outside: [
        { key: 'entryPermit', name: 'Entry Permit (including Deposit)', price: 3620 },
        { key: 'emiratesId', name: 'Emirates ID', price: 385 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 475 },
      ],
    },
  },
  sharjah: {
    employment: {
      inside: [
        { key: 'entryPermit', name: 'Entry Permit', price: 420 },
        { key: 'changeStatus', name: 'Change Status', price: 700 },
        { key: 'emiratesId', name: 'Emirates ID', price: 335 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 500 },
      ],
      outside: [
        { key: 'entryPermit', name: 'Entry Permit', price: 420 },
        { key: 'emiratesId', name: 'Emirates ID', price: 335 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 500 },
      ],
    },
    investor: {
      inside: [
        { key: 'entryPermit', name: 'Entry Permit (including Deposit)', price: 3550 },
        { key: 'changeStatus', name: 'Change Status', price: 700 },
        { key: 'emiratesId', name: 'Emirates ID', price: 335 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 500 },
      ],
      outside: [
        { key: 'entryPermit', name: 'Entry Permit (including Deposit)', price: 3550 },
        { key: 'emiratesId', name: 'Emirates ID', price: 335 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 500 },
      ],
    },
  },
  'ras al khaimah': {
    employment: {
      inside: [
        { key: 'entryPermit', name: 'Entry Permit', price: 420 },
        { key: 'changeStatus', name: 'Change Status', price: 700 },
        { key: 'emiratesId', name: 'Emirates ID', price: 335 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 500 },
      ],
      outside: [
        { key: 'entryPermit', name: 'Entry Permit', price: 420 },
        { key: 'emiratesId', name: 'Emirates ID', price: 335 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 500 },
      ],
    },
    investor: {
      inside: [
        { key: 'entryPermit', name: 'Entry Permit', price: 420 },
        { key: 'changeStatus', name: 'Change Status', price: 700 },
        { key: 'emiratesId', name: 'Emirates ID', price: 335 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 500 },
      ],
      outside: [
        { key: 'entryPermit', name: 'Entry Permit', price: 420 },
        { key: 'emiratesId', name: 'Emirates ID', price: 335 },
        { key: 'visaStamping', name: 'Visa Stamping', price: 500 },
      ],
    },
  },
};

// Ajman, Abu Dhabi, Umm Al Quwain, and Fujairah share identical child base pricing structure with Sharjah
CHILD_BASE_PRICING['ajman'] = CHILD_BASE_PRICING['sharjah'];
CHILD_BASE_PRICING['abu dhabi'] = CHILD_BASE_PRICING['sharjah'];
CHILD_BASE_PRICING['umm al quwain'] = CHILD_BASE_PRICING['sharjah'];
CHILD_BASE_PRICING['fujairah'] = CHILD_BASE_PRICING['sharjah'];

/**
 * Dynamic calculation for Children Fees.
 * Applies exclusively to "Family New Residency Visa".
 * Formula: Child Service Total = Service Price x Number of Children
 */
export const calculateChildrenFees = (service, emirate, sponsorVisaType, familyLocation, childrenCount) => {
  const cleanService = (service || '').trim();

  const numChildren = parseInt(childrenCount, 10);
  if (isNaN(numChildren) || numChildren <= 0) {
    return { items: [], total: 0, numChildren: 0 };
  }

  // Handle Family Residency Visa Renewal
  if (cleanService === 'Family Residency Visa Renewal') {
    const cleanEmirate = (emirate || '').trim().toLowerCase();
    const isDubai = cleanEmirate === 'dubai';
    const eidPrice = isDubai ? 385 : 335;
    const stampingPrice = isDubai ? 475 : 500;

    const items = [
      {
        key: 'emiratesId',
        name: 'Emirates ID',
        unitPrice: eidPrice,
        count: numChildren,
        total: eidPrice * numChildren,
      },
      {
        key: 'visaStamping',
        name: 'Visa Stamping',
        unitPrice: stampingPrice,
        count: numChildren,
        total: stampingPrice * numChildren,
      },
    ];

    const total = items.reduce((sum, item) => sum + item.total, 0);
    return { items, total, numChildren };
  }

  // Handle Family Visa Cancellation (250 AED per child)
  if (cleanService === 'Family Visa Cancellation') {
    if (numChildren <= 0) {
      return { items: [], total: 0, numChildren: 0 };
    }

    const childCancellationPrice = 250.0;
    const items = [
      {
        key: 'cancellation',
        name: 'Cancellation',
        unitPrice: childCancellationPrice,
        count: numChildren,
        total: childCancellationPrice * numChildren,
      },
    ];

    const total = childCancellationPrice * numChildren;
    return { items, total, numChildren };
  }

  if (cleanService !== 'Family New Residency Visa') {
    return { items: [], total: 0, numChildren: 0 };
  }

  const cleanEmirate = (emirate || '').trim().toLowerCase();
  const emirateKey = CHILD_BASE_PRICING[cleanEmirate] ? cleanEmirate : 'sharjah';

  const cleanVisa = (sponsorVisaType || '').trim().toLowerCase();
  const visaKey = cleanVisa.includes('investor') ? 'investor' : 'employment';

  const cleanLoc = (familyLocation || '').trim().toLowerCase();
  const locKey = cleanLoc.includes('outside') ? 'outside' : 'inside';

  const basePricingList = CHILD_BASE_PRICING[emirateKey]?.[visaKey]?.[locKey] || [];

  const items = basePricingList.map((base) => ({
    key: base.key,
    name: base.name,
    unitPrice: base.price,
    count: numChildren,
    total: base.price * numChildren,
  }));

  const total = items.reduce((sum, item) => sum + item.total, 0);

  return { items, total, numChildren };
};

/**
 * Reusable spouse base pricing configuration for Family New Residency Visa.
 * Keys: [emirateGroup][visaType (employment | investor)][location (inside | outside)]
 */
export const SPOUSE_BASE_PRICING = {
  dubai: {
    employment: {
      inside: {
        entryPermit: 1070,
        changeStatus: 670,
        medicalFitness: 300,
        emiratesId: 385,
        visaStamping: 475,
      },
      outside: {
        entryPermit: 400,
        changeStatus: null,
        medicalFitness: 300,
        emiratesId: 385,
        visaStamping: 475,
      },
    },
    investor: {
      inside: {
        entryPermit: 4250,
        entryPermitName: 'Entry Permit (including Deposit)',
        changeStatus: 670,
        medicalFitness: 300,
        emiratesId: 385,
        visaStamping: 475,
      },
      outside: {
        entryPermit: 3620,
        entryPermitName: 'Entry Permit (including Deposit)',
        changeStatus: null,
        medicalFitness: 300,
        emiratesId: 385,
        visaStamping: 475,
      },
    },
  },
  sharjah: {
    employment: {
      inside: {
        entryPermit: 420,
        changeStatus: 700,
        medicalFitness: 300,
        emiratesId: 335,
        visaStamping: 500,
      },
      outside: {
        entryPermit: 420,
        changeStatus: null,
        medicalFitness: 300,
        emiratesId: 335,
        visaStamping: 500,
      },
    },
    investor: {
      inside: {
        entryPermit: 3550,
        entryPermitName: 'Entry Permit (including Deposit)',
        changeStatus: 700,
        medicalFitness: 300,
        emiratesId: 335,
        visaStamping: 500,
      },
      outside: {
        entryPermit: 3550,
        entryPermitName: 'Entry Permit (including Deposit)',
        changeStatus: null,
        medicalFitness: 300,
        emiratesId: 335,
        visaStamping: 500,
      },
    },
  },
  'ras al khaimah': {
    employment: {
      inside: {
        entryPermit: 420,
        changeStatus: 700,
        medicalFitness: 300,
        emiratesId: 335,
        visaStamping: 500,
      },
      outside: {
        entryPermit: 420,
        changeStatus: null,
        medicalFitness: 300,
        emiratesId: 335,
        visaStamping: 500,
      },
    },
    investor: {
      inside: {
        entryPermit: 420,
        deposit: 3300,
        changeStatus: 700,
        medicalFitness: 300,
        emiratesId: 335,
        visaStamping: 500,
      },
      outside: {
        entryPermit: 420,
        deposit: 3300,
        changeStatus: null,
        medicalFitness: 300,
        emiratesId: 335,
        visaStamping: 500,
      },
    },
  },
};

// Ajman, Abu Dhabi, Umm Al Quwain, and Fujairah share identical spouse pricing with Sharjah
SPOUSE_BASE_PRICING['ajman'] = SPOUSE_BASE_PRICING['sharjah'];
SPOUSE_BASE_PRICING['abu dhabi'] = SPOUSE_BASE_PRICING['sharjah'];
SPOUSE_BASE_PRICING['umm al quwain'] = SPOUSE_BASE_PRICING['sharjah'];
SPOUSE_BASE_PRICING['fujairah'] = SPOUSE_BASE_PRICING['sharjah'];

/**
 * Dynamic calculation for Spouse Fees.
 * Applies exclusively to "Family New Residency Visa".
 * Spouse fees are FIXED and do NOT multiply when children count changes.
 * Formula: Spouse Total = Primary Application Fees (Sponsor File) + Spouse Standalone Fees
 */
export const calculateSpouseFees = (service, emirate, sponsorVisaType, familyLocation) => {
  const cleanService = (service || '').trim();

  // Handle Family Residency Visa Renewal
  if (cleanService === 'Family Residency Visa Renewal') {
    const cleanEmirate = (emirate || '').trim().toLowerCase();
    const isDubai = cleanEmirate === 'dubai';

    const medicalFitness = 300;
    const emiratesId = isDubai ? 385 : 335;
    const visaStamping = isDubai ? 475 : 500;
    const spouseSubtotal = medicalFitness + emiratesId + visaStamping; // 1,160 for Dubai, 1,135 for other Emirates
    const spouseTotal = spouseSubtotal; // No sponsor file fee for Renewal

    return {
      entryPermit: null,
      entryPermitName: 'Entry Permit',
      deposit: null,
      changeStatus: null,
      medicalFitness,
      emiratesId,
      visaStamping,
      spouseSubtotal,
      spouseTotal,
    };
  }

  // Handle Family Visa Cancellation
  // Authoritative pricing matrix:
  // Dubai + Outside UAE = 350.00 AED
  // All other combinations (Dubai + Inside, Sharjah, Ajman, Abu Dhabi, RAK, UAQ, Fujairah) = 250.00 AED
  if (cleanService === 'Family Visa Cancellation') {
    const cleanEmirate = (emirate || '').trim().toLowerCase();
    const cleanLoc = (familyLocation || '').trim().toLowerCase();
    const isDubai = cleanEmirate === 'dubai';
    const isOutside = cleanLoc.includes('outside');

    const cancellationFee = (isDubai && isOutside) ? 350.0 : 250.0;

    return {
      cancellation: cancellationFee,
      entryPermit: null,
      entryPermitName: null,
      deposit: null,
      changeStatus: null,
      medicalFitness: null,
      emiratesId: null,
      visaStamping: null,
      spouseSubtotal: cancellationFee,
      spouseTotal: cancellationFee,
    };
  }

  if (cleanService !== 'Family New Residency Visa') {
    return {
      entryPermit: null,
      entryPermitName: 'Entry Permit',
      deposit: null,
      changeStatus: null,
      medicalFitness: null,
      emiratesId: null,
      visaStamping: null,
      spouseSubtotal: null,
      spouseTotal: null,
    };
  }

  const cleanEmirate = (emirate || '').trim().toLowerCase();
  const emiratePricing = SPOUSE_BASE_PRICING[cleanEmirate] || SPOUSE_BASE_PRICING['sharjah'];

  const cleanVisa = (sponsorVisaType || '').trim().toLowerCase();
  const visaKey = cleanVisa.includes('investor') ? 'investor' : 'employment';

  const cleanLoc = (familyLocation || '').trim().toLowerCase();
  const locKey = cleanLoc.includes('outside') ? 'outside' : 'inside';

  const base = emiratePricing?.[visaKey]?.[locKey];
  if (!base) {
    return {
      entryPermit: null,
      entryPermitName: 'Entry Permit',
      deposit: null,
      changeStatus: null,
      medicalFitness: null,
      emiratesId: null,
      visaStamping: null,
      spouseSubtotal: null,
      spouseTotal: null,
    };
  }

  const sponsorFile = calculateSponsorFileFee(service, emirate) || 0;
  const items = [
    base.entryPermit,
    base.deposit,
    base.changeStatus,
    base.medicalFitness,
    base.emiratesId,
    base.visaStamping,
  ].filter((v) => v !== null && v !== undefined);

  const spouseSubtotal = items.reduce((sum, v) => sum + v, 0);
  const spouseTotal = spouseSubtotal + sponsorFile;

  let entryPermitName = base.entryPermitName;
  if (!entryPermitName) {
    if (visaKey === 'investor' && cleanEmirate !== 'ras al khaimah') {
      entryPermitName = 'Entry Permit (including Deposit)';
    } else {
      entryPermitName = 'Entry Permit';
    }
  }

  return {
    entryPermit: base.entryPermit,
    entryPermitName,
    deposit: base.deposit !== undefined ? base.deposit : null,
    changeStatus: base.changeStatus,
    medicalFitness: base.medicalFitness,
    emiratesId: base.emiratesId,
    visaStamping: base.visaStamping,
    spouseSubtotal,
    spouseTotal,
  };
};

/**
 * Pricing Configuration 5: Golden Visa Fee
 * 
 * Rules:
 * 1. Applicable Service: "Golden Visa" only.
 * 2. Qualifications:
 *    - Property Owner:
 *        Normal Medical (273 AED): Sponsor Total = 9,421 AED
 *          (DLD & Admin: 5,284, Immigration & Visa: 2,710, Emirates ID – 10 Years: 1,154, Medical Normal: 273)
 *        VIP Medical (703 AED): Sponsor Total = 9,851 AED
 *          (DLD & Admin: 5,284, Immigration & Visa: 2,710, Emirates ID – 10 Years: 1,154, Medical VIP: 703)
 *    - Company Owner / Manager / Executive / Fixed Deposit:
 *        Normal Medical (273 AED): Sponsor Total = 4,137 AED
 *          (Immigration & Visa: 2,710, Emirates ID – 10 Years: 1,154, Medical Normal: 273)
 *        VIP Medical (700 AED): Sponsor Total = 4,564 AED
 *          (Immigration & Visa: 2,710, Emirates ID – 10 Years: 1,154, Medical VIP: 700)
 *    - Family of a Golden Visa:
 *        No primary sponsor applicant fee.
 *        Fixed fee: Family File Opening – Golden Visa = 283 AED
 * 3. Dependents:
 *    - Adults (if adding family and adults > 0):
 *        Base price per adult = 4,137 AED
 *        (Immigration & Visa: 2,710, Medical Normal: 273, Emirates ID – 10 Years: 1,154)
 *        Total = Adults * 4,137 AED
 *    - Children (if adding family and children > 0):
 *        Base price per child = 3,864 AED
 *        (Immigration & Visa: 2,710, Emirates ID – 10 Years: 1,154)
 *        Total = Children * 3,864 AED
 * 4. Grand Total:
 *    - Primary qualification: Sponsor Total + Adult Total + Child Total
 *    - Family of a Golden Visa: 283 + Adult Total + Child Total
 */
export const calculateGoldenVisaFees = (
  qualification,
  medicalType,
  addingFamily,
  adultsCount,
  childrenCount
) => {
  const qual = (qualification || '').trim();
  const med = (medicalType || '').trim();
  const adults = parseInt(adultsCount || '0', 10) || 0;
  const children = parseInt(childrenCount || '0', 10) || 0;
  const hasFamily = qual === 'Family of a Golden Visa' || addingFamily === 'Yes, adding family';

  let sponsorBreakdown = [];
  let sponsorTotal = 0;
  let fileOpeningFee = null;

  if (qual === 'Property Owner') {
    const isVip = med.toLowerCase().includes('vip');
    const medicalPrice = isVip ? 703 : 273;
    const medicalName = isVip ? 'Medical VIP' : 'Medical Normal';
    sponsorBreakdown = [
      { key: 'dld', name: 'DLD & Admin Fees', price: 5284 },
      { key: 'immigration', name: 'Immigration & Visa', price: 2710 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', price: 1154 },
      { key: 'medical', name: medicalName, price: medicalPrice },
    ];
    sponsorTotal = 5284 + 2710 + 1154 + medicalPrice;
  } else if (
    qual === 'Company Owner' ||
    qual === 'Manager / Executive' ||
    qual === 'Fixed Deposit'
  ) {
    const isVip = med.toLowerCase().includes('vip');
    const medicalPrice = isVip ? 700 : 273;
    const medicalName = isVip ? 'Medical VIP' : 'Medical Normal';
    sponsorBreakdown = [
      { key: 'immigration', name: 'Immigration & Visa', price: 2710 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', price: 1154 },
      { key: 'medical', name: medicalName, price: medicalPrice },
    ];
    sponsorTotal = 2710 + 1154 + medicalPrice;
  } else if (qual === 'Family of a Golden Visa') {
    fileOpeningFee = 283;
  }

  // Adult Breakdown
  let adultBreakdown = [];
  let adultTotal = 0;
  if (hasFamily && adults > 0) {
    adultBreakdown = [
      { key: 'immigration', name: 'Immigration & Visa', unitPrice: 2710, count: adults, total: adults * 2710 },
      { key: 'medical', name: 'Medical Normal', unitPrice: 273, count: adults, total: adults * 273 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', unitPrice: 1154, count: adults, total: adults * 1154 },
    ];
    adultTotal = adults * 4137;
  }

  // Child Breakdown
  let childBreakdown = [];
  let childTotal = 0;
  if (hasFamily && children > 0) {
    childBreakdown = [
      { key: 'immigration', name: 'Immigration & Visa', unitPrice: 2710, count: children, total: children * 2710 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', unitPrice: 1154, count: children, total: children * 1154 },
    ];
    childTotal = children * 3864;
  }

  let grandTotal = 0;
  if (qual === 'Family of a Golden Visa') {
    grandTotal = (fileOpeningFee || 0) + adultTotal + childTotal;
  } else {
    grandTotal = sponsorTotal + adultTotal + childTotal;
  }

  return {
    qualification: qual,
    medicalType: med,
    sponsorBreakdown,
    sponsorTotal,
    fileOpeningFee,
    adultBreakdown,
    adultTotal,
    adultsCount: adults,
    childBreakdown,
    childTotal,
    childrenCount: children,
    grandTotal,
  };
};

/**
 * Pricing Configuration 6: Property Visa Fee
 * 
 * Rules:
 * 1. Applicable Service: "Property Visa" only.
 * 2. Types:
 *    - 10-Year Golden Visa:
 *        Base items:
 *          - DLD & Admin Fees: 5,284 AED
 *          - Immigration & Visa: 2,710 AED
 *          - Emirates ID – 10 Years: 1,154 AED
 *        Medical test:
 *          - Normal: 273 AED -> Sponsor Total = 9,421 AED
 *          - VIP: 703 AED -> Sponsor Total = 9,851 AED
 *    - 5-Year Retirement Visa:
 *        Base items:
 *          - DLD & Admin Fees: 3,124 AED
 *          - Immigration Fees: 2,260 AED
 *          - Emirates ID – 5 Years: 654 AED
 *        Medical test:
 *          - Normal: 273 AED -> Sponsor Total = 6,311 AED
 *          - VIP: 703 AED -> Sponsor Total = 6,741 AED
 *    - 2-Year Investor Visa:
 *        Base items:
 *          - PCC: 220 AED
 *          - DLD Block & Recommendation: 2,020 AED
 *          - DLD Trade License: 4,041 AED
 *          - Establishment Card: 575 AED
 *          - Entry Permit: 1,126 AED
 *          - Change Status: 675 AED
 *          - Visa Stamping: 550 AED
 *          - Emirates ID – 2 Years: 354 AED
 *        Medical test:
 *          - Normal: 273 AED -> Sponsor Total = 9,834 AED
 *          - VIP: 703 AED -> Sponsor Total = 10,264 AED
 * 3. Medical test pricing & Family member additional pricing:
 *    - Reuses identical pricing and logic as Golden Visa.
 *    - Normal Medical: 273 AED, VIP Medical: 703 AED.
 *    - Adults: 4,137 AED each (Immigration & Visa: 2,710, Medical Normal: 273, Emirates ID – 10 Years: 1,154).
 *    - Children: 3,864 AED each (Immigration & Visa: 2,710, Emirates ID – 10 Years: 1,154).
 * 4. Grand Total:
 *    - Sponsor Total + Adult Total + Child Total
 */
export const calculatePropertyVisaFees = (
  propertyVisaType,
  medicalType,
  addingFamily,
  adultsCount,
  childrenCount
) => {
  const visaType = (propertyVisaType || '').trim();
  const med = (medicalType || '').trim();
  const adults = parseInt(adultsCount || '0', 10) || 0;
  const children = parseInt(childrenCount || '0', 10) || 0;
  const hasFamily = addingFamily === 'Yes, adding family';

  const isVip = med.toLowerCase().includes('vip');
  const medicalPrice = isVip ? 703 : 273;
  const medicalName = isVip ? 'Medical VIP' : 'Medical Normal';

  let sponsorBreakdown = [];
  let sponsorTotal = 0;

  if (visaType === '10-Year Golden Visa') {
    sponsorBreakdown = [
      { key: 'dld', name: 'DLD & Admin Fees', price: 5284 },
      { key: 'immigration', name: 'Immigration & Visa', price: 2710 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', price: 1154 },
      { key: 'medical', name: medicalName, price: medicalPrice },
    ];
    sponsorTotal = 5284 + 2710 + 1154 + medicalPrice;
  } else if (visaType === '5-Year Retirement Visa') {
    sponsorBreakdown = [
      { key: 'dld', name: 'DLD & Admin Fees', price: 3124 },
      { key: 'immigrationFees', name: 'Immigration Fees', price: 2260 },
      { key: 'emiratesId5', name: 'Emirates ID – 5 Years', price: 654 },
      { key: 'medical', name: medicalName, price: medicalPrice },
    ];
    sponsorTotal = 3124 + 2260 + 654 + medicalPrice;
  } else if (visaType === '2-Year Investor Visa') {
    sponsorBreakdown = [
      { key: 'pcc', name: 'PCC', price: 220 },
      { key: 'dldBlock', name: 'DLD Block & Recommendation', price: 2020 },
      { key: 'dldLicense', name: 'DLD Trade License', price: 4041 },
      { key: 'establishmentCard', name: 'Establishment Card', price: 575 },
      { key: 'entryPermit', name: 'Entry Permit', price: 1126 },
      { key: 'changeStatus', name: 'Change Status', price: 675 },
      { key: 'visaStamping', name: 'Visa Stamping', price: 550 },
      { key: 'emiratesId2', name: 'Emirates ID – 2 Years', price: 354 },
      { key: 'medical', name: medicalName, price: medicalPrice },
    ];
    sponsorTotal = 220 + 2020 + 4041 + 575 + 1126 + 675 + 550 + 354 + medicalPrice;
  }

  // Adult Breakdown (identical to Golden Visa)
  let adultBreakdown = [];
  let adultTotal = 0;
  if (hasFamily && adults > 0) {
    adultBreakdown = [
      { key: 'immigration', name: 'Immigration & Visa', unitPrice: 2710, count: adults, total: adults * 2710 },
      { key: 'medical', name: 'Medical Normal', unitPrice: 273, count: adults, total: adults * 273 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', unitPrice: 1154, count: adults, total: adults * 1154 },
    ];
    adultTotal = adults * 4137;
  }

  // Child Breakdown (identical to Golden Visa)
  let childBreakdown = [];
  let childTotal = 0;
  if (hasFamily && children > 0) {
    childBreakdown = [
      { key: 'immigration', name: 'Immigration & Visa', unitPrice: 2710, count: children, total: children * 2710 },
      { key: 'emiratesId', name: 'Emirates ID – 10 Years', unitPrice: 1154, count: children, total: children * 1154 },
    ];
    childTotal = children * 3864;
  }

  const grandTotal = sponsorTotal + adultTotal + childTotal;

  return {
    propertyVisaType: visaType,
    medicalType: med,
    sponsorBreakdown,
    sponsorTotal,
    adultBreakdown,
    adultTotal,
    adultsCount: adults,
    childBreakdown,
    childTotal,
    childrenCount: children,
    grandTotal,
  };
};

/**
 * Structural placeholders for upcoming pricing rules in subsequent tasks.
 */
export const INITIAL_PRICING_CONFIG = {
  spouseFees: {
    entryPermit: null, // Placeholder for future configuration
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
  const { getLocalizedPath, tItem } = useLanguage();

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

  const isPropertyVisaService = selectedValues.service === 'Property Visa';
  const propertyVisaFees = isPropertyVisaService
    ? calculatePropertyVisaFees(
        selectedValues.propertyVisaType,
        selectedValues.medicalType,
        selectedValues.addingFamily,
        selectedValues.adultsCount,
        selectedValues.childrenCount
      )
    : null;

  const isGoldenVisaService = selectedValues.service === 'Golden Visa';
  const goldenVisaFees = isGoldenVisaService
    ? calculateGoldenVisaFees(
        selectedValues.goldenVisaQualification,
        selectedValues.medicalType,
        selectedValues.addingFamily,
        selectedValues.adultsCount,
        selectedValues.childrenCount
      )
    : null;

  // Dynamic calculation for Sponsor File Fee (Pricing Configuration 1)
  const sponsorFileFee = (!isGoldenVisaService && !isPropertyVisaService)
    ? calculateSponsorFileFee(selectedValues.service, selectedValues.emirate)
    : null;
  const showSponsorFile = sponsorFileFee !== null;

  // Dynamic calculation for Spouse Fees (Fixed, independent of children count)
  const spouseFees = (!isGoldenVisaService && !isPropertyVisaService)
    ? calculateSpouseFees(
        selectedValues.service,
        selectedValues.emirate,
        selectedValues.sponsorVisaType,
        selectedValues.familyLocation
      )
    : { items: [], spouseSubtotal: null, spouseTotal: null };

  // Dynamic calculation for Children Fees (Pricing Configuration 2)
  const childrenFees = (!isGoldenVisaService && !isPropertyVisaService)
    ? calculateChildrenFees(
        selectedValues.service,
        selectedValues.emirate,
        selectedValues.sponsorVisaType,
        selectedValues.familyLocation,
        selectedValues.childrenCount
      )
    : { items: [], total: 0 };
  const showChildrenFees = (!isGoldenVisaService && !isPropertyVisaService) && childrenFees.items.length > 0;

  // Dynamic calculation for New Born Baby Fee (Pricing Configuration 3)
  const isNewBornService = selectedValues.service === 'New Born in U.A.E';
  const isCancellationService = selectedValues.service === 'Family Visa Cancellation';
  const newBornBabyFee = calculateNewBornBabyFee(selectedValues.service, selectedValues.emirate);

  // Reusable total calculation formula:
  // Final Total = Primary Application Fees + Spouse Fees (standalone) + Children Fees
  // Identically: Spouse Total (Including Primary) + Children Total
  const primaryTotal = sponsorFileFee !== null ? sponsorFileFee : 0;
  const spouseStandalone = spouseFees.spouseSubtotal !== null ? spouseFees.spouseSubtotal : 0;
  const childrenTotal = childrenFees.total || 0;
  
  const hasCalculatedFees = sponsorFileFee !== null || childrenTotal > 0 || spouseStandalone > 0;
  const grandTotal = isPropertyVisaService
    ? (propertyVisaFees ? propertyVisaFees.grandTotal : 0)
    : isGoldenVisaService
    ? (goldenVisaFees ? goldenVisaFees.grandTotal : 0)
    : isNewBornService
    ? newBornBabyFee
    : hasCalculatedFees
    ? (primaryTotal + spouseStandalone + childrenTotal)
    : null;

  // Format amount with commas and exactly 2 decimal places (e.g. 400.00, 1,260.00, 3,910.00)
  const formatAmount = (val) => {
    if (val === null || val === undefined || isNaN(val)) {
      return '--';
    }
    return Number(val).toLocaleString('en-US', {
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
            Section 0: Property Visa Fees (Applicable exclusively to Property Visa)
            ========================================================================= */}
        {isPropertyVisaService && propertyVisaFees && (
          <>
            {/* Primary Property Visa Breakdown table */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
                {tItem('Property Visa Fees')}
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
                        {tItem('What you pay for')}
                      </th>
                      <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                        {tItem('Total Government Fees')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {propertyVisaFees.sponsorBreakdown.map((item) => (
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
                        {`${formatAmount(propertyVisaFees.sponsorTotal)} AED`}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Adult Breakdown table (Rendered only if Adults > 0) */}
            {propertyVisaFees.adultBreakdown.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
                  {tItem('Adult Fees')}
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
                          {tItem('What you pay for')}
                        </th>
                        <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                          {tItem('Total Government Fees')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {propertyVisaFees.adultBreakdown.map((item) => {
                        const adultQtyText = item.count === 1 ? tItem('1 adult') : `${item.count} ${tItem('adults')}`;
                        return (
                          <tr key={item.key} className="border-b border-neutral-300">
                            <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                              {`${tItem(item.name)} (${adultQtyText} x ${formatAmount(item.unitPrice)})`}
                            </td>
                            <td className="py-2.5 px-4 text-neutral-800">
                              {`${formatAmount(item.total)} AED`}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="border-b border-neutral-300 bg-neutral-50/50">
                        <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                          {tItem('Adult Total')}
                        </td>
                        <td className="py-2.5 px-4 font-bold text-[#222222]">
                          {`${formatAmount(propertyVisaFees.adultTotal)} AED`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Child Breakdown table (Rendered only if Children > 0) */}
            {propertyVisaFees.childBreakdown.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
                  {tItem('Children Fees')}
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
                          {tItem('What you pay for')}
                        </th>
                        <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                          {tItem('Total Government Fees')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {propertyVisaFees.childBreakdown.map((item) => {
                        const childQtyText = item.count === 1 ? tItem('1 child') : `${item.count} ${tItem('children')}`;
                        return (
                          <tr key={item.key} className="border-b border-neutral-300">
                            <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                              {`${tItem(item.name)} (${childQtyText} x ${formatAmount(item.unitPrice)})`}
                            </td>
                            <td className="py-2.5 px-4 text-neutral-800">
                              {`${formatAmount(item.total)} AED`}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="border-b border-neutral-300 bg-neutral-50/50">
                        <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                          {tItem('Children Total')}
                        </td>
                        <td className="py-2.5 px-4 font-bold text-[#222222]">
                          {`${formatAmount(propertyVisaFees.childTotal)} AED`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* =========================================================================
            Section 0: Golden Visa Fees (Applicable exclusively to Golden Visa)
            ========================================================================= */}
        {isGoldenVisaService && goldenVisaFees && (
          <>
            {/* Primary Sponsor table or Family File Opening table */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
                {goldenVisaFees.fileOpeningFee !== null
                  ? tItem('Family File Opening Fees')
                  : tItem('Golden Visa Fees')}
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
                        {tItem('What you pay for')}
                      </th>
                      <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                        {tItem('Total Government Fees')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {goldenVisaFees.fileOpeningFee !== null ? (
                      <>
                        <tr className="border-b border-neutral-300">
                          <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                            {tItem('Family File Opening – Golden Visa')}
                          </td>
                          <td className="py-2.5 px-4 text-neutral-800">
                            {`${formatAmount(goldenVisaFees.fileOpeningFee)} AED`}
                          </td>
                        </tr>
                        <tr className="border-b border-neutral-300 bg-neutral-50/50">
                          <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                            {tItem('Family File Opening Total')}
                          </td>
                          <td className="py-2.5 px-4 font-bold text-[#222222]">
                            {`${formatAmount(goldenVisaFees.fileOpeningFee)} AED`}
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        {goldenVisaFees.sponsorBreakdown.map((item) => (
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
                            {`${formatAmount(goldenVisaFees.sponsorTotal)} AED`}
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Adult Breakdown table (Rendered only if Adults > 0) */}
            {goldenVisaFees.adultBreakdown.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
                  {tItem('Adult Fees')}
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
                          {tItem('What you pay for')}
                        </th>
                        <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                          {tItem('Total Government Fees')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {goldenVisaFees.adultBreakdown.map((item) => {
                        const adultQtyText = item.count === 1 ? tItem('1 adult') : `${item.count} ${tItem('adults')}`;
                        return (
                          <tr key={item.key} className="border-b border-neutral-300">
                            <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                              {`${tItem(item.name)} (${adultQtyText} x ${formatAmount(item.unitPrice)})`}
                            </td>
                            <td className="py-2.5 px-4 text-neutral-800">
                              {`${formatAmount(item.total)} AED`}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="border-b border-neutral-300 bg-neutral-50/50">
                        <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                          {tItem('Adult Total')}
                        </td>
                        <td className="py-2.5 px-4 font-bold text-[#222222]">
                          {`${formatAmount(goldenVisaFees.adultTotal)} AED`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Child Breakdown table (Rendered only if Children > 0) */}
            {goldenVisaFees.childBreakdown.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
                  {tItem('Children Fees')}
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
                          {tItem('What you pay for')}
                        </th>
                        <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                          {tItem('Total Government Fees')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {goldenVisaFees.childBreakdown.map((item) => {
                        const childQtyText = item.count === 1 ? tItem('1 child') : `${item.count} ${tItem('children')}`;
                        return (
                          <tr key={item.key} className="border-b border-neutral-300">
                            <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                              {`${tItem(item.name)} (${childQtyText} x ${formatAmount(item.unitPrice)})`}
                            </td>
                            <td className="py-2.5 px-4 text-neutral-800">
                              {`${formatAmount(item.total)} AED`}
                            </td>
                          </tr>
                        );
                      })}
                      <tr className="border-b border-neutral-300 bg-neutral-50/50">
                        <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                          {tItem('Children Total')}
                        </td>
                        <td className="py-2.5 px-4 font-bold text-[#222222]">
                          {`${formatAmount(goldenVisaFees.childTotal)} AED`}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* =========================================================================
            Section 1: Primary Application Fees (Applicable exclusively to Family New Residency Visa)
            ========================================================================= */}
        {showSponsorFile && (
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
              {tItem('Primary Application Fees')}
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
                      {tItem('Service')}
                    </th>
                    <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                      {tItem('Amount (AED)')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-300">
                    <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                      {tItem('Sponsor File')}
                    </td>
                    <td className="py-2.5 px-4 text-neutral-800">
                      {formatAmount(sponsorFileFee)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            Section 2: New Born Baby Fees (Applicable exclusively to New Born in U.A.E)
            ========================================================================= */}
        {isNewBornService && newBornBabyFee !== null && (
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
              {tItem('New Born Baby Fees')}
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
                      {tItem('Service')}
                    </th>
                    <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                      {tItem('Amount (AED)')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-300">
                    <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                      {tItem('New Born Baby (Including Emirates ID & Visa Stamping)')}
                    </td>
                    <td className="py-2.5 px-4 text-neutral-800">
                      {formatAmount(newBornBabyFee)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            Section 2: Spouse Fees (Hidden for New Born in U.A.E, Golden Visa, and Property Visa)
            ========================================================================= */}
        {!isNewBornService && !isGoldenVisaService && !isPropertyVisaService && (
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
            {tItem('Spouse Fees')}
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
                    {tItem('Service')}
                  </th>
                  <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                    {tItem('Amount (AED)')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {spouseFees.cancellation !== null && spouseFees.cancellation !== undefined ? (
                  <tr className="border-b border-neutral-300">
                    <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                      {tItem('Cancellation')}
                    </td>
                    <td className="py-2.5 px-4 text-neutral-800">
                      {formatAmount(spouseFees.cancellation)}
                    </td>
                  </tr>
                ) : (
                  <>
                    {spouseFees.entryPermit !== null && (
                      <tr className="border-b border-neutral-300">
                        <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                          {tItem(spouseFees.entryPermitName || 'Entry Permit')}
                        </td>
                        <td className="py-2.5 px-4 text-neutral-800">
                          {formatAmount(spouseFees.entryPermit)}
                        </td>
                      </tr>
                    )}
                    {spouseFees.deposit !== null && spouseFees.deposit !== undefined && (
                      <tr className="border-b border-neutral-300">
                        <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                          {tItem('Deposit')}
                        </td>
                        <td className="py-2.5 px-4 text-neutral-800">
                          {formatAmount(spouseFees.deposit)}
                        </td>
                      </tr>
                    )}
                    {spouseFees.changeStatus !== null && (
                      <tr className="border-b border-neutral-300">
                        <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                          {tItem('Change Status')}
                        </td>
                        <td className="py-2.5 px-4 text-neutral-800">
                          {formatAmount(spouseFees.changeStatus)}
                        </td>
                      </tr>
                    )}
                    <tr className="border-b border-neutral-300">
                      <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                        {tItem('Medical Fitness (EHS)')}
                      </td>
                      <td className="py-2.5 px-4 text-neutral-800">
                        {formatAmount(spouseFees.medicalFitness)}
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-300">
                      <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                        {tItem('Emirates ID')}
                      </td>
                      <td className="py-2.5 px-4 text-neutral-800">
                        {formatAmount(spouseFees.emiratesId)}
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-300">
                      <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                        {tItem('Visa Stamping')}
                      </td>
                      <td className="py-2.5 px-4 text-neutral-800">
                        {formatAmount(spouseFees.visaStamping)}
                      </td>
                    </tr>
                  </>
                )}
                {/* Final summary row */}
                <tr className="border-b border-neutral-300 bg-neutral-50/50">
                  <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                    {tItem('Spouse Total')}{showSponsorFile ? <> <span className="font-normal text-xs text-neutral-600">{tItem('(Including Primary application fees)')}</span></> : null}
                  </td>
                  <td className="py-2.5 px-4 font-bold text-[#222222]">
                    {spouseFees.spouseTotal !== null
                      ? `${formatAmount(spouseFees.spouseTotal)} AED`
                      : '--'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        )}

        {/* =========================================================================
            Section 3: Children Fees
            ========================================================================= */}
        {showChildrenFees && (
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#8C6230] mb-4">
              {tItem('Children Fees')}
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
                      {tItem('Service')}
                    </th>
                    <th className="py-2.5 px-4 text-left font-bold text-[#222222]">
                      {tItem('Amount (AED)')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {childrenFees.items.map((item) => {
                    const childQtyText = item.count === 1 ? '1 child' : `${item.count} children`;
                    return (
                      <tr key={item.key} className="border-b border-neutral-300">
                        <td className="py-2.5 px-4 text-neutral-800 border-r border-neutral-300">
                          {`${tItem(item.name)} (${childQtyText} x ${formatAmount(item.unitPrice)})`}
                        </td>
                        <td className="py-2.5 px-4 text-neutral-800">
                          {`${formatAmount(item.total)} AED`}
                        </td>
                      </tr>
                    );
                  })}
                  {/* Final summary row */}
                  <tr className="border-b border-neutral-300 bg-neutral-50/50">
                    <td className="py-2.5 px-4 font-bold text-[#222222] border-r border-neutral-300">
                      {tItem('Children Total')}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-[#222222]">
                      {`${formatAmount(childrenFees.total)} AED`}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            Section 4: Total Bar (Prominent bar styled in Brightlink brand colors)
            ========================================================================= */}
        <div className="mb-8">
          <div className="w-full py-3 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-[#B8864B] via-[#A8763E] to-[#8C6230] text-white flex items-center justify-between shadow-sm">
            <span className="font-bold text-base sm:text-lg tracking-wide">
              {tItem('Total:')}
            </span>
            <span className="font-extrabold text-lg sm:text-xl tracking-wide">
              {grandTotal !== null
                ? `${formatAmount(grandTotal)} AED`
                : '-- AED'}
            </span>
          </div>
        </div>

        {/* =========================================================================
            Section 4: Note Section
            ========================================================================= */}
        <div className="mb-8">
          <h3 className="text-base sm:text-lg font-bold text-[#8C6230] mb-3">
            {tItem('Note:')}
          </h3>
          {isGoldenVisaService || isPropertyVisaService ? (
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>
                {tItem('* VAT & our Service Charges are already included.')}
              </p>
              <p>
                {tItem('* There will be no other hidden charges.')}
              </p>
            </div>
          ) : isNewBornService ? (
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>
                {tItem('* VAT & our Service Charges are already included.')}
              </p>
              <p>
                {tItem('* There will be no other hidden charges.')}
              </p>
              <p>
                {tItem("* Newborn baby's visa must be stamped within 120 days from the date of birth.")}
              </p>
              <p>
                {tItem('* If late, AED 50 fine for each day after 120 days for not doing visa stamping application.')}
              </p>
              <p>
                {tItem('* AED 20 fine for each day after 120 days for not typing Emirates ID application.')}
              </p>
              {selectedValues.emirate && selectedValues.emirate.trim().toLowerCase() === 'dubai' ? (
                <p>
                  {tItem('* An additional sponsor card fee of AED 260 will be applicable if the sponsor is sponsoring for the first time.')}
                </p>
              ) : (
                <p>
                  {tItem('* An additional sponsor card fee of AED 400 will be applicable if the sponsor is sponsoring for the first time.')}
                </p>
              )}
              {selectedValues.emirate && selectedValues.emirate.trim().toLowerCase() === 'abu dhabi' && (
                <p>
                  {tItem('* If the Tenancy Contract is not from Abu Dhabi, you should show the reason why you are staying in other Emirates (for example, Branch Trade License, etc.).')}
                </p>
              )}
            </div>
          ) : isCancellationService ? (
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>
                {tItem('* VAT & our Service Charges are already included.')}
              </p>
              <p>
                {tItem('* There will be no other hidden charges.')}
              </p>
              {selectedValues.emirate && selectedValues.emirate.trim().toLowerCase() === 'abu dhabi' && (
                <p>
                  {tItem('* If the Tenancy Contract is not from Abu Dhabi, you should show the reason why you are staying in other Emirates (for example, Branch Trade License, etc.).')}
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
              <p>
                {tItem('* VAT & our Service Charges are already included.')}
              </p>
              <p>
                {tItem('* There will be no other hidden charges.')}
              </p>
              <p>
                {tItem('* There will be additional charges from AED 50 to AED 150 that you need to pay at EHS Medical Fitness Centers. The charges depend on the center you visit.')}
              </p>
              {selectedValues.emirate && selectedValues.emirate.trim().toLowerCase() === 'abu dhabi' && (
                <p>
                  {tItem('* If the Tenancy Contract is not from Abu Dhabi, you should show the reason why you are staying in other Emirates (for example, Branch Trade License, etc.).')}
                </p>
              )}
            </div>
          )}
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
            {tItem('Calculate Again')}
          </button>

          {/* Button 2: Click to Know the Documents & Procedure */}
          <button
            type="button"
            onClick={handleDocumentsProcedure}
            className="w-full py-3.5 px-6 rounded-xl bg-[#8C6230] hover:bg-[#785327] text-white font-bold text-sm sm:text-base text-center shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer"
          >
            {tItem('Click to Know the Documents & Procedure')}
          </button>

          {/* Button 3: Call Us */}
          <a
            href="tel:+971566556645"
            className="w-full block py-3.5 px-6 rounded-xl bg-[#222222] hover:bg-[#333333] text-white font-bold text-sm sm:text-base text-center shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer"
          >
            {tItem('Call Us')}
          </a>
        </div>

      </div>
    </div>
  );
};

export default CalculatorResultsPage;
