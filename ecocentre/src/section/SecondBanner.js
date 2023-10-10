import React from "react";

function SecondBanner({ title, fTxt, sTxt, src, bg }) {
  return (
    <div className={`second-banner ${bg}`}>
      <div className="main-wrapper"></div>
      <div className="main-inner">
        <div className="content">
          <h2>{title}</h2>
          <p>
            {fTxt}
            <br />
            {sTxt}
          </p>
        </div>
        {src && (
          <div className="img">
            <img src={src} alt="robot" />
          </div>
        )}
      </div>
      <div className="arrow">
        <img src="/assets/icon/scroll.png" alt="scroll" />
      </div>
    </div>
  );
}

export default SecondBanner;
