"use client";

import Link from "next/link";
import Image from "next/image";
import { Activity, Sparkles, Smile, Scissors, Scale, ShieldCheck, Star, Clock, CheckCircle2, Award, Users, ArrowRight, Heart } from "lucide-react";
import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CATEGORY_CARDS = [
  {
    slug: "hair-transplant",
    key: "hair",
    icon: Scissors,
    gradient: "from-slate-900 via-sky-900 to-cyan-600",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop"
  },
  {
    slug: "dental-aesthetics",
    key: "dental",
    icon: Smile,
    gradient: "from-slate-900 via-indigo-900 to-violet-600",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop"
  },
  {
    slug: "plastic-surgery",
    key: "plastic",
    icon: Sparkles,
    gradient: "from-slate-900 via-fuchsia-900 to-pink-600",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
  },
  {
    slug: "bariatric-surgery",
    key: "bariatric",
    icon: Activity,
    gradient: "from-slate-900 via-emerald-900 to-teal-600",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
  }
];

const CONTENT = {
  tr: {
    title: "Tedaviler",
    subtitle: "Uluslararasi Standartlarda Uzman Tedavi Cozumleri. Her alanda deneyimli doktor kadromuz ve modern altyapimizla hizmetinizdeyiz.",
    intro: "Tum medikal hizmetlerimizi tek bakista inceleyin, size en uygun tedavi alanina guvenle yonelin. Her tedavi, uzman ekiplerimiz tarafindan kisisellestirilmis planlarla uygulanmaktadir.",
    labels: {
      hair: "Sac Ekimi",
      dental: "Dis Estetigi",
      plastic: "Estetik Cerrahi",
      bariatric: "Obezite Cerrahisi"
    },
    descriptions: {
      hair: "Safir FUE ve DHI teknikleri ile dogal gorunumlu, kalici sonuclar. Agrısız islem, hizli iyilesme ve omur boyu takip garantisi.",
      dental: "Zirkonyum kaplamalar, implantlar ve Hollywood gulusu tasarimi. Dijital planlama ile mukemmel sonuclar, ayni gun implant imkani.",
      plastic: "Burun estetigi, yuz germe, meme estetigi ve vucut sekillendirme. Uzman cerrahlar ile guvenli islemler ve dogal sonuclar.",
      bariatric: "Mide botoksu, tup mide ve bypass ameliyatlari. Kalici kilo kontrolu, metabolik saglik iyilestirme ve yasam kalitesi artisi."
    },
    procedures: {
      hair: ["Safir FUE", "DHI Tekniği", "Bıyık/Sakal Ekimi", "Kaş Ekimi", "PRP Tedavisi"],
      dental: ["Zirkonyum Kaplama", "Implant", "Hollywood Smile", "Dis Beyazlatma", "Gulus Tasarimi"],
      plastic: ["Burun Estetigi", "Yuz Germe", "Goz Kapagi", "Meme Estetigi", "Liposuction"],
      bariatric: ["Tup Mide", "Mide Bypass", "Mide Balonu", "Mide Botoksu", "Revizyon Cerrahisi"]
    },
    stats: {
      hair: { duration: "6-8 saat", recovery: "3-7 gun", success: "%97", patients: "8,000+" },
      dental: { duration: "3-5 gun", recovery: "2-4 gun", success: "%98", patients: "5,500+" },
      plastic: { duration: "2-6 saat", recovery: "7-14 gun", success: "%95", patients: "3,200+" },
      bariatric: { duration: "30 dk - 2 saat", recovery: "5-10 gun", success: "%93", patients: "2,100+" }
    },
    duration: "Islem Suresi",
    recovery: "Iyilesme",
    success: "Basari Orani",
    patients: "Tedavi Edilen",
    detail: "Detayli Bilgi Al",
    includedTitle: "Dahil Olan Islemler",
    processTitle: "Tedavi Surecimiz",
    processSteps: [
      { title: "Online Konsultasyon", desc: "Uzman doktorlarimizla ucretsiz video gorusme" },
      { title: "Tedavi Plani", desc: "Kisisellestirilmis tedavi ve fiyat teklifi" },
      { title: "Seyahat Planlamasi", desc: "Ucus, transfer ve konaklama organizasyonu" },
      { title: "Tedavi", desc: "Profesyonel ekip esliginde tedavi uygulamasi" },
      { title: "Takip", desc: "Ulkenize dondukten sonra duzenli kontrol" }
    ],
    compareTitle: "Hizli Karsilastirma",
    compareHeaders: ["Tedavi", "Genel Avantaj", "Turkiye'de Kalis", "Fiyat Araligi"],
    compareRows: [
      ["Sac Ekimi", "Dogal yogunluk + minimal iz", "3-4 gun", "€1,500 - €3,000"],
      ["Dis Estetigi", "Hizli estetik donusum", "4-7 gun", "€2,000 - €8,000"],
      ["Estetik Cerrahi", "Kisiye ozel plan + hastane guvenligi", "7-10 gun", "€2,000 - €6,000"],
      ["Obezite Cerrahisi", "Metabolik saglikta kalici iyilesme", "5-7 gun", "€3,500 - €6,000"]
    ],
    certTitle: "Sertifika ve Yetki Belgeleri",
    certs: [
      { name: "JCI Akreditasyonu", desc: "Uluslararasi hasta guvenligi standartlari" },
      { name: "ISO 9001", desc: "Kalite yonetim sistemi sertifikasi" },
      { name: "TURSAB Yetki", desc: "Saglik turizmi operasyon belgesi" },
      { name: "Saglik Bakanligi", desc: "Uluslararasi hasta yetki belgesi" }
    ],
    whyUsTitle: "Neden Bizi Secmelisiniz?",
    whyUsItems: [
      { icon: Users, text: "15,000+ basarili tedavi deneyimi" },
      { icon: Award, text: "Uluslararasi sertifikali uzman doktorlar" },
      { icon: Heart, text: "%98 hasta memnuniyet orani" },
      { icon: Clock, text: "7/24 hasta destek hatti" },
      { icon: ShieldCheck, text: "Tedavi sonrasi omur boyu takip" },
      { icon: Star, text: "5 yildizli VIP hasta deneyimi" }
    ],
    ctaTitle: "Tedavinizi Planlayin",
    ctaText: "Ucretsiz online konsultasyon icin hemen iletisime gecin. Size ozel tedavi plani ve fiyat teklifi sunalim.",
    ctaButton: "Ucretsiz Konsultasyon"
  },
  en: {
    title: "Treatments",
    subtitle: "Expert Treatment Solutions at International Standards. Our experienced medical team and modern infrastructure are at your service.",
    intro: "Browse all our medical services at a glance and confidently choose the treatment area that suits you best. Each treatment is implemented with personalized plans by our expert teams.",
    labels: {
      hair: "Hair Transplant",
      dental: "Dental Aesthetics",
      plastic: "Plastic Surgery",
      bariatric: "Bariatric Surgery"
    },
    descriptions: {
      hair: "Natural-looking, permanent results with Sapphire FUE and DHI techniques. Painless procedure, fast recovery, and lifetime follow-up guarantee.",
      dental: "Zirconium veneers, implants and Hollywood smile design. Perfect results with digital planning, same-day implant option.",
      plastic: "Rhinoplasty, facelift, breast aesthetics and body contouring. Safe procedures with expert surgeons and natural results.",
      bariatric: "Gastric botox, sleeve gastrectomy and bypass surgeries. Permanent weight control, metabolic health improvement and quality of life enhancement."
    },
    procedures: {
      hair: ["Sapphire FUE", "DHI Technique", "Beard Transplant", "Eyebrow Transplant", "PRP Treatment"],
      dental: ["Zirconium Veneers", "Implants", "Hollywood Smile", "Teeth Whitening", "Smile Design"],
      plastic: ["Rhinoplasty", "Facelift", "Eyelid Surgery", "Breast Aesthetics", "Liposuction"],
      bariatric: ["Gastric Sleeve", "Gastric Bypass", "Gastric Balloon", "Gastric Botox", "Revision Surgery"]
    },
    stats: {
      hair: { duration: "6-8 hours", recovery: "3-7 days", success: "97%", patients: "8,000+" },
      dental: { duration: "3-5 days", recovery: "2-4 days", success: "98%", patients: "5,500+" },
      plastic: { duration: "2-6 hours", recovery: "7-14 days", success: "95%", patients: "3,200+" },
      bariatric: { duration: "30 min - 2 hrs", recovery: "5-10 days", success: "93%", patients: "2,100+" }
    },
    duration: "Duration",
    recovery: "Recovery",
    success: "Success Rate",
    patients: "Patients Treated",
    detail: "Get Details",
    includedTitle: "Included Procedures",
    processTitle: "Our Treatment Process",
    processSteps: [
      { title: "Online Consultation", desc: "Free video call with our expert doctors" },
      { title: "Treatment Plan", desc: "Personalized treatment and price quote" },
      { title: "Travel Planning", desc: "Flight, transfer and accommodation organization" },
      { title: "Treatment", desc: "Treatment implementation with professional team" },
      { title: "Follow-up", desc: "Regular check-ups after returning home" }
    ],
    compareTitle: "Quick Comparison",
    compareHeaders: ["Treatment", "Key Advantage", "Stay in Turkey", "Price Range"],
    compareRows: [
      ["Hair Transplant", "Natural density + minimal scarring", "3-4 days", "€1,500 - €3,000"],
      ["Dental Aesthetics", "Rapid aesthetic transformation", "4-7 days", "€2,000 - €8,000"],
      ["Plastic Surgery", "Personalized plan + hospital safety", "7-10 days", "€2,000 - €6,000"],
      ["Bariatric Surgery", "Lasting improvement in metabolic health", "5-7 days", "€3,500 - €6,000"]
    ],
    certTitle: "Certifications & Accreditations",
    certs: [
      { name: "JCI Accreditation", desc: "International patient safety standards" },
      { name: "ISO 9001", desc: "Quality management system certification" },
      { name: "TURSAB License", desc: "Health tourism operation certificate" },
      { name: "Ministry of Health", desc: "International patient authorization" }
    ],
    whyUsTitle: "Why Choose Us?",
    whyUsItems: [
      { icon: Users, text: "15,000+ successful treatment experiences" },
      { icon: Award, text: "Internationally certified expert doctors" },
      { icon: Heart, text: "98% patient satisfaction rate" },
      { icon: Clock, text: "24/7 patient support line" },
      { icon: ShieldCheck, text: "Lifetime post-treatment follow-up" },
      { icon: Star, text: "5-star VIP patient experience" }
    ],
    ctaTitle: "Plan Your Treatment",
    ctaText: "Contact us for a free online consultation. Let us provide you with a personalized treatment plan and price quote.",
    ctaButton: "Free Consultation"
  },
  ru: {
    title: "Lechenie",
    subtitle: "Ekspertnye resheniya po mezhdunarodnym standartam. Nasha opytnaya medicinskaya komanda i sovremennaya infrastruktura k vashim uslugam.",
    intro: "Oznakom'tes' so vsemi nashimi medicinskimI uslugami i uverenno vybiraite podkhodyashchee napravlenie lecheniya. Kazhdoe lechenie realizuetsya s personalizirovannymi planami nashikh ekspertov.",
    labels: {
      hair: "Peresadka volos",
      dental: "Estetika zubov",
      plastic: "Plasticheskaya khirurgiya",
      bariatric: "Bariatricheskaya khirurgiya"
    },
    descriptions: {
      hair: "Estestvennyj vid i stojkie rezul'taty s tekhnologiyami Sapphire FUE i DHI. Bezboleznenaya procedura, bystroe vosstanovlenie i pozhiznennoe nablyudenie.",
      dental: "Cirkonievye viniry, implanty i gollivudskaya ulybka. Ideal'nye rezul'taty s cifrovym planirovaniem, opciya implantov v tot zhe den'.",
      plastic: "Rinoplastika, podtyazhka lica, mammoplastika i konturirovanie tela. Bezopasnye procedury s ekspertnymi khirurgami i estestvennye rezul'taty.",
      bariatric: "Botoks zheludka, rukavnaya gastrektomiya i shuntirovanie. Postoyannyj kontrol' vesa, uluchshenie metabolicheskogo zdorov'ya i kachestva zhizni."
    },
    procedures: {
      hair: ["Sapphire FUE", "Tekhnika DHI", "Peresadka borody", "Peresadka brovej", "PRP terapiya"],
      dental: ["Cirkonievye viniry", "Implanty", "Gollivudskaya ulybka", "Otbelivanie zubov", "Dizajn ulybki"],
      plastic: ["Rinoplastika", "Podtyazhka lica", "Blefaroplastika", "Mammoplastika", "Liposaktsiya"],
      bariatric: ["Rukavnaya gastrektomiya", "Zheludochnoe shuntirovanie", "Zheludochnyj balon", "Botoks zheludka", "Revizionnaya khirurgiya"]
    },
    stats: {
      hair: { duration: "6-8 chasov", recovery: "3-7 dnej", success: "97%", patients: "8,000+" },
      dental: { duration: "3-5 dnej", recovery: "2-4 dnya", success: "98%", patients: "5,500+" },
      plastic: { duration: "2-6 chasov", recovery: "7-14 dnej", success: "95%", patients: "3,200+" },
      bariatric: { duration: "30 min - 2 ch", recovery: "5-10 dnej", success: "93%", patients: "2,100+" }
    },
    duration: "Dlitel'nost'",
    recovery: "Vosstanovlenie",
    success: "Uspeshnost'",
    patients: "Prolecheno pacientov",
    detail: "Podrobnee",
    includedTitle: "Vklyuchennye procedury",
    processTitle: "Nash process lecheniya",
    processSteps: [
      { title: "Onlajn konsul'taciya", desc: "Besplatnyj videozvonok s nashimi ekspertami" },
      { title: "Plan lecheniya", desc: "Personalizirovannyj plan i raschet stoimosti" },
      { title: "Planirovanie poezdki", desc: "Organizaciya pereleta, transfera i prozhivaniya" },
      { title: "Lechenie", desc: "Provedenie lecheniya professional'noj komandoj" },
      { title: "Nablyudenie", desc: "Regulyarnye osmo try posle vozvrashcheniya domoj" }
    ],
    compareTitle: "Bystroe sravnenie",
    compareHeaders: ["Lechenie", "Osnovnoe preimushchestvo", "Prebyvanie v Turcii", "Diapazon cen"],
    compareRows: [
      ["Peresadka volos", "Estestvennaya plotnost' + minimal'nye rubcy", "3-4 dnya", "€1,500 - €3,000"],
      ["Estetika zubov", "Bystraya esteticheskaya transformaciya", "4-7 dnej", "€2,000 - €8,000"],
      ["Plasticheskaya khirurgiya", "Individual'nyj plan + bezopasnost' kliniki", "7-10 dnej", "€2,000 - €6,000"],
      ["Bariatricheskaya khirurgiya", "Stojkoe uluchshenie metabolizma", "5-7 dnej", "€3,500 - €6,000"]
    ],
    certTitle: "Sertifikaty i akkreditacii",
    certs: [
      { name: "Akkreditaciya JCI", desc: "Mezhdunarodnye standarty bezopasnosti pacientov" },
      { name: "ISO 9001", desc: "Sertifikat sistemy menedzhmenta kachestva" },
      { name: "Licenziya TURSAB", desc: "Sertifikat na operacii medicinskogo turizma" },
      { name: "Minzdrav", desc: "Razreshenie na rabotu s inostrannymi pacientami" }
    ],
    whyUsTitle: "Pochemu vybirayut nas?",
    whyUsItems: [
      { icon: Users, text: "15,000+ uspeshnyh sluchaev lecheniya" },
      { icon: Award, text: "Mezhdunarodno sertificirovannye vrachi" },
      { icon: Heart, text: "98% udovletvorennost' pacientov" },
      { icon: Clock, text: "Liniya podderzhki pacientov 24/7" },
      { icon: ShieldCheck, text: "Pozhiznennoe posleoperacionnoe nablyudenie" },
      { icon: Star, text: "5-zvezdochnyj VIP opyt" }
    ],
    ctaTitle: "Splanirujte vashe lechenie",
    ctaText: "Svyazhites' s nami dlya besplatnoj onlajn konsul'tacii. Predostavim vam personalizirovannyj plan lecheniya i raschet stoimosti.",
    ctaButton: "Besplatnaya konsul'taciya"
  }
};

export default function TreatmentsHubPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-12">
        <p className="text-sm leading-relaxed text-[#1A1A1A]/80 sm:text-base">{t.intro}</p>

        {/* Treatment Cards */}
        <section className="grid gap-6 lg:grid-cols-2">
          {CATEGORY_CARDS.map((card) => {
            const Icon = card.icon;
            const stats = t.stats[card.key];
            const procedures = t.procedures[card.key];
            return (
              <article key={card.slug} className="overflow-hidden rounded-3xl border border-[#1A1A1A]/10 bg-white shadow-lg transition hover:shadow-xl">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={card.image} 
                    alt={t.labels[card.key]}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-between p-6">
                    <div>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">{t.labels[card.key]}</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-white">{stats.success}</p>
                      <p className="text-xs text-white/80">{t.success}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/75">{t.descriptions[card.key]}</p>

                  {/* Stats Grid */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-[#FBFBFB] p-3 text-center">
                      <p className="text-xs text-[#1A1A1A]/60">{t.duration}</p>
                      <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">{stats.duration}</p>
                    </div>
                    <div className="rounded-xl bg-[#FBFBFB] p-3 text-center">
                      <p className="text-xs text-[#1A1A1A]/60">{t.recovery}</p>
                      <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">{stats.recovery}</p>
                    </div>
                    <div className="rounded-xl bg-[#FBFBFB] p-3 text-center">
                      <p className="text-xs text-[#1A1A1A]/60">{t.patients}</p>
                      <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">{stats.patients}</p>
                    </div>
                  </div>

                  {/* Included Procedures */}
                  <div className="mt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">{t.includedTitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {procedures.map((proc) => (
                        <span key={proc} className="rounded-full bg-[#3a0ca3]/10 px-3 py-1 text-xs font-medium text-[#3a0ca3]">
                          {proc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href="/contact" 
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3a0ca3] to-[#f72585] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    {t.detail}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        {/* Treatment Process */}
        <section className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-[#f8961e]/5 p-6">
          <h3 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.processTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-5">
            {t.processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-[#1A1A1A]">{step.title}</h4>
                  <p className="mt-1 text-xs text-[#1A1A1A]/70">{step.desc}</p>
                </div>
                {index < t.processSteps.length - 1 && (
                  <div className="absolute right-0 top-5 hidden h-0.5 w-full bg-[#D4AF37]/30 sm:block" style={{ left: '50%' }} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6">
          <h3 className="mb-5 text-xl font-semibold text-[#1A1A1A]">{t.whyUsTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.whyUsItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-3 rounded-xl bg-[#FBFBFB] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#3a0ca3]/10 to-[#f72585]/10">
                    <Icon className="h-5 w-5 text-[#3a0ca3]" />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A1A]/80">{item.text}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Comparison Table */}
        <section>
          <h3 className="mb-4 text-xl font-semibold text-[#1A1A1A]">{t.compareTitle}</h3>
          <div className="overflow-x-auto rounded-2xl border border-[#1A1A1A]/10">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="bg-gradient-to-r from-[#3a0ca3]/5 to-[#f72585]/5">
                <tr>
                  {t.compareHeaders.map((header) => (
                    <th key={header} className="px-4 py-3 font-semibold text-[#1A1A1A]">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.compareRows.map((row) => (
                  <tr key={row[0]} className="border-t border-[#1A1A1A]/10 hover:bg-[#FBFBFB]">
                    <td className="px-4 py-3 font-medium text-[#1A1A1A]">{row[0]}</td>
                    <td className="px-4 py-3 text-[#1A1A1A]/80">{row[1]}</td>
                    <td className="px-4 py-3 text-[#1A1A1A]/80">{row[2]}</td>
                    <td className="px-4 py-3 font-semibold text-[#3a0ca3]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Certifications */}
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <div className="mb-5 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-700" />
            <h3 className="text-lg font-semibold text-emerald-900">{t.certTitle}</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.certs.map((cert) => (
              <div key={cert.name} className="rounded-xl bg-white p-4 shadow-sm">
                <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900">{cert.name}</h4>
                <p className="mt-1 text-xs text-emerald-700">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-[#3a0ca3] to-[#f72585] p-6 text-white sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">{t.ctaTitle}</h2>
              <p className="mt-2 text-white/85">{t.ctaText}</p>
            </div>
            <Link 
              href="/contact" 
              className="shrink-0 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#3a0ca3] transition hover:bg-white/90"
            >
              {t.ctaButton}
            </Link>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
