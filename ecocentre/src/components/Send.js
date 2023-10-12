import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Send() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="send">
        문의하기
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="send-form"
      >
        <Modal.Header closeButton>
          <Modal.Title>문의하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="contact-form">
            <div className="form-name">
              <label>이름</label>
              <input
                type="text"
                name="user_name"
                placeholder="이름을 입력해주세요."
              />
            </div>
            <div className="form-phone">
              <label>핸드폰번호</label>
              <input
                type="number"
                name="user_phone"
                placeholder="-없이 숫자만 입력해주세요."
              />
            </div>
            <div className="form-email">
              <label>이메일</label>
              <input
                type="email"
                name="user_email"
                placeholder="예시: abc123@gmail.com"
              />
            </div>
            <div className="form-subject">
              <label>문의내용</label>
              <textarea
                name="message"
                placeholder="문의 내용을 입력해주세요."
              ></textarea>
            </div>
            <input type="submit" value="보내기" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Send;
