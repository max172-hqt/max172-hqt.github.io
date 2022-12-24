import DIVAInterface from "../../../public/Diva Interface.png";
import MSInterface from "../../../public/MS Interface.png";
import PIAInterface from "../../../public/PIA Interface.png";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectSection.module.css";

const projects = [
  {
    title: "Drug Reactions Visualization",
    imageSrc: DIVAInterface,
    imageDescription:
      "Web interface of analytics dashboard to visualize Drug adversary reactions",
    descriptions: [
      "A web-based visual analytics tool to analyze drug-drug interaction (DDI) signals extracted from FAERS data using association rule mining.",
      "Technology: React, D3, Express, Typescript",
    ],
    link: "https://github.com/WPI-MIAP/MIAP-Frontend",
    buttonText: "View Source Code",
  },
  {
    title: "Power In Aging Website",
    imageSrc: PIAInterface,
    imageDescription: "Web Interface of Power In Aging website",
    descriptions: [
      "A web-based visual analytics tool A Wordpress website for the community of support and inspiration for women in the stages of “midlife”.to analyze drug-drug interaction (DDI) signals extracted from FAERS data using association rule mining.",
      "Technology: Wordpress, Elementor",
    ],
    link: "https://www.powerinaging.com/",
  },
  {
    title: "MathSpring Tutoring Website",
    imageSrc: MSInterface,
    imageDescription:
      "MathSpring interface with math multiple choice question and virtual assistant",
    descriptions: [
      "A personalized software that uses interactive multimedia to support students as they solve math problems.",
      "Technology: Java, HTML, CSS, JavaScript",
    ],
    link: "https://ckc.mathspring.org/welcome.jsp?",
  },
];

export default function ProjectSection() {
  return (
    <section className={styles.section}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
}
