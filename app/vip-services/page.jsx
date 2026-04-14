"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { Plane, Hotel, Car, Languages, Stethoscope, HeartPulse, Phone, Crown, CheckCircle2, Star, Shield, Clock, Utensils, Wifi, Sparkles, MessageCircle } from "lucide-react";

const whatsappNumber = "905000000000";

const CONTENT = {
  tr: {
    title: "VIP Hizmetler",
    subtitle: "Turkiye yolculugunuzun her adiminda konfor, hiz ve kisisel koordinasyonu bir araya getiren premium hasta deneyimi.",
    heroStats: [
      { value: "5★", label: "Otel Konaklamasi" },
      { value: "7/24", label: "Hasta Destek" },
      { value: "VIP", label: "Transfer Hizmeti" },
      { value: "100%", label: "Kisisel Koordinasyon" }
    ],
    introTitle: "Premium Hasta Deneyimi",
    introText: "NewLife Health Tourism olarak, tedavi sureciniizin her asamasinda yaninizdayiz. Havalimani karsilamasindan tedavi sonrasi takibe kadar tum sureclerinizi profesyonel ekibimizle yonetiyoruz.",
    processTitle: "VIP Surecimiz",
    steps: [
      {
        icon: Phone,
        title: "On Hazirlik",
        description: "Online konsultasyon, dosya analizi ve medikal uygunluk degerlendirmesi. Kisisellestirilmis tedavi plani olusturma ve seyahat takvimi belirleme."
      },
      {
        icon: Plane,
        title: "Ulasim Planlamasi",
        description: "Ucus rezervasyonu destegi, havalimani VIP karsilama, ozel arac transferi ve 5 yildizli otele yerlesim. Tum detaylar sizin icin planlanir."
      },
      {
        icon: Stethoscope,
        title: "Operasyon Gunu",
        description: "Tercuman, kisisel danisman ve klinik koordinatoru ile kesintisiz surec yonetimi. Tam zamanli hasta refakati ve aile bilgilendirme."
      },
      {
        icon: Hotel,
        title: "Iyilesme Konforu",
        description: "5 yildizli otel konaklamasi, gunluk doktor kontrolleri, ilac yonetimi, ozel diyet menluleri ve kisiye ozel dinlenme programi."
      },
      {
        icon: HeartPulse,
        title: "Uzun Donem Takip",
        description: "Ulkenize dondukten sonra foto/video bazli uzaktan kontrol, 7/24 danismanlik hatti ve omur boyu destek garantisi."
      }
    ],
    servicesTitle: "Dahil Olan Hizmetler",
    services: [
      { icon: Car, title: "VIP Transfer", description: "Mercedes Vito/S-Class ile havaalani-otel-hastane arasi ozel transfer" },
      { icon: Hotel, title: "5 Yildizli Konaklama", description: "Seckin 5 yildizli otellerde suit veya deluxe oda konaklamasi" },
      { icon: Languages, title: "7/24 Tercuman", description: "Turkce, Ingilizce, Rusca, Almanca ve Arapca profesyonel tercuman" },
      { icon: Crown, title: "Kisisel Koordinator", description: "Size ozel atanmis deneyimli hasta temsilcisi ve saglik danismani" },
      { icon: Utensils, title: "Ozel Diyet", description: "Tedavi sonrasi beslenme programi ve ozel menu planlama" },
      { icon: Shield, title: "Saglik Sigortasi", description: "Tedavi sureci icin kapsamli saglik ve seyahat sigortasi" },
      { icon: Wifi, title: "Iletisim Destegi", description: "Ucretsiz SIM kart, WiFi ve 7/24 iletisim hatti" },
      { icon: Sparkles, title: "Ekstra Hizmetler", description: "Istanbul turu, alisveris rehberligi, spa ve wellness hizmetleri" }
    ],
    packagesTitle: "VIP Paketlerimiz",
    packages: [
      {
        name: "Silver",
        price: "Standart",
        highlight: false,
        features: [
          "Havaalani transferi (standart arac)",
          "3 gece 4 yildizli otel",
          "Tercuman destegi (islem saatlerinde)",
          "Tedavi koordinasyonu",
          "Uzaktan takip (3 ay)"
        ]
      },
      {
        name: "Gold",
        price: "Premium",
        highlight: true,
        badge: "En Populer",
        features: [
          "VIP havaalani karsilama",
          "5 gece 5 yildizli otel",
          "7/24 profesyonel tercuman",
          "Kisisel hasta koordinatoru",
          "Istanbul sehir turu",
          "Genisletilmis takip (6 ay)",
          "Ozel diyet menu plani"
        ]
      },
      {
        name: "Platinum",
        price: "Lüks",
        highlight: false,
        features: [
          "Ozel jet transfer opsiyonu",
          "Suite otel konaklamasi",
          "7/24 kisisel asistan",
          "Luks Mercedes S-Class transfer",
          "Ozel sef ve diyet hizmeti",
          "VIP saglik sigortasi",
          "Omur boyu takip garantisi",
          "Spa ve wellness paketi"
        ]
      }
    ],
    accommodationTitle: "Konaklama Standartlarimiz",
    accommodationFeatures: [
      "Merkezi konumda 5 yildizli oteller",
      "Hastaneye yakin lokasyonlar",
      "Suit veya deluxe oda secenekleri",
      "7/24 oda servisi",
      "Ucretsiz yuksek hizli WiFi",
      "Ozel hasta menluleri",
      "Gunluk temizlik ve hijyen",
      "Spa ve fitness erisimi"
    ],
    testimonialsTitle: "VIP Hasta Yorumlari",
    testimonials: [
      {
        name: "James Wilson",
        country: "Ingiltere",
        text: "Havalimanindan otele, hastaneden kontrollere kadar her sey mukemmel planlanmisti. Kendimi ozel hissettim.",
        rating: 5
      },
      {
        name: "Maria Schmidt",
        country: "Almanya",
        text: "Tercumanim ve koordinatorium her an yanımdaydı. Dil bariyeri hic sorun olmadi. Harika bir deneyim!",
        rating: 5
      },
      {
        name: "Alexey Petrov",
        country: "Rusya",
        text: "5 yildizli otel, VIP transfer ve profesyonel ekip. Turkiye'deki en iyi medikal turizm deneyimi.",
        rating: 5
      }
    ],
    faqTitle: "Sikca Sorulan Sorular",
    faqs: [
      {
        q: "VIP pakete ne dahil?",
        a: "VIP paketlerimiz havaalani transferi, 5 yildizli otel konaklamasi, 7/24 tercuman, kisisel koordinator, tedavi ve takip hizmetlerini icerir. Detaylar paket tipine gore degisir."
      },
      {
        q: "Tercuman hangi dillerde destek veriyor?",
        a: "Turkce, Ingilizce, Rusca, Almanca, Arapca ve Fransizca dillerinde profesyonel tercuman destegi sunuyoruz."
      },
      {
        q: "Transfer araclari nasil?",
        a: "Silver pakette standart araclar, Gold pakette Mercedes Vito, Platinum pakette Mercedes S-Class veya ozel jet opsiyonu sunulmaktadir."
      },
      {
        q: "Ailem de benimle kalabilir mi?",
        a: "Evet, aileniz icin ek yatak veya ayri oda duzenlemesi yapilabilir. Refakatci paketlerimiz mevcuttur."
      }
    ],
    ctaTitle: "VIP Deneyiminizi Planlayin",
    ctaText: "Size ozel VIP paketinizi olusturmak ve detayli bilgi almak icin hemen iletisime gecin.",
    ctaButton: "WhatsApp ile Iletisim"
  },
  en: {
    title: "VIP Services",
    subtitle: "A premium patient experience combining comfort, speed, and personalized coordination throughout your Turkey journey.",
    heroStats: [
      { value: "5★", label: "Hotel Accommodation" },
      { value: "24/7", label: "Patient Support" },
      { value: "VIP", label: "Transfer Service" },
      { value: "100%", label: "Personal Coordination" }
    ],
    introTitle: "Premium Patient Experience",
    introText: "At NewLife Health Tourism, we are with you at every stage of your treatment process. From airport welcome to post-treatment follow-up, we manage all your processes with our professional team.",
    processTitle: "Our VIP Process",
    steps: [
      {
        icon: Phone,
        title: "Pre-Arrival Preparation",
        description: "Online consultation, medical file review, and eligibility assessment. Creating your personalized treatment plan and setting your travel schedule."
      },
      {
        icon: Plane,
        title: "Travel Logistics",
        description: "Flight booking support, VIP airport greeting, private vehicle transfer, and check-in to 5-star hotel. All details are planned for you."
      },
      {
        icon: Stethoscope,
        title: "Procedure Day",
        description: "Interpreter, personal advisor, and clinic coordinator support for seamless process management. Full-time patient escort and family updates."
      },
      {
        icon: Hotel,
        title: "Recovery Comfort",
        description: "5-star hotel accommodation, daily doctor checks, medication management, special diet menus, and personalized rest program."
      },
      {
        icon: HeartPulse,
        title: "Long-Term Follow-Up",
        description: "Remote photo/video monitoring after returning home, 24/7 consultation line, and lifetime support guarantee."
      }
    ],
    servicesTitle: "Included Services",
    services: [
      { icon: Car, title: "VIP Transfer", description: "Private transfer with Mercedes Vito/S-Class between airport-hotel-hospital" },
      { icon: Hotel, title: "5-Star Accommodation", description: "Suite or deluxe room accommodation in premium 5-star hotels" },
      { icon: Languages, title: "24/7 Interpreter", description: "Professional interpreter in Turkish, English, Russian, German, and Arabic" },
      { icon: Crown, title: "Personal Coordinator", description: "Dedicated experienced patient representative and health consultant assigned to you" },
      { icon: Utensils, title: "Special Diet", description: "Post-treatment nutrition program and special menu planning" },
      { icon: Shield, title: "Health Insurance", description: "Comprehensive health and travel insurance for the treatment period" },
      { icon: Wifi, title: "Communication Support", description: "Free SIM card, WiFi, and 24/7 communication line" },
      { icon: Sparkles, title: "Extra Services", description: "Istanbul tour, shopping guidance, spa and wellness services" }
    ],
    packagesTitle: "Our VIP Packages",
    packages: [
      {
        name: "Silver",
        price: "Standard",
        highlight: false,
        features: [
          "Airport transfer (standard vehicle)",
          "3 nights 4-star hotel",
          "Interpreter support (during procedure hours)",
          "Treatment coordination",
          "Remote follow-up (3 months)"
        ]
      },
      {
        name: "Gold",
        price: "Premium",
        highlight: true,
        badge: "Most Popular",
        features: [
          "VIP airport greeting",
          "5 nights 5-star hotel",
          "24/7 professional interpreter",
          "Personal patient coordinator",
          "Istanbul city tour",
          "Extended follow-up (6 months)",
          "Special diet menu plan"
        ]
      },
      {
        name: "Platinum",
        price: "Luxury",
        highlight: false,
        features: [
          "Private jet transfer option",
          "Suite hotel accommodation",
          "24/7 personal assistant",
          "Luxury Mercedes S-Class transfer",
          "Private chef and diet service",
          "VIP health insurance",
          "Lifetime follow-up guarantee",
          "Spa and wellness package"
        ]
      }
    ],
    accommodationTitle: "Our Accommodation Standards",
    accommodationFeatures: [
      "Centrally located 5-star hotels",
      "Locations close to hospitals",
      "Suite or deluxe room options",
      "24/7 room service",
      "Free high-speed WiFi",
      "Special patient menus",
      "Daily cleaning and hygiene",
      "Spa and fitness access"
    ],
    testimonialsTitle: "VIP Patient Reviews",
    testimonials: [
      {
        name: "James Wilson",
        country: "United Kingdom",
        text: "Everything was perfectly planned from airport to hotel, hospital to check-ups. I felt special throughout.",
        rating: 5
      },
      {
        name: "Maria Schmidt",
        country: "Germany",
        text: "My interpreter and coordinator were always by my side. Language barrier was never an issue. Amazing experience!",
        rating: 5
      },
      {
        name: "Alexey Petrov",
        country: "Russia",
        text: "5-star hotel, VIP transfer, and professional team. The best medical tourism experience in Turkey.",
        rating: 5
      }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "What's included in VIP package?",
        a: "Our VIP packages include airport transfer, 5-star hotel accommodation, 24/7 interpreter, personal coordinator, treatment and follow-up services. Details vary by package type."
      },
      {
        q: "What languages does the interpreter support?",
        a: "We provide professional interpreter support in Turkish, English, Russian, German, Arabic, and French."
      },
      {
        q: "What are the transfer vehicles like?",
        a: "Standard vehicles for Silver package, Mercedes Vito for Gold package, Mercedes S-Class or private jet option for Platinum package."
      },
      {
        q: "Can my family stay with me?",
        a: "Yes, extra bed or separate room arrangements can be made for your family. Companion packages are available."
      }
    ],
    ctaTitle: "Plan Your VIP Experience",
    ctaText: "Contact us now to create your personalized VIP package and get detailed information.",
    ctaButton: "Contact via WhatsApp"
  },
  ru: {
    title: "VIP Uslugi",
    subtitle: "Premium'nyj format soprovozhdeniya, ob'edinyayushchij komfort, skorost' i personal'nuyu koordinaciyu na vseh etapah poezdki.",
    heroStats: [
      { value: "5★", label: "Prozhivanie v otele" },
      { value: "24/7", label: "Podderzhka pacienta" },
      { value: "VIP", label: "Transfer" },
      { value: "100%", label: "Lichnaya koordinaciya" }
    ],
    introTitle: "Premium'nyj opyt pacienta",
    introText: "V NewLife Health Tourism my s vami na kazhdom etape processa lecheniya. Ot vstrechi v aeroportu do posleoperacionnogo nablyudeniya — vse processy vedyotsya nashej professional'noj komandoj.",
    processTitle: "Nash VIP process",
    steps: [
      {
        icon: Phone,
        title: "Podgotovka do priezda",
        description: "Onlajn-konsul'taciya, analiz meddokumentov i ocenka pokazanij. Sozdanie personal'nogo plana lecheniya i grafika poezdki."
      },
      {
        icon: Plane,
        title: "Logistika",
        description: "Podderzhka bronirovaniya rejsov, VIP-vstrecha v aeroportu, individual'nyj transfer i zaselenie v 5-zvezdochnyj otel'."
      },
      {
        icon: Stethoscope,
        title: "Den' procedury",
        description: "Perevodchik, personal'nyj konsul'tant i koordinator kliniki dlya besshivnogo upravleniya processom. Postoyannoe sop rovozhdenie pacienta."
      },
      {
        icon: Hotel,
        title: "Komfortnoe vosstanovlenie",
        description: "Prozhivanie v 5-zvezdochnom otele, ezhednevnye osmo try vracha, upravlenie lekarstvami, special'noe menyu i personalizirovannaya programma otdyha."
      },
      {
        icon: HeartPulse,
        title: "Dolgosrochnoe nablyudenie",
        description: "Distancionnyj kontrol' po foto/video posle vozvrashcheniya domoj, kruglosutochnaya liniya konsul'tacij i pozhiznennaya garantiya podderzhki."
      }
    ],
    servicesTitle: "Vklyuchennye uslugi",
    services: [
      { icon: Car, title: "VIP Transfer", description: "Chastnyj transfer na Mercedes Vito/S-Class mezhdu aeroportom-otelem-bol'nicej" },
      { icon: Hotel, title: "5-zvezdochnoe prozhivanie", description: "Prozhivanie v syute ili lyukse v premialnykh 5-zvezdochnykh otelyah" },
      { icon: Languages, title: "Perevodchik 24/7", description: "Professional'nyj perevodchik na tureckom, anglijskom, russkom, nemeckom i arabskom" },
      { icon: Crown, title: "Lichnyj koordinator", description: "Opytnyj predstavitel' pacienta i konsul'tant po zdorov'yu, zakreplennyj za vami" },
      { icon: Utensils, title: "Special'naya dieta", description: "Programma pitaniya posle lecheniya i planirovanie special'nogo menyu" },
      { icon: Shield, title: "Medicinskaya strahhovka", description: "Kompleksnaya medicinskaya i turisticheskaya strahhovka na period lecheniya" },
      { icon: Wifi, title: "Podderzhka svyazi", description: "Besplatnaya SIM-karta, WiFi i kruglosutochnaya liniya svyazi" },
      { icon: Sparkles, title: "Dopolnitel'nye uslugi", description: "Tur po Stambulu, konsul'tacii po shopingu, spa i velnes uslugi" }
    ],
    packagesTitle: "Nashi VIP pakety",
    packages: [
      {
        name: "Silver",
        price: "Standart",
        highlight: false,
        features: [
          "Transfer iz aeroporta (standartnyj avtomobil')",
          "3 nochi v 4-zvezdochnom otele",
          "Podderzhka perevodchika (vo vremya procedur)",
          "Koordinaciya lecheniya",
          "Distancionnoe nablyudenie (3 mesyaca)"
        ]
      },
      {
        name: "Gold",
        price: "Premium",
        highlight: true,
        badge: "Samyj populyarnyj",
        features: [
          "VIP-vstrecha v aeroportu",
          "5 nochej v 5-zvezdochnom otele",
          "Professional'nyj perevodchik 24/7",
          "Lichnyj koordinator pacienta",
          "Tur po Stambulu",
          "Rasshirennoe nablyudenie (6 mesyacev)",
          "Special'nyj plan diety"
        ]
      },
      {
        name: "Platinum",
        price: "Lyuks",
        highlight: false,
        features: [
          "Opciya chastnogo dzheta",
          "Prozhivanie v syute",
          "Lichnyj assistent 24/7",
          "Lyuksovyj transfer na Mercedes S-Class",
          "Chastnyj shef-povar i dietolog",
          "VIP medicinskaya strahhovka",
          "Pozhiznennaya garantiya nablyudeniya",
          "Paket spa i velnes"
        ]
      }
    ],
    accommodationTitle: "Nashi standarty prozhivaniya",
    accommodationFeatures: [
      "Central'no raspolozhennye 5-zvezdochnye oteli",
      "Lokacii blizko k bol'nicam",
      "Opcii syutov ili lyuksov",
      "Obsluzhivanie nomerov 24/7",
      "Besplatnyj vysokoskorostnoj WiFi",
      "Special'nye menyu dlya pacientov",
      "Ezhednevnaya uborka i gigiena",
      "Dostup k spa i fitnes-centru"
    ],
    testimonialsTitle: "Otzyvy VIP pacientov",
    testimonials: [
      {
        name: "Dzhejms Uilson",
        country: "Velikobritaniya",
        text: "Vsyo bylo ideal'no splanirovanno ot aeroporta do otelya, ot bol'nicy do kontrolej. Ya chustvoval sebya osobennym.",
        rating: 5
      },
      {
        name: "Mariya Shmidt",
        country: "Germaniya",
        text: "Moj perevodchik i koordinator byli vsegda ryadom. Yazykovoj bar'er nikogda ne byl problemoj. Potryasayushchij opyt!",
        rating: 5
      },
      {
        name: "Aleksej Petrov",
        country: "Rossiya",
        text: "5-zvezdochnyj otel', VIP-transfer i professional'naya komanda. Luchshij opyt medicinskogo turizma v Turcii.",
        rating: 5
      }
    ],
    faqTitle: "Chasto zadavaemye voprosy",
    faqs: [
      {
        q: "Chto vhodit v VIP paket?",
        a: "Nashi VIP pakety vklyuchayut transfer iz aeroporta, prozhivanie v 5-zvezdochnom otele, perevodchika 24/7, lichnogo koordinatora, lechenie i nablyudenie. Detali zavisyat ot tipa paketa."
      },
      {
        q: "Na kakih yazykah rabotaet perevodchik?",
        a: "My predostavlyaem professional'nuyu podderzhku perevodchika na tureckom, anglijskom, russkom, nemeckom, arabskom i francuzskom."
      },
      {
        q: "Kakie avtomobili dlya transfera?",
        a: "Standartnye avtomobili dlya Silver paketa, Mercedes Vito dlya Gold paketa, Mercedes S-Class ili chastnyj dzhet dlya Platinum paketa."
      },
      {
        q: "Mozhet li moya sem'ya ostat'sya so mnoj?",
        a: "Da, mozhno organizovat' dopolnitel'nuyu krovat' ili otdel'nyj nomer dlya vashej sem'i. Dostupny pakety soprovozhdeniya."
      }
    ],
    ctaTitle: "Splanirujte vash VIP opyt",
    ctaText: "Svyazhites' s nami seychas, chtoby sozdat' vash personalizirovannyj VIP paket i poluchit' podrobnuyu informaciyu.",
    ctaButton: "Svyazat'sya cherez WhatsApp"
  }
};

export default function VipServicesPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  const openWhatsApp = () => {
    const message = lang === 'tr' 
      ? "Merhaba, VIP hizmetler hakkinda bilgi almak istiyorum."
      : lang === 'ru'
      ? "Zdravstvujte, hochu uznat' o VIP uslugah."
      : "Hello, I would like to learn about VIP services.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-12">
        
        {/* Hero Stats */}
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-[#f8961e]/10 p-4 text-center sm:p-5">
              <p className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-[#1A1A1A]/70 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Intro with Image */}
        <section className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A] sm:text-2xl">{t.introTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]/80 sm:text-base">{t.introText}</p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl lg:h-80">
            <Image 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop" 
              alt="Luxury Hotel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              <p className="mt-1 text-sm font-medium text-white">Premium Accommodation</p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.processTitle}</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#3a0ca3] to-[#f72585] sm:block" />
            <div className="space-y-4">
              {t.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex gap-4 sm:gap-6">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#f8961e] text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-xs font-bold text-[#D4AF37]">{index + 1}</span>
                        <h3 className="font-semibold text-[#1A1A1A]">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#1A1A1A]/75">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Included Services */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.servicesTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                    <Icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A]">{service.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#1A1A1A]/70">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Packages */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.packagesTitle}</h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {t.packages.map((pkg) => (
              <div 
                key={pkg.name} 
                className={`relative rounded-2xl border p-6 ${
                  pkg.highlight 
                    ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/5 to-[#f8961e]/5 ring-2 ring-[#D4AF37]/30' 
                    : 'border-[#1A1A1A]/10 bg-white'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] px-4 py-1 text-xs font-bold text-white">
                    {pkg.badge}
                  </div>
                )}
                <div className="mb-4">
                  <h3 className={`text-xl font-bold ${pkg.highlight ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'}`}>
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/60">{pkg.price}</p>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.highlight ? 'text-[#D4AF37]' : 'text-[#1A1A1A]/40'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={openWhatsApp}
                  className={`mt-6 w-full rounded-xl py-3 text-sm font-semibold transition ${
                    pkg.highlight 
                      ? 'bg-[#D4AF37] text-white hover:bg-[#c9a033]' 
                      : 'bg-[#1A1A1A]/10 text-[#1A1A1A] hover:bg-[#1A1A1A]/20'
                  }`}
                >
                  {t.ctaButton}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Accommodation Standards */}
        <section className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-36 overflow-hidden rounded-xl">
              <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" alt="Hotel Room" fill className="object-cover" />
            </div>
            <div className="relative h-36 overflow-hidden rounded-xl">
              <Image src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop" alt="Hotel Lobby" fill className="object-cover" />
            </div>
            <div className="relative h-36 overflow-hidden rounded-xl">
              <Image src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop" alt="Hotel Pool" fill className="object-cover" />
            </div>
            <div className="relative h-36 overflow-hidden rounded-xl">
              <Image src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop" alt="Hotel Spa" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A]">{t.accommodationTitle}</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {t.accommodationFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                  <span className="text-[#1A1A1A]/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.testimonialsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{testimonial.text}</p>
                <div className="mt-4 border-t border-[#1A1A1A]/10 pt-4">
                  <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                  <p className="text-xs text-[#1A1A1A]/60">{testimonial.country}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

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

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#f8961e] p-6 text-white sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">{t.ctaTitle}</h2>
              <p className="mt-2 text-white/90">{t.ctaText}</p>
            </div>
            <button 
              onClick={openWhatsApp}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-white/90"
            >
              <MessageCircle className="h-4 w-4" />
              {t.ctaButton}
            </button>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
