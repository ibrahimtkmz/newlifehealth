"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import {
  Plane,
  CarTaxiFront,
  Droplets,
  Stethoscope,
  Clock3,
  ShowerHead,
  MessageCircleHeart,
  Leaf,
  Ghost,
  Sprout,
  Crown,
  Flag
} from "lucide-react";
import InnerPageLayout from "../../components/InnerPageLayout";
import { useLanguage } from "../../components/LanguageProvider";

const PAGE_DATA = {
  tr: {
    "hair-transplant": {
      title: "Saç Ekimi",
      breadcrumb: "Saç Ekimi",
      summary: "Sağlık turizminin lokomotif alanı olan saç ekimi, teknik doğruluk ve süreç yönetimiyle güven odaklı planlanır.",
      sections: [
        {
          title: "Teknik Detaylar: Sapphire FUE vs DHI",
          body: "Sapphire FUE geniş alanlarda doğal dağılım için öne çıkarken, DHI sıklaştırma ve ön çizgi detayında yüksek kontrol sağlar.",
          items: ["Sapphire FUE: Kanal açma + greft yerleşimi", "DHI: Choi kalem ile doğrudan implant", "Karma protokol: İhtiyaca göre kombine yaklaşım"]
        }
      ]
    },
    "dental-aesthetics": {
      title: "Diş Estetiği",
      breadcrumb: "Diş Estetiği",
      summary: "Görselliğin ön planda olduğu diş estetiği sayfasında dijital planlama, materyal kalitesi ve hız vurgulanır.",
      sections: [
        {
          title: "Gülüş Tasarımı (Hollywood Smile)",
          body: "Önce dijital tarama, sonra yüz oranına uygun tasarım ve kontrollü uygulama yapılır.",
          items: ["3D ağız içi tarama", "Dijital mock-up ve onay", "Planlı uygulama ve son rötuş"]
        }
      ]
    }
  },
  en: {
    "hair-transplant": {
      title: "Hair Transplant",
      breadcrumb: "Hair Transplant",
      summary: "As the leading field of health tourism, hair transplant is planned with focus on technical accuracy and process management.",
      sections: [
        {
          title: "Technical Details: Sapphire FUE vs DHI",
          body: "Sapphire FUE stands out for natural distribution in large areas, while DHI provides high control in densification and hairline detail.",
          items: ["Sapphire FUE: Channel opening + graft placement", "DHI: Direct implant with Choi pen", "Mixed protocol: Combined approach as needed"]
        }
      ]
    },
    "dental-aesthetics": {
      title: "Dental Aesthetics",
      breadcrumb: "Dental Aesthetics",
      summary: "Digital planning, material quality, and speed are emphasized on the dental aesthetics page where visuality is at the forefront.",
      sections: [
        {
          title: "Smile Design (Hollywood Smile)",
          body: "First digital scanning, then design suitable for facial proportions and controlled application.",
          items: ["3D intraoral scanning", "Digital mock-up and approval", "Planned application and final touch"]
        }
      ]
    }
  },
  ru: {
    "hair-transplant": {
      title: "Пересадка волос",
      breadcrumb: "Пересадка волос",
      summary: "Являясь ведущей областью медицинского туризма, пересадка волос планируется с упором на техническую точность и управление процессами.",
      sections: [
        {
          title: "Технические детали: Sapphire FUE против DHI",
          body: "Sapphire FUE выделяется естественным распределением на больших участках, в то время как DHI обеспечивает высокий контроль при уплотнении и детализации линии роста волос.",
          items: ["Sapphire FUE: Открытие каналов + установка графтов", "DHI: Прямая имплантация ручкой Choi", "Смешанный протокол: Комбинированный подход по мере необходимости"]
        }
      ]
    },
    "dental-aesthetics": {
      title: "Стоматологическая эстетика",
      breadcrumb: "Стоматологическая эстетика",
      summary: "Цифровое планирование, качество материалов и скорость подчеркиваются на странице стоматологической эстетики.",
      sections: [
        {
          title: "Дизайн улыбки (Hollywood Smile)",
          body: "Сначала цифровое сканирование, затем дизайн, соответствующий пропорциям лица, и контролируемое применение.",
          items: ["3D интраоральное сканирование", "Цифровой макет и утверждение", "Плановое применение и финальные штрихи"]
        }
      ]
    }
  },
  ar: {
    "hair-transplant": {
      title: "زراعة الشعر",
      breadcrumb: "زراعة الشعر",
      summary: "باعتبارها المجال الرائد في السياحة الصحية، يتم التخطيط لزراعة الشعر مع التركيز على الدقة التقنية وإدارة العمليات.",
      sections: [
        {
          title: "التفاصيل التقنية: Sapphire FUE مقابل DHI",
          body: "تتميز Sapphire FUE بالتوزيع الطبيعي في المساحات الكبيرة، بينما توفر DHI تحكماً عالياً في الكثافة وتفاصيل خط الشعر.",
          items: ["Sapphire FUE: فتح القنوات + وضع الطعوم", "DHI: زرع مباشر بقلم Choi", "بروتوكول مختلط: نهج مدمج حسب الحاجة"]
        }
      ]
    },
    "dental-aesthetics": {
      title: "تجميل الأسنان",
      breadcrumb: "تجميل الأسنان",
      summary: "يتم التأكيد على التخطيط الرقمي وجودة المواد والسرعة في صفحة تجميل الأسنان حيث تكون المرئيات في المقدمة.",
      sections: [
        {
          title: "تصميم الابتسامة (ابتسامة هوليوود)",
          body: "أولاً المسح الرقمي، ثم التصميم المناسب لنسب الوجه والتطبيق الخاضع للرقابة.",
          items: ["مسح ثلاثي الأبعاد لداخل الفم", "نموذج رقمي وموافقة", "تطبيق مخطط ولمسات نهائية"]
        }
      ]
    }
  }
};

const UI_TEXT = {
  tr: { home: "Anasayfa", treatments: "Tedaviler", reviews: "Hasta Yorumları", score: "Skor", faqs: "Sık Sorulan Sorular" },
  en: { home: "Home", treatments: "Treatments", reviews: "Patient Reviews", score: "Score", faqs: "Frequently Asked Questions" },
  ru: { home: "Главная", treatments: "Лечение", reviews: "Отзывы пациентов", score: "Оценка", faqs: "Часто задаваемые вопросы" },
  ar: { home: "الرئيسية", treatments: "العلاجات", reviews: "آراء المرضى", score: "النتيجة", faqs: "الأسئلة الشائعة" }
};

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const ui = UI_TEXT[lang] || UI_TEXT.tr;
  const page = useMemo(() => (PAGE_DATA[lang] || PAGE_DATA.tr)[slug] || (PAGE_DATA[lang] || PAGE_DATA.tr)["hair-transplant"], [slug, lang]);

  return (
    <InnerPageLayout title={page.title} subtitle={page.summary}>
      <nav className="mb-6 text-xs text-[#1A1A1A]/60 sm:text-sm" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <Link href="/">{ui.home}</Link> &gt; <Link href="/treatments">{ui.treatments}</Link> &gt; <span className="font-medium text-[#1A1A1A]">{page.breadcrumb}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="space-y-8">
          {page.sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FCFCFC] p-5">
              <h2 className="text-xl font-semibold text-[#1A1A1A]">{section.title}</h2>
              <p className="mt-2 text-sm text-[#1A1A1A]/75">{section.body}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#1A1A1A]/85">
                {section.items.map((item) => (
                  <li key={item} className="rounded-xl bg-white px-3 py-2">• {item}</li>
                ))}
              </ul>
            </section>
          ))}
          
          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#1A1A1A]">{ui.reviews}</h3>
            <div className="flex snap-x gap-4 overflow-x-auto pb-2">
              <div className="min-w-[260px] snap-start rounded-2xl border border-[#1A1A1A]/10 bg-white p-4">
                <p className="text-xs uppercase tracking-wide text-[#1A1A1A]/50">Google</p>
                <p className="mt-2 text-sm text-[#1A1A1A]/85">“Professional and transparent team.”</p>
                <p className="mt-3 text-sm font-semibold text-emerald-700">{ui.score}: 4.9/5</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-[#1A1A1A]">{ui.faqs}</h3>
            <details className="rounded-xl border border-[#1A1A1A]/10 bg-white px-4 py-3">
              <summary className="cursor-pointer font-medium text-[#1A1A1A]">1. FAQ Placeholder</summary>
              <p className="mt-2 text-sm text-[#1A1A1A]/70">Answer placeholder.</p>
            </details>
          </section>
        </div>
      </div>
    </InnerPageLayout>
  );
}
