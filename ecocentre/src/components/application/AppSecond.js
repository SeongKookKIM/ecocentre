import React from "react";

function AppSecond() {
  return (
    <div className="app-second">
      <div className="second-title">
        <h4>02</h4>
        <p>
          플라스틱히어로 APP <span>사용방법</span> <br />
        </p>
      </div>
      <div className="second-list">
        <ul>
          <li>
            <div className="img">
              <img src="/assets/icon/app01.png" alt="app01" />
            </div>
            <div className="content">
              <p>
                <span>01</span>비우기
              </p>
              <span>
                내용물을 비우고
                <br />
                라벨을 제거하기
              </span>
            </div>
          </li>
          <li>
            <div className="img">
              <img src="/assets/icon/app02.png" alt="app02" />
            </div>
            <div className="content">
              <p>
                <span>02</span>투입하기
              </p>
              <span>
                스테인션에 비워진
                <br />
                페트병 투입하기
              </span>
            </div>
          </li>
          <li>
            <div className="img">
              <img src="/assets/icon/app03.png" alt="app03" />
            </div>
            <div className="content">
              <p>
                <span>03</span>적립하기
              </p>
              <span>
                페트병으로 적립한
                <br />
                포인트 확인하기
              </span>
            </div>
          </li>
          <li>
            <div className="img">
              <img src="/assets/icon/app04.png" alt="app04" />
            </div>
            <div className="content">
              <p>
                <span>04</span>교환하기
              </p>
              <span>
                적립된 포인트
                <br />
                다양하게 사용하기
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppSecond;
