import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

import s0 from '../../assets/s0.png';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      img: s0,
      heading: 'Bring Nature Home',
      text: 'Discover lush plants and expert care tips for a greener life.'
    },
    {
      img: s2,
      heading: 'Breathe Green, Live Serene',
      text: 'From cozy corners to modern homes. We bring nature closer.'
    },
    {
      img: s1,
      heading: 'Expert Care for Every Leaf',
      text: 'Book expert consultations and let your plants thrive beautifully.'
    },
    {
      img: s3,
      heading: 'Green Living, Modern Vibes',
      text: 'Embrace the elegance of sustainability this season.'
    }
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="overlay">
                <motion.h2
                  key={`heading-${index}-${activeIndex}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl font-bold mb-4"
                >
                  {slide.heading}
                </motion.h2>
                <motion.p
                  key={`text-${index}-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-lg"
                >
                  {slide.text}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
