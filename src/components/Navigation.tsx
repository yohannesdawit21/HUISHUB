import { useEffect, useState } from 'react'
import { BrandLogo } from './ui/BrandLogo'
import { TelegramButton } from './ui/TelegramButton'

type NavItem = {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: '#top', label: 'Home' },
  { href: '#about-is', label: 'About' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#career', label: 'Career' },
]

export function Navigation() {
  const [activeHref, setActiveHref] = useState(navItems[0]?.href ?? '#top')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) {
      return
    }

    const syncWithHash = () => {
      if (navItems.some((item) => item.href === window.location.hash)) {
        setActiveHref(window.location.hash)
      }
    }

    syncWithHash()

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]

        if (activeEntry?.target.id) {
          setActiveHref(`#${activeEntry.target.id}`)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('hashchange', syncWithHash)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncWithHash)
    }
  }, [])

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#top">
          <BrandLogo className="site-nav__brand-logo" size="sm" />
          <span className="site-nav__brand-copy">
            <span className="site-nav__brand-title">HUISHUB</span>
            <span className="site-nav__brand-subtitle">
              Haramaya University Information Systems Community
            </span>
          </span>
        </a>

        <nav className="site-nav__links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={[
                'site-nav__link',
                activeHref === item.href ? 'site-nav__link--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-current={activeHref === item.href ? 'page' : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <TelegramButton className="site-nav__telegram" compact />
      </div>
    </header>
  )
}
