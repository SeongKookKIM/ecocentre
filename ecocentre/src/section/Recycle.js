import React from "react";
import RecycleLeft from "../components/recycle/RecycleLeft";
import RecycleRight from "../components/recycle/RecycleRight";

function Recycle() {
  return (
    <section className="recycle">
      <div className="recycle-inner">
        <RecycleLeft
          img={"/assets/icon/recycle.png"}
          topTitle={""}
          contentImg={"/assets/image/recycle.jpg"}
        />

        <RecycleRight
          img={"/assets/icon/bin.png"}
          topTitle={"플라스틱 수거"}
          contentImg={"/assets/image/05.jpg"}
        />
        <div className="recycle-icon">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <RecycleLeft
          img={"/assets/icon/dump.png"}
          topTitle={"플라스틱 운반"}
          contentImg={"/assets/image/06.jpg"}
        />
        <div className="recycle-icon">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <RecycleRight
          img={"/assets/icon/regin.png"}
          topTitle={"레진공정"}
          contentImg={"/assets/image/07.jpg"}
        />
        <div className="recycle-icon">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <RecycleLeft
          img={"/assets/icon/leef.png"}
          topTitle={"재활용"}
          contentImg={"/assets/image/08.jpg"}
        />
        <div className="recycle-icon">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Recycle;
