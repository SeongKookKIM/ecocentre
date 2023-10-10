import React from "react";

function Esgfour() {
  return (
    <div className="esg-four">
      <div className="hero-title">
        <h4>04</h4>
        <p>
          환경포인트를 통한 <br />
          <span>기업 ESG 사회환원금액</span> 예상진출
        </p>
        <span className="ect">* 300인 기업 기준</span>
      </div>
      <div className="content">
        <div className="img">
          <img src="/assets/image/ai-robot.png" alt="ai" />
        </div>
        <div className="inner">
          <ul>
            <li>
              <div className="arrow">
                <img
                  src="/assets/icon/esg-arrow.png"
                  alt="arrow"
                  className="arrow"
                />
              </div>
              <div className="main-text">
                <div className="main-text-img">
                  <img src="/assets/image/22.jpg" alt="22" />
                </div>
                <div className="main-text-content">
                  <strong>1PET</strong>
                  <span>플라스틱히어로 환경포인트 80~100P(원)</span>
                </div>
              </div>
            </li>
            <li>
              <div className="arrow">
                <img
                  src="/assets/icon/esg-arrow.png"
                  alt="arrow"
                  className="arrow"
                />
              </div>
              <div className="main-text">
                <div className="main-text-img">
                  <img src="/assets/image/23.jpg" alt="23" />
                </div>
                <div className="main-text-content">
                  <strong>1일 1인 3회 용기 반환</strong>
                  <span>900PET X 80~100P(원) = 72,000~90,000P(원)</span>
                </div>
              </div>
            </li>
            <li>
              <div className="arrow">
                <img
                  src="/assets/icon/esg-arrow.png"
                  alt="arrow"
                  className="arrow"
                />
              </div>
              <div className="main-text">
                <div className="main-text-img">
                  <img src="/assets/image/24.jpg" alt="24" />
                </div>
                <div className="main-text-content">
                  <strong>1개월간 기업 사회환원금액</strong>
                  <span>2,160,000~2,700,000P(원)</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Esgfour;
