import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import budgetwiseThumbnail from "public/budget-wise.png";
import gradetrackerThumbnail from "public/grade-tracker.png";
import algorithmThumbnail from "public/algorithm-visualizer.png";
import earthquakeThumbnail from "public/earthquake.png";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Algorithm Visualizers",
    descriptions:
      "An algorithm visualization application for Breadth-First Search and Depth-First Search.",
    technologies: ["React", "TailwindCSS"],
    github: "https://github.com/max172-hqt/algorithms-visualizers",
    external: "https://huytr.dev/algorithms-visualizers/",
    thumbnail: algorithmThumbnail,
  },
  {
    title: "Earthquake Live Map",
    descriptions:
      "An application that tracks active earthquakes, with info about their impacts and magnitude.",
    technologies: ["React", "React-Query", "OpenLayers"],
    github: "https://github.com/max172-hqt/earthquake-map",
    external: "https://huytr.dev/earthquake-map/",
    thumbnail: earthquakeThumbnail,
  },
  {
    title: "Budget Wise",
    descriptions:
      "A PHP web application to track trip expenses and provide suggestions on resolving debts among members in the trip.",
    technologies: ["Laravel", "React"],
    github: "https://github.com/max172-hqt/budgetwise-v2",
    thumbnail: budgetwiseThumbnail,
  },
  {
    title: "Grade Tracker",
    descriptions:
      "A React Native application to track the student current progress and estimate the average grades to achieve a certain letter grade.",
    technologies: ["React Native", "TypeScript", "Native Base"],
    github: "https://github.com/max172-hqt/grade-tracker",
    thumbnail: gradetrackerThumbnail,
  },
  // {
  //   title: "Personal Website",
  //   descriptions:
  //     "Personal portfolio website. Also served as a small space to write articles and thought process on solving Leetcode problems.",
  //   technologies: ["NextJS", "TypeScript", "TailwindCSS", "Remark"],
  //   github: "https://github.com/max172-hqt/max172-hqt.github.io",
  //   external: "/leetcodes",
  // },
  // {
  //   title: "Weather App",
  //   descriptions:
  //     "An iOS application to show current temperature and weather forecast information through a Map View by adding different location pins on the map. ",
  //   technologies: ["UIKit", "Swift", "WeatherAPI", "MapKit"],
  //   github: "https://github.com/max172-hqt/WeatherApp",
  //   imageVertical: true,
  // },
  // {
  //   title: "Power In Aging Website",
  //   descriptions:
  //     "A Wordpress website for the community of support and inspiration for women in the stages of “midlife”.",
  //   technologies: ["Wordpress", "Elementor", "Memberpress"],
  //   external: "https://www.powerinaging.com/membership",
  // },
  // {
  //   title: "Drug Reactions Visualization",
  //   descriptions:
  //     "A web-based visual analytics tool to analyze drug-drug interaction (DDI) signals extracted from FAERS data using association rule mining.",
  //   technologies: ["React", "D3", "Express", "TypeScript"],
  //   github: "https://github.com/WPI-MIAP/MIAP-Frontend",
  //   external:
  //     "https://www.wpi.edu/news/using-data-science-help-predict-adverse-drug-reactions",
  // },
];

export default function ProjectSection() {
  return (
    <section className="container flex flex-col gap-6 space-y-4 p-4 sm:p-6 bg-[#121212] rounded-lg h-full top-20 overflow-auto">
      <div className="flex md:justify-between md:items-center flex-col md:flex-row gap-4 justify-start items-start">
        <h2 className="text-5xl font-bold">Projects</h2>
        <Link
          href="https://github.com/max172-hqt"
          className="bg-white hover:bg-white/80 transition ease-in-out duration-300 rounded  py-2 px-4 font-bold text-black text-sm"
          target="_blank"
          rel="noreferrer"
        >
          See More
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 text-sm">
        {projects.map((project) => (
          <div
            className="relative flex flex-col bg-[#1f1f1f] p-4 overflow-hidden rounded-lg"
            key={project.title}
          >
            <div className="flex-grow flex flex-col gap-4">
              <Image
                src={project.thumbnail}
                alt="Picture of Huy"
                className="w-full rounded-lg max-h-48"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <h3 className="text-gray-900 dark:text-slate-200 font-bold text-base">
                {project.title}
              </h3>

              <div className="text-gray-700 dark:text-slate-300">
                {project.descriptions}
              </div>
            </div>
            <div className="py-2">
              <ul className="list-inside flex text-xs font-mono flex-wrap gap-3 dark:text-gray-400">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  key={project.github}
                  href={project.github}
                  target="_blank"
                  className="hover:text-amber-600 transition ease-in-out duration-300 text-2xl"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  <GitHubIcon fontSize="inherit" />
                </a>
              )}
              {project.external && (
                <a
                  key={project.external}
                  href={project.external}
                  target="_blank"
                  className="hover:text-amber-600 transition ease-in-out duration-300 text-2xl"
                  rel="noreferrer"
                  aria-label="External Link"
                >
                  <OpenInNewIcon fontSize="inherit" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
