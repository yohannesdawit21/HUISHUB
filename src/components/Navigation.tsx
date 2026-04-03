import { useEffect, useState } from 'react'

type NavIconName = 'home' | 'curriculum' | 'career' | 'join'

type NavItem = {
  href: string
  icon: NavIconName
  label: string
  mobileLabel?: string
}

const navItems: NavItem[] = [
  { href: '#top', icon: 'home', label: 'Home' },
  { href: '#curriculum', icon: 'curriculum', label: 'Curriculum', mobileLabel: 'Courses' },
  { href: '#career', icon: 'career', label: 'Career' },
  { href: '#registration', icon: 'join', label: 'Join Us', mobileLabel: 'Join' },
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
    case 'join':
      return (
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 11.75A3.25 3.25 0 1 0 12 5.25a3.25 3.25 0 0 0 0 6.5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M6.5 18c1.55-2.1 3.38-3.15 5.5-3.15S15.95 15.9 17.5 18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M19 7.75h3"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M20.5 6.25v3"
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
        <a className="site-nav__brand" href="#top">
          <span className="site-nav__brand-mark" aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24">
              <path
                d="M6.25 5.75A2.25 2.25 0 0 1 8.5 3.5h8.75v14.25H8.5a2.25 2.25 0 0 0-2.25 2.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="M6.25 5.75v14.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
          </span>
          <span className="site-nav__brand-copy">
            <span className="site-nav__brand-title">HU IS HUB</span>
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
