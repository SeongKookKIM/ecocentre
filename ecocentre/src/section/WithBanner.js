import React from "react";

function WithBanner() {
  return (
    <section className="with-banner">
      <div className="bg-cover">
        <div className="banner-inner">
          <div className="banner-content">
            <strong>
              "Be a <br />
              Plastic Hero!"
            </strong>
            <span>
              이제 버리지 말고 <br />
              PlasticHero가 되어주세요.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WithBanner;
