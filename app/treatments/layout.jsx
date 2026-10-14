import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'Tedaviler',
  description: 'Türkiye’de uluslararası hastalar için planlanan saç ekimi, diş estetiği, estetik cerrahi ve obezite cerrahisi tedavileri.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/treatments'
});

export default function RouteLayout({ children }) {
  return children;
}
