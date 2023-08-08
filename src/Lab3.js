import React from "react";
import "./Lab1.css";

function Lab3() {
  return (
    <div className="Lab3">
      <div className="content-Lab1">
        <h1 className="centered-title">자율주행드론연구센터</h1>
        <p>(Autonomous Vehicle & Drone Research Center, AVDRC)</p>
        <div className="member-container">
          <div className="member-image">
            <img src="한경호교수.jpg" />
          </div>
          <div className="member-info">
            <h2>센터장: 한경호 교수(공과대학 전자전기공학과)</h2>
            <h3>교수소개: 디지탈회로 및 마이크로프로세서분야를 강의하고 연구하고 있습니다.  </h3>
            <h3>강의과목으로는 논리회로, 전자회로 (TR, OPAMP, Logic), 회로이론, 마이크로프로 세서응용,</h3>
              <h3>컴퓨터 구조 및 응용 분야이며 연구분야는 마이크로프로세서응용분야를 주 관심분야로 하여 지능형 교통신호시스템,</h3>
            <h3> 물류자동화 관련 시스템, 공장자동화 시스템 등의 연구 및 개발을 주요 연구과목으로 하고 있습니다 </h3>
            <h3></h3>
            
          </div>
        </div>
        <div className="description-Lab1">
          <h4>센터 소개</h4>
          <p>드론에 관련된 핵심 제반기술에 관한 정부, 연구소, 대학 및 산업체와의 공동연구를 수행하고,</p>
          <p>드론에 관련된 전문적기술인력의 양성 및 교육, 연구개발 결과 및 각종 기술협력을 통한 산업기술 분야에서의 선도적 역할을 목표로 한다.</p>
          <p>전화번호</p>
        </div>
      </div>
    </div>
  );
}

export default Lab3;