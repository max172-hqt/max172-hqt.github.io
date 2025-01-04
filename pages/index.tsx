import { useContext } from "react";
import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection";
import { PostContext, PostContextType } from "../components/layout";

export default function Home() {
  // const { setPosts } = useContext(PostContext) as PostContextType;

  return (
    <div className="flex gap-4 h-[calc(100vh-76px)]">
      <IntroSection />
      <ProjectSection />
    </div>
  );
}
