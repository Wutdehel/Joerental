import React from 'react';
import Button from '../components/ui/Button';
import whatsappIcon from '../assets/whatsapp.png';

const FloatingWhatsApp = () => {
  const phoneNumber = '6285885053055';
  const message =
    'Halo Joe Rental, Saya tertarik untuk menyewa mobil. Mohon infonya, terima kasih.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Z-INDEX DIUBAH DARI 50 JADI 40
    <div
      className="fixed bottom-6 right-6 z-40 animate-fade-in opacity-0"
      style={{ animationDelay: '800ms' }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary-green flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <span className="sr-only">Chat via WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
