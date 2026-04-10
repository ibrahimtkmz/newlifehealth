import InnerPageLayout from "../components/InnerPageLayout";

export default function ContactPage() {
  return (
    <InnerPageLayout
      title="İletişim"
      subtitle="Tedavi planınız ve fiyat teklifi için bizimle hemen iletişime geçebilirsiniz."
    >
      <div className="grid gap-4 text-sm text-[#1A1A1A]/80 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#FBFBFB] p-5">
          <p className="font-semibold text-[#1A1A1A]">İstanbul Ofisi</p>
          <p className="mt-2">Nispetiye Cad. No: 22, Beşiktaş / İstanbul</p>
          <p className="mt-1">Telefon: +90 212 000 00 00</p>
          <p className="mt-1">WhatsApp: +90 500 000 00 00</p>
          <p className="mt-1">E-posta: info@nlsaglikturizmi.com</p>
        </div>
        <div className="rounded-2xl bg-[#FBFBFB] p-5">
          <p className="font-semibold text-[#1A1A1A]">Çalışma Saatleri</p>
          <p className="mt-2">Pazartesi - Cuma: 09:00 - 19:00</p>
          <p className="mt-1">Cumartesi: 10:00 - 16:00</p>
          <p className="mt-1">Pazar: Online danışmanlık</p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
