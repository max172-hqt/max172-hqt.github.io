import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    title: "Grade Tracker",
    descriptions:
      "A mobile application to track the student current progress and estimate the average grades to achieve a certain letter grade.",
    technologies: ["React Native", "Typescript", "Native Base"],
    github: "https://github.com/max172-hqt/grade-tracker",
  },
  {
    title: "Personal Website",
    descriptions:
      "Personal portfolio website. Also served as a small space to write articles and thought process on solving Leetcode problems.",
    technologies: ["NextJS", "Typescript", "TailwindCSS", "Remark"],
    github: "https://github.com/max172-hqt/max172-hqt.github.io",
  },
  {
    title: "Weather App",
    descriptions:
      "An iOS application to show current temperature and weather forecast information through a Map View by adding different location pins on the map. ",
    technologies: ["UIKit", "Swift", "WeatherAPI", "MapKit"],
    external: "TODO",
    imageVertical: true,
  },
  {
    title: "Power In Aging Website",
    descriptions:
      "A Wordpress website for the community of support and inspiration for women in the stages of “midlife”.",
    technologies: ["Wordpress", "Elementor", "Memberpress"],
    external: "https://www.powerinaging.com/",
  },
  {
    title: "Drug Reactions Visualization",
    descriptions:
      "A web-based visual analytics tool to analyze drug-drug interaction (DDI) signals extracted from FAERS data using association rule mining.",
    technologies: ["React", "D3", "Expres", "Typescript"],
    github: "https://github.com/WPI-MIAP/MIAP-Frontend",
  },
];

export default function ProjectSection() {
  return (
    <section className="container max-w-5xl flex flex-col justify-center my-20 space-y-4 px-4 mx-auto">
      <h1 className="text-3xl">Projects</h1>

      <div className="grid lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            className="relative flex flex-col space-y-4 p-4 rounded overflow-hidden border divide-y"
            key={project.title}
          >
            <div className="flex-grow">
              <div className="pb-4">
                <h5 className="text-gray-900 font-bold text-xl">
                  {project.title}
                </h5>
                <div>
                  {project.github && (
                    <a
                      key="title"
                      href={project.github}
                      target="_blank"
                      className="hover:text-sky-600 transition ease-in-out duration-300 text-2xl"
                      rel="noreferrer"
                    >
                      <GitHubIcon fontSize="inherit" />
                    </a>
                  )}
                  {project.external && (
                    <a
                      key="title"
                      href={project.external}
                      target="_blank"
                      className="hover:text-sky-600 transition ease-in-out duration-300 text-2xl"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon fontSize="inherit" />
                    </a>
                  )}
                </div>
              </div>
              <div className="text-gray-700">{project.descriptions}</div>
            </div>
            <div className="my-4 pt-4">
              <ul className="list-inside flex text-xs font-mono flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
