import React, { useState } from "react";
import HeroSlide from "./HeroSlide";

function HeroFour() {
  const [check, setCheck] = useState(false);
  const [active, setActive] = useState("");

  function handlerCheck() {
    setCheck(!check);

    if (check) {
      setActive("");
    } else {
      setActive("active");
    }
  }

  return (
    <div className="content">
      <div className="hero-title">
        <h4>04</h4>
        <p>
          플라스틱히어로 <br />
          <span>AI로봇</span>
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-image">
          {/* <img src="/assets/image/13.jpg" alt="13" /> */}
          <HeroSlide />
        </div>
      </div>
      <div className="ai-robot">
        <h5>플라스틱히어로 AI로봇</h5>
        <p>
          AI로봇의 바탕색상은 설치되는 위치와 협엽 브랜드의 컬러에 맞추어 지정된
          배경색을 사용합니다.
          <br className="mobile" />
          투입구의 재활용 페트병 이미지와 테두리 이미지는 각 브랜드이 색생에
          맞추어 변경이 가능합니다.
        </p>
        <div className="btn">
          <button
            type="button"
            onClick={() => {
              handlerCheck();
            }}
            className={active}
          >
            사양확인
          </button>
          <button type="button">기기구매</button>
        </div>
        {check && (
          <div className="specification">
            <strong>플라스틱히어로 AI로봇</strong>
            <ul>
              <li>
                <p>크기(W*D*H)</p>
                <span>960mm*750mm*1900</span>
              </li>
              <li>
                <p>디스플레이</p>
                <span>21"Touch Screen</span>
              </li>
              <li>
                <p>투입가능자원</p>
                <span>페트</span>
              </li>
              <li>
                <p>무게</p>
                <span>470KG</span>
              </li>
              <li>
                <p>자원적재량</p>
                <span>페트병 2,000개</span>
              </li>
              <li>
                <p>회수용기</p>
                <span>수거박스 2EA</span>
              </li>
              <li>
                <p>방수 / 방진</p>
                <span>생활방수 IP53</span>
              </li>
              <li>
                <p>파쇄모터사양</p>
                <span>3Phase 3hP(2200W)</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroFour;
