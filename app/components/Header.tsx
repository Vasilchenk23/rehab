import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-[#5DD3D3] text-white h-53">
      <div className="bg-blue-600 text-white text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-2">
        <span>м. Харків, вул. проїзд Стадіонний, 6/5</span>
        <span>вівторок, четвер, субота з 09:00 - 14:00</span>
        <span>+380 (68) 21-01-302</span>
        <span>+380 (68) 21-01-302</span>
        <span>+380 (68) 21-01-302</span>
      </div>
      </div>
      <div className="mx-auto w-[1251px] h-[65px] flex items-center justify-between bg-white rounded-[80px] my-15 px-6">
        <Link href="/" className="flex items-center">
          <img src="./img/logo.svg" alt="Family Rehab" className="h-full w-auto" />
        </Link>
        <nav className="space-x-6 font-medium">
          <Link href="/" className="hover:text-[#FF2F65] text-black transition-colors">Головна</Link>
          <Link href="/services" className="hover:text-[#FF2F65] text-black transition-colors">Послуги</Link>
          <Link href="/prices" className="hover:text-[#FF2F65] text-black transition-colors">Ціни</Link>
          <Link href="/blog" className="hover:text-[#FF2F65] text-black transition-colors">Блог</Link>
          <Link href="/contacts" className="hover:text-[#FF2F65] text-black transition-colors">Контакти</Link>
        </nav>
        <a href="tel:+380682101302" className="text-[#FF6B0A] px-4 py-2 font-bold">
          +380 (68) 21‑01‑302
        </a>
      </div>
    </header>
  )
}
