"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const DEFAULT_LANG = "tr";
const VALID = new Set(["tr", "en", "ru", "ar"]);
const RTL_LANGS = new Set(["ar"]);

const SEO_COPY = {
  tr: { title: "NEWLIFE HEALTH | Türkiye Sağlık Turizmi", description: "NEWLIFE HEALTH, uluslararası hastalar için Türkiye'de güvenli, şeffaf ve çok dilli sağlık yolculuklarını koordine eder.", routes: { hizmetler: "Hizmetler", treatments: "Tedaviler", "tedavi-sureci": "Tedavi Süreci", iletisim: "İletişim", contact: "İletişim", kurumsal: "Kurumsal", "why-turkey": "Neden Türkiye?", "vip-services": "VIP Sağlık Turizmi", "before-after": "Öncesi ve Sonrası", blog: "Sağlık Turizmi Blogu", "newlife-blog": "NEWLIFE Blog" } },
  en: { title: "NEWLIFE HEALTH | Turkey Medical Tourism", description: "NEWLIFE HEALTH coordinates safe, transparent and multilingual medical journeys in Turkey for international patients.", routes: { hizmetler: "Services", treatments: "Treatments", "tedavi-sureci": "Treatment Process", iletisim: "Contact", contact: "Contact", kurumsal: "Corporate", "why-turkey": "Why Turkey?", "vip-services": "VIP Health Tourism", "before-after": "Before & After", blog: "Medical Tourism Blog", "newlife-blog": "NEWLIFE Blog" } },
  ru: { title: "NEWLIFE HEALTH | Медицинский туризм в Турции", description: "NEWLIFE HEALTH координирует безопасные, прозрачные и многоязычные медицинские поездки в Турцию для иностранных пациентов.", routes: { hizmetler: "Услуги", treatments: "Лечение", "tedavi-sureci": "Процесс лечения", iletisim: "Контакты", contact: "Контакты", kurumsal: "О компании", "why-turkey": "Почему Турция?", "vip-services": "VIP-услуги", "before-after": "До и после", blog: "Блог о медицинском туризме", "newlife-blog": "Блог NEWLIFE" } },
  ar: { title: "NEWLIFE HEALTH | السياحة العلاجية في تركيا", description: "تنظم NEWLIFE HEALTH رحلات علاجية آمنة وشفافة ومتعددة اللغات في تركيا للمرضى الدوليين.", routes: { hizmetler: "الخدمات", treatments: "العلاجات", "tedavi-sureci": "مسار العلاج", iletisim: "اتصل بنا", contact: "اتصل بنا", kurumsal: "عن الشركة", "why-turkey": "لماذا تركيا؟", "vip-services": "خدمات VIP", "before-after": "قبل وبعد", blog: "مدونة السياحة الصحية", "newlife-blog": "مدونة NEWLIFE" } }
};

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
    const seo = SEO_COPY[lang] || SEO_COPY.tr;
    const routeKey = window.location.pathname.replace(/^\/+|\/+$/g, "");
    const routeTitle = seo.routes?.[routeKey];
    document.title = routeTitle ? `${routeTitle} | NEWLIFE HEALTH` : seo.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = seo.description;
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
