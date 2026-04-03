import "./globals.css";

export const metadata = {
  title: "New Life Health | Global Partner Solutions",
  description:
    "Acenteler ve kurumsal iş ortakları için WhatsApp entegreli, çok sayfalı profesyonel sağlık turizmi operasyon platformu.",
  keywords: ["sağlık turizmi", "acente iş ortaklığı", "global partnerlik", "whatsapp form", "kurumsal sağlık"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
