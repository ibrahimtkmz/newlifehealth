import InnerPageLayout from "../components/InnerPageLayout";

export default function KurumsalPage() {
  return (
    <InnerPageLayout
      title="Kurumsal"
      subtitle="NEWLIFE HEALTH TOURISM, uluslararası hastaların Türkiye'deki sağlık yolculuğunu güvenli, planlı ve şeffaf şekilde yöneten bir koordinasyon markasıdır."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["Vizyon", "Sağlık turizminde güvenilir ve sürdürülebilir hasta deneyimi standardı oluşturmak."],
          ["Misyon", "Doğru tedaviyi, doğru kurumda, doğru planlamayla hastaya ulaştırmak."],
          ["Değerler", "Şeffaflık, etik yaklaşım, hasta güvenliği ve kesintisiz iletişim."]
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0C2E63]">{title}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/75">{text}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-3xl border border-[#0C2E63]/10 bg-gradient-to-r from-[#f8f4ff] via-white to-[#eef5ff] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3a0ca3]">Kurumsal Yaklaşım</p>
        <h2 className="mt-3 text-2xl font-bold text-[#0C2E63] sm:text-3xl">Uluslararası hastalar için tek noktadan koordinasyon</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {["Klinik seçimi ve uzman eşleştirme", "Seyahat, transfer ve konaklama planlaması", "Tedavi sonrası kontrol ve dijital takip", "Çok dilli hasta danışmanlığı"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/90 p-4 text-sm text-[#1A1A1A]/80 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
