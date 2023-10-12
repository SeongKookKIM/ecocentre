import React from "react";
import AppFirst from "../components/application/AppFirst";
import AppSecond from "../components/application/AppSecond";
import AppThird from "../components/application/AppThird";

function Application() {
  return (
    <section className="app">
      <div className="app-inner">
        <AppFirst />
        <AppSecond />
        <AppThird />
      </div>
    </section>
  );
}

export default Application;
