import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import whatsappIcon from '../../assets/whatsapp.png';

const navigationItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kenapa Kami', href: '#kenapa-kami' },
  { label: 'Zenix', href: '#zenix' },
  { label: 'Reborn', href: '#reborn' },
  { label: 'Harga', href: '#harga' },
  { label: 'Cara Pemesanan', href: '#cara-pemesanan' },
];

const sectionIds = navigationItems.map((item) => item.href.slice(1));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Beranda');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '6285885053055';
    const message =
      'Halo Joe, saya ingin bertanya soal jasa sewa mobil. Mohon infonya, terima kasih.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Deteksi scroll + section aktif
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const current = sectionIds.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        const label = navigationItems.find(
          (item) => item.href === `#${current}`,
        )?.label;
        if (label) setActiveItem(label);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Esc untuk menutup + tutup otomatis saat layar membesar
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false); // lg
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (label) => {
    setActiveItem(label);
    setMenuOpen(false);
  };

  const linkClass = (label) =>
    `font-cabin whitespace-nowrap transition-colors hover:text-secondary-yellow ${
      activeItem === label
        ? 'font-bold text-secondary-yellow'
        : 'font-normal text-primary-white'
    }`;

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled || menuOpen
            ? 'bg-black/80 backdrop-blur-md py-3 lg:py-4'
            : 'bg-black/30 backdrop-blur-sm py-4 lg:py-7'
        }
      `}
    >
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-32 gap-4 lg:gap-20">
        {/* Logo */}
        <a
          href="#beranda"
          onClick={() => handleNavClick('Beranda')}
          className="font-cabin font-bold text-primary-white text-2xl md:text-3xl lg:text-[32px]"
        >
          Joe Rental
        </a>

        {/* Menu desktop */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`${linkClass(item.label)} text-lg xl:text-xl`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol WA desktop */}
        <div className="hidden lg:block flex-shrink-0">
          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsAppClick}
            className="whitespace-nowrap cursor-pointer"
          >
            <img src={whatsappIcon} alt="" className="w-6 h-6" />
            Pesan Sekarang
          </Button>
        </div>

        {/* Burger (mobile & tablet) */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-primary-white rounded-lg hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Panel menu mobile */}
      <div
        id="mobile-menu"
        className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="flex flex-col px-4 md:px-8 pt-4 pb-2">
          {navigationItems.map((item) => (
            <li
              key={item.href}
              className="border-b border-white/10 last:border-0"
            >
              <a
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`${linkClass(item.label)} block py-3 text-lg`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-4 md:px-8 pt-2 pb-4">
          <Button
            variant="whatsapp"
            size="sm"
            onClick={() => {
              setMenuOpen(false);
              handleWhatsAppClick();
            }}
            className="w-full whitespace-nowrap cursor-pointer"
          >
            <img src={whatsappIcon} alt="" className="w-5 h-5" />
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
