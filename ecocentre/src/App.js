import { useEffect } from "react";
import Main from "./section/Main";
import Nav from "./components/Nav";
import BannerTitle from "./components/BannerTitle";
import Stroy from "./section/Stroy";
import Recycle from "./section/Recycle";
import SecondBanner from "./section/SecondBanner";

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
      <Nav />
      <Main />
      <BannerTitle
        title={"우리가 하는 일"}
        ftext={"에코센트레는 한경오염 대책을 위해 폐플라스틱을 "}
        stext={"재생산하는 리사이클링 사업과 이를 위한 플랫폼 제공으로 "}
        ttext={"탄소중립 세상을 만들고자 합니다"}
        btnhide={true}
      />
      <Stroy />
      <Recycle />
      <SecondBanner />
      <BannerTitle
        title={"플라스틱히어로의 뜻"}
        ftext={"일상에서 사용하는 생활 플라스틱 AI 회수로봇인 "}
        stext={"플라스틱히어로는 환경오염이 심각한 지구에서 "}
        ttext={"영웅이 된다는 의미를 가지고 있습니다."}
        btnhide={false}
      />
    </div>
  );
}

export default App;
