import Link from "next/link";
import styles from "./ExperienceSection.module.css"

export default function ExperienceCard({ title, employer, link, time, duties }: {
  title: string,
  employer: string,
  link: string,
  time: string,
  duties: string[],
}) {
  return (
    <section className={styles.details}>
      <div className={styles.title}>
        <h3>
          {title} <Link href={link}>@ {employer}</Link>
        </h3>
        <div className={styles.subheading}>{time}</div>
      </div>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </section>
  );
}
