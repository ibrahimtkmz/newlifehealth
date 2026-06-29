"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const DEFAULT_LANG = "tr";
const VALID = new Set(["tr", "en", "ru", "ar"]);
const RTL_LANGS = new Set(["ar"]);

function detectBrowserLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const nav = navigator.language || navigator.userLanguage || "";
  const code = nav.slice(0, 2).toLowerCase();
  if (code === "tr") return "tr";
  if (code === "en") return "en";
  if (code === "ru") return "ru";
  if (code === "ar") return "ar";
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    const saved = window.localStorage.getItem("nl-language");
    const resolved = saved && VALID.has(saved) ? saved : detectBrowserLang();
    setLangState(resolved);
  }, []);

  useEffect(() => {
    const dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const updateLang = (value) => {
    if (!VALID.has(value)) return;
    setLangState(value);
    window.localStorage.setItem("nl-language", value);
  };

  const value = useMemo(() => ({ lang, setLang: updateLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { lang: DEFAULT_LANG, setLang: () => {} };
  }
  return ctx;
}
