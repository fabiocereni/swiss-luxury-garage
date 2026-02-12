'use client'
import Image from "next/image";
import Footer from "@/components/Footer";

const showcaseWorks = [
  {
    title: "Porsche 911 GT3",
    service: "Nanotecnologia & Protezione",
    description: "Applicazione di uno dei migliori rivestimenti ceramici per creare uno scudo contro raggi UV e sporco[cite: 45, 46].",
    image: "/services/ceramic.avif",
    tag: "Ceramic"
  },
  {
    title: "Ferrari 488 Pista",
    service: "Lucidatura Multi-Step",
    description: "Correzione della vernice per eliminare micro-graffi e ologrammi, ottenendo un effetto specchio ineguagliabile[cite: 24, 25].",
    image: "/services/lucidatura.webp",
    tag: "Correction"
  },
  {
    title: "Lamborghini Huracán",
    service: "Detailing Interno Completo",
    description: "Igienizzazione profonda con lavaggio ad i/e per sedili e moquette, eliminando macchie e rinnovando i colori[cite: 14, 16].",
    image: "/services/detailing.jpeg",
    tag: "Interior"
  },
  {
    title: "Mercedes G-Wagon",
    service: "Oscuramento Vetri Premium",
    description: "Applicazione di pellicole omologate (tonalità 5%) per massima privacy e riduzione del calore[cite: 27, 28].",
    image: "/services/oscuramento.webp",
    tag: "Privacy"
  },
  {
    title: "Audi RS6 Avant",
    service: "Trattamento Esterno No-Touch",
    description: "Prelavaggio alcalino e lavaggio acido in foam per rimuovere minerali e calcare senza toccare la vernice[cite: 4, 6].",
    image: "/services/detailing.jpeg",
    tag: "Exterior"
  },
  {
    title: "Range Rover SV",
    service: "Protezione Pelle & Tessuti",
    description: "Sigillante specifico per nutrire la pelle e nano-protezione idrofobica per le fibre dei tessuti[cite: 36, 37].",
    image: "/services/ceramic.avif",
    tag: "Care"
  }
];

export default function PortfolioPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-white/5">
        <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter mb-4">Showroom</h1>
        <p className="text-red-600 font-bold uppercase tracking-[0.5em] text-[10px]">L'eccellenza catturata in ogni dettaglio</p>
      </section>

      {/* GRIGLIA VETRINA LAVORI */}
      <section className="py-24 max-w-[1800px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {showcaseWorks.map((work, index) => (
            <div 
              key={index} 
              className="group relative h-[550px] overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a]"
            >
              {/* Immagine con effetto zoom e transizione colore */}
              <Image 
                src={work.image} 
                alt={work.title} 
                fill 
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
              />
              
              {/* Overlay gradiente per leggibilità */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

              {/* Contenuto Card */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-red-600 text-[9px] font-bold uppercase tracking-[0.5em] mb-3">{work.tag}</span>
                <h3 className="text-3xl font-display uppercase tracking-tight text-white mb-2">{work.title}</h3>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-6">{work.service}</p>
                
                {/* Descrizione tecnica dal PDF che appare in hover */}
                <p className="text-gray-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {work.description}
                </p>
                
                <div className="mt-8 w-16 h-[1px] bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}