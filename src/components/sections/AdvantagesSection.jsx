import React from 'react';
import Container from '../layout/Container';
import keunggulanImage from '../../assets/reborn/keunggulan.png';
import shieldIcon from '../../assets/shield-star-line.png';
import timerIcon from '../../assets/timer-line.png';
import connectorIcon from '../../assets/connector-line.png';
import thumbUpIcon from '../../assets/thumb-up-line.png';

const AdvantagesSection = () => {
  const advantages = [
    {
      text: 'Keamanan dan kualitas terjamin',
      icon: shieldIcon,
    },
    {
      text: 'Mobil siap pakai, hemat waktu dan tenaga',
      icon: timerIcon,
    },
    {
      text: 'Dibawa dengan supir profesional dan berpengalaman',
      icon: connectorIcon,
    },
    {
      text: 'Cocok untuk perjalan bisnis, liburan, dan acara spesial',
      icon: thumbUpIcon,
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white ">
      <Container>
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          <div
            className="w-full h-full min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${keunggulanImage})`,
            }}
          ></div>

          <div className="bg-gray-dark w-full h-full min-h-[500px] md:min-h-[600px] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="font-cabin font-bold text-primary-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 md:mb-10">
              Keunggulan <br />
              <span className="text-primary-white">Joe Rental</span>
            </h2>

            <ul className="space-y-5 md:space-y-6">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain flex-shrink-0"
                  />
                  <span className="font-poppins text-primary-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdvantagesSection;
