import SiteLayout from "../components/SiteLayout";

const caseStudies = [
  {
    title: "Saç Ekimi Operasyon Yönetimi",
    summary: "Almanya merkezli partner acente için 120 danışanlık FUE + DHI proje akışı.",
    details: [
      "Ön değerlendirme süresi: 18 saat içinde hekim uygunluğu raporu",
      "Klinik kapasite planlama: haftalık 32 slot, otomatik rezervasyon dağılımı",
      "Ameliyat sonrası takip: 6 aylık dijital kontrol protokolü"
    ]
  },
  {
    title: "Komple Diş Rehabilitasyonu",
    summary: "İngiltere pazarındaki B2B kanal için implant ve gülüş tasarımı süreç standardizasyonu.",
    details: [
      "Teknik planlama: 3D görüntüleme ve laboratuvar entegrasyonu",
      "Süreç yönetimi: vaka başına ortalama 2 ziyaret modelinin optimize edilmesi",
      "Kalite güvencesi: vaka kapama sonrası NPS ve komplikasyon raporlaması"
    ]
  },
  {
    title: "Estetik Cerrahi Koordinasyonu",
    summary: "Körfez bölgesi acente ağında yüksek segment danışan yönetimi ve VIP deneyim tasarımı.",
    details: [
      "Operasyon öncesi risk sınıflandırma protokolü ve çoklu hekim konsültasyonu",
      "Konaklama + transfer + klinik zamanlaması için merkezi görev paneli",
      "Post-op dönem için 7/24 video görüşme destek hattı"
    ]
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
          <h1>Detaylı Vaka Analizleri ile Kanıtlanmış Operasyon Kalitesi</h1>
          <div className="case-list">
            {caseStudies.map((item) => (
              <article key={item.title} className="case-study" data-reveal>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
