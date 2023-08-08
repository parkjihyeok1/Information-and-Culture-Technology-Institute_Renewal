import React from "react";
import "./Lab1.css";

function Lab4() {
  return (
    <div className="Lab4">
      <div className="content-Lab1">
        <h1 className="centered-title">경기 단국-삼성 모바일연구소</h1>
        <p>(Gyeonggi Dankook-Samsung Mobile Research Center) </p>
        <div className="member-container">
          <div className="member-image">
            <img src="이재동교수.jpg" />
          </div>
          <div className="member-info">
            <h2>센터장: 이재동 교수(SW융합대학 소프트웨어학과)</h2>
            <h3>교수소개: 현재 단국대학교 소프트웨어학과 정교수 및 국제처장을 역임하고 있다.  </h3>
            <h3>연구 업적의 저서로는 모바일 인터넷 기술과 응용, 인터넷 기술과 응용 (사이텍 출판사-</h3>
            <h3>2000년 문화관광부 우수학술도서로 선정) 외 다수의 역/저서와 100여편의 논문을 국내외에 발표하였다. </h3>
            <h3>대외 활동 사항으로는 민관확대 콘텐츠 정책위원(문화부-정통부), 국립 특수 전문 대학 교육과정 실무위원 </h3>
            <h3>(사이텍 출판사-2000년 문화관광부 우수학술도서로 선정)외 다수의 역/저서와 100여편의 논문을 국내외에 발표</h3>
          </div>
        </div>
        <div className="description-Lab1">
          <h4>센터 소개</h4>
          <p>미래 모바일 환경에 대응하는 글로벌 R&D 역량 강화 연구를 수행하고, 모바일 융합 분야 산학협력</p>
          <p>및 기술 산업화를 추진하고, 글로벌 모바일 생태계 연구 수행 및 관련 분야의 전문 인력을 양성하는 것을 목표로 합니다.</p>
          <p>전화번호: 031-8005-3236</p>
        </div>
      </div>
    </div>
  );
}

export default Lab4;