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
            파쇄기술을 통해 더 많은 양을
            <br className="mobile" />
            저장할 수 있으며, 제반비용이
            <br className="mobile" />
            절감되는 효과가 있습니다.
          </span>
        </div>
      </div>
      <div className="first-footer">
        <img src="/assets/image/5/01.png" alt="01" />
        <img src="/assets/image/5/02.png" alt="02" />
        <img src="/assets/image/5/03.png" alt="03" />
      </div>
    </div>
  );
}

export default HeroSecond;
