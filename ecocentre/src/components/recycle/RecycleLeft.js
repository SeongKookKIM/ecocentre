import React from "react";

function RecycleLeft({ img, topTitle, contentImg }) {
  return (
    <div className="recycle-left">
      <div className="left-content">
        <p className="top-title">
          <img src={img} alt="recycle" />
          {topTitle}
        </p>
        <h2>
          <span>순환경제</span>로의
          <br />
          전환을 이뤄냅니다.
        </h2>
        <p>
          사용된 플라스틱 친환경소재, 통신소재, 전기차소재,{" "}
          <br className="mobile" />
          수소에너지 생산으로 재활용하며 남아있는 <br className="mobile" />
          플라스틱은 미생물(플라스틱 분해 효소)적 기술을{" "}
          <br className="mobile" />
          통해서 다시 태어나게 합니다.
        </p>
      </div>
      <div className="left-img">
        <img src={contentImg} alt="친환경" />
      </div>
    </div>
  );
}

export default RecycleLeft;
