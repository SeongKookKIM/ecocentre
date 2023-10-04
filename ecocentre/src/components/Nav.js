import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo-box">
          <img src="/assets/image/logo-white.png" alt="logo" />
        </div>
        <ul className="gnb">
          <li>
            <span>회사소개</span>
          </li>
          <li>
            <span>플라스틱히어로</span>
          </li>
          <li>
            <span>App</span>
          </li>
          <li>
            <span>ESG</span>
          </li>
          <li>
            <span>소식</span>
          </li>
          <li>
            <span>FAQ</span>
          </li>
          <li className="nav-icon">
            <img src="/assets/image/user-white.png" alt="user-white" />
            <img src="/assets/image/lang-white.png" alt="lang-white" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
