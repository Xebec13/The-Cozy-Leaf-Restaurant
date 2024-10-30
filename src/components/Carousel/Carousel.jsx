import React, { useState, useEffect, useCallback } from 'react';
import './carousel.css';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { images } from "../../constants/index";

const sliderImages = [
  images.slider4,
  images.slider5,
  images.slider6,
  images.slider7,
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  // --------------------SLIDER ANIMATION--------------------------------
  const nextSlide = useCallback(() => {
    setSlide((prevSlide) => (prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1));
  }, []);

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1));
  };
  // --------------------SMOOTH SLIDER ANIMATION--------------------------------
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);


  
  return (
    <div className="cozy-leaf-carousel">
      <FaCircleArrowLeft className='arrow arrow-left' onClick={prevSlide} />
      {sliderImages.map((item, index) => (
        <img
          src={item}
          alt={`Slider${index + 1}`}
          key={index}
          className="carousel-slider"
          style={{
            opacity: slide === index ? 1 : 0,
            transition: 'opacity 1s ease',
            position: slide === index ? 'relative' : 'absolute'
          }}
        />
      ))}
      <FaCircleArrowRight className='arrow arrow-right' onClick={nextSlide} />
      <span className='indicators'>
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={slide === index ? 'indicator' : 'indicator indicator-unactive'}
          />
        ))}
      </span>
    </div>
  );
};

export default Carousel;
