"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { translations } from "../locales/translations";

const LanguageContext = createContext();

const availableLanguages = ["English", "Hindi", "Kannada", "Urdu", "Tamil"];

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("English");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language");
      if (savedLang && availableLanguages.includes(savedLang) && savedLang !== language) {
        setLanguageState(savedLang);
      }
    }
  }, [language]);

  const t = useCallback(
    (key) => {
      return translations[language]?.[key] || key;
    },
    [language]
  );

  const changeLanguage = useCallback((lang) => {
    if (availableLanguages.includes(lang)) {
      setLanguageState(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("language", lang);
      }
    }
  }, []);

  const value = useMemo(
    () => ({ language, changeLanguage, availableLanguages, t }),
    [language, changeLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
