import { useEffect } from "react";
import Main from "./section/Main";
import Nav from "./components/Nav";
import BannerTitle from "./components/BannerTitle";
import Stroy from "./section/Stroy";
import Recycle from "./section/Recycle";
import SecondBanner from "./section/SecondBanner";
import PlasticHero from "./section/PlasticHero";
import ThirdBanner from "./section/ThirdBanner";
import Application from "./section/Application";
import Esg from "./section/Esg";
import News from "./section/News";
import Faq from "./section/Faq";
import With from "./section/With";
import WithBanner from "./section/WithBanner";
import Footer from "./section/Footer";
import { Route, Routes } from "react-router-dom";
import Ask from "./section/question/Ask";
import SubNav from "./components/SubNav";
import NewsList from "./section/news/NewsList";
import Send from "./components/Send";
import Mnav from "./components/Mnav";
import MSubNav from "./components/MSubNav";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Mnav />
              <Main />
              <BannerTitle
                title={"우리가 하는 일"}
                ftext={"에코센트레는 한경오염 대책을 위해 폐플라스틱을 "}
                stext={
                  "재생산하는 리사이클링 사업과 이를 위한 플랫폼 제공으로 "
                }
                ttext={"탄소중립 세상을 만들고자 합니다"}
                btnhide={true}
                bg={""}
              />
              <Stroy />
              <Recycle />
              <SecondBanner
                title={"플라스틱 히어로"}
                fTxt={"이젠 버리지 말고 "}
                sTxt={"플라스틱히어로가 되어주세요"}
                src={"/assets/image/ai-robot.png"}
              />
              <BannerTitle
                title={"플라스틱히어로의 뜻"}
                ftext={"일상에서 사용하는 생활 플라스틱 AI 회수로봇인 "}
                stext={"플라스틱히어로는 환경오염이 심각한 지구에서 "}
                ttext={"영웅이 된다는 의미를 가지고 있습니다."}
                btnhide={false}
                bg={"bg"}
              />
              <PlasticHero />
              <ThirdBanner />
              <BannerTitle
                title={"플라스틱히어로 애플리케이션"}
                ftext={"플라스틱 용기를 반납하고 환경포인트로 "}
                stext={
                  "보상을 받아 실생활에서 다양하게 현금처럼 사용 가능하고 "
                }
                ttext={"NGO등 단체에 선택 기부가 가능합니다."}
                btnhide={false}
                bg={"bg"}
              />
              <Application />
              <SecondBanner
                title={"ESG DATA"}
                fTxt={"플라스틱 히어로 ai로봇"}
                sTxt={"탄소 절감 효과"}
                src={""}
                bg={"esg-banner"}
              />
              <BannerTitle
                title={"ESG 경영"}
                ftext={"플라스틱히어로 AI 로봇을 시작으로 기업이 먼저 "}
                stext={
                  "기후, 환경에 변화에 대응하여 사회에 긍정적 영향을 주고 "
                }
                ttext={
                  "기업브랜드 가치 상승과 지속 가능한 사업 가치를 창출합니다."
                }
                btnhide={false}
                bg={"bg"}
              />
              <Esg />
              <News />
              <Faq />
              <With />
              <WithBanner />
            </>
          }
        ></Route>
        <Route
          path="/ask"
          element={
            <>
              <SubNav />
              <MSubNav />
              <Ask />
            </>
          }
        ></Route>
        <Route
          path="/news"
          element={
            <>
              <SubNav />
              <MSubNav />
              <NewsList />
            </>
          }
        ></Route>

        <Route
          path="*"
          element={
            <div
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "42px",
                fontWeight: "bold",
                pointerEvents: "none",
              }}
            >
              없는 페이지 404
            </div>
          }
        ></Route>
      </Routes>
      <Footer />
      <Send />
    </div>
  );
}

export default App;
