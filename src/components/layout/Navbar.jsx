import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import whatsappIcon from '../../assets/whatsapp.png';

const navigationItems = [
  { label: 'Beranda', href: '#beranda', active: true },
  { label: 'Kenapa Kami', href: '#kenapa-kami', active: true },
  { label: 'Zenix', href: '#zenix', active: false },
  { label: 'Reborn', href: '#reborn', active: false },
  { label: 'Harga', href: '#harga', active: false },
  { label: 'Cara Pemesanan', href: '#cara-pemesanan', active: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Beranda');

  const handleWhatsAppClick = () => {
    const phoneNumber = '6285885053055';
    const message =
      'Halo Joe, saya ingin bertanya soal jasa sewa mobil. Mohon infonya, terima kasih.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        'beranda',
        'kenapa-kami',
        'zenix',
        'reborn',
        'harga',
        'cara-pemesanan',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        const activeLabel =
          navigationItems.find((item) => item.href === `#${current}`)?.label ||
          'Beranda';
        setActiveItem(activeLabel);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-black/80 backdrop-blur-md py-3 md:py-4' : 'bg-black/30 backdrop-blur-sm py-4 md:py-7'}
      `}
    >
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-32 gap-4 md:gap-12 lg:gap-20">
        <div className="font-cabin font-bold text-primary-white text-2xl md:text-3xl lg:text-[32px]">
          Joe Rental
        </div>

        <div className="flex flex-row items-center justify-between w-full md:w-auto gap-4 md:gap-12 lg:gap-20">
          <ul className="flex items-center gap-3 md:gap-6 overflow-x-auto pb-1 no-scrollbar">
            {navigationItems.map((item, index) => (
              <li key={index} className="flex-shrink-0">
                <a
                  href={item.href}
                  className={`
                    font-cabin text-sm md:text-lg lg:text-xl whitespace-nowrap
                    transition-colors hover:text-secondary-yellow
                    ${
                      activeItem === item.label
                        ? 'font-bold text-secondary-yellow'
                        : 'font-normal text-primary-white'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex-shrink-0 ml-4 md:ml-6 lg:ml-8">
            <Button
              variant="whatsapp"
              size="sm"
              onClick={handleWhatsAppClick}
              className="px-4 py-2 text-xs md:px-6 md:py-3 md:text-base lg:text-lg whitespace-nowrap flex items-center gap-1 md:gap-2 cursor-pointer"
            >
              <img
                src={whatsappIcon}
                alt=""
                className="w-4 h-4 md:w-6 md:h-6"
              />
              <span className="md:hidden">Pesan</span>
              <span className="hidden md:inline">Pesan Sekarang</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
