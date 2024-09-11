import { SECTION_TITLE } from "@/constants/constants";
import React from "react";
import Layout from "../common/Layout";

const AboutMe = () => {
  return (
    <Layout title={SECTION_TITLE.aboutMe}>
      <div className="w-full h-full flex justify-center flex-col"></div>
    </Layout>
  );
};

export default AboutMe;
