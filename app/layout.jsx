import "./globals.css";

export const metadata = {
  title: "NL Sağlık Turizmi",
  description: "NL Sağlık Turizmi international health tourism agency website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
