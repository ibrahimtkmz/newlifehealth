"use client";

import { useState } from "react";
import SiteLayout from "../components/SiteLayout";

const advantages = [
  { title: "Hızlı Rezervasyon", text: "72 saat içinde planlanan operasyon slotu ve öncelikli klinik eşleştirmesi." },
  { title: "Özel Komisyon Oranları", text: "Hacim bazlı komisyon modeli ile sürdürülebilir partner geliri." },
  { title: "7/24 Destek Ekibi", text: "Türkçe ve İngilizce operasyon ekibiyle kesintisiz iletişim." }
];

const timelineSteps = [
  {
    title: "Başvuru",
    text: "Dijital partner formunu doldurun, kurum profilinizi ve faaliyet belgelerinizi paylaşın."
  },
  {
    title: "Onay",
    text: "Uyumluluk ve kalite doğrulaması tamamlandıktan sonra sözleşme süreci başlatılır."
  },
  {
    title: "İlk İşlem",
    text: "İlk danışan dosyası için özel onboarding ekibiyle operasyon planı yapılır."
  },
  {
    title: "Ödeme",
    text: "Onaylanan süreç sonrası rapor destekli komisyon ödemesi güvenli şekilde tamamlanır."
  }
];

export default function AgencyPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <SiteLayout>
      <section className="page-section">
        <div className="container">
          <p className="eyebrow">Acente İş Ortaklığı</p>
          <h1>Partnerlik Avantajları</h1>
          <div className="adv-grid" data-reveal>
            {advantages.map((item) => (
              <article key={item.title} className="adv-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section timeline-section">
        <div className="container" data-reveal>
          <p className="eyebrow">Adım Adım Süreç</p>
          <h2>Acenteniz 4 Adımda Sisteme Dahil Olsun</h2>
          <div className="timeline-wrap">
            <div className="timeline-nav" role="tablist" aria-label="Partner süreç adımları">
              {timelineSteps.map((step, index) => (
                <button
                  type="button"
                  key={step.title}
                  className={`timeline-step ${activeStep === index ? "active" : ""}`}
                  onClick={() => setActiveStep(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step.title}
                </button>
              ))}
            </div>
            <article className="timeline-content">
              <h3>{timelineSteps[activeStep].title}</h3>
              <p>{timelineSteps[activeStep].text}</p>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
