import { CareerSection } from './components/CareerSection'
import { CurriculumSection } from './components/CurriculumSection'
import { HeroSection } from './components/HeroSection'
import { Navigation } from './components/Navigation'
import { OverviewSection } from './components/OverviewSection'
import {
  footerDetails,
  careerPaths,
  curriculumYears,
  footerLinks,
  growthMetric,
  heroContent,
  overviewContent,
  skillsCloud,
} from './data/landingContent'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { BrandLogo } from './components/ui/BrandLogo'

function App() {
  useRevealOnScroll()

  return (
    <div className="page-shell">
      <Navigation />

      <main className="page">
        <HeroSection content={heroContent} />
        <OverviewSection content={overviewContent} />
        <CurriculumSection years={curriculumYears} />
        <CareerSection
          paths={careerPaths}
          skills={skillsCloud}
          growthMetric={growthMetric}
        />
      </main>

      <footer className="page-footer reveal" data-reveal style={{ transitionDelay: '120ms' }}>
        <div className="page-footer__brand">
          <BrandLogo className="page-footer__logo" size="md" />

          <div className="page-footer__brand-copy">
            <p className="page-footer__title">HUISHUB</p>
            <p className="page-footer__copy">
              A digital academic community for Haramaya University Information Systems students.
            </p>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="page-footer__links">
          {footerLinks.map((link) => (
            <a className="page-footer__link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="page-footer__details" aria-label="Platform details">
          {footerDetails.map((detail) => (
            <article className="page-footer__detail-card" key={detail.label}>
              <p className="page-footer__detail-label">{detail.label}</p>
              <p className="page-footer__detail-copy">{detail.description}</p>
            </article>
          ))}
        </div>

        <p className="page-footer__rights">
          © 2026 HUISHUB. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
