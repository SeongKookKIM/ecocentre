import React from "react";

function BannerTitle({ title, ftext, stext, ttext, btnhide, bg }) {
  return (
    <section className={`banner-title ${bg}`}>
      <h2>{title}</h2>
      <p>
        {ftext}
        <br />
        {stext}
        <br />
        {ttext}
      </p>
      {btnhide && <button type="button">에코센트레 알아보기</button>}
    </section>
  );
}

export default BannerTitle;
