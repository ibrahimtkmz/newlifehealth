"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  BookOpenText,
  Download,
  FileVideo,
  Landmark,
  MapPinned,
  Microscope,
  Scale,
  ShieldCheck,
  Sparkles,
  TableProperties,
} from "lucide-react";
import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";

const CONTENT = {
  tr: {
    title: "Neden Türkiye?",
    subtitle: "Türkiye'nin medikal turizmde neden küresel bir referans noktası haline geldiğini; tarih, bilim, teknoloji, ekonomi ve lüks hasta deneyimi ekseninde detaylandıran kapsamlı rehber.",
    readTime: "Tahmini okuma süresi: 35 dakika",
    downloadLabel: "Bu rehberi PDF olarak indir",
    tocTitle: "İçindekiler",
    ctaTitle: "Tedavi Yolculuğunuzu New Life Health ile Planlayın",
    ctaText: "Kliniğinizi, doktor eşleşmenizi, konaklamanızı ve transfer planınızı tek bir uzman ekip ile kişiselleştirin.",
    ctaPrimary: "Ücretsiz Tedavi Planı Al",
    ctaSecondary: "İletişime Geç",
    sections: [
      {
        id: "historical-authority",
        icon: Landmark,
        title: "1) Tarihsel ve Coğrafi Otorite",
        paragraphs: [
          "Türkiye'nin sağlık hafızası sadece modern hastanelerle başlamaz; bu coğrafya, insanlığın tedavi anlayışını şekillendiren en eski merkezlerden birine ev sahipliği yapar. Bergama Asklepion'u, tıbbi bakımın bir bina değil bir ekosistem olduğunu gösteren erken dönem bir modeldir.",
          "Coğrafi düzlemde Türkiye'nin gücü, üç kıtanın kesişiminde bulunmasından gelir. İstanbul'dan Avrupa, Orta Doğu, Kuzey Afrika ve Orta Asya'ya kısa uçuş süreleri; tedavinin lojistik maliyetini düşürür."
        ]
      },
      {
        id: "academic-excellence",
        icon: Microscope,
        title: "2) Akademik ve Cerrahi Mükemmeliyet",
        paragraphs: [
          "Türkiye'de uzman hekimlik yolculuğu rekabetçi ve uzun bir eğitimden geçer. Yüksek vaka hacmi, cerrahların pratik beceri ve karar hızını artırır.",
          "Robotik cerrahi, görüntüleme destekli planlama ve dijital simülasyon teknolojileri Türkiye'de yaygın olarak kullanılmaktadır."
        ]
      },
      {
        id: "infrastructure",
        icon: ShieldCheck,
        title: "3) Hastane Altyapısı ve Akreditasyonlar",
        paragraphs: [
          "JCI gibi uluslararası akreditasyonlar, bir hastanenin sadece iyi niyetini değil kanıta dayalı süreç yönetimini ortaya koyar.",
          "Akıllı hastane konsepti, İstanbul ve diğer büyük şehirlerde gerçek bir rekabet alanına dönüşmüştür."
        ]
      }
    ]
  },
  en: {
    title: "Why Turkey?",
    subtitle: "A comprehensive guide detailing why Turkey has become a global reference point in medical tourism across history, science, technology, and luxury patient experience.",
    readTime: "Estimated reading time: 35 minutes",
    downloadLabel: "Download this guide as PDF",
    tocTitle: "Table of Contents",
    ctaTitle: "Plan Your Treatment Journey with New Life Health",
    ctaText: "Personalize your clinic, doctor match, accommodation, and transfer plan with a single expert team.",
    ctaPrimary: "Get Free Treatment Plan",
    ctaSecondary: "Contact Us",
    sections: [
      {
        id: "historical-authority",
        icon: Landmark,
        title: "1) Historical and Geographical Authority",
        paragraphs: [
          "Turkey's health memory doesn't just start with modern hospitals; this geography hosts one of the oldest centers shaping humanity's understanding of treatment.",
          "Turkey's strength on a geographical plane comes from being at the intersection of three continents. Short flight times from Istanbul to Europe, Middle East, North Africa, and Central Asia reduce logistic costs."
        ]
      },
      {
        id: "academic-excellence",
        icon: Microscope,
        title: "2) Academic and Surgical Excellence",
        paragraphs: [
          "The journey to becoming a specialist physician in Turkey involves a competitive and long education. High case volumes increase surgeons' practical skills and decision speed.",
          "Robotic surgery, imaging-supported planning, and digital simulation technologies are widely used in Turkey."
        ]
      },
      {
        id: "infrastructure",
        icon: ShieldCheck,
        title: "3) Hospital Infrastructure and Accreditations",
        paragraphs: [
          "International accreditations like JCI demonstrate a hospital's evidence-based process management, not just good intentions.",
          "The smart hospital concept has turned into a real competitive area in Istanbul and other major cities."
        ]
      }
    ]
  },
  ru: {
    title: "Почему Турция?",
    subtitle: "Всеобъемлющее руководство, подробно объясняющее, почему Турция стала глобальным ориентиром в медицинском туризме сквозь призму истории, науки, технологий и роскошного опыта пациентов.",
    readTime: "Оценочное время чтения: 35 минут",
    downloadLabel: "Скачать это руководство в формате PDF",
    tocTitle: "Содержание",
    ctaTitle: "Спланируйте свое лечебное путешествие с New Life Health",
    ctaText: "Персонализируйте выбор клиники, врача, проживания и плана трансфера с одной командой экспертов.",
    ctaPrimary: "Получить бесплатный план лечения",
    ctaSecondary: "Связаться с нами",
    sections: [
      {
        id: "historical-authority",
        icon: Landmark,
        title: "1) Исторический и географический авторитет",
        paragraphs: [
          "Медицинская память Турции начинается не только с современных больниц; эта география является домом для одного из старейших центров, сформировавших понимание лечения человечеством.",
          "Сила Турции в географическом плане проистекает из ее расположения на пересечении трех континентов. Короткое время полета из Стамбула в Европу, на Ближний Восток, в Северную Африку и Центральную Азию снижает логистические расходы."
        ]
      },
      {
        id: "academic-excellence",
        icon: Microscope,
        title: "2) Академическое и хирургическое мастерство",
        paragraphs: [
          "Путь к становлению врачом-специалистом в Турции включает в себя конкурентное и долгое обучение. Большой объем случаев повышает практические навыки хирургов и скорость принятия решений.",
          "Роботизированная хирургия, планирование с поддержкой визуализации и технологии цифрового моделирования широко используются в Турции."
        ]
      },
      {
        id: "infrastructure",
        icon: ShieldCheck,
        title: "3) Больничная инфраструктура и аккредитации",
        paragraphs: [
          "Международные аккредитации, такие как JCI, демонстрируют управление процессами в больнице на основе доказательств, а не просто добрые намерения.",
          "Концепция «умной больницы» превратилась в реальную область конкуренции в Стамбуле и других крупных городах."
        ]
      }
    ]
  },
  ar: {
    title: "لماذا تركيا؟",
    subtitle: "دليل شامل يشرح لماذا أصبحت تركيا نقطة مرجعية عالمية في السياحة العلاجية عبر التاريخ والعلوم والتكنولوجيا وتجربة المرضى الفاخرة.",
    readTime: "وقت القراءة المقدر: 35 دقيقة",
    downloadLabel: "تحميل هذا الدليل كملف PDF",
    tocTitle: "جدول المحتويات",
    ctaTitle: "خطط لرحلتك العلاجية مع New Life Health",
    ctaText: "قم بتخصيص عيادتك، ومطابقة طبيبك، وإقامتك، وخطة نقلك مع فريق خبراء واحد.",
    ctaPrimary: "احصل على خطة علاج مجانية",
    ctaSecondary: "تواصل معنا",
    sections: [
      {
        id: "historical-authority",
        icon: Landmark,
        title: "1) السلطة التاريخية والجغرافية",
        paragraphs: [
          "لا تبدأ ذاكرة الصحة في تركيا بالمستشفيات الحديثة فحسب؛ تستضيف هذه الجغرافيا أحد أقدم المراكز التي شكلت فهم البشرية للعلاج.",
          "تأتي قوة تركيا على المستوى الجغرافي من كونها في ملتقى ثلاث قارات. أوقات الطيران القصيرة من اسطنبول إلى أوروبا والشرق الأوسط وشمال أفريقيا وآسيا الوسطى تقلل من التكاليف اللوجستية."
        ]
      },
      {
        id: "academic-excellence",
        icon: Microscope,
        title: "2) التميز الأكاديمي والجراحي",
        paragraphs: [
          "تتضمن رحلة التحول إلى طبيب أخصائي في تركيا تعليماً تنافسياً وطويلاً. تزيد أحجام الحالات المرتفعة من المهارات العملية للجراحين وسرعة اتخاذ القرار.",
          "تُستخدم الجراحة الروبوتية والتخطيط المدعوم بالتصوير وتقنيات المحاكاة الرقمية على نطاق واسع في تركيا."
        ]
      },
      {
        id: "infrastructure",
        icon: ShieldCheck,
        title: "3) البنية التحتية للمستشفيات والاعتمادات",
        paragraphs: [
          "تُظهر الاعتمادات الدولية مثل JCI إدارة العمليات القائمة على الأدلة في المستشفى، وليس مجرد النوايا الحسنة.",
          "تحول مفهوم المستشفى الذكي إلى منطقة تنافسية حقيقية في اسطنبول والمدن الكبرى الأخرى."
        ]
      }
    ]
  }
};

export default function WhyTurkeyPage() {
  const { lang } = useLanguage();
  const data = useMemo(() => CONTENT[lang] || CONTENT.tr, [lang]);

  return (
    <InnerPageLayout title={data.title} subtitle={data.subtitle}>
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/40">
                <BookOpenText size={16} />
                {data.tocTitle}
              </h3>
              <nav className="mt-4 flex flex-col gap-3">
                {data.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="text-sm font-medium text-[#1A1A1A]/60 transition hover:text-[#1A1A1A]">
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] py-3 text-sm font-semibold text-white transition hover:bg-[#333333]">
              <Download size={18} />
              {data.downloadLabel}
            </button>
          </div>
        </aside>

        <main className="space-y-16" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <p className="text-sm font-medium text-[#1A1A1A]/40 italic">{data.readTime}</p>
          
          {data.sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F5F5] text-[#1A1A1A]">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold md:text-3xl">{section.title}</h2>
                </div>
                <div className="space-y-4 text-base leading-8 text-[#1A1A1A]/80 md:text-lg md:leading-9">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            );
          })}

          <section className="space-y-4 rounded-3xl border border-[#1A1A1A]/10 bg-[#FBFBFB] p-6 md:p-8">
            <h2 className="text-2xl font-semibold md:text-3xl">{data.ctaTitle}</h2>
            <p className="text-base leading-7 md:text-lg">{data.ctaText}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#333333]">
                {data.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#1A1A1A]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#F5F5F5]"
              >
                {data.ctaSecondary}
              </Link>
            </div>
          </section>
        </main>
      </div>
    </InnerPageLayout>
  );
}
