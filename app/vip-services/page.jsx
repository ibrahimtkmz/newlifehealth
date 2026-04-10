"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "VIP Hizmetler",
    subtitle: "Türkiye yolculuğunuzun her adımında konfor, hız ve kişisel koordinasyonu bir araya getiren premium hasta deneyimi.",
    steps: [
      "Ön hazırlık: Online konsültasyon, dosya analizi ve medikal uygunluk değerlendirmesi.",
      "Ulaşım planlaması: Uçuş sonrası karşılama, özel araç transferi ve otele yerleşim desteği.",
      "Operasyon günü yönetimi: Tercüman, danışman ve klinik koordinatörü ile kesintisiz süreç.",
      "İyileşme konforu: Doktor kontrol takvimi, ilaç planı ve kişiye uygun dinlenme önerileri.",
      "Uzun dönem takip: Ülkenize döndükten sonra foto/video bazlı uzaktan kontrol ve danışmanlık."
    ]
  },
  en: {
    title: "VIP Services",
    subtitle: "A premium patient experience combining comfort, speed, and personalized coordination throughout your Turkey journey.",
    steps: [
      "Pre-arrival preparation: Online consultation, medical file review, and eligibility assessment.",
      "Travel logistics: Airport greeting, private transfers, and assisted hotel check-in.",
      "Procedure-day coordination: Interpreter, advisor, and clinic coordinator support in one flow.",
      "Recovery comfort: Structured doctor checks, medication planning, and tailored rest guidance.",
      "Long-term follow-up: Remote photo/video monitoring and guidance after you return home."
    ]
  },
  ru: {
    title: "VIP Услуги",
    subtitle: "Премиальный формат сопровождения, объединяющий комфорт, скорость и персональную координацию на всех этапах поездки.",
    steps: [
      "Подготовка до приезда: онлайн-консультация, анализ меддокументов и оценка показаний.",
      "Логистика: встреча в аэропорту, индивидуальный трансфер и помощь при заселении.",
      "День процедуры: переводчик, персональный менеджер и координатор клиники в едином процессе.",
      "Комфортное восстановление: график осмотров, план препаратов и персональные рекомендации.",
      "Долгосрочное наблюдение: дистанционный контроль по фото/видео после возвращения домой."
    ]
  }
};

export default function VipServicesPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <ol className="space-y-4 text-sm text-[#1A1A1A]/80">
        {t.steps.map((step, index) => (
          <li key={step} className="rounded-2xl bg-[#FBFBFB] p-4 leading-relaxed">
            <strong>{index + 1}.</strong> {step}
          </li>
        ))}
      </ol>
    </InnerPageLayout>
  );
}
