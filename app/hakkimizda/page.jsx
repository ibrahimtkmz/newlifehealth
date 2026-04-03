import SiteLayout from "../components/SiteLayout";

export const metadata = {
  title: "Hakkımızda | New Life Health"
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="page-section">
        <div className="container prose-block" data-reveal>
          <p className="eyebrow">Hakkımızda</p>
          <h1>Hasta Odaklı, Güvenilir ve Kurumsal Yaklaşım</h1>
          <p>
            New Life Health, Türkiye&apos;de sağlık hizmeti almak isteyen yerli ve yabancı danışanlara profesyonel
            koordinasyon sunar. Amacımız doğru tedaviye, doğru klinikte, doğru planlama ile güvenli bir şekilde
            ulaşmanızı sağlamaktır.
          </p>
          <p>
            Ekibimiz; operasyon öncesi bilgilendirme, şehir içi transfer, konaklama ve ameliyat sonrası takip dahil tüm
            süreçlerde sizinle birlikte ilerler.
          </p>
        </div>
      </section>

      <section className="page-section timeline-section">
        <div className="container about-grid" data-reveal>
          <article className="glass-panel">
            <p className="eyebrow">Vizyonumuz</p>
            <h2>Global ölçekte güvenilen iş ortağı olmak</h2>
            <p>
              Acenteler ve kurumsal paydaşlarla sürdürülebilir büyüme odaklı, yüksek kalite standartlarına dayanan bir
              sağlık turizmi ekosistemi kuruyoruz.
            </p>
            <ul>
              <li>Veri odaklı operasyon kararları</li>
              <li>Uzun dönemli partner memnuniyeti</li>
              <li>Uluslararası etik ve kalite ilkeleri</li>
            </ul>
          </article>

          <article className="glass-panel">
            <p className="eyebrow">Kalite Sertifikalarımız</p>
            <h2>Denetlenebilir ve standardize süreç altyapısı</h2>
            <ul>
              <li>ISO 9001 Kalite Yönetim Sistemi uyumlu operasyon yaklaşımı</li>
              <li>Hasta güvenliği ve veri gizliliği protokollerine tam uyum</li>
              <li>Düzenli iç denetim ve performans iyileştirme raporları</li>
            </ul>
          </article>
        </div>
      </section>
    </SiteLayout>
  );
}
