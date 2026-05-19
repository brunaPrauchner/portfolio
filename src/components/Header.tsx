import cvPdf from '../assets/myCV-Bruna-2026.pdf'
import roundedLogo from '../assets/rounded-logo.png'
import { navLinks } from '../data'
import { DownloadIcon } from './icons'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Bruna Prauchner home">
        <img className="header-logo" src={roundedLogo} alt="" />
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            href={link.href}
            key={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="cv-button" href={cvPdf} download>
        Download CV
        <DownloadIcon />
      </a>
    </header>
  )
}
