import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'İletişim',
  description: 'Tedavi planınız, tarih uygunluğu ve Türkiye’de sağlık turizmi süreciniz için NEWLIFE HEALTH danışmanlarıyla iletişime geçin.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/iletisim'
});

export default function RouteLayout({ children }) {
  return children;
}
