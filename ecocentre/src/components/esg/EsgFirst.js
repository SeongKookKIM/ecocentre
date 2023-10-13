import React from "react";

function EsgFirst() {
  return (
    <div className="content">
      <div className="hero-title">
        <h4>01</h4>
        <p>탄소중립효과</p>
      </div>
      <div className="content-wrapper">
        <div className="content-small">
          <span>
            플라스틱히어로 AI 로봇 1대당
            <br />
            236.28그루 심는 효과
          </span>
          <img src="/assets/image/ai-robot.png" alt="ai" />
        </div>
        <div className="content-big">
          <img src="/assets/image/16.jpg" alt="16" />
        </div>
      </div>
      <div className="first-footer">
        <div className="esg-nav">
          <p>연간 AI 로봇 1대당 탄소 평균 절감 수치</p>
        </div>
        <ul>
          <li>
            <div className="img">
              <img src="/assets/icon/esg01.png" alt="esg01" />
            </div>
            <span>연간 PET무게</span>
            <img
              src="/assets/icon/esg-arrow.png"
              alt="arrow"
              className="arrow"
            />
            <p>14,400Kg</p>
          </li>
          <li>
            <div className="img">
              <img src="/assets/icon/esg02.png" alt="esg02" />
            </div>
            <span>1년간 Co2배출억제</span>
            <img
              src="/assets/icon/esg-arrow.png"
              alt="arrow"
              className="arrow"
            />
            <p>33T</p>
          </li>
          <li>
            <div className="img">
              <img src="/assets/icon/esg03.png" alt="esg03" />
            </div>
            <span>
              1T Co2 상쇄
              <br className="mobile" />
              식재 그루 수
            </span>
            <img
              src="/assets/icon/esg-arrow.png"
              alt="arrow"
              className="arrow"
            />
            <p>236.28그루</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EsgFirst;
