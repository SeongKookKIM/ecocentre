import React from "react";

function HeroFirst() {
  return (
    <div className="content">
      <div className="hero-title">
        <h4>01</h4>
        <p>
          <span>자원을 구별</span>해 내는 <br />
          플라스틱히어로
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-small">
          <span>
            IOT 시반 AI기술로
            <br className="mobile" />
            자원 구분을 정확하게
          </span>
          <img src="/assets/icon/iot.png" alt="iot" />
        </div>
        <div className="content-big">
          <img src="/assets/image/10.jpg" alt="10" />
        </div>
      </div>
      <div className="first-footer"></div>
    </div>
  );
}

export default HeroFirst;
