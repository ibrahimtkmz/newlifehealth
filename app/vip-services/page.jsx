"use client";

import InnerPageLayout from "../components/InnerPageLayout";
import { useLanguage } from "../components/LanguageProvider";
import { Plane, Hotel, Car, Languages, Stethoscope, HeartPulse, Phone, Crown, CheckCircle2 } from "lucide-react";

const CONTENT = {
  tr: {
    title: "VIP Hizmetler",
    subtitle: "Turkiye yolculugunuzun her adiminda konfor, hiz ve kisisel koordinasyonu bir araya getiren premium hasta deneyimi.",
    processTitle: "VIP Surecimiz",
    steps: [
      {
        icon: Phone,
        title: "On Hazirlik",
        description: "Online konsultasyon, dosya analizi ve medikal uygunluk degerlendirmesi. Kisisellestirilmis tedavi plani olusturma."
      },
      {
        icon: Plane,
        title: "Ulasim Planlamasi",
        description: "Ucus sonrasi karsilama, ozel arac transferi ve otele yerlesim destegi. Havalimaninda VIP karsılama."
      },
      {
        icon: Stethoscope,
        title: "Operasyon Gunu",
        description: "Tercuman, danisman ve klinik koordinatoru ile kesintisiz surec. Tam zamanlı hasta refakati."
      },
      {
        icon: Hotel,
        title: "Iyilesme Konforu",
        description: "5 yildizli otel konaklamasi, doktor kontrol takvimi, ilac plani ve kisiye uygun dinlenme onerileri."
      },
      {
        icon: HeartPulse,
        title: "Uzun Donem Takip",
        description: "Ulkenize dondukten sonra foto/video bazli uzaktan kontrol ve danismanlik. Omur boyu destek."
      }
    ],
    servicesTitle: "Dahil Olan Hizmetler",
    services: [
      { icon: Car, title: "VIP Transfer", description: "Luks araclarla havaalani-otel-hastane transferi" },
      { icon: Hotel, title: "5 Yildizli Konaklama", description: "Seckin otellerde konforlu odalar" },
      { icon: Languages, title: "Tercuman Destegi", description: "7/24 profesyonel tercuman esligı" },
      { icon: Crown, title: "Ozel Hasta Koordinatoru", description: "Size ozel atanmis hasta temsilcisi" }
    ],
    packagesTitle: "VIP Paketlerimiz",
    packages: [
      {
        name: "Silver",
        features: ["Havaalani transferi", "3 gece 4 yildizli otel", "Tercuman destegi", "Tedavi koordinasyonu", "Uzaktan takip"]
      },
      {
        name: "Gold",
        features: ["VIP havaalani karsilama", "5 gece 5 yildizli otel", "7/24 tercuman", "Kisisel koordinator", "Istanbul turu", "Genisletilmis takip"]
      },
      {
        name: "Platinum",
        features: ["Ozel jet transfer opsiyonu", "Suite otel konaklamasi", "7/24 ozel asistan", "Luks arac kiralama", "Ozel sef hizmeti", "VIP saglik sigortasi", "Omur boyu takip"]
      }
    ],
    ctaTitle: "VIP Deneyiminizi Planlayin",
    ctaText: "Size ozel VIP paketinizi olusturmak icin hemen iletisime gecin."
  },
  en: {
    title: "VIP Services",
    subtitle: "A premium patient experience combining comfort, speed, and personalized coordination throughout your Turkey journey.",
    processTitle: "Our VIP Process",
    steps: [
      {
        icon: Phone,
        title: "Pre-Arrival Preparation",
        description: "Online consultation, medical file review, and eligibility assessment. Creating your personalized treatment plan."
      },
      {
        icon: Plane,
        title: "Travel Logistics",
        description: "Airport greeting, private transfers, and assisted hotel check-in. VIP welcome at the airport."
      },
      {
        icon: Stethoscope,
        title: "Procedure Day",
        description: "Interpreter, advisor, and clinic coordinator support in one seamless flow. Full-time patient escort."
      },
      {
        icon: Hotel,
        title: "Recovery Comfort",
        description: "5-star hotel accommodation, structured doctor checks, medication planning, and tailored rest guidance."
      },
      {
        icon: HeartPulse,
        title: "Long-Term Follow-Up",
        description: "Remote photo/video monitoring and guidance after you return home. Lifetime support."
      }
    ],
    servicesTitle: "Included Services",
    services: [
      { icon: Car, title: "VIP Transfer", description: "Airport-hotel-hospital transfer in luxury vehicles" },
      { icon: Hotel, title: "5-Star Accommodation", description: "Comfortable rooms in premium hotels" },
      { icon: Languages, title: "Interpreter Support", description: "24/7 professional interpreter assistance" },
      { icon: Crown, title: "Personal Coordinator", description: "Dedicated patient representative assigned to you" }
    ],
    packagesTitle: "Our VIP Packages",
    packages: [
      {
        name: "Silver",
        features: ["Airport transfer", "3 nights 4-star hotel", "Interpreter support", "Treatment coordination", "Remote follow-up"]
      },
      {
        name: "Gold",
        features: ["VIP airport greeting", "5 nights 5-star hotel", "24/7 interpreter", "Personal coordinator", "Istanbul tour", "Extended follow-up"]
      },
      {
        name: "Platinum",
        features: ["Private jet transfer option", "Suite hotel accommodation", "24/7 personal assistant", "Luxury car rental", "Private chef service", "VIP health insurance", "Lifetime follow-up"]
      }
    ],
    ctaTitle: "Plan Your VIP Experience",
    ctaText: "Contact us to create your personalized VIP package."
  },
  ru: {
    title: "VIP Услуги",
    subtitle: "Премиальный формат сопровождения, объединяющий комфорт, скорость и персональную координацию на всех этапах поездки.",
    processTitle: "Наш VIP процесс",
    steps: [
      {
        icon: Phone,
        title: "Подготовка до приезда",
        description: "Онлайн-консультация, анализ меддокументов и оценка показаний. Создание персонального плана лечения."
      },
      {
        icon: Plane,
        title: "Логистика",
        description: "Встреча в аэропорту, индивидуальный трансфер и помощь при заселении. VIP-прием в аэропорту."
      },
      {
        icon: Stethoscope,
        title: "День процедуры",
        description: "Переводчик, персональный менеджер и координатор клиники в едином процессе. Постоянное сопровождение пациента."
      },
      {
        icon: Hotel,
        title: "Комфортное восстановление",
        description: "Проживание в 5-звездочном отеле, график осмотров, план препаратов и персональные рекомендации."
      },
      {
        icon: HeartPulse,
        title: "Долгосрочное наблюдение",
        description: "Дистанционный контроль по фото/видео после возвращения домой. Пожизненная поддержка."
      }
    ],
    servicesTitle: "Включенные услуги",
    services: [
      { icon: Car, title: "VIP Трансфер", description: "Трансфер аэропорт-отель-клиника на люксовых автомобилях" },
      { icon: Hotel, title: "5-звездочное проживание", description: "Комфортные номера в премиальных отелях" },
      { icon: Languages, title: "Переводчик", description: "Круглосуточная помощь профессионального переводчика" },
      { icon: Crown, title: "Личный координатор", description: "Персональный представитель, закрепленный за вами" }
    ],
    packagesTitle: "Наши VIP пакеты",
    packages: [
      {
        name: "Silver",
        features: ["Трансфер из аэропорта", "3 ночи в 4-звездочном отеле", "Поддержка переводчика", "Координация лечения", "Удаленное наблюдение"]
      },
      {
        name: "Gold",
        features: ["VIP-встреча в аэропорту", "5 ночей в 5-звездочном отеле", "Переводчик 24/7", "Личный координатор", "Тур по Стамбулу", "Расширенное наблюдение"]
      },
      {
        name: "Platinum",
        features: ["Опция частного джета", "Проживание в сьюте", "Личный ассистент 24/7", "Аренда люксового авто", "Личный повар", "VIP медицинская страховка", "Пожизненное наблюдение"]
      }
    ],
    ctaTitle: "Спланируйте ваш VIP опыт",
    ctaText: "Свяжитесь с нами для создания персонального VIP пакета."
  }
};

export default function VipServicesPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang] || CONTENT.tr;

  return (
    <InnerPageLayout title={t.title} subtitle={t.subtitle}>
      <div className="space-y-10">
        {/* Process Steps */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.processTitle}</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#3a0ca3] to-[#4cc9f0] sm:block" />
            <div className="space-y-4">
              {t.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex gap-4 sm:gap-6">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3a0ca3] to-[#f72585] text-white shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 rounded-2xl bg-[#FBFBFB] p-5">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-xs font-bold text-[#D4AF37]">{index + 1}</span>
                        <h3 className="font-semibold text-[#1A1A1A]">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#1A1A1A]/75">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Included Services */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.servicesTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="flex items-start gap-4 rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10">
                    <Icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">{service.title}</h3>
                    <p className="mt-1 text-sm text-[#1A1A1A]/70">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Packages */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[#1A1A1A]">{t.packagesTitle}</h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {t.packages.map((pkg, index) => (
              <div 
                key={pkg.name} 
                className={`rounded-2xl border p-6 ${
                  index === 1 
                    ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/5 to-[#f8961e]/5 ring-2 ring-[#D4AF37]/20' 
                    : index === 2 
                    ? 'border-[#3a0ca3]/30 bg-gradient-to-br from-[#3a0ca3]/5 to-[#f72585]/5' 
                    : 'border-[#1A1A1A]/10 bg-white'
                }`}
              >
                <h3 className={`text-xl font-bold ${
                  index === 1 ? 'text-[#D4AF37]' : index === 2 ? 'text-[#3a0ca3]' : 'text-[#1A1A1A]'
                }`}>
                  {pkg.name}
                </h3>
                <ul className="mt-4 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[#1A1A1A]/80">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${
                        index === 1 ? 'text-[#D4AF37]' : index === 2 ? 'text-[#3a0ca3]' : 'text-[#1A1A1A]/50'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-r from-[#3a0ca3] to-[#f72585] p-6 text-white sm:p-8">
          <h2 className="text-xl font-semibold sm:text-2xl">{t.ctaTitle}</h2>
          <p className="mt-2 text-white/85">{t.ctaText}</p>
        </section>
      </div>
    </InnerPageLayout>
  );
}
