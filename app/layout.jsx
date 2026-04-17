import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata = {
  title: "NEWLIFE HEALTH TOURISM",
  description: "NEWLIFE HEALTH TOURISM | International patient coordination for medical travel in Turkey."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
