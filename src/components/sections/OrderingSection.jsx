import React from 'react';
import Container from '../layout/Container';
import orderingImage from '../../assets/ordering.jpeg';

const OrderingSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Hubungi Kami',
      description:
        'Hubungi kami melalui WhatsApp untuk konsultasi Harga dan Tanggal awal',
    },
    {
      number: '02',
      title: 'Tentukan Lokasi',
      description: 'Tentukan lokasi tujuan anda dengan admin',
    },
    {
      number: '03',
      title: 'Tentukan Berapa Lama Sewa',
      description: 'Tentukan berapa lama anda ingin menyewa mobil',
    },
    {
      number: '04',
      title: 'Penjemputan',
      description:
        'Beri tahu kami lokasi penjemputan anda, dan kami akan menjemput anda sesuai waktu yang telah ditentukan',
    },
  ];

  return (
    <section
      id="cara-pemesanan"
      className="py-16 md:py-24 lg:py-32 bg-gray-light"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div className="w-full">
            <div
              className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
              style={{
                backgroundImage: `url(${orderingImage})`,
              }}
            ></div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-cabin font-bold text-primary-black text-2xl md:text-4xl lg:text-5xl mb-8 md:mb-10">
              CARA PEMESANAN {/* DIHAPUS span DAN CLASS secondary-yellow */}
            </h2>

            <div className="space-y-6 md:space-y-7">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-cabin font-bold text-secondary-yellow text-lg md:text-xl">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-cabin font-bold text-primary-black text-base md:text-lg">
                      {step.title}
                    </h4>
                    <p className="font-poppins text-gray-medium text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OrderingSection;
