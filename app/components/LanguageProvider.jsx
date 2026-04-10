"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const DEFAULT_LANG = "tr";
const VALID = new Set(["tr", "en", "ru"]);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);

  useEffect(() => {
    const saved = window.localStorage.getItem("nl-language");
    if (saved && VALID.has(saved)) {
      setLang(saved);
    }
  }, []);

  const updateLang = (value) => {
    if (!VALID.has(value)) return;
    setLang(value);
    window.localStorage.setItem("nl-language", value);
  };

  const value = useMemo(() => ({ lang, setLang: updateLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { lang: DEFAULT_LANG, setLang: () => {} };
  }
  return ctx;
}
