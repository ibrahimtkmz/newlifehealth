"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import {
  Plane,
  CarTaxiFront,
  Droplets,
  Stethoscope,
  Clock3,
  ShowerHead,
  MessageCircleHeart,
  Leaf,
  Ghost,
  Sprout,
  Crown,
  Flag
} from "lucide-react";
import InnerPageLayout from "../../components/InnerPageLayout";

const WHATSAPP_NUMBER = "905000000000";

const PAGE_DATA = {
  "hair-transplant": {
    title: "Saç Ekimi",
    breadcrumb: "Hair Transplant",
    summary: "Sağlık turizminin lokomotif alanı olan saç ekimi, teknik doğruluk ve süreç yönetimiyle güven odaklı planlanır.",
    sections: [
      {
        title: "Teknik Detaylar: Sapphire FUE vs DHI",
        body: "Sapphire FUE geniş alanlarda doğal dağılım için öne çıkarken, DHI sıklaştırma ve ön çizgi detayında yüksek kontrol sağlar.",
        items: ["Sapphire FUE: Kanal açma + greft yerleşimi", "DHI: Choi kalem ile doğrudan implant", "Karma protokol: İhtiyaca göre kombine yaklaşım"]
      },
      {
        title: "Süreç Takvimi",
        body: "Operasyon yolculuğu 3 günlük yapılandırılmış programla ilerler.",
        items: ["1. Gün: Karşılama ve Konsültasyon", "2. Gün: Operasyon Günü (6-8 saat)", "3. Gün: İlk Yıkama ve Eğitim"]
      },
      {
        title: "Greft Hesaplama: Kaç Greft İhtiyacınız Var?",
        body: "Norwood dökülme tipine göre ortalama greft planlaması yapılır.",
        items: ["Erken seviye: 1500-2200 greft", "Orta seviye: 2500-3500 greft", "İleri seviye: 3800+ greft"]
      },
      {
        title: "Paket İçeriği",
        body: "Operasyon sonrası bakım seti ve 1 yıl online takip dahildir.",
        items: ["İlaç ve medikal spreyleme seti", "Özel şampuan + boyun yastığı", "12 ay online takip ve kontrol"]
      }
    ]
  },
  "dental-aesthetics": {
    title: "Diş Estetiği",
    breadcrumb: "Dental Aesthetics",
    summary: "Görselliğin ön planda olduğu diş estetiği sayfasında dijital planlama, materyal kalitesi ve hız vurgulanır.",
    sections: [
      {
        title: "Gülüş Tasarımı (Hollywood Smile)",
        body: "Önce dijital tarama, sonra yüz oranına uygun tasarım ve kontrollü uygulama yapılır.",
        items: ["3D ağız içi tarama", "Dijital mock-up ve onay", "Planlı uygulama ve son rötuş"]
      },
      {
        title: "Materyal Kalitesi",
        body: "Uzun ömürlü sonuçlar için global markalar tercih edilir.",
        items: ["Straumann implant sistemleri", "Ivoclar estetik materyalleri", "Aşınma ve renk stabilitesi yüksek çözümler"]
      },
      {
        title: "İmplant Süreci",
        body: "Eksik dişlerde All-on-4 ve All-on-6 konseptleri kemik yapısına göre planlanır.",
        items: ["All-on-4: Hızlı sabit protez", "All-on-6: Daha yüksek dağılım desteği", "3D modelleme ile cerrahi rehberleme"]
      },
      {
        title: "Laboratuvar Vurgusu",
        body: "Kendi bünyemizdeki laboratuvar ile üretim süresi kısalır, revizyonlar aynı gün yönetilir.",
        items: ["Hızlı prova", "Renk ve form optimizasyonu", "Hız arayan hastalar için çevik süreç"]
      }
    ]
  },
  "plastic-surgery": {
    title: "Estetik Cerrahi",
    breadcrumb: "Plastic Surgery",
    summary: "Daha ciddi ve tıbbi otorite gerektiren estetik cerrahi süreçleri, hastane güvenliği ve simülasyon teknolojileriyle sunulur.",
    sections: [
      {
        title: "Popüler Operasyonlar",
        body: "Kişisel anatomiye göre en sık tercih edilen prosedürler planlanır.",
        items: ["Rinoplasti", "BBL", "Meme Estetiği", "Mommy Makeover"]
      },
      {
        title: "İyileşme Süreci",
        body: "Kaç gün Türkiye'de kalmanız gerektiği operasyon türüne göre belirlenir.",
        items: ["Rinoplasti: 7 gün", "Meme estetiği: 7-9 gün", "Mommy makeover: 10-14 gün"]
      },
      {
        title: "Ameliyathane Şartları",
        body: "Operasyonlar tam teşekküllü A+ hastane standardında gerçekleştirilir.",
        items: ["Yoğun bakım hazır altyapısı", "24 saat hemşirelik takibi", "Enfeksiyon kontrol protokolleri"]
      },
      {
        title: "3D Simülasyon",
        body: "Operasyon sonrası olası görünümü önceden inceleme imkânı sunulur.",
        items: ["Yüz simülasyonu", "Vücut oran analizi", "Hekimle ortak karar desteği"]
      }
    ]
  },
  "bariatric-surgery": {
    title: "Obezite Cerrahisi",
    breadcrumb: "Bariatric Surgery",
    summary: "Obezite cerrahisi sayfasında dönüşüm ve metabolik sağlık iyileşmesi odaklı bir yaklaşım sunulur.",
    sections: [
      {
        title: "Yöntemler: Mide Botoksu vs Tüp Mide",
        body: "Hasta profiline göre en uygun yöntemi belirlemek için checklist kullanılır.",
        items: ["Mide Botoksu: Cerrahisiz, kısa sürede günlük yaşama dönüş", "Tüp Mide: Yüksek BMI için kalıcı hacim azaltma", "Karar: BMI + yeme davranışı + metabolik risk"]
      },
      {
        title: "Multidisipliner Yaklaşım",
        body: "Süreç yalnızca cerrahtan ibaret değildir; diyetisyen ve psikolog desteği paket kapsamındadır.",
        items: ["Cerrah + dahiliye takibi", "Diyetisyen planı", "Psikolog destek görüşmeleri"]
      },
      {
        title: "Başarı Hikayeleri",
        body: "Kilo kaybı zaman çizelgesi ile süreç görünür hale getirilir.",
        items: ["1. ay: adaptasyon ve ilk kayıp", "3. ay: metabolik denge", "6-12. ay: sürdürülebilir sonuç"]
      }
    ]
  }
};

const SOCIAL_PROOF = [
  { source: "Trustpilot", text: "Ekibin planlama hızı ve ilgisi sayesinde süreç çok rahattı.", score: "4.9/5" },
  { source: "Google", text: "Doktor ve koordinasyon ekibi her aşamada şeffaf bilgi verdi.", score: "4.8/5" },
  { source: "Trustpilot", text: "Transfer, konaklama ve operasyon günü çok profesyoneldi.", score: "5.0/5" }
];

const FAQS = [
  "Tedavi öncesi hangi testler isteniyor?",
  "Operasyon sonrası ne kadar süre Türkiye'de kalmalıyım?",
  "İlaç ve bakım ürünleri pakete dahil mi?",
  "Kontrol süreçleri online yürütülebiliyor mu?",
  "Fiyat teklifi ne kadar sürede iletiliyor?"
];

const iconMap = {
  airport: Plane,
  transfer: CarTaxiFront,
  blood: Droplets,
  consultation: Stethoscope,
  freeTime: Clock3,
  washing: ShowerHead,
  aftercare: MessageCircleHeart,
  healing: Leaf,
  shedding: Ghost,
  growth: Sprout,
  improvement: Crown,
  result: Flag
};

const HAIR_TRANSPLANT_JOURNEY = [
  {
    day: "Day 1",
    steps: [
      {
        icon: "airport",
        title: "Arrival at the airport",
        description: "You are welcomed by our driver, complete your blood test at the clinic, and transfer to the hotel."
      },
      {
        icon: "transfer",
        title: "Transfer to the clinic",
        duration: "max 1 hour"
      },
      {
        icon: "blood",
        title: "Blood sampling",
        duration: "max 45 mins"
      }
    ]
  },
  {
    day: "Day 2",
    steps: [
      {
        icon: "consultation",
        title: "1st consultation",
        duration: "1 - 2 hours",
        description: "You meet your doctor, finalize the hairline design, and review your treatment plan."
      },
      {
        icon: "freeTime",
        title: "Free time in Istanbul",
        description: "After planning, enjoy the city and prepare for the procedure day."
      }
    ]
  },
  {
    day: "Day 3",
    steps: [
      {
        icon: "consultation",
        title: "2nd consultation",
        duration: "1 hour",
        description: "A final review is done to confirm a natural and realistic result."
      },
      {
        icon: "healing",
        title: "The procedure",
        duration: "5 - 7 hours",
        description: "The transplant is performed under local anesthesia and followed by transfer back to your hotel."
      }
    ]
  },
  {
    day: "Day 4",
    steps: [
      {
        icon: "washing",
        title: "Hair washing",
        duration: "1 hour"
      },
      {
        icon: "aftercare",
        title: "Advice on aftercare",
        duration: "1 hour",
        description: "Your grafts are checked and a detailed aftercare routine is explained."
      },
      {
        icon: "transfer",
        title: "Transfer to the airport",
        duration: "max 1 hour"
      }
    ]
  }
];

const RECOVERY_TIMELINE = [
  { icon: "healing", title: "After your hair transplant", period: "Day 1" },
  { icon: "washing", title: "Bandage removal & washing", period: "Day 2" },
  { icon: "consultation", title: "Initial healing", period: "3 - 10 Days" },
  { icon: "aftercare", title: "Share your photos with us", period: "Day 11" },
  { icon: "shedding", title: "Hair shedding", period: "2 - 4 Weeks" },
  { icon: "growth", title: "Dormancy (sleeping) period", period: "1 - 3 Months" },
  { icon: "growth", title: "Early growth", period: "3 - 6 Months" },
  { icon: "improvement", title: "Noticeable improvement", period: "6 - 10 Months" },
  { icon: "result", title: "Final results", period: "10 - 16 Months" }
];

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const page = useMemo(() => PAGE_DATA[slug] || PAGE_DATA["hair-transplant"], [slug]);

  return (
    <InnerPageLayout title={page.title} subtitle={page.summary}>
      <nav className="mb-6 text-xs text-[#1A1A1A]/60 sm:text-sm">
        <Link href="/">Home</Link> &gt; <Link href="/treatments">Treatments</Link> &gt; <span className="font-medium text-[#1A1A1A]">{page.breadcrumb}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          {page.sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FCFCFC] p-5">
              <h2 className="text-xl font-semibold text-[#1A1A1A]">{section.title}</h2>
              <p className="mt-2 text-sm text-[#1A1A1A]/75">{section.body}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1A1A1A]/85">
                {section.items.map((item) => (
                  <li key={item} className="rounded-xl bg-white px-3 py-2">• {item}</li>
                ))}
              </ul>
            </section>
          ))}

          {slug === "hair-transplant" && (
            <>
              <section className="space-y-6 rounded-3xl bg-[#f4f8fb] p-5 sm:p-8">
                <div className="space-y-3 text-center">
                  <h3 className="text-3xl font-bold text-[#121821] sm:text-4xl">Take a look at your 4-day hair transplant journey</h3>
                  <p className="mx-auto max-w-2xl text-sm text-[#405060] sm:text-base">
                    Below is the exact on-site flow from arrival to aftercare briefing, designed to keep your treatment smooth and predictable.
                  </p>
                </div>
                <div className="grid gap-5 xl:grid-cols-4">
                  {HAIR_TRANSPLANT_JOURNEY.map((column) => (
                    <article key={column.day} className="rounded-2xl border border-[#d5e4ef] bg-white p-4">
                      <p className="mb-3 text-center text-lg font-semibold text-[#334455]">{column.day}</p>
                      <div className="space-y-3">
                        {column.steps.map((step) => {
                          const StepIcon = iconMap[step.icon];
                          return (
                            <div key={step.title} className="rounded-2xl bg-[#d9edf8] p-4">
                              {step.duration && (
                                <p className="ml-auto mb-2 w-fit rounded-full bg-[#5ec7f6] px-3 py-1 text-xs font-semibold text-[#0e2433]">
                                  {step.duration}
                                </p>
                              )}
                              <div className="flex items-start gap-2">
                                <StepIcon size={20} className="mt-1 shrink-0 text-[#102230]" />
                                <div>
                                  <h4 className="text-xl font-semibold text-[#121821]">{step.title}</h4>
                                  {step.description && <p className="mt-2 text-sm text-[#4d5e6f]">{step.description}</p>}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-[36px] bg-gradient-to-r from-[#b7e7dc] to-[#7ac0ef] p-6 sm:p-10">
                <div className="mx-auto max-w-5xl space-y-8">
                  <div className="space-y-3 text-center">
                    <h3 className="text-3xl font-bold text-[#111827] sm:text-5xl">Hair Transplant Timeline: Day 1 to Final Results</h3>
                    <p className="mx-auto max-w-3xl text-[#223447]">
                      Hair transplant outcomes appear gradually. This timeline helps you track each phase from immediate care to long-term final growth.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {RECOVERY_TIMELINE.map((phase) => {
                      const PhaseIcon = iconMap[phase.icon];
                      return (
                        <article
                          key={phase.title}
                          className="rounded-2xl border border-[#0f172a]/15 bg-white/55 p-4 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.75)] backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-2">
                            <PhaseIcon size={18} className="text-[#0f172a]" />
                            <h4 className="text-2xl font-semibold text-[#0f172a]">{phase.title}</h4>
                          </div>
                          <p className="mt-2 text-sm font-medium text-[#334155]">{phase.period}</p>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </section>
            </>
          )}

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#1A1A1A]">Hasta Yorumları</h3>
            <div className="flex snap-x gap-4 overflow-x-auto pb-2">
              {SOCIAL_PROOF.map((item, idx) => (
                <article key={`${item.source}-${idx}`} className="min-w-[260px] snap-start rounded-2xl border border-[#1A1A1A]/10 bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-[#1A1A1A]/50">{item.source}</p>
                  <p className="mt-2 text-sm text-[#1A1A1A]/85">“{item.text}”</p>
                  <p className="mt-3 text-sm font-semibold text-emerald-700">Skor: {item.score}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-[#1A1A1A]">Sık Sorulan Sorular</h3>
            {FAQS.map((faq, idx) => (
              <details key={faq} className="rounded-xl border border-[#1A1A1A]/10 bg-white px-4 py-3">
                <summary className="cursor-pointer font-medium text-[#1A1A1A]">{idx + 1}. {faq}</summary>
                <p className="mt-2 text-sm text-[#1A1A1A]/75">Uzman koordinatörümüz medikal dosyanıza göre bu soruyu ön konsültasyonda detaylandırır.</p>
              </details>
            ))}
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-4 rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              WhatsApp Danışma
            </a>

            <div className="rounded-xl bg-[#F6F8FB] p-4">
              <h4 className="text-sm font-semibold text-[#1A1A1A]">Fiyat Teklifi Al</h4>
              <form className="mt-3 space-y-2">
                <input className="w-full rounded-lg border border-[#1A1A1A]/15 px-3 py-2 text-sm" placeholder="Ad Soyad" />
                <input className="w-full rounded-lg border border-[#1A1A1A]/15 px-3 py-2 text-sm" placeholder="Telefon" />
                <button type="button" className="w-full rounded-lg bg-[#1A1A1A] px-3 py-2 text-sm font-semibold text-white">Teklif Gönder</button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </InnerPageLayout>
  );
}
