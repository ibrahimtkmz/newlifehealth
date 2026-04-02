"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    whatsapp: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `New Lead:\nName: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nWhatsApp: ${form.whatsapp}`
    );

    window.open(`https://wa.me/905000000000?text=${message}`, "_blank");
  };

  return (
    <div
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPos({ x, y });
      }}
      className="relative min-h-screen overflow-hidden text-gray-900"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(99,102,241,0.25), transparent 40%),
                         radial-gradient(circle at ${100 - pos.x}% ${100 - pos.y}%, rgba(168,85,247,0.25), transparent 40%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100" />
      </div>

      <section className="px-6 py-28 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold">Get More International Patients — Without Risk</h1>
          <p className="mt-6 text-lg text-gray-600">
            We connect you with verified clinics and handle operations so you can scale your agency globally.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-black text-white px-6 py-3 rounded-2xl">
              Start Partnership
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="h-[400px] rounded-3xl bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5')] bg-cover bg-center shadow-2xl"></div>
        </motion.div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="h-[350px] rounded-3xl bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118')] bg-cover bg-center"></div>
        <div>
          <h2 className="text-3xl font-bold">About NewLifeHealth</h2>
          <p className="mt-4 text-gray-600">
            We are a medical tourism agency network connecting international partners with premium clinics in Turkey.
            Our system eliminates risk, improves patient satisfaction and helps agencies scale sustainably.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Popular Treatments</h2>
        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {[
            {
              title: "Hair Transplant",
              img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
            },
            {
              title: "Aesthetic Surgery",
              img: "https://images.unsplash.com/photo-1580281657527-47d6c82d1c7d"
            },
            {
              title: "Dental Treatments",
              img: "https://images.unsplash.com/photo-1588771930290-7dcd6c6f8c47"
            }
          ].map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg group">
              <div
                className="h-56 bg-cover bg-center group-hover:scale-105 transition"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="p-6 bg-white">
                <h3 className="font-semibold text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {[
              "High commission opportunities",
              "Reliable clinic network",
              "Fast patient coordination"
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl shadow bg-white">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 max-w-xl mx-auto">
        <div className="bg-white/90 p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-center">Start Getting Patients</h2>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input
              required
              placeholder="Full Name"
              className="border p-3 rounded-xl"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              placeholder="Company"
              className="border p-3 rounded-xl"
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <input
              required
              placeholder="Country"
              className="border p-3 rounded-xl"
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            />
            <input
              required
              placeholder="WhatsApp"
              className="border p-3 rounded-xl"
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            />
            <button className="bg-black text-white py-3 rounded-xl">Get Started</button>
          </form>
        </div>
      </section>

      <a href="#contact" className="fixed bottom-6 left-6 bg-black text-white px-6 py-3 rounded-full shadow">
        Get Clients
      </a>
      <a
        href="https://wa.me/905000000000"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow"
      >
        WhatsApp
      </a>

      <footer className="py-10 text-center text-gray-500">© {new Date().getFullYear()} NewLifeHealth</footer>
    </div>
  );
}
