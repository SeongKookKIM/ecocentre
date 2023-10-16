import React from "react";

function RecycleRight({ img, topTitle, contentImg }) {
  return (
    <div className="recycle-right">
      <div className="right-img">
        <img src={contentImg} alt="친환경" />
      </div>
      <div className="right-content">
        <p className="top-title">
          <img src={img} alt="recycle" />
          {topTitle}
        </p>
        <h2>
          누구나 손쉽게 지구를 지키는
          <br />
          활동에 참여할 수 있습니다.
        </h2>
        <p>
          플라스틱히어로 AI로봇에 폐 플라스틱을 투입하여{" "}
          <br className="mobile" />
          환경 포인트를 적립받을 수 있습니다. <br className="mobile" />
        </p>
      </div>
    </div>
  );
}

export default RecycleRight;
