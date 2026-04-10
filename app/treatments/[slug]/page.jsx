"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
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
