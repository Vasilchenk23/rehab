
export default function Footer() {
  return (
    <footer className="bg-teal-400 text-white py-12">
      <div className="max-w-10xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <img
            src="./img/logo.svg"
            alt="Family Rehab logo"
            className=" mb-4"
          />
          <span className="font-bold text-center ml-[7px] text-xl">Family Rehab</span>
        </div>
        <div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Головна
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Послуги
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ціни
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Блог
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>м. Харків, вул. проїзд Стадіонний, 6/5</p>
          <p className="mt-2">
            <a href="tel:+380682101302" className="hover:underline">
              +380 (68)‑21‑01‑302
            </a>
          </p>
          <p>
            <a href="tel:+380682101302" className="hover:underline">
              +380 (68)‑21‑01‑302
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="WhatsApp">
              <svg className="w-6 h-6" ></svg>
            </a>
            <a href="#" aria-label="Telegram">
              <svg className="w-6 h-6"></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-6 h-6"></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Графік роботи</h4>
          <p>Вівторок, четвер: 09:00 – 14:00</p>
          <p>Субота: 09:00 – 14:00</p>
          <p className="mt-6 text-sm">
            Ліцензія №1243 від 17.11.2016 року
          </p>
        </div>
      </div>
    </footer>
  );
}
