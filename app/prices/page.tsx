import React from "react";

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
    <main className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-center text-cyan-900 mb-8">Прайс-лист</h1>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="grid grid-cols-[1fr_auto] gap-x-4 px-6 py-4 border-b border-gray-200">
          <span className="text-cyan-900 font-semibold">Послуги</span>
          <span className="text-cyan-900 font-semibold text-right">Ціна, грн</span>
        </div>

        <div className="">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center px-6 py-4">
              <span className="flex-shrink-0 text-gray-800">{item.name}</span>
              <span className="flex-grow border-t border-dashed border-gray-300 mx-4" />
              <span className="flex-shrink-0 text-gray-800">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
