import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

function Faq() {
  const navigation = useNavigate();

  return (
    <section className="faq">
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
              플라스틱히어로 앱을 설치하고 싶어요.
            </Accordion.Header>
            <Accordion.Body>
              A. 사용하는 기종에 따라 등록되어 있는 스토어에서 ‘플라스틱히어로’
              모바일 앱을 다운로드 및 설치할 수 있습니다.
              <br />
              <br />
              <br />
              {"<"}진행방법{">"}
              <br />
              방법 Play 스토어(AOS) / App Store(iOS) {">"} ‘플라스틱히어로’ 검색{" "}
              {">"} 다운로드 {">"} 설치
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              플라스틱히어로 회원가입은 어떻게 하나요?
            </Accordion.Header>
            <Accordion.Body>
              A. ‘플라스틱히어로’ 모바일 앱 내에서 회원가입을 할 수 있습니다.
              <br />
              <br />
              <br />
              {"<"}진행방법{">"}
              <br />
              ‘플라스틱히어로’ 모바일 앱 하단 '회원가입' {">"} 서비스 이용약관
              동의 {">"} 본인 인증 {">"} 계정 생성 {">"} 회원가입 완료
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              아이디 및 비밀번호를 잊어버렸어요.
            </Accordion.Header>
            <Accordion.Body>
              A. ‘플라스틱히어로’ 모바일 앱 아이디, 비밀번호를 분실했을 경우,
              ‘플라스틱히어로’ 모바일 앱 내의 '아이디 찾기' 및 ‘비밀번호 변경’을
              통해 계정 정보를 재설정 할 수 있습니다.
              <br />
              <br />
              <br />
              {"<"}진행방법{">"}
              <br />- 아이디 찾기
              <br /> 플라스틱히어로 모바일 앱 비밀번호 하단 '아이디 찾기' {
                ">"
              }{" "}
              본인 인증 {">"} 아이디 찾기 완료 <br />
              <br />- 비밀번호 변경
              <br />
              플라스틱히어로 모바일 앱 비밀번호 하단 '비밀번호 변경' {">"} 본인
              인증
              {">"} 새로운 비밀번호 재설정 {">"} 비밀번호 변경 완료
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>개인정보를 변경하고 싶어요.</Accordion.Header>
            <Accordion.Body>
              A, ‘플라스틱히어로’ 모바일 앱에 등록된 전화번호, 비밀번호, 이메일
              등 개인정보 수정이 필요한 경우 모바일 앱의 정보관리를 통해 수정할
              수 있습니다. ※ 단, 아이디 변경은 불가합니다.
              <br />
              <br />
              <br />
              {"<"}진행방법{">"}
              <br />
              ‘플라스틱히어로’ 모바일 앱 하단 바 '마이페이지' {">"} ‘회원 정보
              관리’ {">"} 계정 정보 변경
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>가입한 전화번호가 변경되었어요.</Accordion.Header>
            <Accordion.Body>
              등록된 전화번호가 변경된 경우, 변경된 전화번호로 새로 가입 후
              '플라스틱히어로’ 고객센터로 문의하여 이전 계정에 적립되어 있는
              포인트 이관 요청을 해주시기 바랍니다. ※ 포인트 이관 전 회원 탈퇴할
              경우 포인트가 이관되지 않습니다.
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
    </section>
  );
}

export default Faq;
