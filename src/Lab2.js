import React from "react";
import "./Lab1.css";

function Lab2() {
  return (
    <div className="Lab2">
      <div className="content-Lab1">
        <h1 className="centered-title">문화기술연구센터</h1>
        <p>(Culture Technology Research Center)</p>
        <div className="member-container">
          <div className="member-image">
            <img src="김승훈교수.jpg" />
          </div>
          <div className="member-info">
            <h2>센터장: 김승훈 교수(SW융합대학 응용컴퓨터공학과)</h2>
            <h3>교수소개: Ad-Hoc Network, Wireless Sensor Network(WSN), 멀티미디어통신망, </h3>
            <h3>초고속 통신망에서의 라우팅 및 Topology 제어유무선 네트워크에서 분산 멀티미디어 서비스을 위한 프로토콜 </h3>
            <h3> 컴퓨터 네트워크 분야 전반에 걸친 실무경험 및 논문게재 실적 있음 </h3>
          </div>
        </div>
        <div className="description-Lab1">
          <h4>센터 소개</h4>
          <p>문화 콘텐츠의 부가가치를 높이기 위한 기술의 연구, 차세대 디지털 콘텐츠 기술 연구, 스토리텔링</p>
          <p>디자인 등 문화·예술과 공학 분야의 융합기술 연구 등을 수행하고 문화 기술 분야의 전문 인력을 양성하는 것을 목표로 합니다.</p>
          <p>전화번호: 031-8005-3681</p>
        </div>
      </div>
    </div>
  );
}

export default Lab2;