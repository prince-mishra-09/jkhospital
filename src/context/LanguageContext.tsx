import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.hi;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default language is HINDI as requested by user
  const [lang, setLang] = useState<Language>('hi');

  const toggleLang = () => {
    setLang(prev => (prev === 'hi' ? 'en' : 'hi'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
