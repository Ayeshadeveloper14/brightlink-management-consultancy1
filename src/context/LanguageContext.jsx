import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import { LANGUAGES, TRANSLATIONS, STATIC_PHRASE_DICTIONARY } from '../data/translations/index.js';

export { LANGUAGES, TRANSLATIONS };

// Backward-compatibility export for any direct consumers
export const ITEM_TRANSLATIONS = TRANSLATIONS.en || {};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const saved = localStorage.getItem('brightlink_language');
      const found = LANGUAGES.find(l => l.code === saved);
      return found ? found.code : 'en';
    } catch {
      return 'en';
    }
  });

  const languageConfig = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];
  const isRTL = languageConfig.dir === 'rtl';

  // WeakMaps to remember original English text nodes and attributes for 100% lossless restoration
  const originalTextNodesRef = useRef(new WeakMap());
  const originalAttributesRef = useRef(new WeakMap());
  const isTranslatingRef = useRef(false);

  // Core Translation Functions
  const t = useCallback((key, fallback = '') => {
    if (!key) return '';
    const langDict = TRANSLATIONS[currentLang];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Check phrase dictionary if key is an English string
    if (currentLang !== 'en') {
      const phraseDict = STATIC_PHRASE_DICTIONARY[currentLang];
      if (phraseDict && phraseDict.has(key)) {
        return phraseDict.get(key);
      }
    }
    // Fallback to English dictionary
    if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
      return TRANSLATIONS.en[key];
    }
    return fallback || key;
  }, [currentLang]);

  const tItem = useCallback((title) => {
    if (!title) return '';
    if (currentLang === 'en') return title;

    const phraseDict = STATIC_PHRASE_DICTIONARY[currentLang];
    if (phraseDict && phraseDict.has(title)) {
      return phraseDict.get(title);
    }
    const langDict = TRANSLATIONS[currentLang];
    if (langDict && langDict[title]) {
      return langDict[title];
    }
    return title;
  }, [currentLang]);

  // DOM Text-Node & Attribute Walker
  const applyDOMTranslations = useCallback(() => {
    if (typeof document === 'undefined') return;
    if (isTranslatingRef.current) return;

    isTranslatingRef.current = true;
    const phraseDict = STATIC_PHRASE_DICTIONARY[currentLang];
    const origNodes = originalTextNodesRef.current;
    const origAttrs = originalAttributesRef.current;

    // Elements to exclude from translation
    const isExcluded = (node) => {
      if (!node || !node.parentElement) return false;
      const tagName = node.parentElement.tagName.toLowerCase();
      if (tagName === 'script' || tagName === 'style' || tagName === 'noscript' || tagName === 'code') {
        return true;
      }
      // Don't translate flags or language switcher labels
      if (node.parentElement.closest('[role="listbox"]') || node.parentElement.closest('[aria-label="Change Language"]')) {
        return true;
      }
      return false;
    };

    try {
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            if (isExcluded(node)) return NodeFilter.FILTER_REJECT;
            if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_SKIP;
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      let textNode = walker.nextNode();
      while (textNode) {
        const currentVal = textNode.nodeValue;
        const trimmed = currentVal.trim();

        // Remember original text if not already stored
        if (!origNodes.has(textNode)) {
          origNodes.set(textNode, currentVal);
        }

        const originalVal = origNodes.get(textNode);
        const origTrimmed = originalVal.trim();

        if (currentLang === 'en') {
          // Restore exact English original
          if (textNode.nodeValue !== originalVal) {
            textNode.nodeValue = originalVal;
          }
        } else if (phraseDict && phraseDict.has(origTrimmed)) {
          const translated = phraseDict.get(origTrimmed);
          const leading = originalVal.match(/^\s*/)[0];
          const trailing = originalVal.match(/\s*$/)[0];
          const newText = leading + translated + trailing;
          if (textNode.nodeValue !== newText) {
            textNode.nodeValue = newText;
          }
        }

        textNode = walker.nextNode();
      }

      // Translate attributes on interactive elements (placeholders, titles, aria-labels)
      const inputElements = document.querySelectorAll('input, textarea, button, a, [title]');
      inputElements.forEach(el => {
        if (el.closest('[role="listbox"]') || el.closest('[aria-label="Change Language"]')) return;

        ['placeholder', 'title', 'aria-label'].forEach(attr => {
          const val = el.getAttribute(attr);
          if (!val || !val.trim()) return;

          if (!origAttrs.has(el)) {
            origAttrs.set(el, {});
          }
          const stored = origAttrs.get(el);
          if (!stored[attr]) {
            stored[attr] = val;
          }

          const originalAttrVal = stored[attr];
          const origAttrTrimmed = originalAttrVal.trim();

          if (currentLang === 'en') {
            if (el.getAttribute(attr) !== originalAttrVal) {
              el.setAttribute(attr, originalAttrVal);
            }
          } else if (phraseDict && phraseDict.has(origAttrTrimmed)) {
            const translated = phraseDict.get(origAttrTrimmed);
            if (el.getAttribute(attr) !== translated) {
              el.setAttribute(attr, translated);
            }
          }
        });
      });
    } catch (e) {
      console.warn('DOM translation error:', e);
    } finally {
      isTranslatingRef.current = false;
    }
  }, [currentLang]);

  // Handle document direction, attributes, and persistence
  useEffect(() => {
    try {
      localStorage.setItem('brightlink_language', currentLang);
    } catch {}

    // Update document HTML direction and lang attribute
    document.documentElement.dir = languageConfig.dir;
    document.documentElement.lang = currentLang;

    // RTL body class and styling hooks
    if (isRTL) {
      document.documentElement.classList.add('rtl-layout');
      document.body.classList.add('rtl-layout');
    } else {
      document.documentElement.classList.remove('rtl-layout');
      document.body.classList.remove('rtl-layout');
    }

    // Apply translations across DOM
    applyDOMTranslations();
  }, [currentLang, languageConfig, isRTL, applyDOMTranslations]);

  // MutationObserver to automatically translate dynamically mounted components and client-side page route navigation
  useEffect(() => {
    if (typeof document === 'undefined') return;

    let timeoutId = null;
    const observer = new MutationObserver((mutations) => {
      if (isTranslatingRef.current) return;
      if (currentLang === 'en') return;

      // Throttle/batch updates
      if (timeoutId) cancelAnimationFrame(timeoutId);
      timeoutId = requestAnimationFrame(() => {
        applyDOMTranslations();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: false
    });

    return () => {
      observer.disconnect();
      if (timeoutId) cancelAnimationFrame(timeoutId);
    };
  }, [currentLang, applyDOMTranslations]);

  const setLanguage = (code) => {
    const valid = LANGUAGES.some(l => l.code === code);
    if (valid && code !== currentLang) {
      setCurrentLang(code);
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage: currentLang,
        languageConfig,
        languages: LANGUAGES,
        setLanguage,
        isRTL,
        dir: languageConfig.dir,
        t,
        tItem
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      currentLanguage: 'en',
      languageConfig: LANGUAGES[0],
      languages: LANGUAGES,
      setLanguage: () => {},
      isRTL: false,
      dir: 'ltr',
      t: (key, fallback = '') => fallback || key,
      tItem: (title) => title || ''
    };
  }
  return context;
};

export default LanguageContext;
