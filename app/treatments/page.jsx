import InnerPageLayout from "../components/InnerPageLayout";

const treatments = [
  {
    title: "Saç Ekimi",
    description: "Doğal saç çizgisi planlaması, safir FUE tekniği ve kişiye özel yoğunluk tasarımıyla yapılır."
  },
  {
    title: "Diş Estetiği",
    description: "Dijital gülüş tasarımı, implant ve estetik kaplama çözümleriyle fonksiyonel ve estetik sonuçlar hedeflenir."
  },
  {
    title: "Plastik Cerrahi",
    description: "Yüz ve vücut estetiğinde uzman cerrahlarla kapsamlı ön değerlendirme ve güvenli cerrahi süreç sağlanır."
  }
];

export default function TreatmentsPage() {
  return (
    <InnerPageLayout
      title="Tedaviler"
      subtitle="Her tedavi süreci, doktor değerlendirmesi ve kişisel beklentilerinize uygun şekilde özel olarak planlanır."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {treatments.map((item) => (
          <article key={item.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
            <h2 className="text-lg font-semibold text-[#1A1A1A]">{item.title}</h2>
            <p className="mt-2 text-sm text-[#1A1A1A]/75">{item.description}</p>
          </article>
        ))}
      </div>
    </InnerPageLayout>
  );
}
