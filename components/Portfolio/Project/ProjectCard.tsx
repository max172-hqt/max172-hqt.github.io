import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./ProjectSection.module.css";

export default function ProjectCard({
  title,
  // imageSrc,
  imageDescription,
  descriptions,
  link,
  buttonText = "Visit Website",
}: {
  title: string;
  imageSrc: StaticImageData;
  imageDescription: string;
  descriptions: string[];
  link: string,
  buttonText?: string;
}) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </h3>
      <div className={styles.cardContainer}>
        <Image src={imageSrc} alt={imageDescription} />
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
    </div>
  );
}
