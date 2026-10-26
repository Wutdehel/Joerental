import React from 'react';
import Container from '../layout/Container';

const TruckComparisonSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-light">
      <Container>
        <h2 className="font-cabin font-bold text-primary-black text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          PELAYANAN KAMI
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col">
            {/* <div className="w-full h-48 md:h-64 mb-4 overflow-hidden bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={minimixImage}
                alt="Beton Minimix"
                className="w-full h-full object-contain"
              />
            </div> */}

            <h4 className="font-cabin font-bold text-primary-black text-xl md:text-2xl mb-3">
              Pelayanan
            </h4>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Jasa Sewa Mobil Premium Dengan Driver Profesional
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Cocok untuk Dalam atau Luar Kota
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Pelayanan Ramah dan Profesional
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Nyaman untuk perjalanan dinas dan bisnis
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Bebas asap rokok
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            {/* <div className="w-full h-48 md:h-64 mb-4 overflow-hidden bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={tmBesarImage}
                alt="Truck Mixer Besar"
                className="w-full h-full object-contain"
              />
            </div> */}

            <h4 className="font-cabin font-bold text-primary-black text-xl md:text-2xl mb-3">
              Pengalaman Driver
            </h4>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Pernah Bekerja di istana Presiden sebagai driver
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Fasih dalam berbahasa Inggris dan Bahasa Indonesia
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Berpengalaman dalam mengemudi di berbagai kondisi jalan
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-black text-lg md:text-xl">-</span>
                <span className="font-poppins text-primary-black text-base md:text-lg">
                  Siap menemani perjalanan dalam dan luar kota Anda.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TruckComparisonSection;
