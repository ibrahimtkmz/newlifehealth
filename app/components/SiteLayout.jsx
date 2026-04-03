import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsappMultiButton from "./WhatsappMultiButton";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Acente İş Ortaklığı", href: "/acente" },
  { label: "Hizmetler", href: "/hizmetlerimiz" },
  { label: "İletişim", href: "/iletisim" }
];

export default function SiteLayout({ children }) {
  return (
    <div className="site-wrapper">
      <ScrollReveal />
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo-wrap" aria-label="Ana sayfa">
            <Image src="/logo.png" width={50} height={50} alt="New Life Health logo" className="logo-image" priority />
            <div>
              <p className="logo-title">NEW LIFE HEALTH</p>
              <p className="logo-subtitle">GLOBAL PARTNER SOLUTIONS</p>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Ana menü">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lang-switch" aria-label="Dil seçimi">
            <button type="button" className="lang-pill active">
              <Globe size={14} /> TR
            </button>
            <button type="button" className="lang-pill">
              EN
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>New Life Health</h3>
            <p className="muted">Acenteler ve kurumlar için güven odaklı sağlık operasyon platformu.</p>
          </div>

          <div>
            <h4>Hızlı İletişim</h4>
            <ul className="contact-list">
              <li>
                <Phone size={16} /> +90 212 000 00 00
              </li>
              <li>
                <Mail size={16} /> partner@newlifehealth.com
              </li>
              <li>
                <MapPin size={16} /> İstanbul, Türkiye
              </li>
            </ul>
          </div>

          <div>
            <h4>Sosyal Medya</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsappMultiButton />
    </div>
  );
}
