"use client";

import { useState } from "react";
import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building2, Globe } from "lucide-react";

const whatsappNumber = "905301112233";

const CONTENT = {
  tr: {
    title: "Iletisim",
    subtitle: "NEWLIFE HEALTH TOURISM hasta danismanlariyla iletisime gecerek tedavi planinizi, tarih uygunlugunu ve surec detaylarini netlestirin.",
    formTitle: "Hizli Iletisim Formu",
    formSubtitle: "Bilgilerinizi birakin, ekibimiz size 24 saat icinde donus yapsin.",
    name: "Ad Soyad",
    phone: "Telefon",
    email: "E-posta",
    treatment: "Ilgilendiginiz Tedavi",
    message: "Mesajiniz",
    send: "Gonder",
    orWhatsapp: "veya WhatsApp ile ulasın",
    whatsappButton: "WhatsApp ile Iletisime Gec",
    office: "Istanbul Ofisi",
    schedule: "Calisma Saatleri",
    address: "Halaskargazi Mah. Rumeli Cad. No: 34, Sisli / Istanbul, Turkiye",
    phoneNumber: "+90 212 706 42 42",
    whatsappNumber: "+90 530 111 22 33",
    emailAddress: "info@newlifehealthtourism.com",
    hours: [
      "Pazartesi - Cuma: 09:00 - 19:00",
      "Cumartesi: 10:00 - 16:00",
      "Pazar: Online danismanlık ve randevu planlamasi"
    ],
    faqTitle: "Sikca Sorulan Sorular",
    faqs: [
      {
        q: "Ilk konsultasyon ucretli mi?",
        a: "Hayir, ilk online konsultasyon tamamen ucretsizdir. Size ozel tedavi plani ve fiyat teklifi sunuyoruz."
      },
      {
        q: "Hangi dillerde hizmet veriyorsunuz?",
        a: "Turkce, Ingilizce, Rusca, Almanca ve Arapca dillerinde 7/24 destek sagliyoruz."
      },
      {
        q: "Tedavi icin ne kadar sure onceden randevu almaliyim?",
        a: "Ideal olarak 2-4 hafta onceden planlamanizi oneriyoruz, ancak acil durumlarda daha kisa surelerde de organizasyon yapabiliyoruz."
      },
      {
        q: "Transfer ve konaklama dahil mi?",
        a: "Evet, tum paketlerimize havaalani transferi ve otel konaklamasi dahildir. Paket detaylari icin bizimle iletisime gecin."
      }
    ],
    reachTitle: "Bize Ulasin",
    treatments: [
      "Sac Ekimi",
      "Dis Estetigi",
      "Plastik Cerrahi",
      "Obezite Cerrahisi",
      "Diger"
    ]
  },
  en: {
    title: "Contact",
    subtitle: "Contact NEWLIFE HEALTH TOURISM advisors for treatment planning, date availability, and clear next-step guidance.",
    formTitle: "Quick Contact Form",
    formSubtitle: "Leave your details and our team will get back to you within 24 hours.",
    name: "Full Name",
    phone: "Phone",
    email: "Email",
    treatment: "Treatment of Interest",
    message: "Your Message",
    send: "Send",
    orWhatsapp: "or reach us via WhatsApp",
    whatsappButton: "Contact via WhatsApp",
    office: "Istanbul Office",
    schedule: "Working Hours",
    address: "Halaskargazi Mah. Rumeli Cad. No: 34, Sisli / Istanbul, Turkiye",
    phoneNumber: "+90 212 706 42 42",
    whatsappNumber: "+90 530 111 22 33",
    emailAddress: "info@newlifehealthtourism.com",
    hours: [
      "Monday - Friday: 09:00 - 19:00",
      "Saturday: 10:00 - 16:00",
      "Sunday: Online consultation and appointment planning"
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Is the initial consultation free?",
        a: "Yes, the initial online consultation is completely free. We provide a personalized treatment plan and price quote."
      },
      {
        q: "What languages do you support?",
        a: "We provide 24/7 support in Turkish, English, Russian, German, and Arabic."
      },
      {
        q: "How far in advance should I book my treatment?",
        a: "We recommend planning 2-4 weeks ahead, but we can organize on shorter notice for urgent cases."
      },
      {
        q: "Are transfers and accommodation included?",
        a: "Yes, all our packages include airport transfers and hotel accommodation. Contact us for package details."
      }
    ],
    reachTitle: "Get in Touch",
    treatments: [
      "Hair Transplant",
      "Dental Aesthetics",
      "Plastic Surgery",
      "Bariatric Surgery",
      "Other"
    ]
  },
  ru: {
    title: "Контакты",
    subtitle: "Свяжитесь с координаторами NEWLIFE HEALTH TOURISM для подбора лечения, согласования дат и этапов поездки.",
    formTitle: "Форма быстрой связи",
    formSubtitle: "Оставьте данные, и наша команда свяжется с вами в течение 24 часов.",
    name: "Полное имя",
    phone: "Телефон",
    email: "Email",
    treatment: "Интересующее лечение",
    message: "Ваше сообщение",
    send: "Отправить",
    orWhatsapp: "или свяжитесь через WhatsApp",
    whatsappButton: "Связаться через WhatsApp",
    office: "Офис в Стамбуле",
    schedule: "Часы работы",
    address: "Halaskargazi Mah. Rumeli Cad. No: 34, Sisli / Istanbul, Turkiye",
    phoneNumber: "+90 212 706 42 42",
    whatsappNumber: "+90 530 111 22 33",
    emailAddress: "info@newlifehealthtourism.com",
    hours: [
      "Понедельник - Пятница: 09:00 - 19:00",
      "Суббота: 10:00 - 16:00",
      "Воскресенье: онлайн-консультации и планирование визитов"
    ],
    faqTitle: "Часто задаваемые вопросы",
    faqs: [
      {
        q: "Первичная консультация бесплатная?",
        a: "Да, первичная онлайн-консультация полностью бесплатна. Мы предоставляем персональный план лечения и расчет стоимости."
      },
      {
        q: "На каких языках вы работаете?",
        a: "Мы предоставляем поддержку 24/7 на турецком, английском, русском, немецком и арабском языках."
      },
      {
        q: "За сколько нужно бронировать лечение?",
        a: "Рекомендуем планировать за 2-4 недели, но в срочных случаях можем организовать и в более короткие сроки."
      },
      {
        q: "Трансфер и проживание включены?",
        a: "Да, все наши пакеты включают трансфер из аэропорта и проживание в отеле. Свяжитесь с нами для деталей."
      }
    ],
    reachTitle: "Свяжитесь с нами",
    treatments: [
      "Пересадка волос",
      "Эстетика зубов",
      "Пластическая хирургия",
      "Бариатрическая хирургия",
      "Другое"
    ]
  }
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `${t.name}: ${form.name}\n${t.phone}: ${form.phone}\n${t.email}: ${form.email}\n${t.treatment}: ${form.treatment}\n${t.message}: ${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const openWhatsApp = () => {
    const greeting = lang === 'tr' 
      ? "Merhaba, tedavi hakkinda bilgi almak istiyorum."
      : lang === 'ru'
      ? "Здравствуйте, хочу узнать о лечении."
      : "Hello, I would like to inquire about treatment.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(greeting)}`, "_blank");
  };

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-10">
        {/* Contact Form & Info Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form */}
          <section className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-[#1A1A1A]">{t.formTitle}</h2>
            <p className="mt-1 text-sm text-[#1A1A1A]/70">{t.formSubtitle}</p>
            
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder={t.name}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-[#1A1A1A]/15 px-4 py-3 text-sm outline-none transition focus:border-[#3a0ca3] focus:ring-2 focus:ring-[#3a0ca3]/20"
                  required
                />
                <input
                  type="tel"
                  placeholder={t.phone}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-[#1A1A1A]/15 px-4 py-3 text-sm outline-none transition focus:border-[#3a0ca3] focus:ring-2 focus:ring-[#3a0ca3]/20"
                  required
                />
              </div>
              <input
                type="email"
                placeholder={t.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-[#1A1A1A]/15 px-4 py-3 text-sm outline-none transition focus:border-[#3a0ca3] focus:ring-2 focus:ring-[#3a0ca3]/20"
              />
              <select
                value={form.treatment}
                onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                className="w-full rounded-xl border border-[#1A1A1A]/15 px-4 py-3 text-sm text-[#1A1A1A]/70 outline-none transition focus:border-[#3a0ca3] focus:ring-2 focus:ring-[#3a0ca3]/20"
              >
                <option value="">{t.treatment}</option>
                {t.treatments.map((treatment) => (
                  <option key={treatment} value={treatment}>{treatment}</option>
                ))}
              </select>
              <textarea
                placeholder={t.message}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full resize-none rounded-xl border border-[#1A1A1A]/15 px-4 py-3 text-sm outline-none transition focus:border-[#3a0ca3] focus:ring-2 focus:ring-[#3a0ca3]/20"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3a0ca3] to-[#f72585] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                {t.send}
              </button>
            </form>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#1A1A1A]/10" />
              <span className="text-xs text-[#1A1A1A]/50">{t.orWhatsapp}</span>
              <div className="h-px flex-1 bg-[#1A1A1A]/10" />
            </div>

            <button
              onClick={openWhatsApp}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-[#25D366]/10 px-5 py-3 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
            >
              <MessageCircle className="h-4 w-4" />
              {t.whatsappButton}
            </button>
          </section>

          {/* Contact Info */}
          <div className="space-y-4">
            <section className="rounded-2xl bg-[#FBFBFB] p-5">
              <div className="mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#D4AF37]" />
                <h3 className="font-semibold text-[#1A1A1A]">{t.office}</h3>
              </div>
              <div className="space-y-3 text-sm text-[#1A1A1A]/80">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1A1A1A]/50" />
                  {t.address}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#1A1A1A]/50" />
                  {t.phoneNumber}
                </p>
                <p className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  {t.whatsappNumber}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#1A1A1A]/50" />
                  {t.emailAddress}
                </p>
              </div>
            </section>

            <section className="rounded-2xl bg-[#FBFBFB] p-5">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#D4AF37]" />
                <h3 className="font-semibold text-[#1A1A1A]">{t.schedule}</h3>
              </div>
              <div className="space-y-2 text-sm text-[#1A1A1A]/80">
                {t.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-[#f8961e]/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#D4AF37]" />
                <h3 className="font-semibold text-[#1A1A1A]">{t.reachTitle}</h3>
              </div>
              <p className="text-sm text-[#1A1A1A]/70">
                {lang === 'tr' 
                  ? "Dunyanin her yerinden 85+ ulkeden hastalarımıza hizmet veriyoruz."
                  : lang === 'ru'
                  ? "Мы обслуживаем пациентов из 85+ стран мира."
                  : "We serve patients from 85+ countries around the world."
                }
              </p>
            </section>
          </div>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="mb-5 text-xl font-semibold text-[#1A1A1A]">{t.faqTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5">
                <h3 className="font-semibold text-[#1A1A1A]">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
