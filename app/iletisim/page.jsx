"use client";

import { useState } from "react";
import SiteLayout from "../components/SiteLayout";

const WHATSAPP_NUMBER = "905551112233";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const handleChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `Yeni Form Mesajı:\nAd: ${form.fullname}\nTel: ${form.phone}\nHizmet: ${form.serviceType}\nMesaj: ${form.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <SiteLayout>
      <section className="page-section">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">İletişim</p>
            <h1>WhatsApp Üzerinden Hızlı Teklif Alın</h1>
            <p>
              Formu doldurup gönderdiğinizde bilgileriniz otomatik olarak WhatsApp mesajına dönüştürülür ve doğrudan
              danışman ekibimize iletilir.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fullname">Ad-Soyad</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              value={form.fullname}
              onChange={handleChange}
              placeholder="Örn: Ahmet Yılmaz"
            />

            <label htmlFor="phone">Telefon</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Örn: +90 5XX XXX XX XX"
            />

            <label htmlFor="serviceType">Hizmet Türü</label>
            <select id="serviceType" name="serviceType" required value={form.serviceType} onChange={handleChange}>
              <option value="">Seçiniz</option>
              <option value="Saç Ekimi">Saç Ekimi</option>
              <option value="Diş Estetiği">Diş Estetiği</option>
              <option value="Estetik Cerrahi">Estetik Cerrahi</option>
              <option value="Diğer">Diğer</option>
            </select>

            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Talebinizi kısaca yazabilirsiniz..."
            />

            <button type="submit" className="btn btn-primary">
              Gönder
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
