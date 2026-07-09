import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Heart } from 'lucide-react';
import { HERO_CONTENT, CONTACT_INFO } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25, ease: 'easeInOut' } },
  };

  const panelVariants = {
    hidden: { 
      x: '100%',
      transition: { 
        type: 'spring', 
        damping: 38, 
        stiffness: 340,
        mass: 0.9
      } 
    },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 32,
        stiffness: 260,
        mass: 0.85,
        staggerChildren: 0.04,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 25 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: 'spring', 
        damping: 22, 
        stiffness: 200 
      } 
    },
  };

  const navItems = [
    { label: 'O nas', href: '#o-nas' },
    { label: 'Noclegi', href: '#noclegi' },
    { label: 'Konie', href: '#konie' },
    { label: 'Dla dzieci', href: '#dla-dzieci' },
    { label: 'Opinie', href: '#opinie' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#dacab0]/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Branding */}
            <a
              id="header-brand-link"
              href="#top"
              onClick={(e) => handleNavClick(e, '#top')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#dacab0] shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  id="header-logo-img"
                  src={HERO_CONTENT.logo}
                  alt="Horse Ville Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-[#000002] group-hover:text-[#b8a486] transition-colors duration-300">
                  Horse Ville
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#b8a486] -mt-1 font-mono">
                  Stadnina & Noclegi
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  id={`nav-item-${item.href.replace('#', '')}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium tracking-wide text-[#000002]/80 hover:text-[#000002] relative py-1 group transition-colors duration-200"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#dacab0] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                id="header-phone-btn"
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase border border-[#dacab0] text-[#000002] hover:bg-[#dacab0]/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                <Phone size={14} className="text-[#b8a486]" />
                {CONTACT_INFO.phone}
              </a>
              <a
                id="header-reserve-btn"
                href="#kontakt"
                onClick={(e) => handleNavClick(e, '#kontakt')}
                className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase bg-[#dacab0] text-[#000002] hover:bg-[#000002] hover:text-[#dacab0] px-5 py-2.5 rounded-full font-bold shadow-md shadow-[#dacab0]/20 transition-all duration-300"
              >
                <Calendar size={14} />
                Zarezerwuj
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-[#000002] hover:bg-[#dacab0]/15 lg:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-nav-panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#faf8f4] p-6 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center justify-between mb-8 border-b border-[#dacab0]/20 pb-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={HERO_CONTENT.logo}
                      alt="Horse Ville Logo"
                      className="w-10 h-10 rounded-full object-cover border border-[#dacab0]"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-serif text-lg font-bold tracking-wider text-[#000002] uppercase">
                      Horse Ville
                    </span>
                  </div>
                  <button
                    id="mobile-menu-close"
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-[#dacab0]/20 text-[#000002]"
                  >
                    <X size={20} />
                  </button>
                </motion.div>

                <nav id="mobile-nav-links" className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      variants={itemVariants}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-lg font-medium tracking-wide text-[#000002] hover:text-[#b8a486] py-1 border-b border-[#dacab0]/10 transition-colors block"
                      whileHover={{ x: 6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>

              <motion.div 
                variants={itemVariants}
                className="border-t border-[#dacab0]/20 pt-6 mt-6 flex flex-col gap-3"
              >
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 text-sm font-mono tracking-wider uppercase border border-[#dacab0] text-[#000002] py-3 rounded-full hover:bg-[#dacab0]/10 transition-colors"
                >
                  <Phone size={16} className="text-[#b8a486]" />
                  {CONTACT_INFO.phone}
                </a>
                <a
                  href="#kontakt"
                  onClick={(e) => handleNavClick(e, '#kontakt')}
                  className="flex items-center justify-center gap-3 text-sm font-mono tracking-wider uppercase bg-[#dacab0] text-[#000002] py-3 rounded-full font-bold shadow-md transition-all hover:bg-[#000002] hover:text-[#dacab0]"
                >
                  <Heart size={16} />
                  Zarezerwuj pobyt
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
