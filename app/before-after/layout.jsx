import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'Öncesi ve Sonrası',
  description: 'Saç ekimi, diş estetiği ve estetik tedavilerde hasta mahremiyetini koruyan sonuç değerlendirme yaklaşımı.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/before-after'
});

export default function RouteLayout({ children }) {
  return children;
}
