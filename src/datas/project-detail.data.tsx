export const projectDetailData = [
  {
    id: 1,
    primaryColor: "#1B4BDD",
    URLS: {
      githubURL: "https://github.com/Programmers-SpotLight/SpotLight",
      blogURL:
        "https://velog.io/@changwoo/%EC%8A%A4%ED%8F%AC%ED%8A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8-SPOT-LIGHT-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
      serviceURL: "null",
      serviceBoolean: false,
    },
    title: "스포트라이트 (SPOT-LIGHT)",
    subTitle: "지도 중심 커뮤니티 웹 서비스",
    workTime: "2024.07.24 - 2024.08.29",
    organize: "5인 개발 (풀스택 5인)",
    imgs: [
      "/imgs/projects/spotlight/spotlight-overview.png",
      "/imgs/projects/spotlight/sp1.png",
      "/imgs/projects/spotlight/sp2.png",
      "/imgs/projects/spotlight/sp3.png",
      "/imgs/projects/spotlight/sp4.png",
      "/imgs/projects/spotlight/sp5.png",
      "/imgs/projects/spotlight/sp7.png",
    ],
    description: {
      topPart: (
        <p>
            <span className="font-bold">
            ✨최애의 이야기가 있는 곳! 스포트라이트
          </span>
          <br />
          <br />
          영화에 나온 그 장소, 애니메이션에서 등장한 그 배경, 내 최애가 다녔던
          그 맛집! 혹시 어딘지 궁금하진 않으셨나요?
          <br />
          스포트라이트는 셀렉션을 통해 여러분의 특별한 장소를 공유할 수 있는
          지도 중심의 커뮤니티 웹 서비스입니다.
        </p>
      ),
      bottomPart: (
        <p>
          사용자는 자신이 아끼는 스팟들을 하나의 셀렉션으로 묶어 다른 사람들과
          공유 할 수 있습니다
          <br />
          스포트라이트와 함께 일상 속의 최애 장소를 기록하고, 공유하며, 새로운
          경험을 해보세요!
        </p>
      ),
    },
    lists: [
      {
        title: "담당 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">UI/UX 디자인</li>
              <li className="px-3 text-lightgrey">
                Figma 툴을 활용한 디자인 프로토타입/와이어 프레임 구현
              </li>
            </ul>
            <ul>
              <li className="font-bold">메인 페이지 구현</li>
              <li className="px-3 text-lightgrey">
                북마크 개수를 기반으로 한 인기 셀렉션 섹션
              </li>
              <li className="px-3 text-lightgrey">
                사용자 개별 해시태그를 기반으로 한 맞춤 셀렉션 섹션
              </li>
            </ul>

            <ul>
              <li className="font-bold">검색 페이지 기능 구현</li>
              <li className="px-3 text-lightgrey">
                카테고리, 사용자 입력 태그, 지역, 셀렉션 정렬에 따른 검색 필터링
              </li>
              <li className="px-3 text-lightgrey">
                사용자 입력 태그 검색 자동완성
              </li>
              <li className="px-3 text-lightgrey">
                태그 빈도수를 기반으로 한 인기 태그 추천
              </li>
            </ul>

            <ul>
              <li className="font-bold">마이 페이지 기능 구현</li>
              <li className="px-3 text-lightgrey">사용자 프로필 변경</li>
              <li className="px-3 text-lightgrey">사용자 관심태그 설정</li>
              <li className="px-3 text-lightgrey">
                셀렉션 상태 설정 (비공개 설정, 삭제, 수정)
              </li>
            </ul>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            Next, TypeScript, Tanstack-Query, Zustand, TailwindCSS, MySQL, Knex
          </ul>
        ),
      },
      {
        title: "참고 자료",
        items: (
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/RjOlXbpNs18"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
      },
    ],
  },
  {
    id: 2,
    primaryColor: "#FF8081",
    URLS: {
      githubURL: "https://github.com/Pogakco",
      blogURL:
        "https://velog.io/@changwoo/%EB%BD%80%EA%B0%81%EC%BD%94-Pogakco-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
      serviceURL: "https://pogakco.site/",
      serviceBoolean: true,
    },
    title: "뽀각코 (Pogakco)",
    subTitle: "뽀모도로 공유타이머 서비스",
    workTime: "2024.06.24 - 2024.07.19",
    organize: "4인 개발 (본인포함 프론트엔드 2명, 백엔드 2명)",
    imgs: [
      "/imgs/projects/pogakco/pogakco-overview.png",
      "/imgs/projects/pogakco/pg1.png",
      "/imgs/projects/pogakco/pg2.png",
      "/imgs/projects/pogakco/pg3.png",
      "/imgs/projects/pogakco/pg4.png",
      "/imgs/projects/pogakco/pg5.png",
    ],
    description: {
      topPart: (
        <p>
          <span className="font-bold">
            👏🏻 함께 집중하고 싶으신가요? POGAKCO(뽀각코)를 만나보세요!
          </span>
          <br />
          <br />
          POGAKCO는 같은 타이머(=뽀모도로)를 통해 학습 사이클을 공유하고
          생산성을 극대화할 수 있는 협업 서비스입니다.
          <br />
          자신만의 학습 스타일에 맞게 집중 시간, 쉬는 시간, 큰 휴식 시간,
          그리고 뽀모도로 사이클 횟수를 설정하여 타이머를 생성하세요!
          <br />
        </p>
      ),
      bottomPart: (
        <p>
          설정된 타이머는 다른 사용자와 실시간으로 공유됩니다!
          <br />
          함께하면 더 집중할 수 있고, 효율적인 학습 환경을 조성할 수 있는
          POGAKCO로 여러분의 집중력을 높여보세요!
        </p>
      ),
    },
    lists: [
      {
        title: "담당 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">기획</li>
            </ul>
            <ul>
              <li className="font-bold">UI/UX 디자인</li>
              <li className="px-3 text-lightgrey">
                Figma 툴을 활용한 디자인 프로토타입/와이어 프레임 구현
              </li>
            </ul>
            <ul>
              <li className="font-bold">메인 페이지 구현</li>
              <li className="px-3 text-lightgrey">메인 페이지 UI/UX 구현</li>
              <li className="px-3 text-lightgrey">
                방 생성, 참여, 삭제, 조회, API 연결
              </li>
            </ul>

            <ul>
              <li className="font-bold">상세 페이지 구현</li>
              <li className="px-3 text-lightgrey">상세 페이지 UI/UX 구현</li>
              <li className="px-3 text-lightgrey">
                Socket-IO 연결을 통한 실시간 참여중인 유저 상태 처리
              </li>
              <li className="px-3 text-lightgrey">
                타이머 동작 여부에 따른 Drawer 상태 처리
              </li>
            </ul>

            <ul>
              <li className="font-bold">공유 타이머 기능 구현</li>
              <li className="px-3 text-lightgrey">
                타이머 시작/종료 시간을 기반으로 하는 공유 타이머 계산 알고리즘
                구현
              </li>
            </ul>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            React, TypeScript, Socket-IO, Tanstack-Query, Zustand,
            React-Hook-Form, Styled-Component
          </ul>
        ),
      },
      {
        title: "참고 자료",
        items: (
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/X9ZZZMKe5Ps"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
      },
    ],
  },
  {
    id: 3,
    primaryColor: "#7D516C",
    URLS: {
      githubURL: "https://github.com/changchangwoo/GPT_Project",
      blogURL: "null",
      serviceURL: "null",
      serviceBoolean: true,
    },
    title: "작은 친구들",
    subTitle: "사물 인식 챗 봇 서비스",
    workTime: "2023.10.16 - 2023.11.12",
    organize: "1인 개발",
    imgs: [
      "/imgs/projects/smallfriends/smallfriends-overview.png",
      "/imgs/projects/smallfriends/sf1.jpg",
      "/imgs/projects/smallfriends/sf2.jpg",
      "/imgs/projects/smallfriends/sf3.jpg",
    ],
    description: {
      topPart: (
        <p>
          <span className="font-bold">
            🏆 동양미래대학교 2023 주문식 소프트웨어 경연 대회 우수상
          </span>
        </p>
      ),
      bottomPart: (
        <p>
          작은 친구들은 일상 속 비활성 객체들과의 상호작용을 통해 새로운 사용자 채팅 경험을 제공하고 가치 인식을 확장하기 위해 기획된 프로젝트입니다
          <br />
          GPT API와 YOLO 모델을 활용하여 사용자가 업로드한 이미지의 물체를 식별하고 해당하는 특성의 프롬프트를 학습한 Chat GPT 통신의 챗 봇 서비스를 제공합니다.
        </p>
      ),
    },
    lists: [
      {
        title: "담당 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">기획</li>
            </ul>
            <ul>
              <li className="font-bold">모바일 프론트엔드 구현</li>
              <li className="px-3 text-lightgrey">
                React Native Expo 환경 프론트엔드 구현
              </li>
              <li className="px-3 text-lightgrey">
                Stack-Navigation을 활용한 컴포넌트 구조화
              </li>
            </ul>
            <ul>
              <li className="font-bold">Flask 서버 구현</li>
              <li className="px-3 text-lightgrey">
                Yolo 모델을 활용한 촬영 이미지 식별 기능
              </li>
              <li className="px-3 text-lightgrey">
                GPT API 통신을 통한 식별 이미지 특성 프로필 데이터 생성 기능
              </li>
              <li className="px-3 text-lightgrey">
                Few-shot Learning Task 기반 GPT 프롬프트
              </li>
            </ul>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            ReactNative, Expo, Yolo, Python Flask,Oepn API,
          </ul>
        ),
      }
    ],
  },
  {
    id: 4,
    primaryColor: "#F19AC9",
    URLS: {
      githubURL: "https://github.com/changchangwoo/Eye_love_you",
      blogURL: "null",
      serviceURL: "null",
      serviceBoolean: true,
    },
    title: "아이 러브 유 (Eye-Love-You)",
    subTitle: "눈 깜박임 감지 기반 안구 케어 서비스",
    workTime: "2024.03.22 - 2024.11.14",
    organize: "4인 개발 (본인 포함 프론트엔드 1명, 백엔드 1명, 디자이너 2명)",
    imgs: [
      "/imgs/projects/eyeloveyou/eyeloveyou-overview.png",
      "/imgs/projects/eyeloveyou/ely1.png",
      "/imgs/projects/eyeloveyou/ely2.png",
      "/imgs/projects/eyeloveyou/ely3.png",
      "/imgs/projects/eyeloveyou/ely4.jpg",
    ],
    description: {
      topPart: (
        <p>
          <span className="font-bold">
            🏆 동양미래대학교 2023 스마트 SW 프로젝트 (졸업작품) 경연 대회
            우수상
          </span>
        </p>
      ),
      bottomPart: (
        <p>
          아이러브유는 현대 사회의 빈번한 미디어 기기의 사용으로 인한
          안구건조증과 같은 눈 건강 문제를 예방하기 위해 기획된 아이케어
          프로젝트입니다.
          <br />
          Blink 모델을 통해 사용자의 눈 깜박임을 식별하고 경고음을 출력하며,
          이를 통해 수집한 데이터를 시각화 자료로 변환하여 사용자 개별 안구 습관
          점검 기능을 제공합니다.
        </p>
      ),
    },
    lists: [
      {
        title: "담당 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">기획</li>
              <li className="px-3 text-lightgrey">
                팀장, 프로젝트 기획
              </li>
            </ul>
            <ul>
              <li className="font-bold">웹 프론트엔드 구현 (React)</li>
              <li className="px-3 text-lightgrey">
                Rechats 라이브러리를 활용한 데이터 시각화
              </li>
              <li className="px-3 text-lightgrey">
                Kakao API (Shaer, Map) 를 활용한 공유하기, 주변안과 지도 기능
              </li>
              <li className="px-3 text-lightgrey">
                Socket-IO를 활용한 실시간 카메라 이미지 통신
              </li>
            </ul>
            <ul>
              <li className="font-bold">모바일 프론트엔드 구현 (React-Native)</li>
              <li className="px-3 text-lightgrey">
                React-Native-Chart-Kit 라이브러리를 사용한 데이터 시각화
              </li>
              <li className="px-3 text-lightgrey">
                Google Maps API를 활용한 주변안과 지도
              </li>
              <li className="px-3 text-lightgrey">
                Expo-Face-Detector 라이브러리를 활용한 모바일 눈 깜박임 기능
              </li>
            </ul>

            <ul>
              <li className="font-bold">눈 깜박임 감지 서버 구현 (Python Flask)</li>
              <li className="px-3 text-lightgrey">
                Flask Socket-IO를 활용한 눈 깜박임 감지 서버 구현
              </li>
              <li className="px-3 text-lightgrey">
                Keras 라이브러리를 사용한 사용자 이미지 Blink 모델 적용
              </li>
              <li className="px-3 text-lightgrey">
                Blink 모델 식별 데이터를 기반으로 한 눈 깜박임 알고리즘 구현 
              </li>
            </ul>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            React, ReactNative, Expo, Flask, Keras, Socket-IO, Kakao API, Google API,
            Recharts, React-Native-Chart-Kit, Face-Detector
          </ul>
        ),
      },
      {
        title: "참고 자료",
        items: (
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/94_1gadobkA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
      },
    ],
  },
  {
    id: 102,
    primaryColor: "#EA9292",
    URLS: {
      githubURL: "https://github.com/changchangwoo/POKE-MATCH-TYPE",
      blogURL: "https://velog.io/@changwoo/%ED%9A%A8%EA%B3%BC%EB%8A%94-%EA%B5%89%EC%9E%A5%ED%96%88%EB%8B%A4-%ED%8F%AC%EC%BC%93%EB%AA%AC-%EC%95%BD%EC%A0%90-%EA%B3%84%EC%82%B0%EA%B8%B0",
      serviceURL: "https://poke-match-type.vercel.app/",
      serviceBoolean: true,
    },
    title: "포켓몬 약점 계산기",
    subTitle: "POKE API를 활용한 토이 프로젝트",
    workTime: "2024.06.13 - 2024.06.16",
    organize: "1인 개발",
    imgs: [
      "/imgs/projects/pokematch/pokematch-overview.png",
      "/imgs/projects/pokematch/pm1.png",
      "/imgs/projects/pokematch/pm2.png",
    ],
    description: {
      bottomPart: (
        <p>
          포켓몬의 약점 시스템에 적응하기 어려운 초보자들을 대상으로 입력된 포켓몬과 타입을 기반으로 약점을 간편하게 제공하는 웹 서비스입니다. 
          <br />
          외부 API (POKE API) 활용과 리액트 쿼리를 통한 데이터 캐싱의 이해 향상을 목적으로 구현하였습니다.
        </p>
      ),
    },
    lists: [
      {
        title: "학습 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">반응형 컴포넌트 구현</li>
            </ul>
            <ul>
              <li className="font-bold">포켓몬 검색 기반 약점 파악</li>
              <li className="px-3 text-lightgrey">
                포켓몬 검색 자동완성
              </li>
              <li className="px-3 text-lightgrey">
                검색 포켓몬 정보 및 약점 계산 출력
              </li>
            </ul>
            <ul>
              <li className="font-bold">타입 검색 기반 약점 파악</li>
              <li className="px-3 text-lightgrey">
                최대 2개의 타입을 통해 약점 계산 출력
              </li>
              <li className="px-3 text-lightgrey">
                특성 기반 약점 파악
              </li>
            </ul>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex">
            React, TypeScript, Tanstack-Query, Poke-API
          </ul>
        ),
      },
    ],
  },
  {
    id: 103,
    primaryColor: "#002351",
    URLS: {
      githubURL: "https://github.com/changchangwoo/3-line-king",
      blogURL: "https://velog.io/@changwoo/%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%88%9C%EB%B0%9C%EB%A0%A5%EC%9D%84-%ED%8F%89%EA%B0%80%ED%95%B4%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4-%EC%82%BC%ED%96%89%EC%8B%9C%EC%9D%98-%EC%99%95",
      serviceURL: "null",
      serviceBoolean: false,
    },
    title: "삼행시의 왕",
    subTitle: "ChatGPT를 활용한 삼행시 평가 서비스",
    workTime: "2024.06.13 - 2024.06.16",
    organize: "1인 개발",
    imgs: [
      "/imgs/projects/3lineking/3lineking-overview.png",
      "/imgs/projects/3lineking/3line.gif",
      "/imgs/projects/3lineking/3line2.gif",
    ],
    description: {
      bottomPart: (
        <p>
          사용자로부터 삼행시를 입력받고, 이에 대한 평가와 랭킹을 제공하는 웹 서비스 입니다. 
          <br />
          리액트 공식 문서 학습과정을 통해 이해한 합성 컴포넌트의 실습과 핵심 기능으로서의 GPT-API 활용을 목적으로 구현하였습니다.
        </p>
      ),
    },
    lists: [
      {
        title: "학습 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">OpenAI API를 활용한 ChatGPT 삼행시 평가 기능 구현</li>
            </ul>
            <ul>
              <li className="font-bold">Node.js Exress 서버, MYSQL 통신을 활용한 사용자 개별 데이터 저장</li>
            </ul>
            <ul>
              <li className="font-bold">합성 컴포넌트 기법을 활용한 컴포넌트 재사용</li>
            </ul>
            <ul>
              <li className="font-bold">Motion.Framer 라이브러리를 활용한 컴포넌트 애니메이션</li>
            </ul>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex">
            React, Node.js, Express, MySQL, OpenAI API
          </ul>
        ),
      },
    ],
  },
  {
    id: 104,
    primaryColor: "#000000",
    URLS: {
      githubURL: "https://github.com/changchangwoo/RetroTodoList",
      blogURL: "https://velog.io/@changwoo/Todo-List-%EB%A7%8C%EB%93%A4%EA%B8%B0-retro-todo-list",
      serviceURL: "null",
      serviceBoolean: false,
    },
    title: "할 일 목록",
    subTitle: "레트로 감성 투두 리스트",
    workTime: "2024.04.02 - 2024.04.11",
    organize: "1인 개발",
    imgs: [
      "/imgs/projects/todolist/todolist-overview.png",
      "/imgs/projects/todolist/rtd1.gif",
      "/imgs/projects/todolist/rtd2.gif",
    ],
    description: {
      bottomPart: (
        <p>
          레트로 감성의 CRUD 기능을 제공하는 TodoList 서비스 입니다. 
          <br />
          풀스택 데브코스 스프린트1 과정을 바탕으로 학습한 Node.js 서버와의 CRUD 통신 구조에 대한 이해를 목적으로 구현하였습니다.
        </p>
      ),
    },
    lists: [
      {
        title: "학습 기능",
        items: (
          <ul className="w-auto flex flex-col gap-1">
            <ul>
              <li className="font-bold">리액트적 사고를 기반으로 한 컴포넌트 설계</li>
            </ul>
            <ul>
              <li className="font-bold">디바운싱을 활용한 사용자 로그인, 회원가입 기능</li>
            </ul>
            <ul>
              <li className="font-bold">TodoList CRUD 기능</li>
            </ul>
            <ul>
              <li className="font-bold">JWT 토큰/쿠키를 활용한 클라이언트-서버 통신 구조</li>
            </ul>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex">
            React, Node, Express, MySQL
          </ul>
        ),
      },
    ],
  },
];