'use client'
import { useRef } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react"; 
import Marquee from "@/components/Marquee";
import ServicesGrid from "@/components/ServicesGrid";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

import Link from "next/link";

export default function Home() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // La tua animazione originale
    tl.from(logoRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: "power3.out"
    })
    .from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1")
    .from(subtitleRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.2
    });

  }, { scope: containerRef });

  return (
    // Rimosso 'justify-center' dal main per permettere agli altri pezzi di stare sotto
    <main ref={containerRef} className="bg-swiss-black text-white">
      
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* SFONDO CINEMATOGRAFICO */}
      <div className="absolute inset-0 z-0">
        {/* Option A: Video (Consigliato per Luxury) */}
        {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video> */}
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay per profondità */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-swiss-black"></div>
      </div>

      {/* CONTENUTO CENTRALE */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">        

        {/* TITOLO CON STILE ATELIER */}
        <div ref={titleRef} className="space-y-4">
          <h1 className="font-display text-5xl md:text-9xl uppercase tracking-tighter text-white leading-none">
            Swiss Luxury <span className="text-red-600">Garage</span>
          </h1>
          <div className="h-[1px] w-24 bg-red-600 mx-auto mt-6"></div>
        </div>
        
        {/* SOTTOTITOLO */}
        <p ref={subtitleRef} className="mt-8 font-sans text-[10px] md:text-xs tracking-[0.5em] text-gray-400 uppercase">
          The Art of Car Preservation & Protection
        </p>

        {/* CTA RAPIDA */}
        <div className="mt-12 flex gap-6">
          <Link 
            href="/services" 
            className="px-8 py-4 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 no-underline"
          >
            Esplora Servizi
          </Link>
        </div>
      </div>

      {/* INDICATORE SCROLL (In basso al centro) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
    </section>

      {/* --- SEZIONE 2: MARCHI SCORREVOLI --- */}
      <Marquee />

      {/* --- SEZIONE 3: GRIGLIA SERVIZI --- */}
      <ServicesGrid />


      {/* ============================================================
    SEZIONE CTA (Call to Action) - TESTO SOPRA IMMAGINE
    ============================================================ */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden border-t border-white/5">
        {/* Sfondo Immagine con Overlay Scuro per la leggibilità */}
        <div className="absolute inset-0">
          <img 
            src="/services/detailing.jpeg" 
            alt="Background" 
            className="w-full h-full object-cover grayscale opacity-40" 
          />
          {/* Gradiente nero che copre l'immagine per far risaltare il testo bianco */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <p className="text-red-600 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">
            Swiss Precision
          </p>
          <h3 className="text-4xl md:text-6xl font-display text-white uppercase mb-10 leading-tight">
            Il Tuo Gioiello Merita <br/> 
            <span className="text-gray-500 italic font-light">L'Eccellenza</span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all duration-500">
              Prenota Ora
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all duration-500">
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Reviews />
      
      {/* --- SEZIONE 4: FOOTER --- */}
      <Footer />

    </main>
  );
}