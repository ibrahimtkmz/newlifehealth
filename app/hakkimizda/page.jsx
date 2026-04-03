import SiteLayout from "../components/SiteLayout";

export const metadata = {
  title: "Hakkımızda | New Life Health"
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="page-section">
        <div className="container prose-block">
          <p className="eyebrow">Hakkımızda</p>
          <h1>Hasta Odaklı, Güvenilir ve Kurumsal Yaklaşım</h1>
          <p>
            New Life Health, Türkiye&apos;de sağlık hizmeti almak isteyen yerli ve yabancı danışanlara profesyonel
            koordinasyon sunar. Amacımız doğru tedaviye, doğru klinikte, doğru planlama ile güvenli bir şekilde ulaşmanızı
            sağlamaktır.
          </p>
          <p>
            Ekibimiz; operasyon öncesi bilgilendirme, şehir içi transfer, konaklama ve ameliyat sonrası takip dahil tüm
            süreçlerde sizinle birlikte ilerler.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
