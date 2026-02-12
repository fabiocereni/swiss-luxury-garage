import Image from "next/image";

export default function ServicesGrid() {
  return (
    <section className="w-full max-w-[1800px] mx-auto px-4 py-24">
      
      {/* Titolo Sezione */}
      <div className="mb-16 text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] text-red-600 uppercase mb-4">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-display text-white uppercase tracking-tight">
          The Art of <span className="text-gray-500 italic">Perfection</span>
        </h3>
      </div>

      {/* GRIGLIA BENTO A 4 SERVIZI */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[700px]">
        
        {/* BOX 1: DETAILING */}
        <div className="group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-2xl border border-white/10 bg-black">
          {/* IMMAGINE DI SFONDO */}
          <Image 
            src="/services/detailing.jpeg"
            alt="Detailing"
            fill
            className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          {/* Gradiente per leggibilità testo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
          
          <div className="absolute bottom-0 left-0 p-10 z-20">
            <span className="text-red-600 text-[10px] font-bold tracking-widest uppercase mb-2 block">01 / Restoration</span>
            <h4 className="text-3xl font-bold text-white mb-3 uppercase tracking-tighter">Detailing</h4>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Trattamenti meticolosi per interni ed esterni. Riportiamo ogni superficie allo stato originale di fabbrica.
            </p>
          </div>
        </div>

        {/* BOX 2: CERAMIC COATING */}
        <div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image 
            src="/services/ceramic.avif" 
            alt="Ceramic Coating"
            fill
            className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
          
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <span className="text-red-600 text-[10px] font-bold tracking-widest uppercase mb-2 block">02 / Shield</span>
            <h4 className="text-2xl font-bold text-white uppercase tracking-tighter">Ceramic Coating</h4>
            <p className="text-gray-400 text-xs mt-2 max-w-xs">Protezione nanotecnologica a lunga durata per una lucentezza e idrofobicità imbattibili.</p>
          </div>
        </div>

        {/* BOX 3: LUCIDATURA */}
        <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image 
            src="/services/lucidatura.webp" 
            alt="Lucidatura"
            fill
            className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
          
          <div className="absolute bottom-0 left-0 p-6 z-20">
            <span className="text-red-600 text-[10px] font-bold tracking-widest uppercase mb-1 block">03 / Shine</span>
            <h4 className="text-xl font-bold text-white uppercase tracking-tighter">Lucidatura</h4>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Correzione difetti vernice</p>
          </div>
        </div>

        {/* BOX 4: OSCURAMENTO VETRI */}
        <div className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/10 bg-black">
          <Image 
            src="/services/oscuramento.webp" 
            alt="Oscuramento Vetri"
            fill
            className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>

          <div className="absolute bottom-0 left-0 p-6 z-20">
            <span className="text-red-600 text-[10px] font-bold tracking-widest uppercase mb-1 block">04 / Privacy</span>
            <h4 className="text-xl font-bold text-white uppercase tracking-tighter leading-tight">Oscuramento<br/>Vetri</h4>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">Pellicole oscuranti premium</p>
          </div>
        </div>

      </div>
    </section>
  );
}