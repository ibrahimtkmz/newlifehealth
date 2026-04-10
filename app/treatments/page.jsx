"use client";

import Link from "next/link";
import { Activity, Sparkles, Smile, Scissors, Scale, ShieldCheck } from "lucide-react";
import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CATEGORY_CARDS = [
  {
    slug: "hair-transplant",
    key: "hair",
    icon: Scissors,
    duration: "6-8 saat",
    recovery: "3-7 gün",
    success: "%97",
    gradient: "from-slate-900 via-sky-900 to-cyan-600"
  },
  {
    slug: "dental-aesthetics",
    key: "dental",
    icon: Smile,
    duration: "3-5 gün",
    recovery: "2-4 gün",
    success: "%98",
    gradient: "from-slate-900 via-indigo-900 to-violet-600"
  },
  {
    slug: "plastic-surgery",
    key: "plastic",
    icon: Sparkles,
    duration: "2-6 saat",
    recovery: "7-14 gün",
    success: "%95",
    gradient: "from-slate-900 via-fuchsia-900 to-pink-600"
  },
  {
    slug: "bariatric-surgery",
    key: "bariatric",
    icon: Activity,
    duration: "30 dk - 2 saat",
    recovery: "5-10 gün",
    success: "%93",
    gradient: "from-slate-900 via-emerald-900 to-teal-600"
  }
];

const CONTENT = {
  tr: {
    title: "Tedaviler",
    subtitle: "Uluslararası Standartlarda Uzman Tedavi Çözümleri.",
    intro: "Tüm medikal hizmetlerimizi tek bakışta inceleyin, size en uygun tedavi alanına güvenle yönelin.",
    labels: {
      hair: "Saç Ekimi",
      dental: "Diş Estetiği",
      plastic: "Estetik Cerrahi",
      bariatric: "Obezite Cerrahisi"
    },
    duration: "Tedavi Süresi",
    recovery: "İyileşme",
    success: "Başarı Oranı",
    detail: "Detayı İncele",
    compareTitle: "Hızlı Karşılaştırma",
    compareHeaders: ["Tedavi", "Genel Avantaj", "Türkiye'de Kalış"],
    compareRows: [
      ["Saç Ekimi", "Doğal yoğunluk + minimal iz", "3 gün"],
      ["Diş Estetiği", "Hızlı estetik dönüşüm", "4-6 gün"],
      ["Estetik Cerrahi", "Kişiye özel plan + hastane güvenliği", "7-10 gün"],
      ["Obezite Cerrahisi", "Metabolik sağlıkta kalıcı iyileşme", "5-7 gün"]
    ],
    certTitle: "Sertifika ve Yetki Belgeleri",
    certs: ["JCI Akreditasyonu", "ISO 9001 Sağlık Kalite", "TÜRSAB Sağlık Turizmi Yetki", "Sağlık Bakanlığı Uluslararası Hasta Yetki Belgesi"]
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
            return (
              <article key={card.slug} className={`rounded-3xl bg-gradient-to-br ${card.gradient} p-6 text-white shadow-xl`}>
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-semibold">{t.labels[card.key]}</h2>
                  <Icon className="h-8 w-8" />
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-xl bg-white/15 p-3">
                    <p className="text-[10px] text-white/75">{t.duration}</p>
                    <p className="mt-1 font-semibold">{card.duration}</p>
                  </div>
                  <div className="rounded-xl bg-white/15 p-3">
                    <p className="text-[10px] text-white/75">{t.recovery}</p>
                    <p className="mt-1 font-semibold">{card.recovery}</p>
                  </div>
                  <div className="rounded-xl bg-white/15 p-3">
                    <p className="text-[10px] text-white/75">{t.success}</p>
                    <p className="mt-1 font-semibold">{card.success}</p>
                  </div>
                </div>

                <Link href={`/treatments/${card.slug}`} className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A1A1A]">
                  {t.detail}
                </Link>
              </article>
            );
          })}
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
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 text-[#1A1A1A]/80">{cell}</td>
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
