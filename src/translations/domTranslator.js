import { 
  MASTER_ARABIC_DICTIONARY,
  MASTER_CHINESE_DICTIONARY,
  MASTER_FRENCH_DICTIONARY,
  MASTER_GERMAN_DICTIONARY,
  MASTER_SPANISH_DICTIONARY,
  MASTER_PORTUGUESE_DICTIONARY,
  MASTER_RUSSIAN_DICTIONARY,
  MASTER_TURKISH_DICTIONARY,
  MASTER_BENGALI_DICTIONARY 
} from './masterDictionary.js';
import { CHINESE_DICTIONARY, FRENCH_DICTIONARY, GERMAN_DICTIONARY } from './multilingualDictionary.js';
import { STATIC_PHRASE_DICTIONARY, TRANSLATIONS } from '../data/translations/index.js';

// Cache for original English values to allow instant bidirectional restoration
const originalTextMap = new WeakMap();
const originalAttrMap = new WeakMap();

// Detection helpers for non-English scripts
export const isArabicText = (str) =>
  typeof str === 'string' && /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(str);

export const isChineseText = (str) =>
  typeof str === 'string' && /[\u4e00-\u9fa5]/.test(str);

// Primary dictionary lookup table by language code across all 10 languages
const PRIMARY_DICTIONARIES = {
  ar: MASTER_ARABIC_DICTIONARY,
  zh: MASTER_CHINESE_DICTIONARY || CHINESE_DICTIONARY,
  fr: MASTER_FRENCH_DICTIONARY || FRENCH_DICTIONARY,
  de: MASTER_GERMAN_DICTIONARY || GERMAN_DICTIONARY,
  es: MASTER_SPANISH_DICTIONARY,
  pt: MASTER_PORTUGUESE_DICTIONARY,
  ru: MASTER_RUSSIAN_DICTIONARY,
  tr: MASTER_TURKISH_DICTIONARY,
  bn: MASTER_BENGALI_DICTIONARY
};

const SUPPORTED_NON_EN_LANGS = ['ar', 'zh', 'fr', 'de', 'es', 'pt', 'ru', 'tr', 'bn'];

// Normalized lookup maps for case-insensitive / whitespace-tolerant matching
const normalizedDictionaries = {};
const reverseDictionaries = {};
const normalizedReverseDictionaries = {};

SUPPORTED_NON_EN_LANGS.forEach((lang) => {
  normalizedDictionaries[lang] = new Map();
  reverseDictionaries[lang] = new Map();
  normalizedReverseDictionaries[lang] = new Map();
});

// Helper to register an English <-> Translated pair
const registerPair = (lang, englishText, translatedText) => {
  if (
    !lang ||
    !normalizedDictionaries[lang] ||
    !englishText ||
    typeof englishText !== 'string' ||
    !translatedText ||
    typeof translatedText !== 'string'
  ) {
    return;
  }

  const trimmedEn = englishText.trim();
  const trimmedTrans = translatedText.trim();
  if (!trimmedEn || !trimmedTrans) return;

  // Never use internal translation keys (e.g. nav_services, hero_title) as English text
  const isKeyIdentifier = trimmedEn.includes('_') && !trimmedEn.includes(' ');
  if (isKeyIdentifier) return;

  const normEn = trimmedEn.toLowerCase().replace(/\s+/g, ' ');
  const normTrans = trimmedTrans.toLowerCase().replace(/\s+/g, ' ');

  // Forward normalized
  if (!normalizedDictionaries[lang].has(normEn)) {
    normalizedDictionaries[lang].set(normEn, trimmedTrans);
  }

  // Reverse exact and normalized
  if (!reverseDictionaries[lang].has(trimmedTrans)) {
    reverseDictionaries[lang].set(trimmedTrans, trimmedEn);
  }
  if (!normalizedReverseDictionaries[lang].has(normTrans)) {
    normalizedReverseDictionaries[lang].set(normTrans, trimmedEn);
  }
};

// Populate forward and reverse lookup maps across all dictionaries
SUPPORTED_NON_EN_LANGS.forEach((lang) => {
  // 1. Primary dictionary entries
  const primary = PRIMARY_DICTIONARIES[lang] || {};
  for (const [key, val] of Object.entries(primary)) {
    registerPair(lang, key, val);
  }

  // 2. Multilingual supplementary dictionary entries
  if (lang === 'zh') {
    for (const [key, val] of Object.entries(CHINESE_DICTIONARY)) {
      registerPair(lang, key, val);
    }
  } else if (lang === 'fr') {
    for (const [key, val] of Object.entries(FRENCH_DICTIONARY)) {
      registerPair(lang, key, val);
    }
  } else if (lang === 'de') {
    for (const [key, val] of Object.entries(GERMAN_DICTIONARY)) {
      registerPair(lang, key, val);
    }
  }

  // 3. STATIC_PHRASE_DICTIONARY entries
  const staticMap = STATIC_PHRASE_DICTIONARY[lang];
  if (staticMap && staticMap instanceof Map) {
    for (const [key, val] of staticMap.entries()) {
      registerPair(lang, key, val);
    }
  }

  // 4. TRANSLATIONS module entries
  const moduleDict = TRANSLATIONS[lang] || {};
  const enDict = TRANSLATIONS.en || {};
  for (const [key, val] of Object.entries(moduleDict)) {
    const englishVal = enDict[key] || (key && !key.includes('_') ? key : null);
    if (englishVal) {
      registerPair(lang, englishVal, val);
    }
  }
});

/**
 * Cleanly translate a single English string to target language (ar, zh, fr, de).
 */
export const getTranslation = (text, targetLang = 'ar') => {
  if (!text || typeof text !== 'string') return null;
  const trimmed = text.trim();
  if (!trimmed || trimmed.length < 2) return null;
  if (targetLang === 'en') return trimmed;

  const primary = PRIMARY_DICTIONARIES[targetLang] || {};
  const normMap = normalizedDictionaries[targetLang] || new Map();
  const staticMap = STATIC_PHRASE_DICTIONARY[targetLang];

  // 1. Direct exact match in primary dictionary
  if (primary[trimmed]) {
    return primary[trimmed];
  }

  // 2. Static phrase dictionary match
  if (staticMap && staticMap.has(trimmed)) {
    return staticMap.get(trimmed);
  }

  // 3. Normalized match (whitespace & case)
  const norm = trimmed.toLowerCase().replace(/\s+/g, ' ');
  if (normMap.has(norm)) {
    return normMap.get(norm);
  }

  // 4. Match with trailing punctuation stripped (colons, dots, dashes, question marks)
  const trailingPunctuationMatch = trimmed.match(/[:\.\?\!—\-–]+$/);
  if (trailingPunctuationMatch) {
    const punct = trailingPunctuationMatch[0];
    const base = trimmed.slice(0, -punct.length).trim();
    const baseNorm = base.toLowerCase().replace(/\s+/g, ' ');
    const baseTranslated = primary[base] || staticMap?.get(base) || normMap.get(baseNorm);
    if (baseTranslated) {
      if (targetLang === 'ar') {
        const arabicPunct = punct.includes('?') ? '؟' : (punct.includes(':') ? ':' : punct);
        return baseTranslated + (punct.includes(':') ? ' : ' : ' ') + (punct.includes('?') ? '؟' : '');
      } else {
        return baseTranslated + punct;
      }
    }
  }

  // 5. Match with leading bullet or number stripped
  const leadingBulletMatch = trimmed.match(/^([•\-\*]|\d+[\.\)])\s+(.*)$/);
  if (leadingBulletMatch) {
    const prefix = leadingBulletMatch[1];
    const sub = leadingBulletMatch[2].trim();
    const subTranslated = getTranslation(sub, targetLang);
    if (subTranslated) {
      return prefix + ' ' + subTranslated;
    }
  }

  // 6. Parenthesized match, e.g. "Ejari Lease (Residential)"
  const parenMatch = trimmed.match(/^([^\(\)]+)\s*\(([^\(\)]+)\)$/);
  if (parenMatch) {
    const mainText = parenMatch[1].trim();
    const subText = parenMatch[2].trim();
    const mainTrans = getTranslation(mainText, targetLang);
    const subTrans = getTranslation(subText, targetLang);
    if (mainTrans && subTrans) {
      return `${mainTrans} (${subTrans})`;
    } else if (mainTrans) {
      return `${mainTrans} (${subText})`;
    }
  }

  return null;
};

// Backward compatibility alias for Arabic
export const getArabicTranslation = (text) => getTranslation(text, 'ar');

/**
 * Restores original English text from any translated phrase.
 */
export const getEnglishRestoration = (translatedText, lang = null) => {
  if (!translatedText || typeof translatedText !== 'string') return null;
  const trimmed = translatedText.trim();
  if (!trimmed) return null;

  // 1. Exact match in specified lang's reverse dictionary
  if (lang && reverseDictionaries[lang]?.has(trimmed)) {
    return reverseDictionaries[lang].get(trimmed);
  }

  // 2. Exact match in any reverse dictionary
  for (const rMap of Object.values(reverseDictionaries)) {
    if (rMap.has(trimmed)) {
      return rMap.get(trimmed);
    }
  }

  // 3. Normalized match
  const norm = trimmed.toLowerCase().replace(/\s+/g, ' ');
  if (lang && normalizedReverseDictionaries[lang]?.has(norm)) {
    return normalizedReverseDictionaries[lang].get(norm);
  }
  for (const nrMap of Object.values(normalizedReverseDictionaries)) {
    if (nrMap.has(norm)) {
      return nrMap.get(norm);
    }
  }

  // 4. Trailing punctuation stripped
  const trailingPunctMatch = trimmed.match(/[:\.\?\!—\-–؟]+$/);
  if (trailingPunctMatch) {
    const punct = trailingPunctMatch[0];
    const base = trimmed.slice(0, -punct.length).trim();
    const baseEn = getEnglishRestoration(base, lang);
    if (baseEn) {
      const enPunct = punct.includes('؟') ? '?' : punct.trim();
      return baseEn + (enPunct ? enPunct : '');
    }
  }

  // 5. Leading bullet or number stripped
  const bulletMatch = trimmed.match(/^([•\-\*]|\d+[\.\)])\s+(.*)$/);
  if (bulletMatch) {
    const prefix = bulletMatch[1];
    const sub = bulletMatch[2].trim();
    const subEn = getEnglishRestoration(sub, lang);
    if (subEn) {
      return prefix + ' ' + subEn;
    }
  }

  // 6. Parenthesized match
  const parenMatch = trimmed.match(/^([^\(\)]+)\s*\(([^\(\)]+)\)$/);
  if (parenMatch) {
    const mainText = parenMatch[1].trim();
    const subText = parenMatch[2].trim();
    const mainEn = getEnglishRestoration(mainText, lang);
    const subEn = getEnglishRestoration(subText, lang);
    if (mainEn && subEn) {
      return `${mainEn} (${subEn})`;
    } else if (mainEn) {
      return `${mainEn} (${subText})`;
    }
  }

  return null;
};

// Ignore code/script/style/svg elements
const IGNORED_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'CODE',
  'PRE',
  'NOSCRIPT',
  'SVG',
  'PATH',
  'CIRCLE',
  'RECT',
  'POLYGON',
  'LINE'
]);

/**
 * Translates a single text node in-place, preserving leading/trailing whitespace.
 */
export const translateTextNode = (node, targetLang = 'ar') => {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  const parent = node.parentElement;
  if (!parent || IGNORED_TAGS.has(parent.tagName)) return;

  const currentVal = node.nodeValue;
  if (!currentVal || !currentVal.trim()) return;

  // 1. If target is English, restore English
  if (targetLang === 'en') {
    if (originalTextMap.has(node)) {
      const orig = originalTextMap.get(node);
      if (orig && !isArabicText(orig) && !isChineseText(orig)) {
        if (node.nodeValue !== orig) {
          node.nodeValue = orig;
        }
        return;
      }
    }

    // If node still has non-English characters, restore via dictionary
    if (isArabicText(currentVal) || isChineseText(currentVal)) {
      const en = getEnglishRestoration(currentVal.trim());
      if (en) {
        const leadingWs = currentVal.match(/^\s*/)[0];
        const trailingWs = currentVal.match(/\s*$/)[0];
        const fullEn = leadingWs + en + trailingWs;
        node.nodeValue = fullEn;
        originalTextMap.set(node, fullEn);
      }
    }
    return;
  }

  // 2. Target is non-English (ar, zh, fr, de): determine source English text
  let sourceEn = null;
  if (originalTextMap.has(node)) {
    const cached = originalTextMap.get(node);
    if (cached && !isArabicText(cached) && !isChineseText(cached)) {
      sourceEn = cached;
    }
  }

  if (!sourceEn) {
    if (isArabicText(currentVal) || isChineseText(currentVal)) {
      const restored = getEnglishRestoration(currentVal.trim());
      if (restored) {
        sourceEn = restored;
        originalTextMap.set(node, restored);
      }
    } else {
      // currentVal is clean English
      sourceEn = currentVal;
      originalTextMap.set(node, currentVal);
    }
  }

  if (!sourceEn) return;

  const trimmedEn = sourceEn.trim();
  if (!trimmedEn) return;

  const translated = getTranslation(trimmedEn, targetLang);
  if (translated) {
    const leadingWs = sourceEn.match(/^\s*/)?.[0] || '';
    const trailingWs = sourceEn.match(/\s*$/)?.[0] || '';
    const newVal = leadingWs + translated + trailingWs;
    if (node.nodeValue !== newVal) {
      node.nodeValue = newVal;
    }
  }
};

/**
 * Translates element attributes like placeholder, title, and aria-label.
 */
export const translateElementAttributes = (el, targetLang = 'ar') => {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
  if (IGNORED_TAGS.has(el.tagName)) return;

  const attrs = ['placeholder', 'title', 'aria-label', 'alt'];
  for (const attr of attrs) {
    const val = el.getAttribute(attr);
    if (!val || !val.trim()) continue;

    let elMap = originalAttrMap.get(el);
    if (!elMap) {
      elMap = {};
      originalAttrMap.set(el, elMap);
    }

    if (targetLang === 'en') {
      const originalEn = elMap[attr];
      if (originalEn && !isArabicText(originalEn) && !isChineseText(originalEn)) {
        if (el.getAttribute(attr) !== originalEn) {
          el.setAttribute(attr, originalEn);
        }
      } else {
        const en = getEnglishRestoration(val.trim());
        if (en) {
          el.setAttribute(attr, en);
          elMap[attr] = en;
        }
      }
    } else {
      // Cache original English attribute
      let sourceEn = elMap[attr];
      if (!sourceEn || isArabicText(sourceEn) || isChineseText(sourceEn)) {
        if (isArabicText(val) || isChineseText(val)) {
          sourceEn = getEnglishRestoration(val.trim()) || val;
        } else {
          sourceEn = val;
        }
        elMap[attr] = sourceEn;
      }

      const translated = getTranslation(sourceEn.trim(), targetLang);
      if (translated && el.getAttribute(attr) !== translated) {
        el.setAttribute(attr, translated);
      }
    }
  }
};

/**
 * Walks the entire subtree of a root container and translates all text nodes and attributes.
 */
export const translateSubtree = (rootNode, targetLang = 'ar') => {
  if (!rootNode) return;

  if (targetLang === 'en') {
    restoreEnglishSubtree(rootNode);
    return;
  }

  // 1. Walk all text nodes
  const walker = document.createTreeWalker(
    rootNode,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent || IGNORED_TAGS.has(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let currentNode = walker.nextNode();
  while (currentNode) {
    translateTextNode(currentNode, targetLang);
    currentNode = walker.nextNode();
  }

  // 2. Walk elements with attributes to translate (placeholders, aria-labels, titles, alt)
  const elementsWithAttrs = rootNode.querySelectorAll?.('[placeholder], [title], [aria-label], [alt]');
  if (elementsWithAttrs) {
    elementsWithAttrs.forEach((el) => translateElementAttributes(el, targetLang));
  }
};

/**
 * Restores original English text on all previously translated text nodes and attributes.
 */
export const restoreEnglishSubtree = (rootNode) => {
  if (!rootNode) return;

  const walker = document.createTreeWalker(
    rootNode,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent || IGNORED_TAGS.has(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_SKIP;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let currentNode = walker.nextNode();
  while (currentNode) {
    const currentVal = currentNode.nodeValue;
    let restored = false;

    if (originalTextMap.has(currentNode)) {
      const orig = originalTextMap.get(currentNode);
      if (orig && !isArabicText(orig) && !isChineseText(orig)) {
        if (currentNode.nodeValue !== orig) {
          currentNode.nodeValue = orig;
        }
        restored = true;
      }
    }

    if (!restored && currentVal && currentVal.trim()) {
      const en = getEnglishRestoration(currentVal.trim());
      if (en) {
        const leadingWs = currentVal.match(/^\s*/)[0];
        const trailingWs = currentVal.match(/\s*$/)[0];
        const fullEn = leadingWs + en + trailingWs;
        if (currentNode.nodeValue !== fullEn) {
          currentNode.nodeValue = fullEn;
        }
        originalTextMap.set(currentNode, fullEn);
      }
    }

    currentNode = walker.nextNode();
  }

  // Restore attributes
  const elementsWithAttrs = rootNode.querySelectorAll?.('[placeholder], [title], [aria-label], [alt]');
  if (elementsWithAttrs) {
    elementsWithAttrs.forEach((el) => {
      const elMap = originalAttrMap.get(el);
      const attrs = ['placeholder', 'title', 'aria-label', 'alt'];
      attrs.forEach((attr) => {
        const currentAttrVal = el.getAttribute(attr);
        if (!currentAttrVal) return;

        const originalVal = elMap?.[attr];
        if (originalVal && !isArabicText(originalVal) && !isChineseText(originalVal)) {
          if (currentAttrVal !== originalVal) {
            el.setAttribute(attr, originalVal);
          }
        } else {
          const en = getEnglishRestoration(currentAttrVal.trim());
          if (en && currentAttrVal !== en) {
            el.setAttribute(attr, en);
            if (!elMap) {
              const newMap = {};
              newMap[attr] = en;
              originalAttrMap.set(el, newMap);
            } else {
              elMap[attr] = en;
            }
          }
        }
      });
    });
  }
};

export default {
  getTranslation,
  getArabicTranslation,
  getEnglishRestoration,
  translateSubtree,
  restoreEnglishSubtree,
  isArabicText,
  isChineseText
};
