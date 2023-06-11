import React, { useState, useEffect, useRef } from "react";
import Dots from "./Dots";
import Navigation from "./Navigation";
import Counter from "./Counter";
import "./App.css";
import Slideshow from './Slideshow';
const DIVIDER_HEIGHT = 5;

function App() {
  const outerDivRef = useRef();
  const newImagesContainerRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newImagesVisible, setNewImagesVisible] = useState(false);

  const images = [
    'feature1.png',
    'feature2.png',
    'feature3.png',
    'feature4.png',
  ];
  const handleImageClose = () => {
    setSelectedImage(null);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };
  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };

    const handleScroll = () => {
      const scrollTop = outerDivRef.current.scrollTop;
      const newImagesContainerTop = newImagesContainerRef.current.offsetTop;
      const pageHeight = window.innerHeight;

      if (scrollTop + pageHeight >= newImagesContainerTop && !newImagesVisible) {
        setNewImagesVisible(true);
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    outerDivRefCurrent.addEventListener("scroll", handleScroll);

    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      outerDivRefCurrent.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navigation />
      <div ref={outerDivRef} className="outer">
        <Dots scrollIndex={scrollIndex} />
        <div className="inner bg-yellow">
          <div className="background-image"></div>
          <div className="info-text">
            <p>Research</p>
            <p>Institute of Information</p>
            <p>Culture</p>
            <p>Technology</p>
          </div>
          <div className="middle-text">
          {isPopupOpen ? null : (
            <button className="popup-button" onClick={handlePopupToggle}>
              소개
            </button>
          )}
          {isPopupOpen && (
            <div className="popup">
              <div className="popup-content">
                <div className="popup-text">
                  <p>단국대학교 죽전캠퍼스 IT+CT(정보기술+문화기술) 중심 특성화의 콘트롤 타워</p>
                  <p>역할 수행을 목적으로 기존의 정보통신융합기술원과 미디어콘텐츠연구원의</p>
                  <p>두 연구원을 통합한 형태로 2015년 3월에 설립된 교책중점연구기관</p>
                </div>
                <button className="close-button" onClick={handlePopupToggle}>
                  x
                </button>
              </div>
            </div>
          )}
        </div>
        </div>
        <div className="divider"></div>
        <div className="inner bg-blue">
          <div className="image-container">
            <div className="text-container">
              <p>정보문화기술원</p>
            </div>
            <div className="new-images-container" ref={newImagesContainerRef}>
              <div
                className={`new-image-box ${
                  newImagesVisible ? "visible" : ""
                }`}
              >
                <img src="/business.png" alt="New Image 1" />
                <Counter duration={2000} />
              </div>
              <div
                className={`new-image-box ${
                  newImagesVisible ? "visible" : ""
                }`}
              >
                <img src="/paper.png" alt="New Image 2" />
                <Counter duration={2000} />
              </div>
              <div
                className={`new-image-box ${
                  newImagesVisible ? "visible" : ""
                }`}
              >
                <img src="/semi.png" alt="New Image 3" />
                <Counter duration={2000} />
              </div>
            </div>
          </div>
          <div className="images-container">
            <Slideshow images={images} />
          </div>
        </div>
        <div className="divider"></div>
        <div className="inner bg-pink">
          <div className="grid-container">
            <div className="grid-item">
              <img src="/white.png" alt="Image 1" />
              <div className="text-overlay">
                <h3>연구소</h3>
                <h3>소개</h3>
                <h3>교수:***</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/white.png" alt="Image 2" />
              <div className="text-overlay">
              <h3>연구소</h3>
                <h3>소개</h3>
                <h3>교수:***</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/white.png" alt="Image 3" />
              <div className="text-overlay">
              <h3>연구소</h3>
                <h3>소개</h3>
                <h3>교수:***</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/white.png" alt="Image 4" />
              <div className="text-overlay">
              <h3>연구소</h3>
                <h3>소개</h3>
                <h3>교수:***</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/white.png" alt="Image 5" />
              <div className="text-overlay">
              <h3>연구소</h3>
                <h3>소개</h3>
                <h3>교수:***</h3>
              </div>
            </div>
            <div className="grid-item">
              <img src="/white.png" alt="Image 6" />
              <div className="text-overlay">
              <h3>연구소</h3>
                <h3>소개</h3>
                <h3>교수:***</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="modal">
          <span className="close" onClick={handleImageClose}>
            &times;
          </span>
          <img
            src={`/feature${selectedImage}.png`}
            alt={`Right Image ${selectedImage}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
}

export default App;
