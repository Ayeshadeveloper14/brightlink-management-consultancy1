import { MASTER_AR_DICTIONARY } from './dictionaries/masterDict_ar.js';
import { MASTER_ZH_DICTIONARY } from './dictionaries/masterDict_zh.js';
import { MASTER_FR_DICTIONARY } from './dictionaries/masterDict_fr.js';
import { MASTER_DE_DICTIONARY } from './dictionaries/masterDict_de.js';
import { MASTER_ES_DICTIONARY } from './dictionaries/masterDict_es.js';
import { MASTER_PT_DICTIONARY } from './dictionaries/masterDict_pt.js';
import { MASTER_RU_DICTIONARY } from './dictionaries/masterDict_ru.js';
import { MASTER_TR_DICTIONARY } from './dictionaries/masterDict_tr.js';
import { MASTER_BN_DICTIONARY } from './dictionaries/masterDict_bn.js';

export const MASTER_ARABIC_DICTIONARY = MASTER_AR_DICTIONARY;
export const MASTER_CHINESE_DICTIONARY = MASTER_ZH_DICTIONARY;
export const MASTER_FRENCH_DICTIONARY = MASTER_FR_DICTIONARY;
export const MASTER_GERMAN_DICTIONARY = MASTER_DE_DICTIONARY;
export const MASTER_SPANISH_DICTIONARY = MASTER_ES_DICTIONARY;
export const MASTER_PORTUGUESE_DICTIONARY = MASTER_PT_DICTIONARY;
export const MASTER_RUSSIAN_DICTIONARY = MASTER_RU_DICTIONARY;
export const MASTER_TURKISH_DICTIONARY = MASTER_TR_DICTIONARY;
export const MASTER_BENGALI_DICTIONARY = MASTER_BN_DICTIONARY;

export const MASTER_DICTIONARIES = {
  en: {},
  ar: MASTER_AR_DICTIONARY,
  zh: MASTER_ZH_DICTIONARY,
  fr: MASTER_FR_DICTIONARY,
  de: MASTER_DE_DICTIONARY,
  es: MASTER_ES_DICTIONARY,
  pt: MASTER_PT_DICTIONARY,
  ru: MASTER_RU_DICTIONARY,
  tr: MASTER_TR_DICTIONARY,
  bn: MASTER_BN_DICTIONARY
};

export default MASTER_DICTIONARIES;
