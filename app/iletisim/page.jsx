import { ContactFormCard, PartnerStats, PartnersBand, SiteFooter, SiteHeader } from "../components";

export default function ContactPage() {
  return (
    <div className="page-fade">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 px-4 pb-16 pt-10 md:px-6">
        <section className="glass-panel rounded-3xl p-8 md:p-10">
          <h1 className="font-display text-4xl text-[#0C2E63]">İletişim & İş Birliği</h1>
          <p className="mt-3 max-w-3xl text-sm text-[#1A1A1A]/75">Bireysel, acente ve kurumsal iş birliği taleplerinizi akıllı WhatsApp formu üzerinden iletebilirsiniz.</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactFormCard />
          <article className="glass-panel rounded-3xl p-8">
            <h2 className="font-display text-3xl text-[#0C2E63]">Ofis Bilgileri</h2>
            <ul className="mt-4 space-y-3 text-sm text-[#1A1A1A]/75">
              <li>İstanbul, Beşiktaş Merkez Ofis</li>
              <li>+90 500 000 00 00</li>
              <li>info@nlsaglikturizmi.com</li>
              <li>Operasyon Desteği: 7/24</li>
            </ul>
          </article>
        </section>

        <PartnerStats />
        <PartnersBand />
      </main>
      <SiteFooter />
    </div>
  );
}
