import brunaProfile from '../assets/bruna-profile.jpg'
import cvPdf from '../assets/myCV-Bruna-2026.pdf'
import { DownloadIcon } from './icons'

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="intro-title">
      <div className="hero-copy">
        <div className="welcome-row">
          <p className="eyebrow">WELCOME!</p>
          <span className="flower flower-small" aria-hidden="true">
            {'\u273f'}
          </span>
        </div>
        <h1 id="intro-title">
          <span>Bruna</span>
          <span>Prauchner</span>
        </h1>
        <p className="role-line">Software Engineer</p>
        <p className="location-line">📍 Vancouver, Canada.</p>
        <div className="hero-actions">
          <a className="primary-action" href={cvPdf} download>
            Download CV
            <DownloadIcon />
          </a>
        </div>
      </div>

      <div className="hero-portrait" aria-label="Portrait of Bruna Prauchner">
        <span className="blob blob-one" aria-hidden="true"></span>
        <span className="blob blob-two" aria-hidden="true"></span>
        <span className="loop loop-one" aria-hidden="true"></span>
        <span className="loop loop-two" aria-hidden="true"></span>
        <span className="flower flower-one" aria-hidden="true">
          {'\u273f'}
        </span>
        <span className="dot-grid" aria-hidden="true"></span>
        <img src={brunaProfile} alt="Bruna Prauchner" />
      </div>
    </section>
  )
}
