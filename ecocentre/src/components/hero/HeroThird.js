import React from "react";

function HeroThird() {
  return (
    <div className="content">
      <div className="hero-title">
        <h4>03</h4>
        <p>
          <span>투명 / 유색</span> 플라스틱을 <br />
          구분 할 줄 아는 플라스틱히어로
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-small">
          <span>
            투명과 유색을 구분하여 효율적인
            <br />
            자원 순환을 지원합니다.
          </span>
          <img src="/assets/icon/return.png" alt="return" />
        </div>
        <div className="content-big">
          <img src="/assets/image/12.jpg" alt="12" />
        </div>
      </div>
    </div>
  );
}

export default HeroThird;
