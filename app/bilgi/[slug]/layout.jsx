import { buildMetadata } from "../../lib/seo";
import { quickActionPageBySlug } from "../../data/quickActionContent";

export function generateMetadata({ params }) {
  const page = quickActionPageBySlug("tr", params.slug);
  if (!page) return buildMetadata({ title: "Sayfa bulunamadı", description: "Aradığınız NEWLIFE HEALTH sayfası bulunamadı.", path: `/bilgi/${params.slug}` });
  return buildMetadata({
    title: `${page.title}`,
    description: page.excerpt,
    keywords: ["sağlık turizmi", page.title, "Türkiye tedavi koordinasyonu"],
    path: `/bilgi/${params.slug}`
  });
}

export default function QuickActionLayout({ children }) {
  return children;
}
