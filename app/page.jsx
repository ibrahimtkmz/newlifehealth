import SiteLayout from "./components/SiteLayout";

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Uluslararası Sağlık Turizmi</p>
            <h1>Sağlığınız İçin Türkiye&apos;de Profesyonel Çözümler</h1>
            <p>
              New Life Health; planlama, transfer, klinik organizasyon ve ameliyat sonrası süreçlerde uçtan uca destek
              sunar.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/iletisim">
                Ücretsiz Ön Görüşme
              </a>
              <a className="btn btn-secondary" href="/hizmetlerimiz">
                Hizmetlerimizi İncele
              </a>
            </div>
          </div>

          <article className="info-card">
            <h2>Neden Bizi Tercih Etmelisiniz?</h2>
            <ul>
              <li>Deneyimli doktor ve klinik ağı</li>
              <li>Kişiye özel tedavi planı</li>
              <li>7/24 danışman desteği</li>
              <li>Şeffaf fiyatlandırma ve süreç yönetimi</li>
            </ul>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
