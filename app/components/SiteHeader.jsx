import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Neden Türkiye?", href: "/why-turkey" },
  { label: "Tedaviler", href: "/treatments" },
  { label: "VIP Hizmetler", href: "/vip-services" },
  { label: "Öncesi & Sonrası", href: "/before-after" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/contact" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:h-20 sm:flex-nowrap sm:px-6 sm:py-0">
        <Link href="/" className="relative z-10 flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#0C2E63]/15 bg-white sm:h-14 sm:w-14">
            <Image src="/logo.png" alt="NL Health Tourism logo" width={56} height={56} className="block h-full w-full object-contain p-1" priority />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold tracking-wide text-[#0C2E63] sm:text-lg">NL HEALTH TOURISM</p>
            <p className="truncate text-[0.55rem] uppercase leading-tight tracking-[0.14em] text-[#1A1A1A]/65 sm:text-[0.64rem] sm:tracking-[0.18em]">INTERNATIONAL HEALTH</p>
            <p className="truncate text-[0.55rem] uppercase leading-tight tracking-[0.18em] text-[#1A1A1A]/65 sm:text-[0.64rem] sm:tracking-[0.24em]">TOURISM AGENCY</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#D4AF37]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rich-gradient-button rounded-full px-4 py-2 text-[0.65rem] font-semibold tracking-[0.08em] text-white shadow-[0_14px_30px_rgba(58,12,163,0.35)] sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-[0.12em]"
        >
          ÜCRETSİZ TEKLİF AL
        </Link>
      </div>
    </header>
  );
}
