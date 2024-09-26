export const projectDetailData = [
  {
    id: 1,
    primaryColor: "#1B4BDD",
    URLS: {
      githubURL: "https://github.com/Programmers-SpotLight/SpotLight",
      blogURL:
        "https://velog.io/@changwoo/%EC%8A%A4%ED%8F%AC%ED%8A%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8-SPOT-LIGHT-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
      serviceURL: "https://spot-light.ovh/",
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
          POGAKCO는 같은 타이머(=뽀모도로)를 통해 학습 사이클을 공유하고
          생산성을 극대화할 수 있는 협업 서비스입니다.
        </p>
      ),
      bottomPart: (
        <p>
          자신만의 학습 스타일에 맞게 집중 시간, 쉬는 시간, 큰 휴식 시간,
          그리고 뽀모도로 사이클 횟수를 설정하여 타이머를 생성하세요!
          <br />
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
    primaryColor: "#F19AC9",
    URLS: {
      githubURL: "https://github.com/changchangwoo/Eye_love_you",
      blogURL: "null",
      serviceURL: "null",
      serviceBoolean: true,
    },
    title: "아이 러브 유 (Eye-Love_You)",
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
          <span className="font-bold text-yellow-50">
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
      }
    ],
  },
];
