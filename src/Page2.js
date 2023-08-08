import React, { useState } from "react";
import "./Page2.css";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";
import Lab6 from "./Lab6";
import Lab7 from "./Lab7";
import Lab8 from "./Lab8";
import Lab9 from "./Lab9";

function Page2() {
  const [showLab1, setShowLab1] = useState(true);
  const [showLab2, setShowLab2] = useState(false);
  // showLab3부터 showLab8까지의 상태도 추가해주세요.
  const [showLab3, setShowLab3] = useState(false);
  const [showLab4, setShowLab4] = useState(false);
  const [showLab5, setShowLab5] = useState(false);
  const [showLab6, setShowLab6] = useState(false);
  const [showLab7, setShowLab7] = useState(false);
  const [showLab8, setShowLab8] = useState(false);
  const [showLab9, setShowLab9] = useState(false);

  const [isLab1Active, setIsLab1Active] = useState(true); // 기본값을 true로 설정합니다.
  const [isLab2Active, setIsLab2Active] = useState(false);
  // isLab3Active부터 isLab8Active까지의 상태도 추가해주세요.
  const [isLab3Active, setIsLab3Active] = useState(false);
  const [isLab4Active, setIsLab4Active] = useState(false);
  const [isLab5Active, setIsLab5Active] = useState(false);
  const [isLab6Active, setIsLab6Active] = useState(false);
  const [isLab7Active, setIsLab7Active] = useState(false);
  const [isLab8Active, setIsLab8Active] = useState(false);
  const [isLab9Active, setIsLab9Active] = useState(false);

const handlePurposeClick = () => {
    setShowLab1(false);
    setShowLab2(false);
    // setShowLab3부터 setShowLab8까지의 상태를 false로 설정해주세요.
    setShowLab3(false);
    setShowLab4(false);
    setShowLab5(false);
    setShowLab6(false);
    setShowLab7(false);
    setShowLab8(false);
    setShowLab9(false);

    setIsLab1Active(false);
    setIsLab2Active(false);
    // setIsLab3Active부터 setIsLab8Active까지의 상태를 false로 설정해주세요.
    setIsLab3Active(false);
    setIsLab4Active(false);
    setIsLab5Active(false);
    setIsLab6Active(false);
    setIsLab7Active(false);
    setIsLab8Active(false);
    setIsLab9Active(false);
  }

  const handleLabClick = (labNumber) => {
    // 해당 labNumber에 따라 setShowLab1부터 setShowLab8까지의 상태를 설정해주세요.
    if (labNumber === 1) {
      setShowLab1(true);
      setShowLab2(false);
      setShowLab3(false);
      setShowLab4(false);
      setShowLab5(false);
      setShowLab6(false);
      setShowLab7(false);
      setShowLab8(false);
      setShowLab9(false);
    } else if (labNumber === 2) {
      setShowLab1(false);
      setShowLab2(true);
      setShowLab3(false);
      setShowLab4(false);
      setShowLab5(false);
      setShowLab6(false);
      setShowLab7(false);
      setShowLab8(false);
      setShowLab9(false);
    }
    // 나머지 labNumber에 따라 setShowLab3부터 setShowLab8까지의 상태를 설정해주세요.
    else if (labNumber === 3) {
      setShowLab1(false);
      setShowLab2(false);
      setShowLab3(true);
      setShowLab4(false);
      setShowLab5(false);
      setShowLab6(false);
      setShowLab7(false);
      setShowLab8(false);
      setShowLab9(false);
    }
    else if (labNumber === 4) {
      setShowLab1(false);
      setShowLab2(false);
      setShowLab3(false);
      setShowLab4(true);
      setShowLab5(false);
      setShowLab6(false);
      setShowLab7(false);
      setShowLab8(false);
      setShowLab9(false);
    }
    else if (labNumber === 5) {
      setShowLab1(false);
      setShowLab2(false);
      setShowLab3(false);
      setShowLab4(false);
      setShowLab5(true);
      setShowLab6(false);
      setShowLab7(false);
      setShowLab8(false);
      setShowLab9(false);
    }
    else if (labNumber === 6) {
      setShowLab1(false);
      setShowLab2(false);
      setShowLab3(false);
      setShowLab4(false);
      setShowLab5(false);
      setShowLab6(true);
      setShowLab7(false);
      setShowLab8(false);
      setShowLab9(false);
    }
    else if (labNumber === 7) {
      setShowLab1(false);
      setShowLab2(false);
      setShowLab3(false);
      setShowLab4(false);
      setShowLab5(false);
      setShowLab6(false);
      setShowLab7(true);
      setShowLab8(false);
      setShowLab9(false);
    }
    else if (labNumber === 8) {
      setShowLab1(false);
      setShowLab2(false);
      setShowLab3(false);
      setShowLab4(false);
      setShowLab5(false);
      setShowLab6(false);
      setShowLab7(false);
      setShowLab8(true);
      setShowLab9(false);
    }
    else if (labNumber === 9) {
      setShowLab1(false);
      setShowLab2(false);
      setShowLab3(false);
      setShowLab4(false);
      setShowLab5(false);
      setShowLab6(false);
      setShowLab7(false);
      setShowLab8(false);
      setShowLab9(true);
    }
    setIsLab1Active(labNumber === 1);
    setIsLab2Active(labNumber === 2);
    // 해당 labNumber에 따라 setIsLab3Active부터 setIsLab8Active까지의 상태를 설정해주세요.
    setIsLab3Active(labNumber === 3);
    setIsLab4Active(labNumber === 4);
    setIsLab5Active(labNumber === 5);
    setIsLab6Active(labNumber === 6);
    setIsLab7Active(labNumber === 7);
    setIsLab8Active(labNumber === 8);
    setIsLab9Active(labNumber === 9);
  };

  return (
    <div className="page2">
      <div className="page2_index">
        <h9>연구센터</h9>
        <div className="button-group2">
          <div className="button-row2">
            <button
              className={isLab1Active ? "active" : ""}
              onClick={() => handleLabClick(1)}
            >
              정보기술연구센터
            </button>
            <button
              className={isLab2Active ? "active" : ""}
              onClick={() => handleLabClick(2)}
            >
              문화기술연구센터
            </button>
            {/* Lab 3부터 Lab 8까지의 버튼을 추가해주세요. */}
            <button
              className={isLab3Active ? "active" : ""}
              onClick={() => handleLabClick(3)}
            >
              자율주행드론연구센터
            </button>
            <button
              className={isLab4Active ? "active" : ""}
              onClick={() => handleLabClick(4)}
            >
              경기단국삼성모바일연구소
            </button>
            <button
              className={isLab5Active ? "active" : ""}
              onClick={() => handleLabClick(5)}
            >
              에너지빅데이터연구센터
            </button>
            <button
              className={isLab6Active ? "active" : ""}
              onClick={() => handleLabClick(6)}
            >
              스마티시티전략연구소
            </button>
            <button
              className={isLab7Active ? "active" : ""}
              onClick={() => handleLabClick(7)}
            >
              HCI연구센터
            </button>
            <button
              className={isLab8Active ? "active" : ""}
              onClick={() => handleLabClick(8)}
            >
              AI연구센터
            </button>
            <button
              className={isLab9Active ? "active" : ""}
              onClick={() => handleLabClick(9)}
            >
            문화예술메타버스센터
            </button>
          </div>
        
        <div className="show2">
        {showLab1 && <Lab1 />}
        {showLab2 && <Lab2 />}
        {showLab3 && <Lab3 />}
        {showLab4 && <Lab4 />}
        {showLab5 && <Lab5 />}
        {showLab6 && <Lab6 />}
        {showLab7 && <Lab7 />}
        {showLab8 && <Lab8 />}
        {showLab9 && <Lab9 />} 
        </div></div>
      </div>
    </div>
  );
}

export default Page2;