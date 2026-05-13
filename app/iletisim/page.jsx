import InnerPageLayout from "../components/InnerPageLayout";

export default function IletisimPage() {
  return (
    <InnerPageLayout title="İletişim" subtitle="Tedavi planınız için uzman danışmanlarımızla hemen iletişime geçin.">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">Telefon</p>
          <p className="mt-2 text-base font-semibold">+90 546 524 8334</p>
        </div>
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">E-posta</p>
          <p className="mt-2 text-base font-semibold">info@newlifehealth.com</p>
        </div>
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
          <p className="text-xs uppercase tracking-[0.12em] text-[#3a0ca3]">Konum</p>
          <p className="mt-2 text-base font-semibold">İstanbul, Türkiye</p>
        </div>
      </div>
    </InnerPageLayout>
  );
}
