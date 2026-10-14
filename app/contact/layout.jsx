import { buildMetadata } from "../lib/seo";

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Contact NEWLIFE HEALTH advisors for treatment planning, travel coordination and international patient support in Turkey.',
  keywords: ["sağlık turizmi", "medical tourism", "Turkey healthcare"],
  path: '/contact'
});

export default function RouteLayout({ children }) {
  return children;
}
