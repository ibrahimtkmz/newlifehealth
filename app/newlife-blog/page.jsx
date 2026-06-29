"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "NEWLIFE Blog",
    subtitle: "Tedavi hazırlığı, süreç yönetimi ve operasyon sonrası bakım için güncel içeriklerimizi keşfedin.",
    posts: [
      ["Saç Ekimi Sonrası İlk 10 Gün", "İyileşme döneminde dikkat edilmesi gereken temel bakım adımları."],
      ["Hollywood Smile Hakkında Bilmeniz Gerekenler", "Tedavi aşamaları, süreç süresi ve beklenti yönetimi rehberi."],
      ["Sağlık Turizmi İçin İstanbul Rehberi", "Tedavi planı ile şehir deneyimini birlikte optimize etmenin yolları."]
    ],
    blogLabel: "BLOG",
    newContentTag: "Yeni İçerikler",
    updateTitle: "Sağlık turizmi rehberleri her hafta güncellenir",
    updateText: "Operasyon öncesi hazırlık, İstanbul'da konforlu konaklama, beslenme önerileri ve sonrası bakım adımlarıyla ilgili pratik içerikleri düzenli olarak yayınlıyoruz."
  },
  en: {
    title: "NEWLIFE Blog",
    subtitle: "Discover our latest content for treatment preparation, process management, and post-operation care.",
    posts: [
      ["First 10 Days After Hair Transplant", "Key care steps to follow during the recovery period."],
      ["What You Need to Know About Hollywood Smile", "A guide to treatment stages, process duration, and expectation management."],
      ["Istanbul Guide for Health Tourism", "Ways to optimize your treatment plan alongside the city experience."]
    ],
    blogLabel: "BLOG",
    newContentTag: "New Content",
    updateTitle: "Health tourism guides updated every week",
    updateText: "We regularly publish practical content on pre-operation preparation, comfortable accommodation in Istanbul, nutrition tips, and post-care steps."
  },
  ru: {
    title: "NEWLIFE Блог",
    subtitle: "Откройте для себя наши актуальные материалы по подготовке к лечению, управлению процессом и послеоперационному уходу.",
    posts: [
      ["Первые 10 дней после пересадки волос", "Ключевые шаги по уходу в период восстановления."],
      ["Что нужно знать о голливудской улыбке", "Руководство по этапам лечения, срокам и управлению ожиданиями."],
      ["Путеводитель по Стамбулу для медицинского туризма", "Как совместить план лечения с городскими впечатлениями."]
    ],
    blogLabel: "БЛОГ",
    newContentTag: "Новые материалы",
    updateTitle: "Путеводители по медицинскому туризму обновляются каждую неделю",
    updateText: "Мы регулярно публикуем практические материалы о подготовке к операции, комфортном проживании в Стамбуле, советах по питанию и послеоперационном уходе."
  },
  ar: {
    title: "مدونة NEWLIFE",
    subtitle: "اكتشف محتوياتنا الحديثة للتحضير للعلاج وإدارة العملية والرعاية بعد العملية.",
    posts: [
      ["أول 10 أيام بعد زراعة الشعر", "خطوات العناية الأساسية التي يجب اتباعها خلال فترة التعافي."],
      ["ما تحتاج معرفته عن ابتسامة هوليوود", "دليل لمراحل العلاج ومدة العملية وإدارة التوقعات."],
      ["دليل إسطنبول للسياحة الصحية", "طرق تحسين خطة علاجك جنباً إلى جنب مع تجربة المدينة."]
    ],
    blogLabel: "مدونة",
    newContentTag: "محتوى جديد",
    updateTitle: "أدلة السياحة الصحية تُحدَّث كل أسبوع",
    updateText: "ننشر بانتظام محتوى عملياً حول التحضير قبل العملية والإقامة المريحة في إسطنبول ونصائح التغذية وخطوات الرعاية بعد العملية."
  }
};

export default function NewlifeBlogPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="grid gap-4 sm:grid-cols-3">
        {t.posts.map(([title, text]) => (
          <article key={title} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#3a0ca3]">{t.blogLabel}</p>
            <h3 className="mt-2 text-lg font-semibold text-[#1A1A1A]">{title}</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">{text}</p>
          </article>
        ))}
      </div>

      <section className="mt-8 rounded-3xl border border-[#1A1A1A]/10 bg-gradient-to-r from-[#0C2E63] to-[#3a0ca3] p-6 text-white sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">{t.newContentTag}</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{t.updateTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/85">{t.updateText}</p>
      </section>
    </InnerPageLayout>
  );
}
