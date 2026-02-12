'use client'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0c10] pt-24 pb-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* GRIGLIA PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          {/* 1. BRAND & SOCIAL */}
          <div className="lg:col-span-2 pr-0 lg:pr-20">
            <div className="w-48 mb-8">
              <img 
                src="/logo.svg" 
                className="w-full h-auto" 
                alt="Swiss Luxury Garage" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Precisione Svizzera nella cura dell'auto. Trattamenti d'élite per preservare la bellezza e il valore della tua vettura nel tempo.
            </p>
            
            {/* ICONE SOCIAL */}
            <div className="flex gap-6 items-center">
              {/* Instagram */}
              <a href="https://www.instagram.com/swissluxurygarage/" target="_blank" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" target="_blank" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.783h-2.954v-3.429h2.954v-2.527c0-2.925 1.787-4.516 4.396-4.516 1.25 0 2.324.093 2.637.135v3.058l-1.811.001c-1.419 0-1.694.675-1.694 1.662v2.177h3.386l-.441 3.429h-2.945v8.783h6.135c.731 0 1.325-.593 1.325-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@swissluxurygarage?is_from_webapp=1&sender_device=pc" target="_blank" className="text-gray-500 hover:text-white transition-all transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.38 6.38 0 0 1-1.87-1.52v7.7c0 1.94-.64 3.92-2.15 5.16-1.52 1.25-3.69 1.63-5.59 1.15-1.92-.48-3.62-1.83-4.38-3.64-.76-1.81-.59-3.95.5-5.54 1.09-1.58 3.01-2.5 4.93-2.32 1-.03 2 .24 2.87.75V0l.02.02z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="#" target="_blank" className="text-gray-500 hover:text-green-500 transition-all transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* 2. MENU GARAGE */}
          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-8">Garage</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-[13px]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Showroom</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* 3. MENU SERVIZI */}
          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-8">Servizi</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-[13px]">
              <li><Link href="/services" className="hover:text-white transition-colors">Detailing Esterno</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Igienizzazione Interna</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Ceramic Coating</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Oscuramento Vetri</Link></li>
            </ul>
          </div>

          {/* 4. MENU LEGAL */}
          <div>
            <h4 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-8">Informazioni</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-[13px]">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* BARRA INFERIORE */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-gray-500">
            <span>© 2026 Swiss Luxury Garage</span>
            <span className="hidden md:inline text-white/10">|</span>
            <span>All rights reserved</span>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-4 bg-white/5 hover:bg-red-600 text-white rounded-lg transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}