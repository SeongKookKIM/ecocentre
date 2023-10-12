import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

function Faq() {
  const navigation = useNavigate();

  return (
    <div className="faq">
      <div className="faq-inner">
        <div className="faq-title">
          <p>FAQ</p>
          <h2>
            자주 묻는 <span>질문</span>
          </h2>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              가입한 휴대전화 번호가 변경되었어요.
            </Accordion.Header>
            <Accordion.Body>
              사용하시던 휴대전화번호가 변경된 경우, 변경된 휴대전화번호로
              가입후 고객센터로 메일을 전송하여 이전 계정에 적립되어 있는 포인트
              이관 요청을 해주시기 바랍니다. ※고객센터로 문의하기 전 회원 탈퇴를
              진행할 경우, 보유하고 계신 포인트가 모두 소멸되니, 이 점 유의
              해주시길 바랍니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              플라스틱히어로(Plastic Hero)의 뜻이 무엇인가요?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              플라스틱을 투입할 때 라멜 및 뚜껑 모두 제거 해야하나요?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              플라스틱히어로 사용시 주의사항이 무엇인가요?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              플라스틱히어로 앱을 꼭 설치해야하나요?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="more-btn">
          <button
            type="more"
            onClick={() => {
              navigation("/ask");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            더보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
