import InnerPageLayout from "../components/InnerPageLayout";

const services = ["Saç Ekimi", "Diş Estetiği", "Plastik Cerrahi", "Obezite Cerrahisi", "Göz Tedavileri", "Check-Up Programları"];

export default function HizmetlerPage() {
  return (
    <InnerPageLayout title="Hizmetler" subtitle="İhtiyacınıza uygun tedavi planını, anlaşmalı sağlık kurumlarımız ve uzman ekiplerimiz ile birlikte uçtan uca organize ediyoruz.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service} className="rounded-2xl border border-[#1A1A1A]/10 bg-gradient-to-br from-white to-[#f7f3ff] p-5">
            <p className="text-base font-semibold text-[#1A1A1A]">{service}</p>
          </div>
        ))}
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["Ön Değerlendirme", "Sağlık geçmişi ve beklentiler analiz edilerek uygun tedavi yol haritası hazırlanır."],
          ["Uzman Planlama", "Anlaşmalı hekimlerle operasyon, konfor ve iyileşme planı kişiselleştirilir."],
          ["Süreç Takibi", "Tedavi sonrası kontrol ve uzaktan destekle süreç güvenli şekilde tamamlanır."]
        ].map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-[#0C2E63]">{title}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">{text}</p>
          </article>
        ))}
      </section>
    </InnerPageLayout>
  );
}
