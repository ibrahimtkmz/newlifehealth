"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";
import Image from "next/image";
import { Eye, Lock, MessageCircle, ShieldCheck, Scissors, Smile, Sparkles, Activity, Users, Award, Star, CheckCircle2, Camera } from "lucide-react";

const BEFORE_AFTER_IMAGES = {
  hair: [
    { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop", label: "FUE 3000 Greft" },
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop", label: "DHI 2500 Greft" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", label: "Sakal Ekimi" },
  ],
  dental: [
    { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=400&fit=crop", label: "Hollywood Smile" },
    { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=400&fit=crop", label: "Zirkonyum" },
    { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=400&fit=crop", label: "Implant" },
  ],
  plastic: [
    { src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop", label: "Burun Estetigi" },
    { src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop", label: "Yuz Germe" },
    { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", label: "Vucut Estetigi" },
  ],
  bariatric: [
    { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", label: "Tup Mide" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=400&fit=crop", label: "Mide Bypass" },
  ]
};

const CONTENT = {
  tr: {
    title: "Oncesi & Sonrasi",
    subtitle: "Hasta mahremiyeti ve tibbi etik prensipleri korunarak sonuc kalitesini seffaf bicimde degerlendiren bir yaklasim uyguluyoruz.",
    intro: "Oncesi-sonrasi analizlerimiz yalnizca fotograf karsilastirmasi degildir; sac yogunlugu, simetri, doku iyilesmesi, fonksiyonel kazanim ve hasta memnuniyeti gibi kriterlerle birlikte degerlendirilir.",
    statsTitle: "Sonuclarimiz Rakamlarla",
    stats: [
      { value: "15,000+", label: "Basarili Tedavi" },
      { value: "%98", label: "Memnuniyet Orani" },
      { value: "85+", label: "Ulkeden Hasta" },
      { value: "12+", label: "Yil Deneyim" }
    ],
    privacyTitle: "Gizlilik Politikamiz",
    privacyText: "Tibbi etik geregi, detayli oncesi-sonrasi fotograflarini yalnizca WhatsApp uzerinden aktif danismanlık surecindeki hastalarimizla paylasiyoruz. Bu sayede hasta gizliligini korurken, gercek sonuclari seffaf bicimde sunuyoruz.",
    privacyFeatures: [
      "Hasta onayı olmadan fotograf paylasimi yapilmaz",
      "Yuz ve kimlik bilgileri gizlenir",
      "Sadece medikal degerlendirme amacli kullanilir",
      "KVKK ve GDPR uyumlu veri isleme"
    ],
    categoriesTitle: "Tedavi Kategorileri",
    categories: [
      {
        key: "hair",
        icon: Scissors,
        title: "Sac Ekimi",
        description: "Dogal sac cizgisi tasarimi, yogunluk artisi ve greft dagilimi sonuclari. Safir FUE ve DHI teknikleri ile mukemmel sonuclar.",
        cases: "8,000+",
        satisfaction: "%97"
      },
      {
        key: "dental",
        icon: Smile,
        title: "Dis Estetigi",
        description: "Hollywood gulusu, zirkonyum kaplama ve implant sonuclari. Dijital gulus tasarimi ile dogal ve estetik sonuclar.",
        cases: "5,500+",
        satisfaction: "%98"
      },
      {
        key: "plastic",
        icon: Sparkles,
        title: "Plastik Cerrahi",
        description: "Burun estetigi, yuz germe ve vucut sekillendirme sonuclari. Deneyimli cerrahlarla dogal gorunumlu sonuclar.",
        cases: "3,200+",
        satisfaction: "%95"
      },
      {
        key: "bariatric",
        icon: Activity,
        title: "Obezite Cerrahisi",
        description: "Kilo kaybi sureci, vucut donusumu ve saglik iyilesmesi sonuclari. Metabolik saglikta kalici iyilesme.",
        cases: "2,100+",
        satisfaction: "%93"
      }
    ],
    evaluationTitle: "Degerlendirme Kriterlerimiz",
    criteria: [
      { title: "Estetik Uyum", description: "Yuz orantilari ve dogal gorunum degerlendirmesi", icon: Eye },
      { title: "Teknik Basari", description: "Cerrahi teknigin mukemmelligi ve hassasiyeti", icon: Award },
      { title: "Iyilesme Sureci", description: "Doku iyilesmesi ve iz minimizasyonu", icon: ShieldCheck },
      { title: "Hasta Memnuniyeti", description: "Beklenti ve sonuc uyumu, yasam kalitesi", icon: Star }
    ],
    testimonialsTitle: "Hasta Deneyimleri",
    testimonials: [
      {
        name: "Ahmet Y.",
        treatment: "Sac Ekimi",
        text: "3000 greft ile 8 ay sonra sonuclarim mukemmel. Dogal gorunuyor ve kimse ekili oldugunu anlamiyor.",
        rating: 5
      },
      {
        name: "Elena K.",
        country: "Rusya",
        treatment: "Hollywood Smile",
        text: "20 dis zirkonyum kaplama yaptirdim. Gulusum tamamen degisti, cok mutluyum!",
        rating: 5
      },
      {
        name: "Michael B.",
        country: "Ingiltere",
        treatment: "Burun Estetigi",
        text: "Cerrahim cok yetenekliydi. Dogal bir sonuc elde ettim, tam istedigim gibi.",
        rating: 5
      }
    ],
    processTitle: "Sonuc Degerlendirme Sureci",
    processSteps: [
      { title: "Ilk Gorusme", desc: "WhatsApp uzerinden fotograf paylasimi ve on degerlendirme" },
      { title: "Detayli Analiz", desc: "Uzman doktor tarafindan kisisellestirilmis degerlendirme" },
      { title: "Karsilastirma", desc: "Benzer vakalarin oncesi-sonrasi karsilastirmasi" },
      { title: "Plan Olusturma", desc: "Size ozel tedavi plani ve beklenti yonetimi" }
    ],
    trustTitle: "Neden Bize Guvenebilirsiniz?",
    trustItems: [
      "15,000+ basarili tedavi deneyimi",
      "Uluslararası sertifikali doktor kadrosu",
      "%98 hasta memnuniyet orani",
      "Seffaf ve etik yaklasim",
      "Omur boyu takip garantisi",
      "7/24 hasta destek hatti"
    ],
    ctaTitle: "Sonuclari Gormek Ister Misiniz?",
    ctaText: "WhatsApp uzerinden bizimle iletisime gecin ve ilgilendiginiz tedavi alanina ait gercek oncesi-sonrasi fotograflarini inceleyin. Uzman ekibimiz size ozel degerlendirme yapacaktir.",
    ctaButton: "WhatsApp ile Iletisime Gec",
    viewSamples: "Ornekleri Incele"
  },
  en: {
    title: "Before & After",
    subtitle: "We evaluate treatment quality transparently while strictly protecting patient privacy and medical ethics.",
    intro: "Our before-and-after review is more than image comparison; we assess density, symmetry, tissue recovery, functional improvement, and patient satisfaction as part of a complete outcome framework.",
    statsTitle: "Our Results in Numbers",
    stats: [
      { value: "15,000+", label: "Successful Treatments" },
      { value: "98%", label: "Satisfaction Rate" },
      { value: "85+", label: "Countries Served" },
      { value: "12+", label: "Years Experience" }
    ],
    privacyTitle: "Our Privacy Policy",
    privacyText: "In accordance with medical ethics, we share detailed before-and-after photos only with patients in active consultation via WhatsApp. This way, we protect patient privacy while transparently presenting real results.",
    privacyFeatures: [
      "No photo sharing without patient consent",
      "Face and identity information are hidden",
      "Used only for medical evaluation purposes",
      "GDPR compliant data processing"
    ],
    categoriesTitle: "Treatment Categories",
    categories: [
      {
        key: "hair",
        icon: Scissors,
        title: "Hair Transplant",
        description: "Natural hairline design, density increase and graft distribution results. Perfect results with Sapphire FUE and DHI techniques.",
        cases: "8,000+",
        satisfaction: "97%"
      },
      {
        key: "dental",
        icon: Smile,
        title: "Dental Aesthetics",
        description: "Hollywood smile, zirconium veneer and implant results. Natural and aesthetic results with digital smile design.",
        cases: "5,500+",
        satisfaction: "98%"
      },
      {
        key: "plastic",
        icon: Sparkles,
        title: "Plastic Surgery",
        description: "Rhinoplasty, facelift and body contouring results. Natural-looking results with experienced surgeons.",
        cases: "3,200+",
        satisfaction: "95%"
      },
      {
        key: "bariatric",
        icon: Activity,
        title: "Bariatric Surgery",
        description: "Weight loss journey, body transformation and health improvement results. Lasting improvement in metabolic health.",
        cases: "2,100+",
        satisfaction: "93%"
      }
    ],
    evaluationTitle: "Our Evaluation Criteria",
    criteria: [
      { title: "Aesthetic Harmony", description: "Facial proportions and natural appearance evaluation", icon: Eye },
      { title: "Technical Success", description: "Excellence and precision in surgical technique", icon: Award },
      { title: "Recovery Process", description: "Tissue healing and scar minimization", icon: ShieldCheck },
      { title: "Patient Satisfaction", description: "Alignment of expectations and results, quality of life", icon: Star }
    ],
    testimonialsTitle: "Patient Experiences",
    testimonials: [
      {
        name: "Ahmed Y.",
        treatment: "Hair Transplant",
        text: "With 3000 grafts, my results after 8 months are excellent. It looks natural and no one can tell it's transplanted.",
        rating: 5
      },
      {
        name: "Elena K.",
        country: "Russia",
        treatment: "Hollywood Smile",
        text: "I had 20 teeth zirconium veneers done. My smile has completely changed, I'm very happy!",
        rating: 5
      },
      {
        name: "Michael B.",
        country: "United Kingdom",
        treatment: "Rhinoplasty",
        text: "My surgeon was very talented. I got a natural result, exactly what I wanted.",
        rating: 5
      }
    ],
    processTitle: "Result Evaluation Process",
    processSteps: [
      { title: "Initial Consultation", desc: "Photo sharing and preliminary evaluation via WhatsApp" },
      { title: "Detailed Analysis", desc: "Personalized evaluation by expert doctor" },
      { title: "Comparison", desc: "Before-and-after comparison of similar cases" },
      { title: "Plan Creation", desc: "Personalized treatment plan and expectation management" }
    ],
    trustTitle: "Why Trust Us?",
    trustItems: [
      "15,000+ successful treatment experiences",
      "Internationally certified medical team",
      "98% patient satisfaction rate",
      "Transparent and ethical approach",
      "Lifetime follow-up guarantee",
      "24/7 patient support line"
    ],
    ctaTitle: "Want to See the Results?",
    ctaText: "Contact us via WhatsApp and review real before-and-after photos for your treatment area of interest. Our expert team will provide you with a personalized evaluation.",
    ctaButton: "Contact via WhatsApp",
    viewSamples: "View Samples"
  },
  ru: {
    title: "Do/Posle",
    subtitle: "My ocenivaem kachestvo rezul'tatov po prozrachnym medicinskim kriteriyam pri strogom soblyudenii konfidencial'nosti pacientov.",
    intro: "Analiz do/posle vklyuchaet ne tol'ko vizual'noe sravnenie: uchityvayutsya plotnost', simmetriya, zazhivlenie tkanej, funkcional'nye izmeneniya i udovletvorennost' pacienta.",
    statsTitle: "Nashi rezul'taty v cifrah",
    stats: [
      { value: "15,000+", label: "Uspeshnyh lechenij" },
      { value: "98%", label: "Uroven' udovletvorennosti" },
      { value: "85+", label: "Stran obsluzheno" },
      { value: "12+", label: "Let opyta" }
    ],
    privacyTitle: "Nasha politika konfidencial'nosti",
    privacyText: "V sootvetstvii s medicinskoj etikoj my delimsya podrobnymi fotografiyami do/posle tol'ko s pacientami na aktivnoj konsul'tacii cherez WhatsApp. Tak my zashchishchaem konfidencial'nost' pacientov, pri etom prozrachno predstavlyaya real'nye rezul'taty.",
    privacyFeatures: [
      "Net obmen fotografiyami bez soglasiya pacienta",
      "Lico i lichnost' skryty",
      "Ispol'zuetsya tol'ko dlya medicinskoj ocenki",
      "Obrabotka dannyh v sootvetstvii s GDPR"
    ],
    categoriesTitle: "Kategorii lecheniya",
    categories: [
      {
        key: "hair",
        icon: Scissors,
        title: "Peresadka volos",
        description: "Dizajn estestvennoj linii rosta volos, uvelichenie plotnosti i rezul'taty raspredeleniya graftov. Ideal'nye rezul'taty s tekhnikami Sapphire FUE i DHI.",
        cases: "8,000+",
        satisfaction: "97%"
      },
      {
        key: "dental",
        icon: Smile,
        title: "Estetika zubov",
        description: "Gollivudskaya ulybka, cirkonievye viniry i rezul'taty implantacii. Estestvennye i esteticheskie rezul'taty s cifrovym dizajnom ulybki.",
        cases: "5,500+",
        satisfaction: "98%"
      },
      {
        key: "plastic",
        icon: Sparkles,
        title: "Plasticheskaya khirurgiya",
        description: "Rinoplastika, podtyazhka lica i konturirovanie tela. Estestvennye rezul'taty s opytnymi khirurgami.",
        cases: "3,200+",
        satisfaction: "95%"
      },
      {
        key: "bariatric",
        icon: Activity,
        title: "Bariatricheskaya khirurgiya",
        description: "Put' k snizheniyu vesa, transformaciya tela i uluchshenie zdorov'ya. Stojkoe uluchshenie metabolicheskogo zdorov'ya.",
        cases: "2,100+",
        satisfaction: "93%"
      }
    ],
    evaluationTitle: "Nashi kriterii ocenki",
    criteria: [
      { title: "Esteticheskaya garmoniya", description: "Ocenka proporcij lica i estestvennogo vida", icon: Eye },
      { title: "Tekhnicheskij uspekh", description: "Masterstvo i tochnost' khirurgicheskoj tekhniki", icon: Award },
      { title: "Process vosstanovleniya", description: "Zazhivlenie tkanej i minimizaciya rubcov", icon: ShieldCheck },
      { title: "Udovletvorennost' pacienta", description: "Sootvetstvie ozhidanij i rezul'tatov, kachestvo zhizni", icon: Star }
    ],
    testimonialsTitle: "Opyt pacientov",
    testimonials: [
      {
        name: "Ahmet Y.",
        treatment: "Peresadka volos",
        text: "S 3000 graftami moi rezul'taty cherez 8 mesyacev prevoshodnye. Vyglyadit estestvenno, nikto ne mozhet skazat', chto eto peresadka.",
        rating: 5
      },
      {
        name: "Elena K.",
        country: "Rossiya",
        treatment: "Gollivudskaya ulybka",
        text: "Mne sdelali cirkonievye viniry na 20 zubov. Moya ulybka polnost'yu izmenilas', ya ochen' schastliva!",
        rating: 5
      },
      {
        name: "Majkl B.",
        country: "Velikobritaniya",
        treatment: "Rinoplastika",
        text: "Moj khirurg byl ochen' talantliv. Ya poluchil estestvennyj rezul'tat, imenno to, chto hotel.",
        rating: 5
      }
    ],
    processTitle: "Process ocenki rezul'tatov",
    processSteps: [
      { title: "Pervichnaya konsul'taciya", desc: "Obmen foto i predvaritel'naya ocenka cherez WhatsApp" },
      { title: "Podrobnyj analiz", desc: "Personalizirovannaya ocenka ekspertom-vrachom" },
      { title: "Sravnenie", desc: "Sravnenie do/posle podobnyh sluchaev" },
      { title: "Sozdanie plana", desc: "Personalizirovannyj plan lecheniya i upravlenie ozhidaniyami" }
    ],
    trustTitle: "Pochemu nam doveryayut?",
    trustItems: [
      "15,000+ uspeshnyh sluchaev lecheniya",
      "Mezhdunarodno sertificirovannaya medicinskaya komanda",
      "98% uroven' udovletvorennosti pacientov",
      "Prozrachnyj i etichnyj podhod",
      "Pozhiznennaya garantiya nablyudeniya",
      "Liniya podderzhki pacientov 24/7"
    ],
    ctaTitle: "Hotite uvidet' rezul'taty?",
    ctaText: "Svyazhites' s nami cherez WhatsApp i posmotrite real'nye fotografii do/posle po interesuyushchemu vas napravleniyu lecheniya. Nasha ekspertnaya komanda predostavit vam personalizirovannuyu ocenku.",
    ctaButton: "Svyazat'sya cherez WhatsApp",
    viewSamples: "Posmotret' primery"
  }
};

const whatsappNumber = "905000000000";

export default function BeforeAfterPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  const openWhatsApp = () => {
    const message = lang === 'tr' 
      ? "Merhaba, oncesi-sonrasi fotograflari gormek istiyorum."
      : lang === 'ru'
      ? "Zdravstvujte, hochu posmotret' fotografii do/posle."
      : "Hello, I would like to see before-after photos.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-12">
        <p className="text-sm leading-relaxed text-[#1A1A1A]/80 sm:text-base">{t.intro}</p>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-gradient-to-br from-[#3a0ca3]/10 to-[#f72585]/10 p-4 text-center sm:p-5">
              <p className="text-2xl font-bold text-[#3a0ca3] sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-[#1A1A1A]/70 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Privacy Notice */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <Lock className="h-6 w-6 text-amber-700" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-amber-900">{t.privacyTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-800">{t.privacyText}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {t.privacyFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-amber-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories with Sample Images */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.categoriesTitle}</h2>
          <div className="space-y-6">
            {t.categories.map((category) => {
              const Icon = category.icon;
              const images = BEFORE_AFTER_IMAGES[category.key] || [];
              return (
                <div key={category.key} className="overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-white shadow-sm">
                  <div className="grid gap-6 p-6 lg:grid-cols-[1fr_1.2fr]">
                    {/* Info */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3a0ca3]/10 to-[#f72585]/10">
                          <Icon className="h-6 w-6 text-[#3a0ca3]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#1A1A1A]">{category.title}</h3>
                          <div className="flex items-center gap-3 text-xs text-[#1A1A1A]/60">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {category.cases} vaka
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-[#D4AF37] text-[#D4AF37]" />
                              {category.satisfaction}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-[#1A1A1A]/70">{category.description}</p>
                      <button 
                        onClick={openWhatsApp}
                        className="mt-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3a0ca3] to-[#f72585] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                      >
                        <Camera className="h-4 w-4" />
                        {t.viewSamples}
                      </button>
                    </div>

                    {/* Sample Images */}
                    <div className="grid grid-cols-3 gap-3">
                      {images.map((img, index) => (
                        <div key={index} className="group relative aspect-square overflow-hidden rounded-xl border border-[#1A1A1A]/10">
                          <Image 
                            src={img.src} 
                            alt={img.label}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                            <div className="rounded-full bg-white/20 p-2 backdrop-blur">
                              <Eye className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                            <p className="text-xs font-medium text-white">{img.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section>
          <h2 className="mb-5 text-xl font-semibold text-[#1A1A1A]">{t.evaluationTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.criteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl bg-[#FBFBFB] p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3a0ca3] to-[#f72585]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#1A1A1A]/70">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-[#f8961e]/5 p-6">
          <h3 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.processTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-4">
            {t.processSteps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-[#1A1A1A]">{step.title}</h4>
                <p className="mt-1 text-xs text-[#1A1A1A]/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.testimonialsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{testimonial.text}</p>
                <div className="mt-4 border-t border-[#1A1A1A]/10 pt-4">
                  <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                  <p className="text-xs text-[#1A1A1A]/60">
                    {testimonial.country && `${testimonial.country} - `}{testimonial.treatment}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-5 w-5 text-emerald-700" />
            <h2 className="font-semibold text-emerald-900">{t.trustTitle}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm text-emerald-900 shadow-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-[#3a0ca3] to-[#f72585] p-6 text-white sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">{t.ctaTitle}</h2>
              <p className="mt-2 text-sm text-white/85 sm:text-base">{t.ctaText}</p>
            </div>
            <button 
              onClick={openWhatsApp}
              className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#3a0ca3] transition hover:bg-white/90"
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
