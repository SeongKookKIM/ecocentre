import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Stroy() {
  const [storyNum, setStoryNum] = useState(1);
  const [storyTitle, setStoryTitle] = useState(
    "K-순환경제 이행을 위한 정책토론회"
  );

  return (
    <section className="story">
      <div className="story-inner">
        <div className="story-content">
          <p>
            <img src="/assets/image/story.png" alt="story" />
          </p>
          <h2>
            <span>에코센트레</span>
            <br />
            STORY
          </h2>
          <p>
            에코센트레는 다양한 환경 캠페인을 통해 <br />
            기후변화의 심각성을 알리고, <br />
            환경보호에 대한 인식을 높이기 위해 노력합니다.
          </p>
          <div className="story-list">
            <DropdownButton id="dropdown-item-button" title={storyTitle}>
              <Dropdown.Item
                as="button"
                onClick={() => {
                  setStoryNum(1);
                  setStoryTitle("K-순환경제 이행을 위한 정책토론회");
                }}
              >
                K-순환경제 이행을 위한 정책토론회
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => {
                  setStoryNum(2);
                  setStoryTitle("2023 월드 IT 쇼");
                }}
              >
                2023 월드 IT 쇼
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => {
                  setStoryNum(3);
                  setStoryTitle("플라스틱히어로 ESG경영포럼");
                }}
              >
                플라스틱히어로 ESG경영포럼
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="story-slide">
          <ul>
            {storyNum === 1 && (
              <AnimatePresence>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="story-content"
                >
                  <div className="story-img">
                    <img src="/assets/image/congress.jpg" alt="국회" />
                  </div>
                  <div className="story-content">
                    <strong>K-순환경제 이행을 위한 정책토론회</strong>
                    <span>2023.06.27. (화) / 국회의원회관 대회의실</span>
                  </div>
                </motion.li>
              </AnimatePresence>
            )}
            {storyNum === 2 && (
              <AnimatePresence>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="story-content"
                >
                  <div className="story-img">
                    <img src="/assets/image/coex.jpg" alt="coex" />
                  </div>
                  <div className="story-content">
                    <strong>2023 월드 IT 쇼</strong>
                    <span>2023.04.19. (수) ~ 04.21. (금) / 코엑스</span>
                  </div>
                </motion.li>
              </AnimatePresence>
            )}
            {storyNum === 3 && (
              <AnimatePresence>
                <motion.li
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="story-content"
                >
                  <div className="story-img">
                    <img src="/assets/image/esg.jpg" alt="esg" />
                  </div>
                  <div className="story-content">
                    <strong>플라스틱히어로 ESG경영포럼</strong>
                    <span>2023.05.09. (화) / 리베라호텔</span>
                  </div>
                </motion.li>
              </AnimatePresence>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Stroy;
