import React from "react";

function Main() {
  return (
    <section className="main">
      <div className="main-wrapper"></div>
      <div className="main-inner">
        <h2>
          이젠 버리지 말고 <br />
          플라스틱히어로가 <br />
          되어주세요
        </h2>
        <div className="app-btn">
          <button type="button">
            <img src="/assets/icon/applekorea.png" alt="applekorea" />
            App Store
          </button>
          <button type="button">
            <img src="/assets/icon/googleplay.png" alt="googleplay" />
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}

export default Main;
