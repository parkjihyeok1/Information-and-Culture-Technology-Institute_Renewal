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
        <div style={{ position: "relative" }}>
  <img src="목표re.png" alt="목표" style={{ width: "100%", height: "auto" }} />
  <div style={{ position: "absolute", top: "56%", left: "25%", transform: "translate(-50%, -50%)" }}>
    <p style={{ fontSize: "35px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "0px" }}>
      단국대학교의 ICT분야의 교책중점연구원
    </p>
    <p style={{ fontSize: "30px", color: "black", background: "rgba(0, 0, 0, 0)", padding: "5px",whiteSpace: "pre-line"} }>
      7개의 연구센터와 2개의 연구소를 운영  {'\n'}50여명의 교내 교수가 참여하여 융합연구,{'\n'} 미래기술연구, 융합교육 및 국책과제를수행
    </p>
  </div>
  <div style={{ position: "absolute", top: "50%", left: "29%", transform: "translate(60%, -50%)" }}>
    <p style={{ fontSize: "35px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "5px" }}>
      IT·CT 중심 특성화 지원 및 컨트롤 타워 역할 수행
    </p>
    <p style={{ fontSize: "30px", color: "black", background: "rgba(0, 0, 0, 0)", padding: "10px" ,whiteSpace: "pre-line"}}>
      단국대학교 죽전캠퍼스 정보기술 및 문화 기술 {'\n'}중심 특성화 지원 및 컨트롤 타워 역할 수행
    </p>
  </div>
</div>

<div className={`section ${isVisible ? "visible" : ""}`} id="vision">
  <div className="divider1"></div>
  <h1>비전/세부계획</h1>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img src="비전.png" alt="비전" style={{ width: "100%", height: "auto" }} />
    <div style={{ position: "absolute", top: "25%", left: "25%", transform: "translate(-10%, -50%)" }}>
    <p style={{ fontSize: "45px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" }}>
      글로벌 ICT 성장기반 구축 및 교육/연구개발의 선진화
    </p>
  </div>
   
    <div style={{ position: "absolute", top: "40.5%", left: "23.5%", transform: "translate(-50%, -50%)" }}>
    <p style={{ fontSize: "30px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" }}>
    AI 융합연구/교육 강화
    </p></div> 
    <div style={{ position: "absolute", top: "40.5%", left: "26.5%", transform: "translate(100%, -50%)" }}>
    <p style={{ fontSize: "30px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" }}>
    글로벌 산학협력 강화
    </p>
  </div>
  <div style={{ position: "absolute", top: "40.5%", left: "57%", transform: "translate(100%, -50%)" }}>
    <p style={{ fontSize: "27px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" ,whiteSpace: "pre-line"} }>
    고령화 통일대비 {'\n'}ICT 교육 연구 강화
    </p>
  </div>
  </div>
  <img src="비전2.png" alt="비전2" style={{ width: "100%", height: "auto" }} />
  <div style={{ position: "absolute", top: "65%", left: "50%", transform: "translate(-50%, -50%)" }}>
    <p style={{ fontSize: "45px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" ,whiteSpace: "pre-line"} }>
    체계적인 지원-협력 시스템
    </p>
  </div>
  <div style={{ position: "absolute", top: "93%", left: "16%", transform: "translate(-50%, -50%)" }}>
    <p style={{ fontSize: "27px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" ,whiteSpace: "pre-line"} }>
    국내외 연구 교류회 지원
    </p>
  </div>
  <div style={{ position: "absolute", top: "93%", left: "32.5%", transform: "translate(-20%, -50%)" }}>
    <p style={{ fontSize: "27px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" ,whiteSpace: "pre-line"} }>
    산학 공동 포럼/워크숍 개최
    </p>
  </div>
  <div style={{ position: "absolute", top: "93%", left: "47%", transform: "translate(50%, -50%)" }}>
    <p style={{ fontSize: "27px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" ,whiteSpace: "pre-line"} }>
    국내외 전문가 초청 {'\n'}세미나/학술대회 개최
    </p>
  </div>
  <div style={{ position: "absolute", top: "93%", left: "73.5%", transform: "translate(60%, -50%)" }}>
    <p style={{ fontSize: "27px", color: "white", background: "rgba(0, 0, 0, 0)", padding: "10px" ,whiteSpace: "pre-line"} }>
    글로벌/산학 {'\n'}협력 교류 지원
    </p>
  </div>
</div>

<div className={`section ${isVisible ? "visible" : ""}`} id="swot">
  <div className="divider1"></div>
  <h1>SWOT분석</h1>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img src="swot1.png" alt="SWOT 1" style={{ width: "40%", height: "auto", marginRight: "20px" }} />
    <div style={{ position: "absolute", top: "39%", left: "23%", transform: "translate(-50%, -50%)" }}>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    다년간 다수의 국책사업 경험 보유 
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    교비 지원 교책연구원 
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)",whiteSpace: "pre-line"}}>
    다양한 전공, 다수의 참여 교수가 활동
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    센터 및 연구소별 전문연구 역량보유
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)",whiteSpace: "pre-line"}}>
    학제간 융·복합 인프라 및 산학협력 체계
    </p>
    </div>
    <img src="swot2.png" alt="SWOT 2" style={{ width: "40%", height: "auto", marginLeft: "20px" }} />
    <div style={{ position: "absolute", top: "39%", left: "57%", transform: "translate(50%, -50%)" }}>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    연구활동 독려를 위한 인센티브 약함
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)",whiteSpace: "pre-line"}}>
    국책과제 수행에 따른 유관기관(센터,연구소){'\n'}의 유기적 협력 체계 미흡
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    인문,사회 등 학제간 융합 연구 미흡
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)",whiteSpace: "pre-line"}}>
    전문전담인력 부족
    </p>
    </div>
  </div>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img src="swot3.png" alt="SWOT 3" style={{ width: "40%", height: "auto", marginRight: "20px" }} />
    <div style={{ position: "absolute", top: "85.5%", left: "23%", transform: "translate(-50%, -50%)" }}>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    죽전캠퍼스 IT·CT 특성화 추진
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    정부의 4차 산업혁명 핵심기술(AI,빅데이터{'\n'}AR/VR, 모바일 등)의 지속적인 투자 확대
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)",whiteSpace: "pre-line"}}>
    글로벌 인재 양성에 필요한 교두보 확대
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    해외 교류/협력에 필요한 네트워크 확보
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)",whiteSpace: "pre-line"}}>
    판교 테크노밸리 인프라
    </p>
    </div>
    <img src="swot4.png" alt="SWOT 4" style={{ width: "40%", height: "auto", marginLeft: "20px" }} />
    <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ position: "absolute", top: "85.5%", left: "60%", transform: "translate(50%, -50%)" }}>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    대학 재정 악화에 따른 지원 감소
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)" ,whiteSpace: "pre-line"}}>
    국내외 대학과의 다양한 경쟁요소 심화
    </p>
    <p style={{ fontSize: "17px", color: "black", background: "rgba(0, 0, 0, 0)",whiteSpace: "pre-line"}}>
    전문연구인력의 이탈(퇴직,이직 등)
    </p>
    </div>
    </div>
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

