"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "Blog",
    subtitle: "Tedavi planlaması, seyahat hazırlığı ve operasyon sonrası süreçler için güvenilir ve pratik içerikler.",
    posts: [
      { title: "Sağlık Turizmine Hazırlık Rehberi", excerpt: "Türkiye'ye gelmeden önce rapor hazırlığı, uçuş planı, ilaç düzeni ve süreç takibi için kapsamlı bir kontrol listesi." },
      { title: "Saç Ekimi Sonrası İlk 7 Gün", excerpt: "Ödem yönetimi, yıkama protokolü ve günlük yaşam dönüşünü doğru yönetmek için kritik bakım adımları." },
      { title: "Dijital Gülüş Tasarımı Nedir?", excerpt: "Tedavi başlamadan önce beklenen estetik sonucu simüle eden dijital planlama yaklaşımının avantajları." }
    ]
  },
  en: {
    title: "Blog",
    subtitle: "Reliable and practical insights for treatment planning, travel preparation, and post-procedure recovery.",
    posts: [
      { title: "Medical Tourism Preparation Guide", excerpt: "A complete checklist for records, travel planning, medication setup, and process readiness before coming to Turkey." },
      { title: "First 7 Days After Hair Transplant", excerpt: "Key care actions for swelling control, washing protocol, and a safe return to daily routine." },
      { title: "What Is Digital Smile Design?", excerpt: "How modern simulation tools help predict aesthetic outcomes before treatment starts." }
    ]
  },
  ru: {
    title: "Блог",
    subtitle: "Практичные и надежные материалы по планированию лечения, поездке и восстановлению после процедур.",
    posts: [
      { title: "Подготовка к медицинскому туризму", excerpt: "Подробный чек-лист по документам, перелету, медикаментам и организационным этапам до приезда в Турцию." },
      { title: "Первые 7 дней после пересадки волос", excerpt: "Важные рекомендации по уходу: контроль отека, режим мытья и безопасное возвращение к привычной активности." },
      { title: "Что такое цифровой дизайн улыбки?", excerpt: "Как цифровое моделирование помогает заранее увидеть предполагаемый эстетический результат." }
    ]
  }
};

export default function BlogPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-4">
        {t.posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-5">
            <h2 className="text-lg font-semibold text-[#1A1A1A]">{post.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/75">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </InnerPageLayout>
  );
}
