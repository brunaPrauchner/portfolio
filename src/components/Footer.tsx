import roundedLogo from '../assets/rounded-logo.png'
import { GithubIcon, LinkedinIcon } from './icons'

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-inner">
        <img className="footer-logo" src={roundedLogo} alt="" />
        <p>{'\u00a9'} 2024 Bruna Prauchner. All rights reserved.</p>
        <div className="social-links" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/brunaprauchner"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/brunaPrauchner"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
