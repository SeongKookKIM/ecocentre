import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import emailjs from "@emailjs/browser";

function Send() {
  const [show, setShow] = useState(false);

  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formRef = useRef();

  const hadlerSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_s0w01yd",
          "template_xau7pib",
          formRef.current,
          "ip3SdqpP_xFRKcple"
        )
        .then(
          (result) => {
            console.log("문의하기 전송 성공");
            window.location.reload();
          },
          (error) => {
            console.log("문의하기 전송 실패");
          }
        );
    }
  };

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
          <form
            id="contact-form"
            ref={formRef}
            onSubmit={(e) => {
              hadlerSubmit(e);
            }}
          >
            <div className="form-name">
              <label>이름</label>
              <input
                type="text"
                name="name"
                placeholder="이름을 입력해주세요."
              />
            </div>
            <div className="form-phone">
              <label>핸드폰번호</label>
              <input
                type="number"
                name="phone"
                placeholder="-없이 숫자만 입력해주세요."
              />
            </div>
            <div className="form-email">
              <label>이메일</label>
              <input
                type="email"
                name="email"
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
            <input
              type="text"
              name="date"
              defaultValue={currentDate}
              style={{ display: "none" }}
            />
            <input type="submit" value="보내기" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Send;
