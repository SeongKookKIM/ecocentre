import React, { useEffect, useState } from "react";

function Nav() {
  const [logo, setLogo] = useState("/assets/image/logo-white.png");
  const [textColor, setTextColor] = useState("");
  const [user, setUser] = useState("/assets/image/user-white.png");
  const [lang, setLang] = useState("/assets/image/lang-white.png");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setLogo("/assets/image/logo-color.png");
        setTextColor("active");
        setUser("/assets/image/user-black.png");
        setLang("/assets/image/lang-black.png");
      } else {
        setLogo("/assets/image/logo-white.png");
        setTextColor("");
        setUser("/assets/image/user-white.png");
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
              플라스틱히어로
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                let app = document.querySelector(".third-banner");
                app.scrollIntoView({ behavior: "smooth" });
              }}
            >
              App
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                let esg = document.querySelector(".esg-banner");
                esg.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ESG
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                let news = document.querySelector(".news");
                news.scrollIntoView({ behavior: "smooth" });
              }}
            >
              소식
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
            <img src={user} alt="user-white" />
            <img src={lang} alt="lang-white" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
