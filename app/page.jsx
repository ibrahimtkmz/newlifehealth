"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  CalendarCheck2,
  ChevronDown,
  Clock3,
  HeartPulse,
  Hotel,
  Plane,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Smile,
  UserRound,
  Video
} from "lucide-react";

const navLinks = ["Why Turkey?", "Treatments", "VIP Services", "Before & After", "Blog", "Contact"];

const treatments = [
  {
    title: "HAIR TRANSPLANT",
    description: "Natural density design, sapphire FUE precision, and discreet VIP care.",
    icon: <Sparkles size={24} />
  },
  {
    title: "DENTAL AESTHETICS",
    description: "Premium smile makeovers with digital design and artist-level detail.",
    icon: <Smile size={24} />
  },
  {
    title: "PLASTIC SURGERY",
    description: "Tailored facial and body procedures led by board-certified specialists.",
    icon: <HeartPulse size={24} />
  }
];

const journey = [
  { title: "Free Consultation", icon: <CalendarCheck2 size={20} /> },
  { title: "VIP Flight & Transfer", icon: <Plane size={20} /> },
  { title: "Premium Clinic Procedure", icon: <Stethoscope size={20} /> },
  { title: "Luxury Recovery", icon: <Hotel size={20} /> },
  { title: "Aftercare", icon: <Clock3 size={20} /> }
];

const trustBadges = ["JCI", "Ministry of Health", "TURSAB", "ISO 9001", "HIPAA-Ready"];

export default function Home() {
  const [form, setForm] = useState({ name: "", phone: "", treatment: "" });

  return (
    <div className="bg-[#FBFBFB] text-[#1A1A1A] selection:bg-[#D4AF37] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#0C2E63]/15 bg-white">
              <Image src="/logo.png" alt="NL Sağlık Turizmi logosu" width={56} height={56} className="h-full w-full object-contain p-1" priority />
            </div>
            <div>
              <p className="text-lg font-bold tracking-wide text-[#0C2E63]">NL SAĞLIK TURİZMİ</p>
              <p className="text-[0.64rem] uppercase leading-tight tracking-[0.18em] text-[#1A1A1A]/65">
                INTERNATIONAL HEALTH
              </p>
              <p className="text-[0.64rem] uppercase leading-tight tracking-[0.24em] text-[#1A1A1A]/65">TOURISM AGENCY</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-[#D4AF37]">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="rounded-full bg-[#D4AF37] px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-white shadow-[0_10px_25px_rgba(212,175,55,0.35)] transition hover:brightness-95">
              GET FREE QUOTE
            </button>
            <button className="hidden items-center gap-2 rounded-full border border-[#1A1A1A]/15 bg-white/75 px-4 py-2 text-xs font-semibold md:flex">
              EN <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-24 px-6 pb-24 pt-12">
        <section className="relative overflow-hidden rounded-[36px] border border-white/70 bg-[linear-gradient(120deg,rgba(26,26,26,0.72),rgba(0,0,80,0.62)),url('https://images.unsplash.com/photo-1666214277657-e1ec34b9f739?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center p-10 shadow-[0_30px_70px_rgba(26,26,26,0.22)] lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                <ShieldCheck size={14} /> Trusted by Global Patients
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                TRANSFORM YOURSELF IN TURKEY. VIP MEDICAL JOURNEYS.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/85">
                World-Class Doctors. 5-Star Comfort. Affordable Luxury.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card ml-auto w-full max-w-md rounded-3xl p-7"
            >
              <h2 className="text-xl font-semibold text-white">Get Your Free VIP Plan</h2>
              <p className="mt-1 text-sm text-white/75">Dedicated advisor replies within minutes.</p>
              <div className="mt-5 space-y-3">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Name"
                  className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-white placeholder:text-white/65 outline-none ring-[#D4AF37]/60 transition focus:ring"
                />
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone"
                  className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-white placeholder:text-white/65 outline-none ring-[#D4AF37]/60 transition focus:ring"
                />
                <input
                  value={form.treatment}
                  onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                  placeholder="Treatment Type"
                  className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-white placeholder:text-white/65 outline-none ring-[#D4AF37]/60 transition focus:ring"
                />
              </div>
              <button className="mt-6 w-full rounded-xl bg-[#D4AF37] py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_15px_30px_rgba(212,175,55,0.35)] hover:brightness-95">
                REQUEST CONSULTATION
              </button>
            </motion.form>
          </div>
        </section>

        <section>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Signature Treatments</p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Precision Procedures, Elevated Care</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {treatments.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-[#1A1A1A]/10 bg-white p-7 shadow-[0_20px_40px_rgba(26,26,26,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(26,26,26,0.12)]"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-3 text-[#1A1A1A] transition group-hover:bg-[#D4AF37] group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-wide">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/70">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-7 rounded-[34px] border border-[#1A1A1A]/8 bg-white p-8 shadow-[0_20px_50px_rgba(26,26,26,0.06)] lg:grid-cols-5 lg:p-10">
          {journey.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl bg-[#FBFBFB] p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">Step {index + 1}</p>
              <div className="mb-4 inline-flex rounded-xl border border-[#1A1A1A]/10 bg-white p-2">{step.icon}</div>
              <h3 className="font-semibold">{step.title}</h3>
            </div>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-7 shadow-[0_18px_40px_rgba(26,26,26,0.06)]">
            <h3 className="text-2xl font-semibold">BEFORE & AFTER GALLERY</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">Swipe through real transformations from our international guests.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["before", "after", "result"].map((item) => (
                <div
                  key={item}
                  className="h-32 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1612276529731-4b21494e6d71?auto=format&fit=crop&w=500&q=80')"
                  }}
                />
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-7 shadow-[0_18px_40px_rgba(26,26,26,0.06)]">
            <h3 className="text-2xl font-semibold">PATIENT TESTIMONIAL VIDEOS</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">Authentic stories capturing confidence, recovery, and five-star service.</p>
            <div className="mt-6 flex h-44 items-center justify-center rounded-2xl border border-dashed border-[#1A1A1A]/20 bg-gradient-to-br from-[#1A1A1A]/5 to-[#000080]/10 text-[#1A1A1A]/75">
              <Video className="mr-2" /> Video Wall Placeholder
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(26,26,26,0.06)]">
          <h3 className="text-2xl font-semibold">Official Accreditations</h3>
          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {trustBadges.map((badge) => (
              <div key={badge} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-4 text-center text-sm font-semibold">
                <BadgeCheck className="mx-auto mb-2 text-[#D4AF37]" size={18} />
                {badge}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-8 shadow-[0_18px_40px_rgba(26,26,26,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Our Partner Clinics</p>
            <h3 className="mt-2 text-3xl font-semibold">Istanbul&apos;s Most Advanced Medical Spaces</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/70">
              From contemporary operating suites to elegant recovery lounges, each partner facility is selected for
              international standards and discreet hospitality.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((img) => (
                <div
                  key={img}
                  className="h-32 rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80')"
                  }}
                />
              ))}
            </div>
          </article>
          <aside className="rounded-3xl border border-[#1A1A1A]/10 bg-[#1A1A1A] p-8 text-white shadow-[0_25px_50px_rgba(26,26,26,0.35)]">
            <h3 className="text-2xl font-semibold">Why Turkey?</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/85">
              <li className="flex gap-3">
                <UserRound size={18} className="text-[#D4AF37]" />
                Elite surgeons with strong international case portfolios.
              </li>
              <li className="flex gap-3">
                <Building2 size={18} className="text-[#D4AF37]" />
                Premium private hospitals and multilingual patient teams.
              </li>
              <li className="flex gap-3">
                <ShieldCheck size={18} className="text-[#D4AF37]" />
                Transparent packages, secure processes, and full-trip support.
              </li>
            </ul>
          </aside>
        </section>
      </main>

      <footer className="border-t border-[#1A1A1A]/10 bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 py-14 lg:grid-cols-[1fr_1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">Stay Updated</p>
            <h4 className="mt-2 text-2xl font-semibold">Subscribe to Our Newsletter</h4>
            <div className="mt-4 flex max-w-md gap-2">
              <input placeholder="Your email" className="w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3" />
              <button className="rounded-xl bg-[#D4AF37] px-5 text-sm font-semibold text-white">Subscribe</button>
            </div>
          </div>

          <div className="space-y-2 text-sm text-[#1A1A1A]/75">
            <p className="font-semibold text-[#1A1A1A]">Istanbul Office</p>
            <p>Nispetiye Cad. No: 22, Besiktas, Istanbul, Turkey</p>
            <p>WhatsApp: +90 500 000 00 00</p>
            <p>Phone: +90 212 000 00 00</p>
            <p>Email: info@nlsaglikturizmi.com</p>
          </div>

          <div className="space-y-3 text-sm">
            <a className="block font-semibold hover:text-[#D4AF37]" href="#">
              Instagram
            </a>
            <a className="block font-semibold hover:text-[#D4AF37]" href="#">
              YouTube
            </a>
            <a className="block font-semibold hover:text-[#D4AF37]" href="#">
              LinkedIn
            </a>
            <div className="pt-4 text-xs text-[#1A1A1A]/60">
              <a href="#" className="mr-4 hover:text-[#D4AF37]">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#D4AF37]">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
