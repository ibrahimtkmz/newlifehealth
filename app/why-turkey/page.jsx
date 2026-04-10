import InnerPageLayout from "../components/InnerPageLayout";

const advantages = [
  {
    title: "Klinik kalite + hekim deneyimi",
    description:
      "Türkiye; JCI akreditasyonlu hastaneleri, ileri teknoloji altyapısı ve uluslararası hasta deneyimi yüksek uzman kadroları ile öne çıkar. Tedavi planı her hastanın tıbbi geçmişi ve beklentisine göre kişiselleştirilir."
  },
  {
    title: "Maliyet avantajı ve şeffaf paketleme",
    description:
      "Birçok ülkede yüksek maliyetli olan işlemler, Türkiye'de kaliteyi koruyarak daha erişilebilir bütçelerle sunulur. Ön değerlendirme sonrasında süreç, kapsam ve ücretler net şekilde paylaşılır."
  },
  {
    title: "Kısa bekleme süreleri",
    description:
      "Uzun randevu kuyrukları yerine hızlı planlama yapılır. Muayene, operasyon ve kontrol adımları doğru zamanlanarak hastanın ülkede geçireceği süre optimize edilir."
  },
  {
    title: "VIP hasta deneyimi",
    description:
      "Havalimanı transferi, konaklama, tercüman desteği ve hastane koordinasyonu tek elden yürütülür. Böylece hasta sadece tedavisine odaklanır; operasyonel detaylarla vakit kaybetmez."
  }
];

const processSteps = [
  {
    title: "1) Ön Değerlendirme ve Uygunluk Analizi",
    text: "Online konsültasyon ile medikal geçmişiniz, beklentileriniz ve mevcut tetkikleriniz doktor ekibi tarafından incelenir. Gerekli görülürse ek testler istenir ve size en güvenli tedavi yaklaşımı belirlenir."
  },
  {
    title: "2) Tedavi Planı ve Seyahat Programı",
    text: "Tedavi günü, operasyon süresi, kontrol randevuları, konaklama ve şehir içi transfer detayları net bir takvime bağlanır. Böylece Türkiye'ye gelişinizden dönüşünüze kadar sürecin tamamı öngörülebilir hale gelir."
  },
  {
    title: "3) Operasyon ve Hastane Süreci",
    text: "İşlem günü doktor ve hasta koordinatörü eşliğinde tüm adımlar güvenlik protokollerine uygun şekilde yürütülür. Gerekli durumlarda çok disiplinli ekiplerle birlikte çalışılarak klinik başarı oranı artırılır."
  },
  {
    title: "4) Kontrol, Eğitim ve Taburculuk",
    text: "İşlem sonrası bakım eğitimi detaylı olarak verilir; ilaç kullanımı, beslenme, hareket planı ve iyileşme takvimi hasta ile paylaşılır. Taburculuk kararı medikal kriterlere göre alınır."
  },
  {
    title: "5) Ülkeye Dönüş Sonrası Dijital Takip",
    text: "Hastalar ülkelerine döndükten sonra online kontrol randevuları ile takip edilir. İyileşme fotoğrafları, raporlar ve doktor değerlendirmeleri düzenli şekilde paylaşılır; böylece tedavi devamlılığı korunur."
  }
];

export default function WhyTurkeyPage() {
  return (
    <InnerPageLayout
      title="Neden Türkiye?"
      subtitle="Türkiye'yi neden tercih etmeliler? Sağlık turizminde kalite, hız, güven ve erişilebilir maliyeti bir araya getiren kapsamlı bir model sunuyoruz."
    >
      <div className="space-y-10 text-[#1A1A1A]/85">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Sağlık Turizminde Türkiye'nin Güçlü Konumu</h2>
          <p>
            Türkiye; Avrupa, Orta Doğu ve Balkanlar arasında stratejik konumu, güçlü ulaşım ağı ve gelişmiş sağlık altyapısı sayesinde
            uluslararası hastalar için en çok tercih edilen destinasyonlardan biridir. Estetik cerrahi, diş tedavileri, saç ekimi,
            obezite cerrahisi ve rekonstrüktif işlemler gibi birçok alanda yüksek hasta memnuniyeti sunar.
          </p>
          <p>
            Özellikle İstanbul, Ankara, İzmir ve Antalya gibi şehirlerde bulunan modern hastaneler; yüksek teknoloji ameliyathaneler,
            gelişmiş tanı merkezleri ve deneyimli sağlık profesyonelleri ile dünya standartlarında hizmet verir. Bu kombinasyon,
            Türkiye'yi yalnızca "uygun fiyat" seçeneği değil, aynı zamanda "yüksek değer" seçeneği haline getirir.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Türkiye'yi Tercih Etmenin 4 Temel Avantajı</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
                <h3 className="text-base font-semibold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#1A1A1A]/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Uçtan Uca Sağlık Turizmi Süreci Nasıl İşler?</h2>
          <div className="space-y-3">
            {processSteps.map((step) => (
              <article key={step.title} className="rounded-2xl bg-[#FBFBFB] p-4">
                <h3 className="text-sm font-semibold text-[#1A1A1A]">{step.title}</h3>
                <p className="mt-1 text-sm text-[#1A1A1A]/75">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">Hangi Hastalar İçin Uygun?</h2>
          <p>
            Yurt dışında yaşayıp güvenilir klinik arayan, tedavisini daha kısa sürede planlamak isteyen veya kalite/maliyet dengesini
            optimize etmek isteyen hastalar için Türkiye güçlü bir seçenektir. Ancak her işlem öncesinde tıbbi uygunluk değerlendirmesi
            zorunludur; nihai karar doktor muayenesi ve klinik bulgulara göre verilir.
          </p>
          <p>
            Bizim yaklaşımımız; hasta güvenliği, şeffaf bilgilendirme ve gerçekçi beklenti yönetimi üzerine kuruludur. Bu sayede yalnızca
            operasyon anına değil, operasyon sonrası iyileşme kalitesine de odaklanan sürdürülebilir bir sağlık turizmi deneyimi sunarız.
          </p>
        </section>
      </div>
    </InnerPageLayout>
  );
}
