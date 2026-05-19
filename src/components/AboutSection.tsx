import { skillGroups } from '../data'
import { ChatBubbleIcon, EnvelopeIcon, LeafPlant, LocationPinIcon } from './icons'
import { SectionHeading } from './shared/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="content-band about-section">
      <div className="about-inner">
        <div className="about-left">
          <div className="plant-wrap" aria-hidden="true">
            <span className="plant-orb"></span>
            <LeafPlant />
          </div>

          <div className="about-copy">
            <SectionHeading>ABOUT ME</SectionHeading>
            <p>
              I’m a computer scientist with a passion for backend development,
              APIs and system design.
            </p>
            <p>
              I’m always curious, love solving problems and enjoy turning ideas
              into real applications.
            </p>

            <div className="about-info" aria-label="About details">
              <p className="about-info-location">
                <LocationPinIcon />
                <span>Based in Vancouver, Canada</span>
              </p>
              <p className="about-info-envelope">
                <EnvelopeIcon />
                <span>Open to opportunities</span>
              </p>
              <p className="about-info-connect">
                <ChatBubbleIcon />
                <a
                  className="connect-text"
                  href="https://www.linkedin.com/in/brunaprauchner"
                  target="_blank"
                  rel="noreferrer"
                >
                  Let’s connect!
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="work-with">
          <SectionHeading>WHAT I WORK WITH</SectionHeading>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
