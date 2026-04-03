import { PartnerStats, PartnersBand, SiteFooter, SiteHeader } from "../components";

const services = [
  {
    title: "Saç Ekimi Programları",
    text: "Hedef pazara uygun paketleme, operasyon planlaması ve hasta koordinasyonu.",
    notes: "Acenteler İçin Notlar: Dönüşüm oranını artırmak için pre-diagnosis formu ve görsel analiz raporu kullanılır."
  },
  {
    title: "Diş Estetiği & İmplant",
    text: "Marka itibarını yükselten dijital gülüş tasarımı ve kısa süreç yönetimi.",
    notes: "Süreç Akışı: Ön görüşme → Dijital plan → Uygulama → Kontrol & garanti bilgilendirmesi."
  },
  {
    title: "Plastik Cerrahi Operasyonları",
    text: "Klinik doğrulama, doktor eşleştirme ve operasyon sonrası takip güvencesi.",
    notes: "Acenteler İçin Notlar: Yüksek güven gerektiren vakalarda kişiselleştirilmiş danışman atanır."
  }
];

export default function ServicesPage() {
  return (
    <div className="page-fade">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 px-4 pb-16 pt-10 md:px-6">
        <section className="glass-panel rounded-3xl p-8 md:p-10">
          <h1 className="font-display text-4xl text-[#0C2E63]">Hizmetler</h1>
          <p className="mt-3 text-sm text-[#1A1A1A]/75">Her hizmet başlığında acente operasyonunu güçlendirecek detayları süreç odaklı sunuyoruz.</p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {services.map((item) => (
            <article key={item.title} className="glass-panel rounded-3xl p-6">
              <h2 className="font-display text-2xl text-[#0C2E63]">{item.title}</h2>
              <p className="mt-3 text-sm text-[#1A1A1A]/75">{item.text}</p>
              <p className="mt-4 rounded-xl border border-white/40 bg-white/35 p-3 text-xs font-semibold tracking-wide text-[#1A1A1A]/80">{item.notes}</p>
            </article>
          ))}
        </section>

        <PartnerStats />
        <PartnersBand />
      </main>
      <SiteFooter />
    </div>
  );
}
