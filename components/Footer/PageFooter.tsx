import styles from './Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <a
              href="https://github.com/max172-hqt"
              target="_blank"
              className="icon-button"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/huytran172/"
              className="icon-button"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="mailto:huytran172@gmail.com"
              className="icon-button"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </li>
        </ul>
      </div>
      <div>Developed by Max with NextJS</div>
    </footer>
  );
}
