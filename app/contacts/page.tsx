"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import Image from "next/image";

export default function ContactsPage() {
  const address = "Україна, м. Харків, вул. проїзд Стадіонний, 6/5";

  const hours = [
    { day: "Вівторок", time: "з 09:00 до 14:00" },
    { day: "Четвер", time: "з 09:00 до 14:00" },
    { day: "Субота", time: "з 09:00 до 14:00" },
  ];

  const phones = ["+380 (66)-21-01-302", "+380 (68)-21-01-302"];

  return (
    <>
    <HeroSection
          heading="Family Rehab"
          paragraph="контакти"
          imageSrc="/img/frame-contact.svg"
          buttonText="записатися"
          buttonHref="/regiester"
        />
   <section className="bg-pink-50 py-6 lg:py-12">
    <div className="max-w-[1451px] mx-auto w-full px-6 lg:px-12 flex flex-col lg:flex-row items-start">
      <div className="flex-1 max-w-md">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-10 font-bold uppercase text-[#5DD3D3] text-center lg:text-left">нашi контакти</h2>
        <div className="flex items-start gap-3 mb-5">
          <Image src='/img/footer/healthicons_geo-location-24px.svg' width={30} height={30} alt="location" />
          <p className="text-gray-800">{address}</p>
        </div>
        <div className="flex items-start gap-3 mb-5 mt-10">
          <Image src='/img/footer/basil_clock-solid.svg' width={30} height={30} alt="basil_clock" />
          <div>
            <p className="font-medium text-gray-800 mb-1">Центр працює:</p>
            <ul className="text-gray-700 space-y-1">
              {hours.map((h, i) => (
                <li key={i}>
                  {h.day}: <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-3 mb-5">
          <Image src='/img/footer/phone.svg' width={30} height={30} alt="phone" />
          <ul className="text-gray-800 space-y-1">
            {phones.map((tel, i) => (
              <li key={i}>
                <a href={`tel:${tel.replace(/[^+\d]/g, "")}`} className="hover:underline">
                  {tel}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium mt-20 uppercase text-gray-800 mb-2">Ми у соцмережах:</p>
          <div className="flex items-center space-x-4">
            <a
              href="viber://chat?number=+380660101302"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition"
            >
              <Image
                src="/img/footer/basil_viber-outline.svg"
                alt="viber"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://t.me/yourchannel"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition"
            >
              <Image
                src="/img/footer/ri_telegram-line.svg"
                alt="telegram"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition"
            >
              <Image
                src="/img/footer/ri_instagram-line.svg"
                alt="instagram"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-8 lg:mt-0 lg:ml-12 relative w-full overflow-visible">
  <div className="w-full h-64 lg:h-120 overflow-hidden flex justify-center">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.859464326589!2d36.3242445!3d49.9577387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270a52555de29d%3A0x9c252d6ba7f70f5e!2sStadionnyi%20Passage%2C%206-5%2C%20Kharkiv%2C%20Kharkivs&#39;ka%20oblast%2C%2061000!5e0!3m2!1sen!2sua!4v1746216668458!5m2!1sen!2sua"
      className="w-[90%] h-full border-0"
      loading="lazy"
    ></iframe>
  </div>
</div>
</div>
  </section>

    </>
  );
}
