"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "İletişim",
    subtitle: "Tedavi planınız için uzman danışmanlarımızla hemen iletişime geçin.",
    phone: "Telefon",
    email: "E-posta",
    location: "Konum",
    city: "İstanbul, Türkiye",
    supportTitle: "Hızlı Destek Saatleri",
    weekdays: "Pazartesi - Cumartesi: 09:00 - 22:00",
    sunday: "Pazar: 11:00 - 18:00",
    freeTitle: "Ücretsiz Ön Değerlendirme",
    freeText: "Mesajınızla birlikte operasyon beklentinizi ve mevcut sağlık durumunuzu paylaştığınızda, danışmanlarımız 24 saat içinde size geri dönüş yapar."
  },
  en: {
    title: "Contact",
    subtitle: "Get in touch with our expert consultants right away for your treatment plan.",
    phone: "Phone",
    email: "Email",
    location: "Location",
    city: "Istanbul, Turkey",
    supportTitle: "Quick Support Hours",
    weekdays: "Monday - Saturday: 09:00 - 22:00",
    sunday: "Sunday: 11:00 - 18:00",
    freeTitle: "Free Pre-Assessment",
    freeText: "When you share your operation expectations and current health status with your message, our consultants will get back to you within 24 hours."
  },
  ru: {
    title: "Контакты",
    subtitle: "Свяжитесь с нашими экспертами прямо сейчас для составления плана лечения.",
    phone: "Телефон",
    email: "Электронная почта",
    location: "Местоположение",
    city: "Стамбул, Турция",
    supportTitle: "Часы быстрой поддержки",
    weekdays: "Понедельник - Суббота: 09:00 - 22:00",
    sunday: "Воскресенье: 11:00 - 18:00",
    freeTitle: "Бесплатная предварительная оценка",
    freeText: "Когда вы поделитесь своими ожиданиями от операции и текущим состоянием здоровья, наши консультанты свяжутся с вами в течение 24 часов."
  },
  ar: {
    title: "اتصل بنا",
    subtitle: "تواصل مع مستشارينا الخبراء الآن لوضع خطة علاجك.",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    location: "الموقع",
    city: "إسطنبول، تركيا",
    supportTitle: "ساعات الدعم السريع",
    weekdays: "الاثنين - السبت: 09:00 - 22:00",
    sunday: "الأحد: 11:00 - 18:00",
    freeTitle: "تقييم مسبق مجاني",
    freeText: "عندما تشارك توقعاتك من العملية وحالتك الصحية الحالية، سيتواصل معك مستشارونا خلال 24 ساعة."
  }
};

export default function IletisimPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">{t.phone}</p>
          <p className="mt-2 text-base font-semibold">+90 555 050 18 02</p>
        </div>
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">{t.email}</p>
          <p className="mt-2 text-base font-semibold">Newlifehealth.tr@gmail.com</p>
        </div>
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">{t.location}</p>
          <p className="mt-2 text-base font-semibold">{t.city}</p>
        </div>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0C2E63]">{t.supportTitle}</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/75">{t.weekdays}</p>
          <p className="text-sm text-[#1A1A1A]/75">{t.sunday}</p>
        </div>
        <div className="rounded-3xl border border-[#3a0ca3]/20 bg-gradient-to-br from-[#f7f3ff] to-[#eef5ff] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0C2E63]">{t.freeTitle}</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/75">{t.freeText}</p>
        </div>
      </section>
    </InnerPageLayout>
  );
}
