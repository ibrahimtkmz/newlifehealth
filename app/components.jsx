"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Handshake,
  Headset,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp
} from "lucide-react";

const pages = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#0C2E63]/15 bg-white">
            <Image src="/logo.png" alt="NL Sağlık Turizmi logosu" width={56} height={56} className="h-full w-full object-contain p-1" priority />
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-wide text-[#0C2E63]">NL SAĞLIK TURİZMİ</p>
            <p className="text-[0.62rem] uppercase tracking-[0.18em] text-[#1A1A1A]/65">Global Partner Platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {pages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "text-[#0C2E63]" : "text-[#1A1A1A]/80"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/iletisim" className="btn-gradient rounded-full px-5 py-2 text-xs font-semibold tracking-[0.11em] text-white">
            ÜCRETSİZ GÖRÜŞME
          </Link>
          <button className="hidden items-center gap-1 rounded-full border border-[#1A1A1A]/15 bg-white/75 px-4 py-2 text-xs font-semibold md:flex">
            TR <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}

export function PartnerStats() {
  const stats = [
    { value: "500+", label: "Mutlu Partner", icon: <Handshake size={18} /> },
    { value: "10+", label: "Yıllık Tecrübe", icon: <TrendingUp size={18} /> },
    { value: "%100", label: "Operasyonel Başarı", icon: <CheckCircle2 size={18} /> }
  ];

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <article key={item.label} className="glass-panel rounded-2xl p-5">
          <div className="mb-3 inline-flex rounded-xl border border-white/40 bg-white/30 p-2 text-[#0C2E63]">{item.icon}</div>
          <p className="font-display text-3xl font-semibold text-[#0C2E63]">{item.value}</p>
          <p className="text-sm text-[#1A1A1A]/70">{item.label}</p>
        </article>
      ))}
    </section>
  );
}

export function PartnersBand() {
  const logos = ["MediNova", "AsterCare", "BlueLife", "VitaGroup", "PrimeClinic", "GlobalHeal"];

  return (
    <section className="space-y-4 overflow-hidden rounded-3xl border border-white/40 bg-white/55 p-6">
      <h3 className="font-display text-2xl text-[#0C2E63]">Partnerlerimiz</h3>
      <div className="logo-track">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={`${logo}-${idx}`} className="logo-pill">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactFormCard() {
  const [form, setForm] = useState({ name: "", phone: "", message: "", type: "Bireysel" });

  const waUrl = useMemo(() => {
    const prefix =
      form.type === "Acente"
        ? "DİKKAT: Yeni Acente Başvuru Formu\n"
        : form.type === "Kurumsal İş Birliği"
          ? "DİKKAT: Yeni Kurumsal İş Birliği Talebi\n"
          : "";

    const text = `${prefix}Başvuru Türü: ${form.type}\nAd Soyad: ${form.name}\nTelefon: ${form.phone}\nMesaj: ${form.message}`;
    return `https://wa.me/905000000000?text=${encodeURIComponent(text)}`;
  }, [form]);

  return (
    <article className="glass-panel rounded-3xl p-6 md:p-8">
      <h2 className="font-display text-3xl font-semibold text-[#0C2E63]">Akıllı Başvuru Formu</h2>
      <p className="mt-2 text-sm text-[#1A1A1A]/75">7/24 ekip desteği ile WhatsApp üzerinden hızlı dönüş alırsınız.</p>

      <div className="mt-5 space-y-3">
        <input className="form-input" placeholder="Ad Soyad" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="form-input" placeholder="Telefon" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <select className="form-input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option>Bireysel</option>
          <option>Acente</option>
          <option>Kurumsal İş Birliği</option>
        </select>
        <textarea className="form-input min-h-28" placeholder="Talebinizi yazın" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>

      <a className="btn-gradient mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white" href={waUrl} target="_blank" rel="noreferrer">
        WhatsApp ile Gönder <ArrowUpRight size={16} />
      </a>
    </article>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/905000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
      aria-label="Hızlı Destek"
    >
      <MessageCircle size={18} /> Hızlı Destek
    </a>
  );
}

export function GlobalPartnerGrid() {
  const items = [
    { title: "Yüksek Operasyonel Kalite", text: "Standartlaştırılmış süreç, hızlı teklif ve şeffaf raporlama.", icon: <ShieldCheck size={20} /> },
    { title: "7/24 Uzman Destek", text: "Operasyon, satış ve hasta koordinasyon ekiplerinden kesintisiz iletişim.", icon: <Headset size={20} /> },
    { title: "Hızlı Sonuç", text: "Onay, planlama ve hasta yönlendirmesinde optimize edilmiş zaman yönetimi.", icon: <Rocket size={20} /> }
  ];

  return (
    <section>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6A5ACD]">Global Partnerlik Ağı</p>
        <h2 className="font-display text-4xl text-[#0C2E63]">Acenteler için güçlü büyüme altyapısı</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="glass-panel group rounded-3xl p-6">
            <div className="mb-4 inline-flex rounded-2xl border border-white/40 bg-white/35 p-3 text-[#0C2E63] transition group-hover:-translate-y-1">{item.icon}</div>
            <h3 className="font-display text-xl text-[#0C2E63]">{item.title}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/75">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/40 bg-white/60">
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-4 py-12 md:px-6 lg:grid-cols-3">
        <div>
          <h4 className="font-display text-2xl text-[#0C2E63]">NL Sağlık Turizmi</h4>
          <p className="mt-3 text-sm text-[#1A1A1A]/75">Acenteler ve kurumsal partnerler için sürdürülebilir sağlık turizmi iş birlikleri.</p>
        </div>
        <div className="text-sm text-[#1A1A1A]/75">
          <p>Nispetiye Cad. No:22, Beşiktaş / İstanbul</p>
          <p>WhatsApp: +90 500 000 00 00</p>
          <p>E-posta: info@nlsaglikturizmi.com</p>
        </div>
        <div className="space-y-2 text-sm">
          {pages.map((item) => (
            <Link key={item.href} href={item.href} className="block nav-link w-max">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function CorporateHighlights() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <article className="glass-panel rounded-3xl p-7">
        <h3 className="font-display text-2xl text-[#0C2E63]">Vizyonumuz</h3>
        <p className="mt-3 text-sm leading-7 text-[#1A1A1A]/75">
          Türkiye&apos;yi sağlık turizminde güven odaklı bir global partner merkezi haline getirirken, acentelere ölçeklenebilir büyüme ve güçlü marka itibarı sağlamak.
        </p>
      </article>
      <article className="glass-panel rounded-3xl p-7">
        <h3 className="font-display text-2xl text-[#0C2E63]">Kalite Sertifikalarımız</h3>
        <ul className="mt-3 space-y-2 text-sm text-[#1A1A1A]/75">
          <li className="flex items-center gap-2"><Target size={16} className="text-[#6A5ACD]" /> ISO 9001 Kalite Yönetim Standartları</li>
          <li className="flex items-center gap-2"><Globe2 size={16} className="text-[#6A5ACD]" /> TURSAB ve uluslararası uyum kriterleri</li>
          <li className="flex items-center gap-2"><Building2 size={16} className="text-[#6A5ACD]" /> Denetimli klinik ve partner ağ doğrulaması</li>
        </ul>
      </article>
    </section>
  );
}
