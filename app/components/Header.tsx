"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#5DD3D3] text-white h-[303px] relative">
      <div className="bg-[#4993D2] text-white text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-11 py-2">
          <span>м. Харків, вул. проїзд Стадіонний, 6/5</span>
          <span>вівторок, четвер, субота з 09:00 - 14:00</span>
          <span>+380 (68) 21-01-302</span>
          <span>+380 (68) 21-01-302</span>
          <span>+380 (68) 21-01-302</span>
        </div>
      </div>
      <div className="w-full max-w-[1451px] h-[65px] flex items-center justify-between bg-white rounded-[80px] mt-[60px] px-[50px] mx-auto relative">
        <Link href="/" className="flex items-center">
          <Image width={100} height={100} src="/img/logo.svg" alt="Family Rehab" className="h-full w-auto" />
        </Link>
        <nav className="desktop space-x-30 font-medium">
          <Link href="/" className="hover:text-[#FF2F65] text-xl font-bold uppercase text-black transition-colors">Головна</Link>
          <Link href="/services" className="hover:text-[#FF2F65] text-xl font-bold uppercase text-black transition-colors">Послуги</Link>
          <Link href="/prices" className="hover:text-[#FF2F65] text-xl font-bold uppercase text-black transition-colors">Ціни</Link>
          <Link href="/blog" className="hover:text-[#FF2F65] text-xl font-bold uppercase text-black transition-colors">Блог</Link>
          <Link href="/contacts" className="hover:text-[#FF2F65] text-xl font-bold uppercase text-black transition-colors">Контакти</Link>
        </nav>
        <button
          className="mobile text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen
            ? <X size={28} />
            : <Menu size={28} />
          }
        </button>
        <a
          href="tel:+380682101302"
          className="desktop text-[#FF6B0A] text-2xl font-black font-bold"
        >
          +380 (68) 21-01-302
        </a>
        {menuOpen && (
          <div className="mobile fixed inset-0 bg-white text-black flex flex-col items-center justify-center space-y-6 z-50">
            <button
              className="absolute top-6 right-6 text-black"
              onClick={() => setMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {['/', '/services', '/prices', '/blog', '/contacts'].map((href, i) => (
              <Link
                key={i}
                href={href}
                className="text-xl font-medium hover:text-[#FF2F65]"
                onClick={() => setMenuOpen(false)}
              >
                {['Головна','Послуги','Ціни','Блог','Контакти'][i]}
              </Link>
            ))}
            <a
              href="tel:+380682101302"
              className="text-[#FF6B0A] font-bold text-lg"
            >
              +380 (68) 21-01-302
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
