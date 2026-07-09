import { motion } from 'motion/react';
import { 
  Check, 
  Star, 
  Heart, 
  Trees, 
  Award, 
  Calendar, 
  MessageSquare, 
  Sparkles, 
  Compass, 
  ChevronDown, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

import Header from './components/Header';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { 
  HERO_CONTENT, 
  ABOUT_CONTENT, 
  ACCOMMODATION_CONTENT, 
  HORSES_CONTENT, 
  KIDS_CONTENT, 
  TESTIMONIALS 
} from './data';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#faf8f4] flex flex-col selection:bg-[#dacab0] selection:text-[#000002]">
      {/* Sticky header */}
      <Header />

      {/* --- HERO SECTION --- */}
      <section 
        id="top" 
        className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden"
      >
        {/* Fullscreen Hero background image with sophisticated darkening overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_CONTENT.heroImage} 
            alt="Horse Ville Hero background" 
            className="w-full h-full object-cover filter brightness-[0.42] scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000002]/40 via-transparent to-[#faf8f4]" />
        </div>

        {/* Content container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16">
          
          {/* Small decorative logo/badge inside Hero */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex flex-col items-center gap-2"
          >
            <div className="w-20 h-20 rounded-full border-2 border-[#dacab0] p-1 bg-white/10 backdrop-blur-md overflow-hidden shadow-xl">
              <img 
                src={HERO_CONTENT.logo} 
                alt="Horse Ville Badge Logo" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-extrabold tracking-tight mb-4 drop-shadow-sm"
          >
            {HERO_CONTENT.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-serif text-lg sm:text-2xl lg:text-3xl text-[#dacab0] font-light tracking-widest uppercase mb-8"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          {/* Brief description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base sm:text-lg text-white/95 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-shadow-sm"
          >
            {HERO_CONTENT.description}
          </motion.p>

          {/* Elegant Call to action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              id="hero-reserve-btn"
              onClick={() => scrollToSection('#kontakt')}
              className="w-full sm:w-auto px-8 py-4 bg-[#dacab0] text-[#000002] hover:bg-white hover:text-[#000002] rounded-full text-xs font-mono tracking-widest uppercase font-bold shadow-lg shadow-black/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Zarezerwuj pobyt
            </button>
            <button
              id="hero-contact-btn"
              onClick={() => scrollToSection('#kontakt')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/45 rounded-full text-xs font-mono tracking-widest uppercase font-bold backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Skontaktuj się
            </button>
          </motion.div>

          {/* Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-white/75 hover:text-white"
            onClick={() => scrollToSection('#o-nas')}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Więcej o nas</span>
            <ChevronDown size={18} className="animate-bounce text-[#dacab0]" />
          </motion.div>

        </div>
      </section>


      {/* --- SECTION: O NAS (ABOUT US) --- */}
      <section id="o-nas" className="py-28 bg-[#faf8f4] relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#dacab0]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Column 1: Editorial Heading & Highlight */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#b8a486] inline-flex items-center gap-2 bg-[#dacab0]/20 px-3 py-1 rounded-full">
                <Compass size={12} />
                {ABOUT_CONTENT.title}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#000002] tracking-tight leading-none">
                {ABOUT_CONTENT.accentText}
              </h2>
              <div className="h-1 w-20 bg-[#dacab0]" />
            </div>

            {/* Column 2: Refined Editorial Paragraphs with Icons */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6 text-gray-700 text-lg font-light leading-relaxed">
                {ABOUT_CONTENT.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Bento-style micro stats or atmosphere highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#dacab0]/30">
                <div className="space-y-1">
                  <div className="text-2xl font-serif text-[#000002] flex items-center gap-1.5 font-bold">
                    <Trees size={20} className="text-[#b8a486]" />
                    Sielanka
                  </div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Spokojna, zielona okolica</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-serif text-[#000002] flex items-center gap-1.5 font-bold">
                    <Heart size={20} className="text-[#b8a486]" />
                    Pasja
                  </div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Miłość i troska o konie</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-serif text-[#000002] flex items-center gap-1.5 font-bold">
                    <Award size={20} className="text-[#b8a486]" />
                    Komfort
                  </div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Wyposażone pokoje noclegowe</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- SECTION: NOCLEGI (ACCOMMODATION) --- */}
      <section id="noclegi" className="py-28 bg-white relative overflow-hidden">
        {/* Custom background image frame on the right side */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#dacab0]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            
            {/* Center Content: Descriptions & Checklist */}
            <div className="max-w-3xl w-full text-center space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#b8a486] inline-block mb-3 bg-[#dacab0]/20 px-3 py-1 rounded-full">
                  Komfort & Wypoczynek
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#000002] tracking-tight mb-4">
                  {ACCOMMODATION_CONTENT.heading}
                </h3>
                <p className="text-gray-600 font-light text-lg">
                  {ACCOMMODATION_CONTENT.subheading}
                </p>
              </div>

              {/* Checklist details styled with sand color blocks */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ACCOMMODATION_CONTENT.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center text-center bg-[#faf8f4] p-4 rounded-xl border border-[#dacab0]/20">
                    <div className="w-8 h-8 rounded-full bg-[#dacab0] text-[#000002] flex items-center justify-center shrink-0 shadow-sm font-bold mb-2">
                      <Check size={16} />
                    </div>
                    <span className="text-[#000002] font-medium tracking-wide">
                      {feature.charAt(0).toUpperCase() + feature.slice(1)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t-4 border-[#dacab0] bg-[#faf8f4] rounded-2xl">
                <p className="text-[#000002] font-serif italic text-lg leading-relaxed">
                  "{ACCOMMODATION_CONTENT.footerText}"
                </p>
              </div>

              <div>
                <button
                  id="accommodation-cta-btn"
                  onClick={() => scrollToSection('#kontakt')}
                  className="inline-flex items-center gap-3 bg-[#000002] text-[#dacab0] hover:bg-[#dacab0] hover:text-[#000002] px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase font-bold transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Calendar size={14} />
                  Zarezerwuj pobyt noclegowy
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- SECTION: KONIE (HORSES) --- */}
      <section id="konie" className="py-28 bg-[#faf8f4] relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#dacab0]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Info, checklist & Kids banner */}
            <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#b8a486] inline-block mb-3 bg-[#dacab0]/25 px-3 py-1 rounded-full">
                  Edukacja i Jeździectwo 🐴
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#000002] tracking-tight mb-4">
                  {HORSES_CONTENT.heading}
                </h3>
                <p className="text-gray-600 font-light text-lg">
                  {HORSES_CONTENT.subheading}
                </p>
              </div>

              {/* Horses checklist */}
              <div className="space-y-3.5">
                {HORSES_CONTENT.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#dacab0]/20 text-[#b8a486] flex items-center justify-center shrink-0 border border-[#dacab0]/30 font-bold">
                      <Check size={14} />
                    </div>
                    <span className="text-[#000002]/95 text-base font-light tracking-wide">
                      {feature.charAt(0).toUpperCase() + feature.slice(1)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Safely, kind activities label */}
              <div className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-[#dacab0]/20 shadow-sm">
                <div className="p-3 bg-[#dacab0]/20 rounded-xl text-[#b8a486] shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  <strong className="text-[#000002] block font-serif text-base mb-1">Zajęcia pod okiem instruktorów</strong>
                  {HORSES_CONTENT.kidsLabel}
                </p>
              </div>
            </div>

            {/* Right Column: Large Image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-[#dacab0]/25">
                <img 
                  src="https://i.ibb.co/qLNyXfQh/728963435-17946010986217281-4974911807032600938-n.jpg" 
                  alt="Nauka jazdy konnej w Horse Ville" 
                  className="w-full h-full object-cover filter brightness-[0.98]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- SECTION: DLA DZIECI (KIDS) --- */}
      <section id="dla-dzieci" className="py-28 bg-white relative overflow-hidden">
        {/* Subtle gold decoration circle */}
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#dacab0]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             {/* Left Column: Visual Kid Riding Pony */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-[#dacab0]/20">
                <img 
                  src="https://i.ibb.co/hxVVRzrc/729385513-17946011028217281-5107512005845471396-n.jpg" 
                  alt="Dzieci poznające kucyki w Horse Ville" 
                  className="w-full h-full object-cover filter brightness-[0.98]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Text Information & Safety Badge */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#b8a486] inline-block mb-3 bg-[#dacab0]/20 px-3 py-1 rounded-full">
                  Młodzież & Najmłodsi
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#000002] tracking-tight mb-4">
                  {KIDS_CONTENT.heading}
                </h3>
                <p className="text-gray-600 font-light text-lg">
                  {KIDS_CONTENT.description}
                </p>
              </div>

              {/* Safety, patience banner */}
              <div className="p-6 bg-[#faf8f4] border border-[#dacab0]/35 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 bg-[#dacab0]/30 rounded-bl-2xl text-[#b8a486]">
                  <Users size={20} />
                </div>
                <h4 className="font-serif text-lg text-[#000002] font-bold mb-1">Nasza misja:</h4>
                <p className="text-gray-700 italic font-light">
                  "{KIDS_CONTENT.highlight}"
                </p>
              </div>

              <div>
                <button
                  id="kids-cta-btn"
                  onClick={() => scrollToSection('#kontakt')}
                  className="inline-flex items-center gap-3 bg-[#000002] text-[#dacab0] hover:bg-[#dacab0] hover:text-[#000002] px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase font-bold transition-all duration-300 shadow-md cursor-pointer"
                >
                  <Sparkles size={14} />
                  Zapytaj o lekcje dla dziecka
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- SECTION: GALLERY (DYNAMIC COMPONENT) --- */}
      <Gallery />


      {/* --- SECTION: OPINIE (TESTIMONIALS) --- */}
      <section id="opinie" className="py-24 bg-[#000002] text-white relative overflow-hidden">
        {/* Subtle ambient lighting effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#dacab0]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#dacab0] inline-flex items-center gap-2 mb-3 bg-white/5 px-3 py-1 rounded-full border border-[#dacab0]/20">
              <MessageSquare size={12} />
              Opinie Naszych Gości
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">
              Słowa uznania, które budują Horse Ville
            </h2>
            <div className="h-1 w-20 bg-[#dacab0] mx-auto mt-6 mb-4" />
          </div>

          {/* Testimonial grid structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-white/[0.04] p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:bg-white/[0.07] hover:border-[#dacab0]/30 transition-all duration-300 shadow-lg relative"
              >
                {/* 5-star rating graphic */}
                <div className="flex gap-1 text-[#dacab0] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial text block */}
                <p className="text-gray-300 font-light leading-relaxed italic text-sm md:text-base mb-2">
                  "{t.content}"
                </p>
              </div>
            ))}
          </div>

          {/* Slogan highlight */}
          <div className="mt-16 text-center">
            <p className="text-[#dacab0]/80 font-serif text-lg italic">
              Dołącz do grona zadowolonych gości i stwórz własną opowieść w Horse Ville
            </p>
          </div>
        </div>
      </section>


      {/* --- SECTION: CONTACT & MAP (DYNAMIC COMPONENT) --- */}
      <ContactForm />


      {/* --- FOOTER & BRANDING (DYNAMIC COMPONENT) --- */}
      <Footer />

    </div>
  );
}
