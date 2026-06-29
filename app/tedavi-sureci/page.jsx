"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "Tedavi Süreci",
    subtitle: "İlk görüşmeden Türkiye dönüşünüze kadar tüm aşamaları net bir zaman planı ile yönetiyoruz.",
    steps: [
      ["1. Ön Değerlendirme", "Hasta beklentileri, sağlık geçmişi ve uygun tedavi seçenekleri analiz edilir."],
      ["2. Doktor Planlaması", "Uzman doktor görüşü ile kişiye özel operasyon ve iyileşme planı hazırlanır."],
      ["3. Seyahat & Konaklama", "Uçuş, transfer ve otel detayları operasyon takvimiyle uyumlu şekilde düzenlenir."],
      ["4. Operasyon & Takip", "Tedavi sonrası kontroller ve uzaktan destekle süreç güvenle tamamlanır."]
    ],
    timelineTitle: "Ortalama Zaman Planı",
    days: [
      ["Gün 1", "Varış + testler"],
      ["Gün 2", "Doktor konsültasyonu"],
      ["Gün 3", "Operasyon"],
      ["Gün 4", "Kontrol + dönüş"]
    ]
  },
  en: {
    title: "Treatment Process",
    subtitle: "We manage all stages from your first consultation to your return from Turkey with a clear timeline.",
    steps: [
      ["1. Pre-Assessment", "Patient expectations, medical history, and suitable treatment options are analyzed."],
      ["2. Doctor Planning", "A personalized operation and recovery plan is prepared with specialist physician consultation."],
      ["3. Travel & Accommodation", "Flight, transfer, and hotel details are arranged in alignment with the operation schedule."],
      ["4. Operation & Follow-Up", "The process is completed safely with post-treatment checks and remote support."]
    ],
    timelineTitle: "Average Timeline",
    days: [
      ["Day 1", "Arrival + tests"],
      ["Day 2", "Doctor consultation"],
      ["Day 3", "Operation"],
      ["Day 4", "Check-up + departure"]
    ]
  },
  ru: {
    title: "Процесс лечения",
    subtitle: "Мы управляем всеми этапами от первой консультации до вашего возвращения из Турции по четкому плану.",
    steps: [
      ["1. Предварительная оценка", "Анализируются ожидания пациента, история болезни и подходящие варианты лечения."],
      ["2. Планирование с врачом", "Индивидуальный план операции и восстановления готовится с консультацией специалиста."],
      ["3. Поездка и проживание", "Детали перелета, трансфера и отеля согласуются с расписанием операции."],
      ["4. Операция и наблюдение", "Процесс завершается безопасно с послеоперационными проверками и удаленной поддержкой."]
    ],
    timelineTitle: "Примерный план",
    days: [
      ["День 1", "Прибытие + анализы"],
      ["День 2", "Консультация врача"],
      ["День 3", "Операция"],
      ["День 4", "Контроль + отъезд"]
    ]
  },
  ar: {
    title: "مسار العلاج",
    subtitle: "ندير جميع المراحل من أول استشارة حتى عودتك من تركيا بجدول زمني واضح.",
    steps: [
      ["1. التقييم المسبق", "يتم تحليل توقعات المريض والتاريخ الطبي وخيارات العلاج المناسبة."],
      ["2. التخطيط مع الطبيب", "يُعد خطة عملية وتعافٍ مخصصة باستشارة الطبيب المتخصص."],
      ["3. السفر والإقامة", "يتم ترتيب تفاصيل الرحلة والنقل والفندق بما يتوافق مع جدول العملية."],
      ["4. العملية والمتابعة", "تُكتمل العملية بأمان مع فحوصات ما بعد العلاج والدعم عن بُعد."]
    ],
    timelineTitle: "الجدول الزمني المتوسط",
    days: [
      ["اليوم 1", "الوصول + الفحوصات"],
      ["اليوم 2", "استشارة الطبيب"],
      ["اليوم 3", "العملية"],
      ["اليوم 4", "المراجعة + المغادرة"]
    ]
  }
};

export default function TedaviSureciPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-4">
        {t.steps.map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-[#0C2E63]">{title}</h3>
            <p className="mt-1 text-sm text-[#1A1A1A]/75">{text}</p>
          </div>
        ))}
      </div>

      <section className="mt-8 rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#0C2E63] sm:text-2xl">{t.timelineTitle}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {t.days.map(([day, desc]) => (
            <div key={day} className="rounded-2xl bg-gradient-to-br from-[#f7f3ff] to-[#eef5ff] p-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3a0ca3]">{day}</p>
              <p className="mt-1 text-sm font-medium text-[#1A1A1A]/80">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
