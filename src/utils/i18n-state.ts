import { enUS, es, ptBR, type Locale } from 'date-fns/locale';
import { create } from 'zustand';
import { Languages, sentences, type MappedWordsType } from './translate';

function getLocale(language: Languages): Locale {
  switch (language) {
    case Languages.EN:
      return enUS;
    case Languages.ES:
      return es;
    case Languages.PT:
    default:
      return ptBR;
  }
}

interface I18nState {
  language: Languages;
  setLanguage: (language: Languages) => void;
  // currentDictionary: SentencesType[Languages];
  currentDictionary: MappedWordsType;
  currentLocale: Locale;
}

const DEFAULT_LANGUAGE: Languages = Languages.PT;

export const useI18nStore = create<I18nState>((set) => ({
  language: DEFAULT_LANGUAGE,
  currentLocale: getLocale(DEFAULT_LANGUAGE),
  setLanguage: (language: Languages) => set({ language, currentDictionary: sentences[language], currentLocale: getLocale(language) }),
  currentDictionary: sentences[DEFAULT_LANGUAGE],
}))