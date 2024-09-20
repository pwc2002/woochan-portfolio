import AboutMe from "@/components/aboutme/AboutMe";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import OverView from "@/components/overview/OverView";
import Projects from "@/components/projects/Projects";
import Skill from "@/components/skill/Skill";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "@/components/common/NavBar";

export default function Home() {
  return (
    <main>
      <OverView />
      <AboutMe />
      <Projects />
      <Skill />
      <Experience />
      <Contact />
      <NavBar/>

    </main>
  );
}
