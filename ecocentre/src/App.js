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
              <Stroy />
              <BannerTitle
                title={"에코센트레 RECYCLE"}
                ftext={"플라스틱히어로 AI 로봇을 통해 확보된 순환자원들은"}
                stext={
                  "가공되어 사용될 용도에 따라 중합소재, 난연소재, 전도성 소재와"
                }
                ttext={
                  "복합기능 소재 등 특수한 기능을  가지고 있는 우리 생활에 "
                }
                fourtext={"필요한 플라스틱 제품으로 다시 만들어집니다. "}
                btnhide={true}
                bg={"bg"}
              />
              <Recycle />
              <SecondBanner
                title={"플라스틱히어로 AI 로봇"}
                fTxt={"언제 어디서나 페트병을 수거하기 위해"}
                sTxt={"항상 여러분 곁에 있습니다. 플라스틱히어로와"}
                tTxt={"함께 환경을 살리고 포인트도 받아보세요!"}
                src={"/assets/image/ai-robot.png"}
              />
              <BannerTitle
                title={"플라스틱히어로 AI 로봇은 무엇인가요? "}
                ftext={"일상에서 사용하는 생활 플라스틱 AI 회수로봇인"}
                stext={"플라스틱히어로는 환경오염이 심각한 지구에서"}
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
                fTxt={"우리가 만드는 탄소 절감 효과"}
                sTxt={"연간 33톤 이산화탄소 배출 억제"}
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
