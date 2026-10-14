const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

const routes = [
  "/",
  "/hizmetler",
  "/treatments",
  "/treatments/hair-transplant",
  "/treatments/dental-aesthetics",
  "/tedavi-sureci",
  "/iletisim",
  "/contact",
  "/kurumsal",
  "/why-turkey",
  "/vip-services",
  "/before-after",
  "/blog",
  "/newlife-blog",
  "/bilgi/ucretsiz-teklif-al",
  "/bilgi/doktorlarla-gorus",
  "/bilgi/agimiz",
  "/bilgi/saglik-hizmeti",
  "/bilgi/sonrasi-destek",
  "/bilgi/check-up"
];

export default function sitemap() {
  if (!SITE_URL) return [];
  const origin = SITE_URL.replace(/\/$/, "");
  return routes.map((path) => ({ url: `${origin}${path}`, changeFrequency: "weekly", priority: path === "/" ? 1 : 0.7 }));
}
