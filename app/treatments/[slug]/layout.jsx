import { buildMetadata } from "../../lib/seo";

const TREATMENTS = {
  "hair-transplant": { title: "Saç Ekimi", description: "Türkiye’de Sapphire FUE ve DHI saç ekimi seçeneklerini kişisel planlama ve uluslararası hasta koordinasyonuyla keşfedin." },
  "dental-aesthetics": { title: "Diş Estetiği", description: "Türkiye’de dijital gülüş tasarımı, zirkonyum kaplama ve implant tedavileri için kişisel planlama alın." }
};

export function generateMetadata({ params }) {
  const treatment = TREATMENTS[params.slug];
  if (!treatment) return buildMetadata({ title: "Tedavi bulunamadı", description: "Aradığınız tedavi sayfası bulunamadı.", path: `/treatments/${params.slug}` });
  return buildMetadata({
    title: `${treatment.title}`,
    description: treatment.description,
    keywords: [treatment.title, "medical tourism Turkey", "international patient"],
    path: `/treatments/${params.slug}`
  });
}

export default function TreatmentLayout({ children }) {
  return children;
}
