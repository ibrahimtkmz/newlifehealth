"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "Kurumsal",
    subtitle: "NEWLIFE HEALTH TOURISM, uluslararası hastaların Türkiye'deki sağlık yolculuğunu güvenli, planlı ve şeffaf şekilde yöneten bir koordinasyon markasıdır.",
    cards: [
      ["Vizyon", "Sağlık turizminde güvenilir ve sürdürülebilir hasta deneyimi standardı oluşturmak."],
      ["Misyon", "Doğru tedaviyi, doğru kurumda, doğru planlamayla hastaya ulaştırmak."],
      ["Değerler", "Şeffaflık, etik yaklaşım, hasta güvenliği ve kesintisiz iletişim."]
    ],
    sectionTag: "Kurumsal Yaklaşım",
    sectionTitle: "Uluslararası hastalar için tek noktadan koordinasyon",
    items: ["Klinik seçimi ve uzman eşleştirme", "Seyahat, transfer ve konaklama planlaması", "Tedavi sonrası kontrol ve dijital takip", "Çok dilli hasta danışmanlığı"]
  },
  en: {
    title: "Corporate",
    subtitle: "NEWLIFE HEALTH TOURISM is a coordination brand that manages the health journey of international patients in Turkey in a safe, planned, and transparent manner.",
    cards: [
      ["Vision", "To establish a reliable and sustainable patient experience standard in health tourism."],
      ["Mission", "To deliver the right treatment, at the right institution, with the right planning."],
      ["Values", "Transparency, ethical approach, patient safety, and uninterrupted communication."]
    ],
    sectionTag: "Corporate Approach",
    sectionTitle: "Single-point coordination for international patients",
    items: ["Clinic selection and specialist matching", "Travel, transfer, and accommodation planning", "Post-treatment check-up and digital follow-up", "Multilingual patient consultancy"]
  },
  ru: {
    title: "О компании",
    subtitle: "NEWLIFE HEALTH TOURISM — координационный бренд, который управляет медицинским путешествием международных пациентов в Турции безопасно, планомерно и прозрачно.",
    cards: [
      ["Видение", "Создать надежный и устойчивый стандарт опыта пациентов в медицинском туризме."],
      ["Миссия", "Доставить правильное лечение в правильном учреждении с правильным планированием."],
      ["Ценности", "Прозрачность, этический подход, безопасность пациентов и непрерывная коммуникация."]
    ],
    sectionTag: "Корпоративный подход",
    sectionTitle: "Единая координация для международных пациентов",
    items: ["Выбор клиники и подбор специалиста", "Планирование поездки, трансфера и проживания", "Послеоперационный контроль и цифровое наблюдение", "Многоязычное консультирование пациентов"]
  },
  ar: {
    title: "عن الشركة",
    subtitle: "NEWLIFE HEALTH TOURISM علامة تجارية للتنسيق تدير رحلة المرضى الدوليين الصحية في تركيا بطريقة آمنة ومنظمة وشفافة.",
    cards: [
      ["الرؤية", "إنشاء معيار موثوق ومستدام لتجربة المريض في السياحة الصحية."],
      ["الرسالة", "تقديم العلاج الصحيح في المؤسسة الصحيحة بالتخطيط الصحيح."],
      ["القيم", "الشفافية والنهج الأخلاقي وسلامة المريض والتواصل المستمر."]
    ],
    sectionTag: "النهج المؤسسي",
    sectionTitle: "تنسيق من نقطة واحدة للمرضى الدوليين",
    items: ["اختيار العيادة ومطابقة المتخصص", "تخطيط السفر والنقل والإقامة", "متابعة ما بعد العلاج والمتابعة الرقمية", "الاستشارة متعددة اللغات للمرضى"]
  }
};

export default function KurumsalPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 sm:grid-cols-3">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0C2E63]">{title}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/75">{text}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-3xl border border-[#0C2E63]/10 bg-gradient-to-r from-[#f8f4ff] via-white to-[#eef5ff] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3a0ca3]">{t.sectionTag}</p>
        <h2 className="mt-3 text-2xl font-bold text-[#0C2E63] sm:text-3xl">{t.sectionTitle}</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {t.items.map((item) => (
            <div key={item} className="rounded-2xl bg-white/90 p-4 text-sm text-[#1A1A1A]/80 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
