"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Star, Plane, Hotel, Stethoscope, PlaneTakeoff, Sparkles, Smile, Activity, BadgeCheck } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  tr: {
    badge: "Uluslararası Sağlık Turizmi Danışmanlığı",
    heroTitle: "Türkiye'de premium tedavi, güvenli ve planlı sağlık yolculuğu.",
    heroDesc:
      "Akredite partner hastaneler, uzman doktorlar ve uçuş-konaklama dahil uçtan uca VIP organizasyon ile tedavinizi zahmetsizce planlıyoruz.",
    heroPrimary: "Ücretsiz Konsültasyon Al",
    heroSecondary: "Tedavi Paketlerini İncele",
    quickAccessTitle: "2 tıklamada ulaşın",
    quickAccess: [
      { title: "Tedavi Paketleri", desc: "Diş, estetik, obezite ve saç ekimi seçenekleri.", href: "/treatments" },
      { title: "Doktor Özgeçmişleri", desc: "Uzman hekim kadromuzun deneyim alanlarını inceleyin.", href: "#doctors" },
      { title: "Öncesi / Sonrası", desc: "Gerçek hasta dönüşümlerini karşılaştırın.", href: "/before-after" }
    ],
    trustTitle: "Neden NewLife Health Tourism?",
    trustItems: [
      "Akreditasyon odaklı partner klinik ağı",
      "50+ ülkeden hasta deneyimi",
      "7/24 çok dilli hasta koordinasyonu"
    ],
    servicesTitle: "Öne çıkan tedavi alanları",
    services: [
      { icon: Smile, title: "Diş Estetiği", desc: "Laminate veneer, zirkonyum, gülüş tasarımı ve implant planlaması." },
      { icon: Sparkles, title: "Estetik Cerrahi", desc: "Yüz ve vücut estetiğinde kişiye özel operasyon planları." },
      { icon: Activity, title: "Obezite Cerrahisi", desc: "Bariatrik süreçte multidisipliner değerlendirme ve uzun dönem takip." },
      { icon: BadgeCheck, title: "Saç Ekimi", desc: "Safir FUE ve DHI teknikleriyle doğal çizgi ve yüksek yoğunluk hedefi." }
    ],
    processTitle: "Nasıl Çalışıyoruz?",
    process: [
      { icon: Plane, title: "1. Uçuş Planı", text: "Ön değerlendirmenize göre size uygun tarih ve seyahat planını oluşturuyoruz." },
      { icon: Hotel, title: "2. Konaklama", text: "Tedaviye yakın, üst segment otellerde konforlu konaklama organize ediyoruz." },
      { icon: Stethoscope, title: "3. Tedavi", text: "Uzman doktor eşliğinde operasyon ve klinik süreçlerinizi yönetiyoruz." },
      { icon: PlaneTakeoff, title: "4. Dönüş & Takip", text: "Ülkenize dönüşünüzden sonra online kontrol ve bakım sürecini sürdürüyoruz." }
    ],
    doctorsTitle: "Uzman doktor kadrosu",
    doctorsDesc: "Her branşta tecrübeli, uluslararası hasta yönetiminde deneyimli hekimlerle çalışıyoruz.",
    doctors: ["Dr. M. Kaya · Saç Ekimi", "Op. Dr. A. Demir · Estetik Cerrahi", "Dt. E. Yalçın · Estetik Diş Hekimliği"],
    socialProofTitle: "Güven faktörleri",
    testimonials: [
      "“İlk görüşmeden dönüşe kadar her adım profesyoneldi.” — Leyla A.",
      "“Doktor ekibi ve koordinasyon süreci beklentimizin üzerindeydi.” — Thomas R.",
      "“Tedavi + konaklama paketi gerçekten premium hissettirdi.” — Nadia K."
    ],
    finalTitle: "Kişiye özel tedavi planınızı bugün başlatın",
    finalDesc: "Fotoğraflarınızı ve beklentinizi iletin, aynı gün içinde doktor ön değerlendirmesi ve fiyatlandırma alın.",
    finalButton: "Hemen WhatsApp'tan Yaz"
  },
  en: {
    badge: "International Health Tourism Concierge",
    heroTitle: "Premium treatment journeys in Turkey, designed around trust.",
    heroDesc:
      "We coordinate accredited partner hospitals, expert doctors, and end-to-end VIP logistics including flights and accommodation.",
    heroPrimary: "Get Free Consultation",
    heroSecondary: "View Treatment Packages",
    quickAccessTitle: "Reach in 2 clicks",
    quickAccess: [
      { title: "Treatment Packages", desc: "Dental, aesthetics, obesity and hair transplant options.", href: "/treatments" },
      { title: "Doctor Profiles", desc: "Review our specialist team and fields of expertise.", href: "#doctors" },
      { title: "Before / After", desc: "Compare real patient transformation cases.", href: "/before-after" }
    ],
    trustTitle: "Why NewLife Health Tourism?",
    trustItems: ["Accreditation-focused partner clinic network", "Patients from 50+ countries", "24/7 multilingual patient coordination"],
    servicesTitle: "Featured treatment areas",
    services: [
      { icon: Smile, title: "Dental Aesthetics", desc: "Laminate veneers, zirconium, smile design and implant planning." },
      { icon: Sparkles, title: "Aesthetic Surgery", desc: "Personalized facial and body operation planning." },
      { icon: Activity, title: "Obesity Surgery", desc: "Multidisciplinary bariatric assessment and long-term follow-up." },
      { icon: BadgeCheck, title: "Hair Transplant", desc: "Natural line and dense results with Sapphire FUE and DHI." }
    ],
    processTitle: "How We Work",
    process: [
      { icon: Plane, title: "1. Flight Planning", text: "We define optimal dates and route after your pre-evaluation." },
      { icon: Hotel, title: "2. Accommodation", text: "Comfort stays at premium hotels close to your clinic." },
      { icon: Stethoscope, title: "3. Treatment", text: "Your full operation and medical process is managed by specialists." },
      { icon: PlaneTakeoff, title: "4. Return & Follow-up", text: "We continue with online controls and aftercare after you return." }
    ],
    doctorsTitle: "Specialist doctor team",
    doctorsDesc: "Experienced physicians with strong international patient communication.",
    doctors: ["Dr. M. Kaya · Hair Transplant", "Op. Dr. A. Demir · Aesthetic Surgery", "Dr. E. Yalcin · Cosmetic Dentistry"],
    socialProofTitle: "Trust signals",
    testimonials: [
      "“From first call to return flight, every step felt premium.” — Leyla A.",
      "“Medical quality and coordination exceeded our expectations.” — Thomas R.",
      "“Treatment + accommodation package was seamless and secure.” — Nadia K."
    ],
    finalTitle: "Start your personalized treatment plan today",
    finalDesc: "Share your photos and expectations to receive same-day doctor pre-assessment and pricing.",
    finalButton: "Chat on WhatsApp"
  }
};

export default function HomePage() {
  const { lang } = useLanguage();
  const t = content[lang] || content.tr;

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#0f2747]">
      <SiteHeader />

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-14 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0f2747]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0f2747]/80">
            <ShieldCheck className="h-4 w-4 text-[#27b4b7]" /> {t.badge}
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">{t.heroTitle}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#0f2747]/75">{t.heroDesc}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[#0f2747] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#183a68]">
              {t.heroPrimary}
            </Link>
            <Link href="/treatments" className="rounded-full border border-[#0f2747]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0f2747] transition hover:border-[#27b4b7] hover:text-[#27b4b7]">
              {t.heroSecondary}
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(15,39,71,0.16)]">
          <Image src="/1.jpeg" alt="Premium sağlık turizmi deneyimi" width={980} height={900} className="h-full min-h-[360px] w-full rounded-[24px] object-cover" priority />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/92 p-4 backdrop-blur">
            <p className="text-sm font-semibold text-[#0f2747]">24 saat içinde ön değerlendirme</p>
            <p className="text-sm text-[#0f2747]/70">Doktor görüşü + tahmini plan + paket önerisi</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-5 text-xl font-semibold md:text-2xl">{t.quickAccessTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {t.quickAccess.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-3xl border border-[#0f2747]/12 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[#0f2747]/70">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <div className="rounded-[28px] bg-[#0f2747] p-8 text-white md:p-10">
          <h2 className="text-2xl font-semibold md:text-3xl">{t.trustTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.trustItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
                <Star className="mb-3 h-4 w-4 text-[#5bd4d7]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">{t.servicesTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {t.services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-3xl border border-[#0f2747]/12 bg-white p-6">
                <span className="mb-4 inline-flex rounded-xl bg-[#e9f8f8] p-2 text-[#178c8f]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-[#0f2747]/70">{service.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">{t.processTitle}</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {t.process.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-3xl border border-[#0f2747]/12 bg-white p-5">
                <Icon className="mb-3 h-5 w-5 text-[#27b4b7]" />
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[#0f2747]/70">{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="doctors" className="mx-auto w-full max-w-7xl px-6 pb-14">
        <div className="grid gap-5 rounded-[28px] border border-[#0f2747]/12 bg-white p-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">{t.doctorsTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#0f2747]/70">{t.doctorsDesc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {t.doctors.map((doctor) => (
                <li key={doctor} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#27b4b7]" />
                  {doctor}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl">
            <Image src="/2.jpeg" alt="Uzman doktor ekibi" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">{t.socialProofTitle}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {t.testimonials.map((item) => (
            <blockquote key={item} className="rounded-3xl border border-[#0f2747]/12 bg-white p-5 text-sm text-[#0f2747]/80">
              {item}
            </blockquote>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-gradient-to-r from-[#0f2747] to-[#1a3f73] p-8 text-white md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h3 className="text-2xl font-semibold">{t.finalTitle}</h3>
            <p className="mt-2 max-w-3xl text-sm text-white/85">{t.finalDesc}</p>
          </div>
          <Link href="https://wa.me/905000000000" className="mt-5 inline-flex rounded-full bg-[#27b4b7] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1f9ea1] md:mt-0">
            {t.finalButton}
          </Link>
        </div>
      </section>
    </main>
  );
}
