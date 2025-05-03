import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Family Rehab — Центр сімейної реабілітації",
  description:
    "Сучасна допомога дітям та дорослим: невролог, психолог, масаж, діагностика. Безпечно, професійно, з любов’ю.",
  keywords: [
    "реабілітація",
    "дитячий невролог",
    "психолог",
    "масаж",
    "ЕЕГ",
    "Харків",
    "Family Rehab",
  ],
  authors: [{ name: "Family Rehab", url: "https://rehab-k5qzc47ho-maks-projects-5c427375.vercel.app/" }],
  creator: "Family Rehab",
  metadataBase: new URL("https://rehab-k5qzc47ho-maks-projects-5c427375.vercel.app/"),
  openGraph: {
    title: "Family Rehab — Центр сімейної реабілітації",
    description:
      "Сімейна підтримка, сучасна діагностика та турбота про здоров’я дітей і дорослих. Дізнайтесь більше про нас.",
    url: "https://rehab-k5qzc47ho-maks-projects-5c427375.vercel.app/",
    siteName: "Family Rehab",
    images: [
      {
        url: "/img/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Family Rehab — реабілітація дітей",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Rehab — Центр сімейної реабілітації",
    description:
      "Мануальна терапія, масаж, ЕЕГ, консультації для дітей та дорослих. Харків.",
    images: ["/img/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
