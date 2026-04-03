import { useMemo, useState } from 'react'
import type { CurriculumSemester, CurriculumYear } from '../data/landingContent'
import { CourseCard } from './ui/CourseCard'

type CurriculumSectionProps = {
  years: CurriculumYear[]
}

export function CurriculumSection({ years }: CurriculumSectionProps) {
  const [activeYearId, setActiveYearId] = useState(years[0]?.id ?? '')
  const [activeSemesterId, setActiveSemesterId] = useState(years[0]?.semesters[0]?.id ?? '')

  const activeYear = useMemo(
    () => years.find((year) => year.id === activeYearId) ?? years[0],
    [activeYearId, years],
  )

  const activeSemester = useMemo<CurriculumSemester | undefined>(
    () =>
      activeYear?.semesters.find((semester) => semester.id === activeSemesterId) ??
      activeYear?.semesters[0],
    [activeSemesterId, activeYear],
  )

  const activeSemesterTotal = useMemo(
    () =>
      activeSemester?.courses.reduce((total, course) => total + course.ects, 0) ?? 0,
    [activeSemester],
  )

  if (!activeYear || !activeSemester) {
    return null
  }

  const handleYearChange = (yearId: string) => {
    const nextYear = years.find((year) => year.id === yearId)

    setActiveYearId(yearId)
    setActiveSemesterId(nextYear?.semesters[0]?.id ?? '')
  }

  return (
    <section className="section section--surface section--curriculum" id="curriculum">
      <div className="curriculum__header reveal" data-reveal>
        <h2 className="curriculum__section-title">The IS Curriculum</h2>
        <p className="curriculum__section-copy">
          Browse the Information Systems curriculum by year and semester.
        </p>
      </div>

      <div className="tabs reveal" data-reveal style={{ transitionDelay: '90ms' }} role="tablist" aria-label="Curriculum years">
        {years.map((year) => {
          const isActive = year.id === activeYear.id

          return (
            <button
              aria-selected={isActive}
              className={['tab', isActive ? 'tab--active' : ''].filter(Boolean).join(' ')}
              key={year.id}
              onClick={() => handleYearChange(year.id)}
              role="tab"
              type="button"
            >
              {year.label}
            </button>
          )
        })}
      </div>

      <div className="curriculum__content">
        <div className="curriculum__intro reveal is-visible" data-reveal key={activeYear.id}>
          <p className="curriculum__label">{activeYear.label}</p>
          <h3 className="curriculum__headline">{activeYear.headline}</h3>
          <p className="curriculum__description">{activeYear.description}</p>
        </div>

        <div className="curriculum__semester-tabs" role="tablist" aria-label={`${activeYear.label} semesters`}>
          {activeYear.semesters.map((semester) => {
            const isActive = semester.id === activeSemester.id

            return (
              <button
                aria-selected={isActive}
                className={[
                  'tab',
                  'tab--semester',
                  isActive ? 'tab--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                key={semester.id}
                onClick={() => setActiveSemesterId(semester.id)}
                role="tab"
                type="button"
              >
                {semester.label}
              </button>
            )
          })}
        </div>

        <div className="curriculum__semester-meta content-swap" key={`${activeYear.id}-${activeSemester.id}`}>
          <div className="curriculum__semester-summary">
            <p className="curriculum__semester-label">
              {activeYear.label} {activeSemester.label}
            </p>
            <p className="curriculum__semester-total">{activeSemesterTotal} ECTS Total</p>
          </div>

          {activeSemester.note ? (
            <p className="curriculum__semester-note">{activeSemester.note}</p>
          ) : null}
        </div>

        <div className="course-grid content-swap" key={activeSemester.id}>
          {activeSemester.courses.map((course, index) => (
            <div
              className="reveal is-visible"
              data-reveal
              key={course.id}
              style={{ transitionDelay: `${Math.min(index * 55, 220)}ms` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
