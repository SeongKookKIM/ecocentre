import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

function CustomToggle({ children, eventKey }) {
  const [active, setActive] = useState(false);
  const [btnActive, setBtnActive] = useState("");
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    setActive(!active);
    if (!active) {
      setBtnActive("active");
    } else {
      setBtnActive("");
    }
  });

  return (
    <button type="button" onClick={decoratedOnClick} className={btnActive}>
      {children}
    </button>
  );
}

function BannerTitle({ title, ftext, stext, ttext, btnhide, bg }) {
  return (
    <section className={`banner-title ${bg}`}>
      <h2>{title}</h2>
      <p>
        {ftext}
        <br className="mobile" />
        {stext}
        <br className="mobile" />
        {ttext}
      </p>
      {btnhide && (
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <CustomToggle eventKey="1">에코센트레 알아보기</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="we">
                  <div className="we-inner">
                    <div className="we-title">
                      <h2>
                        <span>플라스틱히어로</span>를 통해
                        <br />
                        재활용된 자원들
                      </h2>
                      <span className="date">2023년 9월 기준</span>
                    </div>
                    <div className="we-content">
                      <ul>
                        <li>
                          <img src="/assets/icon/we01.png" alt="we01" />
                          <div className="inner">
                            <span>페트평 갯수</span>
                            <p>1,569,320개 +</p>
                          </div>
                        </li>
                        <li>
                          <img src="/assets/icon/we02.png" alt="we02" />
                          <div className="inner">
                            <span>누적 환원 금액</span>
                            <p>11억원 +</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="we-wrapper">
                  <div className="title">
                    <p>
                      에코센트레
                      <br />
                      <span>연력</span>
                    </p>
                  </div>
                  <div className="we-list">
                    <ul className="first">
                      <li>2023</li>
                      <li>
                        <span className="mobile">-</span> TIME IDEA(US) 키오스크
                        수출 계약
                      </li>
                      <li>
                        <span className="mobile">-</span> Ecocentre Japan
                        키오스크 수출 계약
                      </li>
                      <li>
                        <span className="mobile">-</span> 기업부설연구소 설립
                      </li>
                      <li>
                        <span className="mobile">-</span> 고려대학교-에코센트레
                        산학연 협력체결 벤처인증
                        <br />
                        ISO 9001 인증
                        <br />
                        ISO 14001 인증
                        <br />
                        ISO 45001 인증
                        <br />
                      </li>
                      <li>
                        <span className="mobile">-</span> LJ CHEM 전략적
                        파트너쉽 체결
                      </li>
                      <li>
                        <span className="mobile">-</span> "플라스틱히어로
                        키오스크" 플라스틱 분쇄 회수기 KC인증
                      </li>
                      <li>
                        <span className="mobile">-</span> ALTUS Asia Group MOA
                        체결
                      </li>
                      <li>
                        <span className="mobile">-</span> 키오스크 관제 s/w 1차
                        개발 완료
                      </li>
                      <li>
                        <span className="mobile">-</span> "AI기반 재활용
                        플라스틱 폐기물 선별 수거시스템"특허 출원
                      </li>
                      <li>
                        <span className="mobile">-</span> World Show 참가
                      </li>
                      <li>
                        <span className="mobile">-</span> 국가대표 이원희
                        유도선수 홍보대사 위촉
                      </li>
                      <li>
                        <span className="mobile">-</span> 녹색친구들 MOA체결
                      </li>
                      <li>
                        <span className="mobile">-</span> "재활용품
                        선순환시스템, 페트평 회수장치" 특허출원
                      </li>
                      <li>
                        <span className="mobile">-</span> (주)네오글로벌(일본)
                        MOA체결
                      </li>
                      <li>
                        <span className="mobile">-</span> (주)인츠(일본) MOA체결
                      </li>
                    </ul>
                    <ul className="second">
                      <li>2022</li>
                      <li>
                        <span className="mobile">-</span> 의식주 컴퍼니와
                        MOA체결
                      </li>
                      <li>
                        <span className="mobile">-</span> 세계 명품 브랜드상
                        수상
                      </li>
                      <li>
                        <span className="mobile">-</span> 환경부 장관상
                        수상(이재영 대표)
                      </li>
                      <li>
                        <span className="mobile">-</span> 플라스틱히어로 1차
                        APP개발완료
                      </li>
                      <li>
                        <span className="mobile">-</span> 주식회사
                        에코센트레설립
                      </li>
                      <li>
                        <span className="mobile">-</span> 플라스틱히어로
                        프로젝트 기획
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
    </section>
  );
}

export default BannerTitle;
