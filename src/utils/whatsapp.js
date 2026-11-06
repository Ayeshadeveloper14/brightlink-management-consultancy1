/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Brightlink Typing & Legal Consulting - Automated WhatsApp Message Engine
 * Generates service-specific, context-aware, URL-encoded WhatsApp messages across all 5 supported languages:
 * English (en), Arabic (ar), Chinese (zh), French (fr), German (de).
 */

import { MASTER_DICTIONARIES } from '../translations/masterDictionary.js';

export const WHATSAPP_PHONE = '971566556645';

/**
 * Service directory with localized titles and service categories
 */
export const SERVICES_CONFIG = {
  // --- Visa Categories ---
  'golden-visa': {
    slugs: ['golden-visa', '10-year-golden-visa', 'golden'],
    names: {
      en: '10-Year UAE Golden Visa',
      ar: 'الإقامة الذهبية في الإمارات (10 سنوات)',
      zh: '10年阿联酋黄金签证',
      fr: 'Golden Visa 10 ans aux EAU',
      de: '10-Jahres Golden Visa für die VAE'
    }
  },
  'family-visa': {
    slugs: ['family-visa', 'family-sponsorship', 'family'],
    names: {
      en: 'Family Visa Sponsorship',
      ar: 'تأشيرة إقامة العائلة والأسرة',
      zh: '家庭成员居留担保签证',
      fr: 'Parrainage visa familial',
      de: 'Familienvisum & Angehörigen-Sponsoring'
    }
  },
  'investor-visa': {
    slugs: ['investor-visa', 'partner-visa', 'investor'],
    names: {
      en: 'Partner & Investor Visa',
      ar: 'تأشيرة المستثمر والشريك التجاري',
      zh: '合伙人与投资者签证',
      fr: 'Visa investisseur et partenaire commercial',
      de: 'Investoren- und Partnervisum'
    }
  },
  'property-visa': {
    slugs: ['property-visa', 'real-estate-visa', 'property'],
    names: {
      en: 'Property Investor Visa',
      ar: 'تأشيرة المستثمر العقاري',
      zh: '房产投资居留签证',
      fr: 'Visa investisseur immobilier',
      de: 'Immobilien-Investorenvisum'
    }
  },
  'tourist-visa': {
    slugs: ['tourist-visa', 'visit-visa', 'tourist'],
    names: {
      en: 'Tourist & Visit Visa',
      ar: 'تأشيرة السياحة والزيارة',
      zh: '阿联酋旅游与访问签证',
      fr: 'Visa de tourisme et visite aux EAU',
      de: 'Touristen- und Besuchsvisum für die VAE'
    }
  },
  'virtual-work-visa': {
    slugs: ['virtual-work-visa', 'remote-work-visa', 'digital-nomad'],
    names: {
      en: 'Virtual Work / Remote Work Visa',
      ar: 'تأشيرة العمل الافتراضي عن بُعد',
      zh: '远程办公/数字游民签证',
      fr: 'Visa de travail virtuel à distance',
      de: 'Visum für Remote-Arbeit / Digital Nomad'
    }
  },
  'maid-visa': {
    slugs: ['maid-visa', 'domestic-worker-visa', 'domestic-worker', 'maid'],
    names: {
      en: 'Domestic Worker & Maid Visa',
      ar: 'تأشيرة العمالة المساعدة والخدم',
      zh: '家政与女佣居留签证',
      fr: 'Visa employé de maison / aide ménagère',
      de: 'Visum für Hausangestellte & Haushaltshilfe'
    }
  },
  'newborn-visa': {
    slugs: ['newborn-visa', 'baby-visa', 'newborn'],
    names: {
      en: 'Newborn Baby Residence Visa',
      ar: 'إقامة المواليد الجدد في الإمارات',
      zh: '阿联酋新生儿居留签证',
      fr: 'Visa de résidence pour nouveau-né',
      de: 'Aufenthaltsvisum für Neugeborene'
    }
  },
  'visa-validity-checker': {
    slugs: ['visa-check', 'visa-validity-checker', 'status-check'],
    names: {
      en: 'UAE Visa Validity & Fine Verification',
      ar: 'فحص صلاحية التأشيرة والاستعلام عن الغرامات',
      zh: '阿联酋签证有效期核实与逾期罚款查询',
      fr: 'Vérification de validité de visa et amendes EAU',
      de: 'Prüfung der Visagültigkeit und Überziehungsstrafen'
    }
  },
  'calculator': {
    slugs: ['calculator', 'visa-calculator', 'service-calculator'],
    names: {
      en: 'Visa Fee Calculation & Quote Estimate',
      ar: 'حاسبة وتكلفة رسوم التأشيرات والخدمات الحكومية',
      zh: '签证规费核算与报价咨询',
      fr: 'Calcul des frais de visa et devis',
      de: 'Berechnung der Visagebühren & Kostenvoranschlag'
    }
  },
  'visa': {
    slugs: ['visa', 'all-visas'],
    names: {
      en: 'UAE Residency & Visit Visa Services',
      ar: 'خدمات تأشيرات الإقامة والزيارة في الإمارات',
      zh: '阿联酋各类居留与入境签证服务',
      fr: 'Services de visas de résidence et visite aux EAU',
      de: 'Visadienste für Aufenthalt und Einreise in die VAE'
    }
  },

  // --- Government & Medical Centers ---
  'emirates-id': {
    slugs: ['emirates-id', 'icp-emirates-id'],
    names: {
      en: 'Emirates ID Typing & Biometrics Services',
      ar: 'خدمات طباعة وبصمة الهوية الإماراتية (ICP)',
      zh: '阿联酋身份证 (Emirates ID) 打字与录指纹服务',
      fr: 'Services de carte d\'identité Emirates ID (ICP)',
      de: 'Emirates ID-Beantragung & Biometrie-Dienste'
    }
  },
  'medical-finder': {
    slugs: ['medical-finder', 'medical-visa', 'medical-fitness'],
    names: {
      en: 'VIP Medical Fitness & Health Screening',
      ar: 'الفحص الطبي للإقامة والمراكز الطبية VIP',
      zh: 'VIP快捷居留体检与健康中心预约',
      fr: 'Visite médicale d\'aptitude VIP pour résidence',
      de: 'VIP Medical Fitness Untersuchung für Visum'
    }
  },
  'passport-services': {
    slugs: ['passport-services', 'consular-services', 'bls-passport'],
    names: {
      en: 'Passport Renewal & Consular Services',
      ar: 'خدمات تجديد جوازات السفر والقنصليات (BLS)',
      zh: '各国领事馆与护照更新代办服务',
      fr: 'Renouvellement de passeport et services consulaires',
      de: 'Passverlängerung & Konsulardienste'
    }
  },
  'amer-center': {
    slugs: ['amer-center', 'amer-services'],
    names: {
      en: 'Amer Center GDRFA Government Services',
      ar: 'خدمات مركز آمر (إقامة دبي GDRFA)',
      zh: 'Amer中心迪拜移民局政府业务办理',
      fr: 'Services officiels du centre Amer (GDRFA Dubaï)',
      de: 'Amer Center Regierungsdienste (GDRFA Dubai)'
    }
  },
  'tasheel': {
    slugs: ['tasheel', 'tasheel-services', 'mohre'],
    names: {
      en: 'Tasheel MOHRE Labor & Work Permit Services',
      ar: 'خدمات مركز تسهيل (تصاريح العمل وعقود وزارة الموارد البشرية)',
      zh: 'Tasheel劳工部工作许可与劳动合同服务',
      fr: 'Services pour l\'emploi Tasheel (MOHRE)',
      de: 'Tasheel Arbeitserlaubnis & MOHRE-Arbeitsverträge'
    }
  },
  'tawjeeh': {
    slugs: ['tawjeeh', 'tawjeeh-services'],
    names: {
      en: 'Tawjeeh Labor Awareness & Training',
      ar: 'خدمات مركز توجيه للتوعية بالحقوق والواجبات العمالية',
      zh: 'Tawjeeh劳工权益培训与指引服务',
      fr: 'Services d\'orientation et formation ouvrière Tawjeeh',
      de: 'Tawjeeh Arbeitsrechtsaufklärung & Orientierung'
    }
  },
  'pro-services': {
    slugs: ['pro-services', 'corporate-pro'],
    names: {
      en: 'Corporate PRO & Government Liaison Services',
      ar: 'خدمات العلاقات العامة والتعقيب الحكومي للشركات (PRO)',
      zh: '企业PRO与政府公关代办外包服务',
      fr: 'Services PRO d\'entreprise et démarches ministérielles',
      de: 'Corporate PRO & Behördenabwicklung für Unternehmen'
    }
  },

  // --- Legal, Attestation & Property ---
  'document-attestation': {
    slugs: ['attestation', 'document-attestation', 'mofa-attestation'],
    names: {
      en: 'Document Attestation (MOFA & Embassies)',
      ar: 'تصديق الشهادات والوثائق (وزارة الخارجية والسفارات)',
      zh: '文件公证双认证与阿联酋外交部 (MOFA) 认证',
      fr: 'Attestation et légalisation de documents (MOFA)',
      de: 'Dokumenten- und Urkundenbeglaubigung (MOFA)'
    }
  },
  'legal-translation': {
    slugs: ['legal-translation', 'translation'],
    names: {
      en: 'Ministry of Justice Certified Legal Translation',
      ar: 'الترجمة القانونية المعتمدة لدى وزارة العدل',
      zh: '阿联酋司法部认证法律官方翻译',
      fr: 'Traduction juridique assermentée par le Ministère de la Justice',
      de: 'Beglaubigte juristische Übersetzung (Justizministerium)'
    }
  },
  'notary-services': {
    slugs: ['notary-services', 'notary-public'],
    names: {
      en: 'Notary Public & Power of Attorney Services',
      ar: 'خدمات الكاتب العدل والوكالات القانونية',
      zh: '公证处公证与授权委托书 (POA) 认证',
      fr: 'Services de notaire public et procurations (POA)',
      de: 'Notarielle Beglaubigungen & Vollmachten (POA)'
    }
  },
  'wills-testament': {
    slugs: ['wills-testament', 'wills'],
    names: {
      en: 'DIFC & Dubai Courts Wills & Estate Registration',
      ar: 'تسجيل الوصايا والتركات في محاكم دبي وسوق دبي المالي',
      zh: 'DIFC及迪拜法院遗嘱与遗产信托登记',
      fr: 'Enregistrement de testament (DIFC / Tribunaux de Dubaï)',
      de: 'Registrierung von Testamenten (DIFC & Dubai Courts)'
    }
  },
  'dld-trustee': {
    slugs: ['dld-trustee', 'real-estate-trustee'],
    names: {
      en: 'Dubai Land Department (DLD) Real Estate Trustee',
      ar: 'خدمات أمين التسجيل العقاري (دائرة الأراضي والأملاك)',
      zh: '迪拜土地局 (DLD) 房产注册受托人服务',
      fr: 'Services fiduciaires du Dubai Land Department (DLD)',
      de: 'DLD-Immobilientreuhänderdienste (Dubai Land Department)'
    }
  },
  'rera-license': {
    slugs: ['rera-license', 'rera'],
    names: {
      en: 'RERA Real Estate Broker License & Registration',
      ar: 'رخصة الوساطة العقارية المعتمدة من ريرا (RERA)',
      zh: 'RERA迪拜房地产经纪执照与考试注册',
      fr: 'Licence de courtage immobilier RERA',
      de: 'RERA-Immobilienmaklerlizenz & Zertifizierung'
    }
  },
  'property-revaluation': {
    slugs: ['property-revaluation', 'valuation'],
    names: {
      en: 'Dubai Property Revaluation for Golden Visa',
      ar: 'إعادة التقييم العقاري للحصول على الإقامة الذهبية',
      zh: '迪拜黄金签证官方房产重新评估',
      fr: 'Réévaluation immobilière certifiée pour Golden Visa',
      de: 'Immobilienneubewertung für das Golden Visa'
    }
  },
  'driver-license': {
    slugs: ['driver-license', 'driving-license'],
    names: {
      en: 'UAE Driver\'s License Conversion & RTA Assistance',
      ar: 'استبدال واستخراج رخصة القيادة في الإمارات (هيئة الطرق)',
      zh: '阿联酋驾照直接换发与RTA交通局代办',
      fr: 'Conversion de permis de conduire aux EAU (RTA)',
      de: 'Umschreibung des Führerscheins in den VAE (RTA)'
    }
  },
  'iloe-insurance': {
    slugs: ['iloe-insurance', 'iloe'],
    names: {
      en: 'ILOE Unemployment Insurance Registration',
      ar: 'التسجيل في نظام التأمين ضد التعطل عن العمل (ILOE)',
      zh: '阿联酋失业强制保险 (ILOE) 申报注册',
      fr: 'Souscription à l\'assurance chômage obligatoire ILOE',
      de: 'Anmeldung zur ILOE-Arbeitslosenversicherung'
    }
  },
  'product-registration': {
    slugs: ['product-registration', 'montaji'],
    names: {
      en: 'Dubai Municipality Product Registration (Montaji)',
      ar: 'تسجيل المنتجات الاستهلاكية لدى بلدية دبي (منتجي)',
      zh: '迪拜市政厅商品与消费品注册备案 (Montaji)',
      fr: 'Enregistrement de produits auprès de la municipalité de Dubaï',
      de: 'Produktregistrierung bei der Stadtverwaltung Dubai (Montaji)'
    }
  },

  // --- Business Setup & Free Zones ---
  'business-setup': {
    slugs: ['business-setup', 'company-formation'],
    names: {
      en: 'UAE Business Setup & Trade Licensing',
      ar: 'تأسيس الشركات وإصدار الرخص التجارية في الإمارات',
      zh: '阿联酋企业注册与营业执照申领',
      fr: 'Création d\'entreprise et licence commerciale aux EAU',
      de: 'Firmengründung und Handelslizenz in den VAE'
    }
  },
  'llc-company': {
    slugs: ['llc-company', 'mainland-llc'],
    names: {
      en: 'Dubai Mainland LLC Company Formation',
      ar: 'تأسيس شركة ذات مسؤولية محدودة (LLC) في البر الرئيسي بدبي',
      zh: '迪拜本土Mainland LLC有限责任公司设立',
      fr: 'Création de société Mainland LLC à Dubaï',
      de: 'Gründung einer Mainland LLC in Dubai'
    }
  },
  'professional-license': {
    slugs: ['professional-license'],
    names: {
      en: 'Professional Trade License Setup',
      ar: 'تأسيس وإصدار الرخصة المهنية 100% ملكية',
      zh: '阿联酋独资专业执照 (Professional License) 设立',
      fr: 'Création d\'entreprise sous licence professionnelle',
      de: 'Einrichtung einer freiberuflichen/professionellen Lizenz'
    }
  },
  'branch-rep-office': {
    slugs: ['branch-rep-office', 'branch-office'],
    names: {
      en: 'Branch or Representative Office Setup',
      ar: 'تأسيس فرع شركة أجنبية أو مكتب تمثيلي في دبي',
      zh: '外国企业分公司或代表处设立',
      fr: 'Implantation d\'une succursale ou bureau de représentation',
      de: 'Gründung einer Zweigniederlassung oder Repräsentanz'
    }
  },
  'all-free-zones': {
    slugs: ['all-free-zones', 'free-zones'],
    names: {
      en: 'UAE Free Zones Consultation & License Comparison',
      ar: 'مقارنة واختيار المناطق الحرة في الإمارات',
      zh: '阿联酋全境自由贸易区选择与执照对比',
      fr: 'Comparatif et conseil sur les zones franches des EAU',
      de: 'Vergleich und Beratung zu VAE-Freihandelszonen'
    }
  },
  'dubai-free-zone': {
    slugs: ['dubai-free-zone', 'free-zone-dubai'],
    names: {
      en: 'Dubai Free Zone Business Setup',
      ar: 'تأسيس شركة في المناطق الحرة بإمارة دبي (IFZA, DAFZA, DMCC)',
      zh: '迪拜自贸区企业注册设立 (IFZA, DAFZA, DMCC)',
      fr: 'Création de société en zone franche à Dubaï',
      de: 'Firmengründung in einer Freihandelszone in Dubai'
    }
  },
  'abu-dhabi-free-zone': {
    slugs: ['abu-dhabi-free-zone', 'free-zone-abu-dhabi'],
    names: {
      en: 'Abu Dhabi Free Zone Business Setup',
      ar: 'تأسيس شركة في المناطق الحرة بأبوظبي (ADGM, Kezad)',
      zh: '阿布扎比自贸区企业注册设立 (ADGM, Kezad)',
      fr: 'Création de société en zone franche à Abu Dhabi',
      de: 'Firmengründung in einer Freihandelszone in Abu Dhabi'
    }
  },
  'sharjah-free-zone': {
    slugs: ['sharjah-free-zone', 'free-zone-sharjah'],
    names: {
      en: 'Sharjah Free Zone Business Setup (SHAMS / SAIF)',
      ar: 'تأسيس شركة في المناطق الحرة بالشارقة (شمس / سيف زون)',
      zh: '沙迦自贸区企业注册设立 (SHAMS / SAIF)',
      fr: 'Création d\'entreprise en zone franche de Sharjah',
      de: 'Firmengründung in einer Freihandelszone in Schardscha'
    }
  },
  'ajman-free-zone': {
    slugs: ['ajman-free-zone', 'free-zone-ajman'],
    names: {
      en: 'Ajman Free Zone Business Setup (AFZ)',
      ar: 'تأسيس شركة في منطقة عجمان الحرة',
      zh: '阿治曼自贸区企业设立 (AFZ)',
      fr: 'Création d\'entreprise en zone franche d\'Ajman (AFZ)',
      de: 'Firmengründung in der Freihandelszone Ajman (AFZ)'
    }
  },
  'fujairah-free-zone': {
    slugs: ['fujairah-free-zone', 'free-zone-fujairah'],
    names: {
      en: 'Fujairah Free Zone & Creative City Setup',
      ar: 'تأسيس شركة في منطقة الفجيرة الإبداعية الحرة',
      zh: '富查伊拉创意城自贸区企业设立',
      fr: 'Création d\'entreprise en zone franche de Fujairah',
      de: 'Firmengründung in der Freihandelszone Fujairah'
    }
  },
  'rak-free-zone': {
    slugs: ['rak-free-zone', 'free-zone-rak'],
    names: {
      en: 'RAK Free Zone Business Setup (RAKEZ)',
      ar: 'تأسيس شركة في هيئة مناطق رأس الخيمة الاقتصادية (راكز)',
      zh: '拉斯海马RAKEZ经济特区企业注册设立',
      fr: 'Création d\'entreprise en zone franche de Ras Al Khaimah (RAKEZ)',
      de: 'Firmengründung in der Freihandelszone Ras Al Khaimah (RAKEZ)'
    }
  },
  'uaq-free-zone': {
    slugs: ['uaq-free-zone', 'free-zone-uaq'],
    names: {
      en: 'Umm Al Quwain Free Trade Zone (UAQ FTZ)',
      ar: 'تأسيس شركة في منطقة أم القيوين الحرة',
      zh: '乌姆盖万自贸区低成本企业注册 (UAQ FTZ)',
      fr: 'Création d\'entreprise en zone franche d\'Oumm al Qaïwaïn',
      de: 'Firmengründung in der Freihandelszone Umm Al Quwain'
    }
  },
  'rak-offshore': {
    slugs: ['rak-offshore', 'rak-icc'],
    names: {
      en: 'RAK ICC Offshore Company Formation',
      ar: 'تأسيس شركة أوفشور في رأس الخيمة (RAK ICC)',
      zh: '拉斯海马RAK ICC国际离岸公司设立',
      fr: 'Création de société offshore RAK ICC',
      de: 'RAK ICC Offshore-Unternehmensgründung'
    }
  },
  'jafza-offshore': {
    slugs: ['jafza-offshore'],
    names: {
      en: 'JAFZA Offshore Company Formation (Dubai Property Holding)',
      ar: 'تأسيس شركة أوفشور في جافزا دبي لتملك العقارات',
      zh: '迪拜JAFZA离岸公司设立 (允许持有迪拜不动产)',
      fr: 'Création de société offshore JAFZA à Dubaï',
      de: 'JAFZA Offshore-Firmengründung (Immobilieneigentum in Dubai)'
    }
  },
  'ajman-offshore': {
    slugs: ['ajman-offshore'],
    names: {
      en: 'Ajman Offshore Company Formation',
      ar: 'تأسيس شركة خارجية أوفشور في عجمان',
      zh: '阿治曼离岸公司快速设立',
      fr: 'Création de société offshore à Ajman',
      de: 'Ajman Offshore-Unternehmensgründung'
    }
  }
};

/**
 * Message templates localized in all 10 supported languages
 */
const MESSAGE_TEMPLATES = {
  // Service-specific inquiry templates
  service: {
    en: (serviceName) =>
      `Hello Brightlink, I would like to inquire about ${serviceName} services. Could you please guide me on the requirements, process, and fees?`,
    ar: (serviceName) =>
      `مرحباً برايت لينك، أود الاستفسار عن خدمات ${serviceName}. هل يمكنكم تزويدي بالمتطلبات والخطوات والرسوم؟`,
    zh: (serviceName) =>
      `您好 Brightlink，我想咨询关于${serviceName}的相关服务。请问可以告知我办理要求、办理流程及官方费用吗？`,
    fr: (serviceName) =>
      `Bonjour Brightlink, je souhaite me renseigner sur les services de ${serviceName}. Pourriez-vous m'indiquer les conditions requises, la procédure et les tarifs ?`,
    de: (serviceName) =>
      `Hallo Brightlink, ich möchte mich über die Dienstleistungen für ${serviceName} informieren. Könnten Sie mir bitte die Voraussetzungen, den Ablauf und die Gebühren mitteilen?`,
    es: (serviceName) =>
      `Hola Brightlink, quisiera consultar sobre los servicios de ${serviceName}. ¿Podrían informarme sobre los requisitos, trámites y tarifas?`,
    pt: (serviceName) =>
      `Olá Brightlink, gostaria de saber mais sobre os serviços de ${serviceName}. Poderiam me informar sobre os requisitos, prazos e valores?`,
    ru: (serviceName) =>
      `Здравствуйте, Brightlink! Я хочу узнать подробнее об услуге ${serviceName}. Подскажите, пожалуйста, требования, порядок оформления и стоимость.`,
    tr: (serviceName) =>
      `Merhaba Brightlink, ${serviceName} hizmeti hakkında bilgi almak istiyorum. Gereksinimler, süreç ve ücretler hakkında yardımcı olabilir misiniz?`,
    bn: (serviceName) =>
      `নমস্কার / হ্যালো ব্রাইটলিংক, আমি ${serviceName} সেবা সম্পর্কে জানতে চাই। প্রয়োজনীয় ডকুমেন্টস, প্রক্রিয়া ও ফি সম্পর্কে বিস্তারিত জানাবেন কি?`
  },

  // General inquiry templates
  general: {
    en: () =>
      `Hello Brightlink, I would like to inquire about your UAE visa and typing services. Could you please assist me?`,
    ar: () =>
      `مرحباً برايت لينك، أود الاستفسار عن خدمات التأشيرات والطباعة الحكومية في الإمارات. هل يمكنكم مساعدتي؟`,
    zh: () =>
      `您好 Brightlink，我想咨询关于阿联酋签证办理与政府打字服务。请问可以协助我吗？`,
    fr: () =>
      `Bonjour Brightlink, je souhaite me renseigner sur vos services de visas et démarches administratives aux EAU. Pourriez-vous m'aider ?`,
    de: () =>
      `Hallo Brightlink, ich möchte mich über Ihre Visum- und Behördenservices in den VAE informieren. Könnten Sie mir bitte weiterhelfen?`,
    es: () =>
      `Hola Brightlink, quisiera consultar sobre sus servicios de visados y gestiones gubernamentales en los EAU. ¿Podrían orientarme?`,
    pt: () =>
      `Olá Brightlink, gostaria de informações sobre os serviços de vistos e assessoria governamental nos EAU. Poderiam me ajudar?`,
    ru: () =>
      `Здравствуйте, Brightlink! Я хочу проконсультироваться по визовым и государственным услугам в ОАЭ. Помогите, пожалуйста.`,
    tr: () =>
      `Merhaba Brightlink, BAE vize ve resmi başvuru hizmetleriniz hakkında bilgi almak istiyorum. Yardımcı olabilir misiniz?`,
    bn: () =>
      `নমস্কার / হ্যালো ব্রাইটলিংক, আমি আপনাদের ইউএই ভিসা এবং সরকারি টাইপিং সেবা সম্পর্কে জানতে চাই। আমাকে সহায়তা করতে পারবেন কি?`
  },

  // Consultation booking templates
  consultation: {
    en: (serviceName) =>
      `Hello Brightlink, I would like to book a free consultation regarding ${serviceName}. Please let me know available slots.`,
    ar: (serviceName) =>
      `مرحباً برايت لينك، أود حجز استشارة مجانية بخصوص ${serviceName}. يرجى إفادتي بالمواعيد المتاحة.`,
    zh: (serviceName) =>
      `您好 Brightlink，我想预约关于${serviceName}的免费咨询服务。请问有哪些时间段可供选择？`,
    fr: (serviceName) =>
      `Bonjour Brightlink, je souhaite réserver une consultation gratuite concernant ${serviceName}. Pourriez-vous m'indiquer vos disponibilités ?`,
    de: (serviceName) =>
      `Hallo Brightlink, ich möchte ein kostenloses Beratungsgespräch zu ${serviceName} vereinbaren. Wann haben Sie Zeit dafür?`,
    es: (serviceName) =>
      `Hola Brightlink, quisiera solicitar una consulta gratuita sobre ${serviceName}. Por favor indíquenme su disponibilidad.`,
    pt: (serviceName) =>
      `Olá Brightlink, gostaria de agendar uma consulta gratuita sobre ${serviceName}. Quais horários vocês têm disponíveis?`,
    ru: (serviceName) =>
      `Здравствуйте, Brightlink! Я хочу записаться на бесплатную консультацию по услуге ${serviceName}. Подскажите доступное время.`,
    tr: (serviceName) =>
      `Merhaba Brightlink, ${serviceName} konusunda ücretsiz danışmanlık randevusu almak istiyorum. Uygun saatleri bildirebilir misiniz?`,
    bn: (serviceName) =>
      `নমস্কার / হ্যালো ব্রাইটলিংক, আমি ${serviceName} বিষয়ে একটি বিনামূল্যে পরামর্শ সেবা বুক করতে চাই। অনুগ্রহ করে সময়সূচি জানাবেন।`
  }
};

/**
 * Normalizes language code to one of the 10 supported languages
 */
export const normalizeLanguage = (lang) => {
  if (!lang || typeof lang !== 'string') return 'en';
  const clean = lang.toLowerCase().trim().slice(0, 2);
  if (['en', 'ar', 'zh', 'fr', 'de', 'es', 'pt', 'ru', 'tr', 'bn'].includes(clean)) {
    return clean;
  }
  return 'en';
};

/**
 * Detects currently active language from DOM or current URL
 */
export const getActiveLanguage = () => {
  if (typeof window === 'undefined') return 'en';

  // 1. Check URL pathname prefix
  const pathname = window.location.pathname || '';
  const match = pathname.match(/^\/(en|ar|zh|fr|de|es|pt|ru|tr|bn)(\/|$)/i);
  if (match) {
    return match[1].toLowerCase();
  }

  // 2. Check document element lang attribute
  if (typeof document !== 'undefined' && document.documentElement?.lang) {
    return normalizeLanguage(document.documentElement.lang);
  }

  return 'en';
};

/**
 * Maps a route pathname or raw service string to a service config key
 */
export const resolveServiceKey = (input) => {
  if (!input || typeof input !== 'string') return null;

  const raw = input.toLowerCase().trim();
  // Strip language prefixes and slashes
  const clean = raw.replace(/^\/(en|ar|zh|fr|de|es|pt|ru|tr|bn)\//i, '/').replace(/^\/+|\/+$/g, '');

  // Exact key match
  if (SERVICES_CONFIG[clean]) return clean;

  // Check slugs & identifiers
  for (const [key, cfg] of Object.entries(SERVICES_CONFIG)) {
    if (key === clean) return key;
    if (cfg.slugs && cfg.slugs.some(slug => clean === slug || clean.endsWith('/' + slug) || clean.includes(slug))) {
      return key;
    }
  }

  // Fuzzy keyword matching
  if (clean.includes('golden-visa') || clean.includes('golden')) return 'golden-visa';
  if (clean.includes('family-visa') || clean.includes('family')) return 'family-visa';
  if (clean.includes('investor-visa') || clean.includes('partner-visa')) return 'investor-visa';
  if (clean.includes('property-visa')) return 'property-visa';
  if (clean.includes('tourist-visa') || clean.includes('visit-visa')) return 'tourist-visa';
  if (clean.includes('virtual-work') || clean.includes('remote-work')) return 'virtual-work-visa';
  if (clean.includes('maid-visa') || clean.includes('domestic')) return 'maid-visa';
  if (clean.includes('newborn')) return 'newborn-visa';
  if (clean.includes('emirates-id')) return 'emirates-id';
  if (clean.includes('medical') || clean.includes('fitness')) return 'medical-finder';
  if (clean.includes('passport')) return 'passport-services';
  if (clean.includes('attestation') || clean.includes('mofa')) return 'document-attestation';
  if (clean.includes('legal-translation') || clean.includes('translation')) return 'legal-translation';
  if (clean.includes('notary')) return 'notary-services';
  if (clean.includes('will') || clean.includes('testament')) return 'wills-testament';
  if (clean.includes('dld') || clean.includes('trustee')) return 'dld-trustee';
  if (clean.includes('rera')) return 'rera-license';
  if (clean.includes('revaluation')) return 'property-revaluation';
  if (clean.includes('driver')) return 'driver-license';
  if (clean.includes('iloe')) return 'iloe-insurance';
  if (clean.includes('product-reg') || clean.includes('montaji')) return 'product-registration';
  if (clean.includes('amer')) return 'amer-center';
  if (clean.includes('tasheel')) return 'tasheel';
  if (clean.includes('tawjeeh')) return 'tawjeeh';
  if (clean.includes('pro-service') || clean.includes('pro')) return 'pro-services';
  if (clean.includes('dubai-free-zone')) return 'dubai-free-zone';
  if (clean.includes('abu-dhabi-free-zone')) return 'abu-dhabi-free-zone';
  if (clean.includes('sharjah-free-zone')) return 'sharjah-free-zone';
  if (clean.includes('ajman-free-zone')) return 'ajman-free-zone';
  if (clean.includes('fujairah-free-zone')) return 'fujairah-free-zone';
  if (clean.includes('rak-free-zone')) return 'rak-free-zone';
  if (clean.includes('uaq-free-zone')) return 'uaq-free-zone';
  if (clean.includes('all-free-zones') || clean.includes('free-zone')) return 'all-free-zones';
  if (clean.includes('rak-offshore')) return 'rak-offshore';
  if (clean.includes('jafza-offshore')) return 'jafza-offshore';
  if (clean.includes('ajman-offshore')) return 'ajman-offshore';
  if (clean.includes('offshore')) return 'rak-offshore';
  if (clean.includes('llc')) return 'llc-company';
  if (clean.includes('professional-license')) return 'professional-license';
  if (clean.includes('branch-rep') || clean.includes('branch')) return 'branch-rep-office';
  if (clean.includes('business-setup')) return 'business-setup';
  if (clean.includes('visa-check') || clean.includes('validity')) return 'visa-validity-checker';
  if (clean.includes('calculator')) return 'calculator';

  return null;
};

/**
 * Gets the localized name of a service in the target language
 */
export const getLocalizedServiceName = (serviceKeyOrName, lang = 'en') => {
  const normLang = normalizeLanguage(lang);
  const key = resolveServiceKey(serviceKeyOrName);

  if (key && SERVICES_CONFIG[key]) {
    if (SERVICES_CONFIG[key].names[normLang]) {
      return SERVICES_CONFIG[key].names[normLang];
    }
    const enName = SERVICES_CONFIG[key].names.en;
    if (MASTER_DICTIONARIES?.[normLang]?.[enName]) {
      return MASTER_DICTIONARIES[normLang][enName];
    }
    // Also try matching against key words in dictionary
    for (const dictKey of Object.keys(MASTER_DICTIONARIES?.[normLang] || {})) {
      if (dictKey.toLowerCase() === enName.toLowerCase()) {
        return MASTER_DICTIONARIES[normLang][dictKey];
      }
    }
    return enName;
  }

  // If a raw string was provided that is not a known key, return clean text or dictionary translation
  if (typeof serviceKeyOrName === 'string' && serviceKeyOrName.trim()) {
    const raw = serviceKeyOrName.trim();
    if (MASTER_DICTIONARIES?.[normLang]?.[raw]) {
      return MASTER_DICTIONARIES[normLang][raw];
    }
    return raw;
  }

  const defaultFallbacks = {
    en: 'UAE Visa & Government',
    ar: 'التأشيرات والخدمات الحكومية',
    zh: '阿联酋签证与政府事务',
    fr: 'Visas et démarches administratives aux EAU',
    de: 'Visadienste und Behördenservices in den VAE',
    es: 'Servicios de visados y trámites en EAU',
    pt: 'Serviços de vistos e assessoria nos EAU',
    ru: 'Визовые и государственные услуги в ОАЭ',
    tr: 'BAE Vize ve Resmi Hizmetler',
    bn: 'ইউএই ভিসা এবং সরকারি সেবা'
  };

  return defaultFallbacks[normLang] || defaultFallbacks.en;
};

/**
 * Generates an automatic, polite WhatsApp inquiry message based on service context and language.
 */
export const generateWhatsAppMessage = (serviceContext = null, lang = null, options = {}) => {
  const activeLang = normalizeLanguage(lang || getActiveLanguage());

  // If full custom text was explicitly passed, respect it
  if (options.customText) {
    return options.customText;
  }

  // Determine service key from context or current page URL
  let resolvedKey = resolveServiceKey(serviceContext);

  if (!resolvedKey && typeof window !== 'undefined') {
    resolvedKey = resolveServiceKey(options.pathname || window.location.pathname);
  }

  // If still no key and serviceContext was a custom name string
  const customName = typeof serviceContext === 'string' && serviceContext.length > 2 && !resolvedKey
    ? serviceContext
    : null;

  // Consultation vs standard inquiry
  const isConsultation = options.type === 'consultation';

  if (resolvedKey || customName) {
    const serviceTitle = resolvedKey 
      ? getLocalizedServiceName(resolvedKey, activeLang)
      : customName;

    const templateFn = isConsultation
      ? MESSAGE_TEMPLATES.consultation[activeLang] || MESSAGE_TEMPLATES.consultation.en
      : MESSAGE_TEMPLATES.service[activeLang] || MESSAGE_TEMPLATES.service.en;

    let msg = templateFn(serviceTitle);

    // If additional parameters were passed (e.g. emirate, package)
    if (options.extraDetails) {
      msg += `\n(${options.extraDetails})`;
    }

    return msg;
  }

  // Fallback to professional general inquiry
  const generalFn = MESSAGE_TEMPLATES.general[activeLang] || MESSAGE_TEMPLATES.general.en;
  return generalFn();
};

/**
 * Generates a complete, properly URL-encoded WhatsApp web link.
 */
export const formatWhatsAppLink = (phone = WHATSAPP_PHONE, text = '') => {
  const cleanPhone = (phone || WHATSAPP_PHONE).replace(/[^0-9]/g, '');
  if (!text) {
    return `https://wa.me/${cleanPhone}`;
  }
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
};

/**
 * Generates the full WhatsApp URL with a prefilled message for a given service and language.
 */
export const getWhatsAppUrl = (serviceContext = null, lang = null, options = {}) => {
  const message = generateWhatsAppMessage(serviceContext, lang, options);
  return formatWhatsAppLink(WHATSAPP_PHONE, message);
};

/**
 * Safely opens WhatsApp in a new tab with the appropriate pre-filled message.
 */
export const openWhatsApp = (serviceContext = null, lang = null, options = {}) => {
  if (typeof window === 'undefined') return;
  const url = getWhatsAppUrl(serviceContext, lang, options);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Global Interceptor & DOM Attacher
 * Intercepts any click on links targeting wa.me/971566556645 or calls to window.open.
 * If the link does not have an explicit query text, or has an un-localized placeholder,
 * it automatically populates the service-specific, localized message!
 */
export const initWhatsAppInterceptor = () => {
  if (typeof window === 'undefined') return;

  // Avoid duplicate registration
  if (window.__brightlink_wa_interceptor_active) return;
  window.__brightlink_wa_interceptor_active = true;

  // Helper to extract service identifier from an English query or DOM context
  const extractServiceFromUrlOrDom = (url, anchorEl = null) => {
    let service = null;

    // 1. Check anchor or card data attributes
    if (anchorEl) {
      service = anchorEl.getAttribute('data-service') ||
        anchorEl.closest('[data-service]')?.getAttribute('data-service') ||
        anchorEl.closest('[data-card-service]')?.getAttribute('data-card-service');
      
      if (!service) {
        // Try nearby heading in card/section
        const cardHeading = anchorEl.closest('.group, article, .rounded-2xl, .rounded-xl, section')?.querySelector('h2, h3, h4')?.textContent;
        if (cardHeading && cardHeading.trim().length > 3 && cardHeading.length < 60) {
          service = cardHeading.trim();
        }
      }
    }

    // 2. Check query param in url
    if (!service && typeof url === 'string' && url.includes('text=')) {
      try {
        const u = new URL(url);
        const textParam = u.searchParams.get('text') || '';
        const resolved = resolveServiceKey(textParam);
        if (resolved) {
          service = resolved;
        }
      } catch (e) {}
    }

    // 3. Fallback to current window pathname
    if (!service && typeof window !== 'undefined') {
      service = resolveServiceKey(window.location.pathname);
    }

    return service;
  };

  // 1. Intercept window.open calls targeting WhatsApp
  try {
    const originalOpen = window.open;
    window.open = function(url, target, features) {
      if (typeof url === 'string' && url.includes('wa.me/971566556645')) {
        const currentLang = getActiveLanguage();
        
        // If the URL has NO ?text=, inject the contextual message automatically
        if (!url.includes('text=') || url.endsWith('text=')) {
          const service = extractServiceFromUrlOrDom(url);
          const contextualUrl = getWhatsAppUrl(service, currentLang);
          return originalOpen.call(window, contextualUrl, target || '_blank', features);
        } else if (currentLang !== 'en') {
          // If URL has text but in English and user is browsing in non-English
          try {
            const u = new URL(url);
            const textParam = u.searchParams.get('text') || '';
            // If the text is an English inquiry starting with Hello/Hi
            if (textParam.startsWith('Hello') || textParam.startsWith('Hi')) {
              const service = extractServiceFromUrlOrDom(url);
              const localizedUrl = getWhatsAppUrl(service, currentLang);
              return originalOpen.call(window, localizedUrl, target || '_blank', features);
            }
          } catch (e) {}
        }
      }
      return originalOpen.call(window, url, target, features);
    };
  } catch (err) {
    // Non-fatal if window.open wrapping is restricted
  }

  // 2. Document-wide click listener for <a> tags targeting WhatsApp
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href*="wa.me/971566556645"], a[href*="wa.me/"]');
      if (!anchor) return;

      const rawHref = anchor.getAttribute('href') || '';
      const currentLang = getActiveLanguage();
      
      // If href is bare (no ?text=) or has empty text
      if (!rawHref.includes('text=') || rawHref.endsWith('text=')) {
        const service = extractServiceFromUrlOrDom(rawHref, anchor);
        const contextualUrl = getWhatsAppUrl(service, currentLang);
        anchor.setAttribute('href', contextualUrl);
      } else if (currentLang !== 'en') {
        // If text is present but in English and active language is non-English
        try {
          const u = new URL(rawHref);
          const textParam = u.searchParams.get('text') || '';
          if (textParam.startsWith('Hello') || textParam.startsWith('Hi')) {
            const service = extractServiceFromUrlOrDom(rawHref, anchor);
            const localizedUrl = getWhatsAppUrl(service, currentLang);
            anchor.setAttribute('href', localizedUrl);
          }
        } catch (err) {}
      }
    }, true); // Capture phase ensures href is updated before browser initiates navigation
  }
};
