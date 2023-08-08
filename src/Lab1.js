import React from "react";
import "./Lab1.css";

function Lab1() {
  return (
    <div className="Lab1">
      <div className="content-Lab1">
        <h1 className="centered-title">정보기술연구센터</h1>
        <p>(Information Technology Research Center)</p>
        <div className="member-container">
          <div className="member-image">
            <img src="최종무교수.jpg" alt="최종무교수" />
          </div>
          <div className="member-info">
            <h2>센터장: 최종무 교수(SW융합대학 소프트웨어학과)</h2>
            <h3>교수소개: 2003년 단국대학교에 부임하였으며, 시스템 소프트웨어, 임베디드 시스템, </h3>
            <h3>가상화 등의 분야를 활발하게 연구하고 있다. 10여명의 대학원생들과 임베디드 연구실을 운영하고 있으며 </h3>
            <h3> 리눅스, 플래시 메모리 소프트웨어, Manycore를 위한 시스템 소프트웨어, NVRAM을 위란 시스템 소프트웨어, </h3>
            <h3> I/O 가상화 등의 주제에 대해 프로젝트를 진행하고 있다.</h3>
          </div>
        </div>
        <div className="description-Lab1">
          <h4>센터 소개</h4>
          <p>빅데이터 처리 시스템/SW 연구, IoT 시스템/SW/응용 기술 연구, 지능형 로봇/차세대 HCI 기술 연구</p>
          <p>스마트융합 기술 연구, 전자부품소재 연구 등을 수행하고 정보 기술 분야의 전문 인력을 양성하는 것을 목표로 합니다.</p>
          <p>전화번호: 031-8005-3242</p>
        </div>
      </div>
    </div>
  );
}
 
export default Lab1;