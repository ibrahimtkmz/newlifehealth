import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'Tedavi Süreci',
  description: 'İlk danışmanlıktan tedavi, transfer, konaklama ve tedavi sonrası takibe kadar sağlık yolculuğunuzu planlayın.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/tedavi-sureci'
});

export default function RouteLayout({ children }) {
  return children;
}
