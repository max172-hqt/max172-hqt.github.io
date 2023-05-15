import ProjectCard from "./ProjectCard";
import styles from "./ProjectSection.module.css";

const projects = [
  {
    title: "Weather App",
    imageSrc: "/Weather App.svg",
    imageDescription: "Weather App interface",
    descriptions: [
      "An iOS application to show current temperature and weather forecast information through a Map View by adding different location pins on the map. ",
      "Technology: iOS, Swift, StoryBoard, Weather API",
    ],
    link: null,
    imageVertical: true,
  },
  {
    title: "Power In Aging Website",
    imageSrc: "/PIA Interface.svg",
    imageDescription: "Web Interface of Power In Aging website",
    descriptions: [
      "A Wordpress website for the community of support and inspiration for women in the stages of “midlife”.",
      "Technology: Wordpress, Elementor",
    ],
    link: "https://www.powerinaging.com/",
  },
  {
    title: "Drug Reactions Visualization",
    imageSrc: "/DIVA Interface.svg",
    imageDescription:
      "Web interface of analytics dashboard to visualize Drug adversary reactions",
    descriptions: [
      "A web-based visual analytics tool to analyze drug-drug interaction (DDI) signals extracted from FAERS data using association rule mining.",
      "Technology: React, D3, Express, Typescript",
    ],
    link: "https://github.com/WPI-MIAP/MIAP-Frontend",
    buttonText: "View Source Code",
  },
];

export default function ProjectSection() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.header}>Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </section>
    </div>
  );
}
