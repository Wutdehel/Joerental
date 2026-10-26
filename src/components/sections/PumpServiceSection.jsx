import React, { useState } from 'react';
import Button from '../ui/Button';
import Container from '../layout/Container';
import layananImage from '../../assets/reborn/Group 7.jpg';
import ImageCarouselModal from '../ui/ImageCarousel';
import whatsappIcon from '../../assets/whatsapp.png';

const rebornModule = import.meta.glob(
  '../../assets/reborn/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' },
);
const rebornImages = Object.keys(rebornModule)
  .sort() // urut sesuai nama file
  .map((key) => rebornModule[key]);

const PumpServiceSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285885053055';
    const message = `Halo Joe Rental, saya ingin bertanya mengenai kesediaan mobil innova zennix untuk disewakan. Mohon Infonya, terima kasih.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToOrdering = () => {
    const element = document.getElementById('cara-pemesanan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const pumpTypes = [
    {
      title: 'Perjalanan Luar Kota',
      description:
        'Performa mesin tangguh dan stabil di jalur tol maupun jalan menanjak, cocok untuk perjalanan antar kota.',
      highlight: 'Tangguh Rute Luar Kota',
    },
    {
      title: 'Liburan Keluarga',
      description:
        'Solusi kendaraan ideal untuk liburan keluarga dengan ruang kaki lega di setiap baris dan fitur hiburan modern.',
      highlight: 'Pilihan Utama Keluarga',
    },
    {
      title: 'Kebutuhan Bisnis & Dinas',
      description:
        'Tampilan mobil yang rapi, bersih, dan profesional untuk mendukung aktivitas pekerjaan maupun penjemputan tamu.',
      highlight: 'Desain Elegant & Profesional',
    },
    {
      title: 'Antar-Jemput Bandara',
      description:
        'Kapasitas penumpang dan tempat koper yang cukup luas untuk menjamin kenyamanan dari dan menuju bandara.',
      highlight: 'Praktis & Bagasi Luas',
    },
  ];

  return (
    <section id="reborn" className="py-16 md:py-24 lg:py-32 bg-gray-dark">
      <Container>
        <h2 className="font-cabin font-bold text-primary-white text-2xl md:text-4xl lg:text-5xl text-center mb-4">
          LAYANAN SEWA MOBIL INNOVA REBORN
        </h2>

        <p className="font-poppins text-primary-white/80 text-base md:text-lg lg:text-xl text-center max-w-4xl mx-auto mb-16 md:mb-20 leading-relaxed">
          Toyota Innova Reborn tetap menjadi primadona di dunia sewa mobil
          berkat ketangguhan mesinnya, suspensi yang empuk, serta kabin yang
          sangat luas untuk keluarga maupun rombongan bisnis. Tersedia dalam
          transmisi manual diesel yang siap menemani perjalanan dalam dan luar
          kota Anda.
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          <div className="w-full">
            <div
              className="w-full h-[700px] md:h-[750px] lg:h-[800px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
              style={{
                backgroundImage: `url(${layananImage})`,
              }}
            ></div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-cabin font-bold text-primary-white text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">
              SPESIFIKASI & FITUR INNOVA REBORN
            </h3>

            <div className="flex flex-col space-y-6 md:space-y-8">
              {pumpTypes.map((pump, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="font-cabin font-bold text-secondary-yellow text-lg md:text-xl lg:text-2xl mb-1">
                    {pump.title}
                  </h4>
                  <p className="font-poppins text-primary-white/70 text-base md:text-lg mb-1 leading-relaxed">
                    {pump.description}
                  </p>
                  {/* <p className="font-poppins text-primary-white/70 text-base md:text-lg">
                    <span className="font-bold text-primary-white">
                      {pump.highlight}
                    </span>
                  </p> */}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-8 md:mt-10">
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
                className="w-full cursor-pointer text-primary-white"
              >
                Galeri Mobil
              </Button>
            </div>
          </div>
        </div>
        <ImageCarouselModal
          images={rebornImages}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          title="Galeri Innova Reborn"
        />
      </Container>
    </section>
  );
};

export default PumpServiceSection;
