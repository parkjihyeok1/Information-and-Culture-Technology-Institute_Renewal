import React, { useState } from "react";

const Slideshow = ({ scrollIndex }) => {
  const categories = [
    { category: "전체", images: ["semi.png", "paper.png", "paper.png"] },
    { category: "Sw 융합대학", images: ["semi.png", "paper.png", "semi.png"] },
    { category: "공과대학", images: ["image7.jpg", "image8.jpg", "image9.jpg"] },
    { category: "문화예술대학", images: ["image10.jpg", "image11.jpg", "image12.jpg"] },
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % categories[currentCategoryIndex].images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + categories[currentCategoryIndex].images.length) % categories[currentCategoryIndex].images.length);
  };

  const handleCategoryClick = (index) => {
    setCurrentCategoryIndex(index);
    setCurrentImageIndex(0);
  };

  return (
    <div className={`slideshow ${scrollIndex === 3 ? "visible" : ""}`}>
      <div className="slideshow-content">
        <div className="slideshow-categories">
          {categories.map((category, index) => (
            <button key={index} onClick={() => handleCategoryClick(index)}>{category.category}</button>
          ))}
        </div>
        <div className="slideshow-images">
          <img src={categories[currentCategoryIndex].images[currentImageIndex]} alt="Slideshow Image" />
        </div>
        <div className="slideshow-controls">
          <button onClick={handlePreviousImage}>Previous</button>
          <button onClick={handleNextImage}>Next</button>
        </div>
        
      </div>
    </div>
  );
};

export default Slideshow;