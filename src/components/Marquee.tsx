export default function Marquee() {
  const brands = [
    "PORSCHE", "FERRARI", "LAMBORGHINI", "MCLAREN", "ASTON MARTIN", "BENTLEY", "ROLLS ROYCE", "MASERATI"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black py-10 border-y border-white/10">
      {/* Maschere laterali per effetto sfumato */}
      <div className="absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent"></div>

      {/* Il contenitore che scorre */}
      <div className="flex w-max animate-marquee gap-16 md:gap-32">
        {/* Ripetiamo la lista 2 volte per creare il loop infinito */}
        {[...brands, ...brands].map((brand, index) => (
          <span 
            key={index} 
            className="text-2xl md:text-4xl font-display font-bold text-gray-800 uppercase tracking-widest hover:text-white transition-colors duration-500 cursor-default select-none"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}