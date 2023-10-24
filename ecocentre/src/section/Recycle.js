import React from "react";
import RecycleLeft from "../components/recycle/RecycleLeft";
import RecycleRight from "../components/recycle/RecycleRight";

function Recycle() {
  return (
    <section className="recycle">
      <div className="recycle-inner">
        <div className="recycle-right">
          <div className="right-img">
            <img src="/assets/image/recycle/recycle01.jpg" alt="참여" />
          </div>
          <div className="right-content">
            <p className="top-title">
              <img src="/assets/icon/bin.png" alt="참여" />
              플라스틱히어로 참여
            </p>
            <h2>
              누구나 손쉽게 <span>지구</span>를 지키는
              <br />
              활동에 참여할 수 있습니다.
            </h2>
            <p>
              ‘플라스틱히어로 AI로봇’에 폐플라스틱을 투입하여&nbsp;
              <br className="mobile" />
              지구를 지키는 활동에 참여할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="recycle-icon">
          <ul>
            <li>
              <img src="/assets/image/recycle/recycle01-01.png" alt="01" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle01-02.png" alt="02" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle01-03.png" alt="03" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle01-04.png" alt="04" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle01-05.png" alt="05" />
            </li>
          </ul>
        </div>

        <div className="recycle-left">
          <div className="left-content">
            <p className="top-title">
              <img src="/assets/icon/dump.png" alt="수거" />
              플라스틱히어로 수거
            </p>
            <h2>
              에코센트레가
              <br />
              <span>직접 수거</span>합니다.
            </h2>
            <p>
              실시간 모니터링을 통해 수거량을&nbsp;
              <br className="mobile" />
              확인하며, 직접 방문하여 시민 참여로 <br className="mobile" />
              이루어진 폐플라스틱을 수거 합니다.
            </p>
          </div>
          <div className="left-img">
            <img src="/assets/image/recycle/recycle02.png" alt="수거" />
          </div>
        </div>
        <div className="recycle-icon">
          <ul>
            <li>
              <img src="/assets/image/recycle/recycle02-01.png" alt="01" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle02-02.png" alt="02" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle02-03.png" alt="03" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle02-04.png" alt="04" />
            </li>
          </ul>
        </div>

        <div className="recycle-right">
          <div className="right-img">
            <img src="/assets/image/recycle/recycle03.jpg" alt="공정" />
          </div>
          <div className="right-content">
            <p className="top-title">
              <img src="/assets/icon/regin.png" alt="공정" />
              플라스틱히어로 공정
            </p>
            <h2>
              지속 가능한 플라스틱
              <br />
              소재를 <span>개발 및 생산</span>합니다.
            </h2>
            <p>
              ‘플라스틱히어로 AI로봇’에 수거된 폐플라스틱으로&nbsp;
              <br className="mobile" />
              친환경 소재를 개발 및 생산합니다.
            </p>
          </div>
        </div>
        <div className="recycle-icon">
          <ul>
            <li>
              <img src="/assets/image/recycle/recycle03-01.png" alt="01" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle03-02.png" alt="02" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle03-03.png" alt="03" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle03-04.png" alt="04" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle03-05.png" alt="05" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle03-06.png" alt="06" />
            </li>
          </ul>
        </div>

        <div className="recycle-left">
          <div className="left-content">
            <p className="top-title">
              <img src="/assets/icon/leef.png" alt="재생산" />
              플라스틱히어로 재생산
            </p>
            <h2>
              플라스틱히어로 AI로봇을
              <br />
              기반으로 새로운 <span>자원 순환</span>
              <br />
              <span>시스템</span>을 구축합니다.
            </h2>
            <p>
              에코센트레는 친환경 소재, 통신 소재,
              <br className="mobile" />
              전기차 소재 등 39개 제품군을 연구 및 생산할 수 있는{" "}
              <br className="mobile" />
              기술력과 체계를 구축하고 있습니다.
            </p>
          </div>
          <div className="left-img">
            <img src="/assets/image/recycle/recycle04.png" alt="재생산" />
          </div>
        </div>
        <div className="recycle-icon">
          <ul>
            <li>
              <img src="/assets/image/recycle/recycle04-01.png" alt="01" />
            </li>
            <li className="arrow">
              <img src="/assets/image/recycle/arrow.svg" alt="arrow" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle04-02.png" alt="02" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle04-03.png" alt="03" />
            </li>
            <li>
              <img src="/assets/image/recycle/recycle04-04.png" alt="04" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Recycle;
