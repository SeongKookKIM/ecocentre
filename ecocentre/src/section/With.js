import React from "react";

function With() {
  return (
    <section className="with">
      <div className="with-inner">
        <div className="with-title">
          <p>함께하기</p>
          <h2>
            <span>에코센트레</span>와 함께
            <br />
            환경을 지켜주세요.
          </h2>
        </div>
        <div className="contnet">
          <div className="use">
            <p>
              플라스틱 히어로
              <br />
              사용방법안내
            </p>
            <span>바로가기</span>
          </div>
          <div className="install">
            <p>
              플라스틱 히어로
              <br />앱 설치하기
            </p>
            <span>바로가기</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default With;
