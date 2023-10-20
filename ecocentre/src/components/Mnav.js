import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-align-justify"
        >
          <line x1="3" x2="31" y1="6" y2="6" />
          <line x1="3" x2="31" y1="16" y2="16" />
          <line x1="3" x2="31" y1="26" y2="26" />
        </svg>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} className="m-menu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="/assets/image/logo-color.png" alt="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li
              onClick={() => {
                handleClose();
                let intro = document.querySelector(".story");
                intro.scrollIntoView({ behavior: "smooth" });
              }}
            >
              회사소개
            </li>
            <li
              onClick={() => {
                handleClose();
                let hero = document.querySelector(".second-banner");
                hero.scrollIntoView({ behavior: "smooth" });
              }}
            >
              AI로봇
            </li>
            <li
              onClick={() => {
                handleClose();
                let app = document.querySelector(".third-banner");
                app.scrollIntoView({ behavior: "smooth" });
              }}
            >
              모바일 앱
            </li>
            <li
              onClick={() => {
                handleClose();
                let esg = document.querySelector(".esg-banner");
                esg.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ESG Data
            </li>

            <li
              onClick={() => {
                handleClose();
                let faq = document.querySelector(".faq");
                faq.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Mnav() {
  const [logo, setLogo] = useState("/assets/image/logo-white.png");
  const [lang, setLang] = useState("/assets/image/lang-white.png");
  const [active, setActive] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        setLogo("/assets/image/logo-color.png");
        setActive("active");
        setLang("/assets/image/lang-black.png");
      } else {
        setLogo("/assets/image/logo-white.png");
        setActive("");
        setLang("/assets/image/lang-white.png");
      }
    });
  }, []);

  let navigate = useNavigate();

  return (
    <nav className={`m-nav ${active}`}>
      <div className="m-nav-inner">
        <div className="logo-box">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img src={lang} alt="lang" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">한국어</Dropdown.Item>
            <Dropdown.Item href="#/action-2">ENGLISH</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <OffCanvasExample placement={"end"} name={"end"} />
      </div>
    </nav>
  );
}

export default Mnav;
