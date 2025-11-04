import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useState } from 'react';

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // configuracion del slider principal
  const mainSettings = {
    dots: false, // sin puntitos
    infinite: true, // pa q de vueltas infinitas
    arrows: false, // sin flechitas
    speed: 500,
    autoplay: true, // q se mueva solo
    autoplaySpeed: 8000, // cada 8 seg
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next) // pa saber cual imagen mostrar en los costados
  };

  const slides = [
    {
      title: 'Productos Frescos',
      image: '/imgenes/slider-image-1-Dh9d2U6G.jpeg'
    },
    {
      title: 'Galletas Premium',
      image: '/imgenes/galletas.png'
    },
    {
      title: 'Café Premium',
      image: '/imgenes/nescafe.png'
    }
  ];

  const getNextSlides = () => {
    const next = (currentSlide + 1) % slides.length;
    const nextAfter = (currentSlide + 2) % slides.length;
    return [slides[next], slides[nextAfter]];
  };

  const [nextSlide1, nextSlide2] = getNextSlides();

  return (
    <div className="container mt-7">
      <div className="flex gap-0">
        <div className="md:w-3/4 w-full">
          <Slider {...mainSettings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[400px] object-cover object-right rounded-l-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="md:w-1/4 md:block hidden">
            <img
              className="w-full h-[200px] object-cover block"
              src={nextSlide1.image}
              alt={nextSlide1.title}
            />
            <img
              className="w-full h-[200px] object-cover block rounded-tr-lg"
              src={nextSlide2.image}
              alt={nextSlide2.title}
            />
        </div>
      </div>
    </div>
  );
}