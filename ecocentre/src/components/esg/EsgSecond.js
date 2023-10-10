import React from "react";

function EsgSecond() {
  return (
    <div className="esg-second">
      <div className="hero-title">
        <h4>02</h4>
        <p>
          AI ROBOT <br />
          <span>원물수거회수</span>
        </p>
        <span className="ect">* 원물 수거 횟수 1일 1회 기준</span>
      </div>
      <div className="ai-robot">
        <ul>
          <li>
            <div className="left">
              <img src="/assets/image/17.jpg" alt="17" />
              <span>1일</span>
            </div>
            <img
              src="/assets/icon/esg-arrow.png"
              alt="arrow"
              className="arrow"
            />
            <div className="right">
              <img src="/assets/icon/esg-pet.png" alt="pet" />
              <div className="content">
                <h6>
                  PET수량(최대): <span>2,000ea</span>
                </h6>
                <p>
                  PET 누적 무게: <span>40kg</span>
                </p>
                <p>
                  소각시 발생하는 Co2: <span>0.092T</span>
                </p>
              </div>
            </div>
          </li>
          <li className="mid">
            <div className="right">
              <img src="/assets/icon/esg-pet.png" alt="pet" />
              <div className="content">
                <h6>
                  PET수량(최대): <span>60,000ea</span>
                </h6>
                <p>
                  PET 누적 무게: <span>1,200kg</span>
                </p>
                <p>
                  소각시 발생하는 Co2: <span>3T</span>
                </p>
              </div>
            </div>
            <img
              src="/assets/icon/esg-arrow.png"
              alt="arrow"
              className="arrow"
            />
            <div className="left">
              <img src="/assets/image/18.jpg" alt="18" />
              <span>1개월</span>
            </div>
          </li>
          <li>
            <div className="left">
              <img src="/assets/image/19.jpg" alt="19" />
              <span>1년</span>
            </div>
            <img
              src="/assets/icon/esg-arrow.png"
              alt="arrow"
              className="arrow"
            />
            <div className="right">
              <img src="/assets/icon/esg-pet.png" alt="pet" />
              <div className="content">
                <h6>
                  PET수량(최대): <span>720,000ea</span>
                </h6>
                <p>
                  PET 누적 무게: <span>14,400kg</span>
                </p>
                <p>
                  소각시 발생하는 Co2: <span>33T</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EsgSecond;
