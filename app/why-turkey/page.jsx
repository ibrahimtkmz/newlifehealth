"use client";

import { useMemo } from "react";
import { useLanguage } from "../components/LanguageProvider";
import Link from "next/link";
import { BarChart3, ShieldCheck, Stethoscope, TimerReset, WalletCards } from "lucide-react";
import InnerPageLayout from "../components/InnerPageLayout";

const CONTENT = {
  tr: {
    title: "Neden Türkiye?",
    subtitle:
      "Türkiye, sağlık turizminde kalite, hız ve konforu tek bir yolculukta birleştiren güçlü bir merkezdir.",
    sectionTitle: "Neden Türkiye'yi Seçiyorlar?",
    sectionDescription:
      "Aşağıdaki veriler, uluslararası hastaların Türkiye'yi tercih etmesindeki temel nedenleri görsel olarak özetler.",
    metrics: [
      { label: "Maliyet avantajı", value: 70, icon: WalletCards, note: "Birçok tedavide %50-%70 daha erişilebilir ücretler" },
      { label: "Hızlı planlama", value: 85, icon: TimerReset, note: "Uzun bekleme listeleri olmadan kısa sürede işlem" },
      { label: "Klinik güven", value: 90, icon: ShieldCheck, note: "Uluslararası standartlara uygun hastane ve ekipler" }
    ],
    blocks: [
      {
        title: "Uzmanlık & Teknoloji",
        text: "Diş, estetik, saç ekimi, obezite ve ortopedi gibi alanlarda deneyimli hekimler ve modern tıbbi altyapı."
      },
      {
        title: "Kolay Ulaşım",
        text: "120+ ülkeden direkt uçuş imkânı ve uluslararası hasta koordinasyonu ile sorunsuz ulaşım süreci."
      },
      {
        title: "Konforlu Süreç",
        text: "VIP transfer, konaklama, tercüman ve tedavi sonrası takip desteğiyle uçtan uca hasta deneyimi."
      }
    ],
    comparisonTitle: "Örnek Tedavi Karşılaştırması",
    comparisonColumns: ["Tedavi", "İngiltere / ABD", "Türkiye", "Tasarruf"],
    comparison: [
      ["Diş İmplantı", "£1,500", "£450", "%70"],
      ["Saç Ekimi", "$10,000", "$2,000", "%80"],
      ["Mide Botoksu", "€4,000", "€1,200", "%70"]
    ],
    ctaTitle: "Hazırsanız Süreci Birlikte Planlayalım",
    ctaText: "Size uygun tedavi planını, bütçeyi ve seyahat takvimini hızlıca oluşturalım.",
    ctaPrimary: "Ücretsiz Konsültasyon",
    ctaSecondary: "Öncesi / Sonrası"
  },
  en: {
    title: "Why Turkey?",
    subtitle:
      "Turkey is a strong medical tourism hub combining quality care, speed, and comfort in one journey.",
    sectionTitle: "Why Patients Choose Turkey",
    sectionDescription:
      "The metrics below visually summarize the key reasons international patients prefer Turkey.",
    metrics: [
      { label: "Cost advantage", value: 70, icon: WalletCards, note: "Typically 50%-70% more affordable in many treatments" },
      { label: "Fast scheduling", value: 85, icon: TimerReset, note: "Short timelines without long waiting lists" },
      { label: "Clinical trust", value: 90, icon: ShieldCheck, note: "Hospitals and teams aligned with international standards" }
    ],
    blocks: [
      {
        title: "Expertise & Technology",
        text: "Experienced physicians and modern infrastructure in dentistry, aesthetics, hair transplant, obesity care, and orthopedics."
      },
      {
        title: "Easy Access",
        text: "Direct flights from 120+ countries and dedicated international patient coordination."
      },
      {
        title: "Comfortable Experience",
        text: "End-to-end support with VIP transfer, accommodation, interpretation, and aftercare follow-up."
      }
    ],
    comparisonTitle: "Sample Treatment Comparison",
    comparisonColumns: ["Treatment", "UK / US", "Turkey", "Savings"],
    comparison: [
      ["Dental Implant", "£1,500", "£450", "70%"],
      ["Hair Transplant", "$10,000", "$2,000", "80%"],
      ["Gastric Botox", "€4,000", "€1,200", "70%"]
    ],
    ctaTitle: "Let’s Plan Your Journey",
    ctaText: "We can quickly build your personalized treatment plan, budget, and travel timeline.",
    ctaPrimary: "Free Consultation",
    ctaSecondary: "Before / After"
  },
  ru: {
    title: "Почему Турция?",
    subtitle:
      "Турция — один из ведущих центров медицинского туризма, где сочетаются качество, скорость и комфорт.",
    sectionTitle: "Почему пациенты выбирают Турцию",
    sectionDescription:
      "Ниже представлены ключевые преимущества, которые международные пациенты отмечают чаще всего.",
    metrics: [
      { label: "Выгода по стоимости", value: 70, icon: WalletCards, note: "Во многих процедурах экономия составляет 50%-70%" },
      { label: "Быстрое планирование", value: 85, icon: TimerReset, note: "Без длительных очередей и месяцев ожидания" },
      { label: "Клиническая надежность", value: 90, icon: ShieldCheck, note: "Клиники и специалисты международного уровня" }
    ],
    blocks: [
      {
        title: "Экспертиза и технологии",
        text: "Опытные врачи и современная инфраструктура: стоматология, эстетика, трансплантация волос, бариатрия, ортопедия."
      },
      {
        title: "Удобная логистика",
        text: "Прямые рейсы из 120+ стран и сопровождение международных пациентов на каждом этапе."
      },
      {
        title: "Комфортный путь",
        text: "VIP-трансфер, проживание, переводчик и постлечебное сопровождение в формате " +
          "всё включено."
      }
    ],
    comparisonTitle: "Пример сравнения стоимости",
    comparisonColumns: ["Процедура", "Великобритания / США", "Турция", "Экономия"],
    comparison: [
      ["Имплант зуба", "£1,500", "£450", "70%"],
      ["Пересадка волос", "$10,000", "$2,000", "80%"],
      ["Ботокс желудка", "€4,000", "€1,200", "70%"]
    ],
    ctaTitle: "Готовы начать?",
    ctaText: "Составим для вас персональный план лечения, бюджет и удобный график поездки.",
    ctaPrimary: "Бесплатная консультация",
    ctaSecondary: "До / После"
  }
};

export default function WhyTurkeyPage() {
  const { lang } = useLanguage();
  const data = useMemo(() => CONTENT[lang] || CONTENT.tr, [lang]);

  return (
    <InnerPageLayout title={data.title} subtitle={data.subtitle}>
      <div className="space-y-10 text-[#1A1A1A]/85">
        

        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#1A1A1A]">
            <BarChart3 className="h-5 w-5" />
            <h2 className="text-xl font-semibold">{data.sectionTitle}</h2>
          </div>
          <p>{data.sectionDescription}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {data.metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <article key={metric.label} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
                      <Icon className="h-4 w-4" />
                      {metric.label}
                    </div>
                    <span className="text-sm font-bold text-[#1A1A1A]">{metric.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#EDEDED]">
                    <div className="h-2 rounded-full bg-[#1A1A1A]" style={{ width: `${metric.value}%` }} />
                  </div>
                  <p className="mt-3 text-sm text-[#1A1A1A]/75">{metric.note}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {data.blocks.map((block, index) => (
            <article key={block.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1A1A] text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-base font-semibold text-[#1A1A1A]">{block.title}</h3>
              <p className="mt-2 text-sm text-[#1A1A1A]/75">{block.text}</p>
            </article>
          ))}
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-[#1A1A1A]" />
            <h2 className="text-xl font-semibold text-[#1A1A1A]">{data.comparisonTitle}</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#1A1A1A]/10">
            <table className="min-w-full divide-y divide-[#1A1A1A]/10 text-left text-sm">
              <thead className="bg-[#F5F5F5] text-[#1A1A1A]">
                <tr>
                  {data.comparisonColumns.map((column) => (
                    <th key={column} className="px-4 py-3 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/10 bg-white">
                {data.comparison.map((row) => (
                  <tr key={row[0]}>
                    <td className="px-4 py-3 font-medium text-[#1A1A1A]">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                    <td className="px-4 py-3 font-semibold text-[#0E7A36]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-6">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">{data.ctaTitle}</h2>
          <p>{data.ctaText}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#333333]">
              {data.ctaPrimary}
            </Link>
            <Link
              href="/before-after"
              className="rounded-full border border-[#1A1A1A]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#F5F5F5]"
            >
              {data.ctaSecondary}
            </Link>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
