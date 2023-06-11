import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isClicked) {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide, images.length, isClicked]);

  const handleImageClick = () => {
    setIsClicked(true);
  };

  const handleModalClose = () => {
    setIsClicked(false);
  };

  return (
    <div className="slideshow">
      {isClicked ? (
        <div className="modal" onClick={handleModalClose}>
          <img
            src={images[currentSlide]} 
            alt="Slideshow"
            className="modal-image"
          />
          <span className="close">&times;</span>
        </div>
      ) : (
        <img
          src={images[currentSlide]}
          alt="Slideshow"
          className="slide-image"style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          onClick={handleImageClick}
          
        />
      )}
      <div>
      </div>
    </div>
  );
};

export default Slideshow;