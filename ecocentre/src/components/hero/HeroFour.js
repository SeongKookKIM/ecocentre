import React from "react";

function HeroFour() {
  return (
    <div className="content">
      <div className="hero-title">
        <h4>04</h4>
        <p>
          플라스틱히어로 <br />
          <span>포트폴리오</span>
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-image">
          <img src="/assets/image/13.jpg" alt="13" />
        </div>
      </div>
      <div className="ai-robot">
        <h5>플라스틱히어로 AI로봇</h5>
        <p>
          AI로봇의 바탕색상은 설치되는 위치화 협엽 브랜드의 컬러에 맞추어 지정된
          배경색을 사용합니다.
          <br />
          투입구의 재활용 페트병 이미지와 테두리 이미지는 각 브랜드이 색생에
          맞추어 변경이 가능합니다.
        </p>
        <div className="btn">
          <button type="button">사양확인</button>
          <button type="button">기기구매</button>
        </div>
      </div>
    </div>
  );
}

export default HeroFour;
