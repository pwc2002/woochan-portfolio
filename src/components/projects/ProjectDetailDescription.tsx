import React, { ReactNode } from "react";

const DetailData = {
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
};

interface ListTitleProps {
  title: string;
  items: ReactNode;
}

const ListSection = ({ title, items }: ListTitleProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full h-11 rounded-lg bg-[#FF8080] px-3 py-2 text-pureWhite font-bold">
        {title}
      </div>
      {items}
    </div>
  );
};

const ProjectDetailDescription = () => {
  return (
    <div className="max-w-[1050px] bg-white h-auto m-auto rounded-lg relative">
      <div className="w-full h-[420px] bg-[#FF8080] rounded-tl-lg rounded-tr-lg absolute z-0" />
      <div className="relative z-10 p-10">
        <h1 className="font-extrabold text-pureWhite text-[50px]">
          {DetailData.title}
        </h1>
        <h2 className="mt-3 mb-2 font-extrabold text-pureWhite text-2xl">
          {DetailData.subTitle}
        </h2>
        <h3 className="text-white text-base font-bold">
          {DetailData.workTime}
        </h3>
        <h3 className="text-white text-base font-bold">
          {DetailData.organize}
        </h3>
        <div className="w-full h-[300px] flex my-5 rounded-lg gap-5 bg-lightgrey">
          {/* Todo, 캐러셀로 변경 */}
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full font-medium h-auto p-5 bg-lightgrey flex flex-col gap-5 rounded-lg">
            {DetailData.description.topPart}
            {DetailData.description.bottomPart}
          </div>
          {/* 리스트 섹션 렌더링 */}
          {DetailData.lists.map((list, index) => (
            <ListSection key={index} title={list.title} items={list.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailDescription;
