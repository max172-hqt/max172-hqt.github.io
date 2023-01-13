import Image from "next/image";
import styles from "./ProjectSection.module.css";

export default function ProjectCard({
  title,
  imageSrc,
  imageDescription,
  descriptions,
  link,
  buttonText = "Visit Website",
}: {
  title: string;
  imageSrc: string;
  imageDescription: string;
  descriptions: string[];
  link: string;
  buttonText?: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <div className={styles.content}>
          {descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
          <p>
            <a
              href={link}
              className={styles.button}
              target="_blank"
              rel="noreferrer"
            >
              {buttonText}
            </a>
          </p>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={imageSrc} alt={imageDescription} width={500} height={500} />
      </div>
    </div>
  );
}
