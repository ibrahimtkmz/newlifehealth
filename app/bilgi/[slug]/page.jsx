"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../components/LanguageProvider";
import { Building2, ClipboardCheck, HeartHandshake, HeartPulse, MessageCircleHeart, Stethoscope, UserRoundSearch } from "lucide-react";
import { quickActionPageBySlug, quickActionPages } from "../../data/quickActionContent";

const visualContent = {
  "ucretsiz-teklif-al": {
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    cards: {
      tr: ["Fotoğraf ve rapor analizi", "Şeffaf kapsam ve fiyat bilgisi", "Kişisel seyahat takvimi"],
      en: ["Photo and report analysis", "Transparent scope and price info", "Personal travel schedule"],
      ru: ["Анализ фото и отчетов", "Прозрачная стоимость и объем", "Персональный график поездки"],
      ar: ["تحليل الصور والتقارير", "شفافية النطاق والسعر", "جدول سفر شخصي"]
    }
  },
  "doktorlarla-gorus": {
    icon: UserRoundSearch,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
    cards: {
      tr: ["Uzman hekim ön değerlendirmesi", "Çok dilli görüşme koordinasyonu", "Gerçekçi beklenti yönetimi"],
      en: ["Expert physician pre-evaluation", "Multi-lingual meeting coordination", "Realistic expectation management"],
      ru: ["Предварительная оценка врача", "Координация на разных языках", "Реалистичные ожидания"],
      ar: ["تقييم طبي متخصص", "تنسيق اجتماعات متعدد اللغات", "إدارة توقعات واقعية"]
    }
  },
  agimiz: {
    icon: Building2,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
    cards: {
      tr: ["Yetkili kurum eşleştirme", "Transfer ve otel çözüm ortakları", "Tek merkezli operasyon akışı"],
      en: ["Authorized institution matching", "Transfer and hotel partners", "Single-center operation flow"],
      ru: ["Подбор сертифицированных клиник", "Партнеры по трансферу и отелям", "Единый центр координации"],
      ar: ["مطابقة المؤسسات المعتمدة", "شركاء النقل والفنادق", "تدفق عمليات مركزي"]
    }
  },
  "saglik-hizmeti": {
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    cards: {
      tr: ["Tedavi planı", "Tercüman ve randevu desteği", "Kontrol ve takip organizasyonu"],
      en: ["Treatment plan", "Interpreter and appointment support", "Control and follow-up organization"],
      ru: ["План лечения", "Поддержка переводчика и запись", "Организация контроля и наблюдения"],
      ar: ["خطة العلاج", "دعم المترجم والمواعيد", "تنظيم المراجعة والمتابعة"]
    }
  },
  "sonrasi-destek": {
    icon: MessageCircleHeart,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
    cards: {
      tr: ["Uzaktan fotoğraf takibi", "Bakım ve kontrol hatırlatmaları", "Hekimle iletişim köprüsü"],
      en: ["Remote photo tracking", "Care and control reminders", "Communication bridge with physician"],
      ru: ["Дистанционный контроль по фото", "Напоминания об уходе и осмотрах", "Связь с лечащим врачом"],
      ar: ["متابعة الصور عن بعد", "تذكيرات العناية والمراجعة", "جسر التواصل مع الطبيب"]
    }
  },
  "check-up": {
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80",
    cards: {
      tr: ["Risk profiline göre testler", "Zaman verimli randevu planı", "Anlaşılır rapor değerlendirmesi"],
      en: ["Tests based on risk profile", "Time-efficient appointment plan", "Understandable report evaluation"],
      ru: ["Тесты по профилю риска", "Эффективный график приемов", "Понятная расшифровка отчетов"],
      ar: ["فحوصات بناءً على ملف الخطر", "خطة مواعيد فعالة زمنياً", "تقييم تقارير مفهوم"]
    }
  }
};

const UI_TEXT = {
  tr: {
    back: "← Ana sayfaya dön",
    guide: "Görüş destekli hizmet rehberi",
    cta: "Detaylı bilgi ve kişisel planlama için bizimle iletişime geçin.",
    whatsapp: "WhatsApp: +90 555 050 18 02"
  },
  en: {
    back: "← Back to home",
    guide: "Visual service guide",
    cta: "Contact us for detailed information and personal planning.",
    whatsapp: "WhatsApp: +90 555 050 18 02"
  },
  ru: {
    back: "← Вернуться на главную",
    guide: "Визуальный гид по услугам",
    cta: "Свяжитесь с нами для получения подробной информации и личного планирования.",
    whatsapp: "WhatsApp: +90 555 050 18 02"
  },
  ar: {
    back: "← العودة إلى الرئيسية",
    guide: "دليل خدمة مرئي",
    cta: "تواصل معنا للحصول على معلومات مفصلة وتخطيط شخصي.",
    whatsapp: "واتساب: +90 555 050 18 02"
  }
};

export default function QuickActionPage({ params }) {
  const { lang } = useLanguage();
  const page = quickActionPageBySlug(lang, params.slug);
  const ui = UI_TEXT[lang] || UI_TEXT.tr;
  
  if (!page) notFound();

  const paragraphs = page.content.split("\n\n");
  const visual = visualContent[params.slug];
  const PageIcon = visual?.icon || HeartHandshake;
  const cards = visual?.cards[lang] || visual?.cards.tr || [];

  return (
    <main className="min-h-screen bg-[#f5f8fd] text-[#1d3257]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SiteHeader />
      <section className="mx-auto w-full max-w-[1080px] px-4 py-14 md:py-20">
        <Link href="/" className="mb-6 inline-flex rounded-full border border-[#bfd0e5] bg-white px-4 py-2 text-sm font-semibold text-[#173b69] transition hover:border-[#1f77d2] hover:text-[#1f77d2]">
          {ui.back}
        </Link>
        <article className="rounded-[2rem] border border-[#d7e3f0] bg-white p-6 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#198fd0] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                <PageIcon className="h-4 w-4" />
                NEWLIFE HEALTH
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-[#0f2f5d] md:text-6xl">{page.title}</h1>
              <p className="mt-5 max-w-[860px] text-lg leading-relaxed text-[#49627f] md:text-xl">{page.excerpt}</p>
            </div>
            {visual && (
              <div className="relative overflow-hidden rounded-[2rem] border border-[#d7e3f0] shadow-sm">
                <Image src={visual.image} alt={page.title} width={620} height={420} className="h-[320px] w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f2f5d]/80 to-transparent p-5 text-white">
                  <p className="text-sm font-semibold">{ui.guide}</p>
                </div>
              </div>
            )}
          </div>
          {cards.length > 0 && (
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {cards.map((card) => (
                <div key={card} className="flex items-center gap-3 rounded-2xl border border-[#d7e3f0] bg-[#f7fbff] p-4 text-sm font-semibold text-[#173b69]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#198fd0] shadow-sm"><PageIcon className="h-5 w-5" /></span>
                  {card}
                </div>
              ))}
            </div>
          )}
          <div className="mt-8 space-y-5 text-base leading-8 text-[#385778] md:text-lg md:leading-9">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-[#ecf7ff] p-5 text-center">
            <p className="text-lg font-bold text-[#173b69]">{ui.cta}</p>
            <a href="https://wa.me/905550501802" className="mt-4 inline-flex rounded-full bg-[#1cbf5d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#17a34e]">
              {ui.whatsapp}
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
