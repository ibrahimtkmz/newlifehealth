import InnerPageLayout from "../components/InnerPageLayout";

const steps = [
  ["1. Ön Değerlendirme", "Hasta beklentileri, sağlık geçmişi ve uygun tedavi seçenekleri analiz edilir."],
  ["2. Doktor Planlaması", "Uzman doktor görüşü ile kişiye özel operasyon ve iyileşme planı hazırlanır."],
  ["3. Seyahat & Konaklama", "Uçuş, transfer ve otel detayları operasyon takvimiyle uyumlu şekilde düzenlenir."],
  ["4. Operasyon & Takip", "Tedavi sonrası kontroller ve uzaktan destekle süreç güvenle tamamlanır."]
];

export default function TedaviSureciPage() {
  return (
    <InnerPageLayout title="Tedavi Süreci" subtitle="İlk görüşmeden Türkiye dönüşünüze kadar tüm aşamaları net bir zaman planı ile yönetiyoruz.">
      <div className="space-y-4">
        {steps.map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#0C2E63]">{title}</h3>
            <p className="mt-1 text-sm text-[#1A1A1A]/75">{text}</p>
          </div>
        ))}
      </div>
    </InnerPageLayout>
  );
}
