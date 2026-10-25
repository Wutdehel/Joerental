import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import openingBg from '../../assets/opening.jpg';
import whatsappIcon from '../../assets/whatsapp.png';

const HeroSection = () => {
  // TAMBAHIN INI!
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285885053055';
    const message =
      'Halo MatrixBeton, saya ingin konsultasi dan pesan beton readymix untuk proyek saya. Mohon infonya, terima kasih.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="beranda"
      className="relative w-full min-h-screen flex items-center"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${openingBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <Container size="lg" className="relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-12 max-w-4xl">
          <h1
            className="font-cabin font-bold text-primary-white text-3xl md:text-5xl lg:text-[52px] leading-tight animate-fade-in opacity-0"
            style={{ animationDelay: '0ms' }}
          >
            Rental Mobil Premium, Aman, Profesional
            <br />
            Dan Tepat Untuk Perjalanan Anda
          </h1>

          <p
            className="font-poppins font-normal text-primary-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed animate-fade-up opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            Sewa mobil berkualitas dengan layanan terbaik untuk perjalanan
            bisnis, liburan, dan acara spesial Anda. Kami siap memberikan
            pengalaman berkendara yang nyaman dan aman.
          </p>

          <div
            className="animate-fade-up opacity-0 w-full md:w-auto"
            style={{ animationDelay: '400ms' }}
          >
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsAppClick} // TAMBAHIN INI!
              className="w-full md:w-auto flex items-center gap-2 cursor-pointer"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-7 h-7 md:w-8 md:h-8"
              />
              Konsultasi & Pesan via WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
