'use client'
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Marco B.",
    car: "Porsche 911 Carrera",
    text: "Professionalità assoluta. Il trattamento nanotecnologico ha dato alla vernice un gloss ineguagliabile. L'acqua scivola via all'istante.",
    stars: 5
  },
  {
    name: "Elena V.",
    car: "Audi RS6",
    text: "Abitacolo tornato come nuovo grazie al lavaggio a iniezione. L'odore di chiuso è sparito del tutto grazie al trattamento molecolare.",
    stars: 5
  },
  {
    name: "Stefano R.",
    car: "BMW M4",
    text: "Ottimo lavoro sull'oscuramento vetri. Pellicole di qualità e certificato di omologazione CH/IT consegnato subito. Precisione svizzera.",
    stars: 5
  },
  {
    name: "Luca T.",
    car: "Tesla Model Y",
    text: "Incredibile la rimozione dei peli del mio cane dalla moquette. Servizio impeccabile e plastiche esterne tornate nere come originali.",
    stars: 5
  },
  {
    name: "Giulia M.",
    car: "Ferrari Roma",
    text: "La lucidatura multi-step ha rimosso ogni micro-graffio. L'effetto specchio è davvero impressionante. Consigliatissimo.",
    stars: 5
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play ogni 5 secondi
  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.4em] text-red-600 uppercase mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display text-white uppercase tracking-tight">
              Client <span className="text-gray-500 italic">Experiences</span>
            </h3>
          </div>
          
          {/* Frecce di Navigazione */}
          <div className="flex gap-4">
            <button 
              onClick={prevReview}
              className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextReview}
              className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenitore Recensioni rimpicciolito */}
        <div className="relative h-[400px] md:h-[320px]">
          {reviews.map((rev, i) => (
            <div 
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                i === currentIndex 
                ? "opacity-100 translate-x-0" 
                : i < currentIndex ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12"
              }`}
            >
              {/* Card con larghezza limitata e centrata */}
              <div className="max-w-3xl mx-auto p-8 md:p-12 border border-white/10 rounded-3xl bg-[#080808] h-full flex flex-col justify-center shadow-2xl">
                <div className="flex gap-1 mb-6 text-red-600">
                  {[...Array(rev.stars)].map((_, s) => (
                    <svg key={s} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 text-lg md:text-2xl font-light italic leading-relaxed mb-8">
                  "{rev.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-red-600"></div>
                  <div>
                    <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.3em]">{rev.name}</h4>
                    <p className="text-gray-500 text-[9px] uppercase tracking-[0.2em] mt-1">{rev.car}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicatori inferiori */}
        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === currentIndex ? "w-10 bg-red-600" : "w-3 bg-white/10"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}