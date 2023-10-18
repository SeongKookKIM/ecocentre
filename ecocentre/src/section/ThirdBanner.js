import React from "react";

function ThirdBanner() {
  return (
    <section className="third-banner">
      <div className="bg">
        <img src="/assets/image/app-bg.jpg" alt="14" />
      </div>
      <div className="banner-content">
        <strong>
          플라스틱 히어로 <br className="mobile" />
          애플리케이션
        </strong>
        <span>
          플라스틱히어로 기술의 핵심 <br className="mobile" />
          탈중앙화 애플리케이션
        </span>
      </div>
      <div className="arrow">
        <img src="/assets/icon/scroll.png" alt="scroll" />
      </div>
    </section>
  );
}

export default ThirdBanner;
