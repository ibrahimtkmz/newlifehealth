"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";
import { Calendar, Clock, ArrowRight, BookOpen, Scissors, Smile, Sparkles, Activity, Plane } from "lucide-react";

const CONTENT = {
  tr: {
    title: "Blog",
    subtitle: "Tedavi planlamasi, seyahat hazirligi ve operasyon sonrasi surecler icin guvenilir ve pratik icerikler.",
    featuredLabel: "One Cikan",
    allPostsLabel: "Tum Yazilar",
    readMore: "Devamini Oku",
    minRead: "dk okuma",
    categories: {
      preparation: "Hazirlik",
      hairTransplant: "Sac Ekimi",
      dental: "Dis Estetigi",
      plastic: "Plastik Cerrahi",
      bariatric: "Obezite",
      travel: "Seyahat"
    },
    featured: {
      title: "Saglik Turizmine Hazirlik Rehberi",
      excerpt: "Turkiye'ye gelmeden once rapor hazirligi, ucus plani, ilac duzeni ve surec takibi icin kapsamli bir kontrol listesi. Adim adim hazirlik sureci.",
      category: "preparation",
      date: "15 Mart 2024",
      readTime: "8"
    },
    posts: [
      {
        title: "Sac Ekimi Sonrasi Ilk 7 Gun",
        excerpt: "Odem yonetimi, yikama protokolu ve gunluk yasam donusunu dogru yonetmek icin kritik bakim adimlari.",
        category: "hairTransplant",
        date: "10 Mart 2024",
        readTime: "6"
      },
      {
        title: "Dijital Gulus Tasarimi Nedir?",
        excerpt: "Tedavi baslamadan once beklenen estetik sonucu simule eden dijital planlama yaklasiminin avantajlari.",
        category: "dental",
        date: "5 Mart 2024",
        readTime: "5"
      },
      {
        title: "Burun Estetigi: Beklentiler ve Gercekler",
        excerpt: "Rinoplasti operasyonu oncesi bilmeniz gerekenler, iyilesme sureci ve dogal sonuclar icin ipuclari.",
        category: "plastic",
        date: "28 Subat 2024",
        readTime: "7"
      },
      {
        title: "Tup Mide Ameliyati Sonrasi Beslenme",
        excerpt: "Operasyon sonrasi beslenme programi, vitamin takviyeleri ve saglikli yasam aliskanliklari.",
        category: "bariatric",
        date: "20 Subat 2024",
        readTime: "6"
      },
      {
        title: "Istanbul'da Tedavi Tatili",
        excerpt: "Saglik turizmi ve kulturel kesfin birlesimi: tedavi surecinde Istanbul'un keyifini cikarin.",
        category: "travel",
        date: "15 Subat 2024",
        readTime: "4"
      },
      {
        title: "FUE vs DHI: Hangi Teknik Size Uygun?",
        excerpt: "Iki populer sac ekimi tekniğinin karsilastirilmasi, avantajlari ve dezavantajlari.",
        category: "hairTransplant",
        date: "10 Subat 2024",
        readTime: "5"
      }
    ],
    tipsTitle: "Hizli Ipuclari",
    tips: [
      "Tedaviden 2 hafta once kan sulandirici ilaclarinizi kesin",
      "Pasaportunuzun gecerlilik suresini kontrol edin",
      "Rahat kiyafetler ve slip-on ayakkabilar tercih edin",
      "Tibbi belgelerinizi dijital ortamda yedekleyin"
    ]
  },
  en: {
    title: "Blog",
    subtitle: "Reliable and practical insights for treatment planning, travel preparation, and post-procedure recovery.",
    featuredLabel: "Featured",
    allPostsLabel: "All Posts",
    readMore: "Read More",
    minRead: "min read",
    categories: {
      preparation: "Preparation",
      hairTransplant: "Hair Transplant",
      dental: "Dental",
      plastic: "Plastic Surgery",
      bariatric: "Bariatric",
      travel: "Travel"
    },
    featured: {
      title: "Medical Tourism Preparation Guide",
      excerpt: "A complete checklist for records, travel planning, medication setup, and process readiness before coming to Turkey. Step-by-step preparation process.",
      category: "preparation",
      date: "March 15, 2024",
      readTime: "8"
    },
    posts: [
      {
        title: "First 7 Days After Hair Transplant",
        excerpt: "Key care actions for swelling control, washing protocol, and a safe return to daily routine.",
        category: "hairTransplant",
        date: "March 10, 2024",
        readTime: "6"
      },
      {
        title: "What Is Digital Smile Design?",
        excerpt: "How modern simulation tools help predict aesthetic outcomes before treatment starts.",
        category: "dental",
        date: "March 5, 2024",
        readTime: "5"
      },
      {
        title: "Rhinoplasty: Expectations vs Reality",
        excerpt: "What you need to know before nose surgery, recovery process, and tips for natural results.",
        category: "plastic",
        date: "February 28, 2024",
        readTime: "7"
      },
      {
        title: "Nutrition After Gastric Sleeve Surgery",
        excerpt: "Post-operative nutrition program, vitamin supplements, and healthy lifestyle habits.",
        category: "bariatric",
        date: "February 20, 2024",
        readTime: "6"
      },
      {
        title: "Treatment Vacation in Istanbul",
        excerpt: "The fusion of medical tourism and cultural exploration: enjoy Istanbul during your treatment.",
        category: "travel",
        date: "February 15, 2024",
        readTime: "4"
      },
      {
        title: "FUE vs DHI: Which Technique Is Right for You?",
        excerpt: "Comparison of two popular hair transplant techniques, their advantages and disadvantages.",
        category: "hairTransplant",
        date: "February 10, 2024",
        readTime: "5"
      }
    ],
    tipsTitle: "Quick Tips",
    tips: [
      "Stop blood thinning medications 2 weeks before treatment",
      "Check your passport validity",
      "Choose comfortable clothes and slip-on shoes",
      "Backup your medical records digitally"
    ]
  },
  ru: {
    title: "Блог",
    subtitle: "Практичные и надежные материалы по планированию лечения, поездке и восстановлению после процедур.",
    featuredLabel: "Рекомендуемое",
    allPostsLabel: "Все статьи",
    readMore: "Читать далее",
    minRead: "мин чтения",
    categories: {
      preparation: "Подготовка",
      hairTransplant: "Пересадка волос",
      dental: "Стоматология",
      plastic: "Пластика",
      bariatric: "Бариатрия",
      travel: "Путешествия"
    },
    featured: {
      title: "Руководство по подготовке к медицинскому туризму",
      excerpt: "Подробный чек-лист по документам, перелету, медикаментам и организационным этапам до приезда в Турцию. Пошаговый процесс подготовки.",
      category: "preparation",
      date: "15 марта 2024",
      readTime: "8"
    },
    posts: [
      {
        title: "Первые 7 дней после пересадки волос",
        excerpt: "Важные рекомендации по уходу: контроль отека, режим мытья и безопасное возвращение к привычной активности.",
        category: "hairTransplant",
        date: "10 марта 2024",
        readTime: "6"
      },
      {
        title: "Что такое цифровой дизайн улыбки?",
        excerpt: "Как цифровое моделирование помогает заранее увидеть предполагаемый эстетический результат.",
        category: "dental",
        date: "5 марта 2024",
        readTime: "5"
      },
      {
        title: "Ринопластика: ожидания и реальность",
        excerpt: "Что нужно знать перед операцией на носу, процесс восстановления и советы для естественного результата.",
        category: "plastic",
        date: "28 февраля 2024",
        readTime: "7"
      },
      {
        title: "Питание после рукавной гастрэктомии",
        excerpt: "Программа питания после операции, витаминные добавки и привычки здорового образа жизни.",
        category: "bariatric",
        date: "20 февраля 2024",
        readTime: "6"
      },
      {
        title: "Лечебный отдых в Стамбуле",
        excerpt: "Сочетание медицинского туризма и культурного отдыха: наслаждайтесь Стамбулом во время лечения.",
        category: "travel",
        date: "15 февраля 2024",
        readTime: "4"
      },
      {
        title: "FUE vs DHI: какая техника вам подходит?",
        excerpt: "Сравнение двух популярных техник пересадки волос, их преимущества и недостатки.",
        category: "hairTransplant",
        date: "10 февраля 2024",
        readTime: "5"
      }
    ],
    tipsTitle: "Быстрые советы",
    tips: [
      "Прекратите прием разжижающих кровь препаратов за 2 недели до лечения",
      "Проверьте срок действия паспорта",
      "Выбирайте удобную одежду и обувь без шнурков",
      "Сделайте резервную копию медицинских документов в цифровом виде"
    ]
  }
};

const categoryIcons = {
  preparation: BookOpen,
  hairTransplant: Scissors,
  dental: Smile,
  plastic: Sparkles,
  bariatric: Activity,
  travel: Plane
};

const categoryColors = {
  preparation: "bg-blue-100 text-blue-800",
  hairTransplant: "bg-cyan-100 text-cyan-800",
  dental: "bg-violet-100 text-violet-800",
  plastic: "bg-pink-100 text-pink-800",
  bariatric: "bg-emerald-100 text-emerald-800",
  travel: "bg-amber-100 text-amber-800"
};

export default function BlogPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-10">
        {/* Featured Post */}
        <section>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{t.featuredLabel}</p>
          <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#3a0ca3] to-[#f72585] p-6 text-white sm:p-8">
            <div className="relative z-10">
              <span className={`inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur`}>
                <BookOpen className="h-3.5 w-3.5" />
                {t.categories[t.featured.category]}
              </span>
              <h2 className="mt-4 text-xl font-semibold sm:text-2xl">{t.featured.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">{t.featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-white/70">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {t.featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {t.featured.readTime} {t.minRead}
                </span>
              </div>
              <button className="mt-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#3a0ca3] transition hover:bg-white/90">
                {t.readMore}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        </section>

        {/* All Posts */}
        <section>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{t.allPostsLabel}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.posts.map((post) => {
              const Icon = categoryIcons[post.category];
              const colorClass = categoryColors[post.category];
              return (
                <article key={post.title} className="group flex flex-col rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${colorClass}`}>
                    <Icon className="h-3 w-3" />
                    {t.categories[post.category]}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-[#1A1A1A] group-hover:text-[#3a0ca3]">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#1A1A1A]/70">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-[#1A1A1A]/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime} {t.minRead}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-[#f8961e]/5 p-5 sm:p-6">
          <h2 className="mb-4 font-semibold text-[#1A1A1A]">{t.tipsTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.tips.map((tip, index) => (
              <div key={tip} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm text-[#1A1A1A]/80">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
