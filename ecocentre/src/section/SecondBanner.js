import React from "react";

function SecondBanner() {
  return (
    <div className="second-banner">
      <div className="main-wrapper"></div>
      <div className="main-inner">
        <div className="content">
          <h2>플라스틱 히어로</h2>
          <p>
            이젠 버리지 말고 <br />
            플라스틱히어로가 되어주세요
          </p>
        </div>
        <div className="img">
          <img src="/assets/image/ai-robot.png" alt="robot" />
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
