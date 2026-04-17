"use client";

import Image from "next/image";
import { Mail, ChevronDown, MessageCircle, Send, Quote } from "lucide-react";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  tr: {
    languageLabel: "Türkçe",
    topEmail: "info@newlifehealth.com",
    nav: ["Ana Sayfa", "Kurumsal", "Hizmetler", "Tedavi Süreci", "NEWLIFE Blog", "İletişim"],
    partnership: "Partnerlik",
    infoBanner:
      "🇪🇺 ↔ 🇹🇷 Tedavi hizmetlerimiz, yüksek kalite standartlarına uygun şekilde sağlık turizmi yetki belgesine sahip anlaşmalı sağlık kurumlarında sunulmaktadır.",
    serviceTabs: ["Doktorla Görüş", "Evde Bakım", "Uzman Tedaviler", "Laboratuvar Testleri", "İlaç & Malzeme", "Hastaneler & Klinikler", "Sağlık Hizmetleri", "Doktorla Görüş"],
    testimonialTag: "Yorumlar",
    testimonialTitle: "Uluslararası Hastalar Türkiye'deki Tıbbi Yolculukları Hakkında Ne Diyor?",
    testimonials: [
      {
        rating: 5,
        title: "Sıcak ve Güven Verici",
        text: "Tıbbi ekip son derece ilgili ve güler yüzlüydü. Sürecim baştan sona güvenli, konforlu ve çok iyi planlandı.",
        name: "Daria Boselli",
        country: "İtalya",
        image: "/10.jpeg"
      },
      {
        rating: 4,
        title: "Harika Bir Deneyim",
        text: "Akıllı lens operasyonu sonrası görüşüm çok netleşti. Ekip tüm aşamalarda detaylı bilgilendirme yaptı.",
        name: "Artem Kravchenko",
        country: "Ukrayna",
        image: "/9.jpeg"
      },
      {
        rating: 5,
        title: "Pürüzsüz Süreç",
        text: "Başlangıçtan iyileşme dönemine kadar her şey çok düzenliydi. Destek ekibi beklentimin üstündeydi.",
        name: "Katya Chernov",
        country: "Rusya",
        image: "/11.jpeg"
      }
    ],
    consultant: "Lina ile Sohbet",
    consultantSub: "Dijital Sağlık Danışmanı"
  },
  en: {
    languageLabel: "English",
    topEmail: "info@newlifehealth.com",
    nav: ["Home", "Corporate", "Services", "Treatment Process", "NEWLIFE Blog", "Contact"],
    partnership: "Partnership",
    infoBanner:
      "🇪🇺 ↔ 🇹🇷 Our treatment services are provided in contracted healthcare institutions that hold the required medical tourism authorization certificate, in line with high quality standards.",
    serviceTabs: ["Talk to Doctor", "Home Care", "Specialist Treatments", "Lab Testing", "Medications & Supplies", "Hospitals & Clinics", "Health Services", "Talk to a Doctor"],
    testimonialTag: "Testimonials",
    testimonialTitle: "What International Patients Say About Their Medical Journey in Turkey",
    testimonials: [
      {
        rating: 5,
        title: "Warm and Welcoming",
        text: "The medical team was incredibly welcoming and friendly. My journey felt safe, smooth, and very rewarding.",
        name: "Daria Boselli",
        country: "Italy",
        image: "/10.jpeg"
      },
      {
        rating: 4,
        title: "Total Eye Opener",
        text: "My smart lens surgery was the best decision I made. The team guided me clearly through each step.",
        name: "Artem Kravchenko",
        country: "Ukraine",
        image: "/9.jpeg"
      },
      {
        rating: 5,
        title: "Smooth Experience",
        text: "I had a very organized treatment process from start to finish, and the recovery support exceeded my expectations.",
        name: "Katya Chernov",
        country: "Russia",
        image: "/11.jpeg"
      }
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
        <div className="rounded-3xl border border-[#b7d9f4] bg-[#ecf7ff] p-6 text-center shadow-sm md:p-8">
          <p className="text-xl font-bold leading-snug text-[#1c6eb3] md:text-[42px]">{t.infoBanner}</p>
        </div>
      </section>

      <section className="mt-8 border-y border-[#ef8553] bg-[#ef7b3b]">
        <div className="mx-auto flex w-full max-w-[1280px] snap-x items-center gap-8 overflow-x-auto px-4 py-4 text-xl font-semibold text-white">
          {t.serviceTabs.map((tab) => (
            <span key={tab} className="relative shrink-0 whitespace-nowrap pr-8 after:absolute after:right-0 after:top-1/2 after:h-px after:w-6 after:-translate-y-1/2 after:bg-white/75 last:pr-0 last:after:hidden">
              {tab}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-14 pt-12">
        <div className="mb-8 flex flex-col items-center">
          <span className="rounded-full bg-[#198fd0] px-5 py-1.5 text-2xl font-semibold text-white">{t.testimonialTag}</span>
          <h1 className="mt-5 max-w-[1040px] text-center text-5xl font-bold leading-tight text-[#0f2f5d] md:text-6xl">{t.testimonialTitle}</h1>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.testimonials.map((card) => (
            <article key={card.name} className="rounded-3xl border border-[#dbe5f2] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-2xl tracking-wide text-[#f7bf1e]">{Array.from({ length: 5 }, (_, i) => (i < card.rating ? "★" : "☆")).join("")}</p>
                <Quote className="h-8 w-8 text-[#ef6a2f]" />
              </div>
              <h3 className="mb-3 text-4xl font-semibold leading-tight text-[#173b69]">{card.title}</h3>
              <p className="mb-6 text-[30px] leading-relaxed text-[#496281]">{card.text}</p>
              <div className="flex items-center gap-3">
                <Image src={card.image} alt={card.name} width={54} height={54} className="h-[54px] w-[54px] rounded-full object-cover" />
                <div>
                  <p className="text-4xl font-semibold leading-tight text-[#153761]">{card.name}</p>
                  <p className="text-[30px] text-[#4f6788]">{card.country}</p>
                </div>
              </div>
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
