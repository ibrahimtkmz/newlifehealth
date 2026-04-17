"use client";

import Image from "next/image";
import { Mail, ChevronDown, CalendarDays, Users, Building2, HeartPulse, BriefcaseBusiness, CircleDot, Stethoscope, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  tr: {
    languageLabel: "Türkçe",
    topEmail: "info@newlifehealth.com",
    nav: ["Ana Sayfa", "Kurumsal", "Hizmetler", "Tedavi Süreci", "NEWLIFE Blog", "İletişim"],
    partnership: "Partnerlik",
    shortcuts: [
      { icon: CalendarDays, title: "Ücretsiz Teklif Al", color: "bg-violet-600" },
      { icon: Users, title: "Doktorlarla Görüş", color: "bg-blue-600" },
      { icon: Building2, title: "Ağımız", color: "bg-fuchsia-600" },
      { icon: HeartPulse, title: "Sağlık Hizmetleri", color: "bg-sky-600" },
      { icon: BriefcaseBusiness, title: "Tedavi Sonrası Destek", color: "bg-indigo-600" },
      { icon: CircleDot, title: "Sağlık Check-Up", color: "bg-orange-500" }
    ],
    sectionTag: "NEWLIFE HEALTH",
    sectionTitle: "Türk Sağlık Turizminde Popüler Tedaviler",
    cards: [
      { image: "/1.jpeg", title: "Yüz & Boyun Germe" },
      { image: "/2.jpeg", title: "Liposuction" },
      { image: "/3.jpeg", title: "BBL" },
      { image: "/4.jpeg", title: "Hollywood Smile" },
      { image: "/5.jpeg", title: "Dental İmplant" },
      { image: "/6.jpeg", title: "Göz Lazer" },
      { image: "/7.jpeg", title: "Blefaroplasti" },
      { image: "/8.jpeg", title: "Saç Ekimi" }
    ],
    consultant: "Lina ile Sohbet",
    consultantSub: "Dijital Sağlık Danışmanı"
  },
  en: {
    languageLabel: "English",
    topEmail: "info@newlifehealth.com",
    nav: ["Home", "Corporate", "Services", "Treatment Process", "NEWLIFE Blog", "Contact"],
    partnership: "Partnership",
    shortcuts: [
      { icon: CalendarDays, title: "Get a Free Quote", color: "bg-violet-600" },
      { icon: Users, title: "Talk to Doctors", color: "bg-blue-600" },
      { icon: Building2, title: "Our Network", color: "bg-fuchsia-600" },
      { icon: HeartPulse, title: "Healthcare", color: "bg-sky-600" },
      { icon: BriefcaseBusiness, title: "Aftercare Help", color: "bg-indigo-600" },
      { icon: CircleDot, title: "Health Check-Up", color: "bg-orange-500" }
    ],
    sectionTag: "NEWLIFE HEALTH",
    sectionTitle: "Popular Treatments in Turkish Health Tourism",
    cards: [
      { image: "/1.jpeg", title: "Face & Neck Lift" },
      { image: "/2.jpeg", title: "Liposuction" },
      { image: "/3.jpeg", title: "Brazilian Butt Lift" },
      { image: "/4.jpeg", title: "Hollywood Smile" },
      { image: "/5.jpeg", title: "Dental Implants" },
      { image: "/6.jpeg", title: "Eye Laser" },
      { image: "/7.jpeg", title: "Blepharoplasty" },
      { image: "/8.jpeg", title: "Hair Transplant" }
    ],
    consultant: "Chat with Lina",
    consultantSub: "Digital Health Consultant"
  }
};

export default function HomePage() {
  const { lang } = useLanguage();
  const t = content[lang] || content.en;

  return (
    <main className="min-h-screen bg-[#f3f5f8] text-[#1d3257]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-3 text-sm text-[#26446e]">
          <p className="flex items-center gap-2 font-medium">
            <Mail className="h-4 w-4" />
            {t.topEmail}
          </p>
          <div className="flex items-center gap-2 font-semibold">
            <span>{t.languageLabel}</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Newlife Health logo" width={200} height={60} className="h-auto w-[180px] object-contain" priority />
          </div>

          <nav className="hidden items-center gap-8 text-[17px] font-semibold text-[#203a64] lg:flex">
            {t.nav.map((item, idx) => (
              <a key={item} href="#" className="inline-flex items-center gap-1 hover:text-[#1f77d2]">
                {item}
                {(idx === 1 || idx === 2 || idx === 3) && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
          </nav>

          <button className="rounded-full bg-[#2ca3e3] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1a8dd0]">{t.partnership}</button>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-4 pt-6">
        <div className="rounded-2xl border border-[#d8e0ed] bg-white p-6 shadow-sm md:p-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {t.shortcuts.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex flex-col items-center text-center">
                  <span className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full text-white ${item.color}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold leading-tight text-[#1f325a]">{item.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-14 pt-10">
        <div className="mb-8 flex flex-col items-center">
          <span className="rounded-full bg-[#198fd0] px-4 py-1.5 text-sm font-semibold text-white">{t.sectionTag}</span>
          <h1 className="mt-5 text-center text-4xl font-bold leading-tight text-[#0f2f5d] md:text-5xl">{t.sectionTitle}</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {t.cards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-[22px] bg-white shadow-sm">
              <div className="relative h-56">
                <Image src={card.image} alt={card.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102f5a33] via-transparent to-transparent" />
                <span className="absolute bottom-4 left-1/2 inline-flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[#2b6bb4] shadow-lg">
                  <Stethoscope className="h-6 w-6" />
                </span>
              </div>
              <h3 className="px-2 pb-4 pt-3 text-center text-lg font-semibold leading-tight text-[#1e355f]">{card.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full border border-[#dce4f2] bg-white px-4 py-2.5 shadow-xl md:flex">
        <Image src="/10.jpeg" alt="Consultant" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="text-xl font-semibold text-[#1b3e6b]">{t.consultant}</p>
          <p className="text-sm text-[#4f6588]">{t.consultantSub}</p>
        </div>
      </div>

      <div className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        <button className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#2f7ae5] text-white shadow-lg" aria-label="Telegram">
          <Send className="h-6 w-6" />
        </button>
        <button className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#6c53df] text-white shadow-lg" aria-label="Viber">
          <MessageCircle className="h-6 w-6" />
        </button>
        <button className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1cbf5d] text-white shadow-lg" aria-label="WhatsApp">
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </main>
  );
}
