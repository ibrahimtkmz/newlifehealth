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
    subtitle:
      "Türkiye'nin medikal turizmde neden küresel bir referans noktası haline geldiğini; tarih, bilim, teknoloji, ekonomi ve lüks hasta deneyimi ekseninde detaylandıran kapsamlı rehber.",
    readTime: "Tahmini okuma süresi: 35 dakika",
    downloadLabel: "Bu rehberi PDF olarak indir",
    tocTitle: "İçindekiler",
    ctaTitle: "Tedavi Yolculuğunuzu New Life Health ile Planlayın",
    ctaText:
      "Kliniğinizi, doktor eşleşmenizi, konaklamanızı ve transfer planınızı tek bir uzman ekip ile kişiselleştirin.",
    ctaPrimary: "Ücretsiz Tedavi Planı Al",
    ctaSecondary: "İletişime Geç",
    sections: [
      {
        id: "historical-authority",
        icon: Landmark,
        title: "1) Tarihsel ve Coğrafi Otorite",
        paragraphs: [
          "Türkiye'nin sağlık hafızası sadece modern hastanelerle başlamaz; bu coğrafya, insanlığın tedavi anlayışını şekillendiren en eski merkezlerden birine ev sahipliği yapar. Bergama Asklepion'u, tıbbi bakımın bir bina değil bir ekosistem olduğunu gösteren erken dönem bir modeldir: su terapileri, müzik, psikolojik destek ve fiziksel tedavi aynı çatı altında kurgulanmıştır. Bu yaklaşım bugün 'bütüncül sağlık' olarak yeniden konuşulurken, Anadolu bunu iki bin yıl önce pratik etmeye başlamıştı.",
          "Bizans döneminden Osmanlı darüşşifalarına kadar uzanan çizgi, tıbbın yalnızca teknik değil aynı zamanda etik bir alan olduğunu da kayıt altına alır. Süleymaniye ve Edirne darüşşifaları, hasta mahremiyeti, uzmanlaşmış hekim kadroları ve disiplinler arası bakım anlayışıyla döneminin ileri kurumlarıydı. Bu tarihsel birikim, günümüz Türkiye'sinde uluslararası hastaya sunulan modelin kültürel temelini oluşturur: tedavi, konaklama, iletişim ve takip tek bir deneyim olarak tasarlanır.",
          "Coğrafi düzlemde Türkiye'nin gücü, üç kıtanın kesişiminde bulunmasından gelir. İstanbul'dan Avrupa, Orta Doğu, Kuzey Afrika ve Orta Asya'ya kısa uçuş süreleri; tedavinin lojistik maliyetini düşürür, hasta ve refakatçi için seyahat yorgunluğunu azaltır. Bu, özellikle çok seanslı diş tedavileri, kontrol gerektiren estetik operasyonlar ve bariatrik cerrahi gibi alanlarda kritik bir avantajdır.",
          "Türk Hava Yolları'nın geniş uçuş ağı ve İstanbul Havalimanı'nın yüksek kapasitesi, medikal seyahati mevsimsel dalgalanmalardan daha az etkilenir hale getirir. Hastanın tedavi takvimini, uçuş bulunabilirliği değil klinik öncelik belirler. New Life Health'in planlama yaklaşımında bu durum; check-up, operasyon ve post-op kontrollerin tek bir zaman çizelgesinde optimize edilmesini mümkün kılar.",
          "Kısacası 'Why Turkey?' sorusunun ilk yanıtı fiyattan önce medeniyet ve erişilebilirliktir: Türkiye, hem tarihsel olarak sağlık üreten hem de coğrafi olarak sağlık yolculuğunu kolaylaştıran nadir destinasyonlardan biridir. Bu ikili güç, güvenin temelini oluşturur."
        ],
        keyTakeaways: [
          "Anadolu'da tıp geleneği antik dönemden bugüne kesintisiz bir kurumsal hafıza oluşturur.",
          "İstanbul'un lokasyonu tedaviye erişim süresini ve lojistik stresi azaltır.",
          "Uçuş altyapısı, klinik planlamayı daha esnek ve hasta lehine hale getirir."
        ],
        designNotes: {
          infographic: "Bergama'dan günümüze sağlık tarihini gösteren yatay timeline.",
          map: "İstanbul merkezli 4 saat/8 saat uçuş çemberi dünya haritası.",
          video: "[Video Placeholder #1] 'Medicine Across Civilizations: From Asklepion to Smart Hospitals'."
        }
      },
      {
        id: "academic-excellence",
        icon: Microscope,
        title: "2) Akademik ve Cerrahi Mükemmeliyet",
        paragraphs: [
          "Türkiye'de uzman hekimlik yolculuğu rekabetçi ve uzun bir eğitimden geçer. Tıp fakültesini tamamlayan hekimler, uzmanlık eğitimi için zorlu bir sınav sistemine girer ve ardından yüksek vaka hacmine sahip eğitim hastanelerinde yıllarca pratik yapar. Bu düzen, yalnızca teorik başarıyı değil, baskı altında karar alma, multidisipliner ekip yönetimi ve komplikasyonlarla baş etme becerisini de ölçer.",
          "Medikal turizm perspektifinden bakıldığında, Türkiye'nin en belirgin üstünlüğü vaka çeşitliliğidir. Diş rehabilitasyonundan rinoplastiye, revizyon estetiklerden ileri obezite cerrahisine kadar geniş bir portföyde yüksek hasta akışı; hekimlerin teknik reflekslerini keskinleştirir. Özellikle mikro-cerrahi, saç ekimi, yüz estetiği ve bariatrik prosedürlerde 'manual dexterity' olarak tanımlanan el becerisi, uluslararası hastalar tarafından sıklıkla referans gösterilen bir kalite parametresidir.",
          "Robotik cerrahi, görüntüleme destekli planlama ve dijital simülasyon teknolojileri Türkiye'de sadece büyük şehirlerde değil, seçkin özel hastane ağları içinde yaygın olarak kullanılmaktadır. da Vinci platformları, 3D tomografi destekli dental tasarım sistemleri, ileri laparoskopik kuleler ve hassas dozaj sağlayan radyocerrahi çözümleri; operasyon güvenliğini artırırken iyileşme süresini kısaltır.",
          "Akademik üretim tarafında Türk hekimlerin uluslararası kongre, yayın ve vaka sunumlarındaki görünürlüğü son yıllarda belirgin biçimde artmıştır. Bu görünürlük yalnızca prestij değil kalite standardizasyonu anlamına gelir: raporlama, protokol takibi, komplikasyon yönetimi ve hasta güvenliği metrikleri küresel dille konuşulur hale gelir.",
          "New Life Health, bu akademik gücü hasta tarafında anlaşılır bir dile çevirir. Hastalar için 'doktor seçimi' sadece unvana göre değil; prosedür odaklı vaka sayısı, revizyon yaklaşımı, iletişim tarzı ve post-op takip disiplinine göre değerlendirilir. Böylece hasta, klinik başarı olasılığı kadar deneyim kalitesini de optimize etmiş olur.",
          "Cerrahi mükemmeliyetin bir diğer ayağı kültürel esnekliktir. Türkiye'deki uluslararası hasta departmanları; İngilizce, Arapça, Rusça ve daha birçok dilde iletişim kurarak klinik talimatların doğru anlaşılmasını sağlar. Tedavi başarısında iletişim, teknik kadar kritiktir; doğru bilgilendirme, doğru beklenti yönetimi ve doğru takip davranışı doğrudan sonuca yansır."
        ],
        keyTakeaways: [
          "Yüksek vaka hacmi, cerrahların pratik beceri ve karar hızını artırır.",
          "Robotik ve dijital planlama altyapısı operasyon güvenliğiyle estetik hassasiyeti birlikte güçlendirir.",
          "İyi sonuç sadece iyi ameliyat değil, iyi iletişim ve iyi takip kombinasyonudur."
        ],
        designNotes: {
          infographic: "Uzmanlık eğitim yolu: tıp fakültesi → sınav → asistanlık → subspecialty.",
          map: "Türkiye'de öne çıkan cerrahi merkezlerin şehir bazlı dağılımı.",
          video: "[Video Placeholder #2] Cerrah röportajı: 'From Training to Precision Surgery'."
        }
      },
      {
        id: "infrastructure",
        icon: ShieldCheck,
        title: "3) Hastane Altyapısı ve Akreditasyonlar",
        paragraphs: [
          "Medikal turizmde güvenin omurgası yalnızca doktor değil; doktorun çalıştığı sistemdir. Türkiye'de uluslararası hasta kabul eden üst segment hastaneler, kalite kontrol, enfeksiyon yönetimi, acil müdahale kapasitesi ve dijital hasta güvenliği protokollerine ciddi yatırım yapar. Bu nedenle hasta açısından karar noktası 'hangi şehir?' sorusundan çok 'hangi kurum standardı?' sorusuna kaymaktadır.",
          "JCI gibi uluslararası akreditasyonlar, bir hastanenin sadece iyi niyetini değil kanıta dayalı süreç yönetimini ortaya koyar. Akreditasyon; ameliyathane sterilizasyonundan ilaç güvenliğine, hemşirelik bakımından hasta hakları dokümantasyonuna kadar çok katmanlı denetim anlamına gelir. Türkiye'nin bu alandaki kurum sayısı, ülkeyi küresel sağlık turizmi yarışında üst sıralarda tutan temel etkenlerden biridir.",
          "Akıllı hastane konsepti, İstanbul ve diğer büyük şehirlerde gerçek bir rekabet alanına dönüşmüştür. Yapay zeka destekli görüntü analizi, otomatik ilaç yönetimi, dijital konsültasyon panelleri, uzaktan takip uygulamaları ve entegre hasta portalları sayesinde süreçler hızlanır. Özellikle yurtdışından gelen hastalar için ameliyat öncesi hazırlık ve taburculuk sonrası takip, dijital altyapı sayesinde sınır ötesi sürdürülebilir hale gelir.",
          "Cerrahi teknolojide kullanılan cihaz çeşitliliği de belirleyicidir. da Vinci robotik platformu, Gamma Knife ve gelişmiş nöronavigasyon sistemleri, yüksek çözünürlüklü endoskopik ekipmanlar ve CAD/CAM destekli dental üretim hatları; birçok klinikte erişilebilir durumdadır. Bu çeşitlilik, hastayı tek bir teknolojiye mahkum etmez; kişisel endikasyona göre en doğru çözümün seçilmesine olanak tanır.",
          "New Life Health, iş ortaklığı geliştirdiği kurumları değerlendirirken yalnızca cihaz listesine bakmaz; ekip deneyimi, bakım standardı, acil durum senaryoları, yabancı hasta yönetimi ve şeffaf raporlama kapasitesini birlikte inceler. Böylece 'teknoloji var' iddiası, ölçülebilir hizmet kalitesiyle desteklenir."
        ],
        keyTakeaways: [
          "Akreditasyon, kaliteyi pazarlama söyleminden çıkarıp denetlenebilir standarda taşır.",
          "Akıllı hastane altyapısı uluslararası hastalar için tedavi sonrası takibi kolaylaştırır.",
          "Cihaz bolluğu değil doğru endikasyona doğru teknoloji seçimi gerçek kaliteyi belirler."
        ],
        designNotes: {
          infographic: "JCI benzeri kalite başlıklarını ikonlarla açıklayan kontrol paneli.",
          map: "İstanbul içinde akredite hastanelere VIP transfer rota örnekleri.",
          video: "[Video Placeholder #3] Klinik turu: ameliyathane, hasta odası, dijital takip merkezi."
        }
      },
      {
        id: "cost-performance",
        icon: TableProperties,
        title: "4) Ekonomik Analiz ve Fiyat/Performans Dengesi",
        paragraphs: [
          "Türkiye'nin maliyet avantajı çoğu zaman tek başına 'ucuzluk' olarak anlatılır; oysa gerçekte tablo daha sofistikedir. Avrupa ve ABD'de tedavi fiyatlarının yüksek olmasının nedeni sadece doktor ücreti değil; sigorta sistemleri, idari yükler, işletme maliyetleri ve iş gücü giderleridir. Türkiye, yüksek klinik kaliteyi daha verimli maliyet yapısıyla birleştirerek değer odaklı bir model sunar.",
          "Bu modelde hasta, aynı bütçe ile daha üst segment bir bakım deneyimi satın alabilir: daha merkezi konumda konaklama, özel transfer, çok dilli hasta koordinasyonu, ameliyat sonrası yakın takip ve gerektiğinde daha uzun konforlu iyileşme süresi. Yani tasarruf yalnızca faturada değil, toplam yolculuk kalitesinde gerçekleşir.",
          "New Life Health danışmanlığında maliyet analizi, paket fiyatı yerine toplam sahip olma maliyeti yaklaşımıyla yapılır. Ön görüşme, tanı testleri, operasyon, ilaçlar, kontrol seansları, transfer ve konaklama birlikte değerlendirilir. Bu yaklaşım, hastanın sürpriz masraf riskini azaltır ve karar vermeyi kolaylaştırır."
        ],
        table: {
          title: "Örnek Operasyon Maliyet Karşılaştırması (Temsilî Aralıklar)",
          columns: ["Prosedür", "ABD / Batı Avrupa", "Türkiye", "Tahmini Tasarruf"],
          rows: [
            ["All-on-4 Dental Rehabilitasyon", "$18,000 - $30,000", "$6,000 - $11,000", "%45 - %70"],
            ["FUE Saç Ekimi", "$8,000 - $16,000", "$2,000 - $4,500", "%55 - %80"],
            ["Rinoplasti", "$9,000 - $18,000", "$3,000 - $6,500", "%40 - %70"],
            ["Sleeve Gastrektomi", "$14,000 - $28,000", "$4,500 - $8,000", "%45 - %75"],
            ["Meme Estetiği (Aug./Lift)", "$10,000 - $20,000", "$3,500 - $7,000", "%40 - %70"]
          ]
        },
        keyTakeaways: [
          "Maliyet avantajı, kalite düşüşünden değil operasyonel verimlilikten doğar.",
          "Daha az ödeme; çoğu zaman daha kişiselleştirilmiş ve konforlu deneyim anlamına gelir.",
          "Doğru analiz paket fiyatı değil toplam yolculuk maliyeti üzerinden yapılmalıdır."
        ],
        designNotes: {
          infographic: "Fiyat/performans ekseninde Türkiye-ABD-AB karşılaştırma matrisi.",
          map: "İstanbul'da konaklama-hastane-havalimanı üçgenini gösteren erişim haritası.",
          video: "[Video Placeholder #4] Finans danışmanı anlatımı: 'How to evaluate true treatment value'."
        }
      },
      {
        id: "istanbul-destination",
        icon: MapPinned,
        title: "5) Bir Tedavi Destinasyonu Olarak İstanbul",
        paragraphs: [
          "İstanbul, tedavi destinasyonu kavramını yeniden tanımlar: burada sağlık yolculuğu steril ve soğuk bir süreç değil; iyi planlandığında psikolojik iyileşmeyi de destekleyen bir şehir deneyimine dönüşür. Boğaz hattında yürüyüş, kontrollü sosyal tempo, dengeli gastronomi seçenekleri ve kültürel zenginlik; operasyon sonrası dönemde hastanın moralini ve motivasyonunu artırır.",
          "Birçok uluslararası hasta için tedavi stresinin önemli bölümü belirsizlikten kaynaklanır. New Life Health bu belirsizliği azaltmak üzere 'tek temas noktası' modeli uygular: havaalanı karşılama, özel şoförlü transfer, check-in desteği, klinik randevu yönetimi, tercüman eşliği ve taburculuk sonrası koordinasyon tek ekip tarafından takip edilir.",
          "Lüks konaklama standardı sadece estetik bir tercih değildir; özellikle cerrahi sonrası konfor, hijyen, sessizlik ve beslenme planına erişim klinik sonucu etkileyebilir. Bu nedenle otel seçimi tedavi planının bir uzantısı olarak ele alınır. Hastanın hareket kapasitesi, kontrol randevu sıklığı ve refakatçi ihtiyacı dikkate alınarak lokasyon bazlı planlama yapılır.",
          "İstanbul'un avantajlarından biri de farklı profillere uygun iyileşme ritmi sunmasıdır. Kimileri için deniz manzaralı sakin bir dinlenme, kimileri için kültürel keşiflerle desteklenmiş kontrollü aktivite modeli daha uygundur. Önemli olan, klinik güvenlik sınırları içinde psikolojik iyi oluşu da tedavi planına dahil etmektir.",
          "Sonuç olarak İstanbul, yalnızca 'ameliyat olunacak şehir' değil, tedaviye anlam ve kalite katan bir yaşam sahnesidir. Doğru yönetildiğinde hasta, ülkeden sadece fiziksel bir sonuçla değil daha yüksek bir güven duygusuyla döner."
        ],
        keyTakeaways: [
          "İyileşme deneyimi, klinik süreç kadar konaklama ve şehir kurgusundan etkilenir.",
          "Tek temas noktası modeli uluslararası hastada stres ve hata olasılığını düşürür.",
          "İstanbul, lüks bakım ile kültürel deneyimi aynı çerçevede sunabilen az sayıdaki şehirden biridir."
        ],
        designNotes: {
          infographic: "48 saatlik örnek hasta yolculuğu: havalimanı → otel → klinik → kontrol.",
          map: "Lüks transfer rotaları: İstanbul Havalimanı - Beşiktaş/Şişli/Nişantaşı hastane aksı.",
          video: "[Video Placeholder #5] Hasta deneyimi hikayesi: 'My 5-day Treatment Journey in Istanbul'."
        }
      },
      {
        id: "regulation-rights",
        icon: Scale,
        title: "6) Sağlık Turizmi Mevzuatı ve Hasta Hakları",
        paragraphs: [
          "Uluslararası hasta için güven duygusunun temel bileşeni yasal çerçevedir. Türkiye'de sağlık turizmi faaliyetleri Sağlık Bakanlığı düzenlemeleri, kurum lisansları ve seyahat tarafında yetkili acenta yapılarıyla denetlenir. Bu çerçeve, 'kim hizmet veriyor?' sorusuna netlik getirerek hastanın kayıt dışı riskleri azaltmasına yardımcı olur.",
          "Yetkili kurumlarla çalışmanın en büyük avantajı, sürecin dokümante edilebilir olmasıdır. Tedavi planı, onam formları, fiyat kapsamı, komplikasyon yönetimi, kontrol randevuları ve iletişim kanalları yazılı şekilde paylaşılır. Şeffaflık, yalnızca etik bir ilke değil uyuşmazlık riskini azaltan pratik bir güvenlik mekanizmasıdır.",
          "Hasta hakları perspektifinde bilgilendirilmiş onam, mahremiyet ve açık fiyatlandırma üç kritik başlıktır. Hastanın ne yapılacağını, olası riskleri, alternatifleri ve beklenen iyileşme takvimini anlayarak karar vermesi esastır. New Life Health, iş ortaklarıyla bu süreçlerin çok dilli yürütülmesini önceliklendirir.",
          "Etik kodların bir diğer boyutu gerçekçi iletişimdir. Öncesi-sonrası görselleri, başarı oranları ve süre vaatleri; seçilmiş örnekler üzerinden abartılı biçimde sunulmamalıdır. Doğru danışmanlık, hastanın arzularını değil tıbbi uygunluğu merkeze alır. Bu yaklaşım kısa vadeli pazarlama avantajından daha değerlidir çünkü marka güvenini kalıcı hale getirir.",
          "Yasal uyumun nihai sonucu hasta için şudur: süreç öngörülebilir olur. Öngörülebilirlik ise korkuyu azaltır, karar kalitesini yükseltir ve tedaviye psikolojik hazırlığı güçlendirir."
        ],
        keyTakeaways: [
          "Yasal denetim, sağlık turizminde kalite kadar güvenlik filtresidir.",
          "Şeffaf sözleşme ve fiyatlandırma, uluslararası hastanın en önemli korunma aracıdır.",
          "Etik iletişim uzun vadede marka değerini ve klinik memnuniyeti artırır."
        ],
        designNotes: {
          infographic: "Hasta hakları kontrol listesi (onam, fiyat, takip, mahremiyet).",
          map: "Yasal hasta yolculuğu akışı: danışmanlık → sözleşme → tedavi → follow-up.",
          video: "[Video Placeholder #6] Sağlık hukuku uzmanı mini röportajı."
        }
      },
      {
        id: "specialties",
        icon: Sparkles,
        title: "7) Branş Bazlı Derin Analiz: Diş, Estetik, Obezite",
        paragraphs: [
          "Diş tedavilerinde Türkiye'nin küresel çekim merkezi olmasının üç nedeni vardır: dijital planlama kabiliyeti, yüksek estetik beklenti standardı ve hızlı teslimat ekosistemi. CAD/CAM tabanlı tasarım, 3D görüntüleme ve laboratuvar entegrasyonu sayesinde uluslararası hastalar kısa kalış sürelerinde fonksiyonel ve estetik açıdan yüksek sonuç alabilir.",
          "Estetik cerrahide Türkiye; doğal görünüm odaklı yaklaşımı, revizyon deneyimi ve multidisipliner planlamasıyla öne çıkar. Yüz estetiği, vücut şekillendirme ve meme cerrahisi gibi alanlarda sadece prosedür değil, oran-orantı estetiği ve uzun dönem iz yönetimi gibi detaylar klinik kararın merkezine alınır.",
          "Obezite cerrahisinde ise Türkiye'nin gücü, operasyon sonrası metabolik takibin sistematik kurgulanmasından gelir. Sleeve gastrektomi veya bypass gibi prosedürlerde başarı; ameliyat kadar beslenme danışmanlığı, psikolojik destek ve düzenli kontrol protokollerine bağlıdır. Üst düzey merkezler bu çok disiplinli modeli standart hale getirmiştir.",
          "Bu üç branşta ortak payda şudur: Türkiye hızlı üretim yapan bir pazar değil, yüksek hacimle uzmanlaşmış bir klinik ekosistemdir. Doğru merkez ve doğru hekimle eşleşen hasta için kalite, hız ve maliyet dengesi aynı anda sağlanabilir.",
          "New Life Health'in rolü burada stratejik hale gelir: hasta profiline göre branş bazlı klinik eşleştirme, ikinci görüş organizasyonu, şeffaf teklif yönetimi ve gerçekçi sonuç çerçevesi. Böylece hasta 'en ucuz' seçeneğe değil 'en doğru' seçeneğe yönlendirilir."
        ],
        keyTakeaways: [
          "Diş, estetik ve obezite cerrahisinde Türkiye'nin başarısı hacim + teknoloji + takip modelinden gelir.",
          "Yüksek başarı oranı, doğru hasta seçimi ve doğru merkez eşleşmesiyle mümkündür.",
          "Stratejik danışmanlık, klinik sonucu doğrudan etkileyen görünmez bir kalite katmanıdır."
        ],
        designNotes: {
          infographic: "3 branş için başarı parametreleri: planlama, operasyon, takip.",
          map: "Branşa göre merkez yoğunlukları ve transfer süreleri.",
          video: "[Video Placeholder #7] 3 doktorlu panel: dentistry, aesthetics, bariatrics."
        }
      }
    ]
  },
  en: {
    title: "Why Turkey?",
    subtitle:
      "A strategic deep-dive into why Turkey has become a global medical tourism benchmark across history, surgical excellence, technology, economics, and premium patient experience.",
    readTime: "Estimated reading time: 35 minutes",
    downloadLabel: "Download this guide as PDF",
    tocTitle: "Table of Contents",
    ctaTitle: "Plan Your Treatment Journey with New Life Health",
    ctaText:
      "Personalize your clinic match, surgeon shortlist, accommodation, and private transfer plan with one expert team.",
    ctaPrimary: "Get a Free Treatment Plan",
    ctaSecondary: "Contact Us",
    sections: [
      {
        id: "historical-authority",
        icon: Landmark,
        title: "1) Historical & Geographical Authority",
        paragraphs: [
          "Turkey's healthcare story does not begin with modern hospitals; it begins in one of the oldest therapeutic landscapes in human civilization. The Asklepion of Pergamon represented a proto-integrated care model where water therapy, mental restoration, physical rehabilitation, and physician guidance were orchestrated together. What the world now calls holistic healthcare had practical roots in Anatolia centuries ago.",
          "From Byzantine medical institutions to Ottoman darüşşifas, the region developed a culture where medicine was both technical and ethical. Historical institutions such as Süleymaniye and Edirne facilities reflected early principles of privacy, specialization, and interdisciplinary care. This long memory matters today because it shapes the patient-first service culture international visitors often experience in Turkey.",
          "Geographically, Turkey occupies an extraordinary advantage at the intersection of Europe, Asia, and the Middle East. Istanbul enables short to mid-haul flights from dozens of population-dense regions, reducing travel fatigue and total logistical burden. This is particularly valuable in procedures requiring staged visits, post-op controls, or companion-friendly planning.",
          "Air mobility is further strengthened by Istanbul's aviation infrastructure and broad global connectivity. In practical terms, treatment dates can be optimized around medical priorities rather than limited flight access. For international patients, this creates a smoother timeline from remote consultation to surgery and follow-up.",
          "So the first answer to 'Why Turkey?' is not price alone. It is civilizational continuity plus strategic accessibility: a destination that historically understands care and geographically simplifies care delivery."
        ],
        keyTakeaways: [
          "Anatolia offers one of the deepest healthcare heritages in the region.",
          "Istanbul's location reduces travel complexity for international patients.",
          "Strong air connectivity supports flexible, medically optimized scheduling."
        ],
        designNotes: {
          infographic: "Horizontal timeline from Asklepion to modern smart hospitals.",
          map: "Istanbul-centered 4-hour and 8-hour flight radius world map.",
          video: "[Video Placeholder #1] 'From Ancient Healing to Contemporary Care'."
        }
      },
      {
        id: "academic-excellence",
        icon: Microscope,
        title: "2) Academic and Surgical Excellence",
        paragraphs: [
          "In Turkey, specialist training is selective, rigorous, and practice-heavy. Physicians progress through competitive pathways where exam performance, residency discipline, and high-volume clinical exposure are all essential. This ecosystem develops more than textbook competence; it shapes decision-making speed, complication management, and team coordination under pressure.",
          "For medical tourists, case diversity is a major differentiator. Turkish surgeons routinely manage broad procedural portfolios spanning full-mouth dental rehabilitation, rhinoplasty, revision aesthetics, hair transplantation, and metabolic surgery. Such volume creates technical repetition, which in surgery translates into precision and predictability.",
          "Manual dexterity is one of Turkey's most cited soft-hard advantages in international patient communities. In micro-procedural environments—such as graft handling, delicate facial tissue work, or fine dental finishing—small technical differences can generate visibly better outcomes. High repetition plus craftsmanship culture reinforces this edge.",
          "Technology adoption amplifies human skill. Many premium institutions operate with robotic systems, high-definition endoscopic towers, 3D planning pipelines, and digitally integrated diagnostics. These tools can improve procedural accuracy while reducing trauma and recovery burden in selected indications.",
          "Academic visibility is also meaningful: Turkish teams increasingly contribute to conferences, international panels, and peer-reviewed discussions. That visibility often correlates with protocol discipline—structured reporting, measurable outcomes, and quality benchmarking—elements that matter to informed international patients.",
          "New Life Health translates this clinical complexity into patient-friendly decision architecture. Surgeon selection is not driven by title alone, but by procedure-specific case depth, revision philosophy, communication quality, and follow-up discipline."
        ],
        keyTakeaways: [
          "High-volume clinical exposure supports surgical consistency and confidence.",
          "Manual dexterity is a practical quality metric in precision-led procedures.",
          "Best outcomes combine surgeon skill, technology stack, and communication clarity."
        ],
        designNotes: {
          infographic: "Medical specialization pathway with milestones and competencies.",
          map: "Top Turkish clinical clusters by specialty focus.",
          video: "[Video Placeholder #2] Surgeon interview: training, technique, and outcomes."
        }
      },
      {
        id: "infrastructure",
        icon: ShieldCheck,
        title: "3) Hospital Infrastructure and Accreditations",
        paragraphs: [
          "In medical travel, trust is system-dependent. The surgeon matters, but so does the environment that supports them: sterilization protocols, nursing standards, emergency readiness, documentation quality, and digital continuity. Turkey's premium hospitals competing for international patients invest heavily in these operational pillars.",
          "International accreditations such as JCI function as process-validation frameworks rather than marketing labels. They assess medication safety, infection control, patient rights workflows, emergency procedures, and quality governance. For international patients, accreditation signals process maturity and auditability.",
          "Smart hospital capabilities are now central to patient experience. AI-assisted diagnostics, integrated EMR systems, digital patient portals, tele-follow-up models, and multidisciplinary case boards improve continuity before and after travel. This matters when the patient returns home and still needs structured communication.",
          "Technology breadth is another strategic layer: robotic surgery, Gamma Knife-class radiosurgery solutions, modern navigation systems, and digital dentistry pipelines coexist in many top institutions. The benefit is optionality—matching technology to indication rather than forcing one-size-fits-all methods.",
          "New Life Health evaluates partner institutions with a multi-factor lens: not only available devices, but team maturity, foreign patient operations, emergency protocols, and transparent communication standards."
        ],
        keyTakeaways: [
          "Accreditation transforms trust from claim to measurable process.",
          "Smart-hospital infrastructure enables safer long-distance follow-up.",
          "Technology should be indication-driven, not brochure-driven."
        ],
        designNotes: {
          infographic: "Quality pillars dashboard: safety, rights, operations, digital continuity.",
          map: "Istanbul premium-hospital transfer corridors.",
          video: "[Video Placeholder #3] Guided clinical tour of an accredited facility."
        }
      },
      {
        id: "cost-performance",
        icon: TableProperties,
        title: "4) Economic Analysis: Value Beyond Price",
        paragraphs: [
          "Turkey's value proposition is often simplified as affordability, but the real model is value-density. In many Western systems, high prices reflect not only physician fees but insurance overhead, administrative load, labor structure, and facility costs. Turkey can deliver high clinical standards through more efficient cost architecture.",
          "For patients, this means budget can be reallocated to quality-enhancing layers: premium accommodation, private transfers, multilingual coordination, and extended recovery comfort. In other words, value is not only in lower invoice numbers but in superior end-to-end experience per dollar or euro spent.",
          "New Life Health frames decision-making through total treatment cost rather than package headline prices. Diagnostics, procedure, medication, controls, transport, and accommodation are analyzed together to minimize hidden-cost risk and maximize predictability."
        ],
        table: {
          title: "Indicative Procedure Cost Comparison",
          columns: ["Procedure", "US / Western Europe", "Turkey", "Estimated Savings"],
          rows: [
            ["All-on-4 Dental Rehabilitation", "$18,000 - $30,000", "$6,000 - $11,000", "45% - 70%"],
            ["FUE Hair Transplant", "$8,000 - $16,000", "$2,000 - $4,500", "55% - 80%"],
            ["Rhinoplasty", "$9,000 - $18,000", "$3,000 - $6,500", "40% - 70%"],
            ["Sleeve Gastrectomy", "$14,000 - $28,000", "$4,500 - $8,000", "45% - 75%"],
            ["Breast Aesthetics (Aug./Lift)", "$10,000 - $20,000", "$3,500 - $7,000", "40% - 70%"]
          ]
        },
        keyTakeaways: [
          "Turkey's economic edge is efficiency-driven, not quality-compromised.",
          "Lower treatment cost can translate into premium service layers.",
          "Always compare total journey cost, not just package price."
        ],
        designNotes: {
          infographic: "Value-for-money matrix: quality, speed, comfort, cost.",
          map: "Airport-hotel-hospital route efficiency diagram.",
          video: "[Video Placeholder #4] 'How to calculate real treatment value'."
        }
      },
      {
        id: "istanbul-destination",
        icon: MapPinned,
        title: "5) Istanbul as a Recovery Destination",
        paragraphs: [
          "Istanbul redefines what a treatment destination can feel like. When well-managed, medical travel is not a purely clinical episode; it can support emotional regulation and motivation during recovery. Controlled exposure to waterfront walks, calm hospitality settings, and balanced cuisine can contribute positively to patient psychology.",
          "Uncertainty is often the largest stress factor for international patients. New Life Health addresses this with a single-point coordination model: airport welcome, chauffeur transfers, check-in support, appointment logistics, interpreter assistance, and post-discharge scheduling managed by one team.",
          "Luxury accommodation is not merely aesthetic branding; it can be clinically relevant. Quiet environment, hygiene consistency, nutrition access, and proximity to care points influence comfort and compliance in early recovery windows. Therefore, hotel planning is integrated with the medical plan, not treated as an afterthought.",
          "Istanbul also offers adaptable recovery rhythms. Some patients benefit from low-stimulation rest, while others prefer gentle cultural activity under medical guidance. The key is structured personalization within safety boundaries.",
          "Ultimately, Istanbul is not just a place to undergo surgery; it is a city where healing can be orchestrated with dignity, comfort, and confidence."
        ],
        keyTakeaways: [
          "Recovery quality depends on environment as much as procedure quality.",
          "Single-team coordination reduces friction and error risk.",
          "Istanbul uniquely combines premium care logistics with cultural depth."
        ],
        designNotes: {
          infographic: "Sample 5-day premium patient itinerary.",
          map: "Luxury transfer routes in key Istanbul medical districts.",
          video: "[Video Placeholder #5] Patient story: comfort, care, and confidence."
        }
      },
      {
        id: "regulation-rights",
        icon: Scale,
        title: "6) Regulation, Governance, and Patient Rights",
        paragraphs: [
          "Legal clarity is foundational in cross-border healthcare. In Turkey, medical tourism operations sit within regulated frameworks tied to Ministry oversight, licensed healthcare providers, and formal travel-service structures. For patients, this reduces informal-risk exposure.",
          "Working with authorized institutions improves documentability: treatment scope, consent forms, pricing components, complication protocols, and follow-up channels can all be recorded and communicated transparently. Transparency is both an ethical imperative and a practical risk-control mechanism.",
          "Patient rights priorities include informed consent, data privacy, and pricing clarity. Patients should understand procedure rationale, alternatives, risk profile, expected timeline, and realistic outcome boundaries in their preferred language whenever possible.",
          "Ethical communication is equally critical. Before-after imagery, recovery promises, and success narratives must be framed responsibly to avoid expectation distortion. Sustainable trust is built by realistic counseling, not aggressive marketing rhetoric.",
          "Governance quality ultimately improves patient psychology: predictable systems reduce fear, support better decisions, and strengthen adherence throughout treatment and follow-up."
        ],
        keyTakeaways: [
          "Regulation and authorization are primary safety filters in medical travel.",
          "Documented transparency protects both patient and provider.",
          "Ethical communication is a measurable quality signal, not a soft extra."
        ],
        designNotes: {
          infographic: "Patient rights checklist for international treatment planning.",
          map: "Compliance journey map from consultation to post-op follow-up.",
          video: "[Video Placeholder #6] Legal expert briefing on international patient safeguards."
        }
      },
      {
        id: "specialties",
        icon: Sparkles,
        title: "7) Specialty Deep Dive: Dentistry, Aesthetics, Bariatrics",
        paragraphs: [
          "Dentistry is one of Turkey's strongest global verticals due to digital planning maturity, aesthetic craftsmanship, and lab integration speed. 3D diagnostics, CAD/CAM workflows, and protocolized smile design allow high-quality outcomes within practical travel windows for international patients.",
          "In aesthetic surgery, Turkey is recognized for balancing technical precision with natural-looking outcomes. Beyond procedure execution, strong centers emphasize facial-body harmony, revision strategy, scar-management planning, and long-term aesthetic stability.",
          "Bariatric surgery strength comes from multidisciplinary follow-up. Procedures such as sleeve gastrectomy are only one part of success; nutritional coaching, behavioral support, and structured check-ins drive durable outcomes. Leading centers have embedded these pathways into standard care.",
          "Across all three specialties, Turkey's real advantage is ecosystem maturity: high procedural volume, advanced technology, and integrated aftercare. This combination supports quality, speed, and value in parallel rather than forcing trade-offs.",
          "New Life Health adds strategic matching intelligence—aligning patient profile, clinical need, and service expectations with the right provider network so patients choose best-fit options rather than lowest headline price."
        ],
        keyTakeaways: [
          "Turkey's global-hub status is specialty-specific and ecosystem-driven.",
          "Sustainable outcomes depend on planning and follow-up, not surgery alone.",
          "Strategic clinic matching can materially improve final outcomes and satisfaction."
        ],
        designNotes: {
          infographic: "Three-specialty outcome framework: planning, procedure, recovery.",
          map: "Specialty density and route-time overlays in Istanbul.",
          video: "[Video Placeholder #7] Multi-doctor panel on dentistry, aesthetics, and bariatrics."
        }
      }
    ]
  }
};

function KeyTakeawayBox({ title, items }) {
  return (
    <aside className="rounded-2xl border border-[#D4AF37]/40 bg-[#FFF9EA] p-6">
      <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#8A6A10]">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#3E3314]">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </aside>
  );
}

export default function WhyTurkeyPage() {
  const { lang } = useLanguage();
  const data = useMemo(() => CONTENT[lang] || CONTENT.en, [lang]);

  return (
    <InnerPageLayout title={data.title} subtitle={data.subtitle}>
      <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="space-y-4 rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-[#1A1A1A]">{data.readTime}</p>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1A1A1A]/15 px-4 py-2 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#F7F7F7]"
            >
              <Download className="h-4 w-4" />
              {data.downloadLabel}
            </a>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-[#1A1A1A]/70">{data.tocTitle}</h2>
              <nav className="mt-2 space-y-2">
                {data.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm leading-relaxed text-[#1A1A1A]/80 transition hover:text-[#1A1A1A]"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        <main className="space-y-10 text-[#1A1A1A]/90">
          {data.sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <section id={section.id} key={section.id} className="scroll-mt-28 space-y-5 rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A1A] text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-2xl font-semibold leading-tight md:text-3xl">{section.title}</h2>
                </div>

                <div className="space-y-4 text-base leading-8 md:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.table ? (
                  <div className="space-y-3 rounded-2xl border border-[#1A1A1A]/10 p-4">
                    <h3 className="text-lg font-semibold">{section.table.title}</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-[#F6F6F6]">
                          <tr>
                            {section.table.columns.map((column) => (
                              <th key={column} className="px-3 py-2 font-semibold">
                                {column}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1A1A1A]/10">
                          {section.table.rows.map((row) => (
                            <tr key={row.join("-")}> 
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={`${cell}-${cellIndex}`}
                                  className={`px-3 py-2 ${cellIndex === row.length - 1 ? "font-semibold text-[#0E7A36]" : ""}`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}

                <KeyTakeawayBox title="Key Takeaways" items={section.keyTakeaways} />

                <div className="grid gap-3 rounded-2xl border border-dashed border-[#1A1A1A]/20 bg-[#FAFAFA] p-4 text-sm text-[#1A1A1A]/80 md:grid-cols-3">
                  <div className="rounded-xl bg-white p-3">
                    <p className="mb-1 flex items-center gap-2 font-semibold text-[#1A1A1A]"><BookOpenText className="h-4 w-4" /> Infographic</p>
                    <p>{section.designNotes.infographic}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <p className="mb-1 flex items-center gap-2 font-semibold text-[#1A1A1A]"><MapPinned className="h-4 w-4" /> Interactive Map</p>
                    <p>{section.designNotes.map}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3">
                    <p className="mb-1 flex items-center gap-2 font-semibold text-[#1A1A1A]"><FileVideo className="h-4 w-4" /> Video Slot</p>
                    <p>{section.designNotes.video}</p>
                  </div>
                </div>

                {index !== data.sections.length - 1 ? <hr className="border-[#1A1A1A]/10" /> : null}
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
