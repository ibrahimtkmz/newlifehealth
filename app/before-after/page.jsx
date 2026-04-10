import InnerPageLayout from "../components/InnerPageLayout";

export default function BeforeAfterPage() {
  return (
    <InnerPageLayout
      title="Öncesi & Sonrası"
      subtitle="Tıbbi etik ve hasta gizliliği ilkelerine bağlı kalarak, tedavi kalitemizi örnek vaka yaklaşımı ile paylaşıyoruz."
    >
      <p className="text-sm leading-relaxed text-[#1A1A1A]/80">
        Öncesi ve sonrası değerlendirmeleri, gerçek hasta deneyimleri ve uzman görüşleriyle birlikte incelenir. Detaylı görsel sonuçlar,
        yalnızca aktif danışmanlık sürecindeki hastalarımıza özel olarak paylaşılır.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {["Saç Ekimi", "Diş Estetiği", "Plastik Cerrahi"].map((item) => (
          <div key={item} className="rounded-2xl border border-dashed border-[#1A1A1A]/20 bg-[#FBFBFB] p-6 text-center text-sm font-medium text-[#1A1A1A]/75">
            {item} Örnek İnceleme
          </div>
        ))}
      </div>
    </InnerPageLayout>
  );
}
