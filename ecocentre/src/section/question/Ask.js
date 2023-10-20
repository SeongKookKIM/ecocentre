import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

function Ask() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ask">
      <div className="ask-inner">
        <strong>
          자주 묻는 <span>질문</span>
        </strong>
        <div className="search-input">
          <input type="test" placeholder="무엇이든 검색하세요"></input>
          <img src="/assets/image/8/search.svg" alt="search" />
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
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              포인트 적립내역은 어디서 볼 수 있을까요?
            </Accordion.Header>
            <Accordion.Body>
              A. ‘플라스틱히어로’ 모바일 앱 메인 화면이나, 하단 포인트
              페이지에서 확인할 수 있습니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              플라스틱히어로에 적립된 포인트는 어디서 사용하나요?
            </Accordion.Header>
            <Accordion.Body>
              A. 적립된 환경 포인트는 ‘플라스틱히어로’ 모바일 앱 상점에서
              포인트로 상품을 교환할 수 있습니다.
              <br />
              <br />
              <br />
              {"<"}진행방법{">"}
              <br />
              ‘플라스틱히어로’ 모바일 앱 하단 바 ‘상점 페이지‘ {">"} 상품 클릭{" "}
              {">"} 구매하기
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              플라스틱히어로 사용 시 주의사항이 무엇인가요?
            </Accordion.Header>
            <Accordion.Body>
              A. <br />
              1. 플라스틱 투입구에 손을 넣으면 다칠 위험이 있습니다. <br />
              2. 인화성 또는 가연성의 내용물이 담긴 플라스틱을 넣으면 안 됩니다.{" "}
              <br />
              3. 투입구를 강제로 열면 다칠 위험이 있습니다.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>회원 탈퇴는 어떻게 하나요?</Accordion.Header>
            <Accordion.Body>
              A. ‘플라스틱히어로’ 회원 탈퇴는 모바일 앱에서 할 수 있습니다. ※
              탈퇴 후 포인트 이관 및 복구가 불가하며, 회원 탈퇴와 관련한 모든
              책임은 본인에게 있습니다.
              <br />
              <br />
              <br />
              {"<"}진행방법{">"}
              <br />
              ‘플라스틱히어로’ 모바일 앱 하단 바 '마이페이지' {"<"} ‘회원 정보
              관리’ {"<"} ‘회원 탈퇴’
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              회원 탈퇴하고 다시 가입할 수 있나요?
            </Accordion.Header>
            <Accordion.Body>
              A, 회원 탈퇴 후에도 ‘플라스틱히어로’ 회원 가입을 통해 재가입 할 수
              있습니다. <br />※ 다만, 회원 탈퇴와 동시에 보유한 포인트는 모두
              소멸됩니다.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="more-btn">
          <button type="more">더보기</button>
        </div>
      </div>

      <div className="email">
        <div className="email-inner">
          <div className="open-time">
            <p>
              문제가 해결되지 않았다면
              <br />
              메일을 보내주세요.
            </p>
            <span>09:00 ~ 18:00</span>
          </div>
          <div className="email-adress">
            <span>이메일</span>
            <p>ecocentre@ecocentre.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ask;
