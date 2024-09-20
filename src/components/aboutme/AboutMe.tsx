import { SECTION_TITLE } from "@/constants/constants";
import React from "react";
import Layout from "../common/Layout";
import AboutProfile from "./AboutProfile";
import AboutDescription from "./AboutDescription";

const AboutMe = () => {
  return (
    <Layout title={SECTION_TITLE.aboutMe}>
      <div className="w-full h-full flex flex-col items-center
      lg:gap-20 lg:py-24
      md:gap-10 md:py-10
      gap-10 py-0
      ">
      <AboutProfile/>
      <AboutDescription/>
      </div>
    </Layout>
  );
};

export default AboutMe;
