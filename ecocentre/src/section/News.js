import React from "react";

function News() {
  return (
    <div className="news">
      <div className="news-inner">
        <div className="news-title">
          <p>소식</p>
          <h2>
            에코센트레 <span>소식</span>을<br />
            확인하세요.
          </h2>
        </div>
        <div className="news-list">
          <button type="button" className="active">
            전체보기
          </button>
          <button type="button">일반소식</button>
          <button type="button">언론보도</button>
        </div>
        <div className="news-content">
          <ul>
            <li>
              <img src="/assets/image/29.jpg" alt="29" />
              <div className="news-text">
                <h5>
                  [플로깅 이야기]
                  <br />
                  줍깅, 그게뭘까?
                </h5>

                <span>2023.09.26</span>
              </div>
            </li>
            <li>
              <img src="/assets/image/29.jpg" alt="29" />
              <div className="news-text">
                <h5>
                  [플로깅 이야기]
                  <br />
                  줍깅, 그게뭘까?
                </h5>

                <span>2023.09.26</span>
              </div>
            </li>
            <li>
              <img src="/assets/image/29.jpg" alt="29" />
              <div className="news-text">
                <h5>
                  [플로깅 이야기]
                  <br />
                  줍깅, 그게뭘까?
                </h5>

                <span>2023.09.26</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="more-btn">
          <button type="more">더보기</button>
        </div>
      </div>
    </div>
  );
}

export default News;
