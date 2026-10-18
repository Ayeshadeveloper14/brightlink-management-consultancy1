export const UAE_EMIRATES = [
  'All Emirates',
  'Abu Dhabi',
  'Dubai',
  'Sharjah',
  'Ajman',
  'Umm Al Quwain',
  'Ras Al Khaimah',
  'Fujairah'
];

export const ACTIVITY_CATEGORIES = [
  'All Activities',
  'Trading & General Trading',
  'Import & Export',
  'E-Commerce & Digital Retail',
  'Professional Services & Consultancy',
  'Technology, Software & AI',
  'Media, Marketing & Publishing',
  'Education & Training',
  'Healthcare & Life Sciences',
  'Manufacturing & Industrial',
  'Logistics, Warehousing & Supply Chain',
  'Commodities & Precious Metals',
  'Finance, Fintech & Asset Management',
  'Maritime, Shipping & Aviation',
  'Sustainability & Renewable Energy'
];

export const FACILITY_OPTIONS = [
  'All Facilities',
  'Flexi-Desk / Coworking',
  'Dedicated Executive Office',
  'Warehousing / Industrial Storage',
  'Industrial Land Plots'
];

export const FREE_ZONES_DATA = [
  /* =========================================================================
     ABU DHABI FREE ZONES
     ========================================================================= */
  {
    id: 'adgm',
    name: 'Abu Dhabi Global Market (ADGM)',
    shortName: 'ADGM',
    emirate: 'Abu Dhabi',
    overview: 'Premier international financial centre operating under an independent common-law judicial framework, catering to global banking, wealth management, asset management, and fintech.',
    industryFocus: 'Finance, FinTech, Wealth Management & Legal Holding',
    activities: [
      'Finance, Fintech & Asset Management',
      'Professional Services & Consultancy',
      'Technology, Software & AI'
    ],
    facilities: ['Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Financial Services Licence', 'Non-Financial Commercial Licence', 'Tech Startup Licence', 'Special Purpose Vehicle (SPV)'],
    authority: 'ADGM Registration Authority',
    officialUrl: 'https://www.adgm.com/',
    brightlinkPath: '/business-setup/free-zone/abu-dhabi-free-zone',
    highlights: ['English Common Law jurisdiction', 'Independent court & arbitration center', 'Global fintech hub']
  },
  {
    id: 'masdar-city',
    name: 'Masdar City Free Zone',
    shortName: 'Masdar City',
    emirate: 'Abu Dhabi',
    overview: 'Pioneering clean-technology and sustainability business cluster accelerating renewable energy, environmental innovation, urban mobility, and AI development.',
    industryFocus: 'Clean Technology, Renewable Energy & Innovation',
    activities: [
      'Sustainability & Renewable Energy',
      'Technology, Software & AI',
      'Professional Services & Consultancy'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Service Licence', 'Commercial Licence', 'Corporate Branch'],
    authority: 'Masdar City Free Zone Authority',
    officialUrl: 'https://www.masdarcityfreezone.com/',
    brightlinkPath: '/business-setup/free-zone/abu-dhabi-free-zone',
    highlights: ['Sustainable urban ecosystem', 'R&D collaboration opportunities', 'Rapid digital setup']
  },
  {
    id: 'kezad',
    name: 'Khalifa Economic Zones Abu Dhabi (KEZAD)',
    shortName: 'KEZAD',
    emirate: 'Abu Dhabi',
    overview: 'The largest integrated commercial, logistics, and industrial ecosystem in the Middle East, directly integrated with deepwater Khalifa Port.',
    industryFocus: 'Heavy Manufacturing, Food Processing, Metals & Logistics',
    activities: [
      'Manufacturing & Industrial',
      'Logistics, Warehousing & Supply Chain',
      'Trading & General Trading',
      'Import & Export'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Industrial Land Plots', 'Dedicated Executive Office'],
    licenceTypes: ['Industrial Licence', 'Logistics Licence', 'Commercial/Trading Licence'],
    authority: 'AD Ports Group / KEZAD Authority',
    officialUrl: 'https://www.kezadgroup.com/',
    brightlinkPath: '/business-setup/free-zone/abu-dhabi-free-zone',
    highlights: ['Deepwater Khalifa Port integration', 'Massive heavy industrial plots', 'Multimodal rail and highway links']
  },
  {
    id: 'adafz',
    name: 'Abu Dhabi Airports Free Zone (ADAFZ)',
    shortName: 'ADAFZ',
    emirate: 'Abu Dhabi',
    overview: 'Aviation-centric free zone operating across Abu Dhabi International Airport, Al Ain International Airport, and Al Bateen Executive Airport.',
    industryFocus: 'Aviation, Aerospace, Air Cargo & Cold Chain Logistics',
    activities: [
      'Maritime, Shipping & Aviation',
      'Logistics, Warehousing & Supply Chain',
      'Trading & General Trading'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Dedicated Executive Office'],
    licenceTypes: ['Aviation Licence', 'Commercial Trading Licence', 'Service Licence'],
    authority: 'Abu Dhabi Airports Company (ADAC)',
    officialUrl: 'https://www.adafz.ae/',
    brightlinkPath: '/business-setup/free-zone/abu-dhabi-free-zone',
    highlights: ['Direct tarmac access', 'Airside cargo transfer', 'Cold-chain handling infrastructure']
  },
  {
    id: 'twofour54',
    name: 'twofour54 Abu Dhabi Media Zone',
    shortName: 'twofour54',
    emirate: 'Abu Dhabi',
    overview: 'The capital’s flagship media, creative, and entertainment cluster, hosting global broadcasters, film studios, gaming developers, and digital agencies.',
    industryFocus: 'Media Production, Broadcasting, Gaming & Digital Content',
    activities: [
      'Media, Marketing & Publishing',
      'Technology, Software & AI',
      'Professional Services & Consultancy'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Media Commercial Licence', 'Freelance Media Permit'],
    authority: 'Media Zone Authority – Abu Dhabi',
    officialUrl: 'https://www.twofour54.com/',
    brightlinkPath: '/business-setup/free-zone/abu-dhabi-free-zone',
    highlights: ['Film production rebates', 'Yas Creative Hub campus', 'Broadcaster infrastructure']
  },

  /* =========================================================================
     DUBAI FREE ZONES
     ========================================================================= */
  {
    id: 'dmcc',
    name: 'Dubai Multi Commodities Centre (DMCC)',
    shortName: 'DMCC',
    emirate: 'Dubai',
    overview: 'Global trade hub for international commodities, energy, precious metals, diamonds, and crypto assets, hosting over 24,000 member companies in Jumeirah Lakes Towers (JLT).',
    industryFocus: 'Commodities, Precious Metals, Crypto/Web3, Trading & Advisory',
    activities: [
      'Commodities & Precious Metals',
      'Trading & General Trading',
      'Finance, Fintech & Asset Management',
      'Technology, Software & AI',
      'Professional Services & Consultancy'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Trading Licence', 'General Trading Licence', 'Service Licence', 'Crypto/Proprietary Trading'],
    authority: 'DMCC Authority',
    officialUrl: 'https://www.dmcc.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Global Free Zone of the Year (multiple wins)', 'DMCC Crypto & Gaming Centres', 'Dubai Diamond Exchange']
  },
  {
    id: 'jafza',
    name: 'Jebel Ali Free Zone (JAFZA)',
    shortName: 'JAFZA',
    emirate: 'Dubai',
    overview: 'One of the world’s largest and most established industrial and maritime port free zones, seamlessly integrated with DP World’s flagship Jebel Ali Port.',
    industryFocus: 'Heavy Industry, Global Logistics, Petrochemicals & Bulk Trade',
    activities: [
      'Logistics, Warehousing & Supply Chain',
      'Manufacturing & Industrial',
      'Trading & General Trading',
      'Import & Export',
      'Maritime, Shipping & Aviation'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Industrial Land Plots', 'Dedicated Executive Office'],
    licenceTypes: ['Industrial Licence', 'Commercial/Trading Licence', 'General Trading', 'Logistics Licence', 'Offshore Entity'],
    authority: 'DP World / JAFZA Authority',
    officialUrl: 'https://www.jafza.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Direct maritime berths', 'Customs-bonded logistics corridor', 'Handles over 20% of Dubai FDI']
  },
  {
    id: 'dafz',
    name: 'Dubai Airport Freezone (DAFZ)',
    shortName: 'DAFZ',
    emirate: 'Dubai',
    overview: 'Strategic aviation and commercial business hub situated adjacent to Dubai International Airport (DXB), serving global high-value freight, luxury goods, and electronics.',
    industryFocus: 'Aviation Logistics, Electronics, Luxury Goods & Pharmaceuticals',
    activities: [
      'Maritime, Shipping & Aviation',
      'Logistics, Warehousing & Supply Chain',
      'Trading & General Trading',
      'Professional Services & Consultancy'
    ],
    facilities: ['Dedicated Executive Office', 'Warehousing / Industrial Storage', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Commercial Licence', 'General Trading Licence', 'Service Licence', 'Industrial Licence'],
    authority: 'DIEZ (Dubai Integrated Economic Zones)',
    officialUrl: 'https://www.dafz.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Direct DXB airside customs link', 'Fast customs turnaround', 'High corporate prestige']
  },
  {
    id: 'difc',
    name: 'Dubai International Financial Centre (DIFC)',
    shortName: 'DIFC',
    emirate: 'Dubai',
    overview: 'Leading global financial centre in the MEASA region, operating under an independent English common-law judicial system and independent regulator (DFSA).',
    industryFocus: 'Investment Banking, Wealth Management, Private Equity & Legal',
    activities: [
      'Finance, Fintech & Asset Management',
      'Professional Services & Consultancy',
      'Technology, Software & AI'
    ],
    facilities: ['Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['DFSA Regulated Financial Licence', 'Non-Financial Corporate Licence', 'FinTech Innovation Licence', 'Prescribed Company'],
    authority: 'DIFC Authority & DFSA',
    officialUrl: 'https://www.difc.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Common Law legal jurisdiction', 'DIFC Courts & Arbitration', 'DIFC FinTech Hive accelerator']
  },
  {
    id: 'dic',
    name: 'Dubai Internet City (DIC)',
    shortName: 'Dubai Internet City',
    emirate: 'Dubai',
    overview: 'The Middle East’s leading technology cluster, housing global tech conglomerates, regional unicorns, cloud architecture firms, and AI development labs.',
    industryFocus: 'Information Technology, Software, Cloud & Artificial Intelligence',
    activities: [
      'Technology, Software & AI',
      'Professional Services & Consultancy',
      'E-Commerce & Digital Retail'
    ],
    facilities: ['Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Software Development Licence', 'IT Service Licence', 'Freelance Tech Permit'],
    authority: 'TECOM Group / Dubai Development Authority (DDA)',
    officialUrl: 'https://www.dic.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Home to Microsoft, Oracle, Google regional HQs', 'in5 Tech incubator integration']
  },
  {
    id: 'dmc',
    name: 'Dubai Media City (DMC)',
    shortName: 'Dubai Media City',
    emirate: 'Dubai',
    overview: 'Global media hub accommodating global news networks, advertising conglomerates, publishing companies, digital creative houses, and PR agencies.',
    industryFocus: 'Broadcasting, Advertising, Publishing & Creative Media',
    activities: [
      'Media, Marketing & Publishing',
      'Professional Services & Consultancy'
    ],
    facilities: ['Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Media Commercial Licence', 'Freelance Creative Permit'],
    authority: 'TECOM Group / DDA',
    officialUrl: 'https://www.dubaimediacity.com/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Regional media ecosystem', 'Broadcasting studios', 'in5 Media innovation center']
  },
  {
    id: 'dso',
    name: 'Dubai Silicon Oasis (DSO)',
    shortName: 'Dubai Silicon Oasis',
    emirate: 'Dubai',
    overview: 'Integrated smart city and technology park designed for semiconductor design, hardware engineering, telecommunications, and tech startups.',
    industryFocus: 'Hardware Tech, Electronics, Smart City Innovations & Startups',
    activities: [
      'Technology, Software & AI',
      'Manufacturing & Industrial',
      'Trading & General Trading',
      'Professional Services & Consultancy'
    ],
    facilities: ['Dedicated Executive Office', 'Warehousing / Industrial Storage', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Service Licence', 'Trade Licence', 'Industrial Licence'],
    authority: 'DIEZ (Dubai Integrated Economic Zones)',
    officialUrl: 'https://www.dso.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Dubai Digital Park', 'Integrated residential-commercial technology city', 'Dtec entrepreneurship center']
  },
  {
    id: 'dubai-commercity',
    name: 'Dubai CommerCity',
    shortName: 'Dubai CommerCity',
    emirate: 'Dubai',
    overview: 'The first purpose-built e-commerce free zone in the Middle East and North Africa, providing specialized e-commerce logistics, tech stacks, and fulfillment.',
    industryFocus: 'E-Commerce Platforms, Online Brands & Digital Logistics',
    activities: [
      'E-Commerce & Digital Retail',
      'Logistics, Warehousing & Supply Chain',
      'Technology, Software & AI'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['E-Commerce Licence', 'Trade Licence', 'Logistics Services Licence'],
    authority: 'DIEZ & Wasl Asset Management',
    officialUrl: 'https://www.dubaicommercity.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Automated e-commerce fulfillment units', 'Integrated payment and customs tech']
  },
  {
    id: 'dubai-south',
    name: 'Dubai South',
    shortName: 'Dubai South',
    emirate: 'Dubai',
    overview: 'Master-planned 145 sq km aerotropolis encompassing Al Maktoum International Airport (DWC), specialized logistics corridors, and aviation districts.',
    industryFocus: 'Aerospace, Aviation Logistics, Exhibition & Global Supply Chains',
    activities: [
      'Maritime, Shipping & Aviation',
      'Logistics, Warehousing & Supply Chain',
      'Trading & General Trading',
      'Manufacturing & Industrial'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Industrial Land Plots', 'Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Commercial Licence', 'Aviation Licence', 'Logistics Licence', 'Industrial Licence'],
    authority: 'Dubai South Authority',
    officialUrl: 'https://www.dubaisouth.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Adjacent to Al Maktoum Airport (DWC)', 'Host of Dubai Airshow and major freight corridors']
  },
  {
    id: 'dhcc',
    name: 'Dubai Healthcare City (DHCC)',
    shortName: 'Dubai Healthcare City',
    emirate: 'Dubai',
    overview: 'Specialized healthcare and clinical wellness free zone with dedicated regulatory framework under the Dubai Healthcare City Authority (DHCR).',
    industryFocus: 'Clinical Medicine, Medical Tourism, HealthTech & Pharmaceuticals',
    activities: [
      'Healthcare & Life Sciences',
      'Education & Training',
      'Professional Services & Consultancy'
    ],
    facilities: ['Dedicated Executive Office'],
    licenceTypes: ['Clinical Healthcare Licence', 'Commercial Health Licence', 'Medical Education Licence'],
    authority: 'Dubai Healthcare City Authority (DHCA)',
    officialUrl: 'https://www.dhcc.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Independent healthcare regulatory registry', 'Medical research and specialty hospital ecosystem']
  },
  {
    id: 'meydan-fz',
    name: 'Meydan Free Zone',
    shortName: 'Meydan Free Zone',
    emirate: 'Dubai',
    overview: 'Centrally situated free zone located in the Meydan Hotel precinct, highly popular for digital consultants, e-commerce brands, and professional advisory firms.',
    industryFocus: 'Consultancy, Digital Commerce, Professional Services & Media',
    activities: [
      'Professional Services & Consultancy',
      'E-Commerce & Digital Retail',
      'Media, Marketing & Publishing',
      'Trading & General Trading'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Commercial Trade Licence', 'Consulting & Service Licence', 'E-Commerce Licence'],
    authority: 'Meydan Free Zone Authority',
    officialUrl: 'https://www.meydanfz.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Central Dubai location near Downtown', 'Digital-first setup procedures', 'Guaranteed IBAN assistance options']
  },
  {
    id: 'dwtc',
    name: 'Dubai World Trade Centre Free Zone (DWTC)',
    shortName: 'DWTC Free Zone',
    emirate: 'Dubai',
    overview: 'Prominent business hub in Dubai’s central financial and exhibition corridor, with specialized regulatory regimes for virtual asset services and commercial trade.',
    industryFocus: 'Conventions, Virtual Assets, Professional Services & Global Trade',
    activities: [
      'Finance, Fintech & Asset Management',
      'Professional Services & Consultancy',
      'Trading & General Trading'
    ],
    facilities: ['Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Commercial Licence', 'Service Licence', 'VASP Virtual Assets Licence'],
    authority: 'Dubai World Trade Centre Authority (DWTCA)',
    officialUrl: 'https://www.dwtc.com/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['VARA virtual asset regulatory partner', 'One Central Grade-A office buildings']
  },
  {
    id: 'expo-city-dubai',
    name: 'Expo City Dubai Free Zone',
    shortName: 'Expo City Dubai',
    emirate: 'Dubai',
    overview: 'Future-focused smart innovation hub built upon the legacy of Expo 2020, dedicated to sustainability, clean tech, smart cities, and creative entrepreneurship.',
    industryFocus: 'Smart Cities, Sustainable Innovation, Cleantech & Future Tech',
    activities: [
      'Sustainability & Renewable Energy',
      'Technology, Software & AI',
      'Professional Services & Consultancy'
    ],
    facilities: ['Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Commercial Innovation Licence', 'Service Licence'],
    authority: 'Expo City Dubai Authority',
    officialUrl: 'https://www.expocitydubai.com/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['World-class sustainable urban infrastructure', 'Global pavilion venues']
  },
  {
    id: 'dsp',
    name: 'Dubai Science Park (DSP)',
    shortName: 'Dubai Science Park',
    emirate: 'Dubai',
    overview: 'Dedicated life sciences and scientific research community offering bespoke laboratory spaces, chemical storage, and clinical trial facilities.',
    industryFocus: 'Pharmaceuticals, Medical Devices, Biotech & Environmental Science',
    activities: [
      'Healthcare & Life Sciences',
      'Sustainability & Renewable Energy',
      'Professional Services & Consultancy'
    ],
    facilities: ['Dedicated Executive Office', 'Warehousing / Industrial Storage'],
    licenceTypes: ['Commercial Licence', 'Industrial Licence', 'Scientific Service Licence'],
    authority: 'TECOM Group / DDA',
    officialUrl: 'https://www.dsp.ae/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Custom laboratory and testing spaces', 'LEED-certified headquarters']
  },
  {
    id: 'd3',
    name: 'Dubai Design District (d3)',
    shortName: 'd3 Design District',
    emirate: 'Dubai',
    overview: 'The creative epicenter of the Middle East, dedicated to fashion houses, luxury lifestyle brands, interior architecture, and industrial design.',
    industryFocus: 'Fashion, Luxury Brands, Architecture, Graphic & Industrial Design',
    activities: [
      'Media, Marketing & Publishing',
      'Professional Services & Consultancy',
      'E-Commerce & Digital Retail'
    ],
    facilities: ['Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Design Commercial Licence', 'Freelance Creative Permit'],
    authority: 'TECOM Group / DDA',
    officialUrl: 'https://www.dubaidesigndistrict.com/',
    brightlinkPath: '/business-setup/free-zone/dubai-free-zone',
    highlights: ['Host of Dubai Fashion Week', 'Creative community studios and showrooms']
  },

  /* =========================================================================
     SHARJAH FREE ZONES
     ========================================================================= */
  {
    id: 'saif-zone',
    name: 'Sharjah Airport International Free Zone (SAIF Zone)',
    shortName: 'SAIF Zone',
    emirate: 'Sharjah',
    overview: 'One of the UAE’s oldest and most versatile industrial and commercial free zones, directly adjacent to Sharjah International Airport with multimodal cargo capabilities.',
    industryFocus: 'Trading, Warehousing, Electronics, Manufacturing & Aviation Cargo',
    activities: [
      'Trading & General Trading',
      'Logistics, Warehousing & Supply Chain',
      'Manufacturing & Industrial',
      'Import & Export'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Industrial Land Plots', 'Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Commercial Licence', 'General Trading Licence', 'Industrial Licence', 'Service Licence'],
    authority: 'SAIF Zone Authority',
    officialUrl: 'https://www.saif-zone.com/',
    brightlinkPath: '/business-setup/free-zone/sharjah-free-zone',
    highlights: ['Direct Sharjah Airport cargo access', 'Over 8,000 operational companies', 'Competitive warehouse leases']
  },
  {
    id: 'hamriyah',
    name: 'Hamriyah Free Zone (HFZA)',
    shortName: 'Hamriyah Free Zone',
    emirate: 'Sharjah',
    overview: 'Major industrial and maritime port free zone featuring deepwater port facilities, extensive land plots, and dedicated petrochemical and steel clusters.',
    industryFocus: 'Heavy Manufacturing, Steel, Petrochemicals, Maritime & Food Logistics',
    activities: [
      'Manufacturing & Industrial',
      'Maritime, Shipping & Aviation',
      'Logistics, Warehousing & Supply Chain',
      'Commodities & Precious Metals'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Industrial Land Plots', 'Dedicated Executive Office'],
    licenceTypes: ['Industrial Licence', 'Commercial Licence', 'Service Licence'],
    authority: 'Hamriyah Free Zone Authority',
    officialUrl: 'https://www.hfza.ae/',
    brightlinkPath: '/business-setup/free-zone/sharjah-free-zone',
    highlights: ['Deepwater port berths', 'Specialized oil, gas, and steel sectors', 'Heavy power infrastructure']
  },
  {
    id: 'shams',
    name: 'Sharjah Media City (Shams)',
    shortName: 'Shams',
    emirate: 'Sharjah',
    overview: 'Modern, digitally driven media and business hub catering to creative agencies, e-commerce retailers, independent media producers, and consultants.',
    industryFocus: 'Creative Media, Digital Marketing, E-Commerce & Advisory',
    activities: [
      'Media, Marketing & Publishing',
      'E-Commerce & Digital Retail',
      'Professional Services & Consultancy',
      'Trading & General Trading'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Service Licence', 'Commercial Licence', 'Media Licence', 'Freelance Permit'],
    authority: 'Shams Authority',
    officialUrl: 'https://www.shams.ae/',
    brightlinkPath: '/business-setup/free-zone/sharjah-free-zone',
    highlights: ['Fast-track digital incorporation', 'High visa allocation per desk package', 'Diverse creative activities']
  },
  {
    id: 'spc-free-zone',
    name: 'Sharjah Publishing City (SPC Free Zone)',
    shortName: 'SPC Free Zone',
    emirate: 'Sharjah',
    overview: 'The world’s first free zone dedicated to print, publishing, and creative media, offering dual free-zone and mainland licensing options.',
    industryFocus: 'Publishing, Printing, Creative Media, E-Commerce & General Trading',
    activities: [
      'Media, Marketing & Publishing',
      'E-Commerce & Digital Retail',
      'Trading & General Trading',
      'Professional Services & Consultancy'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office', 'Warehousing / Industrial Storage'],
    licenceTypes: ['Publishing Licence', 'Commercial Licence', 'General Trading', 'Dual Licence (Mainland + FZ)'],
    authority: 'Sharjah Book Authority',
    officialUrl: 'https://www.spcfz.ae/',
    brightlinkPath: '/business-setup/free-zone/sharjah-free-zone',
    highlights: ['Dual-licensing capability', 'State-of-the-art digital printing infrastructure', 'Fast issuance']
  },
  {
    id: 'srtip',
    name: 'Sharjah Research, Technology and Innovation Park (SRTIP)',
    shortName: 'SRTIP',
    emirate: 'Sharjah',
    overview: 'Advanced R&D innovation ecosystem fostering collaboration between enterprise, government, and University City in transport, AI, 3D printing, and agritech.',
    industryFocus: 'Applied Research, 3D Printing, Agritech & Deep Tech',
    activities: [
      'Technology, Software & AI',
      'Sustainability & Renewable Energy',
      'Education & Training'
    ],
    facilities: ['Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Innovation Licence', 'Commercial Licence', 'Service Licence'],
    authority: 'SRTIP Authority',
    officialUrl: 'https://www.srtip.ae/',
    brightlinkPath: '/business-setup/free-zone/sharjah-free-zone',
    highlights: ['Adjacent to University City of Sharjah', 'Additive manufacturing labs', 'Venture accelerator ecosystem']
  },

  /* =========================================================================
     AJMAN FREE ZONES
     ========================================================================= */
  {
    id: 'afz',
    name: 'Ajman Free Zone (AFZ)',
    shortName: 'Ajman Free Zone',
    emirate: 'Ajman',
    overview: 'Established port-side free zone offering economical commercial, industrial, and trading facilities with direct access to Ajman Port and northern transit corridors.',
    industryFocus: 'Commercial Trade, Light Manufacturing, Retail & Maritime Logistics',
    activities: [
      'Trading & General Trading',
      'Logistics, Warehousing & Supply Chain',
      'Manufacturing & Industrial',
      'E-Commerce & Digital Retail'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Commercial Licence', 'General Trading Licence', 'Industrial Licence', 'Service Licence', 'E-Commerce'],
    authority: 'Ajman Free Zone Authority',
    officialUrl: 'https://www.afz.gov.ae/',
    brightlinkPath: '/business-setup/free-zone/ajman-free-zone',
    highlights: ['Adjacent to Ajman Port', 'Cost-effective warehouse leases', 'Installment payment options']
  },
  {
    id: 'amcfz',
    name: 'Ajman Media City Free Zone (AMCFZ)',
    shortName: 'Ajman Media City',
    emirate: 'Ajman',
    overview: 'Specialized digital and media-focused free zone known for flexible creative licensing packages tailored to international remote founders and digital agencies.',
    industryFocus: 'Digital Media, Advertising, Online Retail & Entertainment',
    activities: [
      'Media, Marketing & Publishing',
      'Professional Services & Consultancy',
      'E-Commerce & Digital Retail'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Service Licence', 'Commercial Licence', 'Media Licence'],
    authority: 'Ajman Media City Authority',
    officialUrl: 'https://www.amcfz.ae/',
    brightlinkPath: '/business-setup/free-zone/ajman-free-zone',
    highlights: ['Digitally driven onboarding', 'Affordable creative packages', 'Multiple activities on one licence']
  },

  /* =========================================================================
     UMM AL QUWAIN FREE ZONES
     ========================================================================= */
  {
    id: 'uaq-ftz',
    name: 'Umm Al Quwain Free Trade Zone (UAQ FTZ)',
    shortName: 'UAQ FTZ',
    emirate: 'Umm Al Quwain',
    overview: 'Strategic northern free zone known for transparent, cost-efficient company formation, modular workspace packages, and friendly administrative frameworks.',
    industryFocus: 'Commercial Trading, General Trading, Consulting, E-Commerce & Light Industry',
    activities: [
      'Trading & General Trading',
      'Import & Export',
      'Professional Services & Consultancy',
      'E-Commerce & Digital Retail',
      'Manufacturing & Industrial'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office', 'Warehousing / Industrial Storage'],
    licenceTypes: ['Commercial Licence', 'General Trading Licence', 'Consultancy Licence', 'Freelance Permit', 'Industrial Licence'],
    authority: 'Government of Umm Al Quwain',
    officialUrl: 'https://www.uaqftz.com/',
    brightlinkPath: '/business-setup/free-zone/uaq-free-zone',
    highlights: ['Transparent government billing', 'Accessible startup tiers', 'Direct northern highway access (E11 / E311)']
  },

  /* =========================================================================
     RAS AL KHAIMAH FREE ZONES
     ========================================================================= */
  {
    id: 'rakez',
    name: 'Ras Al Khaimah Economic Zone (RAKEZ)',
    shortName: 'RAKEZ',
    emirate: 'Ras Al Khaimah',
    overview: 'One of the UAE’s largest integrated economic powerhouses, consolidating RAK FTZ and RAKIA, hosting over 15,000 businesses across industrial, commercial, and academic sectors.',
    industryFocus: 'Heavy & Light Manufacturing, Bulk Trading, Academic, Media & Logistics',
    activities: [
      'Manufacturing & Industrial',
      'Trading & General Trading',
      'Logistics, Warehousing & Supply Chain',
      'Professional Services & Consultancy',
      'Education & Training',
      'E-Commerce & Digital Retail'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Industrial Land Plots', 'Dedicated Executive Office', 'Flexi-Desk / Coworking'],
    licenceTypes: ['Industrial Licence', 'Commercial Licence', 'General Trading', 'Educational Licence', 'Media Licence', 'Services Licence'],
    authority: 'RAKEZ Authority',
    officialUrl: 'https://www.rakez.com/',
    brightlinkPath: '/business-setup/free-zone/rak-free-zone',
    highlights: ['Saqr Port bulk-handling maritime access', 'Dedicated Academic and Industrial Zones', 'Substantial operational cost savings']
  },

  /* =========================================================================
     FUJAIRAH FREE ZONES
     ========================================================================= */
  {
    id: 'fujairah-fz',
    name: 'Fujairah Free Zone (FFZA)',
    shortName: 'Fujairah Free Zone',
    emirate: 'Fujairah',
    overview: 'The UAE’s premier eastern seaboard maritime and logistics gateway, bypassing the Strait of Hormuz with direct access to the Indian Ocean and global shipping lanes.',
    industryFocus: 'Maritime Bunkering, Oil & Gas Logistics, Mineral Processing & Global Trade',
    activities: [
      'Maritime, Shipping & Aviation',
      'Logistics, Warehousing & Supply Chain',
      'Commodities & Precious Metals',
      'Manufacturing & Industrial',
      'Trading & General Trading'
    ],
    facilities: ['Warehousing / Industrial Storage', 'Industrial Land Plots', 'Dedicated Executive Office'],
    licenceTypes: ['Warehousing Licence', 'Trading Licence', 'Industrial Licence', 'Service Licence'],
    authority: 'Fujairah Free Zone Authority (FFZA)',
    officialUrl: 'https://www.fujairahfreezone.com/',
    brightlinkPath: '/business-setup/free-zone/fujairah-free-zone',
    highlights: ['World’s 3rd largest maritime bunkering hub', 'Direct Indian Ocean maritime access', 'Bonded port facilities']
  },
  {
    id: 'creative-city',
    name: 'Creative City Fujairah',
    shortName: 'Creative City',
    emirate: 'Fujairah',
    overview: 'Dedicated creative, media, and consulting hub known for streamlined, remote-friendly company setups catering to digital nomads, freelancers, and creative agencies.',
    industryFocus: 'Media Production, Creative Design, Marketing, Events & Online Training',
    activities: [
      'Media, Marketing & Publishing',
      'Professional Services & Consultancy',
      'Education & Training'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Commercial Media Licence', 'Professional Service Licence', 'Freelance Permit'],
    authority: 'Creative City Authority',
    officialUrl: 'https://www.creativecity.ae/',
    brightlinkPath: '/business-setup/free-zone/fujairah-free-zone',
    highlights: ['Remote incorporation workflow', 'Affordable freelance packages', 'No mandatory audit for basic renewals']
  },
  {
    id: 'ifza',
    name: 'International Free Zone Authority (IFZA)',
    shortName: 'IFZA',
    emirate: 'Dubai / Fujairah Partnership',
    overview: 'Dynamic corporate ecosystem offering multi-activity licensing, modern coworking facilities, and rapid digital document execution for international founders.',
    industryFocus: 'General Commerce, Consulting, E-Commerce, Professional Services & IT',
    activities: [
      'Trading & General Trading',
      'Professional Services & Consultancy',
      'E-Commerce & Digital Retail',
      'Technology, Software & AI'
    ],
    facilities: ['Flexi-Desk / Coworking', 'Dedicated Executive Office'],
    licenceTypes: ['Commercial Licence', 'Professional Licence', 'Industrial Licence', 'Branch of Foreign Entity'],
    authority: 'IFZA Authority (operating in partnership with Dubai Silicon Oasis / DIEZ)',
    officialUrl: 'https://www.ifza.com/',
    brightlinkPath: '/business-setup/free-zone/fujairah-free-zone',
    highlights: ['Modern Dtec partnership footprint', 'Agile digital execution', 'Multi-activity consolidation on one licence']
  }
];
