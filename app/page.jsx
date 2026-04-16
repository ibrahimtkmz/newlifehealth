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
  Users,
  Award,
  Globe,
  ThumbsUp
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
    journeyTitle: "VIP Journey",
    journey: ["Free Consultation", "VIP Flight & Transfer", "Premium Clinic Procedure", "Luxury Recovery", "Aftercare"],
    carePromiseTitle: "Your Comfort-Focused Care Experience",
    carePromiseSub: "From airport welcome to post-op check-ins, every step is designed for safety, speed, and peace of mind.",
    carePromiseItems: [
      "Dedicated patient coordinator available in your language.",
      "Internationally aligned treatment planning and transparent process.",
      "24/7 WhatsApp assistance during your full treatment journey."
    ],
    carePromiseButton: "Explore VIP Services",
    videos: "PATIENT TESTIMONIAL VIDEOS",
    videosSub: "Authentic stories capturing confidence, recovery, and five-star service.",
    videoPlaceholder: "Video Wall Placeholder",
    about: "About Us",
    aboutP1:
      "At NewLife Health Tourism, our vision is to ensure international patients receive a safe, well-planned, and human-centered treatment experience in Turkey.",
    aboutP2:
      "With our specialist doctor network and experienced patient relations team, we deliver lasting satisfaction in hair transplantation, dental aesthetics, and plastic surgery.",
    aboutHeroTitle: "Visionary Introduction",
    aboutHeroText:
      "At our Istanbul clinic, we combine trust, health, and aesthetics into one promise: safe treatment plans, natural-looking outcomes, and premium comfort from first consultation to full recovery.",
    aboutTimelineTitle: "Corporate Story & Milestones",
    aboutTimelineText:
      "Founded in 2016 with a mission to make qualified treatment globally accessible, NewLife Health Tourism has served 20,000+ patients through structured health tourism workflows aligned with international standards.",
    aboutTeamTitle: "Expert Team & Academic Competence",
    aboutTeamText:
      "Our medical team is led by specialists in hair transplantation, aesthetic dentistry, and facial-body surgery. With 40+ years of combined experience, regular international trainings, and certified processes, we maintain consistently high clinical quality.",
    aboutUSPTitle: "Why Us?",
    aboutUSPItems: [
      "Technology: 3D imaging, digital smile design, and minimally invasive methods.",
      "Comfort: central Istanbul location, VIP transfer, and premium accommodation options.",
      "Guarantee: structured aftercare and transparent post-treatment follow-up."
    ],
    aboutUnitsTitle: "Medical Units & Focus Areas",
    aboutUnitsItems: [
      "Natural Hair Transplantation with Sapphire FUE and DHI techniques.",
      "Aesthetic Dentistry with digital planning, laminate veneers, and zirconium crowns.",
      "Personalized Plastic Surgery for face and body with detailed safety protocols."
    ],
    aboutQualityTitle: "Quality, Hygiene & Technology Standards",
    aboutQualityText:
      "All treatment areas follow strict sterilization protocols. We prioritize high-quality medical consumables, FDA/CE-cleared devices where applicable, and a modern clinical architecture designed for patient comfort and calm recovery.",
    aboutMissionTitle: "Values & Mission",
    aboutMissionItems: [
      "Respect for patient rights and medical ethics at every step.",
      "Transparent pricing with honest eligibility assessments.",
      "Sustainable health outcomes through realistic, long-term planning."
    ],
    aboutProofTitle: "Social Proof & Success Metrics",
    aboutProofItems: ["99% patient satisfaction", "50+ countries served", "20,000+ successful operations"],
    aboutFinalCtaTitle: "Start Your Personalized Treatment Plan",
    aboutFinalCtaText:
      "Get a free consultation, request an online appointment, or reach us on WhatsApp for a quick medical pre-assessment from our team.",
    aboutFinalCtaButton: "Get Free Consultation",
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
    },
    stats: {
      title: "Our Results Speak",
      patients: "Happy Patients",
      satisfaction: "Satisfaction Rate",
      countries: "Countries Served",
      experience: "Years Experience"
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
    journeyTitle: "VIP Yolculuk Adımları",
    journey: ["Ücretsiz Danışmanlık", "VIP Uçuş & Transfer", "Premium Klinik İşlemi", "Lüks İyileşme", "Takip Süreci"],
    carePromiseTitle: "Konfor Odaklı Tedavi Deneyimi",
    carePromiseSub: "Havalimanı karşılama anından tedavi sonrası kontrole kadar tüm süreç güven, hız ve konfor için tasarlanır.",
    carePromiseItems: [
      "Kendi dilinizde destek veren özel hasta danışmanı.",
      "Uluslararası standartlara uygun planlama ve şeffaf operasyon akışı.",
      "Tedavi yolculuğunuz boyunca 7/24 WhatsApp desteği."
    ],
    carePromiseButton: "VIP Hizmetleri İncele",
    videos: "HASTA DENEYİM VİDEOLARI",
    videosSub: "Özgüven, iyileşme ve 5 yıldızlı hizmeti anlatan gerçek hikayeler.",
    videoPlaceholder: "Video Alanı",
    about: "Hakkımızda",
    aboutP1: "NewLife Health Tourism olarak vizyonumuz, uluslararası hastalara Türkiye'de güvenli ve planlı bir tedavi deneyimi sunmaktır.",
    aboutP2: "Uzman doktor ağımız ve deneyimli hasta ilişkileri ekibimizle kalıcı memnuniyet hedefliyoruz.",
    aboutHeroTitle: "Vizyoner Giriş",
    aboutHeroText:
      "NewLife Health Tourism olarak güven, sağlık ve estetiği tek bir tedavi anlayışında buluşturuyor; İstanbul saç ekimi kliniği ve estetik diş hekimliği süreçlerinde hastalarımıza güvenli, doğal ve uzun ömürlü sonuçlar vadediyoruz.",
    aboutTimelineTitle: "Kurumsal Hikaye ve Kilometre Taşları",
    aboutTimelineText:
      "2016 yılında uluslararası hastalara etik ve erişilebilir sağlık çözümleri sunma motivasyonuyla yola çıktık. Bugüne kadar 20.000+ hastaya hizmet verdik ve sağlık turizmi operasyonlarımızı uluslararası standartlara uygun şekilde yapılandırdık.",
    aboutTeamTitle: "Uzman Kadro ve Akademik Yetkinlik",
    aboutTeamText:
      "Başhekim liderliğindeki ekibimiz saç ekimi, estetik diş hekimliği ve plastik cerrahi alanlarında uzmanlaşmıştır. Toplam 40+ yıl klinik deneyim, düzenli uluslararası eğitim katılımı ve sertifikalı süreç yönetimi ile hizmet veriyoruz.",
    aboutUSPTitle: "Neden Biz?",
    aboutUSPItems: [
      "Teknoloji: 3D görüntüleme, dijital gülüş tasarımı ve minimal invaziv teknikler.",
      "Konfor: merkezi lokasyon, VIP transfer, 5 yıldızlı konaklama seçenekleri.",
      "Garanti: tedavi sonrası planlı takip, hızlı iletişim ve destek süreçleri."
    ],
    aboutUnitsTitle: "Tıbbi Birimler ve Odak Alanları",
    aboutUnitsItems: [
      "Safir FUE ve DHI tekniği ile doğal görünümlü saç ekimi.",
      "Dijital planlama destekli estetik diş hekimliği, laminate veneer ve zirkonyum çözümleri.",
      "Yüz ve vücut odaklı, kişiye özel planlanan plastik cerrahi uygulamaları."
    ],
    aboutQualityTitle: "Kalite, Hijyen ve Teknoloji Standartları",
    aboutQualityText:
      "Sterilizasyon protokollerimiz düzenli denetlenir; kullanılan cihaz ve sarf malzemelerde yüksek kalite standardı aranır. Modern klinik mimarimiz, ferah alanlar ve güvenli hasta akışı ile konforlu bir deneyim sunar.",
    aboutMissionTitle: "Değerlerimiz ve Misyon",
    aboutMissionItems: [
      "Hasta haklarına saygı ve etik tıp anlayışı.",
      "Şeffaf fiyatlandırma ve dürüst bilgilendirme politikası.",
      "Sürdürülebilir sağlık çözümleri için gerçekçi tedavi planlaması."
    ],
    aboutProofTitle: "Sosyal Kanıt ve Başarı İstatistikleri",
    aboutProofItems: ["%99 hasta memnuniyeti", "50+ ülkeden hasta", "20.000+ başarılı operasyon"],
    aboutFinalCtaTitle: "Tedavi Yolculuğunuza Hemen Başlayın",
    aboutFinalCtaText:
      "Ücretsiz konsültasyon alın, online randevu oluşturun veya WhatsApp hattımız üzerinden dakikalar içinde hızlı bilgi talep edin.",
    aboutFinalCtaButton: "Ücretsiz Konsültasyon Al",
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
    },
    stats: {
      title: "Sonuçlarımız Konuşuyor",
      patients: "Mutlu Hasta",
      satisfaction: "Memnuniyet Oranı",
      countries: "Hizmet Verilen Ülke",
      experience: "Yıllık Deneyim"
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
    journeyTitle: "Этапы VIP-путешествия",
    journey: ["Бесплатная консультация", "VIP перелет и трансфер", "Процедура в премиум клинике", "Комфортное восстановление", "Послеоперационное сопровождение"],
    carePromiseTitle: "Комфортный формат лечения под ключ",
    carePromiseSub: "От встречи в аэропорту до послеоперационных проверок — каждый этап продуман для безопасности и спокойствия.",
    carePromiseItems: [
      "Персональный координатор пациента на вашем языке.",
      "Прозрачный план лечения в соответствии с международными стандартами.",
      "Поддержка в WhatsApp 24/7 на всем пути лечения."
    ],
    carePromiseButton: "Посмотреть VIP-услуги",
    videos: "ВИДЕО-ОТЗЫВЫ ПАЦИЕНТОВ",
    videosSub: "Реальные истории о восстановлении, уверенности и сервисе 5★.",
    videoPlaceholder: "Зона видео",
    about: "О нас",
    aboutP1: "NewLife Health Tourism обеспечивает безопасное и тщательно спланированное лечение для иностранных пациентов в Турции.",
    aboutP2: "Сеть профильных врачей и опытная команда сопровождения помогают достигать долгосрочной удовлетворенности.",
    aboutHeroTitle: "Визионерское вступление",
    aboutHeroText:
      "Мы объединяем доверие, здоровье и эстетику в едином подходе: безопасное лечение, естественные результаты и премиальный комфорт для международных пациентов в Стамбуле.",
    aboutTimelineTitle: "История клиники и ключевые этапы",
    aboutTimelineText:
      "Основанная в 2016 году с целью сделать качественную медицину доступной для пациентов из-за рубежа, клиника обслужила более 20 000 пациентов в рамках международных стандартов медицинского туризма.",
    aboutTeamTitle: "Экспертная команда и академическая база",
    aboutTeamText:
      "Команда специалистов по пересадке волос, эстетической стоматологии и пластической хирургии имеет 40+ лет совокупного опыта, регулярно проходит международное обучение и работает по сертифицированным протоколам.",
    aboutUSPTitle: "Почему мы?",
    aboutUSPItems: [
      "Технологии: 3D-визуализация, цифровое планирование улыбки и щадящие методики.",
      "Комфорт: центральная локация, VIP-трансфер и премиальное размещение.",
      "Гарантия: структурированное послеоперационное сопровождение и поддержка."
    ],
    aboutUnitsTitle: "Медицинские направления",
    aboutUnitsItems: [
      "Естественная пересадка волос методами Sapphire FUE и DHI.",
      "Эстетическая стоматология с цифровым дизайном, винирами и цирконием.",
      "Индивидуальная пластическая хирургия лица и тела с приоритетом безопасности."
    ],
    aboutQualityTitle: "Стандарты качества, гигиены и технологий",
    aboutQualityText:
      "Мы соблюдаем строгие протоколы стерилизации, используем качественные медицинские материалы и сертифицированное оборудование, а современная архитектура клиники обеспечивает спокойное восстановление.",
    aboutMissionTitle: "Наши ценности и миссия",
    aboutMissionItems: [
      "Уважение прав пациента и медицинской этики.",
      "Прозрачная стоимость и честная коммуникация.",
      "Долгосрочные, устойчивые результаты лечения."
    ],
    aboutProofTitle: "Социальное доказательство и результаты",
    aboutProofItems: ["99% удовлетворенности пациентов", "Пациенты из 50+ стран", "20 000+ успешных операций"],
    aboutFinalCtaTitle: "Начните персональный план лечения",
    aboutFinalCtaText:
      "Получите бесплатную консультацию, запишитесь онлайн или напишите нам в WhatsApp для быстрого предварительного медицинского ответа.",
    aboutFinalCtaButton: "Бесплатная консультация",
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
    },
    stats: {
      title: "Наши результаты говорят сами за себя",
      patients: "Довольных пациентов",
      satisfaction: "Уровень удовлетворенности",
      countries: "Стран обслужено",
      experience: "Лет опыта"
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

  const clinicPhotos = [
    "/6.jpeg",
    "/7.jpeg",
    "/8.jpeg",
    "/9.jpeg"
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

        {/* Statistics Section */}
        <section className="rounded-[28px] border border-[#1A1A1A]/10 bg-white p-6 shadow-[0_20px_50px_rgba(26,26,26,0.06)] sm:rounded-[36px] sm:p-10">
          <h2 className="mb-8 text-center text-xl font-semibold text-[#1A1A1A] sm:text-2xl">{t.stats.title}</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-[#3a0ca3]/10 to-[#f72585]/10 p-5 text-center sm:p-6"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#3a0ca3]/15 sm:h-14 sm:w-14">
                <Users className="h-6 w-6 text-[#3a0ca3] sm:h-7 sm:w-7" />
              </div>
              <p className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl">15,000+</p>
              <p className="mt-1 text-xs font-medium text-[#1A1A1A]/70 sm:text-sm">{t.stats.patients}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-[#f72585]/10 to-[#ff7f51]/10 p-5 text-center sm:p-6"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f72585]/15 sm:h-14 sm:w-14">
                <ThumbsUp className="h-6 w-6 text-[#f72585] sm:h-7 sm:w-7" />
              </div>
              <p className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl">98%</p>
              <p className="mt-1 text-xs font-medium text-[#1A1A1A]/70 sm:text-sm">{t.stats.satisfaction}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-[#4cc9f0]/10 to-[#3a0ca3]/10 p-5 text-center sm:p-6"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#4cc9f0]/15 sm:h-14 sm:w-14">
                <Globe className="h-6 w-6 text-[#0891b2] sm:h-7 sm:w-7" />
              </div>
              <p className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl">85+</p>
              <p className="mt-1 text-xs font-medium text-[#1A1A1A]/70 sm:text-sm">{t.stats.countries}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-[#f8961e]/10 p-5 text-center sm:p-6"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/15 sm:h-14 sm:w-14">
                <Award className="h-6 w-6 text-[#D4AF37] sm:h-7 sm:w-7" />
              </div>
              <p className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl">12+</p>
              <p className="mt-1 text-xs font-medium text-[#1A1A1A]/70 sm:text-sm">{t.stats.experience}</p>
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

        <section className="rounded-[30px] border border-[#1A1A1A]/8 bg-white p-5 shadow-[0_20px_50px_rgba(26,26,26,0.06)] sm:p-8 lg:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-[#1A1A1A] sm:text-2xl">{t.journeyTitle}</h3>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#f72585]/25 to-transparent sm:block" />
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
          {journey.map((step, index) => (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-gradient-to-br from-white via-[#FBFBFB] to-[#f7f7ff] p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(26,26,26,0.12)]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#f72585]/10 blur-2xl transition group-hover:bg-[#3a0ca3]/10" />
              {index < journey.length - 1 && (
                <span className="absolute right-[-14px] top-1/2 hidden h-[2px] w-7 -translate-y-1/2 bg-gradient-to-r from-[#D4AF37]/60 to-[#f72585]/50 lg:block" />
              )}
              <div className="relative z-10 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">{t.stepLabel}</p>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1A1A1A]/10 bg-white text-sm font-semibold text-[#3a0ca3]">
                  {index + 1}
                </span>
              </div>
              <div className="rich-gradient-icon relative z-10 mb-4 mt-4 inline-flex rounded-xl border p-2">{step.icon}</div>
              <h3 className="relative z-10 font-semibold text-[#1A1A1A]">{step.title}</h3>
            </div>
          ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-5 shadow-[0_18px_40px_rgba(26,26,26,0.06)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h3 className="text-xl font-semibold sm:text-2xl">{t.carePromiseTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">{t.carePromiseSub}</p>
              <div className="mt-5 space-y-3">
                {t.carePromiseItems?.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[#7a5b00]">
                      <ShieldCheck size={13} />
                    </span>
                    <p className="text-sm text-[#1A1A1A]/80">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/vip-services" className="rich-gradient-button inline-flex rounded-full px-6 py-3 text-xs font-semibold tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(58,12,163,0.35)] sm:text-sm">
                  {t.carePromiseButton}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {clinicPhotos.slice(0, 4).map((photo, index) => (
                <div key={`clinic-photo-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#1A1A1A]/10">
                  <Image
                    src={photo}
                    alt={`Clinic view ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 42vw, (max-width: 1024px) 24vw, 18vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-5 shadow-[0_18px_40px_rgba(26,26,26,0.06)] sm:p-8">
          <h3 className="text-xl font-semibold sm:text-2xl">{t.about}</h3>

          <article className="mt-5 rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">{t.aboutHeroTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/75">{t.aboutHeroText}</p>
          </article>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
              <h4 className="text-base font-semibold sm:text-lg">{t.aboutTimelineTitle}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/75">{t.aboutTimelineText}</p>
            </article>
            <article className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
              <h4 className="text-base font-semibold sm:text-lg">{t.aboutTeamTitle}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/75">{t.aboutTeamText}</p>
            </article>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
              <h4 className="text-base font-semibold sm:text-lg">{t.aboutUSPTitle}</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#1A1A1A]/75">
                {t.aboutUSPItems?.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
              <h4 className="text-base font-semibold sm:text-lg">{t.aboutUnitsTitle}</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#1A1A1A]/75">
                {t.aboutUnitsItems?.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
              <h4 className="text-base font-semibold sm:text-lg">{t.aboutProofTitle}</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#1A1A1A]/75">
                {t.aboutProofItems?.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
              <h4 className="text-base font-semibold sm:text-lg">{t.aboutQualityTitle}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/75">{t.aboutQualityText}</p>
            </article>
            <article className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
              <h4 className="text-base font-semibold sm:text-lg">{t.aboutMissionTitle}</h4>
              <ul className="mt-3 space-y-2 text-sm text-[#1A1A1A]/75">
                {t.aboutMissionItems?.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="mt-5 rounded-2xl border border-[#1A1A1A]/10 bg-[#1A1A1A] p-5 text-white">
            <h4 className="text-base font-semibold sm:text-lg">{t.aboutFinalCtaTitle}</h4>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{t.aboutFinalCtaText}</p>
            <div className="mt-4">
              <button onClick={() => openPopup("freeQuote")} className="rich-gradient-button rounded-full px-5 py-2 text-xs font-semibold tracking-[0.06em] text-white sm:text-sm">
                {t.aboutFinalCtaButton}
              </button>
            </div>
          </article>
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
              {clinicPhotos.map((photo, index) => (
                <div key={photo} className="h-32 rounded-2xl bg-cover bg-center sm:h-36" style={{ backgroundImage: `url('${photo}')` }} aria-label={`Clinic photo ${index + 1}`} />
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
            <p>Fulya Mh. Buyukdere Cd, Fulya, Akinci Bayiri Sk. No: 74, 34394 Sisli/Istanbul</p>
            <p>WhatsApp: +90 500 000 00 00</p>
            <p>Phone: +90 212 000 00 00</p>
            <p>Email: newlifehealth.tr@gmail.com</p>
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
