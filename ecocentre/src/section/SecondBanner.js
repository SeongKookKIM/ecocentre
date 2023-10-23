import React from "react";

function SecondBanner({ title, fTxt, sTxt, tTxt, bg }) {
  return (
    <section className={`second-banner ${bg}`}>
      <div className="main-wrapper"></div>
      <div className="main-inner">
        <div className="content">
          <h2>{title}</h2>
          <p>
            {fTxt}
            <br className="mobile" />
            {sTxt}
            <br className="mobile" />
            {tTxt}
          </p>
        </div>
      </div>
      <div className="arrow">
        <img src="/assets/icon/scroll.png" alt="scroll" />
      </div>
    </section>
  );
}

export default SecondBanner;
