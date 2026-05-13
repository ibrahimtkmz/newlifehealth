import InnerPageLayout from "../components/InnerPageLayout";

export default function IletisimPage() {
  return (
    <InnerPageLayout title="İletişim" subtitle="Tedavi planınız için uzman danışmanlarımızla hemen iletişime geçin.">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">Telefon</p>
          <p className="mt-2 text-base font-semibold">+90 546 524 8334</p>
        </div>
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">E-posta</p>
          <p className="mt-2 text-base font-semibold">info@newlifehealth.com</p>
        </div>
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">Konum</p>
          <p className="mt-2 text-base font-semibold">İstanbul, Türkiye</p>
        </div>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0C2E63]">Hızlı Destek Saatleri</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/75">Pazartesi - Cumartesi: 09:00 - 22:00</p>
          <p className="text-sm text-[#1A1A1A]/75">Pazar: 11:00 - 18:00</p>
        </div>
        <div className="rounded-3xl border border-[#3a0ca3]/20 bg-gradient-to-br from-[#f7f3ff] to-[#eef5ff] p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0C2E63]">Ücretsiz Ön Değerlendirme</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/75">Mesajınızla birlikte operasyon beklentinizi ve mevcut sağlık durumunuzu paylaştığınızda, danışmanlarımız 24 saat içinde size geri dönüş yapar.</p>
        </div>
      </section>
    </InnerPageLayout>
  );
}
