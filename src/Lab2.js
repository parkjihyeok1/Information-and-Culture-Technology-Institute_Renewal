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
          <p style={ {whiteSpace: "pre-line"}}>
연구보고서[20070131] 감성 및 상황에 최적화된 맞춤형 문화콘텐츠 서비스 기술 연구(1/3){'\n'}
연구보고서[20050930] 휴대인터넷에서 방송 서비스 제공에 적합한 멀티캐스트 기술 연구{'\n'}
일반논문[20211130] 흐름이 있는 문서에 적합한 비지도학습 추상 요약 방법{'\n'}
일반논문[20200101] Multi-Target Tracking with Multiple 2D Range Scanners{'\n'}
일반논문[20180731] Novel Character Identification Utilizing Semantic Relation with Animate Nouns in Korean{'\n'}
일반논문[20180125] Efficient bit-parallel systolic architecture for multiplication and squaring over GF(2m){'\n'}
일반논문[20171001] Low-complexity semi-systolic multiplier using redundant representation over finite fields{'\n'}
일반논문[20170301] 한국어 번역 소설에서 인물명 명사구의동일인물 공통참조 클러스터링 방법{'\n'}
일반논문[20170301] 도서 정보 및 본문 텍스트 통합 마이닝 기반 사용자 맞춤형 도서 큐레이션 시스템{'\n'}
일반논문[20170301] Effective Thematic Words Extraction from a Book using Compound Noun Phrase Synthesis Method{'\n'}
일반논문[20160930] 한국어 소설에서 유정명사용 조사 기반의 인물 추출 기법{'\n'}
일반논문[20160625] Design of a Low-Latency Multiplication Algorithm for Finite Fields{'\n'}
일반논문[20160331] 한국어 역사 소설에서 공간적 배경 인식 기법{'\n'}
일반논문[20160229] 한국어 소설에서 주요 인물명 인식 기법{'\n'}
일반논문[20150220] TF-IDF와 소설 텍스트의 구조를 이용한 주제어 추출 연구{'\n'}
일반논문[20141128] Meta-data configuration and learning technique for wellness content recommendation{'\n'}
일반논문[20130710] A low latency semi-systolic multiplier over GF(2^m){'\n'}
일반논문[20110228] 사용자의 스트레스 완화를 위한 맞춤형 콘텐츠 서비스 시스템의 설계 및 구현{'\n'}
일반논문[20110125] 영상인식 기반 인터랙티브 디지털 콘텐츠 구현 및 사용 편의성 분석{'\n'}
일반논문[20101226] 클라우드 환경에서 대규모 콘텐츠를 위한 효율적인 자원처리 기법{'\n'}
일반논문[20090730] 응용 계층 정보 기반의 에너지 효율적인 센서 네트워크 클러스터링 기법{'\n'}
일반논문[20090330] 이동 단말기를 위한 Three-Tier 상황정보 수집 기법{'\n'}
일반논문[20080530] 환경정보 시스템에 적합한 클러스터 기반 에너지 효율적인 스케줄링 기법{'\n'}
일반논문[20080229] 적응화된 콘텐츠 서비스를 위한 효율적인 사용자 프로파일 교환 방법{'\n'}
일반논문[20071203] 상황에 적응화된 콘텐츠 제공을 위한 클라이언트 프로파일 프레임워크 설계 및 구현{'\n'}
일반논문[20071130] 무선센서네트워크에서 응용계층정보를 이용한 크로스레이어 프로토콜{'\n'}
일반논문[20061208] Ad-Hoc Network 환경을 위한 라우팅 프로토콜의 성능 비교{'\n'}
일반논문[20060731] 휴대인터넷 멀티캐스트 서비스를 제공하는 복합 방식의 성능 평가{'\n'}
일반논문[20040228] GVM 개발환경에서 모바일 온라인 컨텐츠를 위한 프로토콜{'\n'}
일반논문[20031231] 확장가능한 2단계 QoS 라우팅 방식{'\n'}
일반논문[20021031] 계층적 도메인간 부하분산 QoS 라우팅{'\n'}
일반논문[20020228] QoS 라우팅을 위한 부하균등 비용산정 방식{'\n'}
저서/역서[20080226] 원리와 활용 중심의 인터넷 기술{'\n'}
지식재산권[20170919] 전자 출판물에 대한 정보를 생성하는 장치 및 방법(APPARATUS AND METHOD FOR CREATING INFORMATION ON ELECTRONIC PUBLICATION){'\n'}
지식재산권[20170727] 여분 기저 기반의 유한체상 곱셈 장치 및 방법(FINITE FIELD MULTIPLICATION APPARATUS BASED ON REDUNDANT BASIS AND METHOD USING THEREOF){'\n'}
지식재산권[20170727] 장르 분석 장치 및 방법(APPARATUS AND METHOD FOR ANALYZING GENRE){'\n'}
지식재산권[20110331] 스트레스 완화 콘텐츠 제공 시스템 및 방법{'\n'}
지식재산권[20110302] 소비자 감성에 따른 콘텐츠 및/또는 채널 추천 방법 및 그시스템{'\n'}
지식재산권[20001118] 망관리시스템을이용한서비스품질요구사항을만족시키는경로결정방법{'\n'}
학술발표[20180826] Design of the Platform Architecture Providing Information for Barrier-Free Tourism{'\n'}
학술발표[20171223] A Mobile Navigation System Using the Valuable Location Information for the Visually Impaired{'\n'}
학술발표[20171129] Low-Latency Radix-4 Multiplication Algorithm over Finite Fields{'\n'}
학술발표[20170807] Efficient Combined Algorithm for Multiplication and Squaring for Fast Exponentiation over Finite Fields GF(2^m){'\n'}
학술발표[20170713] Efficient Semi-Systolic Finite Field Multiplier Using Redundant Representation{'\n'}
학술발표[20170227] Comparative Study on Book Similarity Measurement Method based on Characters in the Body of a Book written in Korean{'\n'}
학술발표[20080706] TTCG: Three-Tier Context Gathering Technique for Mobile Devices{'\n'}
학술발표[20061214] 무선 센서 네트워크를 위한 응용 데이터를 이용한 에너지 효율적인 토폴로지 제어 기법</p>
          <p>전화번호: 031-8005-3681</p>
        </div>
      </div>
    </div>
  );
}

export default Lab2;