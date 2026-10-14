const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
    ...(SITE_URL ? { sitemap: `${SITE_URL.replace(/\/$/, "")}/sitemap.xml` } : {})
  };
}
