import React, { useState, useEffect } from 'react';
import WeddingTwo from './../pictures/wedding_two.jpg';
import WeddingThree from './../pictures/wedding_three.jpg'; 
import WeddingFour from './../pictures/wedding_four.jpg';// Import the CSS for styling
import WeddingFive from './../pictures/wedding_five.jpg';

const Slideshow = () => {
  const images = [
    WeddingTwo,
    WeddingThree,
    WeddingFour,
    WeddingFive
    // Add more image URLs
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {index === currentSlide && (
            <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
          )}
        </div>
      ))}

      {/* <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Slideshow;
