import { SECTION_TITLE } from "@/constants/constants";
import React from "react";
import Layout from "../common/Layout";
import AboutProfile from "./AboutProfile";
import AboutDescription from "./AboutDescription";

const AboutMe = () => {
  return (
    <Layout title={SECTION_TITLE.aboutMe}>
      <div className="w-full h-full flex px-[10%] py-24 flex-col items-center gap-20">
      <AboutProfile/>
      <AboutDescription/>
      </div>
    </Layout>
  );
};

export default AboutMe;
