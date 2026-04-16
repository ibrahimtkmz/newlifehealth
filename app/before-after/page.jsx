"use client";

import { useMemo, useState } from "react";
import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";
import { Lock, MessageCircle, ShieldCheck, Scissors, Smile, Sparkles, Activity } from "lucide-react";

const BEFORE_AFTER_CASES = [
  {
    treatment: "dental",
    before: "/10.jpeg",
    after: "/10-1.jpeg"
  }
];

const CONTENT = {
  tr: {
    title: "Oncesi & Sonrasi",
    subtitle: "Hasta mahremiyeti ve tibbi etik prensipleri korunarak sonuc kalitesini seffaf bicimde degerlendiren bir yaklasim uyguluyoruz.",
    intro: "Oncesi-sonrasi analizlerimiz yalnizca fotograf karsilastirmasi degildir; sac yogunlugu, simetri, doku iyilesmesi, fonksiyonel kazanim ve hasta memnuniyeti gibi kriterlerle birlikte degerlendirilir.",
    privacyTitle: "Gizlilik Politikamiz",
    privacyText: "Tibbi etik geregi, detayli oncesi-sonrasi fotograflarini yalnizca WhatsApp uzerinden aktif danismanlık surecindeki hastalarımızla paylasiyoruz. Bu sayede hasta gizliligini korurken, gercek sonuclari seffaf bicimde sunuyoruz.",
    categories: [
      {
        key: "hair",
        icon: Scissors,
        title: "Sac Ekimi",
        description: "Dogal sac cizgisi tasarimi, yogunluk artisi ve greft dagilimi sonucları",
        cases: "2,500+ vaka"
      },
      {
        key: "dental",
        icon: Smile,
        title: "Dis Estetigi",
        description: "Hollywood gulusu, zirkonyum kaplama ve implant sonuclari",
        cases: "1,800+ vaka"
      },
      {
        key: "plastic",
        icon: Sparkles,
        title: "Plastik Cerrahi",
        description: "Burun estetigi, yuz germe ve vucut sekillendirme sonuclari",
        cases: "1,200+ vaka"
      },
      {
        key: "bariatric",
        icon: Activity,
        title: "Obezite Cerrahisi",
        description: "Kilo kaybi sureci, vucut donusumu ve saglik iyilesmesi sonuclari",
        cases: "800+ vaka"
      }
    ],
    galleryTitle: "Gercek Oncesi / Sonrasi Sonuclari",
    evaluationTitle: "Degerlendirme Kriterlerimiz",
    criteria: [
      { title: "Estetik Uyum", description: "Yuz orantilari ve dogal gorunum" },
      { title: "Teknik Basari", description: "Cerrahi teknigin mukemmelligi" },
      { title: "Iyilesme Sureci", description: "Doku iyilesmesi ve iz minimizasyonu" },
      { title: "Hasta Memnuniyeti", description: "Beklenti ve sonuc uyumu" }
    ],
    ctaTitle: "Sonuclari Gormek Ister Misiniz?",
    ctaText: "WhatsApp uzerinden bizimle iletisime gecin ve ilgilendiginiz tedavi alanina ait gercek oncesi-sonrasi fotograflarini inceleyin.",
    previewHint: "Net sonuclar icin bizimle iletisime gecin",
    ctaButton: "WhatsApp ile Iletisime Gec",
    trustTitle: "Neden Bize Guvenebilirsiniz?",
    trustItems: [
      "15,000+ basarili tedavi deneyimi",
      "Uluslararası sertifikali doktor kadrosu",
      "%98 hasta memnuniyet orani",
      "Seffaf ve etik yaklasim"
    ]
  },
  en: {
    title: "Before & After",
    subtitle: "We evaluate treatment quality transparently while strictly protecting patient privacy and medical ethics.",
    intro: "Our before-and-after review is more than image comparison; we assess density, symmetry, tissue recovery, functional improvement, and patient satisfaction as part of a complete outcome framework.",
    privacyTitle: "Our Privacy Policy",
    privacyText: "In accordance with medical ethics, we share detailed before-and-after photos only with patients in active consultation via WhatsApp. This way, we protect patient privacy while transparently presenting real results.",
    categories: [
      {
        key: "hair",
        icon: Scissors,
        title: "Hair Transplant",
        description: "Natural hairline design, density increase and graft distribution results",
        cases: "2,500+ cases"
      },
      {
        key: "dental",
        icon: Smile,
        title: "Dental Aesthetics",
        description: "Hollywood smile, zirconium veneer and implant results",
        cases: "1,800+ cases"
      },
      {
        key: "plastic",
        icon: Sparkles,
        title: "Plastic Surgery",
        description: "Rhinoplasty, facelift and body contouring results",
        cases: "1,200+ cases"
      },
      {
        key: "bariatric",
        icon: Activity,
        title: "Bariatric Surgery",
        description: "Weight loss journey, body transformation and health improvement results",
        cases: "800+ cases"
      }
    ],
    galleryTitle: "Real Before / After Results",
    evaluationTitle: "Our Evaluation Criteria",
    criteria: [
      { title: "Aesthetic Harmony", description: "Facial proportions and natural appearance" },
      { title: "Technical Success", description: "Excellence in surgical technique" },
      { title: "Recovery Process", description: "Tissue healing and scar minimization" },
      { title: "Patient Satisfaction", description: "Alignment of expectations and results" }
    ],
    ctaTitle: "Want to See the Results?",
    ctaText: "Contact us via WhatsApp and review real before-and-after photos for your treatment area of interest.",
    previewHint: "Contact us to view full results",
    ctaButton: "Contact via WhatsApp",
    trustTitle: "Why Trust Us?",
    trustItems: [
      "15,000+ successful treatment experiences",
      "Internationally certified medical team",
      "98% patient satisfaction rate",
      "Transparent and ethical approach"
    ]
  },
  ru: {
    title: "До/После",
    subtitle: "Мы оцениваем качество результатов по прозрачным медицинским критериям при строгом соблюдении конфиденциальности пациентов.",
    intro: "Анализ до/после включает не только визуальное сравнение: учитываются плотность, симметрия, заживление тканей, функциональные изменения и удовлетворенность пациента.",
    privacyTitle: "Наша политика конфиденциальности",
    privacyText: "В соответствии с медицинской этикой мы делимся подробными фотографиями до/после только с пациентами на активной консультации через WhatsApp. Так мы защищаем конфиденциальность пациентов, при этом прозрачно представляя реальные результаты.",
    categories: [
      {
        key: "hair",
        icon: Scissors,
        title: "Пересадка волос",
        description: "Дизайн естественной линии роста волос, увеличение плотности и результаты распределения графтов",
        cases: "2,500+ случаев"
      },
      {
        key: "dental",
        icon: Smile,
        title: "Эстетика зубов",
        description: "Голливудская улыбка, циркониевые виниры и результаты имплантации",
        cases: "1,800+ случаев"
      },
      {
        key: "plastic",
        icon: Sparkles,
        title: "Пластическая хирургия",
        description: "Ринопластика, подтяжка лица и контурирование тела",
        cases: "1,200+ случаев"
      },
      {
        key: "bariatric",
        icon: Activity,
        title: "Бариатрическая хирургия",
        description: "Путь к снижению веса, трансформация тела и улучшение здоровья",
        cases: "800+ случаев"
      }
    ],
    galleryTitle: "Реальные результаты До / После",
    evaluationTitle: "Наши критерии оценки",
    criteria: [
      { title: "Эстетическая гармония", description: "Пропорции лица и естественный вид" },
      { title: "Техническй успех", description: "Мастерство хирургической техники" },
      { title: "Процесс восстановления", description: "Заживление тканей и минимизация рубцов" },
      { title: "Удовлетворенность пациента", description: "Соответствие ожиданий и результатов" }
    ],
    ctaTitle: "Хотите увидеть результаты?",
    ctaText: "Свяжитесь с нами через WhatsApp и посмотрите реальные фотографии до/после по интересующему вас направлению лечения.",
    previewHint: "Свяжитесь с нами, чтобы увидеть полные результаты",
    ctaButton: "Связаться через WhatsApp",
    trustTitle: "Почему нам доверяют?",
    trustItems: [
      "15,000+ успешных случаев лечения",
      "Международно сертифицированная медицинская команда",
      "98% уровень удовлетворенности пациентов",
      "Прозрачный и этичный подход"
    ]
  }
};

const whatsappNumber = "905000000000";

export default function BeforeAfterPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;
  const [selectedTreatment, setSelectedTreatment] = useState("dental");
  const filteredCases = useMemo(
    () => BEFORE_AFTER_CASES.filter((item) => item.treatment === selectedTreatment),
    [selectedTreatment]
  );

  const openWhatsApp = () => {
    const message = lang === 'tr' 
      ? "Merhaba, oncesi-sonrasi fotograflari gormek istiyorum."
      : lang === 'ru'
      ? "Здравствуйте, хочу посмотреть фотографии до/после."
      : "Hello, I would like to see before-after photos.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-10">
        <p className="text-sm leading-relaxed text-[#1A1A1A]/80 sm:text-base">{t.intro}</p>

        {/* Privacy Notice */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <Lock className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h2 className="font-semibold text-amber-900">{t.privacyTitle}</h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-800">{t.privacyText}</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedTreatment === category.key;
              return (
                <button
                  key={category.title}
                  onClick={() => setSelectedTreatment(category.key)}
                  className={`group relative overflow-hidden rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
                    isActive
                      ? "border-[#3a0ca3]/40 bg-[#3a0ca3]/5"
                      : "border-[#1A1A1A]/10 bg-white"
                  }`}
                >
                  <div className="absolute right-4 top-4 rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#D4AF37]">
                    {category.cases}
                  </div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3a0ca3]/10 to-[#f72585]/10">
                    <Icon className="h-6 w-6 text-[#3a0ca3]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">{category.title}</h3>
                  <p className="mt-2 text-sm text-[#1A1A1A]/70">{category.description}</p>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-xl font-semibold text-[#1A1A1A]">{t.galleryTitle}</h2>
          <div className="space-y-4">
            {filteredCases.map((item, index) => (
              <div key={`${item.before}-${item.after}`} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-3 shadow-sm sm:p-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-xl border border-[#1A1A1A]/10">
                    <img
                      src={encodeURI(item.before)}
                      alt={`Before result ${index + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <p className="border-t border-[#1A1A1A]/10 bg-[#FBFBFB] px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-[#1A1A1A]/70">
                      Before
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-[#1A1A1A]/10">
                    <img
                      src={encodeURI(item.after)}
                      alt={`After result ${index + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <p className="border-t border-[#1A1A1A]/10 bg-[#FBFBFB] px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-[#1A1A1A]/70">
                      After
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {!filteredCases.length && (
              <div className="rounded-2xl border border-dashed border-[#1A1A1A]/20 bg-[#FBFBFB] px-4 py-8 text-center text-sm text-[#1A1A1A]/70">
                {lang === "tr"
                  ? "Bu tedavi kategorisi icin su an yayinlanmis bir before/after gorseli bulunmuyor."
                  : lang === "ru"
                  ? "Для этой категории лечения сейчас нет опубликованных фото до/после."
                  : "There are currently no published before/after images for this treatment category."}
              </div>
            )}
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section>
          <h2 className="mb-5 text-xl font-semibold text-[#1A1A1A]">{t.evaluationTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.criteria.map((item, index) => (
              <div key={item.title} className="rounded-xl bg-[#FBFBFB] p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1A1A] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-1 text-sm text-[#1A1A1A]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-5 w-5 text-emerald-700" />
            <h2 className="font-semibold text-emerald-900">{t.trustTitle}</h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {t.trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm text-emerald-900">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
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
              <p className="mt-2 text-white/85">{t.ctaText}</p>
            </div>
            <button 
              onClick={openWhatsApp}
              className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#3a0ca3] transition hover:bg-white/90"
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
