const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

export const SEO_LANGUAGES = {
  tr: { locale: "tr_TR", label: "Türkçe" },
  en: { locale: "en_US", label: "English" },
  ru: { locale: "ru_RU", label: "Русский" },
  ar: { locale: "ar_SA", label: "العربية" }
};

export function buildMetadata({ title, description, keywords = [], path = "", image = "/logo.png" }) {
  const canonical = SITE_URL ? `${SITE_URL.replace(/\/$/, "")}${path || "/"}` : undefined;
  const imageUrl = SITE_URL ? `${SITE_URL.replace(/\/$/, "")}${image}` : image;

  return {
    title: { default: title, template: "%s | NEWLIFE HEALTH" },
    description,
    keywords,
    ...(canonical ? { metadataBase: new URL(SITE_URL), alternates: { canonical } } : {}),
    openGraph: {
      type: "website",
      siteName: "NEWLIFE HEALTH",
      title,
      description,
      ...(canonical ? { url: canonical } : {}),
      ...(SITE_URL ? { images: [{ url: imageUrl, width: 1200, height: 630, alt: "NEWLIFE HEALTH" }] } : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(SITE_URL ? { images: [imageUrl] } : {})
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
  };
}
