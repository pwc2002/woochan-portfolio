export const projectDetailData = [
  {
    id: 1,
    primaryColor: "#4CAF50",
    URLS: {
      githubURL: "https://github.com/inha-swuniv-2024-netzero-hackathon/NET-st-Level",
      blogURL: "null",
      serviceURL: "null",
      serviceBoolean: false,
    },
    title: "NetstLevel",
    subTitle: "사용자 맞춤형 1인분 레시피 앱",
    workTime: "2024.09 - 2024.09 (1박2일)",
    organize: "4인 개발 (프론트엔드 1명, 백엔드 2명, 디자인 1명)",
    imgs: [
      "/imgs/projects/netstlevel/netstlevel-overview.png",
      "/imgs/projects/netstlevel/netstlevel-1.png",
      "/imgs/projects/netstlevel/netstlevel-2.png",
      "/imgs/projects/netstlevel/netstlevel-3.png",
    ],
    description: {
      topPart: (
        <p>
          <span className="font-bold">
            🏆 2024 AWS NetZero 해커톤 장려상 수상
          </span>
          <br />
          <br />
          NetstLevel은 개인 취향과 식재료를 고려한 맞춤형 1인분 레시피를 제공하는 웹앱입니다.
          <br />
          사용자가 가지고 있는 재료와 선호도를 입력하면, AI가 분석하여 최적의 1인분 레시피를 추천해주는 서비스입니다.
        </p>
      ),
      bottomPart: (
        <p>
          환경 친화적인 식습관을 장려하고, 음식물 쓰레기를 줄이는 것을 목표로 개발되었습니다.
          <br />
          개인화된 레시피 추천을 통해 사용자의 요리 경험을 향상시키고, 지속가능한 식생활을 지원합니다.
        </p>
      ),
    },
    lists: [
      {
        title: "담당 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">프론트엔드 개발</li>
              <li className="px-3 text-lightgrey">Next.js를 활용한 웹앱 제작</li>
              <li className="px-3 text-lightgrey">Tailwind CSS를 활용한 반응형 UI 구현</li>
              <li className="px-3 text-lightgrey">사용자 인터페이스 및 사용자 경험 설계</li>
            </ul>
            <ul>
              <li className="font-bold">주요 기능 구현</li>
              <li className="px-3 text-lightgrey">재료 입력 및 선호도 설정 기능</li>
              <li className="px-3 text-lightgrey">AI 기반 레시피 추천 시스템 연동</li>
              <li className="px-3 text-lightgrey">레시피 상세 정보 표시</li>
            </ul>
          </ul>
        ),
      },
      {
        title: "결과",
        items: (
          <ul className="w-auto flex flex-col">
            <li className="px-3 text-lightgrey">
              <span className="font-bold">AWS NetZero 해커톤 장려상</span> 수상
            </li>
            <li className="px-3 text-lightgrey">
              <span className="font-bold">1박2일의 짧은 기간</span> 동안 완성도 높은 프로토타입 개발
            </li>
            <li className="px-3 text-lightgrey">
              <span className="font-bold">팀 협업</span>을 통한 효율적인 개발 진행
            </li>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            Next.js, Tailwind CSS, TypeScript, React
          </ul>
        ),
      },
    ],
  },
  {
    id: 2,
    primaryColor: "#2196F3",
    URLS: {
      githubURL: "null",
      blogURL: "null",
      serviceURL: "null",
      serviceBoolean: false,
    },
    title: "유학식",
    subTitle: "유학생을 위한 학식 종합 정보 제공 앱",
    workTime: "2024.08 - 2024.09",
    organize: "4인 개발 (프론트엔드 1명, 백엔드 2명, 디자인 1명)",
    imgs: [
      "/imgs/projects/yuhaksik/yuhaksik-overview.png",
      "/imgs/projects/yuhaksik/yuhaksik-1.png",
      "/imgs/projects/yuhaksik/yuhaksik-2.png",
      "/imgs/projects/yuhaksik/yuhaksik-3.png",
    ],
    description: {
      topPart: (
        <p>
          <span className="font-bold">
            🍽️ 유학생을 위한 맞춤형 학식 정보 서비스
          </span>
          <br />
          <br />
          유학식은 다양한 대학의 학식 정보를 한곳에서 확인할 수 있는 종합 정보 제공 앱입니다.
          <br />
          유학생들이 새로운 환경에서 학식 정보를 쉽게 찾고, 메뉴를 미리 확인할 수 있도록 도와주는 서비스입니다.
        </p>
      ),
      bottomPart: (
        <p>
          각 대학별 학식 정보를 통합하여 제공하고, 메뉴 추천 및 알림 기능을 통해 유학생들의 편의를 증대시킵니다.
          <br />
          다국어 지원을 통해 다양한 국적의 유학생들이 쉽게 이용할 수 있도록 설계되었습니다.
        </p>
      ),
    },
    lists: [
      {
        title: "담당 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">프론트엔드 개발</li>
              <li className="px-3 text-lightgrey">Next.js를 활용한 웹앱 개발</li>
              <li className="px-3 text-lightgrey">반응형 디자인 구현</li>
              <li className="px-3 text-lightgrey">사용자 인터페이스 설계</li>
            </ul>
            <ul>
              <li className="font-bold">주요 기능 구현</li>
              <li className="px-3 text-lightgrey">대학별 학식 정보 표시</li>
              <li className="px-3 text-lightgrey">메뉴 검색 및 필터링</li>
              <li className="px-3 text-lightgrey">다국어 지원 인터페이스</li>
            </ul>
          </ul>
        ),
      },
      {
        title: "결과",
        items: (
          <ul className="w-auto flex flex-col">
            <li className="px-3 text-lightgrey">
              <span className="font-bold">완성도 높은 UI/UX</span> 설계 및 구현
            </li>
            <li className="px-3 text-lightgrey">
              <span className="font-bold">팀 협업</span>을 통한 효율적인 개발 진행
            </li>
            <li className="px-3 text-lightgrey">
              <span className="font-bold">사용자 중심</span>의 서비스 설계
            </li>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            Next.js, TypeScript, React, Tailwind CSS
          </ul>
        ),
      },
    ],
  },
  {
    id: 3,
    primaryColor: "#FF9800",
    URLS: {
      githubURL: "https://github.com/pwc2002/bbiyakk_2123",
      blogURL: "null",
      serviceURL: "null",
      serviceBoolean: false,
    },
    title: "캘업",
    subTitle: "대학 공지사항 구독 서비스",
    workTime: "2024.10 - 2024.10",
    organize: "4인 개발 (프론트엔드 1명, 백엔드 1명, 풀스택 1명, 디자인 1명)",
    imgs: [
      "/imgs/projects/calup/calup-overview.png",
      "/imgs/projects/calup/calup-1.png",
      "/imgs/projects/calup/calup-2.png",
      "/imgs/projects/calup/calup-3.png",
    ],
    description: {
      topPart: (
        <p>
          <span className="font-bold">
            📅 대학 공지사항을 한곳에서 모아보는 구독 서비스
          </span>
          <br />
          <br />
          캘업은 다양한 대학 내 공지사항을 한곳에서 모아 보여주고, 캘린더 형태로 구독할 수 있는 서비스입니다.
          <br />
          학생들이 여러 대학의 공지사항을 효율적으로 관리하고, 중요한 일정을 놓치지 않도록 도와주는 플랫폼입니다.
        </p>
      ),
      bottomPart: (
        <p>
          RSS 피드를 활용하여 각 대학의 공지사항을 자동으로 수집하고, 사용자가 관심 있는 공지사항을 구독할 수 있습니다.
          <br />
          캘린더 형태의 직관적인 인터페이스를 통해 일정 관리가 용이하도록 설계되었습니다.
        </p>
      ),
    },
    lists: [
      {
        title: "담당 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">풀스택 개발</li>
              <li className="px-3 text-lightgrey">프론트엔드 구성 및 백엔드 구성 담당</li>
              <li className="px-3 text-lightgrey">Next.js를 활용한 풀스택 개발</li>
              <li className="px-3 text-lightgrey">Prisma ORM을 활용한 데이터베이스 설계</li>
            </ul>
            <ul>
              <li className="font-bold">주요 기능 구현</li>
              <li className="px-3 text-lightgrey">대학별 공지사항 수집 및 표시</li>
              <li className="px-3 text-lightgrey">캘린더 형태의 일정 관리</li>
              <li className="px-3 text-lightgrey">공지사항 구독 및 알림 기능</li>
              <li className="px-3 text-lightgrey">사용자 인증 및 프로필 관리</li>
            </ul>
          </ul>
        ),
      },
      {
        title: "결과",
        items: (
          <ul className="w-auto flex flex-col">
            <li className="px-3 text-lightgrey">
              <span className="font-bold">풀스택 개발 경험</span>을 통한 전반적인 시스템 이해
            </li>
            <li className="px-3 text-lightgrey">
              <span className="font-bold">데이터베이스 설계</span> 및 ORM 활용 능력 향상
            </li>
            <li className="px-3 text-lightgrey">
              <span className="font-bold">팀 협업</span>을 통한 효율적인 개발 진행
            </li>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            Next.js, Prisma, MySQL, TypeScript, React, Tailwind CSS
          </ul>
        ),
      },
    ],
  },
  {
    id: 4,
    primaryColor: "#9C27B0",
    URLS: {
      githubURL: "https://github.com/undermap5/webpage",
      blogURL: "null",
      serviceURL: "null",
      serviceBoolean: false,
    },
    title: "언더맵",
    subTitle: "교통약자를 위한 3D 길찾기 서비스",
    workTime: "2024.08 - 2024.08",
    organize: "5인 개발 (프론트엔드 1명, 백엔드 2명, 디자인 1명, 기타 1명)",
    imgs: [
      "/imgs/projects/undermap/undermap-overview.png",
      "/imgs/projects/undermap/undermap-1.png",
      "/imgs/projects/undermap/undermap-2.png",
      "/imgs/projects/undermap/undermap-3.png",
    ],
    description: {
      topPart: (
        <p>
          <span className="font-bold">
            🚇 교통약자를 위한 혁신적인 길찾기 서비스
          </span>
          <br />
          <br />
          언더맵은 교통약자를 위한 지하철 역사내의 실시간 위치 기반 3D 길찾기 서비스입니다.
          <br />
          휠체어 사용자, 시각 장애인 등 교통약자들이 지하철역을 안전하고 편리하게 이용할 수 있도록 도와주는 서비스입니다.
        </p>
      ),
      bottomPart: (
        <p>
          3D 지도와 실시간 위치 추적을 통해 정확한 길찾기를 제공하고, 장애물 회피 경로를 제시합니다.
          <br />
          음성 안내 기능과 접근성 고려 설계를 통해 모든 사용자가 편리하게 이용할 수 있습니다.
        </p>
      ),
    },
    lists: [
      {
        title: "담당 기능",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            <ul>
              <li className="font-bold">프론트엔드 개발</li>
              <li className="px-3 text-lightgrey">Next.js를 활용한 웹앱 개발</li>
              <li className="px-3 text-lightgrey">3D 지도 인터페이스 구현</li>
              <li className="px-3 text-lightgrey">실시간 위치 추적 기능</li>
            </ul>
            <ul>
              <li className="font-bold">주요 기능 구현</li>
              <li className="px-3 text-lightgrey">3D 길찾기 알고리즘 연동</li>
              <li className="px-3 text-lightgrey">실시간 위치 기반 경로 안내</li>
              <li className="px-3 text-lightgrey">접근성 고려 UI/UX 설계</li>
              <li className="px-3 text-lightgrey">음성 안내 기능</li>
            </ul>
          </ul>
        ),
      },
      {
        title: "결과",
        items: (
          <ul className="w-auto flex flex-col">
            <li className="px-3 text-lightgrey">
              <span className="font-bold">접근성 고려</span>한 서비스 설계 및 구현
            </li>
            <li className="px-3 text-lightgrey">
              <span className="font-bold">3D 지도</span> 및 실시간 위치 추적 기능 구현
            </li>
            <li className="px-3 text-lightgrey">
              <span className="font-bold">사회적 가치</span>를 담은 의미 있는 프로젝트 완성
            </li>
          </ul>
        ),
      },
      {
        title: "기술 키워드",
        items: (
          <ul className="w-auto flex flex-col gap-2">
            Next.js, TypeScript, React, 3D Mapping, Real-time Location
          </ul>
        ),
      },
    ],
  },
];
