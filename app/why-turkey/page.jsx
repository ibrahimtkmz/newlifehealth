import InnerPageLayout from "../components/InnerPageLayout";

export default function WhyTurkeyPage() {
  return (
    <InnerPageLayout
      title="Neden Türkiye?"
      subtitle="Türkiye, uluslararası sağlık turizminde kalite, hız ve uygun maliyeti bir araya getiren güçlü bir merkezdir."
    >
      <div className="space-y-6 text-[#1A1A1A]/80">
        <p>
          İstanbul merkezli anlaşmalı kliniklerimiz; modern cihaz altyapısı, deneyimli uzman kadroları ve hasta güvenliği odaklı süreçleri ile öne çıkar.
          Tedavi planı oluşturmadan önce detaylı değerlendirme yapılır ve size özel bir yol haritası hazırlanır.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="rounded-2xl bg-[#FBFBFB] p-4">Akredite hastaneler ve uluslararası hasta deneyimine sahip ekipler.</li>
          <li className="rounded-2xl bg-[#FBFBFB] p-4">Avrupa standartlarında kaliteye daha erişilebilir fiyatlarla ulaşım.</li>
          <li className="rounded-2xl bg-[#FBFBFB] p-4">Tedavi, konaklama ve transfer süreçlerinde uçtan uca koordinasyon.</li>
          <li className="rounded-2xl bg-[#FBFBFB] p-4">Ameliyat sonrası takip ve sürekli danışmanlık desteği.</li>
        </ul>
      </div>
    </InnerPageLayout>
  );
}
