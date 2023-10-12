const newsData = [
  {
    src: "/assets/image/news/01.jpg",
    titleFirst: "에코센트레-의식주컴퍼니,",
    title: "에코센트레-의식주컴퍼니, 탄소중립 시스템 구축 MOU 체결",
    date: "2022.12.29",
    link: "https://www.safetynews.co.kr/news/articleView.html?idxno=218098",
    role: "press",
  },
  {
    src: "/assets/image/news/02.jpg",

    title: "[인터뷰] 에코센트레, 플라스틱히어로 통해 범 국민적 환경캠페인 선도",

    date: "2023.02.09",
    link: "https://www.blockchaintoday.co.kr/news/articleView.html?idxno=27544",
    role: "press",
  },
  {
    src: "/assets/image/news/03.jpg",

    title: "블록체인투데이 2월호(54호) 웹진 발행… 무료 열람 가능",

    date: "2023.02.13",
    link: "https://www.blockchaintoday.co.kr/news/articleView.html?idxno=27732",
    role: "press",
  },
  {
    src: "/assets/image/news/04.jpg",

    title: "로봇이 재활용 분리·기름수거 '척척'...'월드IT쇼'에 순환경제 바람",

    date: "2023-04-21",
    link: "https://www.newstree.kr/newsView/ntr202304200008",
    role: "press",
  },
  {
    src: "/assets/image/news/05.jpg",

    title: "[WIS 2023] 글로벌 시장 겨냥한 K디지털 스타트업 혁신기술 빛났다",

    date: "2023-04-20",
    link: "https://www.etnews.com/20230420000219",
    role: "press",
  },
  {
    src: "/assets/image/news/06.jpg",

    title: "[WIS 2023] 블록체인 공동관, 웹3기반 혁신 서비스 가득",

    date: "2023-04-18",
    link: "https://www.etnews.com/20230412000281",
    role: "press",
  },
  {
    src: "/assets/image/news/07.jpg",

    title: "에코센트레, 사회적기업 녹색친구들과 MOU 체결",

    date: "2023.04.05",
    link: "https://www.safetynews.co.kr/news/articleView.html?idxno=220837",
    role: "press",
  },
  {
    src: "/assets/image/news/08.jpg",

    title: "에코센트레-녹색친구들, 친환경에너지타운 구축 업무협약 체결",

    date: "2023.04.04",
    link: "https://www.kihoilbo.co.kr/news/articleView.html?idxno=1024089",
    role: "press",
  },
  {
    src: "/assets/image/news/09.jpg",

    title: "에코센트레, 플라스틱히어로 플랫폼 일본 현지 기업과 MOU 체결",

    date: "2023.02.17",
    link: "http://www.geconomy.co.kr/news/article.html?no=276458",
    role: "press",
  },
  {
    src: "/assets/image/news/09.jpg",

    title: "에코센트레, 인츠-네오글로벌과 업무협약 체결",

    date: "2023.02.28",
    link: "https://www.dailysecu.com/news/articleView.html?idxno=143869",
    role: "press",
  },
  {
    src: "/assets/image/news/04.jpg",

    title: "에코센트레, 플라스틱히어로 플랫폼 일본 진출 MOU 체결",

    date: "2023.02.28",

    link: "https://www.safetynews.co.kr/news/articleView.html?idxno=219866",
    role: "press",
  },
  {
    src: "/assets/image/news/12.jpg",

    title: "에코센트레·의식주컴퍼니, 플라스틱히어로 플랫폼 MOU",

    date: "2022.12.29",
    link: "https://www.handmk.com/news/articleView.html?idxno=14468",
    role: "press",
  },
  {
    src: "/assets/image/news/12.jpg",

    title: "에코센트레, 의식주컴퍼니와 플라스틱히어로 플랫폼 업무협약 체결",

    date: "2022.12.29",
    link: "http://www.geconomy.co.kr/news/article.html?no=275788",
    role: "press",
  },
  {
    src: "/assets/image/news/14.jpg",

    title:
      "한국기자연합회, '2022 자랑스런한국인 인물대상' 11일 마포중앙도서관서 성료",

    date: "2022.12.15",
    link: "https://www.discoverynews.kr/news/articleView.html?idxno=924733",
    role: "press",
  },
  {
    src: "/assets/image/news/14.jpg",

    title: "한국기자연합회, 자랑스런 한국인 인물대상·세계명품브랜드대상 개최",

    date: "2022.12.13",
    link: "https://www.safetynews.co.kr/news/articleView.html?idxno=217680",
    role: "press",
  },
  {
    src: "/assets/image/news/16.jpg",

    title:
      "한국기자연합회, '2022 자랑스런한국인 인물대상' 11일 마포중앙도서관서 개최",

    date: "2022.12.08",
    link: "https://www.cnet.co.kr/view/?no=20221208110016",
    role: "press",
  },
  {
    src: "/assets/image/news/16.jpg",

    title: "한국기자연합회, ‘2022 자랑스런한국인 인물대상’ 11일 개최",
    date: "2022.12.07",

    link: "https://www.newscj.com/news/articleView.html?idxno=2018876",
    role: "press",
  },
  {
    src: "/assets/image/news/18.jpg",

    title: "대한민국환경문화페스티벌·국민행복공헌대상 개최",

    date: "2022.08.22",
    link: "http://www.geconomy.co.kr/news/article.html?no=273241",
    role: "press",
  },
  {
    src: "/assets/image/news/18.jpg",

    title:
      "제15회 '대한민국환경문화페스티벌 및 대한민국 국민행복공헌대상시상식' 성료",

    date: "2022.08.22",
    link: "https://www.discoverynews.kr/news/articleView.html?idxno=861680",
    role: "press",
  },
  {
    src: "/assets/image/news/18.jpg",

    title: "대한민국환경문화페스티벌·국민행복공헌대상 시상식 열려",

    date: "2022.08.22",
    link: "https://www.safetynews.co.kr/news/articleView.html?idxno=214825",
    role: "press",
  },
  {
    src: "/assets/image/news/18.jpg",

    title: "‘대한민국환경문화페스티벌·대한민국 국민행복공헌대상시상식’ 성료",

    date: "2022.08.22",
    link: "https://www.newscj.com/news/articleView.html?idxno=1015122",
    role: "press",
  },
  {
    src: "/assets/image/news/16.jpg",

    title:
      "한국기자연합회, '2022 자랑스런한국인 인물대상' 11일 마포중앙도서관서 개최",

    date: "2022.12.07",
    link: "https://www.jnnews.co.kr/news/view.php?idx=340015",
    role: "press",
  },
  {
    src: "/assets/image/news/24.png",

    title:
      "플라스틱 재활용하는 AI 리사이클 키오스크 스타트업 회사. 플라스틱히어로",
    date: "2023.04.20",
    link: "https://cafe.naver.com/xmanxclub/267?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6InhtYW54Y2x1YiIsImFydGljbGVJZCI6MjY3LCJpc3N1ZWRBdCI6MTY4MjU2MDQ0MDcwMn0.22k3yrcjOQ",
    role: "common",
  },
  {
    src: "/assets/image/news/25.png",

    title: "플라스틱히어로 제휴업체 상품구매",
    date: "2023.03.02",
    link: "https://blog.naver.com/rlaclaodna1/223032704349",
    role: "common",
  },
  {
    src: "/assets/image/news/16.jpg",

    title:
      "제15회 '대한민국환경문화페스티벌·대한민국 국민행복공헌대상시상식' 성료",

    date: "2022.08.22",
    link: "https://blog.naver.com/hes2028/222855192867",
    role: "common",
  },
  {
    src: "/assets/image/news/27.png",

    title: "플라스틱히어로, 탄소배출권까지?",

    date: "2023.01.30",
    link: "https://blog.naver.com/ahfoanwl85/222998914478",
    role: "common",
  },
  {
    src: "/assets/image/news/27.png",

    title: "공공기관 지자체와 함께하는 플라스틱 히어로 사업현황",

    date: "2023.01.30",

    link: "https://cafe.naver.com/ecocentre/2?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6ImVjb2NlbnRyZSIsImFydGljbGVJZCI6MiwiaXNzdWVkQXQiOjE2ODI1NjA0NDA3MDV9.ToKqucIaUXvevie",
    role: "common",
  },
  {
    src: "/assets/image/news/27.png",

    title: "공에코센트레 회사 소개",

    date: "2023.01.11",
    link: "https://cafe.naver.com/plastichero/9?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6InBsYXN0aWNoZXJvIiwiYXJ0aWNsZUlkIjo5LCJpc3N1ZWRBdCI6MTY4MjU2MDQ0MDY5OH0.iN_C9BPVZ3",
    role: "common",
  },
  {
    src: "/assets/image/news/04.jpg",

    title: "CEO인사말 에코센트레를 방문해주셔서 감사합니다.​",

    date: "2023.01.11",

    link: "https://cafe.naver.com/plastichero/8?art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1zZWFyY2gtY2FmZS1wcg.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWZlVHlwZSI6IkNBRkVfVVJMIiwiY2FmZVVybCI6InBsYXN0aWNoZXJvIiwiYXJ0aWNsZUlkIjo4LCJpc3N1ZWRBdCI6MTY4MjU2MDQ0MDY5OH0.yTW2Xspl4B",
    role: "common",
  },
  {
    src: "/assets/image/news/04.jpg",

    title:
      "[인성아이티] 2023 월드IT쇼 코엑스 박람회 후기 : World IT Show 2023 15th​",

    date: "2023.04.24",
    link: "https://blog.naver.com/insung_it/223083885695",
    role: "common",
  },
  {
    src: "/assets/image/news/32.jpg",

    title: "에코센트레-LJChem, 폐플라스틱 활용 MOA 체결​",

    date: "2023.05.09",
    link: "https://www.kihoilbo.co.kr/news/articleView.html?idxno=1029769",
    role: "press",
  },
  {
    src: "/assets/image/news/32.jpg",

    title: "에코센트레, '엘제이켐과 협업으로 환경사업 컨텐츠 확장 기대'​",

    date: "2023.05.08",
    link: "https://www.safetynews.co.kr/news/articleView.html?idxno=221647",
    role: "press",
  },
  {
    src: "/assets/image/news/32.jpg",

    title: "에코센트레-LJChem, 폐플라스틱 활용 MOA 체결​",

    date: "2023.05.08",
    link: "https://www.dailysecu.com/news/articleView.html?idxno=145850",
    role: "press",
  },
  {
    src: "/assets/image/news/35.jpg",
    title: "플라스틱히어로 이용하여 ESG경영 실천 하기​",

    date: "2023. 5. 4",
    link: "https://blog.naver.com/75917/223093589393",
    role: "common",
  },
  {
    src: "/assets/image/news/36.jpg",
    title: "[리얼 칼럼몬] 심각해지는 환경오염, 손쉬운 리사이클부터!​",

    date: "2023. 5. 2",
    link: "https://blog.naver.com/mrrk20/223091176963",
    role: "common",
  },
  {
    src: "/assets/image/news/37.jpg",
    title: "플라스틱히어로코리아, 이원희 전 유도국가대표와 후원계약 체결​",

    date: "2023. 4. 27",
    link: "https://blog.naver.com/blockchaintoday/223086665137",
    role: "common",
  },
  {
    src: "/assets/image/news/37.jpg",
    title: "플라스틱히어로코리아 전 유도국가대표 이원희 선수 홍보대사위촉",

    date: "2023. 4. 27",
    link: "https://blog.naver.com/rlaclaodna1/223086532594",
    role: "common",
  },
  {
    src: "/assets/image/news/39.jpg",
    title: "플라스틱 리사이클링의 혁명 ‘플라스틱히어로’, ESG경영포럼 개최",

    date: "2023.05.12",
    link: "http://www.kdpress.co.kr/news/articleView.html?idxno=119837",
    role: "press",
  },
  {
    src: "/assets/image/news/41.jpg",
    title: "정계인사들 코엑스 월드 IT쇼 2023, 에코센트레 플라스틱히어로 방문",

    date: "2023.05.11",
    link: "https://www.job-post.co.kr/news/articleView.html?idxno=75959",
    role: "press",
  },
  {
    src: "/assets/image/news/41.jpg",
    title:
      "코엑스 월드 IT쇼 2023, '에코센트레', '플라스틱히어로'에 정계인사들 방문",

    date: "2023.05.10",
    link: "http://www.kdpress.co.kr/news/articleView.html?idxno=119793",
    role: "press",
  },
  {
    src: "/assets/image/news/43.jpg",
    title: "에코센트레·알투스 아시아그룹 손잡고 리사이클링 사업 '속도'",

    date: "2023.05.17",
    link: "https://n.news.naver.com/article/014/0005013715?sid=102",
    role: "press",
  },
  {
    src: "/assets/image/news/43.jpg",
    title: "에코센트레, 폐 플라스틱 활용 글로벌 협력 강화",

    date: "2023.05.18",
    link: "https://www.chosun.com/economy/economy_general/2023/05/18/X7UJTCU2YVBNFNXATLOYKQ3GKQ/?utm_source=naver&utm_medium=referral&utm_campaign=naver-news",
    role: "press",
  },
  {
    src: "/assets/image/news/41.jpg",
    title: "코엑스 월드 IT쇼 2023, 에코센트레 플라스틱히어로 정계인사들 방문",

    date: "2023.05.10",
    link: "https://www.blockchaintoday.co.kr/news/articleView.html?idxno=32240",
    role: "press",
  },
  {
    src: "/assets/image/news/46.png",
    title: "플라스틱히어로, ESG경영 포럼 성료",

    date: "2023.05.15",
    link: "https://www.blockchaintoday.co.kr/news/articleView.html?idxno=32404",
    role: "press",
  },
  {
    src: "/assets/image/news/47.jpg",
    title: "한국기자연합회, ‘제6회 국제평화공헌대상’ 수상자 발표",

    date: "2023.06.08",
    link: "https://www.newscj.com/news/articleView.html?idxno=3034642",
    role: "press",
  },
  {
    src: "/assets/image/news/47.jpg",
    title: "한국기자연합회, '국제평화공헌대상·우수기자대상' 수상자 발표",

    date: "2023.06.09",
    link: "https://www.safetynews.co.kr/news/articleView.html?idxno=222323",
    role: "press",
  },
  {
    src: "/assets/image/news/49.png",
    title:
      "ESG 경영 의식주컴퍼니 런드리고, 헌옷 수거 베타 서비스로 5300벌 수집...3분기 정식 서비스",

    date: "2023.06.09",
    link: "https://mirakle.mk.co.kr/view.php?year=2023&no=436961",
    role: "press",
  },
  {
    src: "/assets/image/news/49.png",
    title: "런드리고, 헌옷 수거 서비스 3분기 출시",

    date: "2023.06.09",
    link: "https://www.sedaily.com/NewsView/29QSEA1KW2",
    role: "press",
  },
  {
    src: "/assets/image/news/49.png",
    title:
      "[스타트업 단신] 의식주컴퍼니, 북아이피스, 웍스앤피플, 마인즈앤컴퍼니",

    date: "2023.06.09",
    link: "https://platum.kr/archives/208446",
    role: "press",
  },
  {
    src: "/assets/image/news/49.png",
    title: "의식주컴퍼니, 런드리고 헌옷 수거 서비스 3분기 중 출시",

    date: "2023.06.09",
    link: "https://daily.hankooki.com/news/articleView.html?idxno=965888",
    role: "press",
  },
  {
    src: "/assets/image/news/49.png",
    title: "런드리고, 헌옷 수거 서비스 3분기 출시",

    date: "2023.06.09",
    link: "https://www.newsworks.co.kr/news/articleView.html?idxno=717379",
    role: "press",
  },
  {
    src: "/assets/image/news/47.jpg",
    title: "2023 국제평화공헌대상·우수기자대상 시상식 성황리 개최",

    date: "2023.06.17",
    link: "https://dspdaily.com/news/view.php?no=20993",
    role: "press",
  },
  {
    src: "/assets/image/news/65.jpg",
    title: "국회, ‘K-순환경제’ 이행 위한 정책토론회 성료",

    date: "2023.06.29",
    link: "https://www.cnbnews.com/news/article.html?no=608311",
    role: "press",
  },
  {
    src: "/assets/image/news/66.jpg",
    title: "‘K-순환경제 이행 정책토론회’ 성료",

    date: " 2023-07-05",
    link: "https://tk.newdaily.co.kr/site/data/html/2023/06/29/2023062900333.html",
    role: "press",
  },
  {
    src: "/assets/image/news/81.jpg",
    title: "SR, 플라스틱 순환경제 조성 나선다",

    date: "2023-07-10",
    link: "https://daily.hankooki.com/news/articleView.html?idxno=976757",
    role: "press",
  },
  {
    src: "/assets/image/news/82.jpg",
    title: "광운학원, 에코센트레와 산학협력 협약 체결",

    date: " 2023-07-19",
    link: "https://dhnews.co.kr/news/view/1065573502172614",
    role: "press",
  },
  {
    src: "/assets/image/news/82.jpg",
    title: "광운학원, 에코센트레와 산학협력 협약 체결",

    date: " 2023-07-19",
    link: "https://dhnews.co.kr/news/view/1065573502172614",
    role: "press",
  },
];

export default newsData;
