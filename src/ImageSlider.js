import React, { useState, useEffect } from 'react';
import './ImageSlider.css';




const ImageSlider = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div
        className="slider-images"
       style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            className="slider-image"
            src={image}
            alt={`Slide ${index}`}
            key={index}
          />
        ))}
      </div>
      <button className="slider-button prev" onClick={goToPrevious}>
      &lt;
      </button>
      <button className="slider-button next" onClick={goToNext}>
        &gt;
      </button>
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
