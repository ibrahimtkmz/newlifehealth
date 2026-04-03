import "./globals.css";
import { FloatingWhatsApp } from "./components";

export const metadata = {
  title: "NL Sağlık Turizmi | Global Partnerlik",
  description: "Acenteler ve kurumsal iş ortakları için profesyonel sağlık turizmi iş birliği platformu.",
  keywords: ["sağlık turizmi", "acente iş birliği", "whatsapp form", "kurumsal partnerlik"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="app-bg font-sans text-[#1A1A1A]">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
