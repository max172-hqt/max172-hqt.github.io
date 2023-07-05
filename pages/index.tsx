import { useContext } from "react";
import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection";
import { PostContext, PostContextType } from "../components/layout";

export default function Home() {
  // const { setPosts } = useContext(PostContext) as PostContextType;

  return (
    <>
      <IntroSection />
      <ProjectSection />
    </>
  );
}
