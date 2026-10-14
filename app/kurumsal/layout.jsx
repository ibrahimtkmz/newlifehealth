import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'Kurumsal',
  description: 'NEWLIFE HEALTH, uluslararası hastaların Türkiye’deki sağlık yolculuğunu güvenli ve şeffaf şekilde koordine eder.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/kurumsal'
});

export default function RouteLayout({ children }) {
  return children;
}
