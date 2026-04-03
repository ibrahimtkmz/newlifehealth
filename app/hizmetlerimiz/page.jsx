import SiteLayout from "../components/SiteLayout";

const services = [
  {
    title: "Saç Ekimi",
    text: "FUE ve DHI teknikleriyle doğal yoğunluk hedefleyen kişiye özel saç ekimi planları."
  },
  {
    title: "Diş Estetiği",
    text: "Gülüş tasarımı, zirkonyum kaplama ve implant süreçlerinde kapsamlı danışmanlık."
  },
  {
    title: "Estetik Cerrahi",
    text: "Yüz ve vücut estetiğinde uzman hekimlerle güvenli operasyon organizasyonu."
  },
  {
    title: "VIP Transfer & Konaklama",
    text: "Havalimanı karşılama, otel planlaması ve şehir içi ulaşım hizmetleri."
  }
];

export const metadata = {
  title: "Hizmetlerimiz | New Life Health"
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="page-section">
        <div className="container">
          <p className="eyebrow">Hizmetlerimiz</p>
          <h1>Size Özel Sağlık Turizmi Paketleri</h1>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
