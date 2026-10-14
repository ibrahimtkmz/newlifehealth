import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'Sağlık Turizmi Blogu',
  description: 'Tedavi planlaması, seyahat hazırlığı, saç ekimi, diş estetiği ve tedavi sonrası bakım hakkında güvenilir içerikler.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/blog'
});

export default function RouteLayout({ children }) {
  return children;
}
