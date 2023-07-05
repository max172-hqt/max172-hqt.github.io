import Image from "next/image";
import profilePic from "public/Personal Avatar.jpeg";
import classNames from "classnames";

const technologies = [
  "React",
  "React Native",
  "iOS Development",
  "Android Development",
  "React Testing Library",
  "NextJS",
  "Selenium",
  "Wordpress",
];

export default function IntroSection() {
  return (
    <section className="container lg:max-w-3xl flex flex-col justify-center mx-auto lg:my-20 space-y-4 p-4">
      <h1 className="font-medium text-5xl">Huy Tran</h1>
      <div className="flex md:space-x-10 md:flex-row flex-col dark:text-slate-300">
        <div className={classNames("flex-1 flex flex-col space-y-4")}>
          <div>
            I am a student at Fanshawe College in London, ON; pursuing the
            post-graduate program in Mobile Application Development. I have 4
            years of work experience in Frontend and Web Automation and been
            expanding my knowledge in iOS, Android and Cross-platform mobile
            development.
          </div>
          <div>
            I completed my Bachelor’s degree in Computer Science at Worcester
            Polytechnic Institute (Worcester, MA), where I worked on a{" "}
            <a
              href="https://www.wpi.edu/news/using-data-science-help-predict-adverse-drug-reactions"
              target="_blank"
              rel="noreferrer"
              className={classNames(
                "text-amber-600 rounded hover:text-amber-700 transition ease-in-out duration-300"
              )}
            >
              Visual Analytics System
            </a>{" "}
            to visualize adversary interactions of two or more drugs among 200+
            drugs with Prof. Rundensteiner.
          </div>
          <div>
            Here are a few technologies that I&apos;ve been working with
            recently:
          </div>
          <ul className="list-inside list-disc columns-2 font-mono text-gray-500 dark:text-slate-400 text-sm">
            {technologies.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-60 mt-4">
          <Image src={profilePic} alt="Picture of Huy" />
        </div>
      </div>
    </section>
  );
}
