import React from "react";
import { useNavigate } from "react-router-dom";

function SubNav() {
  const navigation = useNavigate();

  return (
    <nav className="nav active subnav">
      <div className="nav-inner">
        <div className="logo-box">
          <img
            src="/assets/image/logo-color.png"
            alt="logo"
            onClick={() => {
              navigation("/");
            }}
          />
        </div>
        <ul className="gnb">
          <li>
            <span
              onClick={() => {
                navigation("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                navigation("/news");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              소식
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                navigation("/ask");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              FAQ
            </span>
          </li>
        </ul>
        <div className="nav-icon">
          <img src="/assets/image/lang-black.png" alt="lang-white" />
        </div>
      </div>
    </nav>
  );
}

export default SubNav;
