const education = [
  {
    schoolName: "Fanshawe College, London, ON",
    time: "Sep 2022 - Dec 2023",
    major: "Post-graduate in Mobile Application Development",
    extras: ["Volunteer Peer Tutor", "IT Programming Contest 2023 - 3rd place"],
    courseWork: [
      "iOS Development 1 & 2",
      "Android Development 1 & 2",
      "React Native",
      "Web Design",
      "Programming in Javascript",
      "Databases",
    ],
  },
  {
    schoolName: "Worcester Polytechnic Institute, Worcester, MA",
    time: "Aug 2014 - June 2018",
    major: "Bachelor of Science in Computer Science",
    courseWork: [
      "Software Engineering",
      "Object Oriented Design & Analysis",
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Networking",
      "Operating Systems",
    ],
    extras: ["Graduated with Distinction"],
  },
];

const experience = [
  {
    title: "Web Developer (Part-time)",
    employer: "Power In Aging",
    time: "Sep 2022 - Present",
    duties: [
      "Design and build a website using Wordpress",
      "Develop paywall content",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Got It AI",
    time: "Aug 2019 - Aug 2022",
    duties: [
      "Developed visualizations and analytics dashboard",
      "Implemented a monitoring and error logging Slack Bot",
      "Supervised Test Automation team interns",
    ],
  },
  {
    title: "Software Engineer in Test",
    employer: "Immune Tolerance Network",
    time: "July 2018 - June 2019",
    duties: ["Implemented Selenium tests", "Implemented CI/CD pipeline"],
  },
  {
    title: "Research Assistant",
    employer: "WPI - Biology Group",
    time: "Dec 2017 - May 2018",
    duties: ["Implemented a web mobile application with offline capability"],
  },
  {
    title: "Research Assistant",
    employer: "WPI - MathSpring",
    time: "Summer 2017",
    duties: ["Revamped UI of a highschool math tutoring application"],
  },
];

export default function Resume() {
  return (
    <section className="container max-w-3xl flex flex-col justify-center my-5 sm:my-10 px-4 mx-auto gap-8">
      <div className="flex items-center">
        <h1 className="text-3xl sm:text-5xl font-medium flex-grow dark:text-slate-200">
          Resume
        </h1>
        <div>
          <a
            href="/Huy_Tran___Resume.pdf"
            target="_blank"
            className="bg-amber-600 hover:bg-amber-700 transition ease-in-out duration-300 rounded  py-2 px-4 font-bold text-white"
            rel="noreferrer"
          >
            PDF Version
          </a>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 rounded overflow-hidden border dark:border-slate-600">
        <h2 className="font-bold text-2xl dark:text-slate-200">Education</h2>
        <div className="divide-y dark:divide-slate-600">
          {education.map((school) => (
            <div className="grid grid-cols-3 py-4" key={school.time}>
              <div className="col-span-3 sm:col-span-1 justify-self-start">
                <span className="inline-block bg-amber-600 text-gray-50 px-2 rounded font-mono text-sm">
                  {school.time}
                </span>
              </div>
              <div className="col-span-3 sm:col-span-2 flex flex-col">
                <div className="font-bold dark:text-slate-200">
                  {school.major}
                </div>
                <div className="mb-2 dark:text-slate-400">
                  {school.schoolName}
                </div>
                <ul className="list-inside list-disc mb-4 dark:text-slate-400">
                  {school.extras.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
                <ul className="list-inside flex text-xs font-mono flex-wrap gap-3">
                  {school.courseWork.map((course, index) => (
                    <li
                      key={index}
                      className="bg-slate-200 dark:bg-slate-500 px-2 rounded"
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Education */}

      <div className="p-4 flex flex-col gap-4 rounded overflow-hidden border dark:border-slate-600 mb-16">
        <h2 className="font-bold text-2xl">Experience</h2>
        <div className="divide-y dark:divide-slate-600">
          {experience.map((job) => (
            <div className="grid grid-cols-3 py-4" key={job.time}>
              <div className="col-span-3 sm:col-span-1 justify-self-start">
                <span className="inline-block bg-amber-600 text-gray-50 px-2 rounded font-mono text-sm">
                  {job.time}
                </span>
              </div>
              <div className="col-span-3 sm:col-span-2 flex flex-col">
                <div className="font-bold dark:text-slate-200">{job.title}</div>
                <div className="mb-2 dark:text-slate-400">{job.employer}</div>
                <ul className="list-inside list-disc dark:text-slate-400">
                  {job.duties.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Experience */}
    </section>
  );
}
