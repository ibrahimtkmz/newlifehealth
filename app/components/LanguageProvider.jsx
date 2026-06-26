"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const DEFAULT_LANG = "tr";
const VALID = new Set(["tr", "en", "ru"]);

const GOOGLE_TRANSLATE_COOKIE_DAYS = 365;

function setCookie(name, value) {
  const expires = new Date(Date.now() + GOOGLE_TRANSLATE_COOKIE_DAYS * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  document.cookie = `${name}=${value}; expires=${expires}; path=/; domain=.${window.location.hostname}`;
}

function applyGoogleTranslate(value) {
  if (typeof window === "undefined") return;

  if (value === DEFAULT_LANG) {
    setCookie("googtrans", "");
    return;
  }

  setCookie("googtrans", `/${DEFAULT_LANG}/${value}`);

  const select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function loadGoogleTranslate() {
  if (typeof window === "undefined" || window.googleTranslateElementInit) return;

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: DEFAULT_LANG,
        includedLanguages: Array.from(VALID).join(","),
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  const script = document.createElement("script");
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG);

  useEffect(() => {
    loadGoogleTranslate();

    const saved = window.localStorage.getItem("nl-language");
    if (saved && VALID.has(saved)) {
      setLang(saved);
      window.setTimeout(() => applyGoogleTranslate(saved), 500);
    }
  }, []);

  const updateLang = (value) => {
    if (!VALID.has(value)) return;
    setLang(value);
    window.localStorage.setItem("nl-language", value);
    applyGoogleTranslate(value);
  };

  const value = useMemo(() => ({ lang, setLang: updateLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
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
