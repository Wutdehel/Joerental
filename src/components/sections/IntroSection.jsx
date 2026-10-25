import React from 'react';
import Container from '../layout/Container';

const IntroSection = () => {
  return (
    <section id="kenapa-kami" className="py-16 md:py-24 lg:py-32 bg-gray-light">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <div>
            <h2 className="font-cabin font-bold text-primary-black text-3xl md:text-4xl lg:text-5xl leading-tight">
              KENAPA HARUS <br />
              <span className="text-primary-black">DI JOE RENTAL</span>
            </h2>
          </div>

          <div>
            <p className="font-poppins text-gray-medium text-base md:text-lg lg:text-xl leading-relaxed">
              Karena kami tidak sekadar menyewakan mobil, kami memastikan
              pengalaman perjalanan Anda berjalan sempurna. Nikmati kenyamanan
              armada Innova bersih dan terawat, harga terbaik yang transparan,
              serta layanan pelanggan yang siap membantu Anda kapan saja.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;
