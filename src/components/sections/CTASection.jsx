import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import proyekImage from '../../assets/proyek.png';
import whatsappIcon from '../../assets/whatsapp.png';

const CTASection = () => {
  // Function untuk handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285885053055';
    const message =
      'Halo Joe Rental, Saya tertarik untuk menyewa mobil. Mohon infonya, terima kasih.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-light">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="flex flex-col">
            <h2 className="font-cabin font-bold text-primary-black text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              SIAP MULAI <br />
              <span className="text-primary-black">
                BERKENDARA DENGAN KAMI?
              </span>
            </h2>

            <p className="font-poppins text-gray-medium text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
              Dapatkan pengalaman berkendara terbaik dengan layanan profesional
              kami. Hubungi kami sekarang untuk memulai perjalanan Anda!
            </p>

            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full md:w-auto px-8 py-4 text-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <img
                src={whatsappIcon}
                alt=""
                className="w-6 h-6 md:w-7 md:h-7"
              />
              Pesan via WhatsApp
            </Button>
          </div>

          <div className="w-full">
            <div
              className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
              style={{
                backgroundImage: `url(${proyekImage})`,
              }}
            >
              <div className="w-full h-full bg-black/20 flex items-center justify-center rounded-2xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
