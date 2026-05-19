import { featuredProjects, type FeaturedProject } from '../data'
import { GithubIcon } from './icons'
import { IconTile } from './shared/IconTile'
import { TechPill } from './shared/TechPill'

function ProjectRow({ project }: { project: FeaturedProject }) {
  return (
    <article className="featured-project-row">
      <IconTile className="project-icon" icon={project.icon} />

      <div className="project-summary">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>
      </div>

      <a
        className="project-github-link"
        href="https://github.com/brunaPrauchner"
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} on GitHub`}
      >
        <GithubIcon />
        <span>GitHub</span>
      </a>
    </article>
  )
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="content-band featured-projects-section">
      <div className="featured-projects-inner">
        <h2 className="featured-projects-title">
          <span>Featured Projects</span>
          <span className="section-flower" aria-hidden="true">
            {'\u273f'}
          </span>
        </h2>

        <div className="featured-project-list">
          {featuredProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
