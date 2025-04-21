import DecorLayout from "./DecorLayout"
export default function AboutSection() {
    return (
      <section className=" bg-[#FFB9B933]">
        <DecorLayout
          elements={[
            {
              id: 'cloud-mobile',
              type: 'svg',
              src: '/cloud.svg',
              className: 'block sm:hidden',
              style: { top: 20, left: 10, width: 100 },
            },
            {
              id: 'cloud-desktop',
              type: 'svg',
              src: '/cloud.svg',
              className: 'hidden sm:block',
              style: { top: 60, left: 80, width: 160 },
            },
          ]}
        />
        <div className="flex flex-col lg:flex-row items-center py-12 px-6 bg-pink-50">
          <div className="lg:w-1/2">
            <div className="mx-auto">
              <img src="./img/doctor.svg" alt="Doctor" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl font-bold text-teal-600">ПРО НАШУ КЛІНІКУ</h2>
            <p className="mt-4 text-gray-700">
              Центр сімейної реабілітації <span className="font-semibold text-indigo-600">Family Rehab</span> — це простір турботи,
              відновлення та гармонії, що понад 7 років допомагає дітям та їхнім родинам долати труднощі зі здоров’ям.
            </p>
            <p className="mt-4 text-gray-700">
            У нашій клініці ви отримаєте:
            </p>
            <p className="mt-4 text-gray-700">
              Ми спеціалізуємося на дитячій неврології та реабілітації, поєднуючи сучасні методи діагностики з ефективними терапевтичними підходами.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
              <li>професійну консультацію дитячого невролога</li>
              <li>
                повний спектр функціональної діагностики: ЕЕГ (денний та нічний відеомоніторинг), РЕГ, міографія, слухові та зорові викликані потенціали
              </li>
              <li>ультразвукові дослідження: НСГ, Ехо, Доплер</li>
              <li>мануальну терапію та масаж для дітей і дорослих</li>
              <li>підтримку кваліфікованого дитячого психолога</li>
            </ul>
            <p className="mt-6 text-gray-700">
              Ми віримо, що кожна дитина заслуговує на щасливе та здорове дитинство, а родина — на підтримку та впевненість. Тому в Family Rehab ми створили середовище, де кожен маленький пацієнт — у надійних руках.
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-teal-600 text-start mb-12">НАШІ ПЕРЕВАГИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
            <div className="bg-teal-200 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2 text-teal-900">🔴 7 РОКІВ ДОСВІДУ</h3>
              <p>Ми працюємо з 2017 року, допомагаючи дітям та їхнім родинам повертати здоров’я та гармонію у життя</p>
            </div>
            <div className="bg-teal-200 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2 text-teal-900">🔴 БЕЗПЕЧНІ МЕТОДИКИ</h3>
              <p>Застосовуємо м’які методи лікування — мануальна терапія, масаж, психологічна підтримка</p>
            </div>
            <div className="bg-pink-100 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2 text-pink-800">🔴 ДИТЯЧИЙ ПРОФІЛЬ</h3>
              <p>Центр спеціалізується на дитячій неврології та реабілітації — ми знаємо, як знайти підхід до кожної дитини</p>
            </div>
            <div className="bg-pink-100 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2 text-pink-800">🔴 КОМПЛЕКСНИЙ ПІДХІД</h3>
              <p>У нас працюють фахівці різного профілю: невролог, психолог, масажист, мануальний терапевт — усе в одному місці</p>
            </div>
            <div className="bg-teal-200 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2 text-teal-900">🔴 СУЧАСНА ДІАГНОСТИКА</h3>
              <p>Проводимо повний спектр функціональних обстежень: ЕЕГ (у тому числі добовий відеомоніторинг), РЕГ, НСГ, Доплер, міографію</p>
            </div>
            <div className="bg-teal-200 p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-2 text-teal-900">🔴 КОМФОРТНІ УМОВИ</h3>
              <p>Затишна атмосфера, доброзичливий персонал і все необхідне обладнання — аби ви почували себе впевнено й спокійно</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-teal-600 text-start mt-20 mb-10">ВІДГУКИ ПРО НАС</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 border rounded-xl shadow-sm">
              <div className="text-yellow-500 text-xl">★★★★★</div>
              <p className="mt-2">Все необхідне в одному місці — дуже зручно!</p>
              <p className="mt-2 font-semibold text-sm text-gray-700">Ганна Вознюк</p>
              <p className="text-xs text-gray-500">8 місяців тому</p>
            </div>
            <div className="bg-white p-4 border rounded-xl shadow-sm">
              <div className="text-yellow-500 text-xl">★★★★★</div>
              <p className="mt-2">Дуже вдячні за професійного лікаря Лапіну Валерію!</p>
              <p className="mt-2 font-semibold text-sm text-gray-700">Тетяна Гук</p>
              <p className="text-xs text-gray-500">6 місяців тому</p>
            </div>
            <div className="bg-white p-4 border rounded-xl shadow-sm">
              <div className="text-yellow-500 text-xl">★★★★★</div>
              <p className="mt-2">Пройшли масаж, мануальну терапію — помітний результат!</p>
              <p className="mt-2 font-semibold text-sm text-gray-700">Олександр Лемешко</p>
              <p className="text-xs text-gray-500">3 місяці тому</p>
            </div>
            <div className="bg-white p-4 border rounded-xl shadow-sm">
              <div className="text-yellow-500 text-xl">★★★★★</div>
              <p className="mt-2">Дуже вдячні команді центру за якісну діагностику!</p>
              <p className="mt-2 font-semibold text-sm text-gray-700">Олена Остапік</p>
              <p className="text-xs text-gray-500">1 місяць тому</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  