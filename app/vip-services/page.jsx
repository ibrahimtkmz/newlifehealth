import InnerPageLayout from "../components/InnerPageLayout";

export default function VipServicesPage() {
  return (
    <InnerPageLayout
      title="VIP Hizmetler"
      subtitle="Türkiye yolculuğunuzun her adımında konfor, hız ve kişisel destek sunan VIP hizmet modeli."
    >
      <ol className="space-y-4 text-sm text-[#1A1A1A]/80">
        <li className="rounded-2xl bg-[#FBFBFB] p-4"><strong>1. Ön Hazırlık:</strong> Online konsültasyon, dosya değerlendirmesi ve kişiye özel planlama.</li>
        <li className="rounded-2xl bg-[#FBFBFB] p-4"><strong>2. Ulaşım:</strong> Havalimanı karşılama, özel araç transferi ve check-in desteği.</li>
        <li className="rounded-2xl bg-[#FBFBFB] p-4"><strong>3. Operasyon Günü:</strong> Tercüman desteği, danışman eşliği ve hızlı koordinasyon.</li>
        <li className="rounded-2xl bg-[#FBFBFB] p-4"><strong>4. Konaklama:</strong> Tedavi sonrası dinlenme için konforlu otel seçenekleri.</li>
        <li className="rounded-2xl bg-[#FBFBFB] p-4"><strong>5. Takip:</strong> Ülkenize döndükten sonra da devam eden online kontrol ve danışmanlık.</li>
      </ol>
    </InnerPageLayout>
  );
}
