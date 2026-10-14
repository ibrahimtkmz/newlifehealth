import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'VIP Sağlık Turizmi Hizmetleri',
  description: 'Türkiye’de tedavi süreciniz için transfer, konaklama, tercümanlık ve kişisel hasta koordinasyonu.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/vip-services'
});

export default function RouteLayout({ children }) {
  return children;
}
