import React from "react";

function AppFirst() {
  return (
    <div className="app-first">
      <div className="first-title">
        <h4>01</h4>
        <img src="/assets/icon/plastichero.png" alt="plastichero" />
        <p>
          <span>탈중앙화</span> 애플리케이션 <br />
          플라스틱히어로 APP
        </p>
      </div>
      <div className="first-image">
        <div className="one">
          <img src="/assets/image/6/02.png" alt="02" />
        </div>
        <div className="two">
          <img src="/assets/image/6/01.png" alt="01" />
        </div>
        <div className="first-content">
          <p>
            플라스틱용기 반납 시 환경포인트로 보상받고, <br />
            기부도 하고 600여개 제휴사에서 다양하게 <br />
            현금처럼 사용할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppFirst;
