import React from "react";
import { useNavigate } from "react-router-dom";

function SubNav() {
  const navigation = useNavigate();

  return (
    <nav className="nav active">
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
            <img src="/assets/image/user-black.png" alt="user-white" />
            <img src="/assets/image/lang-black.png" alt="lang-white" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SubNav;
