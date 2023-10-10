import React from "react";

function HeroFive() {
  return (
    <div className="hero-five">
      <div className="hero-title" style={{ paddingTop: "0" }}>
        <h4>05</h4>
        <p>
          에코센트레가 직접 <br />
          관리하는 <span>AS 프로세스</span>
        </p>
      </div>
      <div className="hero-as">
        <div className="as-inner">
          <div className="as-image">
            <img src="/assets/icon/as01.png" alt="as-1" />
          </div>
          <div className="as-content">
            <strong>원격 점검 및 서비스</strong>
            <ul>
              <li>
                <span>·</span> 1일 2회 모든 AI로봇 원격 점검
              </li>
              <li>
                <span>·</span> 사용자 및 고객 요청 원격 점검
              </li>
            </ul>
          </div>
        </div>
        <div className="as-inner">
          <div className="as-image">
            <img src="/assets/icon/as02.png" alt="as-2" />
          </div>
          <div className="as-content">
            <strong>방문 점검 및 AS</strong>
            <ul>
              <li>
                <span>·</span> 주 1회 기본 방문 점검(수거 포함)
              </li>
              <li>
                <span>·</span> 원격 점검으로 미해결 시 현장 지원팀 방문 점검
              </li>
            </ul>
          </div>
        </div>
        <div className="as-inner">
          <div className="as-image">
            <img src="/assets/icon/as03.png" alt="as-3" />
          </div>
          <div className="as-content">
            <strong>제품 회수 및 교체</strong>
            <ul>
              <li>
                <span>·</span> 현장 유지 보수 불가 시 제품 회수하여 AS
              </li>
              <li>
                <span>·</span> AS 완료 후 재설치 또는 제품 교환
              </li>
            </ul>
          </div>
        </div>
        <div className="as-inner">
          <div className="as-image">
            <img src="/assets/icon/as04.png" alt="as-4" />
          </div>
          <div className="as-content">
            <strong>유지 보수 리포트 작성</strong>
            <ul>
              <li>
                <span>·</span> 유지 보수 프로세스 진행 후 리포트 작성
              </li>
              <li>
                <span>·</span> 제품 회수 및 교체 시 고객사에 작성 리포트 제공 후
                검수 완료
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroFive;
