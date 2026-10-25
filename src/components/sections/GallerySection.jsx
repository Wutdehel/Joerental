import React, { useState } from 'react';
import Container from '../layout/Container';
import dokumentasi1 from '../../assets/dokumentasi1.png';
import dokumentasi2 from '../../assets/dokumentasi2.mp4';
import dokumentasi3 from '../../assets/dokumentasi3.png';
import dokumentasi4 from '../../assets/dokumentasi4.png';
import dokumentasi5 from '../../assets/dokumentasi5.mp4';

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (media, type) => {
    setSelectedMedia(media);
    setMediaType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
    setMediaType(null);
  };

  return (
    <section id="galeri" className="py-16 md:py-24 lg:py-32 bg-gray-dark">
      <Container>
        <h2 className="font-cabin font-bold text-primary-white text-2xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16">
          GALERI PROYEK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div
            className="md:col-span-1 cursor-pointer"
            onClick={() => openModal(dokumentasi1, 'image')}
          >
            <div
              className="w-full h-[500px] md:h-[600px] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              style={{ backgroundImage: `url(${dokumentasi1})` }}
            >
              <div className="w-full h-full bg-black/20 flex items-end p-6"></div>
            </div>
          </div>

          <div className="md:col-span-2 h-[500px] md:h-[600px]">
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
              <div
                className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openModal(dokumentasi2, 'video')}
              >
                <video
                  src={dokumentasi2}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/20 flex items-end p-4">
                  <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">
                    ▶ Video
                  </span>
                </div>
              </div>

              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                style={{ backgroundImage: `url(${dokumentasi3})` }}
                onClick={() => openModal(dokumentasi3, 'image')}
              >
                <div className="w-full h-full bg-black/20 flex items-end p-4"></div>
              </div>

              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                style={{ backgroundImage: `url(${dokumentasi4})` }}
                onClick={() => openModal(dokumentasi4, 'image')}
              >
                <div className="w-full h-full bg-black/20 flex items-end p-4"></div>
              </div>

              <div
                className="w-full h-full rounded-2xl shadow-lg overflow-hidden relative cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openModal(dokumentasi5, 'video')}
              >
                <video
                  src={dokumentasi5}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/20 flex items-end p-4">
                  <span className="text-white text-sm bg-black/50 px-2 py-1 rounded">
                    ▶ Video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-3xl hover:text-secondary-yellow transition-colors z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
              >
                ✕
              </button>

              {mediaType === 'image' && selectedMedia && (
                <img
                  src={selectedMedia}
                  alt="Full screen project"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              )}

              {mediaType === 'video' && selectedMedia && (
                <video
                  src={selectedMedia}
                  className="max-w-full max-h-full rounded-lg"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default GallerySection;
