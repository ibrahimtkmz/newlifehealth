import InnerPageLayout from "../components/InnerPageLayout";
import Link from "next/link";

const highlights = [
  {
    title: "Akreditasyon ve uzman hekimler",
    description:
      "Türkiye, JCI akreditasyonuna sahip çok sayıda hastanesi ve uluslararası deneyimi güçlü uzman kadrolarıyla güven veren bir tedavi ekosistemi sunar."
  },
  {
    title: "Erişilebilir ve rekabetçi maliyet",
    description:
      "Avrupa ve ABD ile kıyaslandığında, kaliteyi koruyan tedavilerde genellikle %50-%70 bandında maliyet avantajı sağlanır."
  },
  {
    title: "Hızlı randevu, kısa bekleme",
    description:
      "Uzun aylar beklemeden muayene, operasyon ve kontrol adımlarını planlayabilir; tedavinize daha hızlı başlayabilirsiniz."
  },
  {
    title: "Konforlu hasta yolculuğu",
    description:
      "THY ile kolay ulaşım, 5 yıldızlı konaklama, VIP transfer ve ana dilde tercüman desteğiyle süreç baştan sona konforlu ilerler."
  }
];

const treatmentComparison = [
  {
    treatment: "Diş İmplantı",
    ukUsPrice: "£1,500",
    turkeyPrice: "£450",
    savings: "%70"
  },
  {
    treatment: "Saç Ekimi",
    ukUsPrice: "$10,000",
    turkeyPrice: "$2,000",
    savings: "%80"
  },
  {
    treatment: "Mide Botoksu",
    ukUsPrice: "€4,000",
    turkeyPrice: "€1,200",
    savings: "%70"
  }
];

const stats = [
  "Dünyada JCI akreditasyonuna sahip hastane sayısında öne çıkan ülkeler arasında.",
  "Yıllık 1.5 milyondan fazla sağlık turisti Türkiye'yi tercih ediyor.",
  "Dünyanın en iyi havayolları arasında gösterilen THY ile 120+ ülkeden direkt uçuş imkânı."
];

const expertiseAreas = ["Diş Tedavileri", "Estetik Cerrahi", "Saç Ekimi", "Obezite Cerrahisi", "Ortopedi ve Rehabilitasyon"];

const cityExperiences = [
  {
    city: "İstanbul",
    description: "Ayasofya, Boğaz turları ve dünya mutfağı ile iyileşme dönemini kültürel bir deneyime dönüştürür."
  },
  {
    city: "Antalya",
    description: "Deniz, güneş ve premium oteller eşliğinde tedavi sonrası dinlenme için ideal bir atmosfer sunar."
  },
  {
    city: "İzmir",
    description: "Ege'nin sakin yaşam ritmi, sahil hattı ve kaliteli sağlık merkezleriyle dengeli bir süreç sağlar."
  }
];

export default function WhyTurkeyPage() {
  return (
    <InnerPageLayout
      title="Neden Türkiye?"
      subtitle="Yurt dışında yaşayan hastalar için Türkiye; tıbbi kalite, ileri teknoloji, hızlı erişim ve yüksek konforu tek bir sağlık yolculuğunda birleştirir."
    >
      <div className="space-y-10 text-[#1A1A1A]/85">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Sağlıkta Yükselen Küresel Merkez</h2>
          <p>
            Türkiye son yıllarda, uluslararası hasta kabulündeki tecrübesi, modern hastane yatırımları ve uzman hekim kadrolarıyla dünya çapında güçlü bir sağlık üssü haline geldi.
            Özellikle Avrupa, Orta Doğu ve Kuzey Amerika'dan gelen hastalar; hem klinik başarıyı hem de planlama kolaylığını aynı anda bulabiliyor.
          </p>
          <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
            <h3 className="text-base font-semibold text-[#1A1A1A]">Rakamlarla Türkiye</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#1A1A1A]/80">
              {stats.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Akreditasyon, Uzmanlık ve Klinik Güven</h2>
          <p>
            Türkiye'deki birçok hastane JCI standartlarına uygun süreç yönetimiyle hizmet verir. Hekimlerimiz uluslararası kongrelerde aktif rol alan,
            global hasta profiliyle çalışan ve multidisipliner yaklaşımı benimseyen ekiplerden oluşur.
          </p>
          <div className="rounded-2xl bg-[#FBFBFB] p-5">
            <h3 className="text-base font-semibold text-[#1A1A1A]">Öne Çıkan Uzmanlık Alanları</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {expertiseAreas.map((area) => (
                <span key={area} className="rounded-full border border-[#1A1A1A]/15 bg-white px-3 py-1 text-sm text-[#1A1A1A]/80">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Erişilebilir ve Rekabetçi Maliyet</h2>
          <p>
            Türkiye'nin en güçlü avantajlarından biri, yüksek kalite standardını korurken daha erişilebilir fiyatlar sunabilmesidir.
            Buradaki yaklaşım "ucuz hizmet" değil; aynı tıbbi değeri daha rekabetçi koşullarla sunan sürdürülebilir bir modeldir.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#1A1A1A]/10">
            <table className="min-w-full divide-y divide-[#1A1A1A]/10 text-left text-sm">
              <thead className="bg-[#F5F5F5] text-[#1A1A1A]">
                <tr>
                  <th className="px-4 py-3 font-semibold">Tedavi Türü</th>
                  <th className="px-4 py-3 font-semibold">İngiltere / ABD Fiyatı</th>
                  <th className="px-4 py-3 font-semibold">Türkiye Fiyatı (Ort.)</th>
                  <th className="px-4 py-3 font-semibold">Tasarruf Oranı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/10 bg-white">
                {treatmentComparison.map((item) => (
                  <tr key={item.treatment}>
                    <td className="px-4 py-3 font-medium text-[#1A1A1A]">{item.treatment}</td>
                    <td className="px-4 py-3">{item.ukUsPrice}</td>
                    <td className="px-4 py-3">{item.turkeyPrice}</td>
                    <td className="px-4 py-3 text-[#0E7A36] font-semibold">{item.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Teknoloji, Hız ve Konfor Bir Arada</h2>
          <p>
            Gelişmiş görüntüleme sistemleri, robotik/kapalı cerrahi altyapılar, modern operasyon odaları ve dijital hasta takip süreçleri sayesinde tedavi deneyimi hem güvenli hem de verimli hale gelir.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
                <h3 className="text-base font-semibold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#1A1A1A]/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Sadece Bir Tedavi Değil, Bir Deneyim</h2>
          <p>
            Türkiye'de sağlık yolculuğu, tatil konforuyla birleşir. Tedavi sürecinizi; kültürel keşif, doğa ve dinlenme fırsatlarıyla destekleyerek psikolojik olarak da daha iyi hissetmenizi hedefleriz.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {cityExperiences.map((item) => (
              <article key={item.city} className="rounded-2xl bg-[#FBFBFB] p-5">
                <h3 className="text-base font-semibold text-[#1A1A1A]">{item.city}</h3>
                <p className="mt-2 text-sm text-[#1A1A1A]/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-6 space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Güvenlik ve Uçtan Uca Destek</h2>
          <p>
            İlk danışmanlıktan Türkiye'ye varışınıza, tedavi gününden ülkenize döndükten sonraki kontrol süreçlerine kadar her adımda yanınızdayız.
            Amacımız yalnızca başarılı bir operasyon değil, size kendinizi güvende hissettiren bütünsel bir iyileşme deneyimi sunmak.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#333333]"
            >
              Ücretsiz Konsültasyon Alın
            </Link>
            <Link
              href="/before-after"
              className="rounded-full border border-[#1A1A1A]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#F5F5F5]"
            >
              Öncesi / Sonrası Galerisi
            </Link>
          </div>
          <p className="text-sm text-[#1A1A1A]/70">
            Gerçek hasta deneyimlerini görmek için galeri ve yorumlar bölümümüzü inceleyebilir, size özel yol haritasını hemen oluşturabilirsiniz.
          </p>
        </section>
      </div>
    </InnerPageLayout>
  );
}
