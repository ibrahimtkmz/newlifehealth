import "./globals.css";

export const metadata = {
  title: "New Life Health",
  description: "WhatsApp entegreli, çok sayfalı kurumsal sağlık turizmi web sitesi"
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
