"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import {
  Mail,
  ChevronDown,
  MessageCircle,
  Send,
  Quote,
  Globe,
  Phone,
  Menu,
  X,
  User,
  HeartPulse,
  CircleHelp,
  Building2,
  Stethoscope,
  ArrowLeft,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  tr: {
    languageLabel: "Türkçe",
    topEmail: "info@newlifehealth.com",
    nav: ["Ana Sayfa", "Kurumsal", "Hizmetler", "Tedavi Süreci", "NEWLIFE Blog", "İletişim"],
    heroTag: "5K+ Uluslararası Hasta • 4.8 Puan",
    heroTitle1: "Sağlığınızı Ertelemeyin:",
    heroTitle2: "Uzman Geri Araması İçin",
    heroTitle3: "Bilgilerinizi Bırakın",
    heroSubText: "15K+ konsültasyon • 1K olumlu yorum",
    partnership: "Partnerlik",
    formName: "Ad Soyad",
    formPhone: "Telefon",
    formTreatment: "Tedavi Türü",
    formLanguage: "Dil",
    send: "Gönder",
    sent: "Gönderildi",
    quickActions: ["Ücretsiz Teklif Al", "Doktorlarla Görüş", "Ağımız", "Sağlık Hizmeti", "Sonrası Destek", "Check-Up"],
    treatmentTag: "NEWLIFE HEALTH",
    treatmentTitle: "Türk Sağlık Turizminde Popüler Tedaviler",
    treatments: [
      "Yüz & Boyun Germe",
      "Liposuction",
      "BBL",
      "Hollywood Smile",
      "Dental İmplant",
      "Göz Lazer & Akıllı Lens",
      "Blefaroplasti",
      "Saç Ekimi"
    ],
    infoBanner:
      "🇪🇺 ↔ 🇹🇷 Tedavi hizmetlerimiz, yüksek kalite standartlarına uygun şekilde sağlık turizmi yetki belgesine sahip anlaşmalı sağlık kurumlarında sunulmaktadır.",
    serviceTabs: ["Hastaneler & Klinikler", "Sağlık Hizmetleri", "Doktorla Görüş", "Evde Bakım", "Uzman Tedaviler", "Laboratuvar Testleri", "İlaç & Malzeme"],
    testimonialTag: "Yorumlar",
    testimonialTitle: "Uluslararası Hastalar Türkiye'deki Tıbbi Yolculukları Hakkında Ne Diyor?",
    stats: [
      ["20+", "Tıbbi Uzmanlık"],
      ["100+", "Doktor"],
      ["40+", "Hizmet Verilen Ülke"],
      ["98%", "Memnuniyet"],
      ["15+", "Yıl Deneyim"]
    ],
    testimonials: [
      {
        rating: 5,
        title: "Sıcak ve Güven Verici",
        text: "Tıbbi ekip son derece ilgili ve güler yüzlüydü. Sürecim baştan sona güvenli, konforlu ve çok iyi planlandı.",
        name: "Daria Boselli",
        country: "İtalya",
        image: "/10.jpeg"
      },
      {
        rating: 4,
        title: "Harika Bir Deneyim",
        text: "Akıllı lens operasyonu sonrası görüşüm çok netleşti. Ekip tüm aşamalarda detaylı bilgilendirme yaptı.",
        name: "Artem Kravchenko",
        country: "Ukrayna",
        image: "/9.jpeg"
      },
      {
        rating: 5,
        title: "Pürüzsüz Süreç",
        text: "Başlangıçtan iyileşme dönemine kadar her şey çok düzenliydi. Destek ekibi beklentimin üstündeydi.",
        name: "Katya Chernov",
        country: "Rusya",
        image: "/10-1.jpeg"
      }
    ],
    whyTag: "Neden Newlife Health",
    whyTitle: "Güvenilir Bakım, Global Standartlar",
    graftTitle: "Greft Hesaplayıcı",
    graftSubtitle: "Tedavi etmek istediğiniz saç dökülme bölgelerini seçin",
    selectedZonesTitle: "Seçilen bölgeler",
    zonePrefix: "Bölge",
    approxGraftsLabel: "Yaklaşık greft sayısı",
    approxHairsLabel: "Yaklaşık saç teli sayısı",
    consultationButton: "Ücretsiz Konsültasyon Al",
    whyItems: [
      ["Yetkili Sağlık Kurumu Ağı", "Sizi sadece sağlık turizmi yetki belgesine sahip anlaşmalı kurumlarla buluşturuyoruz."],
      ["Şeffaf ve Planlı Süreç", "İlk danışmadan Türkiye'deki tedavi planınıza kadar tüm aşamaları net şekilde yönetiyoruz."],
      ["Tek Noktadan Koordinasyon", "Tedavi, transfer, konaklama ve sonrası takip tek bir koordinasyon ekibiyle ilerler."]
    ],
    ctaTitle: "Her Tedavide Mükemmellik.",
    ctaPhone: "+90 546 524 8334",
    consultant: "Lina ile Sohbet",
    consultantSub: "Dijital Sağlık Danışmanı",
    chatTitle: "Lina ile Sohbet",
    chatPlaceholder: "Mesajınızı yazın...",
    chatSend: "WhatsApp'a Gönder",
    chatClose: "Kapat"
  },
  en: {
    languageLabel: "English",
    topEmail: "info@newlifehealth.com",
    nav: ["Home", "Corporate", "Services", "Treatment Process", "NEWLIFE Blog", "Contact"],
    heroTag: "5K+ International Patients • 4.8 Ratings",
    heroTitle1: "Don't Delay Your Health:",
    heroTitle2: "Leave Your Details",
    heroTitle3: "for an Expert Callback",
    heroSubText: "15K+ consultations • 1K positive reviews",
    partnership: "Partnership",
    formName: "Enter your name",
    formPhone: "Phone Number",
    formTreatment: "Treatment Type",
    formLanguage: "Language",
    send: "Send",
    sent: "Sent",
    quickActions: ["Get a Free Quote", "Talk to Doctors", "Our Network", "Healthcare", "Aftercare Help", "Health Check-Up"],
    treatmentTag: "NEWLIFE HEALTH",
    treatmentTitle: "Popular Treatments in Turkish Health Tourism",
    treatments: ["Face & Neck Lift", "Liposuction", "Brazilian Butt Lift", "Hollywood Smile", "Dental Implants", "Eye Laser & Smart Lens", "Blepharoplasty", "Hair Transplant"],
    infoBanner:
      "🇪🇺 ↔ 🇹🇷 Our treatment services are provided in contracted healthcare institutions that hold the required medical tourism authorization certificate, in line with high quality standards.",
    serviceTabs: ["Hospitals & Clinics", "Health Services", "Talk to Doctor", "Home Care", "Specialist Treatments", "Lab Testing", "Medications & Supplies"],
    testimonialTag: "Testimonials",
    testimonialTitle: "What International Patients Say About Their Medical Journey in Turkey",
    stats: [
      ["20+", "Medical Specialties"],
      ["100+", "Doctors Available"],
      ["40+", "Countries Served"],
      ["98%", "Satisfaction Rate"],
      ["15+", "Years of Experience"]
    ],
    testimonials: [
      {
        rating: 5,
        title: "Warm and Welcoming",
        text: "The medical team was incredibly welcoming and friendly. My journey felt safe, smooth, and very rewarding.",
        name: "Daria Boselli",
        country: "Italy",
        image: "/10.jpeg"
      },
      {
        rating: 4,
        title: "Total Eye Opener",
        text: "My smart lens surgery was the best decision I made. The team guided me clearly through each step.",
        name: "Artem Kravchenko",
        country: "Ukraine",
        image: "/9.jpeg"
      },
      {
        rating: 5,
        title: "Smooth Experience",
        text: "I had a very organized treatment process from start to finish, and the recovery support exceeded my expectations.",
        name: "Katya Chernov",
        country: "Russia",
        image: "/10-1.jpeg"
      }
    ],
    whyTag: "Why Newlife Health",
    whyTitle: "Trusted Care, Global Standards",
    graftTitle: "Graft Calculator",
    graftSubtitle: "Select the hair loss areas you would like to treat",
    selectedZonesTitle: "Selected zones",
    zonePrefix: "Zone",
    approxGraftsLabel: "Approximate number of grafts",
    approxHairsLabel: "Approximate number of hairs",
    consultationButton: "Book a free consultation",
    whyItems: [
      ["Authorized Provider Network", "We connect you only with contracted institutions that hold official medical tourism authorization."],
      ["Clear & Structured Journey", "From first consultation to your treatment plan in Turkey, every step is communicated clearly."],
      ["Single-Point Coordination", "Treatment, transfers, accommodation, and aftercare are coordinated by one dedicated team."]
    ],
    ctaTitle: "Excellence in Every Treatment.",
    ctaPhone: "+90 546 524 8334",
    consultant: "Chat with Lina",
    consultantSub: "Digital Health Consultant",
    chatTitle: "Chat with Lina",
    chatPlaceholder: "Type your message...",
    chatSend: "Send to WhatsApp",
    chatClose: "Close"
  },
  ru: {
    languageLabel: "Русский",
    topEmail: "info@newlifehealth.com",
    nav: ["Главная", "О нас", "Услуги", "Процесс лечения", "Блог", "Контакты"],
    heroTag: "5K+ международных пациентов • 4.8 рейтинг",
    heroTitle1: "Не откладывайте здоровье:",
    heroTitle2: "Оставьте ваши данные",
    heroTitle3: "для звонка эксперта",
    heroSubText: "15K+ консультаций • 1K положительных отзывов",
    partnership: "Партнерство",
    formName: "Ваше имя",
    formPhone: "Телефон",
    formTreatment: "Тип лечения",
    formLanguage: "Язык",
    send: "Отправить",
    sent: "Отправлено",
    quickActions: ["Получить расчет", "Связь с врачом", "Наша сеть", "Медуслуги", "Поддержка", "Check-Up"],
    treatmentTag: "NEWLIFE HEALTH",
    treatmentTitle: "Популярные направления лечения в Турции",
    treatments: ["Подтяжка лица и шеи", "Липосакция", "BBL", "Голливудская улыбка", "Дентальные импланты", "Лазер и умные линзы", "Блефаропластика", "Пересадка волос"],
    infoBanner:
      "🇪🇺 ↔ 🇹🇷 Лечение проводится в партнерских клиниках с сертификатом медицинского туризма и высокими стандартами качества.",
    serviceTabs: ["Клиники и госпитали", "Медуслуги", "Связь с врачом", "Домашний уход", "Спецлечение", "Лаборатория", "Медикаменты"],
    testimonialTag: "Отзывы",
    testimonialTitle: "Что говорят международные пациенты о лечении в Турции",
    stats: [
      ["20+", "Медицинских направлений"],
      ["100+", "Докторов"],
      ["40+", "Стран"],
      ["98%", "Уровень удовлетворенности"],
      ["15+", "Лет опыта"]
    ],
    testimonials: [
      {
        rating: 5,
        title: "Теплый прием",
        text: "Команда была внимательной и профессиональной. Я чувствовала себя в надежных руках на каждом этапе.",
        name: "Daria Boselli",
        country: "Италия",
        image: "/10.jpeg"
      },
      {
        rating: 4,
        title: "Отличный результат",
        text: "После операции смарт-линз вижу намного лучше, а сопровождение было очень понятным.",
        name: "Artem Kravchenko",
        country: "Украина",
        image: "/9.jpeg"
      },
      {
        rating: 5,
        title: "Идеально организовано",
        text: "Вся поездка и лечение были организованы безупречно, поддержка была на каждом шаге.",
        name: "Katya Chernov",
        country: "Россия",
        image: "/10-1.jpeg"
      }
    ],
    whyTag: "Почему Newlife Health",
    whyTitle: "Надежное лечение, глобальные стандарты",
    graftTitle: "Калькулятор графтов",
    graftSubtitle: "Выберите зоны выпадения волос, которые хотите лечить",
    selectedZonesTitle: "Выбранные зоны",
    zonePrefix: "Зона",
    approxGraftsLabel: "Примерное количество графтов",
    approxHairsLabel: "Примерное количество волос",
    consultationButton: "Бесплатная консультация",
    whyItems: [
      ["Сеть авторизованных учреждений", "Направляем только в партнерские учреждения с официальным разрешением на медтуризм."],
      ["Понятный и структурный процесс", "От первой консультации до плана лечения в Турции — каждый шаг прозрачно согласован."],
      ["Координация через одну команду", "Лечение, трансфер, проживание и послеоперационное сопровождение ведет единая команда."]
    ],
    ctaTitle: "Совершенство в каждом лечении.",
    ctaPhone: "+90 546 524 8334",
    consultant: "Чат с Линой",
    consultantSub: "Цифровой консультант",
    chatTitle: "Чат с Линой",
    chatPlaceholder: "Введите сообщение...",
    chatSend: "Отправить в WhatsApp",
    chatClose: "Закрыть"
  }
};

export default function HomePage() {
  const { lang, setLang } = useLanguage();
  const t = content[lang] || content.en;
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const treatmentRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", phone: "", treatment: "", language: lang.toUpperCase() });
  const [selectedZones, setSelectedZones] = useState([]);

  const quickIcons = [CircleHelp, Stethoscope, Building2, HeartPulse, User, Stethoscope];
  const zoneConfigs = [
    { id: 1, graftMin: 600, graftMax: 800, clipPath: "polygon(8% 62%, 18% 57%, 26% 59%, 30% 66%, 28% 75%, 18% 78%, 10% 73%)", labelX: "18%", labelY: "67%" },
    { id: 2, graftMin: 1900, graftMax: 2100, clipPath: "polygon(16% 46%, 84% 46%, 88% 58%, 82% 68%, 68% 75%, 32% 75%, 18% 68%, 12% 58%)", labelX: "50%", labelY: "59%" },
    { id: 3, graftMin: 900, graftMax: 1100, clipPath: "polygon(28% 42%, 72% 42%, 79% 52%, 73% 62%, 60% 67%, 40% 67%, 27% 62%, 21% 52%)", labelX: "50%", labelY: "56%" },
    { id: 4, graftMin: 700, graftMax: 900, clipPath: "polygon(9% 30%, 26% 24%, 40% 28%, 43% 40%, 28% 47%, 12% 44%)", labelX: "19%", labelY: "38%" },
    { id: 5, graftMin: 1400, graftMax: 1600, clipPath: "polygon(23% 16%, 50% 12%, 77% 16%, 90% 26%, 84% 35%, 72% 40%, 50% 42%, 28% 40%, 16% 35%, 10% 26%)", labelX: "73%", labelY: "27%" },
    { id: 6, graftMin: 800, graftMax: 800, clipPath: "polygon(29% 8%, 50% 5%, 71% 8%, 76% 16%, 69% 23%, 50% 26%, 31% 23%, 24% 16%)", labelX: "50%", labelY: "16%" }
  ];
  const treatmentImages = [
    "https://framerusercontent.com/images/wEkOWX1ML7fes0rVZookZRz5Epg.jpg?width=2048&height=2048",
    "https://cdn.scope.digital/Images/Articles/liposuction-nedir-kimler-yaptirabilir-2898767.jpg?tr=w-630,h-420",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7QOmvxVaigT_pWvOA_S29Hg7WBjPuD830A&s",
    "https://clinicego.com/wp-content/uploads/elementor/thumbs/hollywood-smile-qzer0j15xw9a8howopyj0urfyk7ewmsbstos45gfgg.webp",
    "https://upload.wikimedia.org/wikipedia/commons/1/1d/Dental-implant-illustration.jpg",
    "https://venividigoz.com/uploads/v1/akilli-lensler-kopya.jpg",
    "https://i0.wp.com/www.bursagoz.com/wp-content/uploads/2020/02/goz-kapak-kaldirma.jpg?fit=800%2C445&ssl=1",
    "https://oclinic.com.tr/wp-content/uploads/2022/02/FUE-teknii-1024x768.jpg.webp"
  ];
  const visibleTestimonials = useMemo(() => {
    const full = [...t.testimonials, ...t.testimonials];
    return full.slice(testimonialIndex, testimonialIndex + 3);
  }, [testimonialIndex, t.testimonials]);
  const selectedZoneData = useMemo(() => zoneConfigs.filter((zone) => selectedZones.includes(zone.id)), [selectedZones]);
  const totalGrafts = useMemo(
    () =>
      selectedZoneData.reduce(
        (total, zone) => ({ min: total.min + zone.graftMin, max: total.max + zone.graftMax }),
        { min: 0, max: 0 }
      ),
    [selectedZoneData]
  );
  const totalHairs = useMemo(() => ({ min: totalGrafts.min * 2.2, max: totalGrafts.max * 2.2 }), [totalGrafts]);

  const handleSend = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 2000);
  };

  const scrollTreatments = (direction) => {
    if (!treatmentRef.current) return;
    treatmentRef.current.scrollBy({ left: direction * 240, behavior: "smooth" });
  };

  const handleWhatsAppSend = () => {
    if (!chatMessage.trim()) return;
    const whatsappNumber = "905467372284";
    const encodedMessage = encodeURIComponent(chatMessage.trim());
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    setChatOpen(false);
    setChatMessage("");
  };
  const toggleZone = (zoneId) => {
    setSelectedZones((prev) => (prev.includes(zoneId) ? prev.filter((id) => id !== zoneId) : [...prev, zoneId].sort((a, b) => a - b)));
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f8fd] text-[#1d3257]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-3 text-sm text-[#26446e]">
          <p className="flex items-center gap-2 font-medium">
            <Mail className="h-4 w-4" />
            {t.topEmail}
          </p>
          <div className="flex items-center gap-2 font-semibold">
            <Globe className="h-4 w-4" />
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-transparent">
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-3 px-4 py-3 md:py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white md:h-14 md:w-14">
              <Image src="/logo.png" alt="Newlife Health logo" width={56} height={56} className="h-full w-full object-contain p-1" priority />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-wide text-[#173b69] md:text-base">NEWLIFE HEALTH</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4d6789] md:text-[11px]">Tourism Agency</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[15px] font-semibold text-[#203a64] xl:flex">
            {t.nav.map((item, idx) => (
              <a key={item} href="#" className="inline-flex items-center gap-1 hover:text-[#1f77d2]">
                {item}
                {(idx === 1 || idx === 2 || idx === 3) && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full bg-[#2ca3e3] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1a8dd0] lg:block">{t.partnership}</button>
            <button className="rounded-lg border border-slate-200 p-2 lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle mobile menu">
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 px-4 pb-4 lg:hidden">
            {t.nav.map((item) => (
              <a key={item} href="#" className="block py-2 font-medium text-[#203a64]">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-6 pt-6">
        <div className="grid items-center gap-8 rounded-[2rem] bg-[#deeeff] px-5 py-8 md:px-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#24518a] shadow">{t.heroTag}</span>
            <h1 className="text-4xl font-bold leading-tight text-[#0f2f5d] md:text-6xl">
              {t.heroTitle1} <span className="text-[#1093e8]">{t.heroTitle2}</span> {t.heroTitle3}
            </h1>
            <form onSubmit={handleSend} className="rounded-full border-2 border-[#f39562] bg-white p-2 shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <label className="flex min-w-[160px] flex-1 items-center gap-2 rounded-full border px-3 py-2 text-sm">
                  <User className="h-4 w-4 text-slate-400" />
                  <input className="w-full outline-none" placeholder={t.formName} value={formData.name} onChange={(e) => setFormData((v) => ({ ...v, name: e.target.value }))} />
                </label>
                <label className="flex min-w-[160px] flex-1 items-center gap-2 rounded-full border px-3 py-2 text-sm">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <input className="w-full outline-none" placeholder={t.formPhone} value={formData.phone} onChange={(e) => setFormData((v) => ({ ...v, phone: e.target.value }))} />
                </label>
                <label className="flex min-w-[160px] flex-1 items-center gap-2 rounded-full border px-3 py-2 text-sm">
                  <HeartPulse className="h-4 w-4 text-slate-400" />
                  <input className="w-full outline-none" placeholder={t.formTreatment} value={formData.treatment} onChange={(e) => setFormData((v) => ({ ...v, treatment: e.target.value }))} />
                </label>
                <button className="rounded-full bg-[#f06b2f] px-6 py-2.5 font-semibold text-white hover:bg-[#d95921]">{formSent ? t.sent : t.send}</button>
              </div>
            </form>
            <p className="text-sm font-semibold text-[#1a4d82]">{t.heroSubText}</p>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-1/2 z-10 -translate-y-1/2 rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold shadow">15K+ Consultations</div>
            <div className="absolute -right-2 top-6 z-10 rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold shadow">1K Reviews</div>
            <div className="mx-auto max-w-[430px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#b1dcff] to-[#73c6ff] p-2">
              <Image src="/slide.jpg" alt="Doctor consultation visual" width={520} height={640} className="h-[420px] w-full rounded-[1.5rem] bg-white object-contain object-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-4">
        <div className="grid gap-3 rounded-2xl bg-white p-4 shadow sm:grid-cols-3 lg:grid-cols-6">
          {t.quickActions.map((item, index) => {
            const Icon = quickIcons[index] || CircleHelp;
            return (
              <button key={item} className="rounded-xl px-3 py-4 text-center transition hover:bg-[#edf6ff]">
                <Icon className="mx-auto mb-2 h-6 w-6 text-[#1576c2]" />
                <span className="text-sm font-semibold text-[#163a68]">{item}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-8 pt-6">
        <div className="mb-5 text-center">
          <span className="rounded-full bg-[#118bd6] px-3 py-1 text-xs font-semibold text-white">{t.treatmentTag}</span>
          <h2 className="mt-3 text-3xl font-bold text-[#0f2f5d] md:text-5xl">{t.treatmentTitle}</h2>
        </div>
        <div ref={treatmentRef} className="flex snap-x gap-4 overflow-x-auto scroll-smooth pb-4">
          {t.treatments.map((item, idx) => (
            <article key={item} className="w-[160px] shrink-0 snap-start">
              <Image src={treatmentImages[idx]} alt={item} width={160} height={190} className="h-[170px] w-full rounded-2xl object-cover" />
              <p className="mt-2 text-center text-sm font-semibold text-[#1b3d69]">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-2">
          <button onClick={() => scrollTreatments(-1)} className="rounded-full border bg-white p-2">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scrollTreatments(1)} className="rounded-full border bg-white p-2">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-10">
        <div className="rounded-2xl border border-[#b7d9f4] bg-[#ecf7ff] p-5 text-center shadow-sm md:p-8">
          <p className="text-lg font-bold leading-snug text-[#1c6eb3] md:text-[26px]">{t.infoBanner}</p>
        </div>
      </section>

      <section className="mt-2 border-y border-[#ef8553] bg-[#ef7b3b]">
        <div className="mx-auto flex w-full max-w-[1280px] snap-x items-center gap-8 overflow-x-auto px-4 py-4 text-xl font-semibold text-white">
          {t.serviceTabs.map((tab) => (
            <span key={tab} className="relative shrink-0 whitespace-nowrap pr-8 after:absolute after:right-0 after:top-1/2 after:h-px after:w-6 after:-translate-y-1/2 after:bg-white/75 last:pr-0 last:after:hidden">
              {tab}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-12 pt-12">
        <div className="mb-8 flex flex-col items-center">
          <span className="rounded-full bg-[#198fd0] px-5 py-1.5 text-sm font-semibold text-white">{t.testimonialTag}</span>
          <h2 className="mt-5 max-w-[1040px] text-center text-3xl font-bold leading-tight text-[#0f2f5d] md:text-5xl">{t.testimonialTitle}</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleTestimonials.map((card) => (
            <article key={card.name} className="rounded-3xl border border-[#dbe5f2] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-2xl tracking-wide text-[#f7bf1e]">{Array.from({ length: 5 }, (_, j) => (j < card.rating ? "★" : "☆")).join("")}</p>
                <Quote className="h-8 w-8 text-[#ef6a2f]" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold leading-tight text-[#173b69]">{card.title}</h3>
              <p className="mb-6 text-base leading-relaxed text-[#496281]">{card.text}</p>
              <div className="flex items-center gap-3">
                <Image src={card.image} alt={card.name} width={54} height={54} className="h-[54px] w-[54px] rounded-full object-cover" />
                <div>
                  <p className="text-lg font-semibold leading-tight text-[#153761]">{card.name}</p>
                  <p className="text-sm text-[#4f6788]">{card.country}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-2">
          <button onClick={() => setTestimonialIndex((v) => (v + t.testimonials.length - 1) % t.testimonials.length)} className="rounded-full border bg-white p-2">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button onClick={() => setTestimonialIndex((v) => (v + 1) % t.testimonials.length)} className="rounded-full border bg-white p-2">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {t.stats.map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-bold text-[#0f2f5d]">{value}</p>
              <p className="text-sm font-semibold text-[#3f638f]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#021945] py-8 text-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-center gap-8 px-4">
          {["MEDIPOL", "AIZ", "Health Türkiye", "Bitrix24", "Hilton", "Medigma", "Straumann"].map((logo) => (
            <span key={logo} className="text-lg font-semibold text-white/80">
              {logo}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 py-14">
        <div className="rounded-[2rem] bg-[#eef5fd] p-6 shadow-md md:p-10">
          <h2 className="text-center text-4xl font-bold text-[#101f35] md:text-6xl">{t.graftTitle}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-center text-lg text-[#4f6277]">{t.graftSubtitle}</p>
          <div className="mt-8 grid items-center gap-6 xl:grid-cols-[1fr_1.2fr_1fr]">
            <aside className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold text-[#34465b]">{t.selectedZonesTitle}</h3>
              <div className="space-y-3">
                {zoneConfigs.map((zone) => {
                  const isSelected = selectedZones.includes(zone.id);
                  return (
                    <button key={zone.id} onClick={() => toggleZone(zone.id)} className="flex w-full items-center gap-3 text-left">
                      {isSelected ? <CheckCircle2 className="h-5 w-5 text-[#131c28]" /> : <span className="h-5 w-5 rounded-full border border-[#9ba8b7]" />}
                      <span className="text-lg font-semibold leading-none text-[#111827] md:text-2xl">{t.zonePrefix} {zone.id}</span>
                      <span className="text-lg leading-none text-[#556476] md:text-2xl">
                        {zone.graftMin === zone.graftMax ? `${zone.graftMin}` : `${zone.graftMin} - ${zone.graftMax}`} Grafts
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="relative mx-auto h-[430px] w-full max-w-[500px] overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image src="/bald-man.jpeg" alt="Graft area model head" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-[#c9d3de]/15" />
              {zoneConfigs.map((zone) => {
                const isSelected = selectedZones.includes(zone.id);
                return (
                  <button
                    key={`head-${zone.id}`}
                    onClick={() => toggleZone(zone.id)}
                    className={`absolute inset-0 border border-dashed border-[#4b5563]/55 text-xl font-semibold text-[#111827] transition ${isSelected ? "bg-[#f5b892]/55" : "bg-[#afc6cf]/25 hover:bg-[#afc6cf]/40"}`}
                    style={{ clipPath: zone.clipPath }}
                    aria-label={`${t.zonePrefix} ${zone.id}`}
                  />
                );
              })}
              {zoneConfigs.map((zone) => (
                <span
                  key={`head-label-${zone.id}`}
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-[#111827]"
                  style={{ left: zone.labelX, top: zone.labelY }}
                >
                  {zone.id}
                </span>
              ))}
            </div>

            <aside className="rounded-3xl p-4">
              <p className="text-2xl font-medium text-[#34465b] md:text-4xl">{t.approxGraftsLabel}</p>
              <p className="mt-2 text-5xl font-semibold leading-none text-[#111827] md:text-7xl">
                {totalGrafts.min === totalGrafts.max ? totalGrafts.min : `${totalGrafts.min} - ${totalGrafts.max}`} Grafts
              </p>
              <p className="mt-4 text-5xl font-medium leading-none text-[#5f6f81] md:text-7xl">
                {Math.round(totalHairs.min) === Math.round(totalHairs.max)
                  ? Math.round(totalHairs.min)
                  : `${Math.round(totalHairs.min)} - ${Math.round(totalHairs.max)}`}{" "}
                Hairs
              </p>
              <button className="mt-10 rounded-3xl bg-gradient-to-r from-[#77d0e8] to-[#61a8ea] px-10 py-5 text-xl font-medium text-[#0f1b2b] md:text-3xl">
                {t.consultationButton}
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 py-14">
        <div className="mb-8 text-center">
          <span className="rounded-full bg-[#198fd0] px-5 py-1.5 text-sm font-semibold text-white">{t.whyTag}</span>
          <h2 className="mt-4 text-4xl font-bold text-[#0f2f5d]">{t.whyTitle}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {t.whyItems.map(([title, description]) => (
            <article key={title} className="rounded-2xl border bg-white p-6">
              <h3 className="mb-2 text-lg font-bold text-[#173b69]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#4d6789]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-10">
        <div className="rounded-[1.6rem] bg-[#f4772e] px-8 py-10 text-white md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-bold md:text-5xl">{t.ctaTitle}</h2>
          <div className="mt-6 space-y-2 md:mt-0">
            <p className="flex items-center gap-2 text-lg font-semibold">
              <Phone className="h-5 w-5" /> {t.ctaPhone}
            </p>
            <p className="flex items-center gap-2 text-lg font-semibold">
              <Mail className="h-5 w-5" /> info@newlifehealth.com
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t bg-[#eaf2fc]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image src="/logo.png" alt="NEWLIFE HEALTH Logo" width={160} height={48} className="mb-3 h-12 w-auto object-contain" />
            <p className="max-w-[420px] text-sm leading-relaxed text-[#3d5f89]">
              NEWLIFE HEALTH is a registered medical travel and treatment coordination brand operating with authorized healthcare institutions in Turkey.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-[#173b69]">License Numbers</h4>
            <p className="text-sm text-[#3d5f89]">AK-1346 • 13098</p>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-[#173b69]">Connect With Us</h4>
            <p className="text-sm text-[#3d5f89]">Ataköy 7-8-9-10 Kısım Mah. Çobançeşme E5 Yan Yol Cad.</p>
            <p className="mt-2 text-sm font-semibold text-[#173b69]">info@newlifehealth.com</p>
          </div>
        </div>
        <div className="border-t px-4 py-4 text-center text-sm text-[#4b678c]">Copyright © 2026 NEWLIFE HEALTH Sağlık Turizmi A.Ş</div>
      </footer>

      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-[#dce4f2] bg-white px-4 py-2.5 text-left shadow-xl transition hover:shadow-2xl"
      >
        <Image src="/10.jpeg" alt="Consultant" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
        <div className="hidden md:block">
          <p className="text-xl font-semibold text-[#1b3e6b]">{t.consultant}</p>
          <p className="text-sm text-[#4f6588]">{t.consultantSub}</p>
        </div>
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[320px] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-base font-bold text-[#173b69]">{t.chatTitle}</p>
              <p className="text-xs text-[#4f6588]">{t.consultantSub}</p>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="rounded-md px-2 py-1 text-xs font-semibold text-[#4f6588] hover:bg-slate-100"
            >
              {t.chatClose}
            </button>
          </div>
          <textarea
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder={t.chatPlaceholder}
            className="h-28 w-full resize-none rounded-xl border border-slate-200 p-3 text-sm outline-none ring-[#1cbf5d] focus:ring-2"
          />
          <button
            onClick={handleWhatsAppSend}
            disabled={!chatMessage.trim()}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1cbf5d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#17a34e] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <MessageCircle className="h-4 w-4" />
            {t.chatSend}
          </button>
        </div>
      )}

      <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        <button className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#2f7ae5] text-white shadow-lg" aria-label="Telegram">
          <Send className="h-6 w-6" />
        </button>
        <button className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#6c53df] text-white shadow-lg" aria-label="Viber">
          <MessageCircle className="h-6 w-6" />
        </button>
        <button className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1cbf5d] text-white shadow-lg" aria-label="WhatsApp">
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </main>
  );
}
