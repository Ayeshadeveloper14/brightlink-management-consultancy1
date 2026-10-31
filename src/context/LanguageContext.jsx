import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TRANSLATIONS, STATIC_PHRASE_DICTIONARY } from '../data/translations/index.js';
import { translateSubtree, restoreEnglishSubtree } from '../translations/domTranslator.js';

// The 5 supported languages: English, Arabic, Chinese, French, German
export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', flag: '🇦🇪' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr', flag: '🇨🇳' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', flag: '🇩🇪' }
];

export { TRANSLATIONS };

// Backward-compatibility export
export const ITEM_TRANSLATIONS = TRANSLATIONS.en || {};

const SUPPORTED_LANG_CODES = ['en', 'ar', 'zh', 'fr', 'de'];

/**
 * Extracts the canonical route pathname by stripping /en, /ar, /zh, /fr, or /de language prefixes.
 * Examples:
 *   /              -> /
 *   /en            -> /
 *   /en/           -> /
 *   /ar            -> /
 *   /ar/           -> /
 *   /zh            -> /
 *   /zh/           -> /
 *   /fr/services   -> /services
 *   /de/services/  -> /services/
 *   /services      -> /services
 */
export const getCleanPathname = (pathname) => {
  if (!pathname || pathname === '/') return '/';

  // Check if starts with any supported language prefix
  const match = pathname.match(/^\/(en|ar|zh|fr|de)(\/.*|$)/);
  if (match) {
    const remainder = match[2];
    if (!remainder || remainder === '/') return '/';
    return remainder;
  }
  return pathname;
};

/**
 * Returns the target URL when switching to a different language,
 * preserving current page path, query params, and hash.
 */
export const switchLanguageUrl = (pathname, targetLang, search = '', hash = '') => {
  const clean = getCleanPathname(pathname);
  let targetPath;

  if (targetLang === 'en') {
    // '/' remains English by default
    targetPath = clean === '/' ? '/' : (clean.startsWith('/') ? clean : `/${clean}`);
  } else {
    const stripped = clean === '/' ? '' : (clean.startsWith('/') ? clean.slice(1) : clean);
    targetPath = stripped ? `/${targetLang}/${stripped}` : `/${targetLang}/`;
  }

  return `${targetPath}${search || ''}${hash || ''}`;
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTranslatingRef = useRef(false);

  // 1. Single source of truth: URL determines active language
  const pathname = location.pathname;
  const langMatch = pathname.match(/^\/(en|ar|zh|fr|de)(\/.*|$)/);
  const currentLang = langMatch ? langMatch[1] : 'en';

  // Arabic is RTL, all other four languages (en, zh, fr, de) are LTR
  const isArabic = currentLang === 'ar';
  const isRTL = isArabic;
  const dir = isRTL ? 'rtl' : 'ltr';

  const languageConfig = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];
  const isExplicitLang = !!langMatch;

  /**
   * Helper to localize any internal path relative to the active language URL context.
   */
  const getLocalizedPath = useCallback((path, lang = currentLang) => {
    if (!path || typeof path !== 'string') return path;
    if (
      path.startsWith('http://') ||
      path.startsWith('https://') ||
      path.startsWith('mailto:') ||
      path.startsWith('tel:') ||
      path.startsWith('#')
    ) {
      return path;
    }

    const clean = getCleanPathname(path);

    // If English and not on explicit /en prefix, return clean path
    if (lang === 'en' && !isExplicitLang) {
      return clean;
    }

    if (clean === '/') {
      return `/${lang}/`;
    }

    return clean.endsWith('/') ? `/${lang}${clean}` : `/${lang}${clean}/`;
  }, [currentLang, isExplicitLang]);

  /**
   * Navigates to the equivalent URL in the target language.
   */
  const setLanguage = useCallback((targetCode) => {
    if (targetCode === currentLang) return;
    const targetUrl = switchLanguageUrl(location.pathname, targetCode, location.search, location.hash);
    navigate(targetUrl);
  }, [currentLang, location.pathname, location.search, location.hash, navigate]);

  /**
   * Synchronous dictionary lookup for React components.
   */
  const t = useCallback((key, fallback = '') => {
    if (!key) return '';
    const langDict = TRANSLATIONS[currentLang];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    if (currentLang !== 'en') {
      const phraseDict = STATIC_PHRASE_DICTIONARY[currentLang];
      if (phraseDict && phraseDict.has(key)) {
        return phraseDict.get(key);
      }
    }
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

  // 2. Synchronize HTML document dir, lang attribute, and layout classes
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;

    if (isRTL) {
      document.documentElement.classList.add('rtl-layout');
      document.body.classList.add('rtl-layout');
    } else {
      document.documentElement.classList.remove('rtl-layout');
      document.body.classList.remove('rtl-layout');
    }
  }, [dir, currentLang, isRTL]);

  // 3. Centralized DOM translation engine:
  // Translates in Arabic, Chinese, French, and German; restores pristine English when in 'en'.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.getElementById('root') || document.body;

    if (currentLang === 'en') {
      restoreEnglishSubtree(root);
      const raf = requestAnimationFrame(() => {
        restoreEnglishSubtree(root);
      });
      const timer = setTimeout(() => {
        restoreEnglishSubtree(root);
      }, 60);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    } else {
      translateSubtree(root, currentLang);
      const raf = requestAnimationFrame(() => {
        translateSubtree(root, currentLang);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [currentLang, location.pathname, location.search]);

  // 4. MutationObserver for dynamic components mounted while in non-English mode
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (currentLang === 'en') return;

    let timeoutId = null;
    const observer = new MutationObserver(() => {
      if (isTranslatingRef.current) return;
      if (timeoutId) cancelAnimationFrame(timeoutId);
      timeoutId = requestAnimationFrame(() => {
        const root = document.getElementById('root') || document.body;
        translateSubtree(root, currentLang);
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
  }, [currentLang]);

  // 5. Global internal navigation interceptor: ensures any unlocalized anchor click
  // while in /ar/, /zh/, /fr/, /de/, or /en/ stays within the active language prefix
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleAnchorClick = (e) => {
      // If clicking inside language switcher, don't intercept
      if (
        e.target.closest('[role="listbox"]') ||
        e.target.closest('[aria-label="Change Language"]') ||
        e.target.closest('[aria-label="Select Language"]') ||
        e.target.closest('[aria-label="Languages"]')
      ) {
        return;
      }

      const anchor = e.target.closest('a');
      if (!anchor) return;

      const rawHref = anchor.getAttribute('href');
      if (!rawHref) return;

      // Skip external, protocol, hash, API, or static assets
      if (
        rawHref.startsWith('http://') ||
        rawHref.startsWith('https://') ||
        rawHref.startsWith('mailto:') ||
        rawHref.startsWith('tel:') ||
        rawHref.startsWith('#') ||
        rawHref.startsWith('//') ||
        rawHref.startsWith('/api') ||
        rawHref.startsWith('/images') ||
        rawHref.startsWith('/videos') ||
        rawHref.startsWith('/assets') ||
        anchor.target === '_blank'
      ) {
        return;
      }

      // If active language is non-English, or explicit /en/
      if (currentLang !== 'en' || isExplicitLang) {
        const langPrefix = `/${currentLang}`;
        if (!rawHref.startsWith(`${langPrefix}/`) && rawHref !== langPrefix) {
          e.preventDefault();
          e.stopPropagation();
          const targetUrl = getLocalizedPath(rawHref, currentLang);
          navigate(targetUrl);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, true);
    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
    };
  }, [currentLang, isExplicitLang, getLocalizedPath, navigate]);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage: currentLang,
        languageConfig,
        languages: LANGUAGES,
        setLanguage,
        isRTL,
        dir,
        t,
        tItem,
        getLocalizedPath,
        isExplicitEn: currentLang === 'en' && isExplicitLang
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
      tItem: (title) => title || '',
      getLocalizedPath: (p) => p,
      isExplicitEn: false
    };
  }
  return context;
};

export default LanguageContext;
