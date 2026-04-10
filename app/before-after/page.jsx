"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "Öncesi & Sonrası",
    subtitle: "Hasta mahremiyeti ve tıbbi etik prensipleri korunarak sonuç kalitesini şeffaf biçimde değerlendiren bir yaklaşım uyguluyoruz.",
    body: "Öncesi-sonrası analizlerimiz yalnızca fotoğraf karşılaştırması değildir; saç yoğunluğu, simetri, doku iyileşmesi, fonksiyonel kazanım ve hasta memnuniyeti gibi kriterlerle birlikte değerlendirilir.",
    cards: ["Saç Ekimi Vaka Analizi", "Diş Estetiği Vaka Analizi", "Plastik Cerrahi Vaka Analizi"]
  },
  en: {
    title: "Before & After",
    subtitle: "We evaluate treatment quality with transparent medical criteria while strictly protecting patient privacy and ethics.",
    body: "Our before-and-after review is more than image comparison; we assess density, symmetry, tissue recovery, functional improvement, and patient satisfaction as part of a complete outcome framework.",
    cards: ["Hair Transplant Case Review", "Dental Aesthetics Case Review", "Plastic Surgery Case Review"]
  },
  ru: {
    title: "До/После",
    subtitle: "Мы оцениваем качество результатов по прозрачным медицинским критериям при строгом соблюдении конфиденциальности пациентов.",
    body: "Анализ «до/после» включает не только визуальное сравнение: учитываются плотность, симметрия, заживление тканей, функциональные изменения и удовлетворенность пациента.",
    cards: ["Кейс: пересадка волос", "Кейс: эстетика улыбки", "Кейс: пластическая хирургия"]
  }
};

export default function BeforeAfterPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{t.body}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {t.cards.map((item) => (
          <div key={item} className="rounded-2xl border border-dashed border-[#1A1A1A]/20 bg-[#FBFBFB] p-6 text-center text-sm font-medium text-[#1A1A1A]/75">
            {item}
          </div>
        ))}
      </div>
    </InnerPageLayout>
  );
}
