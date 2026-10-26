import React, { useState } from 'react';
import Container from '../layout/Container';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: 'Apakah Mobil Bisa dilepas kunci',
      answer: (
        <div className="space-y-4">
          <div>
            <p className="font-poppins text-primary-white/70">
              Untuk keamanan dan kenyamanan, mobil tidak bisa dilepas kunci.
              Driver kami akan mengantar ke lokasi tujuan dan menunggu hingga
              selesai. Setelah itu, Driver akan mengantar kembali ke lokasi awal
              atau lokasi yang telah disepakati.
            </p>
          </div>
        </div>
      ),
    },
    {
      question: 'Apakah bisa untuk keluar kota',
      answer: (
        <div className="space-y-3">
          <p className="font-poppins text-primary-white/70">
            Ya, kami menyediakan layanan sewa mobil untuk perjalanan keluar
            kota. Driver kami berpengalaman dan memahami rute perjalanan antar
            kota, sehingga Anda dapat menikmati perjalanan dengan nyaman dan
            aman.
          </p>
        </div>
      ),
    },
    {
      question: 'Bagaimana jika lokasi proyek sulit dijangkau?',
      answer: (
        <div className="space-y-3">
          <p className="font-poppins text-primary-white/70">
            Kami akan membantu melakukan survey lokasi terlebih dahulu untuk
            mengecek tingkat kesulitan akses dan menentukan solusi terbaik.
          </p>
          <p className="font-poppins text-primary-white/70">
            Berdasarkan hasil survey, tim kami akan merekomendasikan jenis
            armada yang tepat, baik menggunakan Minimix, pompa beton dengan
            jangkauan sesuai, atau metode pengecoran alternatif lainnya.
          </p>
        </div>
      ),
    },
    {
      question: 'Apakah harga sudah termasuk BBM?',
      answer: (
        <div className="space-y-3">
          <p className="font-poppins text-primary-white/70">
            Berikut rincian komponen harga:
          </p>
          <ul className="list-disc list-inside font-poppins text-primary-white/70 space-y-1 ml-2">
            <li>Harga sewa yang tertera hanya untuk sewa mobil</li>
            <li>Biaya BBM belum termasuk</li>
            <li>Biaya tol ditanggung oleh pelanggan</li>
            <li>Jika ada kebutuhan khusus, akan dikenakan biaya tambahan</li>
          </ul>
        </div>
      ),
    },
    {
      question: 'Apakah ada jenis kendaraan lain yang tersedia?',
      answer: (
        <div className="space-y-3">
          <p className="font-poppins text-primary-white/70">
            Untuk saat ini kami hanya menyediakan layanan sewa mobil Toyota
            Innova Reborn dan Zenix. Namun, kami berkomitmen untuk terus
            meningkatkan layanan dan menambahkan jenis kendaraan lain di masa
            depan. Jika Anda memiliki permintaan khusus, silakan hubungi tim
            kami untuk informasi lebih lanjut.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-dark">
      <Container>
        <h2 className="font-cabin font-bold text-primary-white text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          FAQ
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="border border-primary-white/20 rounded-lg overflow-hidden bg-gray-dark/50"
            >
              <button
                className="w-full px-6 py-4 md:px-8 md:py-5 text-left flex justify-between items-center hover:bg-primary-white/5 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-cabin font-semibold text-primary-white text-base md:text-lg lg:text-xl">
                  {faq.question}
                </span>
                <span
                  className={`text-primary-white text-2xl md:text-3xl ml-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[800px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 md:px-8 md:py-5 bg-primary-white/5 border-t border-primary-white/20">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
