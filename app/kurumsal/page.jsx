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
    </InnerPageLayout>
  );
}
