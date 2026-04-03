import type { CareerPath, GrowthMetric } from '../data/landingContent'
import { CareerCard } from './ui/CareerCard'
import { Chip } from './ui/Chip'

type CareerSectionProps = {
  growthMetric: GrowthMetric
  paths: CareerPath[]
  skills: string[]
}

export function CareerSection({
  growthMetric,
  paths,
  skills,
}: CareerSectionProps) {
  return (
    <section className="section section--surface section--career" id="career">
      <div className="career-heading reveal" data-reveal>
        <h2 className="career-heading__title">Career &amp; Skills Compass</h2>
        <p className="career-heading__copy">
          Explore Information Systems roles and the job domains connected to the program.
        </p>
      </div>

      <div className="career-layout">
        <div className="career-main">
          <div className="career-subheading reveal" data-reveal style={{ transitionDelay: '90ms' }}>
            <p className="career-subheading__eyebrow">Information Systems Roles</p>
            <h3 className="career-subheading__title">
              Specialist, leadership, governance, and deployment tracks in the field.
            </h3>
          </div>

          <div className="career-grid">
            {paths.map((path, index) => (
              <div
                className="reveal"
                data-reveal
                key={path.id}
                style={{ transitionDelay: `${120 + (index % 6) * 55}ms` }}
              >
                <CareerCard path={path} />
              </div>
            ))}
          </div>
        </div>

        <aside className="career-aside">
          <div className="skills-card reveal" data-reveal style={{ transitionDelay: '150ms' }}>
            <div className="skills-card__header">
              <h3 className="skills-card__title">Soft Skills / Job Domains</h3>
              <p className="skills-card__copy">
                Core management, development, analysis, infrastructure, and data domains linked to Information Systems careers.
              </p>
            </div>

            <div className="chip-cloud">
              {skills.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>

            <div className="metric-card metric-card--inline">
              <p className="metric-card__label">{growthMetric.label}</p>
              <p className="metric-card__value">{growthMetric.value}</p>
              <p className="metric-card__description">{growthMetric.description}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
