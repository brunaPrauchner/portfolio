import { experiences, type Experience } from '../data'
import { IconTile } from './shared/IconTile'
import { TechPill } from './shared/TechPill'

function ExperienceRow({ experience }: { experience: Experience }) {
  return (
    <article className="experience-row">
      <div className="experience-company">
        <IconTile className="company-icon" icon={experience.icon} />
        <h3 className="company-name">{experience.company}</h3>
      </div>

      <div className="experience-details">
        <div className="experience-role-line">
          <h4 className="role-title">{experience.role}</h4>
          <p className="period">{experience.period}</p>
        </div>
        <ul>
          {experience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="experience-tech">
          {experience.tech.map((tech) => (
            <TechPill className="tech-pill" key={tech}>
              {tech}
            </TechPill>
          ))}
        </div>
      </div>

      <p className="experience-period period">{experience.period}</p>
    </article>
  )
}

export function WorkExperience() {
  return (
    <section id="work-experience" className="content-band work-experience-section work-experience">
      <div className="work-experience-inner">
        <h2 className="work-experience-title">
          <span>Work Experience</span>
          <span className="section-flower" aria-hidden="true">
            {'\u273f'}
          </span>
        </h2>

        <div className="experience-table" aria-label="Work experience">
          <div className="experience-header" aria-hidden="true">
            <span className="column-label">Company</span>
            <span></span>
            <span className="column-label">Period</span>
          </div>

          {experiences.map((experience) => (
            <ExperienceRow experience={experience} key={experience.company} />
          ))}
        </div>
      </div>
    </section>
  )
}
