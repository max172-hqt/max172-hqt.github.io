import EducationSection from "../components/Portfolio/Education/EducationSection";
import ExperienceSection from "../components/Portfolio/Experience/ExperienceSection";
import IntroSection from "../components/Portfolio/Introduction/IntroSection";
import ProjectSection from "../components/Portfolio/Project/ProjectSection";

export default function Home() {
  return (
    <>
      <IntroSection />
      <ExperienceSection />
      <ProjectSection />
      <EducationSection />
    </>
  );
}
