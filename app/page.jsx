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
  PlaneTakeoff,
  Car,
  TestTube2,
  UserRoundSearch,
  Coffee,
  HandHeart,
  Droplets,
  MessageCircleHeart,
  Leaf,
  Sparkles,
  Scissors,
  TrendingUp,
  Flag
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
    journeyTitle: "4 günlük saç ekimi yolculuğunuza bir göz atın",
    journeyDays: [
      {
        day: "1. Gün",
        items: [
          { icon: "plane", title: "Havalimanına varış", description: "Sürücümüz sizi karşılayarak kan tahlili için kliniğe, ardından otelinize götürür." },
          { icon: "car", title: "Kliniğe transfer", badge: "maks 1 saat" },
          { icon: "test", title: "Kan örneği", badge: "maks 45 dk" }
        ]
      },
      {
        day: "2. Gün",
        items: [
          { icon: "consult", title: "1. Konsültasyon", description: "Doktorunuzla görüşür, saç ekimi seçenekleri ve saç çizgisi tasarımı planlanır.", badge: "1 - 2 saat" },
          { icon: "free", title: "İstanbul’da serbest zaman", description: "Bir sonraki gün öncesi dinlenmek ve şehri keşfetmek için geniş zamanınız olur." }
        ]
      },
      {
        day: "3. Gün",
        items: [
          { icon: "consult2", title: "2. Konsültasyon", description: "Doğal görünüm için son değerlendirmeler yapılır ve işlem planı netleştirilir.", badge: "1 saat" },
          { icon: "procedure", title: "İşlem", description: "Lokal anestezi altında ortalama 5 - 7 saat sürer. İşlemden sonra dinlenmeniz için otele transfer edilirsiniz.", badge: "5 - 7 saat" }
        ]
      },
      {
        day: "4. Gün",
        items: [
          { icon: "wash", title: "Saç yıkama", badge: "1 saat" },
          { icon: "aftercare", title: "Bakım sonrası danışmanlık", description: "Greftler kontrol edilir ve iyileşme süreci için öneriler paylaşılır.", badge: "1 saat" },
          { icon: "car", title: "Havalimanına transfer", badge: "maks 1 saat" }
        ]
      }
    ],
    graftTitle: "Greft Hesaplayıcı",
    graftSubtitle: "Tedavi etmek istediğiniz saç dökülme bölgelerini seçin",
    selectedZonesTitle: "Seçilen bölgeler",
    zonePrefix: "Bölge",
    approxGraftsLabel: "Yaklaşık greft sayısı",
    approxHairsLabel: "Yaklaşık saç teli sayısı",
    consultationButton: "Ücretsiz Konsültasyon Al",
    estimateDisclaimer: "Bu hesaplama yalnızca yaklaşık bir tahmindir. Kesin planlama için uzman muayenesi gereklidir.",
    leadTitle: "Sonucunuzu e-posta ile alın",
    leadPlaceholder: "E-posta adresiniz",
    leadButton: "Sonucu Gönder",
    leadSuccess: "Sonuç özeti e-posta için hazırlandı. Ekibimiz sizinle kısa süre içinde iletişime geçecek.",
    whyItems: [
      ["Yetkili Sağlık Kurumu Ağı", "Sizi sadece sağlık turizmi yetki belgesine sahip anlaşmalı kurumlarla buluşturuyoruz."],
      ["Şeffaf ve Planlı Süreç", "İlk danışmadan Türkiye'deki tedavi planınıza kadar tüm aşamaları net şekilde yönetiyoruz."],
      ["Tek Noktadan Koordinasyon", "Tedavi, transfer, konaklama ve sonrası takip tek bir koordinasyon ekibiyle ilerler."]
    ],
    timelineTitle: "Saç Ekimi Zaman Çizelgesi: 1. Günden Sonuca",
    timelineSubtitle: "Saç ekimi sonrası hedeflediğiniz yoğunluğa ulaşmak yaklaşık bir yıl sürebilir.",
    timelineShareTitle: "Fotoğraflarınızı bizimle paylaşın",
    timelineShareDay: "11. Gün",
    timelineItems: [
      ["Saç ekimi sonrası", "1. Gün", "leaf"],
      ["Bandaj çıkarma ve yıkama", "2. Gün", "sparkles"],
      ["İlk iyileşme", "3 - 10 Gün", "bandage"],
      ["Şok dökülme", "2 - 4 Hafta", "scissors"],
      ["Uyku (dormansi) dönemi", "1 - 3 Ay", "moon"],
      ["Erken uzama", "3 - 6 Ay", "sprout"],
      ["Belirgin iyileşme", "6 - 10 Ay", "trend"],
      ["Nihai sonuç", "10 - 16 Ay", "flag"]
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
    journeyTitle: "Take a look at your 4-day hair transplant journey",
    journeyDays: [
      {
        day: "Day 1",
        items: [
          { icon: "plane", title: "Arrival at the airport", description: "One of our drivers meets you and takes you to the clinic for blood tests, then to your hotel." },
          { icon: "car", title: "Transfer to the clinic", badge: "max 1 hour" },
          { icon: "test", title: "Blood sampling", badge: "max 45 mins" }
        ]
      },
      {
        day: "Day 2",
        items: [
          { icon: "consult", title: "1st consultation", description: "Meet your doctor and discuss your hair transplant options plus hairline design.", badge: "1 - 2 hours" },
          { icon: "free", title: "Free time in Istanbul", description: "You will have plenty of time to relax and enjoy Istanbul before the following day." }
        ]
      },
      {
        day: "Day 3",
        items: [
          { icon: "consult2", title: "2nd consultation", description: "Receive final expert advice to achieve a natural result and confirm your treatment plan.", badge: "1 hour" },
          { icon: "procedure", title: "The procedure", description: "Performed under local anaesthesia and usually takes around 5 to 7 hours depending on graft count.", badge: "5 - 7 hours" }
        ]
      },
      {
        day: "Day 4",
        items: [
          { icon: "wash", title: "Hair washing", badge: "1 hour" },
          { icon: "aftercare", title: "Advice on aftercare", description: "We check your grafts and share recommendations for smooth recovery.", badge: "1 hour" },
          { icon: "car", title: "Transfer to the airport", badge: "max 1 hour" }
        ]
      }
    ],
    graftTitle: "Graft Calculator",
    graftSubtitle: "Select the hair loss areas you would like to treat",
    selectedZonesTitle: "Selected zones",
    zonePrefix: "Zone",
    approxGraftsLabel: "Approximate number of grafts",
    approxHairsLabel: "Approximate number of hairs",
    consultationButton: "Book a free consultation",
    estimateDisclaimer: "This calculator provides an approximate estimate only. A specialist consultation is required for a precise plan.",
    leadTitle: "Get your result by email",
    leadPlaceholder: "Your email address",
    leadButton: "Send My Result",
    leadSuccess: "Your estimate summary is ready for email. Our team will contact you shortly.",
    whyItems: [
      ["Authorized Provider Network", "We connect you only with contracted institutions that hold official medical tourism authorization."],
      ["Clear & Structured Journey", "From first consultation to your treatment plan in Turkey, every step is communicated clearly."],
      ["Single-Point Coordination", "Treatment, transfers, accommodation, and aftercare are coordinated by one dedicated team."]
    ],
    timelineTitle: "Hair Transplant Timeline: Day 1 To Final Results",
    timelineSubtitle: "With hair transplants it can take approximately a year to get a nice new head of hair of the density you want.",
    timelineShareTitle: "Share your photos with us",
    timelineShareDay: "Day 11",
    timelineItems: [
      ["After your hair transplant", "Day 1", "leaf"],
      ["Bandage removal and washing", "Day 2", "sparkles"],
      ["Initial Healing", "3 - 10 Days", "bandage"],
      ["Hair Shedding", "2 - 4 Weeks", "scissors"],
      ["Dormancy (sleeping) Period", "1 - 3 Months", "moon"],
      ["Early Growth", "3 - 6 Months", "sprout"],
      ["Noticeable Improvement", "6 - 10 Months", "trend"],
      ["Final Results", "10 - 16 Months", "flag"]
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
    journeyTitle: "Ознакомьтесь с вашим 4-дневным маршрутом пересадки волос",
    journeyDays: [
      {
        day: "День 1",
        items: [
          { icon: "plane", title: "Прибытие в аэропорт", description: "Наш водитель встретит вас и отвезет в клинику на анализ крови, затем в отель." },
          { icon: "car", title: "Трансфер в клинику", badge: "до 1 часа" },
          { icon: "test", title: "Забор крови", badge: "до 45 мин" }
        ]
      },
      {
        day: "День 2",
        items: [
          { icon: "consult", title: "1-я консультация", description: "Встреча с врачом, обсуждение вариантов пересадки и дизайна линии роста волос.", badge: "1 - 2 часа" },
          { icon: "free", title: "Свободное время в Стамбуле", description: "У вас будет достаточно времени отдохнуть и насладиться Стамбулом до следующего дня." }
        ]
      },
      {
        day: "День 3",
        items: [
          { icon: "consult2", title: "2-я консультация", description: "Финальные рекомендации для естественного результата и утверждение плана.", badge: "1 час" },
          { icon: "procedure", title: "Процедура", description: "Проводится под местной анестезией и обычно длится 5–7 часов в зависимости от количества графтов.", badge: "5 - 7 часов" }
        ]
      },
      {
        day: "День 4",
        items: [
          { icon: "wash", title: "Мытье волос", badge: "1 час" },
          { icon: "aftercare", title: "Рекомендации по уходу", description: "Проверяем графты и делимся рекомендациями для комфортного восстановления.", badge: "1 час" },
          { icon: "car", title: "Трансфер в аэропорт", badge: "до 1 часа" }
        ]
      }
    ],
    graftTitle: "Калькулятор графтов",
    graftSubtitle: "Выберите зоны выпадения волос, которые хотите лечить",
    selectedZonesTitle: "Выбранные зоны",
    zonePrefix: "Зона",
    approxGraftsLabel: "Примерное количество графтов",
    approxHairsLabel: "Примерное количество волос",
    consultationButton: "Бесплатная консультация",
    estimateDisclaimer: "Калькулятор показывает только приблизительную оценку. Для точного плана нужна консультация специалиста.",
    leadTitle: "Получить результат по email",
    leadPlaceholder: "Ваш email",
    leadButton: "Отправить результат",
    leadSuccess: "Краткий расчет подготовлен для отправки на email. Наша команда свяжется с вами в ближайшее время.",
    whyItems: [
      ["Сеть авторизованных учреждений", "Направляем только в партнерские учреждения с официальным разрешением на медтуризм."],
      ["Понятный и структурный процесс", "От первой консультации до плана лечения в Турции — каждый шаг прозрачно согласован."],
      ["Координация через одну команду", "Лечение, трансфер, проживание и послеоперационное сопровождение ведет единая команда."]
    ],
    timelineTitle: "Этапы пересадки волос: с 1-го дня до результата",
    timelineSubtitle: "После пересадки может потребоваться около года, чтобы получить желаемую густоту волос.",
    timelineShareTitle: "Поделитесь фото с нами",
    timelineShareDay: "11-й день",
    timelineItems: [
      ["Сразу после пересадки", "День 1", "leaf"],
      ["Снятие повязки и мытье", "День 2", "sparkles"],
      ["Начальное заживление", "3 - 10 дней", "bandage"],
      ["Выпадение пересаженных волос", "2 - 4 недели", "scissors"],
      ["Фаза покоя", "1 - 3 месяца", "moon"],
      ["Ранний рост", "3 - 6 месяцев", "sprout"],
      ["Заметное улучшение", "6 - 10 месяцев", "trend"],
      ["Финальный результат", "10 - 16 месяцев", "flag"]
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
  const journeyIcons = {
    plane: PlaneTakeoff,
    car: Car,
    test: TestTube2,
    consult: UserRoundSearch,
    consult2: HandHeart,
    free: Coffee,
    procedure: Stethoscope,
    wash: Droplets,
    aftercare: MessageCircleHeart
  };
  const timelineIcons = {
    leaf: Leaf,
    sparkles: Sparkles,
    bandage: HandHeart,
    scissors: Scissors,
    moon: Coffee,
    sprout: Droplets,
    trend: TrendingUp,
    flag: Flag
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSent, setLeadSent] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const treatmentRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", phone: "", treatment: "", language: lang.toUpperCase() });
  const [selectedZones, setSelectedZones] = useState([]);

  const quickIcons = [CircleHelp, Stethoscope, Building2, HeartPulse, User, Stethoscope];
  const zoneConfigs = [
    {
      id: 1,
      graftMin: 600,
      graftMax: 800,
      hairs: 1560,
      path: "M56 189C50.5 178.833 32 158.7 2 159.5C0.720134 183.899 9.76005 210.666 14.44 221C18.0166 207.097 33.6017 186.617 56 189Z M256 189C275.581 186.916 289.955 202.306 295.651 215.5C300.434 207.484 309.6 185.059 308 159.477C279.177 159.597 261.377 179.061 256 189Z",
      labels: [{ x: 20, y: 189 }, { x: 291, y: 189 }]
    },
    {
      id: 2,
      graftMin: 1900,
      graftMax: 2100,
      hairs: 4750,
      path: "M156 182C135.5 182 109 177.5 87.5 156C70.0323 138.532 66.5018 124.507 59.0058 107.013C37.4876 111.969 17.2072 119.649 3.59985 131.552C2.53329 138.701 0.720152 154.299 2.00002 159.5C32 158.7 50.5 178.833 56 189C85 192.085 96 222 156 222C216 222 227 192.085 256 189C261.377 179.061 279.177 159.597 308 159.477C308.833 154.133 309.6 140.666 306 129.55C292.468 118.779 273.281 111.685 252.994 107.013C251.723 109.98 250.566 112.848 249.435 115.649L249.434 115.65L249.433 115.654C243.458 130.777 236.107 144.393 224.5 156C203 177.5 176.5 182 156 182Z",
      labels: [{ x: 50, y: 151 }, { x: 261, y: 151 }]
    },
    {
      id: 3,
      graftMin: 900,
      graftMax: 1100,
      hairs: 2250,
      path: "M87.5 156C109 177.5 135.5 182 156 182C176.5 182 203 177.5 224.5 156C236.107 144.393 243.458 130.777 249.433 115.654L249.434 115.65C250.565 112.848 251.723 109.981 252.994 107.013C213.856 97.9998 170.624 97.9998 156 97.9998C141.376 97.9998 98.1437 97.9998 59.0057 107.013C66.5018 124.507 70.0322 138.532 87.5 156Z",
      labels: [{ x: 156, y: 133 }]
    },
    {
      id: 4,
      graftMin: 700,
      graftMax: 900,
      hairs: 1750,
      path: "M155.498 75.9998C137.842 75.9998 66.0412 75.9998 37.1193 50.2086C17.4793 72.3744 5.07099 100.657 2.49961 132.536C16.0556 120.07 36.7872 112.104 58.8207 107.013C97.8309 97.9998 140.922 97.9998 155.498 97.9998C170.074 97.9998 213.166 97.9998 252.176 107.013C273.642 111.973 293.873 119.662 307.436 131.583C304.847 100.916 293.371 72.5345 274.064 50.0414C251.004 72.9498 192.67 75.9998 155.498 75.9998Z",
      labels: [{ x: 40, y: 91 }, { x: 271, y: 91 }]
    },
    {
      id: 5,
      graftMin: 1400,
      graftMax: 1600,
      hairs: 3500,
      path: "M273.5 51.2955C243.708 75.9995 173.461 75.9995 156 75.9995C138.495 75.9995 67.9396 75.9995 38.2765 51.1091C52 33.9996 97.5 1.50006 161.5 1.5C224.711 1.49995 258.667 33.8635 273.5 51.2955ZM229 33.9996C229 47.2544 196.317 57.9995 156 57.9995C115.683 57.9995 83 47.2544 83 33.9996C83 20.7448 115.683 9.99964 156 9.99964C196.317 9.99964 229 20.7448 229 33.9996Z",
      labels: [{ x: 69, y: 49 }, { x: 240, y: 49 }]
    },
    {
      id: 6,
      graftMin: 800,
      graftMax: 800,
      hairs: 2000,
      path: "M229 33.9999C229 47.2547 196.317 57.9999 156 57.9999C115.683 57.9999 83 47.2547 83 33.9999C83 20.7451 115.683 10 156 10C196.317 10 229 20.7451 229 33.9999Z",
      labels: [{ x: 156, y: 34 }]
    }
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
  const totalGrafts = useMemo(() => selectedZoneData.reduce((total, zone) => total + zone.graftMin, 0), [selectedZoneData]);
  const totalHairs = useMemo(() => selectedZoneData.reduce((total, zone) => total + zone.hairs, 0), [selectedZoneData]);

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
  const handleConsultationClick = () => {
    window.open("https://wa.me/905465248334?text=Hello%2C%20I%20would%20like%20a%20free%20consultation%20about%20my%20graft%20estimate.", "_blank", "noopener,noreferrer");
  };
  const handleLeadSubmit = (event) => {
    event.preventDefault();
    if (!leadEmail.trim()) return;
    setLeadSent(true);
    setLeadEmail("");
    setTimeout(() => setLeadSent(false), 3000);
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
        <div className="relative z-10">
          <h2 className="text-center text-4xl font-bold text-[#101f35] md:text-6xl">{t.graftTitle}</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-center text-lg text-[#4f6277]">{t.graftSubtitle}</p>
          <div className="mt-8 grid items-center gap-6 xl:grid-cols-[1fr_1.2fr_1fr]">
            <aside className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-semibold text-[#34465b]">{t.selectedZonesTitle}</h3>
              <div className="space-y-3">
                {zoneConfigs.map((zone) => {
                  const isSelected = selectedZones.includes(zone.id);
                  return (
                    <label key={zone.id} className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-[#e5edf7] p-3 text-left transition hover:border-[#b8d1ec]">
                      <input type="checkbox" checked={isSelected} onChange={() => toggleZone(zone.id)} className="h-5 w-5 accent-[#0f172a]" />
                      <div className="flex flex-col leading-tight">
                        <span className="text-lg font-semibold text-[#111827] md:text-xl">
                          {t.zonePrefix} {zone.id}
                        </span>
                        <span className="text-base text-[#556476] md:text-lg">
                          {zone.graftMin === zone.graftMax ? `${zone.graftMin}` : `${zone.graftMin} - ${zone.graftMax}`} Grafts
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </aside>

            <div className="mx-auto w-full max-w-[380px]">
              <div className="relative aspect-[310/222]">
                <svg viewBox="0 0 310 222" className="absolute inset-0 h-full w-full" aria-label="Hair loss zones">
                {zoneConfigs.map((zone) => {
                  const isSelected = selectedZones.includes(zone.id);
                  return (
                    <path
                      key={`head-zone-${zone.id}`}
                      d={zone.path}
                      onClick={() => toggleZone(zone.id)}
                      className="cursor-pointer transition-all duration-200"
                      fill={isSelected ? "rgba(239, 123, 59, 0.18)" : "rgba(255, 255, 255, 0.92)"}
                      stroke={isSelected ? "rgba(239, 123, 59, 0.95)" : "rgba(31, 41, 55, 0.7)"}
                      strokeDasharray="4 4"
                      strokeWidth={isSelected ? "1.8" : "1.4"}
                    />
                  );
                })}
                {zoneConfigs.flatMap((zone) =>
                  zone.labels.map((label, index) => (
                    <text
                      key={`zone-label-${zone.id}-${index}`}
                      x={label.x}
                      y={label.y}
                      textAnchor="middle"
                      className="pointer-events-none select-none fill-[#111827] text-[16px] font-semibold"
                    >
                      {zone.id}
                    </text>
                  ))
                )}
                </svg>
              </div>
            </div>

            <aside className="rounded-3xl p-4">
              <p className="text-2xl font-medium text-[#34465b] md:text-4xl">{t.approxGraftsLabel}</p>
              <p className="mt-2 text-5xl font-semibold leading-none text-[#111827] md:text-7xl">{totalGrafts} Grafts</p>
              <p className="mt-4 text-2xl font-medium text-[#34465b] md:text-4xl">{t.approxHairsLabel}</p>
              <p className="mt-2 text-5xl font-medium leading-none text-[#5f6f81] md:text-7xl">{totalHairs} Hairs</p>
              <p className="mt-6 max-w-[440px] text-sm leading-relaxed text-[#4f6277]">{t.estimateDisclaimer}</p>
              <button onClick={handleConsultationClick} className="mt-8 rounded-3xl bg-gradient-to-r from-[#77d0e8] to-[#61a8ea] px-10 py-5 text-xl font-medium text-[#0f1b2b] md:text-3xl">
                {t.consultationButton}
              </button>
              <form onSubmit={handleLeadSubmit} className="mt-6 rounded-2xl border border-[#c8d9ec] bg-white p-4 shadow-sm">
                <p className="mb-3 text-base font-semibold text-[#1c3353] md:text-lg">{t.leadTitle}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={leadEmail}
                    onChange={(event) => setLeadEmail(event.target.value)}
                    placeholder={t.leadPlaceholder}
                    className="w-full rounded-xl border border-[#bfd0e5] px-4 py-3 text-sm text-[#1b2c43] outline-none transition focus:border-[#60a5fa]"
                  />
                  <button type="submit" className="rounded-xl bg-[#1f77d2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1864b3]">
                    {t.leadButton}
                  </button>
                </div>
                {leadSent && <p className="mt-3 text-sm font-medium text-[#1c6eb3]">{t.leadSuccess}</p>}
              </form>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 py-14">
        <h2 className="mx-auto mb-10 max-w-[820px] text-center text-4xl font-bold leading-tight text-[#101f35] md:text-6xl">{t.journeyTitle}</h2>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {t.journeyDays.map((day) => (
            <div key={day.day} className="border-l border-[#d8e5ee] pl-4 md:pl-5">
              <p className="mb-4 text-center text-4xl font-semibold text-[#4d6274]">{day.day}</p>
              <div className="space-y-3">
                {day.items.map((item) => {
                  const IconComponent = journeyIcons[item.icon] ?? CircleHelp;
                  return (
                    <article key={`${day.day}-${item.title}`} className="rounded-[28px] bg-[#d8edf5] p-5 text-[#152431]">
                      <div className="mb-2 flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <IconComponent className="mt-0.5 h-6 w-6 shrink-0 text-[#111827]" />
                          <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                        </div>
                        {item.badge && <span className="shrink-0 rounded-full bg-[#62c4f1] px-3 py-1 text-sm font-semibold text-[#16415a]">{item.badge}</span>}
                      </div>
                      {item.description && <p className="text-lg leading-snug text-[#4f5f6c]">{item.description}</p>}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
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

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-14">
        <div className="rounded-[2.4rem] bg-gradient-to-r from-[#bcefdc] to-[#79c4f5] px-6 py-12 text-[#15202f] md:px-12 md:py-14">
          <h2 className="text-center text-3xl font-bold leading-tight md:text-[64px]">{t.timelineTitle}</h2>
          <p className="mx-auto mt-4 max-w-[920px] text-center text-lg text-[#203040] md:text-2xl md:leading-snug">{t.timelineSubtitle}</p>

          <div className="mt-12 space-y-12 md:hidden">
            {t.timelineItems.map(([title, duration, icon]) => {
              const IconComponent = timelineIcons[icon] ?? CircleHelp;
              return (
                <article key={`${title}-${duration}`} className="rounded-2xl border border-[#0f172a24] bg-[#ffffff2e] p-4">
                  <div className="flex items-start gap-3">
                    <IconComponent className="mt-0.5 h-5 w-5 shrink-0 text-[#111827]" />
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
                      <p className="mt-1 text-xl text-[#324255]">{duration}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="relative mt-14 hidden min-h-[610px] md:block">
            <div className="absolute left-[5%] top-[106px] h-[34px] w-[23%] border-l-2 border-b-2 border-dotted border-[#111827]" />
            <div className="absolute left-[28%] top-[138px] w-[14%] border-b-2 border-dotted border-[#111827]" />
            <div className="absolute left-[44%] top-[106px] h-[34px] w-[42%] border-l-2 border-b-2 border-dotted border-[#111827]" />
            <div className="absolute right-[3.5%] top-[138px] h-[214px] w-[24%] rounded-r-[90px] border-r-2 border-y-2 border-dotted border-[#111827]" />
            <div className="absolute left-[6%] top-[352px] h-[120px] w-[47%] rounded-l-[75px] border-l-2 border-y-2 border-dotted border-[#111827]" />
            <div className="absolute left-[39%] top-[472px] w-[40%] border-b-[10px] border-[#111827]" />
            <div className="absolute left-[80%] top-[472px] w-[14%] border-b-[10px] border-[#74afe0]" />

            <div className="absolute left-[8%] top-[74px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[0][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineItems[0][0]}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineItems[0][1]}</p>
                  </article>
                );
              })()}
            </div>

            <div className="absolute left-[30%] top-[74px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[1][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineItems[1][0]}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineItems[1][1]}</p>
                  </article>
                );
              })()}
            </div>

            <div className="absolute left-[46%] top-[74px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[2][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineItems[2][0]}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineItems[2][1]}</p>
                  </article>
                );
              })()}
            </div>

            <div className="absolute left-[47%] top-[252px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[4][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineItems[4][0]}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineItems[4][1]}</p>
                  </article>
                );
              })()}
            </div>

            <div className="absolute left-[64%] top-[252px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[3][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineItems[3][0]}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineItems[3][1]}</p>
                  </article>
                );
              })()}
            </div>

            <div className="absolute left-[80%] top-[252px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[0][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineShareTitle}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineShareDay}</p>
                  </article>
                );
              })()}
            </div>

            <div className="absolute left-[18%] top-[432px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[5][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineItems[5][0]}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineItems[5][1]}</p>
                  </article>
                );
              })()}
            </div>

            <div className="absolute left-[58%] top-[432px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[6][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineItems[6][0]}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineItems[6][1]}</p>
                  </article>
                );
              })()}
            </div>

            <div className="absolute left-[86%] top-[432px]">
              {(() => {
                const IconComponent = timelineIcons[t.timelineItems[7][2]] ?? CircleHelp;
                return (
                  <article>
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-[#111827]" />
                      <h3 className="text-[22px] lg:text-[40px] font-semibold leading-tight">{t.timelineItems[7][0]}</h3>
                    </div>
                    <p className="ml-8 mt-1 text-[19px] lg:text-[32px] text-[#324255]">{t.timelineItems[7][1]}</p>
                  </article>
                );
              })()}
            </div>
          </div>
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
