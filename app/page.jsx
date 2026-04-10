"use client";

import React, { useMemo, useState } from "react";
import SiteHeader from "./components/SiteHeader";
import { useLanguage } from "./components/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CalendarCheck2,
  Clock3,
  HeartPulse,
  Hotel,
  Plane,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Smile,
  UserRound,
  Video
} from "lucide-react";

const whatsappNumber = "905000000000";

const content = {
  en: {
    langLabel: "EN",
    navLinks: [
      { label: "Why Turkey?", href: "/why-turkey" },
      { label: "Treatments", href: "/treatments" },
      { label: "VIP Services", href: "/vip-services" },
      { label: "Before & After", href: "/before-after" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ],
    freeQuote: "GET FREE QUOTE",
    trusted: "Trusted by Global Patients",
    heroTitle: "TRANSFORM YOURSELF IN TURKEY. VIP MEDICAL JOURNEYS.",
    heroSubtitle: "World-Class Doctors. 5-Star Comfort. Affordable Luxury.",
    heroFormTitle: "Get Your Free VIP Plan",
    heroFormSub: "Dedicated advisor replies within minutes.",
    name: "Name",
    phone: "Phone",
    treatmentType: "Treatment Type",
    requestConsultation: "REQUEST CONSULTATION",
    signatureTreatments: "Signature Treatments",
    treatmentsTitle: "Precision Procedures, Elevated Care",
    treatmentsIntro:
      "At our clinic, every treatment plan is personalized using advanced imaging systems, digital planning tools, and minimally invasive surgical approaches.",
    treatments: [
      {
        title: "HAIR TRANSPLANT",
        description: "Natural density design, sapphire FUE precision, and discreet VIP care."
      },
      {
        title: "DENTAL AESTHETICS",
        description: "Premium smile makeovers with digital design and artist-level detail."
      },
      {
        title: "PLASTIC SURGERY",
        description: "Tailored facial and body procedures led by board-certified specialists."
      }
    ],
    stepLabel: "Step",
    journey: ["Free Consultation", "VIP Flight & Transfer", "Premium Clinic Procedure", "Luxury Recovery", "Aftercare"],
    beforeAfter: "BEFORE & AFTER GALLERY",
    beforeAfterSub: "We share treatment quality insights while fully protecting patient privacy.",
    beforeAfterOverlay: "In line with medical ethics, we show full results only to our active patients.",
    beforeAfterButton: "Review Results on WhatsApp",
    videos: "PATIENT TESTIMONIAL VIDEOS",
    videosSub: "Authentic stories capturing confidence, recovery, and five-star service.",
    videoPlaceholder: "Video Wall Placeholder",
    about: "About Us",
    aboutP1:
      "At NL Health Tourism, our vision is to ensure international patients receive a safe, well-planned, and human-centered treatment experience in Turkey.",
    aboutP2:
      "With our specialist doctor network and experienced patient relations team, we deliver lasting satisfaction in hair transplantation, dental aesthetics, and plastic surgery.",
    packages: "Service Packages",
    packagesTitle: "Choose the Treatment Experience That Fits You Best",
    packageNote: "Contact us for your personalized price offer.",
    packagesData: [
      {
        name: "Standard",
        details: ["Operation planning and core medical process", "4 nights of accommodation", "Airport-clinic-hotel transfers", "Remote follow-up support"]
      },
      {
        name: "Gold",
        details: ["Operation + advanced medical care package", "5 nights in a 5-star hotel", "VIP transfer and fast coordination", "Interpreter support"]
      },
      {
        name: "Premium",
        details: ["Comprehensive operation plan", "Luxury suite accommodation", "Private vehicle transfers", "Extended aftercare follow-up"]
      }
    ],
    clinicsLabel: "Our Partner Clinics",
    clinicsTitle: "Istanbul's Most Advanced Medical Spaces",
    clinicsSub: "Each partner facility is selected for international standards and discreet hospitality.",
    whyTurkey: "Why Turkey?",
    whyTurkeyP1:
      "Turkey has become a strategic hub in health tourism with accredited hospitals, advanced infrastructure, and expert surgeons.",
    whyTurkeyP2:
      "Especially in Istanbul, healthcare quality combines with luxury accommodation and convenient transportation.",
    whyPoints: [
      "Specialist surgeon teams with strong international patient portfolios.",
      "Accredited hospitals, advanced equipment, and multilingual coordination.",
      "Transparent process management and end-to-end travel support."
    ],
    leadLabel: "Lead Generation",
    leadTitle: "Get a Fast Callback",
    leadSub: "Leave your phone number and we will direct you to our WhatsApp line immediately.",
    yourPhone: "Your phone number",
    continueWa: "Continue on WhatsApp",
    popupTitle: "Quick Consultation Form",
    popupSub: "Fill in details and continue on WhatsApp.",
    sourceLabel: "Request Type",
    notes: "Notes",
    close: "Close",
    sendWa: "Send to WhatsApp",
    popupSources: {
      freeQuote: "Free Quote",
      beforeAfter: "Before & After Review"
    }
  },
  tr: {
    langLabel: "TR",
    navLinks: [
      { label: "Neden Türkiye?", href: "/why-turkey" },
      { label: "Tedaviler", href: "/treatments" },
      { label: "VIP Hizmetler", href: "/vip-services" },
      { label: "Öncesi & Sonrası", href: "/before-after" },
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/contact" }
    ],
    freeQuote: "ÜCRETSİZ TEKLİF AL",
    trusted: "Dünya Çapında Hastalar Tarafından Tercih Ediliyor",
    heroTitle: "TÜRKİYE'DE DÖNÜŞÜMÜNÜZÜ BAŞLATIN. VIP MEDİKAL YOLCULUKLAR.",
    heroSubtitle: "Dünya standartlarında doktorlar. 5 yıldızlı konfor. Ulaşılabilir lüks.",
    heroFormTitle: "Ücretsiz VIP Planınızı Alın",
    heroFormSub: "Danışmanımız dakikalar içinde dönüş yapar.",
    name: "Ad Soyad",
    phone: "Telefon",
    treatmentType: "Tedavi Türü",
    requestConsultation: "DANIŞMANLIK TALEP ET",
    signatureTreatments: "Öne Çıkan Tedaviler",
    treatmentsTitle: "Hassas Prosedürler, Üst Düzey Bakım",
    treatmentsIntro: "Kliniğimizde her tedavi planı ileri görüntüleme sistemleri ve kişiye özel planlama ile hazırlanır.",
    treatments: [
      { title: "SAÇ EKİMİ", description: "Doğal yoğunluk tasarımı, safir FUE hassasiyeti ve VIP bakım." },
      { title: "DİŞ ESTETİĞİ", description: "Dijital tasarım ve yüksek hassasiyetle premium gülüş tasarımları." },
      { title: "PLASTİK CERRAHİ", description: "Uzman hekimler tarafından kişiye özel yüz ve vücut işlemleri." }
    ],
    stepLabel: "Adım",
    journey: ["Ücretsiz Danışmanlık", "VIP Uçuş & Transfer", "Premium Klinik İşlemi", "Lüks İyileşme", "Takip Süreci"],
    beforeAfter: "ÖNCESİ & SONRASI GALERİSİ",
    beforeAfterSub: "Hasta gizliliğini koruyarak tedavi kalitesi hakkında bilgi paylaşıyoruz.",
    beforeAfterOverlay: "Tıbbi etik gereği detaylı sonuçları yalnızca aktif hastalarımızla paylaşıyoruz.",
    beforeAfterButton: "WhatsApp'ta Sonuçları Gör",
    videos: "HASTA DENEYİM VİDEOLARI",
    videosSub: "Özgüven, iyileşme ve 5 yıldızlı hizmeti anlatan gerçek hikayeler.",
    videoPlaceholder: "Video Alanı",
    about: "Hakkımızda",
    aboutP1: "NL Health Tourism olarak vizyonumuz, uluslararası hastalara Türkiye'de güvenli ve planlı bir tedavi deneyimi sunmaktır.",
    aboutP2: "Uzman doktor ağımız ve deneyimli hasta ilişkileri ekibimizle kalıcı memnuniyet hedefliyoruz.",
    packages: "Hizmet Paketleri",
    packagesTitle: "Size En Uygun Tedavi Deneyimini Seçin",
    packageNote: "Size özel fiyat teklifi için bizimle iletişime geçin.",
    packagesData: [
      { name: "Standart", details: ["Operasyon planlaması", "4 gece konaklama", "Havalimanı-klinik-otel transferleri", "Uzaktan takip desteği"] },
      { name: "Gold", details: ["Operasyon + ileri bakım", "5 yıldızlı otelde 5 gece", "VIP transfer", "Tercüman desteği"] },
      { name: "Premium", details: ["Kapsamlı operasyon planı", "Lüks konaklama", "Özel araç transfer", "Uzun dönem takip"] }
    ],
    clinicsLabel: "Partner Kliniklerimiz",
    clinicsTitle: "İstanbul'un En Gelişmiş Tıbbi Alanları",
    clinicsSub: "Tüm partner tesisler uluslararası standartlar ve hasta konforuna göre seçilir.",
    whyTurkey: "Neden Türkiye?",
    whyTurkeyP1: "Türkiye; akredite hastaneleri, güçlü altyapısı ve uzman cerrahlarıyla sağlık turizminde stratejik bir merkezdir.",
    whyTurkeyP2: "Özellikle İstanbul'da medikal kalite, lüks konaklama ve hızlı ulaşım ile birleşir.",
    whyPoints: ["Uluslararası hasta deneyimi yüksek uzman ekipler.", "Akredite hastaneler ve ileri teknoloji.", "Şeffaf süreç yönetimi ve uçtan uca destek."],
    leadLabel: "Hızlı Dönüş",
    leadTitle: "Hızlı Geri Arama Alın",
    leadSub: "Telefon numaranızı bırakın, sizi hemen WhatsApp hattımıza yönlendirelim.",
    yourPhone: "Telefon numaranız",
    continueWa: "WhatsApp'a Geç",
    popupTitle: "Hızlı Danışmanlık Formu",
    popupSub: "Bilgileri doldurun, WhatsApp'tan devam edelim.",
    sourceLabel: "Talep Türü",
    notes: "Notlar",
    close: "Kapat",
    sendWa: "WhatsApp'a Gönder",
    popupSources: {
      freeQuote: "Ücretsiz Teklif",
      beforeAfter: "Öncesi/Sonrası İnceleme"
    }
  },
  ru: {
    langLabel: "RU",
    navLinks: [
      { label: "Почему Турция?", href: "/why-turkey" },
      { label: "Лечение", href: "/treatments" },
      { label: "VIP Услуги", href: "/vip-services" },
      { label: "До/После", href: "/before-after" },
      { label: "Блог", href: "/blog" },
      { label: "Контакты", href: "/contact" }
    ],
    freeQuote: "ПОЛУЧИТЬ БЕСПЛАТНЫЙ РАСЧЁТ",
    trusted: "Нам доверяют пациенты со всего мира",
    heroTitle: "ПРЕОБРАЖЕНИЕ В ТУРЦИИ. VIP МЕДИЦИНСКИЕ ТУРЫ.",
    heroSubtitle: "Врачи мирового уровня. Комфорт 5★. Доступная роскошь.",
    heroFormTitle: "Получите ваш бесплатный VIP-план",
    heroFormSub: "Персональный консультант отвечает в течение минут.",
    name: "Имя",
    phone: "Телефон",
    treatmentType: "Тип лечения",
    requestConsultation: "ЗАПРОСИТЬ КОНСУЛЬТАЦИЮ",
    signatureTreatments: "Ключевые направления",
    treatmentsTitle: "Точная медицина и премиальный уход",
    treatmentsIntro: "Каждый план лечения персонализирован с использованием современных технологий и щадящих методик.",
    treatments: [
      { title: "ПЕРЕСАДКА ВОЛОС", description: "Естественная плотность, точность sapphire FUE и VIP-сопровождение." },
      { title: "ЭСТЕТИКА УЛЫБКИ", description: "Премиальные smile-мейковеры с цифровым дизайном." },
      { title: "ПЛАСТИЧЕСКАЯ ХИРУРГИЯ", description: "Индивидуальные решения для лица и тела от сертифицированных специалистов." }
    ],
    stepLabel: "Шаг",
    journey: ["Бесплатная консультация", "VIP перелет и трансфер", "Процедура в премиум клинике", "Комфортное восстановление", "Послеоперационное сопровождение"],
    beforeAfter: "ГАЛЕРЕЯ ДО/ПОСЛЕ",
    beforeAfterSub: "Мы делимся качеством лечения, полностью соблюдая конфиденциальность пациентов.",
    beforeAfterOverlay: "По медицинской этике полные результаты доступны только нашим активным пациентам.",
    beforeAfterButton: "Посмотреть результаты в WhatsApp",
    videos: "ВИДЕО-ОТЗЫВЫ ПАЦИЕНТОВ",
    videosSub: "Реальные истории о восстановлении, уверенности и сервисе 5★.",
    videoPlaceholder: "Зона видео",
    about: "О нас",
    aboutP1: "NL Health Tourism обеспечивает безопасное и тщательно спланированное лечение для иностранных пациентов в Турции.",
    aboutP2: "Сеть профильных врачей и опытная команда сопровождения помогают достигать долгосрочной удовлетворенности.",
    packages: "Пакеты услуг",
    packagesTitle: "Выберите подходящий формат лечения",
    packageNote: "Свяжитесь с нами для персонального расчёта стоимости.",
    packagesData: [
      { name: "Стандарт", details: ["Планирование операции", "4 ночи проживания", "Трансферы аэропорт-клиника-отель", "Удаленное сопровождение"] },
      { name: "Gold", details: ["Операция + расширенный уход", "5 ночей в отеле 5★", "VIP-трансфер", "Поддержка переводчика"] },
      { name: "Премиум", details: ["Комплексный план лечения", "Люксовое проживание", "Индивидуальный транспорт", "Расширенное послеоперационное наблюдение"] }
    ],
    clinicsLabel: "Наши партнёрские клиники",
    clinicsTitle: "Самые современные медицинские пространства Стамбула",
    clinicsSub: "Каждая клиника выбрана по международным стандартам и уровню сервиса.",
    whyTurkey: "Почему Турция?",
    whyTurkeyP1: "Турция стала ключевым центром медицинского туризма благодаря аккредитованным клиникам и экспертным хирургам.",
    whyTurkeyP2: "В Стамбуле медицинское качество сочетается с комфортным проживанием и удобной логистикой.",
    whyPoints: ["Опытные команды хирургов с международным портфолио.", "Аккредитованные клиники и современное оборудование.", "Прозрачный процесс и полная поддержка поездки."],
    leadLabel: "Быстрая заявка",
    leadTitle: "Получите быстрый обратный звонок",
    leadSub: "Оставьте номер телефона, и мы сразу перенаправим вас в WhatsApp.",
    yourPhone: "Ваш номер телефона",
    continueWa: "Продолжить в WhatsApp",
    popupTitle: "Форма быстрой консультации",
    popupSub: "Заполните данные и продолжите в WhatsApp.",
    sourceLabel: "Тип запроса",
    notes: "Примечания",
    close: "Закрыть",
    sendWa: "Отправить в WhatsApp",
    popupSources: {
      freeQuote: "Бесплатный расчёт",
      beforeAfter: "Запрос До/После"
    }
  }
};

export default function Home() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", treatment: "" });
  const [leadPhone, setLeadPhone] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState("freeQuote");
  const [popupForm, setPopupForm] = useState({ name: "", phone: "", treatment: "", note: "" });

  const t = useMemo(() => content[lang], [lang]);

  const treatments = [
    { ...t.treatments[0], icon: <Sparkles size={24} /> },
    { ...t.treatments[1], icon: <Smile size={24} /> },
    { ...t.treatments[2], icon: <HeartPulse size={24} /> }
  ];

  const journey = [
    { title: t.journey[0], icon: <CalendarCheck2 size={20} /> },
    { title: t.journey[1], icon: <Plane size={20} /> },
    { title: t.journey[2], icon: <Stethoscope size={20} /> },
    { title: t.journey[3], icon: <Hotel size={20} /> },
    { title: t.journey[4], icon: <Clock3 size={20} /> }
  ];

  const openPopup = (source) => {
    setPopupSource(source);
    setPopupOpen(true);
  };

  const sendWhatsapp = (message) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    const message = `${t.sourceLabel}: ${t.requestConsultation}\n${t.name}: ${form.name}\n${t.phone}: ${form.phone}\n${t.treatmentType}: ${form.treatment || "-"}\nLanguage: ${t.langLabel}`;
    sendWhatsapp(message);
  };

  const handleLeadSubmit = () => {
    if (!leadPhone.trim()) return;
    const message = `${t.leadTitle}\n${t.phone}: ${leadPhone.trim()}\nLanguage: ${t.langLabel}`;
    sendWhatsapp(message);
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    if (!popupForm.name.trim() || !popupForm.phone.trim()) return;

    const message = `${t.sourceLabel}: ${t.popupSources[popupSource]}\n${t.name}: ${popupForm.name}\n${t.phone}: ${popupForm.phone}\n${t.treatmentType}: ${popupForm.treatment || "-"}\n${t.notes}: ${popupForm.note || "-"}\nLanguage: ${t.langLabel}`;
    sendWhatsapp(message);
    setPopupOpen(false);
    setPopupForm({ name: "", phone: "", treatment: "", note: "" });
  };

  return (
    <div className="bg-[#FBFBFB] text-[#1A1A1A] selection:bg-[#D4AF37] selection:text-white">
      <SiteHeader onCtaClick={() => openPopup("freeQuote")} />

      <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-4 pb-16 pt-8 sm:gap-24 sm:px-6 sm:pb-24 sm:pt-12">
        <section className="hero-rgb-gradient relative overflow-hidden rounded-[28px] border border-white/40 p-5 shadow-[0_30px_70px_rgba(26,26,26,0.22)] sm:rounded-[36px] sm:p-8 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/90 backdrop-blur sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
                <ShieldCheck size={14} /> {t.trusted}
              </p>
              <h1 className="max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">{t.heroTitle}</h1>
              <p className="mt-4 max-w-2xl text-base text-white/85 sm:mt-6 sm:text-lg">{t.heroSubtitle}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="card-stack-shell mx-auto w-full max-w-md lg:ml-auto lg:mr-0">
              <motion.div aria-hidden className="glass-card-stack-layer stack-layer-back-1" animate={{ y: [0, -8, 0], rotate: [-3.5, -2.2, -3.5], scale: [0.95, 0.97, 0.95] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div aria-hidden className="glass-card-stack-layer stack-layer-back-2" animate={{ y: [0, -6, 0], rotate: [2.8, 1.2, 2.8], scale: [0.97, 0.985, 0.97] }} transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
              <motion.form onSubmit={handleHeroFormSubmit} className="glass-card relative rounded-3xl p-5 sm:p-7">
                <h2 className="text-lg font-semibold text-white sm:text-xl">{t.heroFormTitle}</h2>
                <p className="mt-1 text-sm text-white/75">{t.heroFormSub}</p>
                <div className="mt-5 space-y-3">
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.name} className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-white placeholder:text-white/65 outline-none ring-[#D4AF37]/60 transition focus:ring" />
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder={t.phone} className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-white placeholder:text-white/65 outline-none ring-[#D4AF37]/60 transition focus:ring" />
                  <input value={form.treatment} onChange={(e) => setForm({ ...form, treatment: e.target.value })} placeholder={t.treatmentType} className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-white placeholder:text-white/65 outline-none ring-[#D4AF37]/60 transition focus:ring" />
                </div>
                <button type="submit" className="rich-gradient-button mt-6 w-full rounded-xl py-3 text-xs font-semibold tracking-[0.06em] text-white shadow-[0_16px_34px_rgba(58,12,163,0.35)] sm:text-sm sm:tracking-[0.08em]">
                  {t.requestConsultation}
                </button>
              </motion.form>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{t.signatureTreatments}</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl md:text-4xl">{t.treatmentsTitle}</h2>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#1A1A1A]/75">{t.treatmentsIntro}</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {treatments.map((item) => (
              <article key={item.title} className="rich-gradient-surface group rounded-3xl border border-[#1A1A1A]/10 p-7 shadow-[0_20px_40px_rgba(26,26,26,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(26,26,26,0.12)]">
                <div className="rich-gradient-icon mb-5 inline-flex rounded-2xl border p-3 transition">{item.icon}</div>
                <h3 className="text-lg font-semibold tracking-wide">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/70">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[30px] border border-[#1A1A1A]/8 bg-white p-5 shadow-[0_20px_50px_rgba(26,26,26,0.06)] sm:gap-7 sm:p-8 lg:grid-cols-5 lg:p-10">
          {journey.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl bg-[#FBFBFB] p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">{t.stepLabel} {index + 1}</p>
              <div className="rich-gradient-icon mb-4 inline-flex rounded-xl border p-2">{step.icon}</div>
              <h3 className="font-semibold">{step.title}</h3>
            </div>
          ))}
        </section>

        <section className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-5 shadow-[0_18px_40px_rgba(26,26,26,0.06)] sm:p-7">
            <h3 className="text-xl font-semibold sm:text-2xl">{t.beforeAfter}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">{t.beforeAfterSub}</p>
            <div className="relative mt-6">
              <div className="grid grid-cols-3 gap-3 blur-[4px]">
                {["before", "after", "result"].map((item) => (
                  <div key={item} className="h-32 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612276529731-4b21494e6d71?auto=format&fit=crop&w=500&q=80')" }} />
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-[#1A1A1A]/45 p-4 text-center">
                <p className="max-w-xs text-sm font-medium text-white">{t.beforeAfterOverlay}</p>
                <button onClick={() => openPopup("beforeAfter")} className="rich-gradient-button mt-3 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(58,12,163,0.35)]">
                  {t.beforeAfterButton}
                </button>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-5 shadow-[0_18px_40px_rgba(26,26,26,0.06)] sm:p-7">
            <h3 className="text-xl font-semibold sm:text-2xl">{t.videos}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">{t.videosSub}</p>
            <div className="mt-6 flex h-44 items-center justify-center rounded-2xl border border-dashed border-[#1A1A1A]/20 bg-gradient-to-br from-[#1A1A1A]/5 to-[#000080]/10 text-[#1A1A1A]/75">
              <Video className="mr-2" /> {t.videoPlaceholder}
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-5 shadow-[0_18px_40px_rgba(26,26,26,0.06)] sm:p-8">
          <h3 className="text-xl font-semibold sm:text-2xl">{t.about}</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/75">{t.aboutP1}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/75">{t.aboutP2}</p>
        </section>

        <section className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-5 shadow-[0_18px_40px_rgba(26,26,26,0.06)] sm:p-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{t.packages}</p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{t.packagesTitle}</h3>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {t.packagesData.map((pkg) => (
              <article key={pkg.name} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-6">
                <h4 className="text-xl font-semibold">{pkg.name}</h4>
                <div className="mt-3 inline-block rounded-lg bg-[#1A1A1A]/10 px-3 py-1 text-sm font-semibold text-[#1A1A1A] blur-[2px]">€ XXXX</div>
                <p className="mt-2 text-xs text-[#1A1A1A]/65">{t.packageNote}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#1A1A1A]/75">
                  {pkg.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-5 shadow-[0_18px_40px_rgba(26,26,26,0.06)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{t.clinicsLabel}</p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{t.clinicsTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/70">{t.clinicsSub}</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["before", "after", "result"].map((item) => (
                <div key={item} className="h-32 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80')" }} />
              ))}
            </div>
          </article>

          <aside className="rounded-3xl border border-[#1A1A1A]/10 bg-[#1A1A1A] p-5 text-white shadow-[0_25px_50px_rgba(26,26,26,0.35)] sm:p-8">
            <h3 className="text-xl font-semibold sm:text-2xl">{t.whyTurkey}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/85">{t.whyTurkeyP1}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{t.whyTurkeyP2}</p>
            <ul className="mt-5 space-y-4 text-sm text-white/85">
              <li className="flex gap-3"><UserRound size={18} className="text-[#D4AF37]" />{t.whyPoints[0]}</li>
              <li className="flex gap-3"><Building2 size={18} className="text-[#D4AF37]" />{t.whyPoints[1]}</li>
              <li className="flex gap-3"><ShieldCheck size={18} className="text-[#D4AF37]" />{t.whyPoints[2]}</li>
            </ul>
          </aside>
        </section>
      </main>

      <footer className="border-t border-[#1A1A1A]/10 bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{t.leadLabel}</p>
            <h4 className="mt-2 text-xl font-semibold sm:text-2xl">{t.leadTitle}</h4>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">{t.leadSub}</p>
            <div className="mt-4 flex max-w-md flex-col gap-2 sm:flex-row">
              <input value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)} placeholder={t.yourPhone} className="w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3" />
              <button onClick={handleLeadSubmit} className="rich-gradient-button rounded-xl px-5 py-3 text-sm font-semibold text-white">{t.continueWa}</button>
            </div>
          </div>

          <div className="space-y-2 text-sm text-[#1A1A1A]/75">
            <p className="font-semibold text-[#1A1A1A]">Istanbul Office</p>
            <p>Nispetiye Cad. No: 22, Besiktas, Istanbul, Turkey</p>
            <p>WhatsApp: +90 500 000 00 00</p>
            <p>Phone: +90 212 000 00 00</p>
            <p>Email: info@nlsaglikturizmi.com</p>
          </div>
        </div>
      </footer>

      {popupOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 p-4">
          <form onSubmit={handlePopupSubmit} className="w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl sm:p-7">
            <h3 className="text-xl font-semibold sm:text-2xl">{t.popupTitle}</h3>
            <p className="mt-1 text-sm text-[#1A1A1A]/70">{t.popupSub}</p>
            <div className="mt-5 space-y-3">
              <input value={popupForm.name} onChange={(e) => setPopupForm({ ...popupForm, name: e.target.value })} placeholder={t.name} className="w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3" />
              <input value={popupForm.phone} onChange={(e) => setPopupForm({ ...popupForm, phone: e.target.value })} placeholder={t.phone} className="w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3" />
              <input value={popupForm.treatment} onChange={(e) => setPopupForm({ ...popupForm, treatment: e.target.value })} placeholder={t.treatmentType} className="w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3" />
              <textarea value={popupForm.note} onChange={(e) => setPopupForm({ ...popupForm, note: e.target.value })} placeholder={t.notes} className="h-24 w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3" />
            </div>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => setPopupOpen(false)} className="rounded-xl border border-[#1A1A1A]/20 px-4 py-2 text-sm font-semibold">{t.close}</button>
              <button type="submit" className="rich-gradient-button rounded-xl px-4 py-2 text-sm font-semibold text-white">{t.sendWa}</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
