import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectDetailDescription from "./ProjectDetailDescription";



const ProjectDetailModal = () => {
  return (
    <section
      id="ProjectDetail"
      className="absolute w-screen h-screen bg-black bg-opacity-70 z-10"
    >
      <ProjectHeader />
      <ProjectDetailDescription/>
      </section>
  );
};

export default ProjectDetailModal;
