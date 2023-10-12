import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="info">
          <ul>
            <li>
              <p>전화: 02-566-9173</p>
            </li>
            <li className="fax">
              <p>팩스: 02-566-9174</p>
            </li>
            <li>
              <p>이메일: ecocentre@ecocentre.io</p>
            </li>
          </ul>
          <p>
            고객센어 운영: 평일 09:00 ~ 18:00 상담 가능 / 공휴일 및
            점심시간(12:00 ~ 13:00) 상담 불가
          </p>
        </div>
        <div className="adress">
          <div className="company">
            <p>에코센트레(주)</p>
            <p>대표이사: 이재영 | 등록번호: </p>
          </div>
          <p>본사: 서울특별시 강남구 논현로 97길 19-4</p>
        </div>
        <div className="use-info">
          <p>
            <span>이용약관</span> | <span>개인정보처리방침</span>
          </p>
        </div>
        <div className="copy">
          <span>&copy; Copyright 2023 by Ecocentre</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
