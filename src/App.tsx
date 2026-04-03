import { CareerSection } from './components/CareerSection'
import { CurriculumSection } from './components/CurriculumSection'
import { HeroSection } from './components/HeroSection'
import { Navigation } from './components/Navigation'
import { OverviewSection } from './components/OverviewSection'
import { RegistrationSection } from './components/RegistrationSection'
import {
  careerPaths,
  curriculumYears,
  footerLinks,
  growthMetric,
  heroContent,
  overviewContent,
  registrationYearOptions,
  skillsCloud,
} from './data/landingContent'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

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
        <RegistrationSection yearOptions={registrationYearOptions} />
      </main>

      <footer className="page-footer reveal" data-reveal style={{ transitionDelay: '120ms' }}>
        <div className="page-footer__brand">
          <p className="page-footer__title">HU IS HUB</p>
          <p className="page-footer__copy">
            Built for the Haramaya University Information Systems student community.
          </p>
        </div>

        <nav aria-label="Footer navigation" className="page-footer__links">
          {footerLinks.map((link) => (
            <a className="page-footer__link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  )
}

export default App
