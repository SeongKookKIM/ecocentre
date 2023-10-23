import React from "react";

function EsgFive() {
  return (
    <div className="esg-five">
      <div className="hero-title">
        <h4>05</h4>
        <p>
          ESG 기업으로서의 <br />
          <span>Donation</span> 예상
        </p>
        <span className="ect">* 300인 기업 기준</span>
      </div>
      <div className="content">
        <div className="donation">
          <p>한 해 사회적 기부 가능 예상금액</p>
          <span>2,592,000P ~ 3,240,000P(원)</span>
        </div>
        <img src="/assets/icon/esg-arrow.png" alt="arrow" className="arrow" />
        <div className="donation-list">
          <ul>
            <li>
              <div className="donation-img">
                <img src="/assets/image/25.jpg" alt="25" />
              </div>
              <span>의료</span>
            </li>
            <li>
              <div className="donation-img">
                <img src="/assets/image/26.jpg" alt="26" />
              </div>
              <span>전쟁</span>
            </li>
            <li>
              <div className="donation-img">
                <img src="/assets/image/27.jpg" alt="27" />
              </div>
              <span>환경</span>
            </li>
            <li>
              <div className="donation-img">
                <img src="/assets/image/28.jpg" alt="28" />
              </div>
              <span>커뮤니티</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EsgFive;
