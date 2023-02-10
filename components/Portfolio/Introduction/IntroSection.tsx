import Image from "next/image";
import styles from "./IntroSection.module.css";
import profilePic from "public/Personal Avatar.jpeg";
import { useEffect, useState } from "react";

export default function IntroSection() {
  return (
    <section className={styles.introBanner}>
      <h1 className={styles.introText}>Hello, I&apos;m Max</h1>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <Image src={profilePic} alt="Picture of Max" />
        </div>
        <div className={styles.content}>
          <p>
            I&apos;m a Frontend Engineer with skills in{" "}
            <span>React, NodeJS, Web Design and Software Testing</span>.
            Currently, I am a student at Fanshawe College in Ontario, Canada; taking the
            Post-graduate program in Mobile Application Development.{" "}
          </p>
          <p>
            In my previous work, I mainly worked with Frontend technologies to
            build interactive dashboards and visualizations. 
            Now I&apos;m studying to develop mobile applications in iOS and Android, with various technologies. 
            I love studying, building side projects, problem solving and taking on freelancing web projects.
          </p>
          <div className={styles.technologies}>
            <p>
              Here are a few technologies that I&apos;ve been working with
              recently:
            </p>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>Cypress</li>
              <li>Testing Library</li>
              <li>NodeJS</li>
              <li>Selenium</li>
              <li>Wordpress</li>
              <li>AWS</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
