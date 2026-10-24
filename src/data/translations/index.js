import { GLOBAL_TRANSLATIONS } from './globalTranslations.js';
import { FREE_ZONE_TRANSLATIONS } from './freeZoneTranslations.js';
import { BUSINESS_TRANSLATIONS } from './businessTranslations.js';
import { VISA_TRANSLATIONS } from './visaTranslations.js';
import { SERVICE_TRANSLATIONS } from './serviceTranslations.js';
import { HOME_TRANSLATIONS } from './homeTranslations.js';

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', flag: '🇦🇪' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl', flag: '🇵🇰' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr', flag: '🇨🇳' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', flag: '🇩🇪' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr', flag: '🇷🇺' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', flag: '🇹🇷' }
];

// Helper to assemble full translation dictionary for each language
const compileTranslations = () => {
  const result = {};
  const modules = [
    GLOBAL_TRANSLATIONS,
    FREE_ZONE_TRANSLATIONS,
    BUSINESS_TRANSLATIONS,
    VISA_TRANSLATIONS,
    SERVICE_TRANSLATIONS,
    HOME_TRANSLATIONS
  ];

  LANGUAGES.forEach(({ code }) => {
    result[code] = {};
    modules.forEach(mod => {
      if (mod[code]) {
        Object.assign(result[code], mod[code]);
      }
    });
  });

  return result;
};

export const TRANSLATIONS = compileTranslations();

// Compiles a comprehensive phrase-to-translation map for DOM & text node translation
const compilePhraseDictionary = () => {
  const dict = {};

  LANGUAGES.forEach(({ code }) => {
    dict[code] = new Map();
  });

  // Extract every English key and value across all translation modules
  const enTranslations = TRANSLATIONS.en || {};

  Object.keys(enTranslations).forEach(key => {
    const englishValue = enTranslations[key];

    LANGUAGES.forEach(({ code }) => {
      if (code === 'en') return;

      const translatedValue = TRANSLATIONS[code]?.[key];
      if (translatedValue) {
        // Map by key if key is meaningful text
        if (key && key.length > 1 && !key.startsWith('nav_') && !key.startsWith('hero_') && !key.startsWith('about_') && !key.startsWith('process_') && !key.startsWith('contact_') && !key.startsWith('faq_') && !key.startsWith('footer_') && !key.startsWith('services_')) {
          dict[code].set(key.trim(), translatedValue.trim());
        }

        // Map by exact English text value
        if (typeof englishValue === 'string' && englishValue.trim()) {
          dict[code].set(englishValue.trim(), translatedValue.trim());
        }
      }
    });
  });

  return dict;
};

export const STATIC_PHRASE_DICTIONARY = compilePhraseDictionary();
