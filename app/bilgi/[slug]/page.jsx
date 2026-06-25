import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { quickActionPageBySlug, quickActionPages } from "../../data/quickActionContent";

export function generateStaticParams() {
  return quickActionPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }) {
  const page = quickActionPageBySlug[params.slug];
  if (!page) return {};
  return {
    title: `${page.title} | NEWLIFE HEALTH TOURISM`,
    description: page.excerpt
  };
}

export default function QuickActionPage({ params }) {
  const page = quickActionPageBySlug[params.slug];
  if (!page) notFound();

  const paragraphs = page.content.split("\n\n");

  return (
    <main className="min-h-screen bg-[#f5f8fd] text-[#1d3257]">
      <SiteHeader />
      <section className="mx-auto w-full max-w-[1080px] px-4 py-14 md:py-20">
        <Link href="/" className="mb-6 inline-flex rounded-full border border-[#bfd0e5] bg-white px-4 py-2 text-sm font-semibold text-[#173b69] transition hover:border-[#1f77d2] hover:text-[#1f77d2]">
          ← Ana sayfaya dön
        </Link>
        <article className="rounded-[2rem] border border-[#d7e3f0] bg-white p-6 shadow-sm md:p-10">
          <span className="rounded-full bg-[#198fd0] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">NEWLIFE HEALTH</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-[#0f2f5d] md:text-6xl">{page.title}</h1>
          <p className="mt-5 max-w-[860px] text-lg leading-relaxed text-[#49627f] md:text-xl">{page.excerpt}</p>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#385778] md:text-lg md:leading-9">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-[#ecf7ff] p-5 text-center">
            <p className="text-lg font-bold text-[#173b69]">Detaylı bilgi ve kişisel planlama için bizimle iletişime geçin.</p>
            <a href="https://wa.me/905550501802" className="mt-4 inline-flex rounded-full bg-[#1cbf5d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17a34e]">
              WhatsApp: +90 555 050 18 02
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
