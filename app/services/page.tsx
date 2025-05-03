import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Link from "next/link";

const services = [
  {
    title: "КОНСУЛЬТАЦІЯ НЕВРОЛОГА",
    description: [
      "Оцінка неврологічного стану",
      "Виявлення порушень нервової системи",
      "Призначення лікування та обстежень",
    ],
    icon: "/ellipse.svg",
  },
  {
    title: "КОНСУЛЬТАЦІЯ ПСИХОЛОГА",
    description: [
      "Діагностика емоційного стану",
      "Психологічна підтримка та поради",
      "Рекомендації щодо терапії",
    ],
    icon: "/ellipse2.svg",
  },
  {
    title: "ЕЕГ (ЕЛЕКТРОЕНЦЕФАЛОГРАФІЯ)",
    description: [
      "Визначення судомної готовності",
      "Оцінка роботи головного мозку",
      "Реєстрація електричної активності мозку",
    ],
    icon: "/ellipse3.svg",
  },
  {
    title: "РЕГ (РЕОЕНЦЕФАЛОГРАФІЯ)",
    description: [
      "Дослідження кровотоку мозку",
      "Виявлення судинних порушень",
      "Оцінка тонусу судин",
    ],
    icon: "/ellipse4.svg",
  },
  {
    title: "ЕХО (ЕХОЕНЦЕФАЛОСКОПІЯ)",
    description: [
      "УЗД головного мозку",
      "Виявлення структурних змін",
      "Діагностика об'ємних утворень",
    ],
    icon: "/ellipse.svg",
  },
  {
    title: "ДОПЛЕР СУДИН ГОЛОВИ ТА ШИЇ",
    description: [
      "Оцінка кровотоку судин",
      "Виявлення стенозів і тромбів",
      "Аналіз прохідності артерій",
    ],
    icon: "/ellipse2.svg",
  },
  {
    title: "НЕЙРОСОНОГРАФІЯ",
    description: [
      "УЗД головного мозку у дітей",
      "Виявлення анатомії та аномалій",
      "Контроль внутрішньочерепного тиску",
    ],
    icon: "/ellipse3.svg",
  },
  {
    title: "ЕЛЕКТРОНЕЙРОМІОГРАФІЯ",
    description: [
      "Дослідження нервів і м'язів",
      "Виявлення нейропатій",
      "Оцінка провідності імпульсів",
    ],
    icon: "/ellipse4.svg",
  },
  {
    title: "НІЧНИЙ ТА ДЕННИЙ ЕЕГ ВІДЕОМОНІТОРИНГ",
    description: [
      "Безперервний запис ЕЕГ з відео",
      "Виявлення нічних нападів",
      "Оцінка епілептичної активності",
    ],
    icon: "/ellipse.svg",
  },
  {
    title: "ВИКЛИКАНІ ПОТЕНЦІАЛИ (ЗОРОВІ ТА СЛУХОВІ)",
    description: [
      "Оцінка зорових і слухових шляхів",
      "Виявлення сенсорних порушень",
      "Діагностика нейропатій",
    ],
    icon: "/ellipse2.svg",
  },
  {
    title: "УЗД КУЛЬШОВИХ СУГЛОБІВ",
    description: [
      "Діагностика дисплазії у дітей",
      "Оцінка стану суглобів",
      "Контроль розвитку кульшових суглобів",
    ],
    icon: "/ellipse3.svg",
  },
  {
    title: "ДІАДИНАМОТЕРАПІЯ",
    description: [
      "Електростимуляція м'язів",
      "Знеболення та розслаблення",
      "Поліпшення кровообігу тканин",
    ],
    icon: "/ellipse4.svg",
  },
  {
    title: "МАНУАЛЬНА ТЕРАПІЯ",
    description: [
      "Корекція хребта і суглобів",
      "Усунення м'язових блоків",
      "Поліпшення рухливості тіла",
    ],
    icon: "/ellipse.svg",
  },
  {
    title: "ТЕСТ ADOS-2",
    description: [
      "Стандартизована діагностика аутизму",
      "Спостереження за поведінкою дитини",
      "Оцінка соціальних навичок",
    ],
    icon: "/ellipse2.svg",
  },
  {
    title: "МАСАЖ (ЛІКУВАЛЬНИЙ ТА РОЗСЛАБЛЮЮЧИЙ)",
    description: [
      "Зняття м'язової напруги",
      "Поліпшення кровообігу",
      "Відновлення після навантажень",
    ],
    icon: "/ellipse3.svg",
  },
];

export default function ServicesPage() {
  return (
    <>
     <HeroSection
              heading="Family Rehab"
              paragraph="Наші послуги"
              imageSrc="/frame-services.svg"
              buttonText="записатися"
              buttonHref="/regiester"
    />
    <main className="bg-[#FFF1F3] py-16">
      <div className="w-full max-w-[1351px] mx-auto px-4">
        <h1 className="text-5xl font-bold uppercase text-[#5DD3D3] mb-8">послуги</h1>
        <div className="bg-[#5DD3D3] grid grid-cols-1 md:grid-cols-2 gap-6 py-8 px-6">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative bg-white w-full max-w-[563px] rounded-xl p-6 pt-10 shadow-md">
                <div className="absolute top-9 -right-5 w-16 h-16">
                  <Image
                    src={service.icon}
                    alt="Іконка"
                    width={121}
                    height={121}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[16px] sm:text-[20px] font-bold text-[#08A1AC] mb-2 w-[250px] sm:w-[350px] uppercase break-words sm:break-normal">
                  {service.title}
                </h3>
                <ul className="text-sm text-xl text-gray-800 space-y-1 mb-4">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:bg-orange-500">
                      {item}
                    </li>
                  ))}
                </ul>
               
              <Link
                href="/regiester"
                className="bg-[#FF4E8A] text-white px-5 py-1 text-2xl rounded-full hover:bg-[#e9447c] transition"
              >
                Записатись
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
