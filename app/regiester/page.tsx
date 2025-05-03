"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function RegistrationPage() {
  const router = useRouter();

  const clouds = [
    { id: 1, className: "top-10 left-10", delay: 0 },
    { id: 2, className: "top-20 right-10", delay: 0.4 },
    { id: 3, className: "bottom-10 left-20", delay: 0.8 },
    { id: 4, className: "bottom-5 right-20", delay: 1.2 },
    { id: 5, className: "top-1/2 left-1/2 -translate-x-1/2", delay: 1.6 },
  ];

  return (
    <main className="min-h-screen bg-[#5DD3D3] flex items-center justify-center relative overflow-hidden">
      <img
        src="/img/sun.svg"
        alt="sun"
        className="absolute top-6 right-10 w-14 h-14 z-0"
      />

      {clouds.map((cloud) => (
        <motion.img
          key={cloud.id}
          src="/img/cloud.svg"
          alt="cloud"
          initial={{ x: 0 }}
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: cloud.delay }}
          className={`w-50 h-50 absolute ${cloud.className}`}
        />
      ))}

      <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg relative text-center z-10">
        <button
          className="absolute top-3 right-3 text-black cursor-pointer"
          onClick={() => router.back()}
        >
          <X size={20} />
        </button>

        <h2 className="text-[#FF6B00] font-bold text-lg mb-1">ВАЖЛИВО!</h2>
        <p className="mb-1 text-sm">Запис здійснюється</p>
        <p className="text-[#FF4E8A] font-semibold text-sm mb-2">
          виключно у вказані дні та час:
        </p>
        <p className="mb-4 text-sm">Понеділок–субота: з 09:00 до 18:00</p>

        <h3 className="text-[#FF4E8A] font-bold mb-2">РОБОЧІ ДНІ ПРОЙОМУ:</h3>
        <ul className="text-sm text-gray-800 space-y-1 mb-3">
          <li>Вівторок: з 09:00 до 14:00</li>
          <li>Четвер: з 09:00 до 14:00</li>
          <li>Субота: з 09:00 до 14:00</li>
        </ul>

        <div className="text-[#FF6B00] text-sm font-medium space-y-1 mb-4">
          <p>+380 (66)-21-01-302</p>
          <p>+380 (68)-21-01-302</p>
        </div>

        <Link
          href="/"
          className="bg-[#FF6B00] text-white font-semibold px-6 py-2 text-sm rounded-full hover:bg-[#e05d00] transition"
        >
          ПОВЕРНУТИСЯ НА САЙТ
        </Link>
      </div>
    </main>
  );
}
