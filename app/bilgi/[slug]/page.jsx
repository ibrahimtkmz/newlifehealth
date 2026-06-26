import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { Building2, ClipboardCheck, HeartHandshake, HeartPulse, MessageCircleHeart, Stethoscope, UserRoundSearch } from "lucide-react";
import { quickActionPageBySlug, quickActionPages } from "../../data/quickActionContent";


const visualContent = {
  "ucretsiz-teklif-al": {
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    cards: ["Fotoğraf ve rapor analizi", "Şeffaf kapsam ve fiyat bilgisi", "Kişisel seyahat takvimi"]
  },
  "doktorlarla-gorus": {
    icon: UserRoundSearch,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
    cards: ["Uzman hekim ön değerlendirmesi", "Çok dilli görüşme koordinasyonu", "Gerçekçi beklenti yönetimi"]
  },
  agimiz: {
    icon: Building2,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
    cards: ["Yetkili kurum eşleştirme", "Transfer ve otel çözüm ortakları", "Tek merkezli operasyon akışı"]
  },
  "saglik-hizmeti": {
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    cards: ["Tedavi planı", "Tercüman ve randevu desteği", "Kontrol ve takip organizasyonu"]
  },
  "sonrasi-destek": {
    icon: MessageCircleHeart,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
    cards: ["Uzaktan fotoğraf takibi", "Bakım ve kontrol hatırlatmaları", "Hekimle iletişim köprüsü"]
  },
  "check-up": {
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
    cards: ["Risk profiline göre testler", "Zaman verimli randevu planı", "Anlaşılır rapor değerlendirmesi"]
  }
};

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
  const visual = visualContent[page.slug];
  const PageIcon = visual?.icon || HeartHandshake;

  return (
    <main className="min-h-screen bg-[#f5f8fd] text-[#1d3257]">
      <SiteHeader />
      <section className="mx-auto w-full max-w-[1080px] px-4 py-14 md:py-20">
        <Link href="/" className="mb-6 inline-flex rounded-full border border-[#bfd0e5] bg-white px-4 py-2 text-sm font-semibold text-[#173b69] transition hover:border-[#1f77d2] hover:text-[#1f77d2]">
          ← Ana sayfaya dön
        </Link>
        <article className="rounded-[2rem] border border-[#d7e3f0] bg-white p-6 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#198fd0] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                <PageIcon className="h-4 w-4" />
                NEWLIFE HEALTH
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-[#0f2f5d] md:text-6xl">{page.title}</h1>
              <p className="mt-5 max-w-[860px] text-lg leading-relaxed text-[#49627f] md:text-xl">{page.excerpt}</p>
            </div>
            {visual && (
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d7e3f0] shadow-sm">
                <Image src={visual.image} alt={page.title} width={620} height={420} className="h-[320px] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f2f5d]/80 to-transparent p-5 text-white">
                  <p className="text-sm font-semibold">Görsel destekli hizmet rehberi</p>
                </div>
              </div>
            )}
          </div>
          {visual && (
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {visual.cards.map((card) => (
                <div key={card} className="flex items-center gap-3 rounded-2xl border border-[#d7e3f0] bg-[#f7fbff] p-4 text-sm font-semibold text-[#173b69]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#198fd0] shadow-sm"><PageIcon className="h-5 w-5" /></span>
                  {card}
                </div>
              ))}
            </div>
          )}
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
