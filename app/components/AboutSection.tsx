import DecorLayout from "./DecorLayout"
const advantages = [
  // 1-я строка
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
  // 2-я строка (розовые)
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
  // 3-я строка
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
      <section className=" bg-[#FFB9B933]">
        <DecorLayout
          elements={[
            {
              id: 'cloud-mobile',
              type: 'svg',
              src: './cloud.svg',
              className: 'block sm:hidden',
              style: { top: 20, left: 10, width: 100 },
            },
            {
              id: 'cloud-desktop',
              type: 'svg',
              src: './cloud.svg',
              className: 'hidden sm:block',
              style: { top: 60, left: 80, width: 160 },
            },
          ]}
        />
      <div className="flex flex-col lg:flex-row items-start py-12 px-11 lg:px-11 bg-pink-50 gap-3">
        <div className="lg:w-[45%]">
          <div className="mx-auto">
            <img src="./img/doctor.svg" alt="Doctor" className="w-auto h-auto object-cover" />
          </div>
        </div>
        <div className="lg:w-[55%] mt-10 lg:mt-0">
          <h2 className="text-5xl font-bold uppercase text-[#5DD3D3]">про нашу клiнiку</h2>
          <p className="mt-4 text-gray-700">
            Центр сімейної реабілітації <span className="font-semibold text-indigo-600">Family Rehab</span> — це простір турботи,
            відновлення та гармонії, що понад 7 років допомагає дітям та їхнім родинам долати труднощі зі здоров’ям.
          </p>
          <p className="mt-4 text-gray-700">У нашій клініці ви отримаєте:</p>
          <p className="mt-4 text-gray-700">
            Ми спеціалізуємося на дитячій неврології та реабілітації, поєднуючи сучасні методи діагностики з ефективними терапевтичними підходами.
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>професійну консультацію дитячого невролога</li>
            <li>повний спектр функціональної діагностики: ЕЕГ, РЕГ, міографія, слухові та зорові викликані потенціали</li>
            <li>ультразвукові дослідження: НСГ, Ехо, Доплер</li>
            <li>мануальну терапію та масаж для дітей і дорослих</li>
            <li>підтримку кваліфікованого дитячого психолога</li>
          </ul>
          <p className="mt-6 text-gray-700">
          Ми віримо, що кожна дитина заслуговує на щасливе та здорове дитинство, а родина — на підтримку та впевненість. 
          Тому в Family Rehab ми створили середовище, де кожен маленький пацієнт — у надійних руках
          </p>
        </div>
      </div>
        <div className="bg-pink-50 py-6">
          <div className="container mx-auto px-6 sm:px-11">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 lg:gap-20 items-center justify-center max-w-[1451px] mx-auto">
              <div className="flex justify-center">
                <img src="/img/kid-umbrella.svg" alt="Kid with umbrella" className="w-full max-w-[160px]" />
              </div>
              <div className="flex justify-center">
                <img src="/img/family-sun.svg" alt="Family with sun" className="w-full max-w-[180px]" />
              </div>
              <div className="flex justify-center">
                <img src="/img/small-family.svg" alt="Small family" className="w-full max-w-[140px]" />
              </div>
              <div className="flex justify-center">
                <img src="/img/balloons.svg" alt="Balloons" className="w-full max-w-[156px] rotate-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FEF7F7] py-16 px-11">
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-12">
        НАШІ ПЕРЕВАГИ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {advantages.map((item) => {
          const isTeal = item.color === 'teal';
          return (
            <div
              key={item.title}
              className={`
                p-8 rounded-[30px]
                ${isTeal ? 'bg-teal-300' : 'bg-pink-100'}
              `}
            >
              <h3 className="flex items-center mb-4">
                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block mr-3" />
                <span
                  className={`
                    text-xl font-semibold
                    ${isTeal ? 'text-white' : 'text-orange-500'}
                  `}
                >
                  {item.title}
                </span>
              </h3>
              <p
                className={`
                  leading-relaxed
                  ${isTeal ? 'text-white' : 'text-gray-800'}
                `}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mt-20 mb-10">
        ВІДГУКИ ПРО НАС
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { stars: 5, text: 'Все необхідне в одному місці — дуже зручно!', name: 'Ганна Вознюк', ago: '8 місяців тому' },
          { stars: 5, text: 'Дуже вдячні за професійного лікаря Лапіну Валерію!', name: 'Тетяна Гук', ago: '6 місяців тому' },
          { stars: 5, text: 'Пройшли масаж, мануальну терапію — помітний результат!', name: 'Олександр Лемешко', ago: '3 місяці тому' },
          { stars: 5, text: 'Дуже вдячні команді центру за якісну діагностику!', name: 'Олена Остапік', ago: '1 місяць тому' },
        ].map((rev, i) => (
          <div
            key={i}
            className="bg-white p-6 border border-gray-200 rounded-[20px] shadow-sm"
          >
            <div className="flex mb-2">
              {'★'.repeat(rev.stars).split('').map((s, idx) => (
                <span key={idx} className="text-yellow-500 text-lg">{s}</span>
              ))}
            </div>
            <p className="text-gray-700 mb-2">{rev.text}</p>
            <p className="font-semibold text-sm text-gray-900">{rev.name}</p>
            <p className="text-xs text-gray-500">{rev.ago}</p>
          </div>
        ))}
      </div>
    </div>
      </section>
    )
  }
  