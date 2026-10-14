import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'Neden Türkiye?',
  description: 'Türkiye’nin sağlık turizmindeki uzmanlığını, tedavi seçeneklerini ve uluslararası hasta deneyimini keşfedin.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/why-turkey'
});

export default function RouteLayout({ children }) {
  return children;
}
