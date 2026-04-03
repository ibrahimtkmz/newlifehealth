"use client";

import { useState } from "react";
import SiteLayout from "../components/SiteLayout";

const WHATSAPP_NUMBER = "905551110001";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    serviceType: "",
    documentName: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "document") {
      setForm((prev) => ({ ...prev, documentName: files?.[0]?.name || "" }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `Yeni Partner Formu:\nAd: ${form.fullname}\nTel: ${form.phone}\nHizmet: ${form.serviceType}\nBelge: ${form.documentName || "Yüklenmedi"}\nMesaj: ${form.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <SiteLayout>
      <section className="page-section">
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">İletişim & Başvuru</p>
            <h1>Acente Onboarding Formu</h1>
            <p>
              Başvuru, teknik destek veya genel bilgi taleplerinizi merkezi iletişim panelinden iletebilir; belgelerinizi
              güvenli şekilde paylaşabilirsiniz.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="fullname">Ad-Soyad</label>
            <input id="fullname" name="fullname" type="text" required value={form.fullname} onChange={handleChange} />

            <label htmlFor="phone">Telefon</label>
            <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />

            <label htmlFor="serviceType">Talep Türü</label>
            <select id="serviceType" name="serviceType" required value={form.serviceType} onChange={handleChange}>
              <option value="">Seçiniz</option>
              <option value="Acente Başvurusu">Acente Başvurusu</option>
              <option value="Teknik Destek">Teknik Destek</option>
              <option value="Genel Bilgi">Genel Bilgi</option>
            </select>

            <label htmlFor="document">Vergi Levhası / Yetki Belgesi (Simülasyon)</label>
            <input id="document" name="document" type="file" onChange={handleChange} />
            {form.documentName ? <small className="doc-note">Yüklenen dosya: {form.documentName}</small> : null}

            <label htmlFor="message">Mesaj</label>
            <textarea id="message" name="message" required value={form.message} onChange={handleChange} rows={5} />

            <button type="submit" className="btn btn-primary">
              WhatsApp ile Gönder
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
