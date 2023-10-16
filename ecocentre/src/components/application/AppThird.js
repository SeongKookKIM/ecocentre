import React from "react";

function AppThird() {
  return (
    <div className="app-third">
      <div className="third-title">
        <h4>03</h4>
        <p>
          플라스틱히어로 어플을 <br />
          바로 <span>실행</span>해보세요
        </p>
        <span className="m-txt">
          환경포인트로 기프티콘 구매와 환경포인트 기부,{" "}
          <br className="mobile" />
          과학, 기후, 기부 관련 교육 프로그램까지
        </span>
      </div>
      <div className="third-content">
        <div className="txt left">
          <p>
            환경포인트로
            <br />
            기프티콘 구매와
            <br />
            환경포인트 기부
          </p>
        </div>
        <div className="phone-img">
          <img src="/assets/image/6/02.png" alt="02" />
        </div>
        <div className="txt right">
          <p>
            과학, 기후, 기부 관련
            <br />
            교육 프로그램과
            <br />
            환경캠페인까지
          </p>
        </div>
      </div>
      <div className="third-list">
        <ul>
          <li>
            <img src="/assets/icon/app-list01.png" alt="app-list-1" />
            <span>기프티콘 구매</span>
          </li>
          <li>
            <img src="/assets/icon/app-list02.png" alt="app-list-2" />
            <span>환경포인트 기부</span>
          </li>
          <li>
            <img src="/assets/icon/app-list03.png" alt="app-list-3" />
            <span>교육프로그램</span>
          </li>
          <li>
            <img src="/assets/icon/app-list04.png" alt="app-list-4" />
            <span>환경 캠페인</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AppThird;
