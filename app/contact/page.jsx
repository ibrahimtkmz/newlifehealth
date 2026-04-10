"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "İletişim",
    subtitle: "Tedavi planınız, tarih uygunluğu ve kişiye özel fiyatlandırma için hasta danışmanlarımızla hemen iletişime geçin.",
    office: "İstanbul Ofisi",
    schedule: "Çalışma Saatleri",
    rows: ["Nispetiye Cad. No: 22, Beşiktaş / İstanbul", "Telefon: +90 212 000 00 00", "WhatsApp: +90 500 000 00 00", "E-posta: info@nlsaglikturizmi.com"],
    hours: ["Pazartesi - Cuma: 09:00 - 19:00", "Cumartesi: 10:00 - 16:00", "Pazar: Online danışmanlık ve randevu planlaması"]
  },
  en: {
    title: "Contact",
    subtitle: "Reach our patient advisors for treatment planning, available dates, and personalized pricing options.",
    office: "Istanbul Office",
    schedule: "Working Hours",
    rows: ["Nispetiye St. No: 22, Besiktas / Istanbul", "Phone: +90 212 000 00 00", "WhatsApp: +90 500 000 00 00", "Email: info@nlsaglikturizmi.com"],
    hours: ["Monday - Friday: 09:00 - 19:00", "Saturday: 10:00 - 16:00", "Sunday: Online consultation and appointment planning"]
  },
  ru: {
    title: "Контакты",
    subtitle: "Свяжитесь с нашими координаторами для подбора лечения, согласования дат и персонального расчета стоимости.",
    office: "Офис в Стамбуле",
    schedule: "Часы работы",
    rows: ["Nispetiye Cad. No: 22, Beşiktaş / Стамбул", "Телефон: +90 212 000 00 00", "WhatsApp: +90 500 000 00 00", "E-mail: info@nlsaglikturizmi.com"],
    hours: ["Понедельник - Пятница: 09:00 - 19:00", "Суббота: 10:00 - 16:00", "Воскресенье: онлайн-консультации и планирование визитов"]
  }
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 text-sm text-[#1A1A1A]/80 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#FBFBFB] p-5">
          <p className="font-semibold text-[#1A1A1A]">{t.office}</p>
          {t.rows.map((row) => (
            <p key={row} className="mt-2">{row}</p>
          ))}
        </div>
        <div className="rounded-2xl bg-[#FBFBFB] p-5">
          <p className="font-semibold text-[#1A1A1A]">{t.schedule}</p>
          {t.hours.map((row) => (
            <p key={row} className="mt-2">{row}</p>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  );
}
