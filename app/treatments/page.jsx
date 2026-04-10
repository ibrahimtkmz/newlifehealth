"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "Tedaviler",
    subtitle: "Her tedavi, medikal güvenlik ve doğal sonuç dengesini koruyan detaylı bir hekim planlamasıyla kişiselleştirilir.",
    intro: "Saç ekimi, diş estetiği ve plastik cerrahi alanlarında uçtan uca süreç yönetimi sunuyor; ön değerlendirme, operasyon ve takip dönemini tek ekip koordinasyonuyla yürütüyoruz.",
    items: [
      { title: "Saç Ekimi", description: "Doğal ön saç çizgisi tasarımı, safir FUE ve greft dağılım optimizasyonu ile yoğunluğu dengeli, yaşla uyumlu ve doğal görünümlü sonuçlar hedeflenir." },
      { title: "Diş Estetiği", description: "Dijital gülüş tasarımı, implant planlaması ve estetik kaplama uygulamalarıyla hem fonksiyon hem estetik açıdan uzun ömürlü bir rehabilitasyon planlanır." },
      { title: "Plastik Cerrahi", description: "Yüz ve vücut estetiği operasyonlarında anestezi güvenliği, doku koruyucu teknikler ve kişisel iyileşme takvimiyle kontrollü bir cerrahi deneyim sağlanır." }
    ]
  },
  en: {
    title: "Treatments",
    subtitle: "Every treatment is personalized through detailed physician planning that balances medical safety with natural-looking outcomes.",
    intro: "Across hair transplantation, dental aesthetics, and plastic surgery, we coordinate your full journey with one team—from pre-assessment to procedure day and structured aftercare.",
    items: [
      { title: "Hair Transplant", description: "Natural hairline design, sapphire FUE precision, and graft distribution planning are combined to achieve balanced density and age-appropriate results." },
      { title: "Dental Aesthetics", description: "Using digital smile design, implant planning, and aesthetic restorations, we build long-term plans focused on both function and visual harmony." },
      { title: "Plastic Surgery", description: "For facial and body procedures, we prioritize anesthesia safety, tissue-preserving methods, and a personalized recovery timeline for controlled healing." }
    ]
  },
  ru: {
    title: "Лечение",
    subtitle: "Каждая программа лечения персонализируется на основе детального врачебного планирования с акцентом на безопасность и естественный результат.",
    intro: "В направлениях пересадки волос, эстетической стоматологии и пластической хирургии мы ведем пациента комплексно: от первичной оценки до операции и этапа наблюдения.",
    items: [
      { title: "Пересадка волос", description: "Проектирование естественной линии роста, техника sapphire FUE и распределение графтов помогают добиться гармоничной плотности и натурального вида." },
      { title: "Эстетика улыбки", description: "Цифровой дизайн улыбки, имплантологическое планирование и эстетические реставрации формируют долгосрочный и функциональный результат." },
      { title: "Пластическая хирургия", description: "В операциях на лице и теле мы уделяем внимание анестезиологической безопасности, щадящим техникам и индивидуальному плану восстановления." }
    ]
  }
};

export default function TreatmentsPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{t.intro}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {t.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
              <h2 className="text-lg font-semibold text-[#1A1A1A]">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/75">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  );
}
