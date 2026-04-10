import SiteHeader from "./SiteHeader";

export default function InnerPageLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#1A1A1A]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1100px] px-4 py-10 sm:px-6 sm:py-14">
        <section className="hero-rgb-gradient rounded-3xl border border-white/30 p-6 text-white shadow-[0_24px_60px_rgba(26,26,26,0.2)] sm:p-10">
          <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-3xl text-sm text-white/90 sm:text-base">{subtitle}</p>
        </section>

        <section className="mt-8 rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 shadow-[0_18px_40px_rgba(26,26,26,0.06)] sm:p-8">
          {children}
        </section>
      </main>
    </div>
  );
}
