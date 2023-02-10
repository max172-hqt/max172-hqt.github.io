import EducationCard from "./EducationCard";
import styles from "./EducationSection.module.css";

const education = [
  {
    schoolName: "Fanshawe College",
    time: "Sep 2022 - Present",
    major: "Post-graduate in Mobile Application Development",
    courseWork: ["Web Design", "Programming in Javascript", "Databases"],
  },
  {
    schoolName: "Worcester Polytechnic Institute",
    time: "Aug 2014 - June 2018",
    major: "Bachelor of Science in Computer Science",
    courseWork: [
      "Data Structures and Algorithms",
      "Object Oriented Programming",
      "Software Engineering",
      "Networking",
      "Operating Systems",
    ],
  },
];

export default function EducationSection() {
  return (
    <section className={styles.education}>
      <h2 className={styles.header}>Education</h2>
      {education.map((data, index) => (
        <EducationCard key={index} {...data} />
      ))} 
    </section>
  );
}
