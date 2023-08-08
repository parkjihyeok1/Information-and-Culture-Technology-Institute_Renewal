import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";


function History() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const sectionElements = document.querySelectorAll(".section");
    
      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionVisibleOffset = windowHeight * 0.7;
    
        if (scrollPosition >= sectionTop - sectionVisibleOffset) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 100, // 스크롤 애니메이션의 실행 시간을 500ms로 설정
    });
    
  };

  return (
    <div className="history">
        <h1>정보문화기술연구원의 연혁</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="연혁.png" alt="연혁"style={{ width: "100%", height: "auto" }}  /></div>
        <div className="divider1"></div>
        <div className={`section ${isVisible ? "visible" : ""}`} id="organization">
        <div style={{ display: "flex", justifyContent: "center" }}>
      <img src="연혁2.png" alt="연혁2"style={{ width: "100%", height: "auto" }}  /></div>
      </div>
      <div className={`section ${isVisible ? "visible" : ""}`} id="organization">
      <div className="divider1"></div>
        <h1>조직체계</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="조직체계.png" alt="조직체계" style={{ width: "80%", height: "auto" }} /></div>
      </div>
      <div className="scroll-navigation">
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          Scroll to Top
        </button>
      </div>
    </div>
  );
}

export default History;