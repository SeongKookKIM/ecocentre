import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

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
            <li>회사소개</li>
            <li>플라스틱히어로</li>
            <li>App</li>
            <li>ESG</li>
            <li>소식</li>
            <li>FAQ</li>
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

  return (
    <nav className={`m-nav ${active}`}>
      <div className="m-nav-inner">
        <div className="logo-box">
          <img src={logo} alt="logo" />
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
