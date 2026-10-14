import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'NEWLIFE Blog | Sağlık Turizmi',
  description: 'Tedavi hazırlığı, süreç yönetimi ve operasyon sonrası bakım için NEWLIFE HEALTH içerikleri.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/newlife-blog'
});

export default function RouteLayout({ children }) {
  return children;
}
