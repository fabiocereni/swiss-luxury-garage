'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Garage", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Showroom", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Impedisce lo scroll della pagina quando il menu è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* BARRA SUPERIORE - Z-Index 120 per stare SOPRA l'overlay */}
      <nav className="fixed top-0 left-0 w-full z-[120] px-6 md:px-10 py-6 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="flex justify-between items-center w-full max-w-[1800px] mx-auto">
          
          {/* 1. LOGO */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img 
              src="/logo.svg" 
              alt="Swiss Luxury Garage" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* 2. MENU DESKTOP */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[13px] font-bold uppercase tracking-[0.25em] !text-white hover:text-red-600 transition-colors duration-300 no-underline hover:underline hover:underline-offset-[10px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. TASTO PRENOTA & TRIGGER MOBILE */}
          <div className="flex justify-end items-center gap-6">
            <Link 
              href="/contact" 
              className="hidden lg:block group relative px-6 py-2 overflow-hidden border border-white/30 !text-white transition-all hover:border-red-600 no-underline"
            >
              <span className="relative z-10 text-[12px] font-bold uppercase tracking-[0.25em]">
                Prenota
              </span>
              <div className="absolute inset-0 h-full w-full bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></div>
            </Link>

            {/* BOTTONE HAMBURGER / X (Sempre visibile) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none relative"
            >
              <span className={`w-7 h-[2px] bg-white absolute transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
              <span className={`w-7 h-[2px] bg-white absolute transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-7 h-[2px] bg-white absolute transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENU MOBILE OVERLAY - Z-Index 110 per stare SOTTO la barra ma sopra il sito --- */}
      <div className={`fixed inset-0 bg-black z-[110] flex flex-col transition-all duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex-1 flex flex-col items-center justify-center gap-10 px-6 mt-20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display font-bold uppercase tracking-[0.15em] !text-white hover:text-red-600 transition-colors no-underline"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 px-12 py-5 bg-red-700 text-white text-[14px] font-bold uppercase tracking-[0.3em] no-underline"
          >
            Prenota Ora
          </Link>
        </div>
        
        <div className="pb-16 text-center opacity-30">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white">Mendrisio • Switzerland</p>
        </div>
      </div>
    </>
  );
}