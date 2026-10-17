// Universal Service Calculator Dataset for Brightlink Typing & Consulting
// All pricing, government statutory fees, and typing charges are derived directly from official UAE portals
// and existing website service data (GDRFA, ICP, MOHRE, DHA, DLD, MOFA, BLS, and DED).

export const CALCULATOR_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'residency', label: 'Residency & Visas' },
  { id: 'identity-health', label: 'Identity & Health' },
  { id: 'corporate', label: 'Corporate PRO & Setup' },
  { id: 'legal-attestation', label: 'Legal & Attestation' },
  { id: 'property', label: 'Real Estate & DLD' },
  { id: 'passport', label: 'Passport & Consular' },
  { id: 'labour-mohre', label: 'Labour & Portals' }
];

export const CALCULATOR_SERVICES = [
  // ==========================================
  // 1. RESIDENCY & VISAS
  // ==========================================
  {
    id: 'family-visa',
    name: 'Family Residence Visa',
    category: 'residency',
    categoryLabel: 'Residency & Visas',
    shortDesc: 'Sponsorship for spouse, dependent children, and parents with medical & Emirates ID.',
    pricingType: 'itemized',
    icon: 'Users',
    defaultValues: {
      relativeType: 'spouse',
      location: 'inside', // 'inside' | 'outside'
      dependents: 1,
      includeVipMedical: false,
      includeExpressEid: false
    },
    fields: [
      {
        id: 'relativeType',
        label: 'Sponsorship Relationship',
        type: 'select',
        options: [
          { value: 'spouse', label: 'Spouse (Wife or Husband)' },
          { value: 'child', label: 'Dependent Child (Daughters any age, Sons up to 25)' },
          { value: 'parents', label: 'Parents (Humanitarian Sponsorship)' }
        ]
      },
      {
        id: 'location',
        label: 'Applicant Current Location',
        type: 'select',
        options: [
          { value: 'inside', label: 'Inside UAE (Requires In-Country Status Change)' },
          { value: 'outside', label: 'Outside UAE (Requires Entry Permit Only)' }
        ]
      },
      {
        id: 'dependents',
        label: 'Number of Applicants',
        type: 'number',
        min: 1,
        max: 10,
        step: 1
      },
      {
        id: 'includeVipMedical',
        label: 'VIP 24-Hour Medical Fitness Test',
        type: 'checkbox',
        condition: (values) => values.relativeType !== 'child' // Under 18 children exempt
      },
      {
        id: 'includeExpressEid',
        label: 'Express Priority Emirates ID Biometrics Slot',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.dependents, 10) || 1);
      const isInside = inputs.location === 'inside';
      let govtFeePerPerson = 0;
      let typingFeePerPerson = 450;
      let medicalFeePerPerson = 0;
      let eidFeePerPerson = 370;
      let statusChangePerPerson = isInside ? 650 : 0;
      let processingDays = '3 - 5 Working Days';

      if (inputs.relativeType === 'spouse') {
        govtFeePerPerson = 1150;
        typingFeePerPerson = 450;
        medicalFeePerPerson = inputs.includeVipMedical ? 750 : 320;
        eidFeePerPerson = inputs.includeExpressEid ? 520 : 370;
      } else if (inputs.relativeType === 'child') {
        govtFeePerPerson = 1150;
        typingFeePerPerson = 400;
        medicalFeePerPerson = 0; // Exempt for children <18
        eidFeePerPerson = inputs.includeExpressEid ? 520 : 370;
        processingDays = '2 - 4 Working Days';
      } else if (inputs.relativeType === 'parents') {
        govtFeePerPerson = 2800; // GDRFA deposit & humanitarian file
        typingFeePerPerson = 550;
        medicalFeePerPerson = inputs.includeVipMedical ? 750 : 320;
        eidFeePerPerson = 470;
        processingDays = '5 - 7 Working Days';
      }

      const totalGovt = (govtFeePerPerson + statusChangePerPerson) * count;
      const totalTyping = typingFeePerPerson * count;
      const totalMedical = medicalFeePerPerson * count;
      const totalEid = eidFeePerPerson * count;
      const total = totalGovt + totalTyping + totalMedical + totalEid;

      const items = [
        { label: `GDRFA Entry Permit & Visa File (${count}x)`, amount: govtFeePerPerson * count, type: 'government' },
        ...(isInside ? [{ label: `In-Country Change of Status (${count}x)`, amount: statusChangePerPerson * count, type: 'government' }] : []),
        ...(totalMedical > 0 ? [{ label: `DHA Medical Fitness Screening (${inputs.includeVipMedical ? 'VIP 24h' : 'Standard 48h'})`, amount: totalMedical, type: 'medical' }] : []),
        { label: `ICP 2-Year Emirates ID Biometrics (${inputs.includeExpressEid ? 'Express' : 'Standard'})`, amount: totalEid, type: 'identity' },
        { label: `Brightlink Certified Legal Typing & File Audit`, amount: totalTyping, type: 'typing' }
      ];

      return {
        total,
        govtFees: totalGovt + totalEid + totalMedical,
        typingFees: totalTyping,
        addOns: (inputs.includeVipMedical ? 430 : 0) + (inputs.includeExpressEid ? 150 : 0) * count,
        items,
        processingDays,
        isEstimate: false,
        notes: 'Statutory fees aligned with GDRFA Dubai portal regulations. Ejari contract and minimum sponsor salary apply.'
      };
    }
  },

  {
    id: 'golden-visa',
    name: '10-Year Golden Visa',
    category: 'residency',
    categoryLabel: 'Residency & Visas',
    shortDesc: '10-year self-sponsored residency for property owners, specialized talents, and executives.',
    pricingType: 'itemized',
    icon: 'Award',
    defaultValues: {
      pathway: 'real-estate', // 'real-estate' | 'executive' | 'dependent'
      location: 'inside',
      applicants: 1,
      includeVipMedical: true
    },
    fields: [
      {
        id: 'pathway',
        label: 'Golden Visa Eligibility Pathway',
        type: 'select',
        options: [
          { value: 'real-estate', label: 'Real Estate Investor (Property Equity ≥ AED 2M)' },
          { value: 'executive', label: 'Specialized Professional / Executive (Salary ≥ AED 30k)' },
          { value: 'dependent', label: 'Dependent Sponsorship (Spouse / Child under Golden Visa)' }
        ]
      },
      {
        id: 'location',
        label: 'Applicant Location Status',
        type: 'select',
        options: [
          { value: 'inside', label: 'Inside UAE' },
          { value: 'outside', label: 'Outside UAE' }
        ]
      },
      {
        id: 'applicants',
        label: 'Number of Applicants',
        type: 'number',
        min: 1,
        max: 5,
        step: 1
      },
      {
        id: 'includeVipMedical',
        label: 'Smart Salem VIP Same-Day Medical Screening',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.applicants, 10) || 1);
      const isInside = inputs.location === 'inside';
      let govtFee = 0;
      let typingFee = 2500;
      let medicalFee = inputs.includeVipMedical ? 850 : 320;
      let eidFee = 1070; // 10-year card
      let dldFee = 0;
      let statusChangeFee = isInside ? 650 : 0;
      let processingDays = '3 - 7 Working Days';

      if (inputs.pathway === 'real-estate') {
        dldFee = 4020; // DLD valuation & deed approval
        govtFee = 1150; // GDRFA entry & approval
        typingFee = 2500;
      } else if (inputs.pathway === 'executive') {
        govtFee = 2850; // ICP nomination approval & visa issuance
        typingFee = 2500;
      } else if (inputs.pathway === 'dependent') {
        govtFee = 2250;
        eidFee = 1050;
        typingFee = 750;
        dldFee = 0;
      }

      const totalGovt = (govtFee + dldFee + statusChangeFee + eidFee + medicalFee) * count;
      const totalTyping = typingFee * count;
      const total = totalGovt + totalTyping;

      const items = [
        ...(dldFee > 0 ? [{ label: `DLD Title Deed Valuation & Verification (${count}x)`, amount: dldFee * count, type: 'government' }] : []),
        { label: `GDRFA/ICP 10-Year Residency Stamping (${count}x)`, amount: govtFee * count, type: 'government' },
        ...(isInside ? [{ label: `In-Country Status Amendment (${count}x)`, amount: statusChangeFee * count, type: 'government' }] : []),
        { label: `Smart Salem Medical Fitness Test (${inputs.includeVipMedical ? 'VIP Same-Day' : 'Standard 48h'})`, amount: medicalFee * count, type: 'medical' },
        { label: `ICP 10-Year Biometric Emirates ID Card (${count}x)`, amount: eidFee * count, type: 'identity' },
        { label: `Brightlink VIP Concierge Filing & Legal Representation`, amount: totalTyping, type: 'typing' }
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: totalTyping,
        addOns: (inputs.includeVipMedical ? 530 : 0) * count,
        items,
        processingDays,
        isEstimate: false,
        notes: 'Includes full GDRFA nomination handling and 10-year Emirates ID card delivery. 100% self-sponsored.'
      };
    }
  },

  {
    id: 'investor-visa',
    name: 'Investor / Partner Visa (Commercial)',
    category: 'residency',
    categoryLabel: 'Residency & Visas',
    shortDesc: '2 to 3-year commercial investor residency for mainland and freezone partners.',
    pricingType: 'itemized',
    icon: 'Briefcase',
    defaultValues: {
      location: 'inside',
      partners: 1,
      includeVipMedical: false
    },
    fields: [
      {
        id: 'location',
        label: 'Applicant Location Status',
        type: 'select',
        options: [
          { value: 'inside', label: 'Inside UAE (Status Change required)' },
          { value: 'outside', label: 'Outside UAE' }
        ]
      },
      {
        id: 'partners',
        label: 'Number of Partners / Investors',
        type: 'number',
        min: 1,
        max: 5,
        step: 1
      },
      {
        id: 'includeVipMedical',
        label: 'VIP 24-Hour Medical Screening',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.partners, 10) || 1);
      const isInside = inputs.location === 'inside';
      const govtVisaFee = 3000 * count;
      const statusChange = (isInside ? 650 : 0) * count;
      const medicalFee = (inputs.includeVipMedical ? 750 : 390) * count;
      const eidFee = 450 * count;
      const typingFee = 2500 * count;
      const totalGovt = govtVisaFee + statusChange + medicalFee + eidFee;
      const total = totalGovt + typingFee;

      const items = [
        { label: `Immigration Entry Permit & Electronic Residence (${count}x)`, amount: govtVisaFee, type: 'government' },
        ...(isInside ? [{ label: `In-Country Change of Status (${count}x)`, amount: statusChange, type: 'government' }] : []),
        { label: `DHA Medical Fitness Screening (${inputs.includeVipMedical ? 'VIP 24h' : 'Standard'})`, amount: medicalFee, type: 'medical' },
        { label: `ICP Biometrics & 2-Year Emirates ID (${count}x)`, amount: eidFee, type: 'identity' },
        { label: `Brightlink Corporate Filing & Trade License Coordination`, amount: typingFee, type: 'typing' }
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: typingFee,
        addOns: inputs.includeVipMedical ? 360 * count : 0,
        items,
        processingDays: '3 - 5 Working Days',
        isEstimate: false,
        notes: 'Applicable for shareholders holding at least AED 50,000 capital equity in a registered trade license.'
      };
    }
  },

  {
    id: 'newborn-visa',
    name: 'Newborn Baby Visa (Born in UAE)',
    category: 'residency',
    categoryLabel: 'Residency & Visas',
    shortDesc: 'Birth certificate attestation, Emirates ID, and residency stamping within statutory window.',
    pricingType: 'itemized',
    icon: 'Baby',
    defaultValues: {
      within120Days: 'yes',
      courierDelivery: true
    },
    fields: [
      {
        id: 'within120Days',
        label: 'Application Window',
        type: 'select',
        options: [
          { value: 'yes', label: 'Within 120 Days of Birth (No Entry Permit required)' },
          { value: 'no', label: 'Over 120 Days (Late Fines & Entry Permit required)' }
        ]
      },
      {
        id: 'courierDelivery',
        label: 'Doorstep Courier Delivery of Emirates ID',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const isWithin120 = inputs.within120Days === 'yes';
      const birthCertFee = 70;
      const mofaAttestation = 150;
      const eidFee = 355;
      const stampingFee = 410;
      const lateEntryPermit = isWithin120 ? 0 : 490;
      const courierFee = inputs.courierDelivery ? 30 : 0;
      const typingFee = 250;
      const totalGovt = birthCertFee + mofaAttestation + eidFee + stampingFee + lateEntryPermit;
      const total = totalGovt + typingFee + courierFee;

      const items = [
        { label: 'Official Birth Certificate Issuance & Typing', amount: birthCertFee, type: 'government' },
        { label: 'MOFA UAE Document Attestation', amount: mofaAttestation, type: 'government' },
        ...(lateEntryPermit > 0 ? [{ label: 'Late Entry Permit (Over 120-Day Window)', amount: lateEntryPermit, type: 'government' }] : []),
        { label: 'GDRFA Residence Visa Stamping', amount: stampingFee, type: 'government' },
        { label: 'ICP Emirates ID Card Issuance', amount: eidFee, type: 'identity' },
        { label: 'Brightlink Family Typing & File Assembly', amount: typingFee, type: 'typing' },
        ...(courierFee > 0 ? [{ label: 'Express Secure Courier Delivery', amount: courierFee, type: 'addon' }] : [])
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: typingFee,
        addOns: courierFee,
        items,
        processingDays: '2 - 4 Working Days',
        isEstimate: false,
        notes: 'Infants born in the UAE have a statutory 120-day grace period to complete residence stamping without fines.'
      };
    }
  },

  {
    id: 'tourist-visa',
    name: 'Tourist / Visit Visa & Extensions',
    category: 'residency',
    categoryLabel: 'Residency & Visas',
    shortDesc: '30-day, 60-day, multiple-entry visas and inside-country extensions without airport runs.',
    pricingType: 'itemized',
    icon: 'Plane',
    defaultValues: {
      duration: '60-single', // '30-single' | '60-single' | '60-multi' | 'extension'
      applicants: 1,
      expressUrgent: false
    },
    fields: [
      {
        id: 'duration',
        label: 'Visa Duration & Type',
        type: 'select',
        options: [
          { value: '30-single', label: '30-Day Single Entry Tourist Visa' },
          { value: '60-single', label: '60-Day Single Entry Tourist Visa' },
          { value: '60-multi', label: '60-Day Multiple Entry Tourist Visa' },
          { value: 'extension', label: 'In-Country 30-Day Extension (Without Exiting UAE)' }
        ]
      },
      {
        id: 'applicants',
        label: 'Number of Visitors',
        type: 'number',
        min: 1,
        max: 10,
        step: 1
      },
      {
        id: 'expressUrgent',
        label: 'Express 4-Hour Urgent Issuance Service',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.applicants, 10) || 1);
      let feePerPerson = 390;
      let govtPortion = 290;
      let processingDays = '24 - 48 Hours';

      if (inputs.duration === '30-single') {
        feePerPerson = 390;
        govtPortion = 290;
      } else if (inputs.duration === '60-single') {
        feePerPerson = 550;
        govtPortion = 420;
      } else if (inputs.duration === '60-multi') {
        feePerPerson = 850;
        govtPortion = 680;
      } else if (inputs.duration === 'extension') {
        feePerPerson = 950;
        govtPortion = 750;
        processingDays = 'Same-Day / 24h';
      }

      const urgentFee = inputs.expressUrgent ? 150 * count : 0;
      const total = (feePerPerson * count) + urgentFee;
      const totalGovt = govtPortion * count;
      const totalTyping = total - totalGovt - urgentFee;

      const items = [
        { label: `GDRFA/ICP Visa & Mandatory Medical Travel Insurance (${count}x)`, amount: totalGovt, type: 'government' },
        { label: `Brightlink Online Typing & Portal Submission`, amount: totalTyping, type: 'typing' },
        ...(urgentFee > 0 ? [{ label: `Express 4-Hour Priority Issuance (${count}x)`, amount: urgentFee, type: 'addon' }] : [])
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: totalTyping,
        addOns: urgentFee,
        items,
        processingDays: inputs.expressUrgent ? '2 - 4 Hours' : processingDays,
        isEstimate: false,
        notes: 'Includes mandatory UAE health and travel insurance coverage during the stay.'
      };
    }
  },

  {
    id: 'maid-visa',
    name: 'Maid & Domestic Worker Visa',
    category: 'residency',
    categoryLabel: 'Residency & Visas',
    shortDesc: 'MOHRE domestic contract, entry permit, medical, and Tadbeer/Amer coordination.',
    pricingType: 'itemized',
    icon: 'Home',
    defaultValues: {
      location: 'outside',
      includeVipMedical: false
    },
    fields: [
      {
        id: 'location',
        label: 'Worker Location',
        type: 'select',
        options: [
          { value: 'outside', label: 'Outside UAE (New Entry Permit)' },
          { value: 'inside', label: 'Inside UAE (Requires Status Change)' }
        ]
      },
      {
        id: 'includeVipMedical',
        label: 'VIP 24-Hour Medical Screening & Pregnancy Test',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const isInside = inputs.location === 'inside';
      const entryPermit = 550;
      const statusChange = isInside ? 650 : 0;
      const medicalFee = inputs.includeVipMedical ? 850 : 450;
      const eidFee = 370;
      const mohreContract = 850;
      const typingFee = 450;
      const totalGovt = entryPermit + statusChange + medicalFee + eidFee + mohreContract;
      const total = totalGovt + typingFee;

      const items = [
        { label: 'GDRFA Domestic Worker Entry Permit', amount: entryPermit, type: 'government' },
        ...(isInside ? [{ label: 'In-Country Change of Status', amount: statusChange, type: 'government' }] : []),
        { label: 'DHA Medical Fitness & Pregnancy Test', amount: medicalFee, type: 'medical' },
        { label: 'ICP 2-Year Emirates ID Biometrics', amount: eidFee, type: 'identity' },
        { label: 'MOHRE Domestic Labor Contract Registration', amount: mohreContract, type: 'government' },
        { label: 'Brightlink Comprehensive Typing & File Clearance', amount: typingFee, type: 'typing' }
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: typingFee,
        addOns: inputs.includeVipMedical ? 400 : 0,
        items,
        processingDays: '3 - 6 Working Days',
        isEstimate: false,
        notes: 'Sponsor must meet minimum monthly salary of AED 25,000 and valid residential tenancy.'
      };
    }
  },

  {
    id: 'virtual-work-visa',
    name: 'Virtual Work / Remote Worker Visa',
    category: 'residency',
    categoryLabel: 'Residency & Visas',
    shortDesc: '1-year renewable residency for foreign remote professionals earning ≥ $3,500/mo.',
    pricingType: 'itemized',
    icon: 'Laptop',
    defaultValues: {
      location: 'outside',
      includeVipMedical: false
    },
    fields: [
      {
        id: 'location',
        label: 'Applicant Location',
        type: 'select',
        options: [
          { value: 'outside', label: 'Outside UAE' },
          { value: 'inside', label: 'Inside UAE' }
        ]
      },
      {
        id: 'includeVipMedical',
        label: 'VIP 24-Hour Medical Screening',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const isInside = inputs.location === 'inside';
      const govtEntry = 500;
      const statusChange = isInside ? 650 : 0;
      const medicalFee = inputs.includeVipMedical ? 750 : 320;
      const eidFee = 270; // 1-year card
      const typingFee = 450;
      const totalGovt = govtEntry + statusChange + medicalFee + eidFee;
      const total = totalGovt + typingFee;

      const items = [
        { label: 'GDRFA Virtual Work Entry Permit & Approval', amount: govtEntry, type: 'government' },
        ...(isInside ? [{ label: 'In-Country Status Amendment', amount: statusChange, type: 'government' }] : []),
        { label: 'DHA Medical Fitness Screening', amount: medicalFee, type: 'medical' },
        { label: 'ICP 1-Year Emirates ID Card', amount: eidFee, type: 'identity' },
        { label: 'Brightlink Employment Proof & Legal Filing', amount: typingFee, type: 'typing' }
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: typingFee,
        addOns: inputs.includeVipMedical ? 430 : 0,
        items,
        processingDays: '3 - 5 Working Days',
        isEstimate: false,
        notes: 'Requires proof of employment outside the UAE with minimum monthly salary of USD 3,500.'
      };
    }
  },

  // ==========================================
  // 2. IDENTITY & HEALTH
  // ==========================================
  {
    id: 'emirates-id',
    name: 'Emirates ID Typing & Biometrics',
    category: 'identity-health',
    categoryLabel: 'Identity & Health',
    shortDesc: 'ICP Emirates ID new application, renewal, replacement, and VIP biometrics slot booking.',
    pricingType: 'itemized',
    icon: 'CreditCard',
    defaultValues: {
      duration: '2-year', // '1-year' | '2-year' | '3-year' | '10-year' | 'replacement'
      cards: 1,
      expressUrgent: false
    },
    fields: [
      {
        id: 'duration',
        label: 'Card Validity & Type',
        type: 'select',
        options: [
          { value: '1-year', label: '1-Year Emirates ID (Govt AED 170 + Typing AED 100)' },
          { value: '2-year', label: '2-Year Emirates ID (Govt AED 270 + Typing AED 100)' },
          { value: '3-year', label: '3-Year Emirates ID (Govt AED 370 + Typing AED 100)' },
          { value: '10-year', label: '10-Year Golden Visa Emirates ID (Govt AED 970 + Typing AED 100)' },
          { value: 'replacement', label: 'Lost / Damaged Replacement Card (Govt AED 300 + Typing AED 100)' }
        ]
      },
      {
        id: 'cards',
        label: 'Number of Cards',
        type: 'number',
        min: 1,
        max: 10,
        step: 1
      },
      {
        id: 'expressUrgent',
        label: 'VIP Fast-Track Biometrics Appointment Booking',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.cards, 10) || 1);
      let govtPortion = 270;
      let typingPortion = 100;

      if (inputs.duration === '1-year') govtPortion = 170;
      else if (inputs.duration === '2-year') govtPortion = 270;
      else if (inputs.duration === '3-year') govtPortion = 370;
      else if (inputs.duration === '10-year') govtPortion = 970;
      else if (inputs.duration === 'replacement') govtPortion = 300;

      const urgentFee = inputs.expressUrgent ? 150 * count : 0;
      const totalGovt = govtPortion * count;
      const totalTyping = typingPortion * count;
      const total = totalGovt + totalTyping + urgentFee;

      const items = [
        { label: `ICP Federal Identity Statutory Card Fee (${count}x)`, amount: totalGovt, type: 'identity' },
        { label: `Brightlink Certified Online Form Typing & Document Upload`, amount: totalTyping, type: 'typing' },
        ...(urgentFee > 0 ? [{ label: `VIP Biometrics Center Express Slot Booking (${count}x)`, amount: urgentFee, type: 'addon' }] : [])
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: totalTyping,
        addOns: urgentFee,
        items,
        processingDays: inputs.expressUrgent ? '24 Hours' : '2 - 3 Working Days',
        isEstimate: false,
        notes: 'Physical cards dispatched via Empost courier to your registered UAE address.'
      };
    }
  },

  {
    id: 'medical-visa',
    name: 'Visa Medical Fitness Screening',
    category: 'identity-health',
    categoryLabel: 'Identity & Health',
    shortDesc: 'Blood test and chest X-ray screening at authorized DHA / Smart Salem medical centers.',
    pricingType: 'itemized',
    icon: 'Activity',
    defaultValues: {
      packageType: 'standard', // 'standard' | 'express' | 'vip'
      applicants: 1,
      includeVaccines: false
    },
    fields: [
      {
        id: 'packageType',
        label: 'Screening Package & Speed',
        type: 'select',
        options: [
          { value: 'standard', label: 'Standard Screening (48-Hour Results) — AED 320' },
          { value: 'express', label: 'Express 24-Hour Priority Screening — AED 550' },
          { value: 'vip', label: 'Smart Salem VIP Walk-in (4-Hour AI Results) — AED 850' }
        ]
      },
      {
        id: 'applicants',
        label: 'Number of Applicants',
        type: 'number',
        min: 1,
        max: 10,
        step: 1
      },
      {
        id: 'includeVaccines',
        label: 'Add Hepatitis B Vaccination Course (+ AED 150/person)',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.applicants, 10) || 1);
      let feePerPerson = 320;
      let hours = '48 Hours';

      if (inputs.packageType === 'standard') {
        feePerPerson = 320;
        hours = '48 Hours';
      } else if (inputs.packageType === 'express') {
        feePerPerson = 550;
        hours = '24 Hours';
      } else if (inputs.packageType === 'vip') {
        feePerPerson = 850;
        hours = '4 - 6 Hours';
      }

      const vaccineFee = inputs.includeVaccines ? 150 * count : 0;
      const typingFee = 50 * count;
      const govtMedicalFee = (feePerPerson - 50) * count;
      const total = (feePerPerson * count) + vaccineFee;

      const items = [
        { label: `DHA / Ministry Medical Blood & Chest X-Ray Screening (${count}x)`, amount: govtMedicalFee, type: 'medical' },
        { label: `Brightlink Medical Typing & Center Appointment Slot`, amount: typingFee, type: 'typing' },
        ...(vaccineFee > 0 ? [{ label: `Hepatitis B Statutory Vaccine Dose (${count}x)`, amount: vaccineFee, type: 'addon' }] : [])
      ];

      return {
        total,
        govtFees: govtMedicalFee + vaccineFee,
        typingFees: typingFee,
        addOns: vaccineFee,
        items,
        processingDays: hours,
        isEstimate: false,
        notes: 'Results automatically linked with ICP immigration portal upon completion.'
      };
    }
  },

  // ==========================================
  // 3. CORPORATE PRO & BUSINESS SETUP
  // ==========================================
  {
    id: 'pro-services',
    name: 'Corporate PRO & Government Liaison',
    category: 'corporate',
    categoryLabel: 'Corporate PRO & Setup',
    shortDesc: 'Work permits, quota additions, trade license renewals, and employee onboarding.',
    pricingType: 'itemized',
    icon: 'Building2',
    defaultValues: {
      planType: 'per-task', // 'per-task' | 'monthly-small' | 'monthly-enterprise'
      transactions: 1
    },
    fields: [
      {
        id: 'planType',
        label: 'Service Engagement Model',
        type: 'select',
        options: [
          { value: 'per-task', label: 'Pay-Per-Transaction (From AED 450 per government filing)' },
          { value: 'monthly-small', label: 'Monthly Dedicated PRO Retainer (10–50 Staff) — AED 2,200/mo' },
          { value: 'monthly-enterprise', label: 'Enterprise PRO Framework (50+ Staff) — AED 4,800/mo' }
        ]
      },
      {
        id: 'transactions',
        label: 'Number of Transactions or Months',
        type: 'number',
        min: 1,
        max: 12,
        step: 1
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.transactions, 10) || 1);
      let total = 450 * count;
      let label = `Pay-Per-Transaction Filings (${count} transactions)`;

      if (inputs.planType === 'monthly-small') {
        total = 2200 * count;
        label = `Small Business Monthly PRO Retainer (${count} Months)`;
      } else if (inputs.planType === 'monthly-enterprise') {
        total = 4800 * count;
        label = `Enterprise Dedicated PRO Retainer (${count} Months)`;
      }

      const items = [
        { label, amount: total, type: 'typing' },
        { label: 'Statutory Government Portal Dues (MOHRE/GDRFA)', amount: 0, type: 'government', customNote: 'Billed at actual government invoice receipt' }
      ];

      return {
        total,
        govtFees: 0,
        typingFees: total,
        addOns: 0,
        items,
        processingDays: inputs.planType === 'per-task' ? '24 - 48 Hours' : 'Ongoing Dedicated Support',
        isEstimate: false,
        notes: 'Includes dedicated account manager, quota management, WPS payroll auditing, and courier.'
      };
    }
  },

  {
    id: 'business-setup',
    name: 'Mainland LLC & Professional Business Setup',
    category: 'corporate',
    categoryLabel: 'Corporate PRO & Setup',
    shortDesc: 'DED trade license issuance, 100% foreign ownership, MOA drafting, and corporate files.',
    pricingType: 'itemized',
    icon: 'Landmark',
    defaultValues: {
      licenseType: 'professional', // 'professional' | 'commercial-llc' | 'branch'
      partnerVisas: 1,
      includeVirtualOffice: true
    },
    fields: [
      {
        id: 'licenseType',
        label: 'Trade License Jurisdiction & Structure',
        type: 'select',
        options: [
          { value: 'professional', label: 'Mainland Professional License (Services, Consulting) — from AED 12,500' },
          { value: 'commercial-llc', label: 'Mainland Commercial LLC (Trading, Retail, Gen. Trading) — from AED 18,500' },
          { value: 'branch', label: 'Branch of Foreign / Local Company — from AED 22,000' }
        ]
      },
      {
        id: 'partnerVisas',
        label: 'Investor / Partner Visa Allocations',
        type: 'number',
        min: 0,
        max: 5,
        step: 1
      },
      {
        id: 'includeVirtualOffice',
        label: 'Include 1-Year Registered Business Address / Ejari Assistance (+ AED 4,500)',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const partnerCount = parseInt(inputs.partnerVisas, 10) || 0;
      let baseLicenseFee = 12500;
      let licenseName = 'Mainland Professional License Package';

      if (inputs.licenseType === 'commercial-llc') {
        baseLicenseFee = 18500;
        licenseName = 'Mainland Commercial LLC 100% Foreign Ownership Package';
      } else if (inputs.licenseType === 'branch') {
        baseLicenseFee = 22000;
        licenseName = 'Branch Office DED & Economy Ministry Approval Package';
      }

      const visaCost = partnerCount * 3500;
      const officeCost = inputs.includeVirtualOffice ? 4500 : 0;
      const total = baseLicenseFee + visaCost + officeCost;

      const items = [
        { label: `${licenseName} (DED Name, Initial Approval, MOA, License)`, amount: baseLicenseFee, type: 'government' },
        ...(officeCost > 0 ? [{ label: '1-Year Registered Commercial Address / Ejari Lease', amount: officeCost, type: 'addon' }] : []),
        ...(visaCost > 0 ? [{ label: `Investor / Partner Visa Filing Quota (${partnerCount}x)`, amount: visaCost, type: 'government' }] : [])
      ];

      return {
        total,
        govtFees: baseLicenseFee - 2500,
        typingFees: 2500,
        addOns: officeCost + visaCost,
        items,
        processingDays: '3 - 5 Working Days',
        isEstimate: true,
        notes: 'Final total depends on DED market fee (2.5% of annual office lease) and specific commercial activities.'
      };
    }
  },

  {
    id: 'freezone-offshore',
    name: 'Freezone & Offshore Company Setup',
    category: 'corporate',
    categoryLabel: 'Corporate PRO & Setup',
    shortDesc: 'RAK ICC, JAFZA Offshore, IFZA, Meydan, and DMCC corporate formation.',
    pricingType: 'custom_quote',
    icon: 'Shield',
    defaultValues: {
      jurisdiction: 'rak-icc',
      shareholders: 1
    },
    fields: [
      {
        id: 'jurisdiction',
        label: 'Target Freezone / Offshore Jurisdiction',
        type: 'select',
        options: [
          { value: 'rak-icc', label: 'RAK ICC International Business Company (IBC Offshore)' },
          { value: 'jafza', label: 'JAFZA Offshore (Own Dubai Real Estate & Equities)' },
          { value: 'ifza', label: 'IFZA Dubai Freezone (0% Corporate Tax Incentives)' },
          { value: 'meydan', label: 'Meydan Freezone (Cost-effective digital setup)' }
        ]
      },
      {
        id: 'shareholders',
        label: 'Number of Corporate / Individual Shareholders',
        type: 'number',
        min: 1,
        max: 5,
        step: 1
      }
    ],
    calculate: (inputs) => {
      let baselineEstimate = 12500;
      if (inputs.jurisdiction === 'jafza') baselineEstimate = 18500;
      else if (inputs.jurisdiction === 'ifza') baselineEstimate = 14500;

      return {
        total: baselineEstimate,
        govtFees: baselineEstimate - 3000,
        typingFees: 3000,
        addOns: 0,
        items: [
          { label: 'Registered Agent Statutory Filing & Authority Fee', amount: baselineEstimate - 3000, type: 'government' },
          { label: 'Brightlink Comprehensive Resolution & Memorandum Drafting', amount: 3000, type: 'typing' }
        ],
        processingDays: '4 - 7 Working Days',
        isEstimate: true,
        quoteRequired: true,
        notes: 'Freezone authority tariffs vary depending on the chosen business activities, visa allocations, and office share requirements.'
      };
    }
  },

  // ==========================================
  // 4. LEGAL, ATTESTATION & TRANSLATION
  // ==========================================
  {
    id: 'document-attestation',
    name: 'MOFA & Embassy Document Attestation',
    category: 'legal-attestation',
    categoryLabel: 'Legal & Attestation',
    shortDesc: 'Marriage, birth, degree, and commercial contract attestation through MOFA & foreign embassies.',
    pricingType: 'itemized',
    icon: 'FileCheck',
    defaultValues: {
      documentType: 'personal', // 'personal' | 'educational' | 'commercial'
      docCount: 1,
      expressCourier: true
    },
    fields: [
      {
        id: 'documentType',
        label: 'Document Category',
        type: 'select',
        options: [
          { value: 'personal', label: 'Personal Certificate (Marriage, Birth, Police Clearance) — AED 350/doc' },
          { value: 'educational', label: 'Educational Degree & Diploma Equivalency — AED 350/doc' },
          { value: 'commercial', label: 'Commercial Contract / Board Resolution / Power of Attorney — AED 2,200/doc' }
        ]
      },
      {
        id: 'docCount',
        label: 'Number of Documents',
        type: 'number',
        min: 1,
        max: 20,
        step: 1
      },
      {
        id: 'expressCourier',
        label: 'Doorstep Courier Collection & Return (+ AED 50)',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.docCount, 10) || 1);
      let perDoc = 350;
      let govtPortion = 200;

      if (inputs.documentType === 'commercial') {
        perDoc = 2200;
        govtPortion = 2000; // Statutory MOFA commercial tariff
      }

      const courier = inputs.expressCourier ? 50 : 0;
      const totalGovt = govtPortion * count;
      const totalTyping = (perDoc - govtPortion) * count;
      const total = (perDoc * count) + courier;

      const items = [
        { label: `Ministry of Foreign Affairs (MOFA) Legal Attestation Stamp (${count}x)`, amount: totalGovt, type: 'government' },
        { label: `Brightlink Verification, Embassy Liaison & Online Portal Clearance`, amount: totalTyping, type: 'typing' },
        ...(courier > 0 ? [{ label: 'Doorstep Courier Collection & Return Delivery', amount: courier, type: 'addon' }] : [])
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: totalTyping,
        addOns: courier,
        items,
        processingDays: '2 - 3 Working Days',
        isEstimate: false,
        notes: 'Documents must be attested in origin home country prior to final UAE MOFA stamp.'
      };
    }
  },

  {
    id: 'legal-translation',
    name: 'Certified Legal Translation (MOJ Approved)',
    category: 'legal-attestation',
    categoryLabel: 'Legal & Attestation',
    shortDesc: 'Ministry of Justice certified translation for UAE courts, immigration, and embassies.',
    pricingType: 'itemized',
    icon: 'Languages',
    defaultValues: {
      languagePair: 'en-ar', // 'en-ar' | 'euro-ar' | 'technical'
      pageCount: 2,
      sameDayUrgent: false
    },
    fields: [
      {
        id: 'languagePair',
        label: 'Language Pair',
        type: 'select',
        options: [
          { value: 'en-ar', label: 'English ⇄ Arabic (Standard Court Tariff) — AED 75/page' },
          { value: 'euro-ar', label: 'French, Russian, German, Hindi, Spanish ⇄ Arabic — AED 120/page' },
          { value: 'technical', label: 'Complex Technical, Patent & Financial Audit Contracts — AED 150/page' }
        ]
      },
      {
        id: 'pageCount',
        label: 'Total Page Count',
        type: 'number',
        min: 1,
        max: 100,
        step: 1
      },
      {
        id: 'sameDayUrgent',
        label: 'Urgent Same-Day Express Delivery (+ 50% surcharge)',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const pages = Math.max(1, parseInt(inputs.pageCount, 10) || 1);
      let ratePerPage = 75;

      if (inputs.languagePair === 'euro-ar') ratePerPage = 120;
      else if (inputs.languagePair === 'technical') ratePerPage = 150;

      let subtotal = ratePerPage * pages;
      const urgentSurcharge = inputs.sameDayUrgent ? Math.round(subtotal * 0.5) : 0;
      const total = subtotal + urgentSurcharge;

      const items = [
        { label: `MOJ Sworn Translator Certified Translation (${pages} pages @ AED ${ratePerPage})`, amount: subtotal, type: 'typing' },
        ...(urgentSurcharge > 0 ? [{ label: 'Same-Day Express Priority Turnaround (4–6 Hours)', amount: urgentSurcharge, type: 'addon' }] : [])
      ];

      return {
        total,
        govtFees: 0,
        typingFees: total,
        addOns: urgentSurcharge,
        items,
        processingDays: inputs.sameDayUrgent ? 'Same Day (4 Hours)' : '24 Hours',
        isEstimate: false,
        notes: 'Recognized by Dubai Courts, GDRFA, MOHRE, and all foreign embassies located in the UAE.'
      };
    }
  },

  {
    id: 'notary-services',
    name: 'Notary & Power of Attorney (POA)',
    category: 'legal-attestation',
    categoryLabel: 'Legal & Attestation',
    shortDesc: 'Bilingual drafting and Dubai Courts electronic notarization for general and special POAs.',
    pricingType: 'itemized',
    icon: 'FileSignature',
    defaultValues: {
      poaType: 'general', // 'general' | 'property' | 'commercial'
      includeCourtFee: true
    },
    fields: [
      {
        id: 'poaType',
        label: 'Power of Attorney Type',
        type: 'select',
        options: [
          { value: 'general', label: 'General Power of Attorney (Personal & Administrative) — AED 1,200' },
          { value: 'property', label: 'Special Power of Attorney (Buying/Selling Property or Vehicles) — AED 850' },
          { value: 'commercial', label: 'Commercial Contract / Legal Notice / Settlement Agreement — AED 950' }
        ]
      },
      {
        id: 'includeCourtFee',
        label: 'Include Dubai Courts E-Notary Video-Call Attestation Fee (+ AED 280)',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      let draftingFee = 1200;
      let label = 'General Power of Attorney Bilingual English/Arabic Drafting';

      if (inputs.poaType === 'property') {
        draftingFee = 850;
        label = 'Special Property / Vehicle POA Legal Drafting';
      } else if (inputs.poaType === 'commercial') {
        draftingFee = 950;
        label = 'Commercial Contract / Legal Notice Drafting';
      }

      const courtFee = inputs.includeCourtFee ? 280 : 0;
      const total = draftingFee + courtFee;

      const items = [
        { label, amount: draftingFee, type: 'typing' },
        ...(courtFee > 0 ? [{ label: 'Dubai Courts Electronic Notary Statutory Remote Attestation Fee', amount: courtFee, type: 'government' }] : [])
      ];

      return {
        total,
        govtFees: courtFee,
        typingFees: draftingFee,
        addOns: courtFee,
        items,
        processingDays: '24 - 48 Hours',
        isEstimate: false,
        notes: 'Executed via official Dubai Courts remote video call with UAE Pass digital signatures.'
      };
    }
  },

  {
    id: 'wills-testament',
    name: 'Wills & Testament Registration',
    category: 'legal-attestation',
    categoryLabel: 'Legal & Attestation',
    shortDesc: 'DIFC & Dubai Courts non-Muslim wills for real estate, bank accounts, and guardianship.',
    pricingType: 'itemized',
    icon: 'Scale',
    defaultValues: {
      jurisdiction: 'dubai-single', // 'dubai-single' | 'dubai-mirror' | 'difc-full'
    },
    fields: [
      {
        id: 'jurisdiction',
        label: 'Will Type & Jurisdiction',
        type: 'select',
        options: [
          { value: 'dubai-single', label: 'Dubai Courts Single Will (Non-Muslim Asset Protection) — AED 3,500' },
          { value: 'dubai-mirror', label: 'Dubai Courts Mirror Wills (Spouses / Couple Package) — AED 5,500' },
          { value: 'difc-full', label: 'DIFC Full Will (Global Assets, Real Estate & Minor Guardianship) — from AED 9,500' }
        ]
      }
    ],
    calculate: (inputs) => {
      let total = 3500;
      let label = 'Dubai Courts Single Will Drafting & Notarization Filing';
      let isEstimate = false;

      if (inputs.jurisdiction === 'dubai-mirror') {
        total = 5500;
        label = 'Dubai Courts Mirror Wills Package (Husband & Wife)';
      } else if (inputs.jurisdiction === 'difc-full') {
        total = 9500;
        label = 'DIFC Comprehensive Will Drafting & Registration Advisory';
        isEstimate = true;
      }

      const items = [
        { label, amount: total, type: 'typing' }
      ];

      return {
        total,
        govtFees: 0,
        typingFees: total,
        addOns: 0,
        items,
        processingDays: '3 - 7 Working Days',
        isEstimate,
        notes: 'Guarantees inheritance according to home country wishes and protects minor children custody.'
      };
    }
  },

  // ==========================================
  // 5. REAL ESTATE & DLD / RERA
  // ==========================================
  {
    id: 'property-revaluation',
    name: 'DLD Property Revaluation & Audit',
    category: 'property',
    categoryLabel: 'Real Estate & DLD',
    shortDesc: 'Official Dubai Land Department statutory valuation for Golden Visa and mortgage equity.',
    pricingType: 'itemized',
    icon: 'Building',
    defaultValues: {
      propertyType: 'ready-residential', // 'ready-residential' | 'off-plan' | 'commercial'
      propertyCount: 1
    },
    fields: [
      {
        id: 'propertyType',
        label: 'Real Estate Property Category',
        type: 'select',
        options: [
          { value: 'ready-residential', label: 'Ready Residential Apartment / Villa (Completed Title Deed) — AED 5,230' },
          { value: 'off-plan', label: 'Off-Plan Unit / Under Construction (Oqood Registration) — AED 3,130' },
          { value: 'commercial', label: 'Commercial Office / Retail / Industrial Building — from AED 6,580' }
        ]
      },
      {
        id: 'propertyCount',
        label: 'Number of Properties',
        type: 'number',
        min: 1,
        max: 5,
        step: 1
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.propertyCount, 10) || 1);
      let dldFee = 4000;
      let vat = 200;
      let adminFee = 580; // Knowledge & Innovation fee
      let brightlinkAudit = 450;

      if (inputs.propertyType === 'off-plan') {
        dldFee = 2000;
        vat = 100;
        adminFee = 580;
        brightlinkAudit = 450;
      } else if (inputs.propertyType === 'commercial') {
        dldFee = 5000;
        vat = 250;
        adminFee = 580;
        brightlinkAudit = 750;
      }

      const totalDld = (dldFee + vat + adminFee) * count;
      const totalTyping = brightlinkAudit * count;
      const total = totalDld + totalTyping;

      const items = [
        { label: `Dubai Land Department (DLD) Statutory Valuation Tariff (${count}x)`, amount: dldFee * count, type: 'government' },
        { label: `UAE 5% VAT on DLD Valuation`, amount: vat * count, type: 'government' },
        { label: `DLD Knowledge & Innovation Administration Fees`, amount: adminFee * count, type: 'government' },
        { label: `Brightlink Title Deed Pre-Audit, Oqood Verification & Submission`, amount: totalTyping, type: 'typing' }
      ];

      return {
        total,
        govtFees: totalDld,
        typingFees: totalTyping,
        addOns: 0,
        items,
        processingDays: '5 - 8 Working Days',
        isEstimate: false,
        notes: 'Provides official DLD Revaluation Certificate valid for Golden Visa (≥ AED 2M) and banking credit.'
      };
    }
  },

  {
    id: 'rera-broker',
    name: 'RERA Broker Card & Real Estate Licensing',
    category: 'property',
    categoryLabel: 'Real Estate & DLD',
    shortDesc: 'DREI course, RERA exam registration, broker card issuance, and agency licensing.',
    pricingType: 'itemized',
    icon: 'CreditCard',
    defaultValues: {
      licenseType: 'individual-broker', // 'individual-broker' | 'agency-setup'
    },
    fields: [
      {
        id: 'licenseType',
        label: 'RERA Licensing Category',
        type: 'select',
        options: [
          { value: 'individual-broker', label: 'Individual RERA Broker Card (Agents & Consultants) — AED 4,200' },
          { value: 'agency-setup', label: 'Real Estate Brokerage Agency Formation (Company License) — from AED 18,500' }
        ]
      }
    ],
    calculate: (inputs) => {
      if (inputs.licenseType === 'individual-broker') {
        const dreiCourse = 500;
        const reraExamCard = 3200;
        const adminFee = 150;
        const typingFee = 350;
        const total = dreiCourse + reraExamCard + adminFee + typingFee;

        return {
          total,
          govtFees: dreiCourse + reraExamCard + adminFee,
          typingFees: typingFee,
          addOns: 0,
          items: [
            { label: 'DREI Certified Real Estate Broker Course', amount: dreiCourse, type: 'government' },
            { label: 'Official RERA Exam & 1-Year Broker Card Issuance', amount: reraExamCard, type: 'government' },
            { label: 'Government Knowledge & Innovation Charges', amount: adminFee, type: 'government' },
            { label: 'Brightlink Application Filing & Police Clearance Liaison', amount: typingFee, type: 'typing' }
          ],
          processingDays: '5 - 10 Working Days',
          isEstimate: false,
          notes: 'Requires valid UAE residency, police good conduct certificate, and attested educational degree.'
        };
      } else {
        const total = 18500;
        return {
          total,
          govtFees: 15500,
          typingFees: 3000,
          addOns: 0,
          items: [
            { label: 'DED Trade Name, Initial Approval & Brokerage Activity Fee', amount: 15500, type: 'government' },
            { label: 'Brightlink End-to-End Corporate Setup & RERA Compliance Filing', amount: 3000, type: 'typing' }
          ],
          processingDays: '10 - 15 Working Days',
          isEstimate: true,
          notes: 'Commercial agency setup allows hiring brokers, signing contracts, and issuing Trakheesi permits.'
        };
      }
    }
  },

  // ==========================================
  // 6. PASSPORT & CONSULAR SERVICES
  // ==========================================
  {
    id: 'passport-services',
    name: 'Indian & Global Passport Services (BLS)',
    category: 'passport',
    categoryLabel: 'Passport & Consular',
    shortDesc: 'BLS Indian passport renewals, minor reissue, Tatkaal express, and annexure typing.',
    pricingType: 'itemized',
    icon: 'Globe',
    defaultValues: {
      passportType: 'adult-36', // 'adult-36' | 'minor' | 'tatkaal' | 'jumbo-60'
      passports: 1,
      courierDelivery: true
    },
    fields: [
      {
        id: 'passportType',
        label: 'Passport Service Type',
        type: 'select',
        options: [
          { value: 'adult-36', label: 'Adult Renewal (10-Year, 36 Pages) — AED 405' },
          { value: 'minor', label: 'Minor Passport Reissue (5-Year, Children < 18) — AED 310' },
          { value: 'tatkaal', label: 'Tatkaal Emergency Urgent Passport Renewal — AED 1,050' },
          { value: 'jumbo-60', label: 'Jumbo Booklet Renewal (10-Year, 60 Pages) — AED 500' }
        ]
      },
      {
        id: 'passports',
        label: 'Number of Passports',
        type: 'number',
        min: 1,
        max: 5,
        step: 1
      },
      {
        id: 'courierDelivery',
        label: 'Doorstep Courier Delivery of Renewed Passport (+ AED 30)',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.passports, 10) || 1);
      let consularFee = 285;
      let typingFee = 120;
      let turnaround = '5 - 10 Working Days';

      if (inputs.passportType === 'minor') {
        consularFee = 190;
        typingFee = 120;
      } else if (inputs.passportType === 'tatkaal') {
        consularFee = 850;
        typingFee = 200;
        turnaround = '24 - 48 Hours';
      } else if (inputs.passportType === 'jumbo-60') {
        consularFee = 380;
        typingFee = 120;
      }

      const courier = inputs.courierDelivery ? 30 * count : 0;
      const totalGovt = consularFee * count;
      const totalTyping = typingFee * count;
      const total = totalGovt + totalTyping + courier;

      const items = [
        { label: `BLS / Consulate Official Statutory Passport Fee (${count}x)`, amount: totalGovt, type: 'government' },
        { label: `Brightlink Online Typing, Annexures Drafting & Appointment Slot`, amount: totalTyping, type: 'typing' },
        ...(courier > 0 ? [{ label: `Secure Doorstep Courier Return Delivery (${count}x)`, amount: courier, type: 'addon' }] : [])
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: totalTyping,
        addOns: courier,
        items,
        processingDays: turnaround,
        isEstimate: false,
        notes: 'Includes complete appointment booking at BLS centers in Dubai or Sharjah with full photo audit.'
      };
    }
  },

  // ==========================================
  // 7. LABOUR & MOHRE PORTALS
  // ==========================================
  {
    id: 'iloe-insurance',
    name: 'ILOE Unemployment Insurance',
    category: 'labour-mohre',
    categoryLabel: 'Labour & Portals',
    shortDesc: 'Mandatory UAE job loss scheme registration, 1-year/2-year plans, and fine settlements.',
    pricingType: 'itemized',
    icon: 'ShieldCheck',
    defaultValues: {
      salaryCategory: 'cat-a', // 'cat-a' | 'cat-b'
      duration: '2-year', // '1-year' | '2-year'
      hasLateFine: false
    },
    fields: [
      {
        id: 'salaryCategory',
        label: 'Basic Monthly Salary Bracket',
        type: 'select',
        options: [
          { value: 'cat-a', label: 'Category A: Basic Salary ≤ AED 16,000 (AED 60/year)' },
          { value: 'cat-b', label: 'Category B: Basic Salary > AED 16,000 (AED 120/year)' }
        ]
      },
      {
        id: 'duration',
        label: 'Subscription Policy Period',
        type: 'select',
        options: [
          { value: '1-year', label: '1-Year Policy' },
          { value: '2-year', label: '2-Year Policy (Recommended to match Emirates ID)' }
        ]
      },
      {
        id: 'hasLateFine',
        label: 'Settle MOHRE Missed Subscription Fine (+ AED 400)',
        type: 'checkbox'
      }
    ],
    calculate: (inputs) => {
      const isCatA = inputs.salaryCategory === 'cat-a';
      const is2Year = inputs.duration === '2-year';
      let insurancePremium = 60;

      if (isCatA) {
        insurancePremium = is2Year ? 120 : 60;
      } else {
        insurancePremium = is2Year ? 240 : 120;
      }

      const fine = inputs.hasLateFine ? 400 : 0;
      const typingFee = 50;
      const total = insurancePremium + fine + typingFee;

      const items = [
        { label: `ILOE Insurance Statutory Premium (${inputs.duration})`, amount: insurancePremium, type: 'government' },
        ...(fine > 0 ? [{ label: 'MOHRE Missed ILOE Subscription Penalty Settlement', amount: fine, type: 'government' }] : []),
        { label: 'Brightlink Certificate Issuance & Portal Linking Fee', amount: typingFee, type: 'typing' }
      ];

      return {
        total,
        govtFees: insurancePremium + fine,
        typingFees: typingFee,
        addOns: fine,
        items,
        processingDays: 'Instant Certificate',
        isEstimate: false,
        notes: 'Mandatory federal insurance for private sector and federal government employees.'
      };
    }
  },

  {
    id: 'amer-services',
    name: 'Amer Center GDRFA Services',
    category: 'labour-mohre',
    categoryLabel: 'Labour & Portals',
    shortDesc: 'Residency cancellation, in-country status change, overstay fine reduction, and exit permits.',
    pricingType: 'itemized',
    icon: 'FileText',
    defaultValues: {
      actionType: 'cancellation', // 'cancellation' | 'status-change' | 'fine-reduction' | 'outpass'
    },
    fields: [
      {
        id: 'actionType',
        label: 'Immigration Clearance Action',
        type: 'select',
        options: [
          { value: 'cancellation', label: 'Residence Visa Cancellation — AED 350' },
          { value: 'status-change', label: 'In-Country Change of Status (Without Exit) — AED 800' },
          { value: 'fine-reduction', label: 'GDRFA Overstay Fine Reduction Petition — AED 450' },
          { value: 'outpass', label: 'Departure Exit Permit / Outpass — AED 350' }
        ]
      }
    ],
    calculate: (inputs) => {
      let govtPortion = 200;
      let typingPortion = 150;
      let label = 'GDRFA Official Visa Cancellation';

      if (inputs.actionType === 'status-change') {
        govtPortion = 650;
        typingPortion = 150;
        label = 'In-Country Visa Status Change Approval';
      } else if (inputs.actionType === 'fine-reduction') {
        govtPortion = 0;
        typingPortion = 450;
        label = 'GDRFA Humanitarian Fine Reduction Case Filing';
      } else if (inputs.actionType === 'outpass') {
        govtPortion = 200;
        typingPortion = 150;
        label = 'Exit Permit / Outpass Clearance';
      }

      const total = govtPortion + typingPortion;

      const items = [
        ...(govtPortion > 0 ? [{ label: `GDRFA Portal Statutory Fee`, amount: govtPortion, type: 'government' }] : []),
        { label: `Brightlink Amer Center Document Audit & Representation`, amount: typingPortion, type: 'typing' }
      ];

      return {
        total,
        govtFees: govtPortion,
        typingFees: typingPortion,
        addOns: 0,
        items,
        processingDays: 'Same-Day / 24 Hours',
        isEstimate: false,
        notes: 'All immigration filings are submitted directly to GDRFA Dubai through official Amer center channels.'
      };
    }
  },

  {
    id: 'tasheel-mohre',
    name: 'Tasheel MOHRE Work Permits',
    category: 'labour-mohre',
    categoryLabel: 'Labour & Portals',
    shortDesc: 'Electronic work permit quota, contract modifications, and labor card renewals.',
    pricingType: 'itemized',
    icon: 'Settings',
    defaultValues: {
      actionType: 'renewal', // 'renewal' | 'new-permit' | 'contract-amendment'
    },
    fields: [
      {
        id: 'actionType',
        label: 'MOHRE Service Type',
        type: 'select',
        options: [
          { value: 'renewal', label: 'Electronic Labour Card Renewal (Cat 2 Company) — AED 1,500' },
          { value: 'new-permit', label: 'New Work Permit Quota Initial Approval — AED 500' },
          { value: 'contract-amendment', label: 'Labour Contract Modification & Salary Update — AED 400' }
        ]
      }
    ],
    calculate: (inputs) => {
      let govtPortion = 1200;
      let typingPortion = 300;
      let label = 'MOHRE 2-Year Labour Card Statutory Fee';

      if (inputs.actionType === 'new-permit') {
        govtPortion = 250;
        typingPortion = 250;
        label = 'MOHRE Quota Initial Approval Fee';
      } else if (inputs.actionType === 'contract-amendment') {
        govtPortion = 200;
        typingPortion = 200;
        label = 'MOHRE Contract Revision Fee';
      }

      const total = govtPortion + typingPortion;

      const items = [
        { label, amount: govtPortion, type: 'government' },
        { label: 'Brightlink Tasheel Portal Typing & Submission', amount: typingPortion, type: 'typing' }
      ];

      return {
        total,
        govtFees: govtPortion,
        typingFees: typingPortion,
        addOns: 0,
        items,
        processingDays: '24 - 48 Hours',
        isEstimate: false,
        notes: 'Final MOHRE fee may vary depending on company Emiratisation quota tier (Cat 1, Cat 2, Cat 3).'
      };
    }
  },

  {
    id: 'tawjeeh-training',
    name: 'Tawjeeh Worker Orientation',
    category: 'labour-mohre',
    categoryLabel: 'Labour & Portals',
    shortDesc: 'Mandatory labor awareness training sessions for newly hired employees in the UAE.',
    pricingType: 'itemized',
    icon: 'UserCheck',
    defaultValues: {
      workers: 1
    },
    fields: [
      {
        id: 'workers',
        label: 'Number of Workers',
        type: 'number',
        min: 1,
        max: 20,
        step: 1
      }
    ],
    calculate: (inputs) => {
      const count = Math.max(1, parseInt(inputs.workers, 10) || 1);
      const perWorkerGovt = 180;
      const perWorkerTyping = 70;
      const totalGovt = perWorkerGovt * count;
      const totalTyping = perWorkerTyping * count;
      const total = totalGovt + totalTyping;

      const items = [
        { label: `MOHRE Tawjeeh Orientation Session & Certificate (${count}x)`, amount: totalGovt, type: 'government' },
        { label: `Brightlink Slot Booking & Worker File Preparation`, amount: totalTyping, type: 'typing' }
      ];

      return {
        total,
        govtFees: totalGovt,
        typingFees: totalTyping,
        addOns: 0,
        items,
        processingDays: '24 - 48 Hours',
        isEstimate: false,
        notes: 'Mandatory for all workers under MOHRE skill levels 3, 4, and 5 upon initial entry permit arrival.'
      };
    }
  }
];
