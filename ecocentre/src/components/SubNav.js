import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

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
                navigation("/ask");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              FAQ
            </span>
          </li>
        </ul>
        <div className="nav-icon">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img src="/assets/image/lang-black.png" alt="lang" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">한국어</Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                style={{
                  backgroundColor: "#d3d3d3",
                  color: "rgb(107, 118, 132)",
                  pointerEvents: "none",
                }}
              >
                ENGLISH
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default SubNav;
