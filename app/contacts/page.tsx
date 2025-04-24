"use client";

import React from "react";
import { MapPin, Clock, Phone, } from "lucide-react";

export default function ContactsPage() {
  const address = "Україна, м. Харків, вул. проїзд Стадіонний, 6/5";

  const hours = [
    { day: "Вівторок", time: "з 09:00 до 14:00" },
    { day: "Четвер", time: "з 09:00 до 14:00" },
    { day: "Субота", time: "з 09:00 до 14:00" },
  ];

  const phones = ["+380 (66)-21-01-302", "+380 (68)-21-01-302"];

  const social = [
    { Icon: Phone, link: "https://wa.me/380660101302" },
    { Icon: Phone, link: "https://t.me/yourchannel" },
    { Icon: Phone, link: "https://instagram.com/yourprofile" },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-start bg-pink-50 p-6 lg:p-12">
      <div className="flex-1 max-w-md">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">НАШІ КОНТАКТИ</h2>
        <div className="flex items-start gap-3 mb-5">
          <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
          <p className="text-gray-800">{address}</p>
        </div>
        <div className="flex items-start gap-3 mb-5">
          <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
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
          <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
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
          <p className="font-medium text-gray-800 mb-2">Ми у соцмережах:</p>
          <div className="flex items-center space-x-4">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 transition"
              >
                <s.Icon className="w-6 h-6 text-gray-700" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 mt-8 lg:mt-0 lg:ml-12 relative overflow-visible">
        <div className="w-full h-64 lg:h-96 rounded-2xl shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
