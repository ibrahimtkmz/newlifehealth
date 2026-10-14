import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'Hizmetler | Sağlık Turizmi Hizmetleri',
  description: 'Saç ekimi, diş estetiği, estetik cerrahi, obezite cerrahisi ve uluslararası hasta koordinasyonu hizmetlerini keşfedin.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/hizmetler'
});

export default function RouteLayout({ children }) {
  return children;
}
