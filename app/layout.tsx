import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterHotair from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HotAir Balloons Luxor - Cappadocia Adventures",
  description: "Experience the magic of Cappadocia with our hot air balloon tours. Discover stunning landscapes, cultural heritage, and unforgettable adventures in Turkey's most beautiful region.",
  keywords: "Cappadocia, hot air balloon, Turkey, travel, adventure, tours, Luxor",
  authors: [{ name: "HotAir Balloons Luxor" }],
  openGraph: {
    title: "HotAir Balloons Luxor - Cappadocia Adventures",
    description: "Experience the magic of Cappadocia with our hot air balloon tours.",
    type: "website",
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
        {children}
        <FooterHotair />
      </body>
    </html>
  );
}
