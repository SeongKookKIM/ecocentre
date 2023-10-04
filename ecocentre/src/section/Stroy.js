import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Stroy() {
  const [storyNum, setStoryNum] = useState(1);

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
            에코센트레는 환경을 위해 노력합니다. <br />
            다양한 활동을 통해 좋은 일을 해낼 수 있다는 <br />
            생각으로 에코센트레는 노력합니다.
          </p>
          <div className="story-list">
            <span
              className={storyNum === 1 ? "active" : ""}
              onClick={() => {
                setStoryNum(1);
              }}
            >
              국회
            </span>
            <span
              className={storyNum === 2 ? "active" : ""}
              onClick={() => {
                setStoryNum(2);
              }}
            >
              코엑스
            </span>
            <span
              className={storyNum === 3 ? "active" : ""}
              onClick={() => {
                setStoryNum(3);
              }}
            >
              ESG 포럼
            </span>
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
                  className="story-content"
                >
                  <div className="story-img">
                    <img src="/assets/image/congress.jpg" alt="국회" />
                  </div>
                  <div className="story-content">
                    <strong>국회</strong>
                    <span>K-순환경제를 위한 플라스틱 리사이클링</span>
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
                  className="story-content"
                >
                  <div className="story-img">
                    <img src="/assets/image/coex.jpg" alt="coex" />
                  </div>
                  <div className="story-content">
                    <strong>코엑스</strong>
                    <span>나의 참여가 지구와 모두를 살립니다.</span>
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
