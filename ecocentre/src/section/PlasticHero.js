import React from "react";
import HeroFirst from "../components/hero/HeroFirst";
import HeroSecond from "../components/hero/HeroSecond";
import HeroThird from "../components/hero/HeroThird";
import HeroFour from "../components/hero/HeroFour";
import HeroFive from "../components/hero/HeroFive";

function PlasticHero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <HeroFirst />
        <HeroSecond />
        <HeroThird />
        <HeroFour />
        <HeroFive />
      </div>
    </section>
  );
}

export default PlasticHero;
