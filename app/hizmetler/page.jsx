"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "Hizmetler",
    subtitle: "İhtiyacınıza uygun tedavi planını, anlaşmalı sağlık kurumlarımız ve uzman ekiplerimiz ile birlikte uçtan uca organize ediyoruz.",
    services: ["Saç Ekimi", "Diş Estetiği", "Plastik Cerrahi", "Obezite Cerrahisi", "Göz Tedavileri", "Check-Up Programları"],
    cards: [
      ["Ön Değerlendirme", "Sağlık geçmişi ve beklentiler analiz edilerek uygun tedavi yol haritası hazırlanır."],
      ["Uzman Planlama", "Anlaşmalı hekimlerle operasyon, konfor ve iyileşme planı kişiselleştirilir."],
      ["Süreç Takibi", "Tedavi sonrası kontrol ve uzaktan destekle süreç güvenli şekilde tamamlanır."]
    ]
  },
  en: {
    title: "Services",
    subtitle: "We organize your personalized treatment plan from start to finish with our contracted healthcare institutions and expert teams.",
    services: ["Hair Transplant", "Dental Aesthetics", "Plastic Surgery", "Bariatric Surgery", "Eye Treatments", "Check-Up Programs"],
    cards: [
      ["Pre-Assessment", "Health history and expectations are analyzed to prepare the appropriate treatment roadmap."],
      ["Expert Planning", "Operation, comfort, and recovery plan is personalized with contracted physicians."],
      ["Process Follow-Up", "The process is completed safely with post-treatment checks and remote support."]
    ]
  },
  ru: {
    title: "Услуги",
    subtitle: "Мы организуем ваш индивидуальный план лечения от начала до конца с нашими партнерскими медицинскими учреждениями и командой экспертов.",
    services: ["Пересадка волос", "Эстетика зубов", "Пластическая хирургия", "Бариатрическая хирургия", "Лечение глаз", "Программы чек-ап"],
    cards: [
      ["Предварительная оценка", "Анализируется история болезни и ожидания для подготовки подходящей дорожной карты лечения."],
      ["Экспертное планирование", "Операция, комфорт и план восстановления персонализируются с партнерскими врачами."],
      ["Сопровождение процесса", "Процесс завершается безопасно с послеоперационными проверками и удаленной поддержкой."]
    ]
  },
  ar: {
    title: "الخدمات",
    subtitle: "ننظم خطة علاجك المخصصة من البداية إلى النهاية مع مؤسساتنا الصحية المتعاقدة وفرق الخبراء لدينا.",
    services: ["زراعة الشعر", "تجميل الأسنان", "الجراحة التجميلية", "جراحة السمنة", "علاجات العيون", "برامج الفحص الشامل"],
    cards: [
      ["التقييم المسبق", "يتم تحليل التاريخ الصحي والتوقعات لإعداد خارطة الطريق العلاجية المناسبة."],
      ["التخطيط المتخصص", "يتم تخصيص خطة العملية والراحة والتعافي مع الأطباء المتعاقدين."],
      ["متابعة العملية", "تُكتمل العملية بأمان مع فحوصات ما بعد العلاج والدعم عن بُعد."]
    ]
  }
};

export default function HizmetlerPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.services.map((service) => (
          <div key={service} className="rounded-2xl border border-[#1A1A1A]/10 bg-gradient-to-br from-white to-[#f7f3ff] p-5">
            <p className="text-base font-semibold text-[#1A1A1A]">{service}</p>
          </div>
        ))}
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-[#0C2E63]">{title}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">{text}</p>
          </article>
        ))}
      </section>
    </InnerPageLayout>
  );
}
