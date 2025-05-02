import React from "react";
import HeroSection from "../components/HeroSection";

export default function PriceListPage() {
  const items = [
    { name: "Електроенцефалографія (ЕЕГ)", price: 350 },
    { name: "Електроенцефалографія з картуванням", price: 400 },
    { name: "Електроенцефалографія зі спектром ритмів", price: 400 },
    { name: "Електроенцефалографія з картуванням та спектром ритмів", price: 450 },
    { name: "Ехоенцефалографія (ЕХО-ЕС)", price: 200 },
    { name: "Нейросонографія з допплерометрією (НСГ + ТД)", price: 400 },
    { name: "Допплерографія судин голови та шиї (УЗД)", price: 350 },
    { name: "Реоенцефалографія судин головного мозку (РЕГ)", price: 200 },
    { name: "Консультація невролога дитячого", price: 400 },
    { name: "Консультація невролога дорослого", price: 500 },
    { name: "Викликані потенціали (слухові та зорові)", price: 500 },
    { name: "Енцефалографія нічного сну (нічний моніторинг)", price: 5300 },
    { name: "Енцефалографія денного сну (денний моніторинг)", price: 3200 },
    { name: "УЗД тазостегнового суглоба (до 6 міс)", price: 400 },
    { name: "Консультація психолога дитячого (до 14 років)", price: 450 },
    { name: "Консультація психолога дитячого (з 14 до 16 років)", price: 500 },
    { name: "Консультація психолога дорослого (з 16 років)", price: 600 },
    { name: "Консультація логопеда дитячого", price: 450 },
    { name: "Прийом невролога дорослого з сеансом мануальної терапії", price: 800 },
    { name: "Електроміографія стимуляційна (одна зона)", price: 850 },
    { name: "Електроміографія ізоляція", price: 1850 },
    { name: "Носії з записом ЕЕГ денного або нічного сну", price: 1000 },
  ];

  return (
    <>
    <HeroSection
          heading="Family Rehab"
          paragraph="Ціни"
          imageSrc="/frame-price.svg"
          buttonText="записатися"
          buttonHref="#about"
        />
    <main className="min-h-screen bg-pink-50 p-4 sm:p-6">
    <div className="max-w-[1451px] mx-auto rounded-2xl overflow-hidden">
      <div className="hidden sm:grid grid-cols-[1fr_auto] gap-x-4 px-6 sm:px-12 py-4">
        <h1 className="text-5xl max-w-[1451px] font-bold uppercase text-[#5DD3D3]">послуги</h1>
        <h1 className="text-5xl max-w-[1451px] font-bold text-[#5DD3D3]">ЦIНА, грн</h1>
      </div>
      <div>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center gap-2 px-6 sm:px-12 py-4 border-b border-gray-100"
          >
            <span className="text-gray-800 w-[240px] text-sm sm:text-base">{item.name}</span>
            <div className="hidden sm:block flex-grow border-t border-dashed border-gray-300 mx-4" />
            <span className="text-gray-800 text-sm sm:text-base sm:text-right sm:w-24">
              {item.price} грн
            </span>
          </div>
        ))}
      </div>
    </div>
  </main>
  </>
  );
}
