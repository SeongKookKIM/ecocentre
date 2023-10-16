import React from "react";
import RecycleLeft from "../components/recycle/RecycleLeft";
import RecycleRight from "../components/recycle/RecycleRight";

function Recycle() {
  return (
    <section className="recycle">
      <div className="recycle-inner">
        <RecycleLeft
          img={"/assets/icon/recycle.png"}
          topTitle={""}
          contentImg={"/assets/image/recycle.jpg"}
        />

        <RecycleRight
          img={"/assets/icon/bin.png"}
          topTitle={"플라스틱히어로 참여"}
          contentImg={"/assets/image/05.jpg"}
        />
        <div className="recycle-icon">
          <ul>
            <li>
              <img src="/assets/image/3/01.png" alt="01" />
            </li>
            <li>
              <img src="/assets/image/3/02.png" alt="02" />
            </li>
            <li>
              <img src="/assets/image/3/03.png" alt="03" />
            </li>
            <li>
              <img src="/assets/image/3/04.png" alt="04" />
            </li>
          </ul>
        </div>

        <div className="recycle-left">
          <div className="left-content">
            <p className="top-title">
              <img src="/assets/icon/dump.png" alt="recycle" />
              플라스틱히어로 수거
            </p>
            <h2>
              시민 참여로 이루어진 폐 플라스틱은
              <br className="mobile" />
              에코센트레가 직접 회수합니다.
            </h2>
            <p>
              실시간 모니터링을 통해 플라스틱 수거량을 확인하며,{" "}
              <br className="mobile" />
              직접 방문하여 파쇄된 플라스틱을 수거합니다.
            </p>
          </div>
          <div className="left-img">
            <img src="/assets/image/06.jpg" alt="친환경" />
          </div>
        </div>
        <div className="recycle-icon">
          <ul>
            <li style={{ backgroundColor: "limegreen" }}></li>
            <li style={{ backgroundColor: "limegreen" }}></li>
            <li style={{ backgroundColor: "limegreen" }}></li>
            <li style={{ backgroundColor: "limegreen" }}></li>
          </ul>
        </div>

        <div className="recycle-right">
          <div className="right-img">
            <img src="/assets/image/07.jpg" alt="친환경" />
          </div>
          <div className="right-content">
            <p className="top-title">
              <img src="/assets/icon/regin.png" alt="recycle" />
              플라스틱히어로 공정
            </p>
            <h2>
              지속 가능한 플라스틱 소재를
              <br />
              개발 및 생산합니다.
            </h2>
            <p>
              플라스틱히어로 AI로봇에 수거된 폐플라스틱으로 <br />
              친환경 소재를 개발 및 생산합니다. <br />
            </p>
          </div>
        </div>
        <div className="recycle-icon">
          <ul>
            <li>
              <img src="/assets/image/4/01.png" alt="01" />
            </li>
            <li>
              <img src="/assets/image/4/02.png" alt="02" />
            </li>
            <li>
              <img src="/assets/image/4/03.png" alt="03" />
            </li>
            <li>
              <img src="/assets/image/4/04.png" alt="04" />
            </li>
            <li>
              <img src="/assets/image/4/05.png" alt="05" />
            </li>
            <li>
              <img src="/assets/image/4/06.png" alt="06" />
            </li>
          </ul>
        </div>

        <RecycleLeft
          img={"/assets/icon/leef.png"}
          topTitle={"플라스틱히어로 재활용"}
          contentImg={"/assets/image/08.jpg"}
        />
        <div className="recycle-icon">
          <ul>
            <li style={{ backgroundColor: "limegreen" }}></li>
            <li style={{ backgroundColor: "limegreen" }}></li>
            <li style={{ backgroundColor: "limegreen" }}></li>
            <li style={{ backgroundColor: "limegreen" }}></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Recycle;
