"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function RegistrationPage() {
  const router = useRouter();

  const clouds = [
    { id: 1, className: "top-5 left-60", delay: 0, direction: 1, amplitude: 30, duration: 10 },
    { id: 2, className: "top-20 right-60", delay: 1, direction: -1, amplitude: 40, duration: 12 },
    { id: 3, className: "top-60 left-60", delay: 2, direction: 1, amplitude: 20, duration: 8 },
    { id: 4, className: "top-30 left-70", delay: 1.5, direction: -1, amplitude: 35, duration: 11 },
    { id: 5, className: "top-60 right-65", delay: 0.5, direction: 1, amplitude: 25, duration: 9 },
    { id: 6, className: "top-40 left-1/2 -translate-x-1/2", delay: 0.7, direction: -1, amplitude: 28, duration: 10 },
  ];
  

  return (
    <main className="min-h-screen bg-[#5DD3D3] flex items-start justify-center relative pt-10 px-4 sm:px-0">
      <img
        src="/img/sun.svg"
        alt="sun"
        className="absolute -top-10 right-90 w-[200px] h-[200px] z-0 hidden sm:block"
      />

      {clouds.map((cloud) => (
        <motion.img
          key={cloud.id}
          src="/img/cloud.svg"
          alt="cloud"
          initial={{ x: 0 }}
          animate={{ x: [0, cloud.amplitude * cloud.direction, 0, -cloud.amplitude * cloud.direction, 0] }}
          transition={{
            repeat: Infinity,
            duration: cloud.duration,
            delay: cloud.delay,
            ease: "easeInOut",
          }}
          className={`w-[120px] h-[120px] absolute ${cloud.className} hidden sm:block`}
        />
      ))}


      <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg relative text-center z-10">
        <button
          className="absolute top-3 right-3 text-black cursor-pointer"
          onClick={() => router.back()}
        >
          <X size={20} />
        </button>

        <h2 className="text-[#FF6B0A] font-bold text-lg mb-1">ВАЖЛИВО!</h2>
        <p className="mb-1 text-[#4B4B4B] text-sm">Запис здійснюється</p>
        <p className="text-[#FF2F65] font-semibold text-sm mb-2">
          виключно у вказані дні та час:
        </p>
        <p className="mb-4 text-[#4B4B4B] text-sm">
          Понеділок–субота: з 09:00 до 18:00
        </p>

        <h3 className="text-[#FF2F65] font-extrabold mb-2">РОБОЧІ ДНІ ПРОЙОМУ:</h3>
        <ul className="text-sm text-[#4B4B4B] space-y-1 mb-3">
          <li>Вівторок: з 09:00 до 14:00</li>
          <li>Четвер: з 09:00 до 14:00</li>
          <li>Субота: з 09:00 до 14:00</li>
        </ul>

        <div className="text-[#FF6B0A] text-sm font-medium space-y-1 mb-4">
          <p>+380 (66)-21-01-302</p>
          <p>+380 (68)-21-01-302</p>
        </div>

        <Link
          href="/"
          className="bg-[#FF883A] text-white font-semibold px-6 py-2 text-sm rounded-full 
                     border-2 border-transparent 
                     hover:border-[#5DD3D3] hover:border-2 
                     hover:bg-[#FF6B0A] transition"
        >
          ПОВЕРНУТИСЯ НА САЙТ
        </Link>
      </div>
    </main>
  );
}
