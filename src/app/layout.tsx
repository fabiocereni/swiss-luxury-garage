import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google"; 
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-cinzel",
  weight: ["400", "700", "900"], // Devi mettere i pesi espliciti
  display: 'swap',
  preload: true,
  adjustFontFallback: false, // Impedisce al font di emergenza di "espandersi"
});

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      {/* Aggiungiamo subpixel-antialiased per rendere il font sottile e nitido come in locale */}
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-swiss-black antialiased`}>
          <Navbar />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}