import { ContactFormCard, GlobalPartnerGrid, PartnerStats, PartnersBand, SiteFooter, SiteHeader } from "./components";

export default function HomePage() {
  return (
    <div className="page-fade">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-12 px-4 pb-16 pt-10 md:px-6">
        <section className="hero-card overflow-hidden rounded-[34px] p-8 md:p-12">
          <p className="inline-flex rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white">
            Agency Growth Ecosystem
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-white md:text-6xl">
            Acenteler için prestijli, güvenilir ve sonuç odaklı sağlık turizmi partnerliği.
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">Mevcut çok sayfalı yapıyı koruyan, profesyonel içerik ve yüksek dönüşüm odaklı deneyim.</p>
        </section>

        <PartnerStats />
        <GlobalPartnerGrid />

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="glass-panel rounded-3xl p-8">
            <h2 className="font-display text-3xl text-[#0C2E63]">Neden bizimle iş ortaklığı?</h2>
            <ul className="mt-4 space-y-3 text-sm text-[#1A1A1A]/75">
              <li>• Performans odaklı teklif ve hasta yönlendirme modeli</li>
              <li>• Çok dilli operasyon desteği ve raporlanabilir süreç yönetimi</li>
              <li>• Marka güvenini güçlendiren klinik kalite standardizasyonu</li>
            </ul>
          </article>
          <ContactFormCard />
        </section>

        <PartnersBand />
      </main>
      <SiteFooter />
    </div>
  );
}
