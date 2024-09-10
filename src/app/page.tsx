import AboutMe from "@/components/aboutme/AboutMe";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import OverView from "@/components/overview/OverView";
import Projects from "@/components/projects/Projects";
import Skill from "@/components/skill/Skill";

export default function Home() {
  return (
    <>
    <OverView/>
    <AboutMe/>
    <Skill/>
    <Projects/>
    <Experience/>
    <Contact/>
    </>
  )
}
