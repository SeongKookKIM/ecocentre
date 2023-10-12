import React, { useState } from "react";
import newsData from "./data";
import { useNavigate } from "react-router-dom";

function NewsList() {
  const [selectNews, setSelectNews] = useState(0);
  const [newsToShow, setNewsToShow] = useState(6);

  let newsList = ["전체보기", "일반소식", "언론보도"];

  const commonNews = newsData.filter((item) => item.role === "common");
  const pressNews = newsData.filter((item) => item.role === "press");

  let navigation = useNavigate();
  return (
    <div className="newslist">
      <div className="newslist-inner">
        <div className="news-title">
          <p>소식</p>
          <h2>
            에코센트레 <span>소식</span>을<br />
            확인하세요.
          </h2>
        </div>

        <div className="news-list">
          {newsList.map((list, idx) => {
            return (
              <button
                type="button"
                key={idx}
                onClick={() => {
                  setSelectNews(idx);
                  setNewsToShow(6);
                }}
                className={idx === selectNews ? "active" : ""}
              >
                {list}
              </button>
            );
          })}
        </div>
        <div className="news-content">
          <ul>
            {selectNews === 0 &&
              newsData.slice(0, newsToShow).map((it, i) => {
                return (
                  <li key={i}>
                    <img src={it.src} alt="news" />
                    <div className="news-text">
                      <h5>
                        {it.titleFirst}
                        <br />
                        {it.titleSecond}
                      </h5>
                      <span>{it.date}</span>
                    </div>
                  </li>
                );
              })}
            {selectNews === 1 &&
              commonNews.slice(0, newsToShow).map((it, i) => {
                return (
                  <li key={i}>
                    <img src={it.src} alt="news" />
                    <div className="news-text">
                      <h5>
                        {it.titleFirst}
                        <br />
                        {it.titleSecond}
                      </h5>
                      <span>{it.date}</span>
                    </div>
                  </li>
                );
              })}
            {selectNews === 2 &&
              pressNews.slice(0, newsToShow).map((it, i) => {
                return (
                  <li key={i}>
                    <img src={it.src} alt="news" />
                    <div className="news-text">
                      <h5>
                        {it.titleFirst}
                        <br />
                        {it.titleSecond}
                      </h5>
                      <span>{it.date}</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="more-btn">
          <button
            type="more"
            onClick={() => {
              setNewsToShow((prevNewsToShow) => prevNewsToShow + 3);
            }}
          >
            더보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsList;
