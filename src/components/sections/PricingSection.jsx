import React, { useState } from 'react';
import Container from '../layout/Container';
import PriceCalculatorModal from '../ui/PriceCalculatorModal';
import Button from '../ui/Button';
import truckImage from '../../assets/car.png';
import whatsappIcon from '../../assets/whatsapp.png';

const PricingSection = () => {
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const pumpPrices = [
    {
      title: 'Innova Zenix',
      subtitle: 'VIP Car',
      image: truckImage,
      prices: [
        { volume: 'Dalam Kota (Termasuk BBM)', price: 'Rp 1.200.000' },
        { volume: 'Bogor All In', price: 'Rp 1.550.000' },
        { volume: 'Bandung', price: 'Rp 1.800.000' },
      ],
    },
    {
      title: 'Innova Reborn',
      subtitle: 'VIP Car',
      image: truckImage,
      prices: [
        { volume: 'Dalam Kota (Termasuk BBM)', price: 'Rp 1.000.000' },
        { volume: 'Bogor All In', price: 'Rp 1.350.000' },
        { volume: 'Bandung', price: 'Rp 1.600.000' },
      ],
    },
  ];

  const handleWhatsAppClick = (pumpTitle, pumpSubtitle) => {
    const phoneNumber = '6285885053055';

    let message = '';

    if (pumpTitle === 'Innova Zenix') {
      message = `Halo Joe Rental, saya ingin bertanya kesediaan unit Innova Zenix, Mohon info ketersediaan dan Tarif Untuk Innova Zenix. Terima kasih.`;
    } else if (pumpTitle === 'Innova Reborn') {
      message = `Halo Joe Rental, saya ingin bertanya kesediaan unit Innova Reborn, Mohon info ketersediaan dan Tarif Untuk Innova Reborn. Terima kasih.`;
    }
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="harga" className="py-16 md:py-24 lg:py-32 bg-gray-light">
      <Container>
        <h2 className="font-cabin font-bold text-primary-black text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          HARGA SEWA RENTAL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {pumpPrices.map((pump, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 md:p-8 border-b border-gray-border">
                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 bg-cover bg-center bg-no-repeat rounded-lg flex-shrink-0"
                    style={{
                      backgroundImage: `url(${pump.image})`,
                    }}
                  ></div>

                  <div className="flex flex-col">
                    <h3 className="font-cabin font-bold text-secondary-yellow text-2xl md:text-3xl mb-1">
                      {pump.title}
                    </h3>
                    <p className="font-poppins text-gray-medium text-base md:text-lg">
                      {pump.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-grow">
                <div className="space-y-4">
                  {pump.prices.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="font-poppins text-gray-medium text-sm md:text-base">
                        {item.volume}
                      </span>
                      <span className="font-cabin font-bold text-primary-black text-base md:text-lg">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <Button
                  variant="whatsapp"
                  size="default"
                  onClick={() => handleWhatsAppClick(pump.title, pump.subtitle)}
                  className="w-full flex items-center justify-center gap-2 cursor-pointer"
                >
                  <img
                    src={whatsappIcon}
                    alt=""
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  Pesan via WhatsApp
                </Button>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full md:col-span-2 md:justify-self-center md:w-[calc(50%-1.25rem)] lg:w-[calc(50%-1.5rem)]">
            <div className="p-6 md:p-8 border-b border-gray-border">
              <div className="flex items-center gap-4">
                <div
                  className="w-20 h-20 md:w-24 md:h-24 bg-cover bg-center bg-no-repeat rounded-lg flex-shrink-0"
                  style={{
                    backgroundImage: `url(${pumpPrices[0].image})`,
                  }}
                ></div>

                <div className="flex flex-col">
                  <h3 className="font-cabin font-bold text-secondary-yellow text-2xl md:text-3xl mb-1">
                    Harga Custom
                  </h3>
                  <p className="font-poppins text-gray-medium text-base md:text-lg">
                    Untuk kebutuhan khusus ke destinasi anda
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-gray-medium text-sm md:text-base">
                    Calculator Harga Custom
                  </span>
                  <span className="font-cabin font-bold text-primary-black text-base md:text-lg">
                    Tekan Tombol Dibawah
                  </span>
                </div>
              </div>
            </div>
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <Button
                variant="outline"
                size="default"
                onClick={() => setIsCalcOpen(true)}
                className="w-full flex items-center justify-center gap-2 cursor-pointer"
              >
                Coba Kalkulator Harga Custom
              </Button>
            </div>
          </div>
        </div>
        <PriceCalculatorModal
          isOpen={isCalcOpen}
          onClose={() => setIsCalcOpen(false)}
        />
      </Container>
    </section>
  );
};

export default PricingSection;
