import { HERO_CONTENT, CONTACT_INFO } from '../data';
import { ArrowUp, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="app-footer" className="bg-[#000002] text-white pt-20 pb-10 relative overflow-hidden border-t border-[#dacab0]/15">
      {/* Decorative sand circle behind footer info */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#dacab0]/5 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Logo Brand Segment */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#dacab0]/40">
                <img
                  src={HERO_CONTENT.logo}
                  alt="Horse Ville Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase">
                  Horse Ville
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#dacab0] font-mono">
                  Stadnina & Noclegi
                </span>
              </div>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
              Wyjątkowa stadnina koni połączona z komfortowym noclegiem w sercu natury. Stworzona z bezgranicznej pasji do koni i jeździectwa.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-[#dacab0]/30 flex items-center justify-center text-white hover:bg-[#dacab0] hover:text-[#000002] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={CONTACT_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-[#dacab0]/30 flex items-center justify-center text-white hover:bg-[#dacab0] hover:text-[#000002] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={CONTACT_INFO.socials.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-[#dacab0]/30 flex items-center justify-center text-white hover:bg-[#dacab0] hover:text-[#000002] transition-colors"
                aria-label="TikTok"
              >
                <span className="font-bold text-sm">🎵</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#dacab0]">Szybka Nawigacja</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>
                <a href="#o-nas" className="hover:text-white transition-colors">O nas</a>
              </li>
              <li>
                <a href="#noclegi" className="hover:text-white transition-colors">Komfortowe Noclegi</a>
              </li>
              <li>
                <a href="#konie" className="hover:text-white transition-colors">Nasze Konie</a>
              </li>
              <li>
                <a href="#dla-dzieci" className="hover:text-white transition-colors">Zajęcia dla dzieci</a>
              </li>
              <li>
                <a href="#opinie" className="hover:text-white transition-colors">Opinie Gości</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galeria Zdjęć</a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white transition-colors">Kontakt & Mapa</a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#dacab0]">Kontakt i Rezerwacja</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-[#dacab0] shrink-0 mt-0.5" />
                <span>Horse Ville<br />97-371 Pawłów Górny 11</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-[#dacab0]" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-[#dacab0]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom segment */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Horse Ville. Wszystkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <span>Zaprojektowane dla miłośników natury</span>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#dacab0] hover:text-[#000002] text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer border border-white/10"
              aria-label="Skocz na górę"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
