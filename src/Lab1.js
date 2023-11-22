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
          <p style={ {whiteSpace: "pre-line"}}>
            연구보고서[20121206] 소프트웨어 공학 방법론과 금융 공학 지식 기반 차세대 금융 SW 프레임워크(4/4){'\n'}
            연구보고서[20120829] 그린 컴퓨팅을 위한 차세대 메모리 계층 구조 연구(3/3){'\n'}
            연구보고서[20110331] SSD를 위한 S.M.A.R.T표준화 및 프로토콜 분석기를 통한 패턴 분석{'\n'}
            일반논문[20210826] Direct-Virtio: A New Direct Virtualized I/O Framework for NVMe SSDs{'\n'}
일반논문[20210402] Supporting SLA via Adaptive Mapping and Heterogeneous Storage Devices in Ceph{'\n'}
일반논문[20200120] CoDR: Correlation-based data reduction scheme for efficient gathering of heterogeneous driving data{'\n'}
일반논문[20180401] VirtIO-trace: 가상화 환경에서 NVMe SSD 입출력 특성 분석을 위한 통합 도구{'\n'}
일반논문[20180302] 가상화 환경에서 NVMe SSD 성능 분석 및 직접 접근 엔진 개발{'\n'}
일반논문[20170301] Don't make cache too complex: A simple probability-based cache management scheme for SSDs{'\n'}
일반논문[20170301] An Adaptive and Integrated Low-Power Framework for Multicore Mobile Computing{'\n'}
일반논문[20161201] Balancing spatial locality with parallelism in solid state disks{'\n'}
일반논문[20160201] Exploiting Compression-Induced Internal Fragmentation for Power-Off Recovery in SSD{'\n'}
일반논문[20150701] A-DRM: Architecture-aware Distributed Resource Management of Virtualized Clusters{'\n'}
일반논문[20150301] Design Tradeoffs of SSDs: From Energy Consumption's Perspective{'\n'}
일반논문[20141212] Chip-Level RAID with Flexible Stripe Size and Parity Placementfor Enhanced SSD Reliability{'\n'}
일반논문[20141201] Revisiting I/O Schedular for Enhancing I/O Fairness in Virtualization Systems{'\n'}
일반논문[20140116] iBuddy: Inverse Buddy for Enhancing Memory Allocation/Deallocation Performance on Multi-Core Systems{'\n'}
일반논문[20131001] Towards greener data centers with storage class memory{'\n'}
일반논문[20130913] IO Workload Characterization Revisited: A Data-Mining Approach{'\n'}
일반논문[20130901] Slack Space Recycling: Procrastinating On-demand Cleaning in LFS for Performance and Endurance{'\n'}
일반논문[20130806] Unified Security Enhancement Framework for the Android Operating System{'\n'}
일반논문[20130401] Regularities Considered Harmful: Forcing Randomness to Memory Accesses to Reduce Row Buffer Conflicts for Multi-Core, Multi-Bank Systems{'\n'}
일반논문[20130301] Energy-Efficient and High-Performance Software Architecture for Storage Class Memory{'\n'}
일반논문[20121101] A java card security framework: requirment analysis and enforcing techniques{'\n'}
일반논문[20100801] An Empirical Study of FTL Performance in Conjunction with File System Pursuing Data Integrity{'\n'}
일반논문[20100301] INFLAWARE: Integrated Flash Memory Software Architecture for Interoperability, Reconfigurability, and Performance Enhancement{'\n'}
일반논문[20090615] 스토리지 클래스 램을 위한 통합 소프트웨어 구조{'\n'}
일반논문[20090601] Report on Workshop on Operating Systems Support for Next Generation Large Scale NVRAM{'\n'}
일반논문[20090520] Design and Implementation of Uniformity Improving Page Allocation Scheme for Embedded Storage Systems{'\n'}
일반논문[20080731] 비휘발성 메모리를 이용한 로그 구조 파일 시스템의 성능 향상{'\n'}
일반논문[20080430] 메타데이터를 비휘발성 램에 유지하는 플래시 파일시스템에서 가비지 컬렉션 수행에 대한 효율성 분석{'\n'}
일반논문[20080229] 메타데이터를 비휘발성 램에 유지하는 플래시 파일시스템의 설계 및 구현{'\n'}
일반논문[20080229] Models and Design of an Adaptive Hybrid Scheme for Secure Deletion of Data in Consumer Electronics{'\n'}
일반논문[20071215] 블록 클리닝 비용 분석에 기초한 MODA 할당 정책 설계 및 구현{'\n'}
일반논문[20071215] 효과적인 메모리 테스트를 위한 가상화 커널{'\n'}
일반논문[20071130] Design,Implementation, and Performance Evaluation of Flash Memory-based File System on Chip{'\n'}
일반논문[20071115] 플래시메모리 파일시스템을 위한 안전한 파일 삭제 기법{'\n'}
일반논문[20070930] Kernel Aware Module Verification for Robust Reconfigurable Operating System{'\n'}
일반논문[20070716] Model and Validation of Block Cleaning Cost for Flash Memory{'\n'}
일반논문[20070601] 이동기기에서 개인정보 보호를 위한 안전한 파일 삭제 기법{'\n'}
일반논문[20070514] Performance Characteristics of Flash Memory: Model and Implications{'\n'}
일반논문[20061030] 플래시 메모리 파일 시스템을 위한 순수도 기반 페이지 할당 기법에 대한 연구{'\n'}
일반논문[20060915] 비휘발성 메모리의 공간적 효율성을 고려한 파일 시스템의 설계 및 구현{'\n'}
일반논문[20060131] Efficient Identification of Bad Signatures in RSA-Type Batch Signature{'\n'}
일반논문[20051215] Batch Verification with DSA-Type Digital Signatures for Ubiquitous Computing{'\n'}
일반논문[20050817] 센서 네트워크를 이용한 지능형 공간 설계와 구현{'\n'}
일반논문[20050817] 헬스케어시스템을 위한 지능형 공간과 센싱 단말기 구현{'\n'}
일반논문[20050815] 이동 기기를 위한 플래시 메모리 파일 시스템{'\n'}
일반논문[20041215] 파일시스템을 내장한 저장장치의 설계, 구현 및 성능 분석{'\n'}
일반논문[20020701] Design, Implementation, and Performance Evaluation of a Detection-Based Adaptive Block Replacement Scheme{'\n'}
일반논문[20011201] LRFU: A Spectrum of Policies that Subsumes the Least Recently Used and Least Frequently Used Policies{'\n'}
저서/역서[20161121] 클라우드 컴퓨팅 : 개념, 기술, 구축체험{'\n'}
저서/역서[20150302] Operating systems internals anddesign principles{'\n'}
저서/역서[20150130] 리눅스 커널 내부구조 : 리눅스 해커를 위한 지침서{'\n'}
저서/역서[20090825] 운영체제론 제3판{'\n'}
저서/역서[20090507] 운영체제:내부구조 및 설계원리 6판{'\n'}
저서/역서[20080920] 리눅스커널내부구조{'\n'}
지식재산권[20181204] 리눅스 환경에서 파일 무결성 검증 장치 및 방법{'\n'}
지식재산권[20181204] 매니코어에서 L1/L2 선반입 특성을 기반으로 응용의 워킹셋 크기를 파악하는 장치 및 방법{'\n'}
지식재산권[20181204] 이동식저장장치의 데이터 접근 이벤트 로깅 방법 및 시스템{'\n'}
지식재산권[20181204] 플래시 메모리의 신뢰성 검증을 위한 아날로그 정보 기반 에뮬레이션 방법 및 그 장치{'\n'}
지식재산권[20181204] 멀티코어에서 태스크 및 가상 머신 성능의 온라인 특성 분류 장치 및 최적 배치 방법{'\n'}
지식재산권[20181204] 플래시 메모리의 읽기 간섭 오류 감소를 위한 데이터 분산이주 방법 및 그 장치{'\n'}
지식재산권[20180402] EFFICIENT RAID TECHNIQUE FOR RELIABLE SSD{'\n'}
지식재산권[20170102] 디바이스 컨트롤러를 포함하는 저장 장치, 상기 디바이스 컨트롤러가 수행하는 입출력 분산 처리 방법(STORAGE APPARATUS INCLUDING DEVICE CONTROLLER, THE DEVICE CONTROLLER FOR PERFORMING INPUT/OUTPUT VARIANCE PROCESSING METHOD){'\n'}
지식재산권[20161206] APPARATUS AND METHOD FOR INDICATING FLASH MEMORY LIFE{'\n'}
지식재산권[20161108] 드라이브 컨트롤러를 포함하는 저장 장치 및 상기 드라이브 컨트롤러가 수행하는 주소 사상 방법(STORAGE APPARATUS INCLUDING DEVICE CONTROLLER, THE DEVICE CONTROLLER FOR PERFORMING ADDRESS MAPPING METHOD){'\n'}
지식재산권[20160831] 가상화 클러스터 환경에서 네임 노드를 할당하는 방법 및 장치(METHOD AND APPARATUS FOR ASSIGNING NAMENODE IN VIRTUALIZED CLUSTER ENVIRONMENTS){'\n'}
지식재산권[20160720] 메모리 제어 방법 및 메모리 제어 장치{'\n'}
지식재산권[20160713] 가상화 시스템 및 그것의 명령어 실행 방법(VIRTUAL SYSTEM AND INSTRUCTION EXECUTING METHOD THEREOF){'\n'}
지식재산권[20160610] 드라이브 컨트롤러를 포함하는 저장 장치, 상기 드라이브 컨트롤러가 수행하는 가비지 컬렉션 수행 방법(STORAGE APPARATUS INCLUDING DRIVE CONTROLLER, THE DRIVE CONTROLLER FOR PERFORMING GARBAGE COLLECTION PERFORM METHOD){'\n'}
지식재산권[20160601] 가상 머신의 데이터 처리 방법(METHOD FOR PROCESSING DATA OF VIRTUAL MACHINE){'\n'}
지식재산권[20160519] 소프트웨어 버스마크에 기반한 소프트웨어 자산 관리 방법 및 그 장치(METHOD FOR SOFTWARE ASSET MANAGEMENT BASED ON SOFTWARE BIRTHMARK AND APPARATUS THEREOF){'\n'}
지식재산권[20160404] 독출 오류를 방지하는 비휘발성 메모리의 제어 방법 및 장치(METHOD AND APPARATUS FOR CONTROLLING NON-VOLATILE MEMOERY TO PREVENT READ ERROR){'\n'}
지식재산권[20160331] 메모리 기반 저장장치의 주기적 갱신 장치 및 방법(APPARATUS AND METHOD FOR PERIODICALLY UPDATING MEMORY BASED STORAGE DEVICE){'\n'}
지식재산권[20160314] 메모리 제어 방법 및 메모리 제어 장치(METHOD AND APPARATUS FOR CONTROLLING MEMORY){'\n'}
지식재산권[20151230] 스택 기반 소프트웨어 유사도 평가 방법 및 장치{'\n'}
지식재산권[20151230] 가상화 환경에서의 대역폭 할당 방법 및 장치{'\n'}
지식재산권[20151223] 가상 머신의 라이브 마이그레이션 방법 및 장치{'\n'}
지식재산권[20151127] 메모리 구조를 분석하는 방법 및 장치{'\n'}
지식재산권[20150720] 가상머신 모니터링 장치 및 그 방법{'\n'}
지식재산권[20150102] 하이브리드 플래시 메모리의 성능과 수명 최적화 장치 및 방법{'\n'}
지식재산권[20140326] 스택 기반 소프트웨어 유사도 평가 방법 및 장치{'\n'}
지식재산권[20140304] 메모리 컨테이너를 이용한 메모리 할당 방법 및 장치{'\n'}
지식재산권[20140228] 가상 머신의 라이브 마이그레이션 방법 및 장치{'\n'}
지식재산권[20140227] 가상화 환경에서의 대역폭 할당 방법 및 장치{'\n'}
지식재산권[20140210] 가상화 클러스터 환경에서 네임 노드를 할당하는 방법 및 장치{'\n'}
지식재산권[20140210] 노드 성능에 기반한 투기적 실행 제어 방법 및 이를 위한 장치{'\n'}
지식재산권[20131202] 저장장치에 대한 입출력 특성 분류 방법 및 장치{'\n'}
지식재산권[20131125] 비휘발성 메모리 저장장치에서 워크로드와 데이터 재사용 시간을 고려한 선택적 트림 방법{'\n'}
지식재산권[20131112] 메모리 구조를 분석하는 방법 및 장치{'\n'}
지식재산권[20131107] 파티션에 따라서 저장 위치를 물리적으로 구분하는 NVRAM 기반의 저장 장치 및 상기 저장 장치의 동작 방법{'\n'}
지식재산권[20130823] 플래시 메모리에 기반한 SSD에서의 전원-손실 복구 방법 및 장치{'\n'}
지식재산권[20130719] 다양한 블록 크기를 지원하는 주소 사상을 사용하여 플래시 메모리 내에 데이터를 저장하는 방법 및 장치{'\n'}
지식재산권[20130704] 불법 촬영된 소프트웨어 개발 문서의 자동유출 방지방법 및 방지시스템{'\n'}
지식재산권[20130625] 소모 전력에 기반한 데이터 기록 방법 및 장치{'\n'}
지식재산권[20130404] 캐시 장치를 관리하는 장치 및 방법{'\n'}
지식재산권[20130402] 저장 장치의 중복 제거 성능 향상을 위한 맵핑 관리 시스템{'\n'}
지식재산권[20130328] 스토리지 관리 방법 및 장치{'\n'}
지식재산권[20130207] 신뢰성 있는 SSD를 위한 효율적인 RAID 기법{'\n'}
학술발표[20150605] Amnesic Cache Management for Non-Volatile Memory{'\n'}
학술발표[20150604] Incremental Redundancy to Reduce Data Retention Errors in Flash-based SSDs{'\n'}
학술발표[20150604] WARM: Improving NAND Flash Memory Lifetime with Write-hotness Aware Retention Management{'\n'}
학술발표[20150314] A-DRM: Architecture-aware Distributed Resource Management of Virtualized Clusters{'\n'}
학술발표[20141020] Design Space Exploration of an NVM-based Memory Hierarchy{'\n'}
학술발표[20141006] D3: Discarding Dispensable Data for Efficient Live Migration of Virtual Machines{'\n'}
학술발표[20140325] Cooperative Kernel: Online Memory Test Platform using Inter-kernel Context Switch and Memory Isolation{'\n'}
학술발표[20140116] Burstiness-aware I/O Scheduler for MapReduce Framework on Virtualized Environments{'\n'}
학술발표[20131002] Effect of Page Frame Allocation Pattern on Bank Conflicts in Multi-core Systems{'\n'}
학술발표[20130730] TinyFTL: An FTL Architecture for Flash Memory Cards with Scarce Resources{'\n'}
학술발표[20130627] Improving SSD Reliability with RAID via Elastic Striping and Anywhere Parity{'\n'}
학술발표[20130509] Hybrid Solid State Drives for Improved Performance and Enhanced Lifetime{'\n'}
학술발표[20130319] Onion and Pizza: New Disk Partitioning Schemes for Virtualization Systems{'\n'}
학술발표[20130118] RAMC: Runtime Abstract Memory Context based Plagiarism Detection in Binary Code{'\n'}
학술발표[20121024] Fine-Grained I/O Fairness Analysis in Virtualized Environments{'\n'}
학술발표[20120214] Caching Less for Better Performance: Balancing Cache Size and Update Cost of Flash Memory Cache in Hybrid Storage Systems{'\n'}
학술발표[20110614] SSD Characterization: From Energy Consumption's Perspective{'\n'}
학술발표[20101029] A Novel Memory-Aware CPU Allocation Policy for Multicore NUMA Architecture{'\n'}
학술발표[20101026] Janus-FTL: Finding the Optimal Point on the Spectrum Between Page and Block Mapping Schemes{'\n'}
학술발표[20100524] Optimizations of LFS with Slack Space Recycling and Lazy Indirect Block Update{'\n'}
학술발표[20100506] A Performance Model and File System Space Allocation Scheme for SSDs{'\n'}
학술발표[20100111] Exploiting Storage Class Memory to Reduce Energy Consumption in Mobile Multimedia Devices{'\n'}
학술발표[20091012] Disk Schedulers for Solid State Drives{'\n'}
학술발표[20090620] Taking Advantage of Storage Class Memory Technology Through System Software Support{'\n'}
학술발표[20090312] CPS-SIM: Configurable and Accurate Clock Precision Solid State Drive Simulator{'\n'}
학술발표[20081023] The Effect of Absorbing Hot Write References on FTLs for Flash Storage Supporting High Data Integrity{'\n'}
학술발표[20081023] Implementation Study of an Unified SCRAM Manager for Storage Class Random Access Memory{'\n'}
학술발표[20081021] LTFTL: Lightweight Time shift Flash Translation Layer for Flash Memory based Embedded Storage{'\n'}
학술발표[20080112] Secure Deletion of confidential Data in consumer electronics{'\n'}
학술발표[20070930] Block Recycling Schemes and Their Cost-Based Optimization in NAND Flash Memory Based Storage system{'\n'}
학술발표[20070930] Uniformity Improving Page Allocation for Flash Memory File system{'\n'}
학술발표[20070930] Exploiting Non-volatile RAM to Enhance Flash File System Performance{'\n'}
학술발표[20070411] Write-Aware Buffer Cache Management Scheme for Nonvolatile RAM{'\n'}
학술발표[20070311] Virtual framework for Testing the Reliablity of System Software on Embedded System{'\n'}
학술발표[20061114] Design and Analysis of a Space Concious Nonvolatile-RAM File System{'\n'}
학술발표[20061026] Experimental Evaluation of an Extent-based File system for Nonvolatile-RAM{'\n'}
학술발표[20060424] Design and Implementation of a Kernel Resource Protector for Robustness of Linux Module Programming</p>
          <p>전화번호: 031-8005-3242</p>
        </div>
      </div>
    </div>
  );
}
 
export default Lab1;