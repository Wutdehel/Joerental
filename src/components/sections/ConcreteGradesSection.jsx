import React, { useState } from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import mutuImage from '../../assets/zenix/Group 4.jpg';
import whatsappIcon from '../../assets/whatsapp.png';
import ImageCarouselModal from '../ui/ImageCarousel';

const zenixModules = import.meta.glob(
  '../../assets/zenix/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
);
const zenixImages = Object.keys(zenixModules)
  .sort() // urut sesuai nama file
  .map((key) => zenixModules[key]);

const ConcreteGradesSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const grades = [
    'Interior Nyaman: Kabin luas dengan kursi ergonomis dan AC yang sejuk',
    'Perjalanan Halus: Suspensi modern yang minim guncangan untuk anak-anak dan lansia',
    'Kapasitas: 6 – 7 Penumpang',
    'Kabin Modern: Fitur hiburan lengkap & pengisian daya gadget di setiap baris',
  ];

  const scrollToOrdering = () => {
    const element = document.getElementById('cara-pemesanan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '6285885053055';
    const message = `Halo Joe Rental, saya ingin bertanya mengenai kesediaan mobil innova zennix untuk disewakan. Mohon Infonya, terima kasih.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white" id="zenix">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          <div className="w-full h-full flex">
            <div
              className="w-full bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: `url(${mutuImage})`,
                minHeight: '400px',
                height: '100%',
              }}
            ></div>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="font-cabin font-bold text-primary-black text-2xl md:text-4xl lg:text-5xl mb-4">
              Innova Zenix <br />
            </h2>

            <p className="font-poppins text-gray-medium text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
              Kami Menyediakan Mobil Innova Zenix dengan kondisi seperti berikut
              Anda:
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
              <div className="space-y-3">
                {grades.slice(0, 2).map((grade, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary-black text-lg md:text-xl">
                      -
                    </span>
                    <span className="font-poppins font-bold text-primary-black text-base md:text-lg">
                      {grade}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {grades.slice(2, 4).map((grade, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary-black text-lg md:text-xl">
                      -
                    </span>
                    <span className="font-poppins font-bold text-primary-black text-base md:text-lg">
                      {grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <Button
                variant="whatsapp"
                size="sm"
                onClick={handleWhatsAppClick}
                className="w-full sm:col-span-2 cursor-pointer"
              >
                <img
                  src={whatsappIcon}
                  alt=""
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                Pesan via WhatsApp
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={scrollToOrdering}
                className="w-full cursor-pointer"
              >
                Cara Pesan
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsGalleryOpen(true)}
                className="w-full cursor-pointer"
              >
                Galeri Mobil
              </Button>
            </div>
          </div>
        </div>
        <ImageCarouselModal
          images={zenixImages}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          title="Galeri Innova Zenix"
        />
      </Container>
    </section>
  );
};

export default ConcreteGradesSection;
