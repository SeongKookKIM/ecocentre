import React from "react";

function Main() {
  return (
    <section className="main">
      <div className="main-inner">
        <h2>
          이젠 버리지 말고 <br />
          플라스틱히어로가 <br />
          되어주세요
        </h2>
        <div className="app-btn">
          <button
            type="button"
            onClick={() => {
              window.open(
                "https://apps.apple.com/kr/app/%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8B%B1-%ED%9E%88%EC%96%B4%EB%A1%9C/id6447484940",
                "_blank"
              );
            }}
          >
            <img src="/assets/icon/applekorea.png" alt="applekorea" />
            App Store
          </button>
          <button
            type="button"
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.webview.plastichero&hl=ko&gl=US",
                "_blank"
              );
            }}
          >
            <img src="/assets/icon/googleplay.png" alt="googleplay" />
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}

export default Main;
