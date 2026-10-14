import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";
import { buildMetadata } from "./lib/seo";

export const metadata = buildMetadata({
  title: "NEWLIFE HEALTH | Türkiye Sağlık Turizmi",
  description: "NEWLIFE HEALTH, uluslararası hastalar için Türkiye'de güvenli, şeffaf ve çok dilli sağlık yolculuklarını koordine eder.",
  keywords: ["medical tourism Turkey", "health tourism Turkey", "hair transplant Turkey", "dental aesthetics Turkey", "plastic surgery Turkey", "international patient coordinator"],
  path: "/"
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
