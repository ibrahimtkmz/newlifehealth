"use client";

import Link from "next/link";
import { Activity, Sparkles, Smile, Scissors, Scale, ShieldCheck, Star, Clock, CheckCircle2 } from "lucide-react";
import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CATEGORY_CARDS = [
  {
    slug: "hair-transplant",
    key: "hair",
    icon: Scissors,
    gradient: "from-slate-900 via-sky-900 to-cyan-600"
  },
  {
    slug: "dental-aesthetics",
    key: "dental",
    icon: Smile,
    gradient: "from-slate-900 via-indigo-900 to-violet-600"
  },
  {
    slug: "plastic-surgery",
    key: "plastic",
    icon: Sparkles,
    gradient: "from-slate-900 via-fuchsia-900 to-pink-600"
  },
  {
    slug: "bariatric-surgery",
    key: "bariatric",
    icon: Activity,
    gradient: "from-slate-900 via-emerald-900 to-teal-600"
  }
];

const CONTENT = {
  tr: {
    title: "Tedaviler",
    subtitle: "Uluslararası Standartlarda Uzman Tedavi Cozumleri. Her alanda deneyimli doktor kadromuz ve modern altyapimizla hizmetinizdeyiz.",
    intro: "Tum medikal hizmetlerimizi tek bakista inceleyin, size en uygun tedavi alanina guvenle yonelin.",
    labels: {
      hair: "Sac Ekimi",
      dental: "Dis Estetigi",
      plastic: "Estetik Cerrahi",
      bariatric: "Obezite Cerrahisi"
    },
    descriptions: {
      hair: "Safir FUE ve DHI teknikleri ile dogal gorunumlu, kalici sonuclar. Agrısız islem ve hizli iyilesme.",
      dental: "Zirkonyum kaplamalar, implantlar ve Hollywood gulusu tasarimi. Dijital planlama ile mukemmel sonuclar.",
      plastic: "Burun estetigi, yuz germe, meme estetigi ve vucut sekillendirme. Uzman cerrahlar ile guvenli islemler.",
      bariatric: "Mide botoksu, tup mide ve bypass ameliyatlari. Kalici kilo kontrolu ve saglikli yasam."
    },
    stats: {
      hair: { duration: "6-8 saat", recovery: "3-7 gun", success: "%97" },
      dental: { duration: "3-5 gun", recovery: "2-4 gun", success: "%98" },
      plastic: { duration: "2-6 saat", recovery: "7-14 gun", success: "%95" },
      bariatric: { duration: "30 dk - 2 saat", recovery: "5-10 gun", success: "%93" }
    },
    duration: "Tedavi Suresi",
    recovery: "Iyilesme",
    success: "Basari Orani",
    detail: "Detayi Incele",
    compareTitle: "Hizli Karsilastirma",
    compareHeaders: ["Tedavi", "Genel Avantaj", "Turkiye'de Kalis"],
    compareRows: [
      ["Sac Ekimi", "Dogal yogunluk + minimal iz", "3 gun"],
      ["Dis Estetigi", "Hizli estetik donusum", "4-6 gun"],
      ["Estetik Cerrahi", "Kisiye ozel plan + hastane guvenligi", "7-10 gun"],
      ["Obezite Cerrahisi", "Metabolik saglikta kalici iyilesme", "5-7 gun"]
    ],
    certTitle: "Sertifika ve Yetki Belgeleri",
    certs: ["JCI Akreditasyonu", "ISO 9001 Saglik Kalite", "TURSAB Saglik Turizmi Yetki", "Saglik Bakanligi Uluslararasi Hasta Yetki Belgesi"],
    whyUsTitle: "Neden Bizi Secmelisiniz?",
    whyUsItems: [
      "Uzman doktor kadrosu ve uluslararasi sertifikalar",
      "Modern hastane altyapisi ve son teknoloji cihazlar",
      "Kisisellestirilmis tedavi planlari",
      "7/24 hasta destek hatti",
      "Tedavi sonrasi takip ve danismanlik"
    ]
  },
  en: {
    title: "Treatments",
    subtitle: "Expert Treatment Solutions at International Standards. Our experienced medical team and modern infrastructure are at your service.",
    intro: "Browse all our medical services at a glance and confidently choose the treatment area that suits you best.",
    labels: {
      hair: "Hair Transplant",
      dental: "Dental Aesthetics",
      plastic: "Plastic Surgery",
      bariatric: "Bariatric Surgery"
    },
    descriptions: {
      hair: "Natural-looking, permanent results with Sapphire FUE and DHI techniques. Painless procedure and fast recovery.",
      dental: "Zirconium veneers, implants and Hollywood smile design. Perfect results with digital planning.",
      plastic: "Rhinoplasty, facelift, breast aesthetics and body contouring. Safe procedures with expert surgeons.",
      bariatric: "Gastric botox, sleeve gastrectomy and bypass surgeries. Permanent weight control and healthy living."
    },
    stats: {
      hair: { duration: "6-8 hours", recovery: "3-7 days", success: "97%" },
      dental: { duration: "3-5 days", recovery: "2-4 days", success: "98%" },
      plastic: { duration: "2-6 hours", recovery: "7-14 days", success: "95%" },
      bariatric: { duration: "30 min - 2 hrs", recovery: "5-10 days", success: "93%" }
    },
    duration: "Treatment Duration",
    recovery: "Recovery",
    success: "Success Rate",
    detail: "View Details",
    compareTitle: "Quick Comparison",
    compareHeaders: ["Treatment", "Key Advantage", "Stay in Turkey"],
    compareRows: [
      ["Hair Transplant", "Natural density + minimal scarring", "3 days"],
      ["Dental Aesthetics", "Rapid aesthetic transformation", "4-6 days"],
      ["Plastic Surgery", "Personalized plan + hospital safety", "7-10 days"],
      ["Bariatric Surgery", "Lasting improvement in metabolic health", "5-7 days"]
    ],
    certTitle: "Certifications & Accreditations",
    certs: ["JCI Accreditation", "ISO 9001 Healthcare Quality", "TURSAB Health Tourism License", "Ministry of Health International Patient Authorization"],
    whyUsTitle: "Why Choose Us?",
    whyUsItems: [
      "Expert medical team with international certifications",
      "Modern hospital infrastructure with latest technology",
      "Personalized treatment plans",
      "24/7 patient support line",
      "Post-treatment follow-up and consultation"
    ]
  },
  ru: {
    title: "Лечение",
    subtitle: "Экспертные решения по международным стандартам. Наша опытная медицинская команда и современная инфраструктура к вашим услугам.",
    intro: "Ознакомьтесь со всеми нашими медицинскими услугами и уверенно выберите подходящее направление лечения.",
    labels: {
      hair: "Пересадка волос",
      dental: "Эстетика зубов",
      plastic: "Пластическая хирургия",
      bariatric: "Бариатрическая хирургия"
    },
    descriptions: {
      hair: "Естественный вид и стойкие результаты с технологиями Sapphire FUE и DHI. Безболезненная процедура и быстрое восстановление.",
      dental: "Циркониевые виниры, импланты и голливудская улыбка. Идеальные результаты с цифровым планированием.",
      plastic: "Ринопластика, подтяжка лица, маммопластика и контурирование тела. Безопасные процедуры с экспертными хирургами.",
      bariatric: "Ботокс желудка, рукавная гастрэктомия и шунтирование. Постоянный контроль веса и здоровый образ жизни."
    },
    stats: {
      hair: { duration: "6-8 часов", recovery: "3-7 дней", success: "97%" },
      dental: { duration: "3-5 дней", recovery: "2-4 дня", success: "98%" },
      plastic: { duration: "2-6 часов", recovery: "7-14 дней", success: "95%" },
      bariatric: { duration: "30 мин - 2 ч", recovery: "5-10 дней", success: "93%" }
    },
    duration: "Длительность",
    recovery: "Восстановление",
    success: "Успешность",
    detail: "Подробнее",
    compareTitle: "Быстрое сравнение",
    compareHeaders: ["Лечение", "Основное преимущество", "Пребывание в Турции"],
    compareRows: [
      ["Пересадка волос", "Естественная плотность + минимальные рубцы", "3 дня"],
      ["Эстетика зубов", "Быстрая эстетическая трансформация", "4-6 дней"],
      ["Пластическая хирургия", "Индивидуальный план + безопасность клиники", "7-10 дней"],
      ["Бариатрическая хирургия", "Стойкое улучшение метаболизма", "5-7 дней"]
    ],
    certTitle: "Сертификаты и аккредитации",
    certs: ["Аккредитация JCI", "ISO 9001 Качество здравоохранения", "Лицензия TURSAB на медицинский туризм", "Разрешение Минздрава на работу с иностранными пациентами"],
    whyUsTitle: "Почему выбирают нас?",
    whyUsItems: [
      "Экспертная медицинская команда с международными сертификатами",
      "Современная инфраструктура с новейшими технологиями",
      "Персонализированные планы лечения",
      "Линия поддержки пациентов 24/7",
      "Послеоперационное наблюдение и консультации"
    ]
  }
};

export default function TreatmentsHubPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-10">
        <p className="text-sm text-[#1A1A1A]/80 sm:text-base">{t.intro}</p>

        <section className="grid gap-5 sm:grid-cols-2">
          {CATEGORY_CARDS.map((card) => {
            const Icon = card.icon;
            const stats = t.stats[card.key];
            return (
              <article key={card.slug} className={`rounded-3xl bg-gradient-to-br ${card.gradient} p-6 text-white shadow-xl`}>
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-semibold">{t.labels[card.key]}</h2>
                  <Icon className="h-8 w-8" />
                </div>
                
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{t.descriptions[card.key]}</p>

                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-white/15 p-3">
                    <p className="text-[10px] text-white/75">{t.duration}</p>
                    <p className="mt-1 font-semibold">{stats.duration}</p>
                  </div>
                  <div className="rounded-xl bg-white/15 p-3">
                    <p className="text-[10px] text-white/75">{t.recovery}</p>
                    <p className="mt-1 font-semibold">{stats.recovery}</p>
                  </div>
                  <div className="rounded-xl bg-white/15 p-3">
                    <p className="text-[10px] text-white/75">{t.success}</p>
                    <p className="mt-1 font-semibold">{stats.success}</p>
                  </div>
                </div>

                <Link href={`/treatments/${card.slug}`} className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A1A1A] transition hover:bg-white/90">
                  {t.detail}
                </Link>
              </article>
            );
          })}
        </section>

        {/* Why Choose Us Section */}
        <section className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-[#f8961e]/5 p-6">
          <div className="mb-5 flex items-center gap-2">
            <Star className="h-5 w-5 text-[#D4AF37]" />
            <h3 className="text-xl font-semibold text-[#1A1A1A]">{t.whyUsTitle}</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.whyUsItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" />
                <span className="text-sm text-[#1A1A1A]/80">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-[#1A1A1A]">{t.compareTitle}</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#1A1A1A]/10">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-[#F2F4F7]">
                <tr>
                  {t.compareHeaders.map((header) => (
                    <th key={header} className="px-4 py-3 font-semibold text-[#1A1A1A]">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compareRows.map((row) => (
                  <tr key={row[0]} className="border-t border-[#1A1A1A]/10">
                    {row.map((cell, index) => (
                      <td key={cell} className={`px-4 py-3 ${index === 0 ? 'font-medium text-[#1A1A1A]' : 'text-[#1A1A1A]/80'}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <div className="mb-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold text-emerald-900">{t.certTitle}</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.certs.map((cert) => (
              <div key={cert} className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-emerald-900">{cert}</div>
            ))}
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
