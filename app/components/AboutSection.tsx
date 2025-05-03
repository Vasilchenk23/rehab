import Image from "next/image";

const advantages = [
  {
    color: 'teal',
    title: '7 РОКІВ ДОСВІДУ',
    text: 'Ми працюємо з 2017 року, допомагаючи дітям та їхнім родинам повертати здоров’я та гармонію у життя',
  },
  {
    color: 'teal',
    title: 'БЕЗПЕЧНІ МЕТОДИКИ',
    text: 'Застосовуємо м’які методи лікування — мануальна терапія, масаж, психологічна підтримка',
  },
  {
    color: 'pink',
    title: 'ДИТЯЧИЙ ПРОФІЛЬ',
    text: 'Центр спеціалізується на дитячій неврології та реабілітації — ми знаємо, як знайти підхід до кожної дитини',
  },
  {
    color: 'pink',
    title: 'КОМПЛЕКСНИЙ ПІДХІД',
    text: 'У нас працюють фахівці різного профілю: невролог, психолог, масажист, мануальний терапевт — усе в одному місці',
  },
  {
    color: 'teal',
    title: 'СУЧАСНА ДІАГНОСТИКА',
    text: 'Проводимо повний спектр функціональних обстежень: ЕЕГ (у тому числі добовий відеомоніторинг), РЕГ, НСГ, Доплер, міографію',
  },
  {
    color: 'teal',
    title: 'КОМФОРТНІ УМОВИ',
    text: 'Затишна атмосфера, доброзичливий персонал і все необхідне обладнання — аби ви почували себе впевнено й спокійно',
  },
];

export default function AboutSection() {
  return (
    <section className="bg-pink-50">
      <div className="w-full max-w-[1451px] mx-auto flex flex-col lg:flex-row items-center py-12 px-4 sm:px-6 lg:px-11 gap-6">
        <div className="w-full lg:w-[45%] flex justify-center">
          <Image
            width={200}
            height={200}
            src="/img/doctor.svg"
            alt="Doctor"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-[55%] mt-6 lg:mt-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#5DD3D3] text-center lg:text-left">
          про нашу клiнiку
        </h2>

        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          Центр сімейної реабілітації <span className="font-semibold text-[#4993D2]">Family Rehab</span> — це простір турботи, відновлення та гармонії, що понад 7 років допомагає дітям та їхнім родинам долати труднощі зі здоров’ям.
        </p>

        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          Ми спеціалізуємося на дитячій неврології та реабілітації, поєднуючи сучасні методи діагностики з ефективними терапевтичними підходами.
        </p>

        <p className="mt-4 text-gray-700 font-medium">У нашій клініці ви отримаєте:</p>

        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 marker:text-[#5DD3D3]">
          <li>професійну консультацію дитячого невролога</li>
          <li>повний спектр функціональної діагностики: ЕЕГ, РЕГ, міографія, слухові та зорові викликані потенціали</li>
          <li>ультразвукові дослідження: НСГ, Ехо, Доплер</li>
          <li>мануальну терапію та масаж для дітей і дорослих</li>
          <li>підтримку кваліфікованого дитячого психолога</li>
        </ul>

        <p className="mt-6 text-gray-700 text-base leading-relaxed">
          Ми віримо, що кожна дитина заслуговує на щасливе та здорове дитинство, а родина — на підтримку та впевненість.
          Тому в Family Rehab ми створили середовище, де кожен маленький пацієнт — у надійних руках.
        </p>

        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          Кожен наш день починається з розуміння того, наскільки важливо вчасно підтримати. Саме тому ми розробляємо індивідуальні програми, з урахуванням віку, стану та особливостей кожної дитини.
        </p>
      </div>
      </div>
      <div className="bg-pink-50 py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-[1451px] mx-auto">
            {[
              { src: "/img/kid-umbrella.svg", alt: "Kid with umbrella", maxW: "160px" },
              { src: "/img/family-sun.svg", alt: "Family with sun", maxW: "180px" },
              { src: "/img/small-family.svg", alt: "Small family", maxW: "140px" },
              { src: "/img/balloons.svg", alt: "Balloons", maxW: "156px", rotate: true },
            ].map((img, i) => (
              <div key={i} className="flex justify-center">
                <Image
                  width={100}
                  height={100}
                  src={img.src}
                  alt={img.alt}
                  className={`w-full max-w-[${img.maxW}] h-auto ${img.rotate ? "rotate-6" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#FEF7F7] py-12 px-4 sm:px-6 lg:px-20">
        <div className="w-full max-w-[1451px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-20 mt-20 font-bold uppercase text-[#5DD3D3] text-center lg:text-left">
            НАШІ ПЕРЕВАГИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {advantages.map((item) => (
              <div
                key={item.title}
                className={`p-6 rounded-[30px] ${item.color === "teal" ? "bg-[#5DD3D3]" : "bg-[#FFD6D8]"}`}
              >
                <h3 className="flex items-center mb-3">
                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block mr-3 shrink-0" />
                  <span
                    className={`text-3xl font-semibold ${item.color === "teal" ? "text-white" : "text-orange-500"}`}
                  >
                    {item.title}
                  </span>
                </h3>
                <p className={`text-2xl leading-relaxed ${item.color === "teal" ? "text-white" : "text-gray-800"}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-20 mb-20 font-bold uppercase text-[#5DD3D3] text-center lg:text-left">
            ВІДГУКИ ПРО НАС
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stars: 5,
                text: 'Все необхідне в одному місці — дуже зручно!',
                name: 'Ганна Вознюк',
                ago: '8 місяців тому',
                avatar: '/avatar4.svg',
              },
              {
                stars: 5,
                text: 'Дуже вдячні за професійного лікаря Ладика Валерію!',
                name: 'Тетяна Гук',
                ago: '6 місяців тому',
                avatar: '/avatar3.svg',
              },
              {
                stars: 5,
                text: 'Пройшли масаж, мануальну терапію — помітний результат!',
                name: 'Олександр Лемешко',
                ago: '3 місяці тому',
                avatar: '/avatar2.svg',
              },
              {
                stars: 5,
                text: 'Дуже вдячні команді центру за якісну діагностику!',
                name: 'Олена Остапік',
                ago: '1 місяць тому',
                avatar: '/avatar.svg',
              },
            ].map((rev, i) => (
              <div key={i} className="flex flex-col items-start text-start">
               <div className="w-full bg-white p-5 border border-teal-300 rounded-[30px] rounded-bl-none">
                  <div className="flex justify-start mb-3">
                    {Array(rev.stars).fill(0).map((_, idx) => (
                      <span key={idx} className="text-yellow-500 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-[27px]">{rev.text}</p>
                </div>
                <div className="mt-6 flex items-center w-full">
                  <Image
                    width={48}
                    height={48}
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-900 text-sm">{rev.name}</p>
                    <p className="text-xs mt-2 text-gray-500">{rev.ago}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
