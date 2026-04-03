import type { HeroContent } from '../data/landingContent'
import { Button } from './ui/Button'
import { BrandLogo } from './ui/BrandLogo'
import { TelegramButton } from './ui/TelegramButton'

type HeroSectionProps = {
  content: HeroContent
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="section section--hero" id="top">
      <div className="hero">
        <div className="hero__content reveal" data-reveal style={{ transitionDelay: '40ms' }}>
          <div className="hero__brand">
            <BrandLogo className="hero__brand-logo" size="xl" />

            <div className="hero__brand-copy">
              <p className="hero__eyebrow">{content.eyebrow}</p>
              <p className="hero__brand-text">{content.supportingText}</p>
            </div>
          </div>
          <h1 className="hero__title">
            {content.titleLeading} <span className="hero__title-accent">{content.titleAccent}</span>
          </h1>
          <p className="hero__description">{content.description}</p>

          <div className="hero__actions">
            <TelegramButton className="hero__telegram" />
            {content.ctas.map((cta) => (
              <Button className="hero__button" href={cta.href} key={cta.label} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>

        <aside className="hero__quote-card reveal" data-reveal style={{ transitionDelay: '140ms' }}>
          <div className="hero__quote-header">
            <img
              alt={content.quoteCard.imageAlt}
              className="hero__quote-image"
              height="1005"
              loading="eager"
              sizes="68px"
              src={content.quoteCard.imageSrc}
              width="974"
            />

            <div className="hero__quote-profile">
              <div className="hero__quote-meta">
                <p className="hero__quote-name">{content.quoteCard.name}</p>
                <p className="hero__quote-role">{content.quoteCard.headline}</p>
                <p className="hero__quote-current-role">{content.quoteCard.currentRole}</p>
                <p className="hero__quote-location">{content.quoteCard.location}</p>
              </div>

              <a
                aria-label={`Open LinkedIn profile for ${content.quoteCard.name}`}
                className="hero__quote-link"
                href={content.quoteCard.linkedinUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.95 1.95 0 1 0-3.9 0 1.95 1.95 0 0 0 3.9 0ZM20.44 12.88c0-3.45-1.84-5.05-4.29-5.05-1.98 0-2.87 1.09-3.36 1.86V8.5H9.41c.04.79 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.38 1.93-1.38 1.36 0 1.9 1.04 1.9 2.56V20h3.38v-7.12Z" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <p className="hero__quote-text">{content.quoteCard.about}</p>
          <span aria-hidden="true" className="hero__quote-rule" />
        </aside>
      </div>
    </section>
  )
}
