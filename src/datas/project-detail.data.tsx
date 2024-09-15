export const projectDetailData = [
  {
    id : 1,
    primaryColor : "#1B4BDD",
    title: "스포트라이트 (SPOT_LIGHT)",
    subTitle: "지도 중심 커뮤니티 웹 서비스",
    workTime: "2024.07.24 - 2024.08.29",
    organize: "5인 개발 (풀스택 5인)",
    description: {
      topPart: (
        <p>
          영화에 나온 그 장소, 애니메이션에서 등장한 그 배경, 내 최애가 다녔던 그 맛집! 혹시 어딘지 궁금하진 않으셨나요?
          <br />
          스포트라이트는 셀렉션을 통해 여러분의 특별한 장소를 공유할 수 있는 지도 중심의 커뮤니티 웹 서비스입니다.
        </p>
      ),
      bottomPart: (
        <p>
          사용자는 자신이 아끼는 스팟들을 하나의 셀렉션으로 묶어 다른 사람들과 공유 할 수 있습니다
          <br /> 
          스포트라이트와 함께 일상 속의 최애 장소를 기록하고, 공유하며, 새로운 경험을 해보세요!
        </p>
      ),
    },
    lists: [
      {
        title: "🛠️  담당 기능",
        items: (
          <ul className="list-decimal">
            <li className="ml-5 font-bold my-1">
              팀장, 프로젝트 기획 및 디자인 설계
            </li>
            <li className="ml-5 font-bold my-1">웹 프론트엔드 구현 (React)</li>
            <li className="ml-10">
              Recharts 라이브러리를 사용한 데이터 시각화 기능
            </li>
            <li className="ml-10">
              Kakao share API, Kakao Map API를 사용한 공유하기, 주변안과 지도 기능
            </li>
            <li className="ml-10">
              Socket-io 및 axios를 사용한 실시간 카메라 이미지 눈 깜박임 감지
              서버와 통신 기능
            </li>
  
            <li className="ml-5 font-bold my-1">
              모바일 프론트엔드 구현 (React-Native)
            </li>
            <li className="ml-10">
              React-Native-Chart-Kit 라이브러리를 사용한 데이터 시각화 기능
            </li>
            <li className="ml-10">Google Maps API를 사용한 주변안과 지도 기능</li>
            <li className="ml-10">
              Expo-Face-Detector 라이브러리를 사용한 모바일 눈 깜박임 감지 기능
            </li>
            <li className="ml-5 font-bold my-1">
              eas build를 통한 .apk 형식의 파일 생성
            </li>
            <li className="ml-10">눈 깜박임 감지 서버 구현 (Python Flask)</li>
            <li className="ml-10">
              Python Flask socket-io를 사용한 눈 깜박임 감지 서버 구현
            </li>
            <li className="ml-10">
              Keras 라이브러리를 사용한 사용자 이미지 Blink 모델 적용
            </li>
            <li className="ml-10">
              반환된 모델 값을 토대로 눈 깜박임 데이터 추출 알고리즘 구현
            </li>
          </ul>
        ),
      },
      {
        title: "💫 기술 키워드",
        items: (
          <ul className="list-disc pl-5">
            <li>React</li>
            <li>React-Native</li>
            <li>Python Flask</li>
            <li>Keras</li>
            <li>Socket.io</li>
            <li>Kakao API</li>
            <li>Google Maps API</li>
          </ul>
        ),
      },
    ],
  },
  {
    id : 2,
    primaryColor : "#FF8080",
    title: "뽀각코 (Pogakco)",
    subTitle: "실시간 공유타이머 웹 서비스",
    workTime: "2024.01.03 - 2024.06.07",
    organize: "6인 개발 (FE 3인, BE 3인)",
    description: {
      topPart: (
        <p>
          아이러브유는 현대 사회의 빈번한 미디어 기기의 사용으로 인한
          <br />
          안구건조증과 같은 눈 건강 문제를 예방하기 위해 기획된 아이케어
          프로젝트입니다.
        </p>
      ),
      bottomPart: (
        <p>
          자체 제작한 Blink 모델을 통해 사용자의 눈 깜박임을 식별하고 경고음을
          출력하며,
          <br /> 이를 통해 수집한 데이터를 시각화 자료로 변환하여 사용자 개별 안구
          습관 점검 기능을 제공합니다.
        </p>
      ),
    },
    lists: [
      {
        title: "🛠️  담당 기능",
        items: (
          <ul className="list-decimal">
            <li className="ml-5 font-bold my-1">
              팀장, 프로젝트 기획 및 디자인 설계
            </li>
            <li className="ml-5 font-bold my-1">웹 프론트엔드 구현 (React)</li>
            <li className="ml-10">
              Recharts 라이브러리를 사용한 데이터 시각화 기능
            </li>
            <li className="ml-10">
              Kakao share API, Kakao Map API를 사용한 공유하기, 주변안과 지도 기능
            </li>
            <li className="ml-10">
              Socket-io 및 axios를 사용한 실시간 카메라 이미지 눈 깜박임 감지
              서버와 통신 기능
            </li>
  
            <li className="ml-5 font-bold my-1">
              모바일 프론트엔드 구현 (React-Native)
            </li>
            <li className="ml-10">
              React-Native-Chart-Kit 라이브러리를 사용한 데이터 시각화 기능
            </li>
            <li className="ml-10">Google Maps API를 사용한 주변안과 지도 기능</li>
            <li className="ml-10">
              Expo-Face-Detector 라이브러리를 사용한 모바일 눈 깜박임 감지 기능
            </li>
            <li className="ml-5 font-bold my-1">
              eas build를 통한 .apk 형식의 파일 생성
            </li>
            <li className="ml-10">눈 깜박임 감지 서버 구현 (Python Flask)</li>
            <li className="ml-10">
              Python Flask socket-io를 사용한 눈 깜박임 감지 서버 구현
            </li>
            <li className="ml-10">
              Keras 라이브러리를 사용한 사용자 이미지 Blink 모델 적용
            </li>
            <li className="ml-10">
              반환된 모델 값을 토대로 눈 깜박임 데이터 추출 알고리즘 구현
            </li>
          </ul>
        ),
      },
      {
        title: "💫 기술 키워드",
        items: (
          <ul className="list-disc pl-5">
            <li>React</li>
            <li>React-Native</li>
            <li>Python Flask</li>
            <li>Keras</li>
            <li>Socket.io</li>
            <li>Kakao API</li>
            <li>Google Maps API</li>
          </ul>
        ),
      },
    ],
  }];