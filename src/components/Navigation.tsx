import { useEffect, useState } from 'react'
import { BrandLogo } from './ui/BrandLogo'
import { TelegramButton } from './ui/TelegramButton'

type NavIconName = 'about' | 'career' | 'curriculum' | 'home'

type NavItem = {
  href: string
  icon: NavIconName
  label: string
  mobileLabel?: string
}

const navItems: NavItem[] = [
  { href: '#top', icon: 'home', label: 'Home' },
  { href: '#about-is', icon: 'about', label: 'About' },
  { href: '#curriculum', icon: 'curriculum', label: 'Curriculum', mobileLabel: 'Courses' },
  { href: '#career', icon: 'career', label: 'Career' },
]

function NavIcon({ icon }: { icon: NavIconName }) {
  switch (icon) {
    case 'home':
      return (
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            d="M4.75 10.5 12 4.75l7.25 5.75"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M7.25 9.75v8.5h9.5v-8.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      )
    case 'about':
      return (
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 10.25v5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="7.75" r="0.9" fill="currentColor" />
        </svg>
      )
    case 'curriculum':
      return (
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            d="M7.25 6.75A2.75 2.75 0 0 1 10 4h6.75v14H10a2.75 2.75 0 0 0-2.75 2.75"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M7.25 6.75V20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      )
    case 'career':
      return (
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            d="M9 7V5.75A1.75 1.75 0 0 1 10.75 4h2.5A1.75 1.75 0 0 1 15 5.75V7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M5.25 7h13.5A1.25 1.25 0 0 1 20 8.25v8.5A1.25 1.25 0 0 1 18.75 18H5.25A1.25 1.25 0 0 1 4 16.75v-8.5A1.25 1.25 0 0 1 5.25 7Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M4 11.5h16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      )
  }
}

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
    <>
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

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <a
            className={[
              'mobile-nav__link',
              activeHref === item.href ? 'mobile-nav__link--active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-current={activeHref === item.href ? 'page' : undefined}
            href={item.href}
            key={item.href}
          >
            <span className="mobile-nav__icon">
              <NavIcon icon={item.icon} />
            </span>
            <span className="mobile-nav__label">{item.mobileLabel ?? item.label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
