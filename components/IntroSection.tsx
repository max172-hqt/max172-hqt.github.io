import DownloadIcon from "@mui/icons-material/Download";

const technologies = [
  "Vue",
  "OpenLayers",
  "React",
  "React Native",
  "iOS Development",
  "Android Development",
  "React Testing Library",
  "NextJS",
  "Selenium",
  "Wordpress",
  "PHP",
  "Symfony",
  "Laravel",
];

export default function IntroSection() {
  return (
    <section className="container flex flex-col gap-6 sm:p-6 p-4 rounded-lg h-full bg-white dark:bg-[#121212] sm:max-w-[35%] sm:min-w-[360px] flex-shrink-0 overflow-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl dark:text-white font-bold">Huy Tran</h1>
        <p className="font-medium dark:text-gray-400 text-gray-600">
          Full Stack Engineer
        </p>
      </div>
      <div className="dark:bg-[#1f1f1f] dark:border-none border-gray-200 border p-4 rounded-lg space-y-4">
        <h2 className="text-sm text-gray-600 dark:text-gray-400">About Me</h2>
        <p>
          Most recently at LunaGeo, I built interactive WebGIS platforms, with
          latest Web and GIS technologies.
        </p>
        <p>
          I love crafting seamless user experiences and intuitive interfaces,
          with testing in mind.
        </p>
        <a
          href="/Huy_Tran___Resume.pdf"
          target="_blank"
          className="transition hover:underline ease-in-out duration-300 font-bold dark:text-white inline-flex items-center gap-2 text-sm"
          rel="noreferrer"
          aria-label="View Resume PDF"
        >
          <DownloadIcon fontSize="medium" />
          Download Resume
        </a>
      </div>
      <div className="dark:bg-[#1f1f1f] dark:border-none border-gray-200 border p-4 rounded-lg space-y-4">
        <h2 className="text-sm text-gray-600 dark:text-gray-400">Frontend</h2>
        <ul className="text-sm flex gap-2 flex-wrap">
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            React
          </li>
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            Vue
          </li>
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            OpenLayers
          </li>
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            TailwindCSS
          </li>
        </ul>
      </div>
      <div className="dark:bg-[#1f1f1f] dark:border-none border-gray-200 border p-4 rounded-lg space-y-4">
        <h2 className="text-sm text-gray-600 dark:text-gray-400">Backend</h2>
        <ul className="text-sm flex gap-2 flex-wrap">
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            SQL
          </li>
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            Geoserver
          </li>
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            Laravel
          </li>
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            FastAPI
          </li>
        </ul>
      </div>
      <div className="dark:bg-[#1f1f1f] dark:border-none border-gray-200 border p-4 rounded-lg space-y-4">
        <h2 className="text-sm text-gray-600 dark:text-gray-400">Testing</h2>
        <ul className="text-sm flex gap-2 flex-wrap">
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            Cypress
          </li>
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            Selenium
          </li>
          <li className="dark:border-gray-600 border-gray-700 border rounded-full py-1.5 px-2.5">
            React Testing Library
          </li>
        </ul>
      </div>
      {/* <div className="grid grid-cols-3 gap-2">
        <div className="dark:bg-[#1f1f1f] p-4 rounded-lg space-y-2">
          <h2 className="text-sm text-gray-400">Location</h2>
          <p>London, ON</p>
        </div>
      </div> */}
    </section>
  );
}
