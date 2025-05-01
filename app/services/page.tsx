import Image from "next/image";
import HeroSection from "../components/HeroSection";

const services = [
  {
    title: "КОНСУЛЬТАЦІЯ НЕВРОЛОГА",
    description: [
      "Оцінка неврологічного стану",
      "Виявлення порушень нервової системи",
      "Призначення лікування та обстежень",
    ],
    icon: "/img/services/1.png",
  },
  {
    title: "КОНСУЛЬТАЦІЯ ПСИХОЛОГА",
    description: [
      "Діагностика емоційного стану",
      "Психологічна підтримка та поради",
      "Рекомендації щодо терапії",
    ],
    icon: "/img/services/2.png",
  },
  {
    title: "ЕЕГ (ЕЛЕКТРОЕНЦЕФАЛОГРАФІЯ)",
    description: [
      "Визначення судомної готовності",
      "Оцінка роботи головного мозку",
      "Реєстрація електричної активності мозку",
    ],
    icon: "/img/services/3.png",
  },
  {
    title: "РЕГ (РЕОЕНЦЕФАЛОГРАФІЯ)",
    description: [
      "Дослідження кровотоку мозку",
      "Виявлення судинних порушень",
      "Оцінка тонусу судин",
    ],
    icon: "/img/services/4.png",
  },
  {
    title: "ЕХО (ЕХОЕНЦЕФАЛОСКОПІЯ)",
    description: [
      "УЗД головного мозку",
      "Виявлення структурних змін",
      "Діагностика об'ємних утворень",
    ],
    icon: "/img/services/5.png",
  },
  {
    title: "ДОПЛЕР СУДИН ГОЛОВИ ТА ШИЇ",
    description: [
      "Оцінка кровотоку судин",
      "Виявлення стенозів і тромбів",
      "Аналіз прохідності артерій",
    ],
    icon: "/img/services/6.png",
  },
  {
    title: "НЕЙРОСОНОГРАФІЯ",
    description: [
      "УЗД головного мозку у дітей",
      "Виявлення анатомії та аномалій",
      "Контроль внутрішньочерепного тиску",
    ],
    icon: "/img/services/7.png",
  },
  {
    title: "ЕЛЕКТРОНЕЙРОМІОГРАФІЯ",
    description: [
      "Дослідження нервів і м'язів",
      "Виявлення нейропатій",
      "Оцінка провідності імпульсів",
    ],
    icon: "/img/services/8.png",
  },
  {
    title: "НІЧНИЙ ТА ДЕННИЙ ЕЕГ ВІДЕОМОНІТОРИНГ",
    description: [
      "Безперервний запис ЕЕГ з відео",
      "Виявлення нічних нападів",
      "Оцінка епілептичної активності",
    ],
    icon: "/img/services/9.png",
  },
  {
    title: "ВИКЛИКАНІ ПОТЕНЦІАЛИ (ЗОРОВІ ТА СЛУХОВІ)",
    description: [
      "Оцінка зорових і слухових шляхів",
      "Виявлення сенсорних порушень",
      "Діагностика нейропатій",
    ],
    icon: "/img/services/10.png",
  },
  {
    title: "УЗД КУЛЬШОВИХ СУГЛОБІВ",
    description: [
      "Діагностика дисплазії у дітей",
      "Оцінка стану суглобів",
      "Контроль розвитку кульшових суглобів",
    ],
    icon: "/img/services/11.png",
  },
  {
    title: "ДІАДИНАМОТЕРАПІЯ",
    description: [
      "Електростимуляція м'язів",
      "Знеболення та розслаблення",
      "Поліпшення кровообігу тканин",
    ],
    icon: "/img/services/12.png",
  },
  {
    title: "МАНУАЛЬНА ТЕРАПІЯ",
    description: [
      "Корекція хребта і суглобів",
      "Усунення м'язових блоків",
      "Поліпшення рухливості тіла",
    ],
    icon: "/img/services/13.png",
  },
  {
    title: "ТЕСТ ADOS-2",
    description: [
      "Стандартизована діагностика аутизму",
      "Спостереження за поведінкою дитини",
      "Оцінка соціальних навичок",
    ],
    icon: "/img/services/14.png",
  },
  {
    title: "МАСАЖ (ЛІКУВАЛЬНИЙ ТА РОЗСЛАБЛЮЮЧИЙ)",
    description: [
      "Зняття м'язової напруги",
      "Поліпшення кровообігу",
      "Відновлення після навантажень",
    ],
    icon: "/img/services/15.png",
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
              buttonHref="#about"
    />
    <main className="bg-[#FFF1F3] py-16 px-4">
      <h1 className="text-5xl max-w-[1451px] font-bold uppercase text-[#5DD3D3]">послуги</h1>
      <div className="w-full max-w-[1451px] bg-[#5DD3D3] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8">
        {services.map((service, index) => (
          <div key={index} className="flex justify-center">
            <div className="relative bg-white w-[563px] rounded-xl p-6 pt-10 shadow-md">
              <div className="absolute -top-6 right-4 w-16 h-16">
                <Image
                  src={service.icon}
                  alt="Іконка"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-bold text-[#08A1AC] mb-2 uppercase">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 mb-4">
                {service.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button className="bg-[#FF4E8A] text-white px-5 py-1 text-sm rounded-full hover:bg-[#e9447c] transition">
                Записатись
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}
