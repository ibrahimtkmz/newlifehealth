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
    </InnerPageLayout>
  );
}
