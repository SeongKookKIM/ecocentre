import React from "react";

function HeroSecond() {
  return (
    <div className="content">
      <div className="hero-title">
        <h4>02</h4>
        <p>
          플라스틱히어로만의 <br />
          <span>파쇄기술</span>로 탄소배출 절감
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-big">
          <img src="/assets/image/11.jpg" alt="11" />
        </div>
        <div className="content-small">
          <img src="/assets/icon/down.png" alt="down" />
          <span>
            최대 5배 효율적인 수거로
            <br />
            탄소 배출 절감 효과가 있습니다.
          </span>
        </div>
      </div>
      <div className="first-footer"></div>
    </div>
  );
}

export default HeroSecond;
