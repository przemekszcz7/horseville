import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function ContactForm() {
  return (
    <section id="kontakt" className="py-24 bg-[#faf8f4] relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#dacab0]/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#b8a486] inline-block mb-3 bg-[#dacab0]/20 px-3 py-1 rounded-full">
                Kontakt & Lokalizacja
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#000002] tracking-tight mb-6">
                Odwiedź nasze królestwo
              </h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Stadnina Horse Ville mieści się w cichej, sielskiej miejscowości Pawłów Górny. Zapraszamy do kontaktu telefonicznego, mailowego oraz do śledzenia naszych mediów społecznościowych!
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-[#dacab0]/20 shadow-sm">
                <div className="p-3 bg-[#dacab0]/20 rounded-xl text-[#b8a486]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">Adres obiektu</h4>
                  <p className="font-serif text-[#000002] text-lg font-bold">{CONTACT_INFO.address.line1}</p>
                  <p className="text-gray-600 font-light">{CONTACT_INFO.address.line2}</p>
                </div>
              </div>

              {/* Phone */}
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-[#dacab0]/20 shadow-sm hover:border-[#dacab0] transition-colors duration-300 group block"
              >
                <div className="p-3 bg-[#dacab0]/20 rounded-xl text-[#b8a486] group-hover:bg-[#dacab0] group-hover:text-white transition-colors duration-300">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">Zadzwoń do nas</h4>
                  <p className="font-serif text-[#000002] text-xl font-bold group-hover:text-[#b8a486] transition-colors">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-500 text-xs font-mono">Dostępni codziennie 8:00 - 20:00</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-[#dacab0]/20 shadow-sm hover:border-[#dacab0] transition-colors duration-300 group block"
              >
                <div className="p-3 bg-[#dacab0]/20 rounded-xl text-[#b8a486] group-hover:bg-[#dacab0] group-hover:text-white transition-colors duration-300">
                  <Mail size={22} />
                </div>
                <div className="break-all">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">Napisz wiadomość</h4>
                  <p className="font-serif text-[#000002] text-lg font-bold group-hover:text-[#b8a486] transition-colors">{CONTACT_INFO.email}</p>
                  <p className="text-gray-500 text-xs font-mono">Odpowiadamy zazwyczaj w ciągu 2 godzin</p>
                </div>
              </a>
            </div>

            {/* Social Media Link Buttons */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#b8a486] mb-4">Znajdziesz nas również na</h4>
              <div className="flex flex-wrap gap-3">
                <a 
                  href={CONTACT_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-white hover:bg-[#1877F2] hover:text-white border border-[#dacab0]/30 text-[#000002] px-5 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 shadow-sm"
                >
                  <Facebook size={16} />
                  Facebook
                </a>
                <a 
                  href={CONTACT_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white border border-[#dacab0]/30 text-[#000002] px-5 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 shadow-sm"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
                <a 
                  href={CONTACT_INFO.socials.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-white hover:bg-black hover:text-[#dacab0] border border-[#dacab0]/30 text-[#000002] px-5 py-3 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 shadow-sm"
                >
                  <span className="font-bold text-xs">🎵</span>
                  TikTok
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Google Map Embed Frame */}
          <div className="lg:col-span-7 flex h-full min-h-[450px]">
            <div className="rounded-3xl overflow-hidden border border-[#dacab0]/30 shadow-md w-full bg-white relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.708467493487!2d19.48292341263451!3d51.298088825854286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a1d000136268b%3A0xc1b6cb2624104e05!2sHorse%20Ville%20-%20noclegi%20w%20stadninie%20koni!5e0!3m2!1spl!2spl!4v1783598442238!5m2!1spl!2spl" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                title="Lokalizacja Horse Ville na mapie"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
