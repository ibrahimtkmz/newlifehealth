import InnerPageLayout from "../components/InnerPageLayout";

const posts = [
  ["Saç Ekimi Sonrası İlk 10 Gün", "İyileşme döneminde dikkat edilmesi gereken temel bakım adımları."],
  ["Hollywood Smile Hakkında Bilmeniz Gerekenler", "Tedavi aşamaları, süreç süresi ve beklenti yönetimi rehberi."],
  ["Sağlık Turizmi İçin İstanbul Rehberi", "Tedavi planı ile şehir deneyimini birlikte optimize etmenin yolları."]
];

export default function NewlifeBlogPage() {
  return (
    <InnerPageLayout title="NEWLIFE Blog" subtitle="Tedavi hazırlığı, süreç yönetimi ve operasyon sonrası bakım için güncel içeriklerimizi keşfedin.">
      <div className="grid gap-4 sm:grid-cols-3">
        {posts.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3a0ca3]">BLOG</p>
            <h3 className="mt-2 text-lg font-semibold text-[#1A1A1A]">{title}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">{text}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-3xl border border-[#1A1A1A]/10 bg-gradient-to-r from-[#0C2E63] to-[#3a0ca3] p-6 text-white sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">Yeni İçerikler</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Sağlık turizmi rehberleri her hafta güncellenir</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/85">Operasyon öncesi hazırlık, İstanbul’da konforlu konaklama, beslenme önerileri ve sonrası bakım adımlarıyla ilgili pratik içerikleri düzenli olarak yayınlıyoruz.</p>
      </section>
    </InnerPageLayout>
  );
}
