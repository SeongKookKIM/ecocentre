import React from "react";
import EsgFirst from "../components/esg/EsgFirst";
import EsgSecond from "../components/esg/EsgSecond";
import EsgThird from "../components/esg/EsgThird";
import Esgfour from "../components/esg/Esgfour";
import EsgFive from "../components/esg/EsgFive";

function Esg() {
  return (
    <section className="esg">
      <div className="esg-inner">
        <EsgFirst />
        <EsgSecond />
        <EsgThird />
        <Esgfour />
        <EsgFive />
      </div>
    </section>
  );
}

export default Esg;
