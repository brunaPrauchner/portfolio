import './App.css'

function FoxLogo() {
  return (
    <svg className="fox-logo" viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M8 10 24 22h16L56 10l-6 24-18 20L14 34 8 10Z"
        fill="#ee7d77"
      />
      <path d="M18 32 32 54 46 32 38 24H26l-8 8Z" fill="#f19b83" />
      <path d="M24 22 32 31l8-9H24Z" fill="#fff7ee" />
      <path d="M13 15 24 22l-7 5-4-12ZM51 15 40 22l7 5 4-12Z" fill="#d95c67" />
      <path d="M23 33h5M36 33h5" stroke="#102b46" strokeWidth="3" strokeLinecap="round" />
      <path d="M29 42h6l-3 4-3-4Z" fill="#102b46" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 3v4a2 2 0 0 0 2 2h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M18 21H8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h6l6 6v8a4 4 0 0 1-2 3.46"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M12 11v7m0 0 3-3m-3 3-3-3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.9 8.8H3.7V20h3.2V8.8ZM5.3 3.4a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM20.3 13.6c0-3-1.6-5-4.2-5-1.9 0-2.8 1-3.3 1.8V8.8H9.6V20h3.2v-5.8c0-1.6.8-2.7 2.2-2.7 1.3 0 2 1 2 2.7V20h3.3v-6.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.2 10.2 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.4 4.9-4.7 5.2.4.3.8 1 .8 2v2.9c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6Zm1.8 1.8L12 13l6.2-5.2M5 17l4.6-4m9.4 4-4.6-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Bruna Prauchner home">
          <FoxLogo />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="cv-button" href="/Bruna-Prauchner-CV.pdf" download>
          Download CV
          <DownloadIcon />
        </a>
      </header>

      <main id="home" className="home-page">
        <section className="hero-section" aria-labelledby="intro-title">
          <p className="eyebrow">Portfolio</p>
          <h1 id="intro-title">Bruna Prauchner</h1>
          <p>
            Frontend-focused developer building clean, reliable interfaces with
            React, TypeScript, and thoughtful user experience.
          </p>
        </section>

        <section id="about" className="content-band">
          <h2>About</h2>
          <p>
            This space is ready for your introduction, project highlights, and
            the kind of work you want people to hire you for.
          </p>
        </section>

        <section id="projects" className="content-band">
          <h2>Projects</h2>
          <p>Add your featured projects here.</p>
        </section>

        <section id="skills" className="content-band">
          <h2>Skills</h2>
          <p>React, TypeScript, JavaScript, HTML, CSS, GitHub Pages.</p>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="footer-inner">
          <FoxLogo />
          <p>© 2024 Bruna Prauchner. All rights reserved.</p>
          <div className="social-links" aria-label="Social links">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://github.com/brunaPrauchner" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="mailto:prauchner.bruna@gmail.com" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
