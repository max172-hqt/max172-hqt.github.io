import Image from "next/image";
import styles from "./ProjectSection.module.css";

export default function ProjectCard({
  title,
  imageSrc,
  imageDescription,
  descriptions,
  link,
  buttonText = "Visit Website",
  imageVertical = false,
}: {
  title: string;
  imageSrc: string;
  imageDescription: string;
  descriptions: string[];
  link: string | null;
  buttonText?: string;
  imageVertical?: boolean;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            <>
              {title}
            </>
          )}
        </h3>
        <div className={styles.content}>
          {descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
          <p>
            {link && (
              <a
                href={link}
                className={styles.button}
                target="_blank"
                rel="noreferrer"
              >
                {buttonText}
              </a>
            )}
          </p>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={imageSrc}
          alt={imageDescription}
          width={500}
          height={500}
          className={imageVertical ? styles.imageVertical : undefined}
        />
      </div>
    </div>
  );
}
