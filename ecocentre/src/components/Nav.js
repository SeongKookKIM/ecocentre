import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Nav() {
  const [logo, setLogo] = useState("/assets/image/logo-white.png");
  const [textColor, setTextColor] = useState("");
  const [lang, setLang] = useState("/assets/image/lang-white.png");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setLogo("/assets/image/logo-color.png");
        setTextColor("active");
        setLang("/assets/image/lang-black.png");
      } else {
        setLogo("/assets/image/logo-white.png");
        setTextColor("");
        setLang("/assets/image/lang-white.png");
      }
    });
  }, []);

  return (
    <nav className={`nav ${textColor}`}>
      <div className="nav-inner">
        <div className="logo-box">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
        <ul className="gnb">
          <li>
            <span
              onClick={() => {
                let intro = document.querySelector(".story");
                intro.scrollIntoView({ behavior: "smooth" });
              }}
            >
              회사소개
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                let hero = document.querySelector(".second-banner");
                hero.scrollIntoView({ behavior: "smooth" });
              }}
            >
              AI로봇
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                let app = document.querySelector(".third-banner");
                app.scrollIntoView({ behavior: "smooth" });
              }}
            >
              모바일 앱
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                let esg = document.querySelector(".esg-banner");
                esg.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ESG Data
            </span>
          </li>

          <li>
            <span
              onClick={() => {
                let faq = document.querySelector(".faq");
                faq.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </span>
          </li>
          <li className="nav-icon">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={lang} alt="lang" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">한국어</Dropdown.Item>
                <Dropdown.Item href="#/action-2">ENGLISH</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
