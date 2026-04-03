import type { OverviewContent } from '../data/landingContent'
import { SectionHeading } from './ui/SectionHeading'

type OverviewSectionProps = {
  content: OverviewContent
}

export function OverviewSection({ content }: OverviewSectionProps) {
  return (
    <section className="section section--surface section--overview" id="about-is">
      <div className="overview__header reveal" data-reveal>
        <SectionHeading
          description={content.description}
          eyebrow={content.eyebrow}
          title={content.title}
        />
      </div>

      <div className="overview__grid">
        {content.cards.map((card, index) => (
          <article
            className="overview-card reveal"
            data-reveal
            key={card.id}
            style={{ transitionDelay: `${120 + index * 90}ms` }}
          >
            <p className="overview-card__eyebrow">{card.eyebrow}</p>
            <h3 className="overview-card__title">{card.title}</h3>
            <p className="overview-card__description">{card.description}</p>

            <ul className="overview-card__list">
              {card.bullets.map((bullet) => (
                <li className="overview-card__item" key={bullet}>
                  <span aria-hidden="true" className="overview-card__dot" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
