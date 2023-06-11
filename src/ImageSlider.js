import React, { useState, useEffect } from "react";
import Swiper from "react-native-web-swiper";

function ImageSlider({ handleImageClick }) {
  const [images, setImages] = useState([
    {
      id: 1,
      src: "/feature1.png",
      alt: "Right Image 1",
      description: "주요실적 1",
    },
    {
      id: 2,
      src: "/feature2.png",
      alt: "Right Image 2",
      description: "주요실적 2",
    },
    {
      id: 3,
      src: "/feature3.png",
      alt: "Right Image 3",
      description: "주요실적 3",
    },
    {
      id: 4,
      src: "/feature4.png",
      alt: "Right Image 4",
      description: "주요실적 4",
    },
  ]);

  return (
    <div className="images-container">
      <Swiper loop timeout={3} containerStyle={{ width: "100%", height: 300 }}>
        {images.map((image) => (
          <div
            key={image.id}
            className="image-box"
            onClick={() => handleImageClick(image.id)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="image-details">
              <p className="image-description">{image.description}</p>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;