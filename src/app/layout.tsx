import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google"; 
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata = {
  title: 'Swiss Luxury Garage', // Definisce il testo pulito che vedi nella scheda
  description: 'Premium Car Detailing & Protection',
  icons: {
    icon: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-swiss-black antialiased`}>
        
        {/* 2. INSERISCI IL COMPONENTE QUI */}
        <Navbar />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}