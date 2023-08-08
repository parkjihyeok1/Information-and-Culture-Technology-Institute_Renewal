import React, { useState, useEffect, useRef } from "react";
import Dots from "./Dots";
import Navigation from "./Navigation";
import Counter from "./Counter";
import "./MainPage.css";
import Slideshow from "./Slideshow";
import { useInView } from "react-intersection-observer";
const DIVIDER_HEIGHT = 6;

function MainPage() {
  const outerDivRef = useRef();
  const newImagesContainerRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [newImagesVisible, setNewImagesVisible] = useState(false);

  const [image1Ref, image1InView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // 필요에 따라 이 값을 조정하세요
  });

  const [image2Ref, image2InView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // 필요에 따라 이 값을 조정하세요
  });

  const [image3Ref, image3InView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // 필요에 따라 이 값을 조정하세요
  });

  const AnimatedText = ({ text }) => {
    const [animatedText, setAnimatedText] = useState("");

    useEffect(() => {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex === text.length) {
          clearInterval(intervalId);
        } else {
          const currentChar = text[currentIndex];
          setAnimatedText((prevText) => prevText + currentChar);
          currentIndex++;
        }
      }, 100);

      return () => {
        clearInterval(intervalId);
      };
    }, [text]);

    return <span className="animated-text">{animatedText}</span>;
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
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else {
          console.log("현재 4페이지, down");
          // Handle scrolling beyond the fourth page if needed
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
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
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

      if (
        scrollTop + pageHeight >= newImagesContainerTop &&
        !newImagesVisible
      ) {
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
    <mainpage>
      <div ref={outerDivRef} className="outer">
        <Dots scrollIndex={scrollIndex} />
        <div className="inner bg-yellow">
          <div className="background-image"></div>
          <div className="info-text"> 
          <p>
              <AnimatedText text="정보문화기술연구원" />
            </p>
            <p>
           <AnimatedText text="Research" />
            </p>
            <p>
            <AnimatedText text="Institute of Information and" />
            </p>
            <p>
           <AnimatedText text="Culture" />
            </p>
            <p>
           <AnimatedText text="Technology" />
            </p>
           
          </div>
          <div className="middle-text"></div>
        </div>
        <div className="inner bg-blue">
          <div className="image-container">
            <div className="text-container">
              <p>Purpose/Vision</p>
              <v3>
    글로벌 ICT 성장기반{" "}
    <span style={{ color: "blue" }}>구축</span>{" "}
    <span style={{ color: "blue" }}>교육</span>/연구개발의 {" "}
    <span style={{ color: "blue" }}>선진화 </span>및
       체계적인 지원/시스템
  </v3>
            </div>
            <div className="second-table">
              <div className="new-images-container" ref={newImagesContainerRef}>
                <div className="purpose-image">
                  <img src="lab.png" alt="AI 융합 연구/교육" />
                  <p>AI {" "}
    <span style={{ color: "blue" }}>융합</span>{" "} 연구/교육</p>
                </div>
                <div className="purpose-image">
                  <img src="global.png" alt="글로벌-산학 협력" />
                  <p>
    <span style={{ color: "blue" }}>글로벌</span>{" "}-산학 협력</p>
                </div>
                <div className="purpose-image">
                  <img src="semi.png" alt="고령화-통일 대비 ICT 교육" />
                  <p>{" "}
    <span style={{ color: "blue" }}>고령화-통일</span>{" "} 대비 ICT 교육</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner bg-pink">
        <div className="image-gallery-container">
      <div className="left-image">
              <img src="3-6-remove.png" alt="3-6" ref={image1Ref} className={image1InView ? "fade-in" : ""} />
            </div>
            <div className="right-images">
                <img src="3-8.png" alt="3-1" ref={image2Ref} className={image2InView ? "fade-in" : ""} />
                
              </div>
    </div>
        </div>
      </div>
    </mainpage>
  );
}

export default MainPage;
