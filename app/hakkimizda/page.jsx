import { CorporateHighlights, PartnerStats, PartnersBand, SiteFooter, SiteHeader } from "../components";

export default function AboutPage() {
  return (
    <div className="page-fade">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1240px] flex-col gap-10 px-4 pb-16 pt-10 md:px-6">
        <section className="glass-panel rounded-3xl p-8 md:p-10">
          <h1 className="font-display text-4xl text-[#0C2E63]">Hakkımızda</h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#1A1A1A]/75">
            NL Sağlık Turizmi, acentelerin güvenli biçimde ölçeklenebilmesi için kurulmuş bir iş ortaklığı platformudur. Uçtan uca hasta deneyimi, şeffaf süreç takibi ve klinik kalite güvencesini tek çatı altında sunar.
          </p>
        </section>

        <CorporateHighlights />
        <PartnerStats />
        <PartnersBand />
      </main>
      <SiteFooter />
    </div>
  );
}
