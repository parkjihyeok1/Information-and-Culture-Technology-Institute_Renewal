import React from "react";
import "./Greeting.css";


function Greeting() {


  return (
    <div className="greeting">
      <div className="greeting-1">
        <h1 className="greeting-title">원장 인사말</h1>
        <div className="greeting-container">
          <div className="greeting-image">
            <img src="이재동교수.jpg" alt="이재동교수" />
          </div>
          <div className="greeting-info">
            <h2>안녕하십니까</h2>
            <h3>새로운 문명의 시작, 4차산업혁명이란 단어는 이제 친숙한 단어가 되었습니다. 인공지능, 사물인터넷, 클라우드컴퓨팅 </h3>
            <h3>빅데이터는 이제 보편화되어 우리의 생활환경에 깊숙히 자리잡고 있습니다. </h3>
            <h3> 단국대학교는 2007년 죽전캠퍼스로 이전하면서 이러한 변화의 중요성을 인지하고 죽전캠퍼스를 IT와 CT 특성화 캠퍼스로 </h3>
            <h3> 지정하면서 특성화를 위한 교책 중점 연구원을 설립하였습니다.</h3>
            <h3> 단국대학교 정보문화기술연구원(Research Institue of Information and Culture Technology)은 2009년 정보통신융합기술</h3>
            <h3> 연구원과 미디어콘텐츠연구원, 두 개의 교책 연구원으로 설립되어 운영되었으며, 2015년 지금의 정보문화기술연구원의 이름으로</h3>
            <h3> 통합 운영되고 있습니다. 정보문화기술연구원은 설립이후 단국대학교 IT와 CT 분야 정체성 확립과 특성화를 위해 노력하여 왔으며</h3>
            <h3> 특히 산학연 융합 연구 및 국제화 공동연구 등을 지속 추진해왔습니다. 이러한 노력의 결실로 "소프트웨어 중심대학 지원사업",</h3>
            <h3> "에너지 빅데이터 인력양성 사업" 및 "스마트 웨어러블 SW기술개발(ITRC)" 등 다수의 국책사업 등을 수행하고 있으며 또한</h3>
            <h3> 50여건 시앙의 많은 국책사업 실적을 보유하고 있습니다.</h3>
          </div>
        </div>
      </div>
    </div>

      
  );
}
 
export default Greeting;