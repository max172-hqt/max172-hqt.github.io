import ExperienceCard from "./ExperienceCard";
import styles from "./ExperienceSection.module.css"

const experience = [
  {
    title: 'Web Developer',
    link: '',
    employer: 'Power In Aging',
    time: 'Sep 2022 - Present',
    duties: [
      'Design and build a website using Wordpress',
      'Develop membership and authentication features using Memberpress',
    ]
  },
  {
    title: 'Software Engineer',
    link: '',
    employer: 'Got It AI',
    time: 'Aug 2019 - Aug 2022',
    duties: [
      'Developed visualizations and analytics dashboard for the main A.I. product',
      'Designed unit and integration tests and achieved 90% code coverage',
      'Implemented a monitoring and logging system to verify business impact features periodically',
      'Supervised and mentored Test Automation team interns and wrote training documents',
      'Technology stack: JavaScript/TypeScript, React, D3, Cypress, Selenium, AWS'
    ]
  },
  {
    title: 'Software Engineer in Test',
    link: '',
    employer: 'ITN',
    time: 'July 2018 - June 2019',
    duties: [
      'Reduced manual testing effort by 80% by implementing a Selenium test suite to verify main features of a web application publishing medical studies',
      'Wrote Java program to scrape over 1000 reports and datasets across 50 studies',
      'Implemented continuous delivery pipeline to run the test suite when deploying new features',
      'Technology stack: Java, Selenium, Cucumber, Jenkins',
    ]
  },
]

export default function ExperienceSection() {
  return (
    <section className={styles.section}>
      <h2>Experience</h2>
      {experience.map(job => (
        <ExperienceCard key={job.time} {...job} />
      ))}
    </section>
  );
}
