'use client'
import Image from "next/image";
import Footer from "@/components/Footer";

const serviceSections = [
  {
    id: "detailing-esterno",
    title: "Trattamento Esterno",
    tagline: "Lucentezza e protezione no-touch",
    description: "Un protocollo ideale per ridare vita alla carrozzeria evitando graffi grazie a tecniche a doppio secchio o senza contatto.",
    details: [
      "Prelavaggio alcalino per sporco organico e insetti",
      "Decontaminazione ferrosa specifica per cerchi e canali",
      "Lavaggio acido per eliminare minerali e calcare",
      "Sigillatura rapida spray per gloss e idrorepellenza",
      "Asciugatura tecnica con soffiatore ad aria calda",
      "Dressing pneumatici protettivo (lucido o satinato)"
    ],
    image: "/services/detailing.jpeg"
  },
  {
    id: "detailing-interno",
    title: "Cura degli Interni",
    tagline: "Igienizzazione profonda e restauro",
    description: "Trattamento completo per abitacoli, utilizzando macchinari professionali a iniezione/estrazione per tessuti e moquette.",
    details: [
      "Aspirazione profonda di ogni fibra e intercapedine",
      "Lavaggio a iniezione/estrazione per macchie ostinate",
      "Pulizia plastiche con prodotti antistatici e scrub pad",
      "Sgrassatura vetri interni senza residui o aloni",
      "Trattamento specifico per rimozione peli di animali",
      "Neutralizzazione molecolare degli odori (fumo, cibo, chiuso)"
    ],
    image: "/services/lucidatura.webp"
  },
  {
    id: "protezione",
    title: "Protezione Avanzata",
    tagline: "Tecnologia e Omologazione",
    description: "Dalla correzione della vernice alla nanotecnologia, proteggiamo il valore del tuo veicolo nel tempo.",
    details: [
      "Lucidatura multi-step per effetto specchio ineguagliabile",
      "Rivestimento ceramico contro raggi UV e piogge acide",
      "Oscuramento vetri omologato CH e IT (diverse tonalità)",
      "Protezione pelle (nutrizione e anti-trasferimento colore)",
      "Nano-protezione idrofobica per tessuti e moquette",
      "Rinnovamento plastiche esterne sbiadite"
    ],
    image: "/services/ceramic.avif"
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HEADER DELLA PAGINA */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-white/5">
        <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter mb-6">Services</h1>
        <p className="text-red-600 text-xs font-bold uppercase tracking-[0.5em]">Swiss Luxury Garage Expertise</p>
      </section>

      {/* LISTA SERVIZI ALTERNATA */}
      <section className="py-24 max-w-[1400px] mx-auto px-6">
        {serviceSections.map((section, index) => (
          <div key={section.id} className={`flex flex-col lg:flex-row gap-16 mb-40 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Foto del servizio */}
            <div className="w-full lg:w-1/2 relative h-[450px] rounded-2xl overflow-hidden border border-white/10">
              <Image 
                src={section.image} 
                alt={section.title} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Testi e Dettagli dal PDF */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-display uppercase leading-tight">{section.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed">{section.description}</p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {section.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-gray-300">
                    <span className="w-1 h-1 bg-red-600 rounded-full flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* SEZIONE PACK COMPLETO */}
      <section className="bg-white text-black py-20 px-6 text-center">
        <h3 className="text-3xl font-display uppercase mb-4 text-red-600">Pacchetto Completo</h3>
        <p className="max-w-2xl mx-auto text-sm uppercase tracking-widest font-bold">
          Include tutte le fasi descritte nei trattamenti interno ed esterno per un rinnovo totale della tua auto.
        </p>
      </section>

      <Footer />
    </main>
  );
}