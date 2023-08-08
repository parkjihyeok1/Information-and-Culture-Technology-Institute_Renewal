import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import './Purpose.css';
function Purpose() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const sectionElements = document.querySelectorAll(".section");

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - windowHeight + sectionHeight / 2) {
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
  }
  return (
    <div className="purpose">
        <h1>정보문화기술연구원의 핵심 목표</h1>
        <p style={{ marginBottom: "40px" }}>
          IT·CT 특성화를 위한 핵심 R&D 과제를 발굴, 기획, 추진하기 위한 지원 · 기반
          조성 및 교류 확대
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
  <img src="목표.png" alt="목표" style={{ width: "100%", height: "auto" }} />
</div>

<div className={`section ${isVisible ? "visible" : ""}`} id="vision">
  <div className="divider1"></div>
  <h1>비전</h1>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img src="비전.png" alt="비전" style={{ width: "100%", height: "auto" }} />
    <img src="비전2.png" alt="비전2" style={{ width: "100%", height: "auto" }} />
  </div>
</div>

<div className={`section ${isVisible ? "visible" : ""}`} id="swot">
  <div className="divider1"></div>
  <h1>SWOT분석</h1>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img src="swot1.png" alt="SWOT 1" style={{ width: "40%", height: "auto", marginRight: "20px" }} />
    <img src="swot2.png" alt="SWOT 2" style={{ width: "40%", height: "auto", marginLeft: "20px" }} />
  </div>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img src="swot3.png" alt="SWOT 3" style={{ width: "40%", height: "auto", marginRight: "20px" }} />
    <img src="swot4.png" alt="SWOT 4" style={{ width: "40%", height: "auto", marginLeft: "20px" }} />
  </div>
</div>
      <div className="scroll-navigation">
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          Scroll to Top
        </button>
      </div>
    </div>
  );
}

export default Purpose;