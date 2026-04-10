import InnerPageLayout from "../components/InnerPageLayout";

const posts = [
  { title: "Sağlık Turizmine Hazırlık Rehberi", excerpt: "Türkiye'ye gelmeden önce yapılması gereken temel hazırlıkları adım adım öğrenin." },
  { title: "Saç Ekimi Sonrası İlk 7 Gün", excerpt: "İyileşme dönemini daha rahat geçirmek için dikkat etmeniz gereken öneriler." },
  { title: "Dijital Gülüş Tasarımı Nedir?", excerpt: "Diş estetiğinde planlama sürecini hızlandıran modern yaklaşımın avantajları." }
];

export default function BlogPage() {
  return (
    <InnerPageLayout title="Blog" subtitle="Tedavi süreçleri, seyahat planlaması ve hasta deneyimi üzerine faydalı içerikler.">
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
            <h2 className="text-lg font-semibold text-[#1A1A1A]">{post.title}</h2>
            <p className="mt-2 text-sm text-[#1A1A1A]/75">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </InnerPageLayout>
  );
}
