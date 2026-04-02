import "./globals.css";

export const metadata = {
  title: "NewLifeHealth",
  description: "NewLifeHealth medical tourism partnership website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
