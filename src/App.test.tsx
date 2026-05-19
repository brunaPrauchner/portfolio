import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { experiences, featuredProjects, navLinks } from './data'

function renderApp() {
  return render(<App />)
}

describe('App', () => {
  it('renders without crashing', () => {
    renderApp()

    expect(screen.getByRole('heading', { level: 1, name: /bruna\s*prauchner/i })).toBeInTheDocument()
  })

  it('renders the main portfolio sections', () => {
    const { container } = renderApp()

    expect(screen.getByRole('heading', { level: 1, name: /bruna\s*prauchner/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /work experience/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /featured projects/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(container.querySelector('#home')).toBeInTheDocument()
    expect(container.querySelector('#about')).toBeInTheDocument()
    expect(container.querySelector('#work-experience')).toBeInTheDocument()
    expect(container.querySelector('#projects')).toBeInTheDocument()
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('points navigation links to their configured destinations', () => {
    renderApp()

    const navigation = screen.getByRole('navigation', { name: /main navigation/i })

    navLinks.forEach((link) => {
      const navLink = within(navigation).getByRole('link', { name: link.label })

      expect(navLink).toHaveAttribute('href', link.href)

      if (link.external) {
        expect(navLink).toHaveAttribute('target', '_blank')
        expect(navLink).toHaveAttribute('rel', 'noreferrer')
      }
    })
  })

  it('renders Download CV links that point to the CV file', () => {
    renderApp()

    const downloadLinks = screen.getAllByRole('link', { name: /download cv/i })

    expect(downloadLinks.length).toBeGreaterThan(0)
    downloadLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', expect.stringContaining('myCV-Bruna-2026'))
      expect(link).toHaveAttribute('download')
    })
  })

  it('renders work experience entries from data', () => {
    renderApp()

    experiences.forEach((experience) => {
      expect(screen.getByRole('heading', { name: experience.company })).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: experience.role })).toBeInTheDocument()
    })
  })

  it('renders featured project entries from data', () => {
    renderApp()

    featuredProjects.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument()
      expect(screen.getByText(project.description)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: `${project.title} on GitHub` })).toHaveAttribute(
        'href',
        project.githubUrl,
      )
    })
  })
})
