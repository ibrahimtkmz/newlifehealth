"use client";

import { useMemo } from "react";
import { useLanguage } from "../components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, ShieldCheck, Stethoscope, TimerReset, WalletCards, MapPin, Award, Users, Plane, Building2, Heart, Globe, CheckCircle2, Star } from "lucide-react";
import InnerPageLayout from "../components/InnerPageLayout";

const CONTENT = {
  tr: {
    title: "Neden Turkiye?",
    subtitle: "Turkiye, saglik turizminde kalite, hiz ve konforu tek bir yolculukta birlestiren guclu bir merkezdir.",
    heroStats: [
      { value: "2M+", label: "Yillik Uluslararasi Hasta" },
      { value: "Top 5", label: "Dunya Saglik Turizmi" },
      { value: "750+", label: "JCI Akrediteli Hastane" },
      { value: "%70", label: "Maliyet Tasarrufu" }
    ],
    introTitle: "Saglik Turizminde Dunya Lideri",
    introText: "Turkiye, yillik 2 milyondan fazla uluslararasi hasta ile dunyanin en tercih edilen saglik turizmi destinasyonlarindan biri haline gelmistir. Modern hastane altyapisi, deneyimli doktor kadrosu ve rekabetci fiyatlar ile hastalar icin ideal bir secim sunmaktadir.",
    sectionTitle: "Neden Turkiye'yi Seciyorlar?",
    sectionDescription: "Asagidaki veriler, uluslararasi hastalarin Turkiye'yi tercih etmesindeki temel nedenleri gorsel olarak ozetler.",
    metrics: [
      { label: "Maliyet avantaji", value: 70, icon: WalletCards, note: "Bircok tedavide %50-%70 daha erisilebilir ucretler" },
      { label: "Hizli planlama", value: 85, icon: TimerReset, note: "Uzun bekleme listeleri olmadan kisa surede islem" },
      { label: "Klinik guven", value: 90, icon: ShieldCheck, note: "Uluslararasi standartlara uygun hastane ve ekipler" }
    ],
    advantagesTitle: "Turkiye'nin Avantajlari",
    advantages: [
      {
        icon: Award,
        title: "Uzmanlik & Teknoloji",
        text: "Dis, estetik, sac ekimi, obezite ve ortopedi gibi alanlarda deneyimli hekimler ve modern tibbi altyapi. JCI ve ISO sertifikali hastaneler."
      },
      {
        icon: Plane,
        title: "Kolay Ulasim",
        text: "120+ ulkeden direkt ucus imkani. Istanbul Havalimani dunyanin en buyuk transit merkezlerinden biri olarak kolay erisim saglar."
      },
      {
        icon: Heart,
        title: "Konforlu Surec",
        text: "VIP transfer, konaklama, tercuman ve tedavi sonrasi takip destegiyle uctan uca hasta deneyimi. 7/24 hasta koordinasyonu."
      },
      {
        icon: Building2,
        title: "Modern Altyapi",
        text: "Son teknoloji cihazlar, dijital planlama sistemleri ve akilli hastane konseptleri ile uluslararasi standartlarda hizmet."
      },
      {
        icon: Users,
        title: "Deneyimli Ekipler",
        text: "Yillik binlerce uluslararasi hasta deneyimine sahip, cok dilli medikal koordinatorler ve uzman saglik personeli."
      },
      {
        icon: Globe,
        title: "Kulturel Zenginlik",
        text: "Tedavi surecinde Istanbul'un essiz tarih ve kultur dokusunu kesfetme firsati. Turizm ve sagligin mukemmel birlesimi."
      }
    ],
    comparisonTitle: "Ornek Tedavi Karsilastirmasi",
    comparisonColumns: ["Tedavi", "Ingiltere / ABD", "Turkiye", "Tasarruf"],
    comparison: [
      ["Dis Implanti (tek)", "£2,500 - £3,000", "£400 - £600", "%75-80"],
      ["Sac Ekimi (3000 greft)", "$15,000 - $20,000", "$2,000 - $3,500", "%80-85"],
      ["Burun Estetigi", "£6,000 - £8,000", "£2,000 - £3,000", "%60-70"],
      ["Tup Mide Ameliyati", "$20,000 - $30,000", "$4,000 - $6,000", "%75-80"],
      ["Hollywood Gulus", "£8,000 - £15,000", "£2,500 - £4,000", "%70-75"],
      ["Meme Estetigi", "£6,000 - £10,000", "£2,500 - £4,000", "%60-65"]
    ],
    clinicsTitle: "Partner Hastanelerimiz",
    clinicsText: "JCI akrediteli, uluslararasi standartlarda hizmet veren seckin saglik kuruluslariyla calisiyoruz.",
    clinicFeatures: [
      "JCI Akreditasyonu",
      "ISO 9001 Sertifikasi",
      "7/24 Acil Servis",
      "Cok Dilli Personel",
      "VIP Hasta Odalari",
      "Dijital Hasta Takibi"
    ],
    testimonialsTitle: "Hasta Yorumlari",
    testimonials: [
      {
        name: "Michael R.",
        country: "Ingiltere",
        treatment: "Sac Ekimi",
        text: "Istanbul'da sac ekimi yaptirdim. Sonuclar inanilmaz, ustelik Ingiltere'deki fiyatin %80 altinda. Tum surec profesyonelce yonetildi."
      },
      {
        name: "Anna K.",
        country: "Almanya",
        treatment: "Dis Estetigi",
        text: "Zirkonyum kaplamalarim mukemmel gorunuyor. Almanya'da ayni tedavi 3 kat daha pahaliydi. Kesinlikle tavsiye ederim."
      },
      {
        name: "Sarah M.",
        country: "ABD",
        treatment: "Burun Estetigi",
        text: "Ameliyat oncesi tum surecim cok iyi planlanmisti. Cerrahim cok yetenekliydi ve sonuclardan cok memnunum."
      }
    ],
    faqTitle: "Sikca Sorulan Sorular",
    faqs: [
      {
        q: "Turkiye'de tedavi guvenli mi?",
        a: "Evet. Turkiye'deki bircok hastane JCI ve ISO sertifikalidir. Ayrica Saglik Bakanligi tarafindan denetlenen uluslararasi hasta yetki belgelerine sahiptirler."
      },
      {
        q: "Ingilizce/Rusca konusan personel var mi?",
        a: "Evet. Partner hastanelerimizde Ingilizce, Rusca, Almanca ve Arapca konusan medikal koordinatorler bulunmaktadir."
      },
      {
        q: "Tedavi sonrasi takip nasil yapiliyor?",
        a: "Ulkenize dondukten sonra WhatsApp ve video gorusmeler ile duzenli takip yapilmaktadir. Herhangi bir sorun yasanirsa 7/24 destek hattimiz aktiftir."
      },
      {
        q: "Vize islemleri icin destek var mi?",
        a: "Evet. Vize basvurunuz icin gerekli davet mektubu ve medikal randevu belgelerini sagliyoruz."
      }
    ],
    ctaTitle: "Hazirseniz Sureci Birlikte Planlayalim",
    ctaText: "Size uygun tedavi planini, butceyi ve seyahat takvimini hizlica olusturalim. Ucretsiz danismanlik icin hemen iletisime gecin.",
    ctaPrimary: "Ucretsiz Konsultasyon",
    ctaSecondary: "Oncesi / Sonrasi"
  },
  en: {
    title: "Why Turkey?",
    subtitle: "Turkey is a strong medical tourism hub combining quality care, speed, and comfort in one journey.",
    heroStats: [
      { value: "2M+", label: "International Patients Yearly" },
      { value: "Top 5", label: "Global Health Tourism" },
      { value: "750+", label: "JCI Accredited Hospitals" },
      { value: "70%", label: "Cost Savings" }
    ],
    introTitle: "World Leader in Health Tourism",
    introText: "With over 2 million international patients annually, Turkey has become one of the world's most preferred health tourism destinations. Modern hospital infrastructure, experienced medical teams, and competitive prices make it an ideal choice for patients worldwide.",
    sectionTitle: "Why Patients Choose Turkey",
    sectionDescription: "The metrics below visually summarize the key reasons international patients prefer Turkey.",
    metrics: [
      { label: "Cost advantage", value: 70, icon: WalletCards, note: "Typically 50%-70% more affordable in many treatments" },
      { label: "Fast scheduling", value: 85, icon: TimerReset, note: "Short timelines without long waiting lists" },
      { label: "Clinical trust", value: 90, icon: ShieldCheck, note: "Hospitals and teams aligned with international standards" }
    ],
    advantagesTitle: "Turkey's Advantages",
    advantages: [
      {
        icon: Award,
        title: "Expertise & Technology",
        text: "Experienced physicians and modern infrastructure in dentistry, aesthetics, hair transplant, obesity care, and orthopedics. JCI and ISO certified hospitals."
      },
      {
        icon: Plane,
        title: "Easy Access",
        text: "Direct flights from 120+ countries. Istanbul Airport is one of the world's largest transit hubs providing easy connectivity."
      },
      {
        icon: Heart,
        title: "Comfortable Experience",
        text: "End-to-end support with VIP transfer, accommodation, interpretation, and aftercare follow-up. 24/7 patient coordination."
      },
      {
        icon: Building2,
        title: "Modern Infrastructure",
        text: "State-of-the-art equipment, digital planning systems, and smart hospital concepts delivering international standard services."
      },
      {
        icon: Users,
        title: "Experienced Teams",
        text: "Medical coordinators with thousands of international patient experiences annually, multilingual healthcare personnel."
      },
      {
        icon: Globe,
        title: "Cultural Richness",
        text: "Opportunity to explore Istanbul's unique historical and cultural heritage during your treatment. Perfect blend of tourism and healthcare."
      }
    ],
    comparisonTitle: "Sample Treatment Comparison",
    comparisonColumns: ["Treatment", "UK / US", "Turkey", "Savings"],
    comparison: [
      ["Dental Implant (single)", "£2,500 - £3,000", "£400 - £600", "75-80%"],
      ["Hair Transplant (3000 grafts)", "$15,000 - $20,000", "$2,000 - $3,500", "80-85%"],
      ["Rhinoplasty", "£6,000 - £8,000", "£2,000 - £3,000", "60-70%"],
      ["Gastric Sleeve Surgery", "$20,000 - $30,000", "$4,000 - $6,000", "75-80%"],
      ["Hollywood Smile", "£8,000 - £15,000", "£2,500 - £4,000", "70-75%"],
      ["Breast Aesthetics", "£6,000 - £10,000", "£2,500 - £4,000", "60-65%"]
    ],
    clinicsTitle: "Our Partner Hospitals",
    clinicsText: "We work with prestigious healthcare institutions that provide JCI accredited, international standard services.",
    clinicFeatures: [
      "JCI Accreditation",
      "ISO 9001 Certification",
      "24/7 Emergency Service",
      "Multilingual Staff",
      "VIP Patient Rooms",
      "Digital Patient Tracking"
    ],
    testimonialsTitle: "Patient Reviews",
    testimonials: [
      {
        name: "Michael R.",
        country: "United Kingdom",
        treatment: "Hair Transplant",
        text: "I had my hair transplant in Istanbul. The results are amazing, and it was 80% cheaper than in the UK. The entire process was managed professionally."
      },
      {
        name: "Anna K.",
        country: "Germany",
        treatment: "Dental Aesthetics",
        text: "My zirconium veneers look perfect. The same treatment in Germany would have cost 3 times more. Highly recommend!"
      },
      {
        name: "Sarah M.",
        country: "USA",
        treatment: "Rhinoplasty",
        text: "My entire pre-surgery process was well planned. My surgeon was very talented and I'm very happy with the results."
      }
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Is treatment in Turkey safe?",
        a: "Yes. Many hospitals in Turkey are JCI and ISO certified. They also hold international patient authorization certificates supervised by the Ministry of Health."
      },
      {
        q: "Is there English/Russian speaking staff?",
        a: "Yes. Our partner hospitals have medical coordinators who speak English, Russian, German, and Arabic."
      },
      {
        q: "How is post-treatment follow-up done?",
        a: "After returning to your country, regular follow-up is done via WhatsApp and video calls. Our 24/7 support line is active for any issues."
      },
      {
        q: "Is there support for visa procedures?",
        a: "Yes. We provide the invitation letter and medical appointment documents required for your visa application."
      }
    ],
    ctaTitle: "Let's Plan Your Journey",
    ctaText: "We can quickly build your personalized treatment plan, budget, and travel timeline. Contact us for a free consultation.",
    ctaPrimary: "Free Consultation",
    ctaSecondary: "Before / After"
  },
  ru: {
    title: "Pochemu Turciya?",
    subtitle: "Turciya — odin iz vedushchih centrov medicinskogo turizma, gde sochetayutsya kachestvo, skorost' i komfort.",
    heroStats: [
      { value: "2M+", label: "Mezhdunarodnyh pacientov v god" },
      { value: "Top 5", label: "Mirovoj medicinskij turizm" },
      { value: "750+", label: "JCI akkreditovannyh bol'nic" },
      { value: "70%", label: "Ekonomiya" }
    ],
    introTitle: "Mirovoj lider v medicinskom turizme",
    introText: "S bolee chem 2 millionami mezhdunarodnyh pacientov ezhegodno, Turciya stala odnim iz samyh predpochtitel'nyh napravlenij medicinskogo turizma. Sovremennaya bol'nichnaya infrastruktura, opytnyj medicinskij personal i konkurentosposobnye ceny delayut ee ideal'nym vyborom dlya pacientov so vsego mira.",
    sectionTitle: "Pochemu pacienty vybirayut Turciyu",
    sectionDescription: "Nizhe predstavleny klyuchevye preimushchestva, kotorye mezhdunarodnye pacienty otmechayut chashche vsego.",
    metrics: [
      { label: "Vygoda po stoimosti", value: 70, icon: WalletCards, note: "Vo mnogih procedurah ekonomiya sostavlyaet 50%-70%" },
      { label: "Bystroe planirovanie", value: 85, icon: TimerReset, note: "Bez dlitel'nyh ocheredej i mesyacev ozhidaniya" },
      { label: "Klinicheskaya nadezhnost'", value: 90, icon: ShieldCheck, note: "Kliniki i specialisty mezhdunarodnogo urovnya" }
    ],
    advantagesTitle: "Preimushchestva Turcii",
    advantages: [
      {
        icon: Award,
        title: "Ekspertiza i tekhnologii",
        text: "Opytnye vrachi i sovremennaya infrastruktura: stomatologiya, estetika, transplantaciya volos, bariatriya, ortopediya. JCI i ISO sertificirovannye bol'nicy."
      },
      {
        icon: Plane,
        title: "Udobnaya logistika",
        text: "Pryamye rejsy iz 120+ stran. Aeroport Stambula — odin iz krupnejshih tranzitnyh habov mira."
      },
      {
        icon: Heart,
        title: "Komfortnyj put'",
        text: "VIP-transfer, prozhivanie, perevodchik i postlechebnoe soprovozhdenie. 24/7 koordinaciya pacientov."
      },
      {
        icon: Building2,
        title: "Sovremennaya infrastruktura",
        text: "Sovremennoe oborudovanie, cifrovye sistemy planirovaniya i koncepcii umnyh bol'nic mezhdunarodnogo standarta."
      },
      {
        icon: Users,
        title: "Opytnye komandy",
        text: "Medicinskie koordinatory s opytom tysyach mezhdunarodnyh pacientov, mnogoyazychnyj medpersonal."
      },
      {
        icon: Globe,
        title: "Kul'turnoe bogatstvo",
        text: "Vozmozhnost' issledovat' unikal'noe istoricheskoe i kul'turnoe nasledie Stambula vo vremya lecheniya."
      }
    ],
    comparisonTitle: "Primer sravneniya stoimosti",
    comparisonColumns: ["Procedura", "Velikobritaniya / SShA", "Turciya", "Ekonomiya"],
    comparison: [
      ["Zubnojimplant (odin)", "£2,500 - £3,000", "£400 - £600", "75-80%"],
      ["Peresadka volos (3000 graftov)", "$15,000 - $20,000", "$2,000 - $3,500", "80-85%"],
      ["Rinoplastika", "£6,000 - £8,000", "£2,000 - £3,000", "60-70%"],
      ["Rukavnaya gastrektomiya", "$20,000 - $30,000", "$4,000 - $6,000", "75-80%"],
      ["Gollivudskaya ulybka", "£8,000 - £15,000", "£2,500 - £4,000", "70-75%"],
      ["Mammoplastika", "£6,000 - £10,000", "£2,500 - £4,000", "60-65%"]
    ],
    clinicsTitle: "Nashi partnerskie bol'nicy",
    clinicsText: "My rabotaem s prestizhnymi medicinskimi uchrezhdeniyami, predostavlyayushchimi uslugi mezhdunarodnogo standarta s akkreditaciej JCI.",
    clinicFeatures: [
      "Akkreditaciya JCI",
      "Sertifikaciya ISO 9001",
      "Ekstrennaya sluzhba 24/7",
      "Mnogoyazychnyj personal",
      "VIP palaty",
      "Cifrovoe otslezhivanie pacientov"
    ],
    testimonialsTitle: "Otzyvy pacientov",
    testimonials: [
      {
        name: "Mihail R.",
        country: "Velikobritaniya",
        treatment: "Peresadka volos",
        text: "Sdelal peresadku volos v Stambule. Rezul'taty potryasayushchie, i eto bylo na 80% deshevle, chem v Velikobritanii. Ves' process byl organizovan professional'no."
      },
      {
        name: "Anna K.",
        country: "Germaniya",
        treatment: "Estetika zubov",
        text: "Moi cirkonievye viniry vyglyadyat ideal'no. Takoe zhe lechenie v Germanii stoilo by v 3 raza dorozhe. Nastoyatel'no rekomenduyul!"
      },
      {
        name: "Sara M.",
        country: "SShA",
        treatment: "Rinoplastika",
        text: "Ves' moj predoperacionnyj process byl horosho splanirovan. Moj hirurg byl ochen' talantliv, i ya ochen' dovol'na rezul'tatami."
      }
    ],
    faqTitle: "Chasto zadavaemye voprosy",
    faqs: [
      {
        q: "Bezopasno li lechenie v Turcii?",
        a: "Da. Mnogie bol'nicy v Turcii imeyut sertifikaty JCI i ISO. Oni takzhe imeyut razresheniya na rabotu s mezhdunarodnymi pacientami, kontroliruemye Ministerstvom zdravoohraneniya."
      },
      {
        q: "Est' li angloyazychnyj/russkoyazychnyj personal?",
        a: "Da. V nashih partnerskih bol'nicah est' medicinskie koordinatory, govoryashchie na anglijskom, russkom, nemeckom i arabskom yazykah."
      },
      {
        q: "Kak prohodit posleoperacionnoe nablyudenie?",
        a: "Posle vozvrashcheniya v vashu stranu regulyarnoe nablyudenie osushchestvlyaetsya cherez WhatsApp i videozvonki. Nasha liniya podderzhki 24/7 aktivna dlya lyubyh voprosov."
      },
      {
        q: "Est' li podderzhka po vizovym voprosam?",
        a: "Da. My predostavlyaem priglasitel'noe pis'mo i dokumenty o medicinskoj zapisi, neobhodimye dlya podachi zayavleniya na vizu."
      }
    ],
    ctaTitle: "Gotovy nachat'?",
    ctaText: "Sostavim dlya vas personal'nyj plan lecheniya, byudzhet i udobnyj grafik poezdki. Svyazhites' s nami dlya besplatnoj konsul'tacii.",
    ctaPrimary: "Besplatnaya konsul'taciya",
    ctaSecondary: "Do / Posle"
  }
};

export default function WhyTurkeyPage() {
  const { lang } = useLanguage();
  const data = useMemo(() => CONTENT[lang] || CONTENT.tr, [lang]);

  return (
    <InnerPageLayout title={data.title} subtitle={data.subtitle}>
      <div className="space-y-12 text-[#1A1A1A]/85">
        
        {/* Hero Stats */}
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {data.heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-gradient-to-br from-[#3a0ca3]/10 to-[#f72585]/10 p-4 text-center sm:p-5">
              <p className="text-2xl font-bold text-[#3a0ca3] sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-[#1A1A1A]/70 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Intro Section with Image */}
        <section className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-xl font-semibold text-[#1A1A1A] sm:text-2xl">{data.introTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed sm:text-base">{data.introText}</p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl lg:h-80">
            <Image 
              src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop" 
              alt="Istanbul Skyline"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="flex items-center gap-2 text-sm font-medium text-white">
                <MapPin className="h-4 w-4" />
                Istanbul, Turkey
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#1A1A1A]">
            <BarChart3 className="h-5 w-5" />
            <h2 className="text-xl font-semibold">{data.sectionTitle}</h2>
          </div>
          <p>{data.sectionDescription}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {data.metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
                      <Icon className="h-4 w-4" />
                      {metric.label}
                    </div>
                    <span className="text-sm font-bold text-[#1A1A1A]">{metric.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#EDEDED]">
                    <div className="h-2 rounded-full bg-gradient-to-r from-[#3a0ca3] to-[#f72585]" style={{ width: `${metric.value}%` }} />
                  </div>
                  <p className="mt-3 text-sm text-[#1A1A1A]/75">{metric.note}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Advantages Grid */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{data.advantagesTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <article key={adv.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#3a0ca3]/10 to-[#f72585]/10">
                    <Icon className="h-5 w-5 text-[#3a0ca3]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1A1A1A]">{adv.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/75">{adv.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Price Comparison Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-[#1A1A1A]" />
            <h2 className="text-xl font-semibold text-[#1A1A1A]">{data.comparisonTitle}</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#1A1A1A]/10">
            <table className="min-w-full divide-y divide-[#1A1A1A]/10 text-left text-sm">
              <thead className="bg-gradient-to-r from-[#3a0ca3]/5 to-[#f72585]/5">
                <tr>
                  {data.comparisonColumns.map((column) => (
                    <th key={column} className="px-4 py-3 font-semibold text-[#1A1A1A]">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/10 bg-white">
                {data.comparison.map((row) => (
                  <tr key={row[0]} className="hover:bg-[#FBFBFB]">
                    <td className="px-4 py-3 font-medium text-[#1A1A1A]">{row[0]}</td>
                    <td className="px-4 py-3 text-[#1A1A1A]/60 line-through">{row[1]}</td>
                    <td className="px-4 py-3 font-semibold text-[#3a0ca3]">{row[2]}</td>
                    <td className="px-4 py-3 font-bold text-[#0E7A36]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Clinics Section */}
        <section className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#1A1A1A]">{data.clinicsTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/75">{data.clinicsText}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {data.clinicFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#D4AF37]" />
                    <span className="text-[#1A1A1A]/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-32 overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop" alt="Hospital" fill className="object-cover" />
              </div>
              <div className="relative h-32 overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop" alt="Medical Equipment" fill className="object-cover" />
              </div>
              <div className="relative h-32 overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop" alt="Surgery Room" fill className="object-cover" />
              </div>
              <div className="relative h-32 overflow-hidden rounded-xl">
                <Image src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop" alt="Patient Room" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{data.testimonialsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {data.testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
                <div className="mb-3 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#1A1A1A]/80">{testimonial.text}</p>
                <div className="mt-4 border-t border-[#1A1A1A]/10 pt-4">
                  <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                  <p className="text-xs text-[#1A1A1A]/60">{testimonial.country} - {testimonial.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="mb-5 text-xl font-semibold text-[#1A1A1A]">{data.faqTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5">
                <h3 className="font-semibold text-[#1A1A1A]">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl bg-gradient-to-r from-[#3a0ca3] to-[#f72585] p-6 text-white sm:p-8">
          <h2 className="text-xl font-semibold sm:text-2xl">{data.ctaTitle}</h2>
          <p className="mt-2 text-white/85">{data.ctaText}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#3a0ca3] transition hover:bg-white/90">
              {data.ctaPrimary}
            </Link>
            <Link href="/before-after" className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              {data.ctaSecondary}
            </Link>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
