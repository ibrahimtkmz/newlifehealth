import SiteLayout from "./components/SiteLayout";

const stats = [
  { value: "100+", label: "Partner" },
  { value: "5000+", label: "Başarılı Süreç" },
  { value: "7/24", label: "Operasyon Desteği" }
];

const trustLogos = ["MediCore", "GlobalCare", "Helix Group", "Nova Clinics", "Swiss Med", "Axis Health"];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div data-reveal>
            <p className="eyebrow">Kurumsal Dijital Platform</p>
            <h1>Küresel İş Ortaklığında Yeni Standart</h1>
            <p>
              New Life Health, acenteler için rezervasyondan operasyon takibine kadar tüm süreci tek merkezde yöneten
              profesyonel bir iş ortaklığı altyapısı sunar.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/acente">
                Acente Programına Katıl
              </a>
              <a className="btn btn-secondary" href="/hizmetlerimiz">
                Vaka Analizlerini İncele
              </a>
            </div>
          </div>

          <article className="glass-panel" data-reveal>
            <h2>İlk 3 Saniyede Güven Veren Altyapı</h2>
            <p>Uluslararası uyumlu operasyon modeli, şeffaf raporlama ve kurum odaklı süreç yönetimi.</p>
            <ul>
              <li>Kurumsal SLA standartları</li>
              <li>Gerçek zamanlı vaka güncellemeleri</li>
              <li>Yetkili ekipler ile uçtan uca iletişim</li>
            </ul>
          </article>
        </div>

        <div className="container stats-panel" data-reveal>
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="logo-strip" data-reveal>
        <div className="container">
          <p className="strip-title">Anlaşmalı Kurumlar & Sertifikalarımız</p>
          <div className="logo-slider">
            <div className="logo-track">
              {[...trustLogos, ...trustLogos].map((logo, index) => (
                <span key={`${logo}-${index}`}>{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
