import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#5DD3D3] text-white py-12">
      <div className="w-full max-w-[1451px] mx-auto px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <Image 
            width={100} 
            height={100}
            src="/img/logo.svg"
            alt="Family Rehab logo"
            className="mb-4"
          />
          <span className="font-bold text-xl">Family Rehab</span>
        </div>

        <div className="flex flex-col justify-between h-[130px] font-bold text-xl items-start">
        <Link href="/" className="hover:underline">Головна</Link>
        <Link href="/services" className="hover:underline">Послуги</Link>
        <Link href="/prices" className="hover:underline">Ціни</Link>
        <Link href="/blog" className="hover:underline">Блог</Link>
        </div>

        <div className="flex flex-col items-start space-y-2 font-bold">
          <p>м. Харків, вул. проїзд Стадіонний, 6/5</p>
          <a href="tel:+380682101302" className="hover:underline">
            +380 (68)‑21‑01‑302
          </a>
          <a href="tel:+380682101302" className="hover:underline">
            +380 (68)‑21‑01‑302
          </a>
          <div className="flex items-center gap-4 font-bold">
            <p className="text-[18px]">Соцмережі</p>
            <div className="flex items-center gap-4">
              <a
                href="viber://chat?number=+380660101302"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition"
              >
                <Image
                  src="/img/footer/viber-white.svg"
                  alt="Viber"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition"
              >
                <Image
                  src="/img/footer/telegram-white.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.instagram.com/family_rehab/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-70 transition"
              >
                <Image
                  src="/img/footer/insta-white.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
          </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <h4 className="text-[17px] font-bold">Графік роботи:</h4>
          <p className="text-[17px] font-bold">Вівторок, четвер: 09:00 до 14:00</p>
          <p className="text-[17px] font-bold">Субота: 09:00 до 14:00</p>
          <p className="text-[17px] font-bold">
            Ліцензія №1243 від 17.11.2016 року
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1451px] mx-auto px-12 mt-8 border-t border-white/50 pt-4 text-center text-sm flex flex-col sm:flex-row items-center justify-start gap-2 text-white">
        <span className=" opacity-80">сайт розроблено:</span>

        <a
          href="https://www.behance.net/b5a12831"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <Image src='/img/insta.svg' width={20} height={20} alt="insta" />
          Наталія Твердохліб
        </a>

        <a
          href="https://www.instagram.com/maks_fullstack/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <Image src='/img/insta.svg' width={20} height={20} alt="insta" />
          Максим Васильченко
        </a>
      </div>
    </footer>
  );
}
