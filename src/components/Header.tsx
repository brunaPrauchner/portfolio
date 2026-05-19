import { useEffect, useState } from 'react'
import cvPdf from '../assets/myCV-Bruna-2026.pdf'
import roundedLogo from '../assets/rounded-logo.png'
import { navLinks } from '../data'
import { DownloadIcon } from './icons'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 8)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
    }
  }, [])

  return (
    <header className={isScrolled ? 'site-header site-header-scrolled' : 'site-header'}>
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
