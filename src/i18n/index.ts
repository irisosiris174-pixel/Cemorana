import { de } from './de';
import { en } from './en';
import { lt } from './lt';
import { fr } from './fr';
import type { Language, Translations } from './types';

export const translations: Record<Language, Translations> = {
  de,
  en,
  lt,
  fr,
};

export const defaultLanguage: Language = 'de';

export const getLanguageFromPath = (pathname: string): Language => {
  const segment = pathname.split('/')[1];
  if (segment === 'de' || segment === 'en' || segment === 'lt' || segment === 'fr') {
    return segment;
  }
  return defaultLanguage;
};
