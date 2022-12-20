import styles from "./EducationSection.module.css";

export default function EducationCard({ schoolName, time, major, courseWork }: {
  schoolName: string,
  time: string,
  major: string,
  courseWork: string[],
}) {
  return (
    <section className={styles.details}>
      <div className={styles.title}>
        <h3>{schoolName}</h3>
        <div className={styles.subheading}>{time}</div>
        <p>{major}</p>
      </div>
      <ul>
        {courseWork.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </section>
  );
}
