'use client'
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* --- HERO CONTACT --- */}
      <section className="pt-40 pb-20 px-6 text-center border-b border-white/5 bg-[#050505]">
        <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter mb-6">Contatti</h1>
        <p className="text-red-600 text-[10px] font-bold uppercase tracking-[0.5em]">Swiss Luxury Garage — Mendrisio</p>
      </section>

      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* --- COLONNA SINISTRA: INFO DI CONTATTO --- */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-600 mb-6">Atelier Location</h2>
              <p className="text-3xl font-display uppercase leading-snug">
                Via Alla Riva <br />
                6850 Mendrisio <br />
                Ticino, Svizzera
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Digital Inquiries</h3>
              <p className="text-xl font-light hover:text-red-600 transition-colors lowercase">swissluxurygarage@gmail.com</p>
              <p className="text-xl font-bold">+41 (0) 91 123 45 67</p>
            </div>

            {/* --- NUOVA SEZIONE SOCIAL CON LOGHI --- */}
            <div className="pt-10 border-t border-white/10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500 mb-8">Social & Messaging</h3>
              <div className="flex gap-8 items-center">
                {/* Instagram */}
                <a href="https://www.instagram.com/swissluxurygarage/" target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* Facebook */}
                <a href="#" target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.516 4.396-4.516 1.25 0 2.324.093 2.637.135v3.058l-1.811.001c-1.419 0-1.694.675-1.694 1.662v2.177h3.386l-.441 3.429h-2.945v8.783h6.135c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@swissluxurygarage?is_from_webapp=1&sender_device=pc" target="_blank" className="text-gray-400 hover:text-white transition-all transform hover:scale-110">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.38 6.38 0 0 1-1.87-1.52v7.7c0 1.94-.64 3.92-2.15 5.16-1.52 1.25-3.69 1.63-5.59 1.15-1.92-.48-3.62-1.83-4.38-3.64-.76-1.81-.59-3.95.5-5.54 1.09-1.58 3.01-2.5 4.93-2.32 1-.03 2 .24 2.87.75V0l.02.02z"/></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/tuonumero" target="_blank" className="text-gray-400 hover:text-green-500 transition-all transform hover:scale-110">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="p-6 border border-red-600/20 rounded-xl bg-red-600/5">
                <p className="text-[10px] uppercase tracking-widest leading-relaxed text-gray-300 italic">
                    Nota: Per i servizi di oscuramento vetri, forniamo certificati di omologazione validi per Svizzera (CH) e Italia (IT).
                </p>
            </div>
          </div>

          {/* --- COLONNA DESTRA: FORM DI CONTATTO --- */}
          <div className="bg-[#0a0a0a] p-10 rounded-2xl border border-white/5">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Nome e Cognome</label>
                  <input type="text" required className="bg-transparent border-b border-white/20 py-2 focus:border-red-600 outline-none transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Email</label>
                  <input type="email" required className="bg-transparent border-b border-white/20 py-2 focus:border-red-600 outline-none transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Modello Auto</label>
                <input type="text" placeholder="es. Ferrari 488 Pista" className="bg-transparent border-b border-white/20 py-2 focus:border-red-600 outline-none transition-colors" />
              </div>

              {/* SELEZIONE MULTIPLA SERVIZI */}
              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Servizi d'interesse</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { id: "esterno", label: "Detailing Esterno" },
                    { id: "interno", label: "Detailing Interno" },
                    { id: "completo", label: "Pacchetto Completo" },
                    { id: "ceramic", label: "Ceramic Coating" },
                    { id: "lucidatura", label: "Lucidatura" },
                    { id: "vetri", label: "Oscuramento Vetri" },
                    { id: "pelle", label: "Protezione Pelle/Tessuti" },
                    { id: "odori", label: "Rimozione Odori" }
                  ].map((service) => (
                    <label key={service.id} className="flex items-center gap-3 p-4 border border-white/10 rounded-lg hover:border-red-600/50 transition-all cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-red-600 bg-transparent border-white/20 rounded focus:ring-0" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Messaggio</label>
                <textarea rows={4} className="bg-transparent border border-white/10 p-4 focus:border-red-600 outline-none transition-colors rounded-lg text-sm" placeholder="Richieste particolari..." />
              </div>

              <button className="group relative w-full py-6 bg-white text-black font-bold uppercase tracking-[0.4em] text-[10px] overflow-hidden transition-all hover:text-white">
                <span className="relative z-10">Invia Richiesta Preventivo</span>
                <div className="absolute inset-0 bg-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}